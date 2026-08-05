/**
 * Newspaper Text Cleaner & UPSC Content Pre-Filter
 * 
 * Multi-Subject Balanced Extraction Engine for Daily Newspaper PDFs
 * Supports both THE HINDU and TIMES OF INDIA (and other major Indian dailies).
 * 
 * Ensures balanced representation across ALL UPSC Civil Services subjects:
 * - Polity, Constitution & Governance (GS2 / Public Administration)
 * - Economy & Financial Systems (GS3)
 * - Agriculture & Rural Development (GS3)
 * - Environment, Ecology & Geography (GS1 / GS3)
 * - Science, Technology & Defense (GS3)
 * - History, Art & Culture (GS1)
 * - Sociology & Social Issues (GS1 / GS2 / Sociology / Anthropology)
 * - Anthropology & Tribal/Indigenous Affairs (GS1 / GS2 / Anthropology)
 * - Public Administration & Ethics (GS2 / GS4 / Public Administration)
 * - International Relations & Global Security (GS2) - CAPPED to prevent IR over-indexing
 */

export interface UPSCSubjectCategory {
  key: string;
  name: string;
  keywords: string[];
}

export const UPSC_SUBJECT_CATEGORIES: Record<string, UPSCSubjectCategory> = {
  POLITY_GOVERNANCE: {
    key: 'POLITY_GOVERNANCE',
    name: 'Polity, Constitution & Governance',
    keywords: [
      'constitution', 'parliament', 'supreme court', 'high court', 'judiciary', 'judicial review',
      'collegium', 'executive', 'legislature', 'governor', 'speaker', 'cabinet', 'bill', 'act',
      'amendment', 'fundamental rights', 'dpsp', 'federalism', 'centre-state', 'lok sabha',
      'rajya sabha', 'niti aayog', 'election commission', 'cag', 'finance commission',
      'panchayati raj', 'law commission', 'ordinance', 'tribunal', 'delimitation',
      'constitutional bench', 'representation of people act', 'rpa', 'anti-defection'
    ]
  },
  ECONOMY_FINANCE: {
    key: 'ECONOMY_FINANCE',
    name: 'Economy & Financial Systems',
    keywords: [
      'gdp', 'inflation', 'rbi', 'monetary policy', 'fiscal deficit', 'repo rate', 'npa',
      'banking', 'gst', 'taxation', 'export', 'import', 'trade deficit', 'forex', 'fdi',
      'sebi', 'debt', 'capital expenditure', 'supply chain', 'manufacturing', 'msme',
      'employment', 'labour reforms', 'current account deficit', 'disinvestment', 'fiscal policy'
    ]
  },
  AGRICULTURE_RURAL: {
    key: 'AGRICULTURE_RURAL',
    name: 'Agriculture & Rural Development',
    keywords: [
      'agriculture', 'msp', 'minimum support price', 'farm policy', 'farmers', 'crop yield',
      'irrigation', 'fertilizer', 'pm kisan', 'agri-tech', 'procurement', 'food security',
      'warehousing', 'apmc', 'organic farming', 'animal husbandry', 'horticulture',
      'seed policy', 'kharif', 'rabi', 'soil health', 'pds', 'buffer stock'
    ]
  },
  ENVIRONMENT_GEOGRAPHY: {
    key: 'ENVIRONMENT_GEOGRAPHY',
    name: 'Environment, Ecology & Geography',
    keywords: [
      'climate change', 'cop28', 'cop29', 'unfccc', 'ipcc', 'biodiversity', 'pollution', 'aqi',
      'air quality', 'renewable energy', 'solar energy', 'net zero', 'carbon emission', 'ramsar',
      'national park', 'wildlife protection', 'deforestation', 'conservation', 'green hydrogen',
      'monsoon', 'cyclone', 'earthquake', 'tsunami', 'el nino', 'la nina', 'river basin',
      'water stress', 'geography', 'landslide', 'soil degradation', 'glacier', 'extreme weather'
    ]
  },
  SCIENCE_TECH_DEFENSE: {
    key: 'SCIENCE_TECH_DEFENSE',
    name: 'Science, Technology & Defense',
    keywords: [
      'isro', 'drdo', 'satellite', 'launch vehicle', 'missile', 'artificial intelligence',
      'semiconductor', 'quantum computing', 'biotechnology', 'genomics', 'vaccine',
      'cybersecurity', 'defense equipment', 'army', 'navy', 'air force', 'space exploration',
      'nuclear energy', 'health research', 'deep tech', 'spacecraft', 'supercomputer'
    ]
  },
  HISTORY_CULTURE: {
    key: 'HISTORY_CULTURE',
    name: 'History, Art & Culture',
    keywords: [
      'heritage', 'architecture', 'monument', 'freedom struggle', 'revolt', 'renaissance',
      'archaeology', 'asi', 'excavation', 'museum', 'sculpture', 'painting', 'temple',
      'ancient', 'medieval', 'unesco site', 'manuscript', 'classical dance', 'handicraft',
      'literature', 'inscription', 'numismatics'
    ]
  },
  SOCIOLOGY_SOCIAL_ISSUES: {
    key: 'SOCIOLOGY_SOCIAL_ISSUES',
    name: 'Sociology & Social Issues',
    keywords: [
      'sociology', 'caste system', 'gender equality', 'women empowerment', 'child labor',
      'elderly care', 'disability rights', 'social stratification', 'urban sociology',
      'rural distress', 'kinship', 'social movements', 'secularism', 'communal harmony',
      'poverty', 'hunger', 'malnutrition', 'public health', 'education policy', 'yojana',
      'vulnerable sections', 'social empowerment', 'demography', 'migration'
    ]
  },
  ANTHROPOLOGY_TRIBAL: {
    key: 'ANTHROPOLOGY_TRIBAL',
    name: 'Anthropology & Tribal Affairs',
    keywords: [
      'anthropology', 'indigenous tribes', 'pvtg', 'pvtgs', 'tribal rights', 'forest rights act',
      'anthropological study', 'human evolution', 'tribal welfare', 'ethnic groups',
      'indigenous knowledge', 'tribal culture', 'scheduled tribes', 'ethnography',
      'fifth schedule', 'sixth schedule', 'fra'
    ]
  },
  PUBLIC_ADMIN_ETHICS: {
    key: 'PUBLIC_ADMIN_ETHICS',
    name: 'Public Administration & Ethics',
    keywords: [
      'public administration', 'bureaucracy', 'administrative reforms', 'arc report',
      'probity', 'transparency', 'accountability', 'corruption', 'e-governance',
      'citizen charter', 'whistleblower', 'code of conduct', 'public service ethics',
      'civil service neutrality', 'delegated legislation', 'good governance'
    ]
  },
  INTERNATIONAL_RELATIONS: {
    key: 'INTERNATIONAL_RELATIONS',
    name: 'International Relations & Global Security',
    keywords: [
      'bilateral', 'diplomacy', 'summit', 'g20', 'brics', 'quad', 'asean', 'unsc', 'united nations',
      'treaty', 'mou', 'geopolitics', 'indo-pacific', 'border dispute', 'sanctions', 'wto',
      'internal security', 'terrorism', 'left wing extremism', 'money laundering',
      'coastal security', 'maritime security'
    ]
  }
};

