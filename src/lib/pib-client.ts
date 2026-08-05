/**
 * PIB (Press Information Bureau) scraping client.
 *
 * pib.gov.in is a classic ASP.NET WebForms site that drives region/language
 * selection through a session cookie. Any request that arrives WITHOUT that
 * cookie is answered with a 302 to a "canonical" URL (often the same URL with
 * `lang`/`reg` appended or reordered, sometimes across the www/non-www host
 * boundary). A cookie-less client therefore bounces between redirects forever
 * and never reaches a 200 — which is exactly why detail-page crawling fails on
 * Vercel while it appears to work from a browser.
 *
 * This module solves that by keeping a cookie jar, replaying it on every hop of
 * every redirect, and trying several PIB endpoints before giving up.
 */

const PIB_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const BASE_HEADERS: Record<string, string> = {
  'User-Agent': PIB_UA,
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Upgrade-Insecure-Requests': '1',
};

/** Simple name -> value cookie jar. PIB does not scope cookies per path. */
export type PibSession = { jar: Map<string, string> };

/* ------------------------------------------------------------------ */
/* Cookie handling                                                     */
/* ------------------------------------------------------------------ */

function readSetCookies(headers: Headers): string[] {
  // undici (Node 18.14+) exposes getSetCookie(); it is the only correct way to
  // read multiple Set-Cookie headers. headers.get() joins them with ", " which
  // is ambiguous because cookie values may themselves contain commas.
  const anyHeaders = headers as unknown as { getSetCookie?: () => string[] };
  if (typeof anyHeaders.getSetCookie === 'function') {
    return anyHeaders.getSetCookie();
  }
  const joined = headers.get('set-cookie');
  if (!joined) return [];
  // Fallback split: a comma that is followed by `token=` starts a new cookie.
  return joined.split(/,(?=\s*[^;=,]+=)/g);
}

function absorbCookies(headers: Headers, jar: Map<string, string>): void {
  for (const raw of readSetCookies(headers)) {
    const pair = raw.split(';')[0];
    const eq = pair.indexOf('=');
    if (eq <= 0) continue;
    const name = pair.slice(0, eq).trim();
    const value = pair.slice(eq + 1).trim();
    if (!name) continue;
    // An empty value is the server clearing the cookie.
    if (!value) jar.delete(name);
    else jar.set(name, value);
  }
}

function cookieHeader(jar: Map<string, string>): string {
  return Array.from(jar.entries())
    .map(([k, v]) => `${k}=${v}`)
    .join('; ');
}

/* ------------------------------------------------------------------ */
/* Redirect-aware fetch                                                */
/* ------------------------------------------------------------------ */

function resolveLocation(location: string, currentUrl: string): string {
  try {
    return new URL(location, currentUrl).toString();
  } catch {
    return location;
  }
}

export type PibFetchResult = {
  ok: boolean;
  status: number;
  finalUrl: string;
  html: string;
  hops: string[];
};

/**
 * Fetches a PIB URL, following redirects by hand so that cookies set on
 * intermediate hops are carried forward. The built-in `redirect: 'follow'`
 * does NOT do this, which is the root cause of the redirect loop.
 */
