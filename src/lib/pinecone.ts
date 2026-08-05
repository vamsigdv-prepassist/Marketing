import { Pinecone } from '@pinecone-database/pinecone';

let instance: Pinecone | null = null;

// Use a Proxy to lazily initialize Pinecone on the very first method call (e.g. pinecone.index())
export const pinecone = new Proxy({}, {
  get: (target, prop) => {
    if (!instance) {
      const apiKey = process.env.PINECONE_API_KEY;
      if (!apiKey) {
        throw new Error("FATAL EXCEPTION: PINECONE_API_KEY is completely missing in Vercel Environment Variables! Please add it and redeploy.");
      }
      try {
        // Strip quotes just in case the user pasted them
        const cleanKey = apiKey.replace(/^["']|["']$/g, '').trim();
        instance = new Pinecone({ apiKey: cleanKey });
      } catch (e: any) {
        throw new Error(`FATAL EXCEPTION: Pinecone SDK crashed during initialization on Vercel: ${e.message}`);
      }
    }
    return (instance as any)[prop];
  }
}) as Pinecone;

export type PineconeUpsertRecord = {
  id: string;
  values: number[];
  metadata?: Record<string, string | number | boolean | string[]>;
};

const dimensionCache = new Map<string, number>();

/**
 * Looks up (and caches) an index's configured vector dimension so we can fail
 * loudly on a mismatch instead of letting Pinecone reject the batch.
 */
export async function getIndexDimension(indexName: string): Promise<number | null> {
  if (dimensionCache.has(indexName)) return dimensionCache.get(indexName)!;
  try {
    const description = await pinecone.describeIndex(indexName);
    const dimension = description?.dimension;
    if (typeof dimension === 'number' && dimension > 0) {
      dimensionCache.set(indexName, dimension);
      return dimension;
    }
  } catch (error) {
    console.warn(`Could not describe Pinecone index "${indexName}":`, error);
  }
  return null;
}

/**
 * Upserts records into an index.
 *
 * NOTE: the JS SDK's `index.upsert()` takes a bare ARRAY of records. Calling it
 * as `index.upsert({ records: [...] })` fails argument validation, which is how
 * vector syncing silently broke across several routes.
 */
export async function upsertRecords(
  indexName: string,
  records: PineconeUpsertRecord[],
  batchSize: number = 50
): Promise<number> {
  if (!records.length) return 0;

  const expected = await getIndexDimension(indexName);
  const usable = expected
    ? records.filter((record) => {
        const ok = record.values?.length === expected;
        if (!ok) {
          console.error(
            `Skipping "${record.id}": embedding has ${record.values?.length} dims but index "${indexName}" expects ${expected}.`
          );
        }
        return ok;
      })
    : records;

  if (!usable.length) {
    throw new Error(
      `No records matched the dimension of index "${indexName}" (expected ${expected}). ` +
        `Check that the embedding provider in generateUPSCIdentity matches the index.`
    );
  }

  const index = pinecone.index(indexName);
  for (let i = 0; i < usable.length; i += batchSize) {
    await index.upsert({ records: usable.slice(i, i + batchSize) });
  }
  return usable.length;
}

/**
 * Searches for relevant academic context in Pinecone index.
 */
export async function searchPinecone(indexName: string, vector: number[], limit: number = 3) {
  try {
    const index = pinecone.index(indexName);
    const results = await index.query({
      vector: vector,
      topK: limit,
      includeMetadata: true,
    });
    return results.matches;
  } catch (error) {
    console.error(`Pinecone search error in ${indexName}:`, error);
    return [];
  }
}