// Patterns for non-UPSC fluff to strip out immediately from THE HINDU & TIMES OF INDIA
const NOISE_PATTERNS = [
  /------------------Page \(\d+\) Break------------------/g,
  /Regd\.\s*No\.?:?\s*[A-Z0-9\/-]+/gi,
  /ISSN\s*[0-9-]+/gi,
  /Vol\.\s*\d+\s*No\.\s*\d+/gi,
  /Printed and Published by\s*.*$/gim,
  /RNI\s*No\.?:?\s*[A-Z0-9\/-]+/gi,
  /https?:\/\/\S+/gi,
  /www\.\S+/gi,
  /email:\s*\S+@\S+/gi,
  /Phone:\s*\d{8,12}/gi,
  /Air Quality Index\s*:\s*\d+/gi,
  /Weather Forecast\s*:\s*.*$/gim,
  /Cinema\s*\||\s*Movies\s*\||\s*Entertainment\s*\||\s*Showbiz\s*\|/gi,
  /Horoscope\s*\||\s*Astrology\s*\||\s*Zodiac/gi,
  /Crossword\s*\||\s*Sudoku\s*\||\s*Word Search/gi,
  /Classifieds?\s*.*$/gim,
  /Matrimonial\s*.*$/gim,
  /Tender Notice\s*.*$/gim,
  /Public Notice\s*.*$/gim,
  /Stock Market Update\s*:?\s*BSE\s*SENSEX\s*.*$/gim,
  /Bullion Rates\s*:?\s*Gold\s*.*$/gim,
  /Match Summary\s*:?\s*.*$/gim,
  /IPL \d+|Test Match|Premier League|T20 World Cup|Champions League|Wimbledon|Olympics/gi,
  /TIMES OF INDIA|THE HINDU|TH-DELHI|TH-MUMBAI|TH-CHENNAI|TOI CITY|TIMES NATION|ETIMES|PAGE 3/gi
];