export async function pibFetch(
  url: string,
  session: PibSession,
  opts: { maxRedirects?: number; timeoutMs?: number; referer?: string } = {}
): Promise<PibFetchResult> {
  const maxRedirects = opts.maxRedirects ?? 10;
  const timeoutMs = opts.timeoutMs ?? 20000;

  let currentUrl = url;
  let referer = opts.referer;
  const hops: string[] = [];
  // Guards against A -> B -> A ping-pong once cookies have stabilised.
  const seen = new Map<string, number>();

  for (let i = 0; i <= maxRedirects; i++) {
    hops.push(currentUrl);

    const visits = (seen.get(currentUrl) ?? 0) + 1;
    seen.set(currentUrl, visits);
    if (visits > 2) {
      return { ok: false, status: 508, finalUrl: currentUrl, html: '', hops };
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    let res: Response;
    try {
      const headers: Record<string, string> = { ...BASE_HEADERS };
      const cookies = cookieHeader(session.jar);
      if (cookies) headers.Cookie = cookies;
      if (referer) headers.Referer = referer;

      res = await fetch(currentUrl, {
        headers,
        redirect: 'manual',
        cache: 'no-store',
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }

    // Always harvest cookies, including from 3xx responses — this is the whole
    // point of the exercise.
    absorbCookies(res.headers, session.jar);

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) {
        return { ok: false, status: res.status, finalUrl: currentUrl, html: '', hops };
      }
      referer = currentUrl;
      currentUrl = resolveLocation(location, currentUrl);
      continue;
    }

    const html = res.ok ? await res.text() : '';
    return { ok: res.ok, status: res.status, finalUrl: currentUrl, html, hops };
  }

  return { ok: false, status: 310, finalUrl: currentUrl, html: '', hops };
}

/**
 * Warms up a PIB session: performs one GET so the server issues its session and
 * region cookies. Reuse the returned session for every subsequent request in
 * the same job so PIB stops redirecting.
 */
export async function createPibSession(): Promise<PibSession> {
  const session: PibSession = { jar: new Map() };
  try {
    await pibFetch('https://www.pib.gov.in/Allrel.aspx?reg=3&lang=1', session, {
      timeoutMs: 20000,
    });
  } catch (err) {
    console.warn('[pib-client] Session warm-up failed, continuing cookie-less:', err);
  }
  return session;
}

/* ------------------------------------------------------------------ */
/* HTML -> text                                                        */
/* ------------------------------------------------------------------ */

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  mdash: '—',
  ndash: '–',
  hellip: '…',
  bull: '•',
  copy: '©',
  reg: '®',
  trade: '™',
  deg: '°',
  eacute: 'é',
};

export function htmlDecode(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (match, name) => NAMED_ENTITIES[String(name).toLowerCase()] ?? match);
}

