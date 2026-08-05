

/**
 * Validating Native Google Engine Connectivity dynamically to bypass ES6 hoisting limits.
 */

/**
 * Generates a 3072-dimension vector using gemini-embedding-001.
 * Prepend a task-specific instruction to optimize for UPSC academic context.
 */
export async function generateUPSCIdentity(text: string): Promise<number[]> {
  try {
    // 1. Primary: Native Google Generative AI Embeddings with explicit 3072 dimensionality
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "";
    if (apiKey) {
      try {
        const taskText = `Represent this UPSC academic sentence for retrieval: ${text}`;
        // Use gemini-embedding-001 which natively supports 3072 outputDimensionality on v1
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-embedding-001:embedContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "models/gemini-embedding-001",
            content: { parts: [{ text: taskText }] },
            outputDimensionality: 3072
          })
        });

        if (response.ok) {
          const data = await response.json();
          const embeddingValues = data.embedding?.values;
          if (embeddingValues && Array.isArray(embeddingValues) && embeddingValues.length === 3072) {
            return embeddingValues;
          }
          console.warn("Google Embedding: Unexpected dimension count:", embeddingValues?.length);
        } else {
          const errText = await response.text();
          console.warn("Direct Google Embedding API Warning:", errText);
        }
      } catch (gErr) {
        console.warn("Google Embedding fetch warning:", gErr);
      }
    }

    // 2. Secondary Fallback: OpenRouter Embeddings with explicit 3072 dimensions
    const openrouterKey = process.env.OPENROUTER_API_KEY || "";
    if (openrouterKey) {
      try {
        const orResp = await fetch("https://openrouter.ai/api/v1/embeddings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openrouterKey}`
          },
          body: JSON.stringify({
            model: "openai/text-embedding-3-large",
            input: text,
            dimensions: 3072
          })
        });
        if (orResp.ok) {
          const orData = await orResp.json();
          const vals = orData?.data?.[0]?.embedding;
          if (vals && Array.isArray(vals)) {
            return vals;
          }
        }
      } catch (orErr) {
        console.warn("OpenRouter embedding fallback warning:", orErr);
      }
    }

    throw new Error("Missing valid API credentials or all vector embedding providers failed.");
  } catch (error: any) {
    console.error("Vectorization Semantic Error:", error);
    throw new Error("Failed to generate vector semantic signature.");
  }
}
