import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const maxDuration = 60; 
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Robust JSON Sanitizer and Parser
const sanitizeAndParseJson = (text: string) => {
  try {
    let cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const firstBracket = cleanText.indexOf('[');
    const lastBracket = cleanText.lastIndexOf(']');
    if (firstBracket !== -1 && lastBracket !== -1) {
      cleanText = cleanText.substring(firstBracket, lastBracket + 1);
    }
    return JSON.parse(cleanText);
  } catch (initialError) {
    console.warn("[pib-scraper] Auto-suggest JSON parse failed, trying regex recover...");
    const match = text.match(/\[[\s\S]*\]/);
    if (match) return JSON.parse(match[0]);
    throw initialError;
  }
};

// Regex helper to extract hidden input values dynamically
function extractAllHiddenFields(html: string): Record<string, string> {
  const fields: Record<string, string> = {};
  const regex = /<input\s+[^>]*type=["']hidden["'][^>]*name=["']([^"']+)["'][^>]*value=["']([^"']*)["']/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    fields[match[1]] = match[2];
  }
  const regex2 = /<input\s+[^>]*name=["']([^"']+)["'][^>]*value=["']([^"']*)["'][^>]*type=["']hidden["']/gi;
  while ((match = regex2.exec(html)) !== null) {
    fields[match[1]] = match[2];
  }
  const regex3 = /<input\s+[^>]*value=["']([^"']*)["'][^>]*name=["']([^"']+)["'][^>]*type=["']hidden["']/gi;
  while ((match = regex3.exec(html)) !== null) {
    fields[match[2]] = match[1];
  }
  return fields;
}

export async function POST(req: Request) {
  try {
    const { date } = await req.json();

    if (!date) {
      return NextResponse.json({ error: "Missing target date string (YYYY-MM-DD)" }, { status: 400 });
    }

    const [year, monthStr, dayStr] = date.split('-');
    if (!year || !monthStr || !dayStr) {
      return NextResponse.json({ error: "Invalid date format. Expected YYYY-MM-DD." }, { status: 400 });
    }

    const day = parseInt(dayStr, 10).toString();
    const month = parseInt(monthStr, 10).toString();
    const cb = Date.now();

    const targetUrl = `https://www.pib.gov.in/Allrel.aspx?reg=3&lang=1&_cb=${cb}`;
    console.log(`[pib-scraper] GET initial page to retrieve ASP.NET state parameters: ${targetUrl}`);

    // 1. Initial GET request to retrieve state parameters and set cookies
    const getRes = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!getRes.ok) {
      throw new Error(`PIB page GET initial fetch failed: ${getRes.statusText}`);
    }

    const html = await getRes.text();
    const cookies = getRes.headers.get('set-cookie');
    
    // Extract state parameters
    const hiddenFields = extractAllHiddenFields(html);
    
    if (!hiddenFields['__VIEWSTATE'] || !hiddenFields['__EVENTVALIDATION']) {
      throw new Error("Could not extract __VIEWSTATE or __EVENTVALIDATION from initial response HTML.");
    }

    // 2. Build the POST params
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(hiddenFields)) {
      params.append(k, v);
    }

    params.set('ctl00$ContentPlaceHolder1$ddlMinistry', '0'); // All ministries
    params.set('ctl00$ContentPlaceHolder1$ddlday', day);
    params.set('ctl00$ContentPlaceHolder1$ddlMonth', month);
    params.set('ctl00$ContentPlaceHolder1$ddlYear', year);
    params.set('ctl00$ContentPlaceHolder1$hydregionid', '3');
    params.set('ctl00$ContentPlaceHolder1$hydLangid', '1');
    params.set('__EVENTTARGET', 'ctl00$ContentPlaceHolder1$ddlday'); 
    params.set('__EVENTARGUMENT', '');

    console.log(`[pib-scraper] POST date inputs to select releases for: ${day}-${month}-${year}`);
    const postRes = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': targetUrl,
        ...(cookies ? { 'Cookie': cookies.split(';')[0] } : {})
      },
      body: params.toString()
    });

    if (!postRes.ok) {
      throw new Error(`PIB page POST date filter request failed: ${postRes.statusText}`);
    }

    const postHtml = await postRes.text();
    
    // Check if we hit the "Page not available" error
    if (postHtml.includes("Page you have requested is not available")) {
      throw new Error("PIB server rejected ASP.NET POST inputs (Page not available error).");
    }

    // 3. Group and parse releases by Ministry
    const ministryRegex = /<h3 class=['"]font104['"]>([\s\S]*?)<\/h3>([\s\S]*?)<\/ul>/gi;
    let minMatch;
    const releases: Array<{ prid: string; title: string; ministry: string; selected?: boolean }> = [];

    while ((minMatch = ministryRegex.exec(postHtml)) !== null) {
      const ministryName = minMatch[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      const blockContent = minMatch[2];

      const linkRegex = /<a\s+[^>]*href=['"]\/PressReleasePage\.aspx\?PRID=(\d+)['"][^>]*>([\s\S]*?)<\/a>/gi;
      let linkMatch;
      while ((linkMatch = linkRegex.exec(blockContent)) !== null) {
        releases.push({
          prid: linkMatch[1],
          title: linkMatch[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
          ministry: ministryName,
          selected: false
        });
      }
    }

    console.log(`[pib-scraper] Successfully fetched ${releases.length} releases for ${date}`);

    // 4. Auto-suggest UPSC high-yield releases using Gemini
    const googleApiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
    if (releases.length > 0 && googleApiKey) {
      try {
        console.log(`[pib-scraper] Running server-side AI selection for UPSC relevance...`);
        const titlesPayload = releases.map((r, i) => `${i}: [${r.ministry}] ${r.title}`).join('\n');
        const prompt = `You are a top-tier UPSC Civil Services Exam preparation mentor.
Analyze the following list of PIB press release titles and identify which ones are highly important for UPSC candidates (GS Paper 1, 2, 3, or 4 syllabus). 
Exclude routine greetings, sports awards, congratulations, local events, condolences, routine postings, or appointments. 
Focus on policies, schemes, reports, bilateral MoUs, national achievements, infrastructure projects, technology launches, or economic updates.

Return ONLY a RAW JSON array of integers representing the indices of the selected high-yield titles. E.g.: [0, 2, 5]

TITLES LIST:
${titlesPayload}`;

        const genAI = new GoogleGenerativeAI(googleApiKey);
        const model = genAI.getGenerativeModel({ 
          model: "gemini-1.5-flash", 
          generationConfig: { responseMimeType: "application/json" }
        });
        const genResult = await model.generateContent([prompt]);
        const resultText = genResult.response.text().trim();
        const selectedIndices = sanitizeAndParseJson(resultText);
        
        if (Array.isArray(selectedIndices)) {
          selectedIndices.forEach((idx: number) => {
            if (releases[idx]) {
              releases[idx].selected = true;
            }
          });
          console.log(`[pib-scraper] AI auto-selected ${selectedIndices.length} releases.`);
        }
      } catch (suggestErr) {
        console.warn("[pib-scraper] Failed to auto-suggest UPSC releases via Gemini:", suggestErr);
      }
    }

    return NextResponse.json({ releases });

  } catch (err: any) {
    console.error("PIB Fetch List Error:", err);
    return NextResponse.json({ 
      error: "Execution crashed at: " + (err.message || String(err)) 
    }, { status: 500 });
  }
}
