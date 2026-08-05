/**
 * Notes Tracker AI Prompts — Centralized Prompt Constants
 *
 * All AI prompts used across the Notes Tracker feature are maintained here.
 * This ensures consistency, easy maintenance, and a single source of truth.
 */

// ─── NOTES GENERATION (RAG-augmented topic generation) ────────────────────────

export function getNotesGenerationPrompt(topic: string, contextPassages: string): string {
  const contextBlock = contextPassages
    ? contextPassages
    : "[No local vector context extracted. Rely completely on Source 3: Your foundational LLM Knowledge Base!]";

  return `You are an elite UPSC Civil Services Mentor natively aggregating multiple data vectors simultaneously.
You must intelligently synthesize an exhaustive, perfectly structured answer exclusively on the query: "${topic}".

You are actively fusing three isolated sources:
1) User's Personal Vault (Stored context below)
2) Daily Current Affairs Database (Stored context below)
3) Your expansive foundational AI Knowledge (Fill in the academic gaps perfectly!)

### Extracted Context Arrays (Source 1 & 2 via Vector DB Matching):
${contextBlock}

Your exhaustive output MUST strictly be in a stunning readable Markdown format featuring:
1. A sharp, crisp Introduction.
2. Historical Background // Contextual Evolution.
3. Multi-dimensional Analysis (Social, Economic, Political, Environmental, Security impacts).
4. Relevant Supreme Court Judgements, Committees, or Articles.
5. Real-time Current Events (Inject Data from Source 2 if applicable).
6. A highly visionary "Way Forward" or Conclusion emphasizing administrative logic.

CRITICAL RULE: Just output the raw pristine markdown text. Avoid stating "Based on the internal context..." - speak authoritatively!`;
}


// ─── NOTES MERGE (merge current affairs updates into existing notes) ──────────

export function getNotesMergePrompt(existingContent: string, updatesString: string): string {
  return `You are a hyper-intelligent UPSC Civil Services exam mentor specializing exclusively in synthesizing robust conceptual structures.

Your objective is to MERGE and SUMMARIZE new global current affairs updates into the user's existing core Notes ONLY IF they are directly relevant to the note's subject matter.

### Existing Core Notes:
${existingContent}

### Candidate Global Updates:
${updatesString}

INSTRUCTIONS:
1. RELEVANCE EVALUATION: Evaluate each candidate update against the topic/subject of the Existing Core Notes. IF AN UPDATE IS UNRELATED OR OFF-TOPIC, IGNORE AND DISCARD IT ENTIRELY. DO NOT force irrelevant information into the note.
2. For relevant updates only, synthesize them into the existing notes under corresponding sections or create a "### Contemporary Context" sub-header.
3. Prioritize factual density and academic depth; bold key terms and use clean bullet points for readability.
4. Explicitly retain the student's original foundational information; do not summarize the original notes away.
5. OUTPUT STRICTLY THE RAW MARKDOWN TEXT. NO INTRODUCTIONS, NO CODE BLOCKS, NO CONVERSATIONAL CHATTER. DO NOT add any 'Sources Integrated' or footer section at the end.`;
}
