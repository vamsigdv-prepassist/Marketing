/**
 * normalizeToHTML — Universal content renderer utility
 *
 * Accepts any content string (HTML, Markdown, plain text) and
 * always returns a clean HTML string safe for dangerouslySetInnerHTML.
 *
 * This ensures all notes render correctly regardless of how they were
 * originally stored — fixing the ### / ** raw markdown display bug
 * for all users permanently at render time.
 */

import { marked } from 'marked';
import JSON5 from 'json5';

const HAS_HTML = /<[a-z][\s\S]*>/i;
const HAS_RAW_MARKDOWN = /^#{1,4}\s|\*\*[^*]+\*\*/m;

// Keys identifying book front-matter that must NEVER appear in study notes.
const FRONT_MATTER_KEYS = [
  'about the author', 'about author', 'preface', 'foreword', 'introduction to the book',
  'table of contents', 'contents', 'new chapters', 'new appendices',
  'changes in this edition', 'year-wise break-up', 'year wise break up',
  'year-wise break up', 'year-wise breakup', 'acknowledgements', 'acknowledgment',
  'bibliography', 'index', 'appendix', 'appendices', 'new appendices and chapters',
  'publisher', 'copyright', 'isbn', 'edition', 'printed by', 'dedication',
  'preface to the', 'note to the', 'prologue', 'epilogue',
  'year-wise break', 'upsc marks', 'upsc questions', 'year-wise',
];
function isFrontMatterKey(key: string): boolean {
  const k = key.toLowerCase().trim();
  return FRONT_MATTER_KEYS.some(fm => k.includes(fm));
}

function parseObjectToMarkdown(val: any, depth = 1): string {
  if (!val) return '';
  if (typeof val === 'string') return val;

  if (Array.isArray(val)) {
    return val.map(item => {
      // Skip year/marks data rows (e.g. {Year: 1993, Marks: 89})
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        const keys = Object.keys(item).map(k => k.toLowerCase());
        if (keys.every(k => ['year', 'marks', 'questions', 'no', 'number'].includes(k))) {
          return '';
        }
      }
      if (typeof item === 'string') {
        const cleanItem = item.replace(/^[-\*\u2022]\s*/, '').trim();
        return `- ${cleanItem}`;
      }
      return parseObjectToMarkdown(item, depth);
    }).filter(Boolean).join('\n');
  }

  if (typeof val === 'object') {
    const lines: string[] = [];
    // Smart heuristic for object with "title/heading" and "content/body"
    const keys = Object.keys(val).map(k => k.toLowerCase());
    if (keys.length <= 4 && (keys.includes('title') || keys.includes('heading')) && (keys.includes('content') || keys.includes('body') || keys.includes('description'))) {
        const titleKey = Object.keys(val).find(k => k.toLowerCase() === 'title' || k.toLowerCase() === 'heading');
        const contentKey = Object.keys(val).find(k => k.toLowerCase() === 'content' || k.toLowerCase() === 'body' || k.toLowerCase() === 'description');
        if (titleKey && contentKey) {
            const title = val[titleKey];
            const content = parseObjectToMarkdown(val[contentKey], depth + 1);
            if (typeof title === 'string') {
               return `### ${title}\n\n${content}`;
            }
        }
    }

    for (const [key, value] of Object.entries(val)) {
      // HARD FILTER: skip any front-matter keys at any nesting level
      if (isFrontMatterKey(key)) continue;

      // Transparent pass-through for 'notes' / 'description' / 'markdown' wrapper keys
      if ((key.toLowerCase() === 'notes' || key.toLowerCase() === 'description' || key.toLowerCase() === 'markdown' || key.toLowerCase() === 'values') && (Array.isArray(value) || typeof value === 'string')) {
        const rendered = parseObjectToMarkdown(value, depth);
        if (rendered.trim()) lines.push(rendered);
        continue;
      }
      // Transparent pass-through for the specific weird legacy wrapper key
      if (key.includes('ALLOWED SUBJECTS')) continue;

      if (depth === 1) {
        // Top-level section: use ## heading
        const rendered = parseObjectToMarkdown(value, depth + 1);
        if (rendered.trim()) lines.push(`## ${key}\n\n${rendered}`);
      } else {
        // Nested keys: use inline bold bullet to prevent heading overcrowding
        if (typeof value === 'string' && value.trim()) {
          lines.push(`- **${key}:** ${value.trim()}`);
        } else if (Array.isArray(value)) {
          const rendered = parseObjectToMarkdown(value, depth + 1);
          if (rendered.trim()) lines.push(`**${key}:**\n${rendered}`);
        } else if (typeof value === 'object' && value !== null) {
          const rendered = parseObjectToMarkdown(value, depth + 1);
          if (rendered.trim()) lines.push(`**${key}:**\n${rendered}`);
        } else if (value !== null && value !== undefined) {
          lines.push(`- **${key}:** ${String(value)}`);
        }
      }
    }
    return lines.join('\n\n');
  }

  return String(val);
}

