import { NextResponse } from 'next/server';

// Next.js route segment config to allow a longer timeout if deploying to Vercel Pro/Enterprise (max 300s)
export const maxDuration = 300; 
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        // Proxy the request to the Python Extractor backend
        const extractorUrl = process.env.EXTRACTOR_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        
        console.log(`[NextJS Proxy] Forwarding RAG sync request to Extractor: ${extractorUrl}/admin/rag-sync`);
        
        const res = await fetch(`${extractorUrl}/admin/rag-sync`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body),
            cache: 'no-store'
        });

        // If the Python backend times out or returns a non-JSON response, catch it
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            const rawText = await res.text();
            console.error(`[NextJS Proxy] Extractor returned non-JSON response:`, rawText.substring(0, 200));
            return NextResponse.json({ success: false, error: "Extractor returned non-JSON response (timeout or crash)." }, { status: 502 });
        }

        const data = await res.json();
        
        // FastAPI returns errors in a "detail" field
        if (!res.ok && data.detail && !data.error) {
            data.error = typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail);
        }

        return NextResponse.json(data, { status: res.status });
    } catch (e: any) {
        console.error("[NextJS Proxy] RAG Sync Proxy Error:", e);
        return NextResponse.json({ success: false, error: e.message || "Failed to contact Python Extractor backend" }, { status: 500 });
    }
}
