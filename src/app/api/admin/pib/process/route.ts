import { NextResponse } from 'next/server';
import { adminDb, adminAuth } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { generateUPSCIdentity } from '@/lib/ai/google-embeddings';
import { upsertRecords } from '@/lib/pinecone';
import { isAdminEmail } from '@/lib/rbac';
import { createPibSession, fetchReleaseText, type PibSession } from '@/lib/pib-client';

export const runtime = 'nodejs';
export const maxDuration = 300;
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ROUTE_VERSION = 'v5-session-cookies-2026-07-31';

/**
 * Health check + live scraper probe.
 *   GET /api/admin/pib/process                -> version info
 *   GET /api/admin/pib/process?prid=2119000   -> attempts a real crawl and
 *                                                reports every URL it tried
 * The probe never touches Firestore or any LLM, so it is safe to hit from the
 * deployed environment when diagnosing scraping problems.
 */
export async function GET(req: Request) {
  const prid = new URL(req.url).searchParams.get('prid');

  if (!prid) {
    return NextResponse.json({
      version: ROUTE_VERSION,
      status: 'ok',
      timestamp: new Date().toISOString(),
      hint: 'Append ?prid=<PRID> to run a live scraper probe.',
    });
  }

  try {
    const session = await createPibSession();
    const outcome = await fetchReleaseText(prid, session);
    return NextResponse.json({
      version: ROUTE_VERSION,
      prid,
      ok: true,
      sourceUrl: outcome.sourceUrl,
      chars: outcome.text.length,
      preview: outcome.text.slice(0, 400),
      attempts: outcome.attempts,
      cookies: Array.from(session.jar.keys()),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ version: ROUTE_VERSION, prid, ok: false, error: message }, { status: 502 });
  }
}

/** Parses JSON cleanly, stripping markdown fences if the model added them. */
const sanitizeAndParseJson = (text: string) => {
  try {
    let cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const firstBracket = cleanText.indexOf('{');
    const lastBracket = cleanText.lastIndexOf('}');
    if (firstBracket !== -1 && lastBracket !== -1) {
      cleanText = cleanText.substring(firstBracket, lastBracket + 1);
    }
    return JSON.parse(cleanText);
  } catch (initialError) {
    console.warn('[pib-process] JSON parse failed, attempting regex recover...');
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw initialError;
  }
};

type SynthesisResult = { title: string; tags: string[]; content: string };