/**
 * Clean structural noise, header/footers, and non-UPSC sections from raw newspaper text.
 */
export function cleanNewspaperText(rawText: string): string {
  if (!rawText) return "";

  let cleaned = rawText;

  // Apply noise patterns
  for (const pattern of NOISE_PATTERNS) {
    cleaned = cleaned.replace(pattern, " ");
  }

  // Remove lines that are purely numbers, single characters, or stock/table listings
  const lines = cleaned.split("\n");
  const filteredLines = lines.filter(line => {
    const trimmed = line.trim();
    // Blank lines MUST survive: they are the only paragraph delimiter left in
    // pdf2json output, and everything downstream splits on /\n\n+/. Dropping
    // them collapsed the whole paper into a single paragraph, which silently
    // disabled the subject-balancing round-robin below.
    if (trimmed.length === 0) return true;
    if (trimmed.length < 5) return false; // Skip ultra-short lines
    if (/^[\d\s.,\-\/]+$/.test(trimmed)) return false; // Skip line with only numbers/punctuation
    if (/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(trimmed)) return false;
    return true;
  });

  cleaned = filteredLines.join("\n");

  // Normalize excessive spaces and blank lines
  cleaned = cleaned
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n\s*\n+/g, "\n\n")
    .trim();

  return cleaned;
}

interface ScoredChunk {
  text: string;
  score: number;
  index: number;
  primaryCategory: string;
  matchedCategories: string[];
}

/**
 * Multi-Subject Balanced UPSC Keyword Scorer & Pre-Filter
 * Categorizes paragraphs into 10 distinct UPSC Subject Buckets.
 * Uses Round-Robin selection and caps International Relations to ensure all subjects are represented.
 */
