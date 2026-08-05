import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const snap = await adminDb.collection("cloud_notes").get();
        const batch = adminDb.batch();
        let count = 0;
        
        snap.docs.forEach((doc: any) => {
            const data = doc.data();
            if (!data.isStaged) {
                batch.update(doc.ref, { lastSyncDate: null, lastRAGSyncDate: null });
                count++;
            }
        });

        if (count > 0) {
            await batch.commit();
        }

        return NextResponse.json({ 
            success: true, 
            message: `Successfully bypassed the 24-hour RAG lock for ${count} random notes! You can now test the RAG Pipeline button.` 
        });
    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message });
    }
}
