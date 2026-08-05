/**
 * Schema-enforced JSON generation on top of @google/genai.
 *
 * Why this exists rather than calling the SDK inline:
 *
 * 1. `gemini-2.5-flash` is a THINKING model. Reasoning tokens are billed as
 *    output and are drawn from the same budget as the answer. For mechanical
 *    extraction work the thinking adds nothing, so we set `thinkingBudget: 0`.
 *    The legacy `@google/generative-ai` SDK cannot express that at all, which
 *    is why the newspaper route used to burn output tokens invisibly.
 * 2. Leaving `maxOutputTokens` unset means the model silently truncates long
 *    JSON responses. With a response schema that surfaces as "fewer items than
 *    asked for" rather than an error — the direct cause of the newspaper
 *    extractor returning 4-5 articles when it was told to return 10-15.
 * 3. Every call reports token usage so cost is measurable instead of guessed.
 */

import { GoogleGenAI, Type, type Schema } from '@google/genai';

export type TokenUsage = {
  promptTokens: number;
  outputTokens: number;
  thoughtTokens: number;
  totalTokens: number;
  calls: number;
};

export const emptyUsage = (): TokenUsage => ({
  promptTokens: 0,
  outputTokens: 0,
  thoughtTokens: 0,
  totalTokens: 0,
  calls: 0,
});

export function addUsage(target: TokenUsage, delta: TokenUsage): TokenUsage {
  target.promptTokens += delta.promptTokens;
  target.outputTokens += delta.outputTokens;
  target.thoughtTokens += delta.thoughtTokens;
  target.totalTokens += delta.totalTokens;
  target.calls += delta.calls;
  return target;
}

export { Type };
export type { Schema };

export function getGeminiKey(): string {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ''
  );
}

let client: GoogleGenAI | null = null;
function getClient(apiKey: string): GoogleGenAI {
  if (!client) client = new GoogleGenAI({ apiKey });
  return client;
}

/** Strips markdown fences and trailing prose before parsing. */
export function parseJsonLoose<T = unknown>(text: string): T {
  const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    // Fall back to the outermost array or object in the string.
    const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
    if (arrayMatch) return JSON.parse(arrayMatch[0]) as T;
    const objectMatch = cleaned.match(/\{[\s\S]*\}/);
    if (objectMatch) return JSON.parse(objectMatch[0]) as T;
    throw new Error(`Model did not return parseable JSON (got ${cleaned.slice(0, 160)}...)`);
  }
}

export type GenerateJsonOptions = {
  prompt: string;
  schema: Schema;
  /** Hard ceiling on the answer. Set it generously enough that JSON closes. */
  maxOutputTokens: number;
  model?: string;
  temperature?: number;
  /** 0 disables reasoning tokens (default). -1 lets the model decide. */
  thinkingBudget?: number;
  signal?: AbortSignal;
  /** Sent to OpenRouter if Gemini fails. Omit to disable the fallback. */
  openRouterModel?: string | null;
};

export type GenerateJsonResult<T> = {
  data: T;
  usage: TokenUsage;
  provider: 'gemini' | 'openrouter';
};

/**
 * Generates JSON matching `schema`. Tries Gemini, then OpenRouter.
 * Throws with both providers' error text if neither succeeds.
 */
export async function generateJson<T = unknown>(
  options: GenerateJsonOptions
): Promise<GenerateJsonResult<T>> {
  const {
    prompt,
    schema,
    maxOutputTokens,
    model = 'gemini-2.5-flash',
    temperature = 0.2,
    thinkingBudget = 0,
    signal,
    openRouterModel = 'openai/gpt-4o-mini',
  } = options;

  const failures: string[] = [];
  const apiKey = getGeminiKey();

  if (apiKey) {
    try {
      const ai = getClient(apiKey);
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: schema,
          maxOutputTokens,
          temperature,
          thinkingConfig: { thinkingBudget },
          ...(signal ? { abortSignal: signal } : {}),
        },
      });

      const text = response.text;
      if (!text) throw new Error('Gemini returned an empty response body');

      const meta = response.usageMetadata;
      const usage: TokenUsage = {
        promptTokens: meta?.promptTokenCount ?? 0,
        outputTokens: meta?.candidatesTokenCount ?? 0,
        thoughtTokens: meta?.thoughtsTokenCount ?? 0,
        totalTokens: meta?.totalTokenCount ?? 0,
        calls: 1,
      };

      return { data: parseJsonLoose<T>(text), usage, provider: 'gemini' };
    } catch (error: unknown) {
      failures.push(`Gemini(${model}): ${error instanceof Error ? error.message : String(error)}`);
    }
  } else {
    failures.push('Gemini: no GEMINI_API_KEY / GOOGLE_API_KEY configured');
  }

  const openRouterKey = process.env.OPENROUTER_API_KEY;
  if (openRouterModel && openRouterKey) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openRouterKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: openRouterModel,
          response_format: { type: 'json_object' },
          temperature,
          max_tokens: maxOutputTokens,
          messages: [{ role: 'user', content: prompt }],
        }),
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${(await response.text()).slice(0, 200)}`);
      }

      const payload = await response.json();
      const text = payload?.choices?.[0]?.message?.content ?? '';
      if (!text) throw new Error('OpenRouter returned an empty completion');

      const usage: TokenUsage = {
        promptTokens: payload?.usage?.prompt_tokens ?? 0,
        outputTokens: payload?.usage?.completion_tokens ?? 0,
        thoughtTokens: 0,
        totalTokens: payload?.usage?.total_tokens ?? 0,
        calls: 1,
      };

      return { data: parseJsonLoose<T>(text), usage, provider: 'openrouter' };
    } catch (error: unknown) {
      failures.push(`OpenRouter: ${error instanceof Error ? error.message : String(error)}`);
    }
  } else if (!apiKey) {
    failures.push('OpenRouter: no OPENROUTER_API_KEY configured');
  }

  throw new Error(failures.join(' | '));
}

/** Runs tasks with bounded concurrency, preserving input order in the output. */
export async function mapWithConcurrency<TIn, TOut>(
  items: TIn[],
  limit: number,
  worker: (item: TIn, index: number) => Promise<TOut>
): Promise<Array<{ ok: true; value: TOut } | { ok: false; error: string }>> {
  const results: Array<{ ok: true; value: TOut } | { ok: false; error: string }> = new Array(
    items.length
  );
  let cursor = 0;

  async function run(): Promise<void> {
    while (cursor < items.length) {
      const index = cursor++;
      try {
        results[index] = { ok: true, value: await worker(items[index], index) };
      } catch (error: unknown) {
        results[index] = {
          ok: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}