export function stripHtml(html: string): string {
  let text = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<\/(p|div|li|tr|h[1-6]|blockquote)\s*>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n');

  text = text.replace(/<[^>]*>/g, ' ');
  text = htmlDecode(text);
  text = text.replace(/ /g, ' ');
  text = text
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

/** Extracts the `<div>…</div>` block that contains `anchorIndex`, balanced. */
function sliceBalancedDiv(html: string, anchorIndex: number): string {
  const start = html.lastIndexOf('<div', anchorIndex);
  if (start === -1) return '';

  const openRe = /<div\b/gi;
  const closeRe = /<\/div\s*>/gi;
  let depth = 0;
  let pos = start;

  while (pos < html.length) {
    openRe.lastIndex = pos;
    closeRe.lastIndex = pos;
    const open = openRe.exec(html);
    const close = closeRe.exec(html);
    if (!close) break;

    if (open && open.index < close.index) {
      depth++;
      pos = open.index + 4;
    } else {
      depth--;
      pos = close.index + close[0].length;
      if (depth <= 0) return html.slice(start, pos);
    }
  }
  return '';
}

/**
 * Pulls the press-release body out of a PIB detail page.
 * Several strategies are tried because PIB serves at least three different
 * page templates (full page, iframe page, share page).
 */
export function extractReleaseBody(html: string): string {
  if (!html) return '';

  // Strategy 1: the hidden input PIB uses to feed its PDF export.
  // ASP.NET prefixes control ids (e.g. `ContentPlaceHolder1_ltrDescriptionn`),
  // so match any id CONTAINING the control name rather than equal to it.
  const inputTags = html.match(/<input\b[^>]*>/gi) || [];
  for (const tag of inputTags) {
    if (!/ltrDescriptionn/i.test(tag)) continue;
    const valueMatch = tag.match(/value\s*=\s*"([^"]*)"/i) || tag.match(/value\s*=\s*'([^']*)'/i);
    if (valueMatch && valueMatch[1]) {
      const body = stripHtml(htmlDecode(valueMatch[1]));
      if (body.length >= 200) return body;
    }
  }

  // Strategy 2: PIB's main content container (note the typo'd class name,
  // which is genuinely how it ships).
  const containerPatterns = [
    /innner-page-main-about-us-content-right-part/i,
    /class=["'][^"']*\bcontent-area\b[^"']*["']/i,
    /id=["']PdfDiv["']/i,
  ];
  for (const pattern of containerPatterns) {
    const match = pattern.exec(html);
    if (!match) continue;
    const block = sliceBalancedDiv(html, match.index);
    if (!block) continue;
    const body = stripHtml(block);
    if (body.length >= 200) return body;
  }

  // Strategy 3: last resort — take the whole body and keep the densest run of
  // prose. Prevents a template change from taking the pipeline down entirely.
  const bodyMatch = /<body\b[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  if (bodyMatch) {
    const text = stripHtml(bodyMatch[1]);
    const paragraphs = text
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter((p) => p.length > 120);
    const body = paragraphs.join('\n\n');
    if (body.length >= 300) return body;
  }

  return '';
}

/** Rough check that the text is mostly Latin script (i.e. the English edition). */
function looksEnglish(text: string): boolean {
  const sample = text.slice(0, 2000);
  const letters = sample.replace(/[^\p{L}]/gu, '');
  if (letters.length < 50) return true;
  const latin = letters.replace(/[^\p{Script=Latin}]/gu, '');
  return latin.length / letters.length > 0.6;
}

/** Finds the PRID of the English edition linked at the foot of the release. */
function findEnglishPrid(html: string): string | null {
  const anchorRe = /<a\b[^>]*href=["']([^"']*PRID=(\d+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = anchorRe.exec(html)) !== null) {
    const label = match[3].replace(/<[^>]*>/g, '').trim();
    if (/^english$/i.test(label)) return match[2];
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Public: fetch one press release                                     */
/* ------------------------------------------------------------------ */

function candidateUrls(prid: string): string[] {
  // Deliberately WITHOUT hardcoded reg/lang params: PIB derives the correct
  // pair from the PRID and 302s to it. Forcing reg=3&lang=1 makes the server
  // redirect on every request, which is what caused the loop.
  return [
    `https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=${prid}`,
    `https://www.pib.gov.in/PressReleasePage.aspx?PRID=${prid}`,
    `https://pib.gov.in/PressReleaseIframePage.aspx?PRID=${prid}`,
    `https://www.pib.gov.in/PressReleseDetail.aspx?PRID=${prid}`,
    `https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=${prid}`,
  ];
}

export type ReleaseFetchOutcome = {
  text: string;
  sourceUrl: string;
  attempts: Array<{ url: string; status: number; chars: number; note?: string }>;
};

/**
 * Crawls one press release and returns its plain-text body.
 * Throws with a diagnostic message listing every URL tried and its status.
 */
export async function fetchReleaseText(
  prid: string,
  session: PibSession,
  opts: { followEnglish?: boolean } = {}
): Promise<ReleaseFetchOutcome> {
  const attempts: ReleaseFetchOutcome['attempts'] = [];

  for (const url of candidateUrls(prid)) {
    let result: PibFetchResult;
    try {
      result = await pibFetch(url, session, { referer: 'https://www.pib.gov.in/Allrel.aspx' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      attempts.push({ url, status: 0, chars: 0, note: `network: ${message}` });
      continue;
    }

    if (!result.ok) {
      const note =
        result.status === 508
          ? `redirect loop across ${result.hops.length} hops`
          : `final url ${result.finalUrl}`;
      attempts.push({ url, status: result.status, chars: 0, note });
      continue;
    }

    const body = extractReleaseBody(result.html);
    attempts.push({ url, status: result.status, chars: body.length });

    if (body.length >= 200) {
      // PIB publishes the same release in several languages under different
      // PRIDs. If we landed on a regional edition, hop to the English one once.
      if (opts.followEnglish !== false && !looksEnglish(body)) {
        const englishPrid = findEnglishPrid(result.html);
        if (englishPrid && englishPrid !== prid) {
          try {
            const english = await fetchReleaseText(englishPrid, session, { followEnglish: false });
            if (english.text.length >= 200) {
              return {
                text: english.text,
                sourceUrl: english.sourceUrl,
                attempts: [...attempts, ...english.attempts],
              };
            }
          } catch {
            // Fall through and use the regional edition rather than failing.
          }
        }
      }
      return { text: body, sourceUrl: result.finalUrl, attempts };
    }
  }

  const summary = attempts
    .map((a) => `${a.url.replace('https://www.pib.gov.in', '')} -> ${a.status}${a.note ? ` (${a.note})` : ''}${a.chars ? ` [${a.chars} chars]` : ''}`)
    .join(' | ');
  throw new Error(`Could not retrieve readable text for PRID ${prid}. Attempts: ${summary}`);
}
