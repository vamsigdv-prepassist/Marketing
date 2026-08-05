import { adminDb } from '@/lib/firebase-admin';
import crypto from 'crypto';

export type PdfCacheType = 'raw_text' | 'ai_markdown' | 'ai_split' | 'ai_quiz' | 'newspaper_articles';

/**
 * Generates a SHA-256 hash of the provided PDF buffer.
 */
export function getPdfHash(buffer: Buffer): string {
    return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Retrieves cached PDF extraction data from Firestore natively.
 */
export async function getPdfCache(buffer: Buffer, type: PdfCacheType): Promise<any | null> {
    try {
        const hash = getPdfHash(buffer);
        const docId = `${hash}_${type}`;
        
        const snap = await adminDb.collection('global_pdf_cache').doc(docId).get();
        
        if (snap.exists) {
            const data = snap.data();
            console.log(`[PDF CACHE HIT] Successfully retrieved cached ${type} data for PDF ${hash.substring(0,8)}...`);
            return data?.payload || null;
        }
        
        console.log(`[PDF CACHE MISS] No cached ${type} data for PDF ${hash.substring(0,8)}...`);
        return null;
    } catch (e) {
        console.warn("[PDF CACHE ERROR] Failed to read from global cache:", e);
        return null;
    }
}

/**
 * Writes extraction data into the global PDF cache in Firestore.
 */
export async function setPdfCache(buffer: Buffer, type: PdfCacheType, payload: any): Promise<void> {
    try {
        const hash = getPdfHash(buffer);
        const docId = `${hash}_${type}`;
        
        await adminDb.collection('global_pdf_cache').doc(docId).set({
            hash,
            type,
            payload,
            createdAt: new Date()
        });
        
        console.log(`[PDF CACHE WRITE] Successfully cached ${type} data for PDF ${hash.substring(0,8)}...`);
    } catch (e) {
        console.warn("[PDF CACHE ERROR] Failed to write to global cache:", e);
    }
}
