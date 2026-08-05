import { NextResponse } from 'next/server';
import { getExtractorApiUrl } from '@/lib/extractor-url';

export const runtime = 'nodejs';
export const maxDuration = 300;
export const dynamic = 'force-dynamic';

const ROUTE_VERSION = 'v4-fastapi-proxy';

export async function GET() {
  return NextResponse.json({
    version: ROUTE_VERSION,
    status: 'ok',
    targetArticles: 'Delegated to FastAPI backend',
  });
}

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const fileUrl = reqBody.fileUrl;
    const newspaperType = reqBody.provider || 'Daily Newspaper';

    if (!fileUrl) {
      return NextResponse.json({ error: 'Missing PDF fileUrl or provider type' }, { status: 400 });
    }

    const apiUrl = getExtractorApiUrl();

    const backendResponse = await fetch(`${apiUrl}/api/extract/advanced/newspaper`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fileUrl: fileUrl,
        provider: newspaperType
      })
    });

    if (!backendResponse.ok) {
        const errText = await backendResponse.text();
        throw new Error(`FastAPI Extraction failed: ${backendResponse.statusText} - ${errText}`);
    }

    const responseData = await backendResponse.json();
    
    // Ensure we maintain the response contract expected by the frontend
    const results = responseData.results || [];
    
    return NextResponse.json({
      success: true,
      provider: newspaperType,
      results: results,
      count: results.length,
      _version: ROUTE_VERSION,
      diagnostics: {
         note: "Processed via Python FastAPI Extractor"
      }
    });
  } catch (err: any) {
    console.error("[process-newspaper] Route error:", err);
    return NextResponse.json(
      {
        error: 'Execution crashed at: ' + (err.message || String(err)),
        _version: ROUTE_VERSION,
      },
      { status: 500 }
    );
  }
}
