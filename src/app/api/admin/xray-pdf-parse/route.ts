import { NextResponse } from 'next/server';
import { getExtractorApiUrl } from '@/lib/extractor-url';

export const maxDuration = 60; 

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        
        if (!file) {
            return NextResponse.json({ error: "Missing Target PDF Documentation Matrix." }, { status: 400 });
        }

        const apiUrl = getExtractorApiUrl();
        
        const backendFormData = new FormData();
        backendFormData.append('file', file);
        
        const response = await fetch(`${apiUrl}/admin/xray-pdf-parse`, {
            method: "POST",
            headers: {
                "Authorization": req.headers.get("Authorization") || ""
            },
            body: backendFormData
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`XRay PDF Parse API failed: ${response.statusText} - ${errText}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (e: any) {
        console.error("PDF Flash Extractor Node Panic:", e);
        return NextResponse.json({ error: e.message || "Hardware or Network execution layer dropped." }, { status: 500 });
    }
}