function parsePythonDictFallback(raw: string): string {
  let clean = raw;
  clean = clean.replace(/\{'([^']+)'\s*:\s*/g, '### $1\n\n');
  clean = clean.replace(/,\s*'([^']+)'\s*:\s*/g, '\n\n### $1\n\n');
  clean = clean.replace(/["']\s*,\s*["']/g, '\n- ');
  clean = clean.replace(/[\{\}\[\]']/g, '');
  return clean.trim();
}

function parsePythonLiteralToMarkdown(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  let text = raw.trim();

  // Pattern 1: Plain python stringified list: ['- item 1', '- item 2']
  if (text.startsWith('[') && text.endsWith(']')) {
    const items: string[] = [];
    const strRegex = /(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)")/g;
    let match;
    // Before treating it as a flat array of strings, check if it looks like an array of objects
    if (text.includes('{') && text.includes('}')) {
      return parsePythonDictFallback(text);
    }
    while ((match = strRegex.exec(text)) !== null) {
      const val = (match[1] !== undefined ? match[1] : match[2]).replace(/\\'/g, "'").replace(/\\"/g, '"');
      const cleanVal = val.replace(/^[-\*\u2022]\s*/, '').trim();
      if (cleanVal) items.push(`- ${cleanVal}`);
    }
    if (items.length > 0) return items.join('\n');
  }

  // Pattern 2: Python dictionary string: {'Header': 'Content' or ['Item'], ...}
  if (text.startsWith('{') && text.endsWith('}')) {
    const blocks: string[] = [];
    const pairRegex = /(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)")\s*:\s*(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"|(\[[^\]]*\]|\{[^\}]*\}))/g;
    let match;
    while ((match = pairRegex.exec(text)) !== null) {
      const key = (match[1] !== undefined ? match[1] : match[2]).replace(/\\'/g, "'");
      const valStr = match[3] !== undefined ? match[3] : (match[4] !== undefined ? match[4] : match[5]);
      
      if (!valStr) continue;

      if (key.toLowerCase() !== 'notes' && key.toLowerCase() !== 'description') {
        blocks.push(`### ${key}\n`);
      }

      if (valStr.startsWith('[') && valStr.endsWith(']')) {
        const listItems: string[] = [];
        const itemRegex = /(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        let itemMatch;
        while ((itemMatch = itemRegex.exec(valStr)) !== null) {
          const itemVal = (itemMatch[1] !== undefined ? itemMatch[1] : itemMatch[2]).replace(/\\'/g, "'");
          const cleanItem = itemVal.replace(/^[-\*\u2022]\s*/, '').trim();
          if (cleanItem) listItems.push(`- ${cleanItem}`);
        }
        blocks.push(listItems.join('\n'));
      } else if (valStr.startsWith('{') && valStr.endsWith('}')) {
        blocks.push(parsePythonLiteralToMarkdown(valStr));
      } else {
        const cleanVal = valStr.replace(/\\'/g, "'").replace(/\\"/g, '"').trim();
        blocks.push(cleanVal);
      }
    }

    if (blocks.length > 0) return blocks.join('\n\n');
  }

  return parsePythonDictFallback(text);
}

export function cleanPythonDictOrJsonToMarkdown(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  let trimmed = raw.trim();

  // Detect raw Python dict or array string formats e.g. {'key': 'val'} or ['item1', 'item2']
  if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
    try {
      // First try standard JSON
      const parsed = JSON.parse(trimmed);
      return parseObjectToMarkdown(parsed);
    } catch (e1) {
      try {
        // Fallback to JSON5 to natively handle Python's single quotes, unquoted keys, and trailing commas
        const parsed = JSON5.parse(trimmed);
        return parseObjectToMarkdown(parsed);
      } catch (e2) {
        // Absolute worst case fallback for completely broken strings
        return parsePythonLiteralToMarkdown(trimmed);
      }
    }
  }

  return raw;
}

export function normalizeToHTML(content: string): string {
  if (!content) return '';

  // Step 0a: Unescape literal \n and \t sequences that were double-escaped during JSON storage.
  // This fixes the "\n-" bug where AI returns strings with \\n instead of real newlines.
  let normalized = content
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '  ')
    .replace(/\\r/g, '');

  // Step 0b. Clean any raw Python dict strings or JSON structures before rendering
  const cleanedContent = cleanPythonDictOrJsonToMarkdown(normalized);

  // Already clean HTML — render as-is
  if (HAS_HTML.test(cleanedContent) && !HAS_RAW_MARKDOWN.test(cleanedContent)) {
    return cleanedContent;
  }

  // Mixed HTML + markdown, or pure markdown — strip HTML wrappers and parse markdown
  let plainMarkdown = cleanedContent;

  if (HAS_HTML.test(cleanedContent)) {
    plainMarkdown = cleanedContent
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<\/div>/gi, '\n')
      .replace(/<\/h[1-6]>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<li>/gi, '- ')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // Convert markdown → HTML
  return marked.parse(plainMarkdown) as string;
}
