import { db } from "./firebase";
import { collection, addDoc, getDocs, query, limit, Timestamp, writeBatch, doc, where, deleteDoc } from "firebase/firestore";

export interface Question {
  id?: string;
  language?: 'English' | 'Hindi'; // Explicit Language tracking strictly enforced
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  createdAt?: Date | any;
}

export async function addQuestion(data: Omit<Question, 'id' | 'createdAt'>) {
  const docRef = await addDoc(collection(db, "question_bank"), {
    ...data,
    createdAt: Timestamp.now()
  });
  return docRef.id;
}

export async function bulkAddQuestions(questions: Omit<Question, 'id' | 'createdAt'>[]) {
  // Firestore Batch limit is 500 operations. We chunk the array to prevent crashes.
  const CHUNK_SIZE = 450; 
  
  for (let i = 0; i < questions.length; i += CHUNK_SIZE) {
    const chunk = questions.slice(i, i + CHUNK_SIZE);
    const batch = writeBatch(db);
    const colRef = collection(db, "question_bank");
    
    chunk.forEach(q => {
      const docRef = doc(colRef);
      batch.set(docRef, { ...q, createdAt: Timestamp.now() });
    });

    await batch.commit();
    console.log(`Injected chunk ${i / CHUNK_SIZE + 1} of ${Math.ceil(questions.length / CHUNK_SIZE)}`);
  }
}

export async function fetchQuestions(maxResults = 50, language = 'English'): Promise<Question[]> {
  try {
    let q;
    if (language === 'Hindi') {
      q = query(
        collection(db, "question_bank"),
        where("language", "==", "Hindi"),
        limit(Math.min(maxResults, 10000))
      );
    } else {
      // For English, fetch a larger batch to filter legacy undefined docs client-side
      q = query(
        collection(db, "question_bank"),
        limit(Math.min(maxResults * 5, 10000))
      );
    }
    
    const snap = await getDocs(q);
    
    let results = snap.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Question, 'id'>)
    }));

    // Filter by language (English or Hindi)
    results = results.filter(q => {
      const docLang = q.language || 'English';
      return docLang === language;
    });

    // Randomize and slice to requested amount
    return results.sort(() => Math.random() - 0.5).slice(0, maxResults);
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}

import { onSnapshot } from "firebase/firestore";

export function subscribeQuestions(maxResults = 50, language = 'English', callback: (questions: Question[]) => void) {
  let q;
  if (language === 'Hindi') {
    q = query(
      collection(db, "question_bank"),
      where("language", "==", "Hindi"),
      limit(Math.min(maxResults, 10000))
    );
  } else {
    q = query(
      collection(db, "question_bank"),
      limit(Math.min(maxResults * 5, 10000))
    );
  }
  
  return onSnapshot(q, (snap) => {
    let results = snap.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Question, 'id'>)
    }));

    results = results.filter(q => {
       const docLang = q.language || 'English';
       return docLang === language;
    });

    results = results.sort((a: any, b: any) => {
       const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt?.getTime ? a.createdAt.getTime() : 0);
       const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt?.getTime ? b.createdAt.getTime() : 0);
       return timeB - timeA;
    }).slice(0, maxResults);

    callback(results);
  }, (error) => {
    console.error("Live subscription failed:", error);
    callback([]);
  });
}

export async function deleteQuestion(id: string): Promise<void> {
  if (!id) throw new Error("Missing Document ID binding");
  try {
     const docRef = doc(db, "question_bank", id);
     await deleteDoc(docRef);
  } catch(e) {
     console.error("Deletion protocol severed:", e);
     throw e;
  }
}