export function scoreAndFilterUPSCContent(cleanedText: string, targetMaxChars: number = 65000): string {
  if (!cleanedText) return "";
  if (cleanedText.length <= targetMaxChars) return cleanedText;

  // Split into paragraphs / logical blocks
  const paragraphs = cleanedText.split(/\n\n+/);

  const categoryBuckets: Record<string, ScoredChunk[]> = {
    POLITY_GOVERNANCE: [],
    ECONOMY_FINANCE: [],
    AGRICULTURE_RURAL: [],
    ENVIRONMENT_GEOGRAPHY: [],
    SCIENCE_TECH_DEFENSE: [],
    HISTORY_CULTURE: [],
    SOCIOLOGY_SOCIAL_ISSUES: [],
    ANTHROPOLOGY_TRIBAL: [],
    PUBLIC_ADMIN_ETHICS: [],
    INTERNATIONAL_RELATIONS: [],
    OTHER_UPSC: []
  };

  paragraphs.forEach((para, index) => {
    const textLower = para.toLowerCase();
    let highestCatHits = 0;
    let primaryCat = 'OTHER_UPSC';
    const matchedCats: string[] = [];
    let totalScore = 0;

    // Evaluate keyword matches per UPSC Subject Category
    for (const [catKey, category] of Object.entries(UPSC_SUBJECT_CATEGORIES)) {
      let catHits = 0;
      for (const keyword of category.keywords) {
        if (textLower.includes(keyword)) {
          catHits++;
        }
      }

      if (catHits > 0) {
        matchedCats.push(catKey);
        totalScore += catHits * 2;
        if (catHits > highestCatHits) {
          highestCatHits = catHits;
          primaryCat = catKey;
        }
      }
    }

    // Extra weight for editorial/opinion/explainer columns in THE HINDU & TIMES OF INDIA
    if (/\b(editorial|lead article|op-ed|text & context|times evoke|perspective|analysis|policy|supreme court|parliament|governance|isro|rbi|niti aayog|cabinet)\b/i.test(para)) {
      totalScore += 4;
    }

    // Penalize sports, entertainment, or local crime fluff
    if (/\b(goal|wicket|stadium|match|trophy|actor|actress|box office|bollywood|police arrested|stolen|accident|vehicle)\b/i.test(para)) {
      totalScore -= 6;
    }

    // Retain chunk if it has positive score or sufficient length with matching categories
    if (totalScore > 0 || (para.length > 200 && matchedCats.length > 0)) {
      const chunk: ScoredChunk = {
        text: para.trim(),
        score: Math.max(totalScore, 1),
        index,
        primaryCategory: primaryCat,
        matchedCategories: matchedCats
      };
      categoryBuckets[primaryCat].push(chunk);
    }
  });

  // Sort chunks inside each bucket by score descending
  for (const bucketKey of Object.keys(categoryBuckets)) {
    categoryBuckets[bucketKey].sort((a, b) => b.score - a.score);
  }

  // --- MULTI-SUBJECT DIVERSITY SELECTION (ROUND-ROBIN WITH EXPANDED CAPS) ---
  const selectedChunks: ScoredChunk[] = [];
  let currentLength = 0;

  // Enforce maximum chunks per category to ensure comprehensive 10-15+ article extractions
  const CATEGORY_CAPS: Record<string, number> = {
    INTERNATIONAL_RELATIONS: 6,
    POLITY_GOVERNANCE: 8,
    ECONOMY_FINANCE: 8,
    AGRICULTURE_RURAL: 6,
    ENVIRONMENT_GEOGRAPHY: 8,
    SCIENCE_TECH_DEFENSE: 6,
    HISTORY_CULTURE: 5,
    SOCIOLOGY_SOCIAL_ISSUES: 5,
    ANTHROPOLOGY_TRIBAL: 5,
    PUBLIC_ADMIN_ETHICS: 5,
    OTHER_UPSC: 4
  };

  const categorySelectedCounts: Record<string, number> = {
    POLITY_GOVERNANCE: 0,
    ECONOMY_FINANCE: 0,
    AGRICULTURE_RURAL: 0,
    ENVIRONMENT_GEOGRAPHY: 0,
    SCIENCE_TECH_DEFENSE: 0,
    HISTORY_CULTURE: 0,
    SOCIOLOGY_SOCIAL_ISSUES: 0,
    ANTHROPOLOGY_TRIBAL: 0,
    PUBLIC_ADMIN_ETHICS: 0,
    INTERNATIONAL_RELATIONS: 0,
    OTHER_UPSC: 0
  };

  // Round-robin iteration over subject categories
  const categoryOrder = [
    'POLITY_GOVERNANCE',
    'ECONOMY_FINANCE',
    'AGRICULTURE_RURAL',
    'ENVIRONMENT_GEOGRAPHY',
    'SCIENCE_TECH_DEFENSE',
    'HISTORY_CULTURE',
    'SOCIOLOGY_SOCIAL_ISSUES',
    'ANTHROPOLOGY_TRIBAL',
    'PUBLIC_ADMIN_ETHICS',
    'INTERNATIONAL_RELATIONS',
    'OTHER_UPSC'
  ];

  let addedInPass = true;
  while (addedInPass && currentLength < targetMaxChars) {
    addedInPass = false;

    for (const catKey of categoryOrder) {
      const bucket = categoryBuckets[catKey];
      const maxAllowed = CATEGORY_CAPS[catKey] || 3;
      const alreadyPicked = categorySelectedCounts[catKey];

      if (alreadyPicked < maxAllowed && bucket.length > 0) {
        const nextChunk = bucket.shift()!;
        selectedChunks.push(nextChunk);
        categorySelectedCounts[catKey]++;
        currentLength += nextChunk.text.length;
        addedInPass = true;

        if (currentLength >= targetMaxChars) break;
      }
    }
  }

  // Restore original linear reading order for narrative coherence
  selectedChunks.sort((a, b) => a.index - b.index);

  const finalFilteredText = selectedChunks.map(c => c.text).join("\n\n");

  console.log(`[Newspaper Cleaner] Multi-Subject Balanced Extraction: Reduced raw text from ${cleanedText.length} to ${finalFilteredText.length} chars (~${Math.round(finalFilteredText.length / 4)} tokens). Subject Breakdown:`, categorySelectedCounts);

  return finalFilteredText.length > 500 ? finalFilteredText : cleanedText.substring(0, targetMaxChars);
}

