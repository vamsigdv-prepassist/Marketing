import { CORE_SUBJECTS, OPTIONAL_SUBJECTS, OTHER_SUBJECTS } from './cloud_notes';

export interface SegregatedSubjectNote {
  subject: string;
  categoryType: 'core' | 'optional' | 'other';
  title: string;
  content: string;
  tags: string[];
}

/**
 * PDF Segregation Engine - Delegates PDF text extraction & subject segregation
 * to the centralized Python FastAPI Extractor service.
 */
export async function segregateTextToSubjects(
  fileUrl: string,
  pdfTitle: string
): Promise<SegregatedSubjectNote[]> {
  const apiUrl = (
    process.env.EXTRACTOR_API_URL ||
    process.env.NEXT_PUBLIC_EXTRACTOR_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "https://prepassist-extractor-848376794933.europe-west1.run.app"
  ).replace(/\/+$/, '');

  const res = await fetch(`${apiUrl}/api/extract/advanced/segregate-pdf`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileUrl: fileUrl,
      pdfTitle: pdfTitle,
    }),
  });

  if (!res.ok) {
    const errorMsg = await res.text();
    throw new Error(`FastAPI Extractor Segregation Failed: ${res.statusText} - ${errorMsg}`);
  }

  const data = await res.json();
  if (data.success && Array.isArray(data.notes)) {
    return data.notes;
  }

  throw new Error("Invalid response format from FastAPI Extractor Segregation API.");
}
