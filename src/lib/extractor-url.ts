export function getExtractorApiUrl(): string {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return "http://127.0.0.1:8000";
  }

  let url = process.env.EXTRACTOR_API_URL || process.env.NEXT_PUBLIC_EXTRACTOR_API_URL || process.env.NEXT_PUBLIC_API_URL || "";
  
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production' || process.env.K_SERVICE !== undefined;
  
  if (!url || (isProduction && (url.includes('127.0.0.1') || url.includes('localhost')))) {
    url = "https://prepassist-extractor-848376794933.europe-west1.run.app";
  }
  
  if (!url) {
    url = "http://127.0.0.1:8000";
  }
  
  return url.replace(/\/+$/, '');
}
