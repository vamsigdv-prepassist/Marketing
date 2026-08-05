import { getAuth } from "firebase/auth";
import { app } from "./firebase";

export function getApiUrl(path: string) {
    let base = "";
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        base = `http://${window.location.hostname}:8000`;
    } else {
        base = (process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_EXTRACTOR_API_URL || "").trim();
        if (!base) {
            base = "https://prepassist-extractor-848376794933.europe-west1.run.app";
        }
    }
    base = base.replace(/^http:\/\/(?!localhost|127\.0\.0\.1)/, "https://");
    base = base.replace(/\/+$/, "");
    let cleanPath = path ? path.replace(/^\/+/, "") : "";
    return cleanPath ? `${base}/${cleanPath}` : base;
}

export async function uploadDocumentAPI(file: File) {
    const auth = getAuth(app);
    const token = await auth.currentUser?.getIdToken();
    
    if (!token) {
        throw new Error("You must be logged in to upload documents.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(getApiUrl("/api/upload/"), {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Upload failed");
    }

    return response.json();
}

export async function evaluateMainsAPI(payload: {
    imageBase64?: string;
    answerText?: string;
    questionContext: string;
    wordLimit: number;
    includeNotes: boolean;
    includeCurrentAffairs: boolean;
}) {
    const auth = getAuth(app);
    const token = await auth.currentUser?.getIdToken();
    
    if (!token) {
        throw new Error("You must be logged in to evaluate answers.");
    }

    const response = await fetch(`/api/evaluate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || error.error || "Evaluation failed");
    }

    return response.json();
}

export async function extractQuizAPI(file: File, language: string = "English", jobId?: string) {
    console.log(`[extractQuizAPI] Starting extraction for file: ${file.name}, language: ${language}`);
    const auth = getAuth(app);
    const token = await auth.currentUser?.getIdToken();
    
    if (!token) {
        console.error("[extractQuizAPI] Missing authentication token");
        throw new Error("You must be logged in to extract a quiz.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);
    if (jobId) {
        formData.append("job_id", jobId);
    }

    console.log(`[extractQuizAPI] Sending request to ${getApiUrl("/quiz/process-pdf")}...`);
    
    try {
        const response = await fetch(getApiUrl("/quiz/process-pdf"), {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        console.log(`[extractQuizAPI] Response received with status: ${response.status}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[extractQuizAPI] API Error:`, errorText);
            try {
                const errorJson = JSON.parse(errorText);
                throw new Error(errorJson.detail || "Quiz extraction failed");
            } catch (e) {
                throw new Error("Quiz extraction failed: " + errorText.slice(0, 100));
            }
        }

        const data = await response.json();
        console.log(`[extractQuizAPI] Successfully retrieved ${data.results?.length || 0} questions.`);
        return data;
    } catch (err) {
        console.error(`[extractQuizAPI] Fetch crashed:`, err);
        throw err;
    }
}