/* ==========================================================================
 * STORY SEGMENTATION
 *
 * The functions above hand the model one giant blob of text. That forces a
 * single LLM call to both FIND the stories and WRITE every article, and the
 * write half is what silently truncates: long markdown for 12+ articles
 * overruns the output budget, so the model quietly returns 4-5 instead.
 *
 * Segmenting first lets the pipeline index cheaply (short snippets) and then
 * synthesize each article from only its own text.
 * ========================================================================== */

export interface StoryCandidate {
  index: number;
  text: string;
  snippet: string;
  score: number;
  primaryCategory: string;
  categoryName: string;
}

/** Collapses repeated lines — mastheads and standing furniture recur on every page. */
export function dedupeLines(text: string): string {
  const seen = new Map<string, number>();
  const kept: string[] = [];

  for (const line of text.split('\n')) {
    const key = line.trim().toLowerCase();
    if (key.length < 12) {
      kept.push(line);
      continue;
    }
    const count = (seen.get(key) ?? 0) + 1;
    seen.set(key, count);
    // A line repeated 3+ times across a paper is furniture, not content.
    if (count <= 2) kept.push(line);
  }

  return kept.join('\n');
}

function scoreParagraph(text: string): { score: number; primaryCategory: string } {
  const lower = text.toLowerCase();
  let best = 0;
  let primary = 'OTHER_UPSC';
  let total = 0;

  for (const [key, category] of Object.entries(UPSC_SUBJECT_CATEGORIES)) {
    let hits = 0;
    for (const keyword of category.keywords) {
      if (lower.includes(keyword)) hits++;
    }
    if (hits > 0) {
      total += hits * 2;
      if (hits > best) {
        best = hits;
        primary = key;
      }
    }
  }

  if (/\b(editorial|lead article|op-ed|text & context|perspective|analysis|policy|supreme court|parliament|governance|isro|rbi|niti aayog|cabinet|ministry|scheme|report|committee)\b/i.test(text)) {
    total += 4;
  }
  if (/\b(goal|wicket|stadium|match|trophy|actor|actress|box office|bollywood|police arrested|stolen|accident|vehicle)\b/i.test(text)) {
    total -= 6;
  }

  return { score: total, primaryCategory: primary };
}