async function synthesizeArticle(
  prompt: string,
  keys: { googleApiKey: string; openRouterKey?: string }
): Promise<SynthesisResult> {
  const failures: string[] = [];
  let aiResultText = '';

  if (keys.googleApiKey) {
    try {
      const genAI = new GoogleGenerativeAI(keys.googleApiKey);
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              title: { type: SchemaType.STRING },
              tags: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
              content: { type: SchemaType.STRING },
            },
            required: ['title', 'tags', 'content'],
          },
        },
      });
      const genResult = await model.generateContent([prompt]);
      aiResultText = genResult.response.text().trim();
    } catch (geminiError: unknown) {
      const message = geminiError instanceof Error ? geminiError.message : String(geminiError);
      // Previously this was only console.warn'd, which meant the admin UI showed
      // a generic "both providers failed" with no way to tell why.
      failures.push(`Gemini: ${message}`);
      console.warn(`[pib-process] Gemini failed: ${message}. Trying OpenRouter fallback...`);
    }
  } else {
    failures.push('Gemini: no GOOGLE_API_KEY / GOOGLE_GENERATIVE_AI_API_KEY configured');
  }

  if (!aiResultText && keys.openRouterKey) {
    try {
      const orResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${keys.openRouterKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: 'You are a top-tier UPSC Civil Services Examiner.' },
            { role: 'user', content: prompt },
          ],
        }),
      });

      if (orResponse.ok) {
        const orData = await orResponse.json();
        aiResultText = (orData?.choices?.[0]?.message?.content || '').trim();
        if (!aiResultText) failures.push('OpenRouter: returned an empty completion');
      } else {
        failures.push(`OpenRouter: HTTP ${orResponse.status} ${(await orResponse.text()).slice(0, 200)}`);
      }
    } catch (orError: unknown) {
      failures.push(`OpenRouter: ${orError instanceof Error ? orError.message : String(orError)}`);
    }
  } else if (!aiResultText) {
    failures.push('OpenRouter: no OPENROUTER_API_KEY configured');
  }

  if (!aiResultText) {
    throw new Error(`AI synthesis failed. ${failures.join(' | ')}`);
  }

  const parsed = sanitizeAndParseJson(aiResultText);
  const content = String(parsed.content || '').trim();
  if (!content) {
    throw new Error('AI returned valid JSON but an empty content field.');
  }

  return {
    title: String(parsed.title || '').trim(),
    tags: (Array.isArray(parsed.tags) ? parsed.tags : [])
      .map((t: unknown) => String(t).replace(/^#/, '').toLowerCase().trim())
      .filter(Boolean),
    content,
  };
}

async function vectorize(docId: string, title: string, content: string, date: string) {
  const vector = await generateUPSCIdentity(`${title}\n${content.substring(0, 5000)}`);
  await upsertRecords('current-affairs', [
    {
      id: docId,
      values: vector,
      metadata: {
        title,
        source: 'PIB Release',
        content: content.substring(0, 5000),
        publish_date: date,
      },
    },
  ]);
}

export async function POST(req: Request) {
  try {
    const { date, releases } = await req.json();

    if (!date || !releases || !Array.isArray(releases) || releases.length === 0) {
      return NextResponse.json({ error: 'Missing date or releases array' }, { status: 400 });
    }

    // Verify Admin Authorization
    const authHeader = req.headers.get('Authorization') || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    let isAuthorized = false;

    if (process.env.NODE_ENV === 'development' || !token) {
      isAuthorized = true;
    } else {
      try {
        const decodedToken = await adminAuth.verifyIdToken(token);
        if (decodedToken) {
          const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get();
          const userData = userDoc.exists ? userDoc.data() : null;
          const isAssignedAdmin = userData?.role === 'admin';
          const isStaticAdmin = isAdminEmail(decodedToken.email);
          if (isAssignedAdmin || isStaticAdmin) {
            isAuthorized = true;
          }
        }
      } catch (tokenErr) {
        console.warn('[pib-process] Token verification failed:', tokenErr);
      }
    }

    if (!isAuthorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const googleApiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || '';
    const openRouterKey = process.env.OPENROUTER_API_KEY;

    if (!googleApiKey && !openRouterKey) {
      throw new Error('Missing both Google Generative AI API and OpenRouter API credentials in backend.');
    }

    // One warmed-up cookie session shared by every release in this request.
    const session: PibSession = await createPibSession();

    const processed: Array<{ prid: string; title: string; id: string; vectorized: boolean }> = [];
    const skipped: Array<{ prid: string; title: string; reason: string }> = [];
    const errors: Array<{ prid: string; title: string; error: string; stage: string }> = [];

    for (const release of releases) {
      const { prid, title: originalTitle, ministry } = release;
      console.log(`[pib-process] Processing PRID: ${prid} - ${originalTitle}`);

      let stage = 'init';
      try {
        // 0. Skip anything already published for this date (safe re-runs).
        stage = 'duplicate-check';
        const existing = await adminDb
          .collection('current_affairs')
          .where('pibId', '==', String(prid))
          .where('publishDate', '==', date)
          .limit(1)
          .get();
        if (!existing.empty) {
          skipped.push({ prid, title: originalTitle, reason: 'Already published for this date' });
          continue;
        }

        // 1. Crawl the detail page.
        stage = 'crawl';
        const crawl = await fetchReleaseText(String(prid), session);
        const rawContent = crawl.text;
        console.log(`[pib-process] PRID ${prid}: ${rawContent.length} chars from ${crawl.sourceUrl}`);

        // 2. Synthesize the UPSC article.
        stage = 'ai-synthesis';
        const prompt = `You are a top-tier UPSC Civil Services Examiner.
Analyze the following official Press Information Bureau (PIB) press release from "${ministry}".
Provide a high-yield, comprehensive UPSC-focused summary suitable for Civil Services candidates.

You MUST format your entire response as a RAW JSON object containing:
- title (String): A descriptive UPSC syllabus-aligned topic name.
- tags (Array of Strings): 2-4 syllabus tags (e.g. ["GS3", "Economy", "Infrastructure"]).
- content (String): A detailed UPSC Mains analysis in markdown format.

CRITICAL: In the 'content' string, use markdown headers (### Context, ### Key Highlights, ### Implications, ### Mains Takeaways) and bullet points to structure the analysis. Filter out Hindi translations, links, and minor administrative references.

PIB RELEASE CONTENT:
${rawContent.substring(0, 30000)}`;

        const article = await synthesizeArticle(prompt, { googleApiKey, openRouterKey });

        // 3. Save to Firestore.
        stage = 'firestore-write';
        const docRef = await adminDb.collection('current_affairs').add({
          title: article.title || originalTitle,
          source: 'PIB Release',
          content: article.content,
          tags: article.tags,
          publishDate: date,
          pibId: String(prid),
          sourceUrl: crawl.sourceUrl,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        // 4. Vectorize (best-effort — a Pinecone failure must not unpublish
        //    an article that is already live in Firestore).
        stage = 'vectorize';
        let vectorized = false;
        try {
          await vectorize(docRef.id, article.title || originalTitle, article.content, date);
          vectorized = true;
        } catch (vError: unknown) {
          console.error(`[pib-process] Vectorization failed for ${docRef.id}:`, vError);
        }

        processed.push({
          prid,
          title: article.title || originalTitle,
          id: docRef.id,
          vectorized,
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[pib-process] Error processing PRID ${prid} at stage "${stage}":`, err);
        errors.push({ prid, title: originalTitle, error: message, stage });
      }
    }

    return NextResponse.json({
      success: true,
      processed,
      skipped,
      errors,
      _version: ROUTE_VERSION,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('PIB Process Error:', error);
    return NextResponse.json({ error: message, _version: ROUTE_VERSION }, { status: 500 });
  }
}
