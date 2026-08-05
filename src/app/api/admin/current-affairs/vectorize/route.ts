import { NextResponse } from 'next/server';
import { generateUPSCIdentity } from '@/lib/ai/google-embeddings';
import { upsertRecords, type PineconeUpsertRecord } from '@/lib/pinecone';

export const maxDuration = 300; // Allow 5 minutes for vectorizing multiple affairs

export async function POST(req: Request) {
  try {
    const { affairs } = await req.json();

    if (!affairs || !Array.isArray(affairs) || affairs.length === 0) {
      return NextResponse.json({ error: 'No affairs provided for vectorization' }, { status: 400 });
    }

    const vectorsToUpsert: PineconeUpsertRecord[] = [];
    const failures: Array<{ id: string; error: string }> = [];

    for (const affair of affairs) {
      if (!affair.id) continue;

      const textToEmbed = `${affair.title}\n${(affair.content || '').substring(0, 5000)}`;

      try {
        const vector = await generateUPSCIdentity(textToEmbed);

        // Previously this required exactly 768 dims, which silently dropped
        // every vector whenever generateUPSCIdentity used its OpenRouter path
        // (text-embedding-3-small returns 1536). Dimension validation now
        // happens against the index's real dimension inside upsertRecords.
        if (Array.isArray(vector) && vector.length > 0) {
          vectorsToUpsert.push({
            id: affair.id,
            values: vector,
            metadata: {
              title: affair.title || 'Global Update',
              source: affair.source || 'Current Affairs',
              content: (affair.content || '').substring(0, 5000),
              publish_date: affair.publishDate || new Date().toISOString(),
            },
          });
        } else {
          failures.push({ id: affair.id, error: 'Embedding provider returned no vector' });
        }
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e);
        console.error(`Failed to vectorize affair ${affair.id}:`, e);
        failures.push({ id: affair.id, error: message });
      }
    }

    const upserted = vectorsToUpsert.length > 0 ? await upsertRecords('current-affairs', vectorsToUpsert) : 0;

    return NextResponse.json({ success: true, processed: upserted, failures });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Vectorize API Error:', error);
    return NextResponse.json({ error: message || 'Failed to vectorize affairs' }, { status: 500 });
  }
}