/**
 * Merges cleaned paragraphs into coherent story-sized candidates and scores them.
 *
 * Newspaper PDFs give no reliable article delimiters, so adjacent paragraphs are
 * accumulated until a block reaches `minChars`, and flushed at `maxChars`. This
 * keeps a story's lede and body together, which matters because stage 2 sees
 * only the chunks assigned to it.
 */
export function segmentStories(
  cleanedText: string,
  options: { minChars?: number; maxChars?: number } = {}
): StoryCandidate[] {
  const minChars = options.minChars ?? 700;
  const maxChars = options.maxChars ?? 2600;

  if (!cleanedText) return [];

  const paragraphs = dedupeLines(cleanedText)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40)
    // Reject sports/entertainment/crime paragraphs BEFORE merging. If they are
    // merged first, a noise paragraph rides along inside an otherwise
    // high-scoring block and ends up in the text sent for synthesis.
    .filter((p) => scoreParagraph(p).score >= 0);

  const blocks: string[] = [];
  let current = '';

  for (const paragraph of paragraphs) {
    if (paragraph.length >= maxChars) {
      if (current) {
        blocks.push(current);
        current = '';
      }
      blocks.push(paragraph.slice(0, maxChars));
      continue;
    }

    const candidate = current ? `${current}\n\n${paragraph}` : paragraph;
    if (candidate.length >= maxChars) {
      blocks.push(current || paragraph);
      current = current ? paragraph : '';
    } else {
      current = candidate;
      if (current.length >= minChars) {
        blocks.push(current);
        current = '';
      }
    }
  }
  if (current.trim().length > 200) blocks.push(current);

  const candidates: StoryCandidate[] = [];
  blocks.forEach((text, position) => {
    const { score, primaryCategory } = scoreParagraph(text);
    if (score <= 0) return;
    candidates.push({
      index: candidates.length,
      text,
      snippet: text.replace(/\s+/g, ' ').slice(0, 220),
      score,
      primaryCategory,
      categoryName: UPSC_SUBJECT_CATEGORIES[primaryCategory]?.name ?? 'General UPSC Relevance',
    });
    void position;
  });

  return candidates;
}

/**
 * Picks the candidates worth showing the topic-selection model, round-robining
 * across subjects so one dominant section cannot crowd out the rest, then
 * restoring reading order.
 */
export function selectCandidatesForIndexing(
  candidates: StoryCandidate[],
  options: { maxCandidates?: number; perCategoryCap?: number } = {}
): StoryCandidate[] {
  const maxCandidates = options.maxCandidates ?? 70;
  const perCategoryCap = options.perCategoryCap ?? 10;

  const buckets = new Map<string, StoryCandidate[]>();
  for (const candidate of candidates) {
    const bucket = buckets.get(candidate.primaryCategory) ?? [];
    bucket.push(candidate);
    buckets.set(candidate.primaryCategory, bucket);
  }
  for (const bucket of buckets.values()) bucket.sort((a, b) => b.score - a.score);

  const order = [
    'POLITY_GOVERNANCE',
    'ECONOMY_FINANCE',
    'ENVIRONMENT_GEOGRAPHY',
    'SCIENCE_TECH_DEFENSE',
    'AGRICULTURE_RURAL',
    'SOCIOLOGY_SOCIAL_ISSUES',
    'INTERNATIONAL_RELATIONS',
    'PUBLIC_ADMIN_ETHICS',
    'HISTORY_CULTURE',
    'ANTHROPOLOGY_TRIBAL',
    'OTHER_UPSC',
  ];

  const picked: StoryCandidate[] = [];
  const counts: Record<string, number> = {};
  let progress = true;

  while (progress && picked.length < maxCandidates) {
    progress = false;
    for (const key of order) {
      if (picked.length >= maxCandidates) break;
      const bucket = buckets.get(key);
      if (!bucket || bucket.length === 0) continue;
      if ((counts[key] ?? 0) >= perCategoryCap) continue;
      picked.push(bucket.shift()!);
      counts[key] = (counts[key] ?? 0) + 1;
      progress = true;
    }
  }

  return picked.sort((a, b) => a.index - b.index);
}
