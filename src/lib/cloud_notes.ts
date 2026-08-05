import { db, storage } from "./firebase";
import { collection, query, where, getDocs, doc, setDoc, deleteDoc, writeBatch, onSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getAuthToken } from "@/lib/auth";

// Foundational UPSC Classification Nodes
export const CORE_SUBJECTS = ["Geography", "History", "Art & Culture", "Economy", "Environment", "Polity", "Science and Technology"];

export const OPTIONAL_SUBJECTS = ["Geography", "History", "Public Administration", "Political Science & IR", "Sociology", "Psychology", "Philosophy", "Economics", "Anthropology"];

export const OTHER_SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Statistics", "Botany", "Zoology", "Geology", "Agriculture", "Animal Husbandry", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering"];

// Strict Typings ensuring polymorphic Note bounds
export type NoteType = 'text' | 'file' | 'camera' | 'url' | 'langchain';

export interface UpdatePayload {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  id?: string;
  content?: string;
}

export interface CloudNote {
  id?: string;
  userId: string;
  title: string;
  subject: string;
  categoryType: 'core' | 'optional' | 'other';
  type: NoteType;
  content: string; // The extracted AI Text, manual text, or Web Scrape
  fileUrl?: string; // For physical PDFs or Images
  sourceUrl?: string; // For Web scrapes
  tags?: string[]; // Native explicitly defined global Hashtag array
  hasUpdates?: boolean; // Evaluates dynamically against Current Affairs DB
  updatesList?: UpdatePayload[]; // Explicit structural data of matched nodes
  fileSizeBytes?: number; // Physical footprint calculation stored securely
  createdAt?: number;
  disableUpdates?: boolean; // If true, the RAG background task skips this note permanently
  ignoredUpdateIds?: string[]; // Tracks specific news/vault IDs the student already ignored/merged
  isStarred?: boolean; // Starred or favorite note
  lastSyncDate?: number; // Epoch tracking when last synced against DB
  lastRAGSyncDate?: number; // Epoch tracking when the note was last checked/matched in RAG pipeline
  isStaged?: boolean; // If true, it belongs to Raw Notes Vault, not the Tracker
  isExtracting?: boolean;
  jobId?: string;
  mergedSources?: { title: string; source: string; date: string; excerpt?: string; content?: string; imageUrl?: string }[]; // Permanent record of all articles/data merged into this note
}

export const uploadNoteStorage = async (file: File, userId: string): Promise<string> => {
   const ext = file.name.split('.').pop();
   const cleanName = `${userId}/${Date.now()}_${Math.random().toString(36).substring(7)}.${ext}`;
   const storageRef = ref(storage, `cloud_vault/${cleanName}`);
   
   await uploadBytes(storageRef, file);
   const publicUrl = await getDownloadURL(storageRef);
   
   return publicUrl;
};

import { cleanPythonDictOrJsonToMarkdown } from "@/lib/normalize-content";

export const saveCloudNote = async (note: CloudNote): Promise<string> => {
  try {
    const noteId = note.id || "local_" + Date.now().toString(36);
    const sanitizedContent = cleanPythonDictOrJsonToMarkdown(note.content || "");
    
    const normalizedTags = (note.tags || []).map(t => t.replace(/^#/, '').toLowerCase().trim()).filter(Boolean);
    
    // Intelligence checks against Live Admin Cloud DB utilizing rigorous Hashtag Tracking Matrix
    let activeUpdates: UpdatePayload[] = [];
    if (normalizedTags.length > 0 && !note.disableUpdates) {
       activeUpdates = await checkTopicUpdates(normalizedTags, noteId, sanitizedContent, note.ignoredUpdateIds || [], note.userId);
    }

    const finalNote = {
      ...note,
      content: sanitizedContent,
      id: noteId,
      updatesList: activeUpdates,
      hasUpdates: activeUpdates.length > 0,
      tags: normalizedTags,
      isStaged: note.isStaged !== undefined ? note.isStaged : false, // Fix: Ensure it is explicitly false
      lastSyncDate: note.lastSyncDate || (activeUpdates.length > 0 ? Date.now() : undefined),
      lastRAGSyncDate: note.lastRAGSyncDate || (activeUpdates.length > 0 ? Date.now() : undefined),
      createdAt: note.createdAt || Date.now(),
    };
    
    // Clean payload of all explicit undefined values to natively prevent Firebase crashing
    const cleanData = JSON.parse(JSON.stringify(finalNote));
    const firestorePayload = {
       ...cleanData,
       isVerified: false
    };

    // Make it fully sync to Firestore
    await setDoc(doc(db, "cloud_notes", noteId), firestorePayload);

    // Asynchronously trigger server-side Pinecone vectorization and sync in the background
    try {
      getAuthToken().then((token) => {
        if (token) {
          fetch('/api/notes/vectorize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ noteId })
          }).catch(err => console.error("Async Pinecone sync fetch failed:", err));
        }
      });
    } catch (e) {
      console.warn("Async Pinecone sync initialization failed:", e);
    }

    return noteId;
  } catch (error) {
    console.error("Cloud Vault Save Error:", error);
    throw error;
  }
};

export const formatBytes = (bytes: number, decimals = 2) => {
   if (!+bytes) return '0 Bytes';
   const k = 1024;
   const dm = decimals < 0 ? 0 : decimals;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));
   return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const fetchCloudNotes = async (userId: string): Promise<CloudNote[]> => {
  try {
    const q = query(collection(db, "cloud_notes"), where("userId", "==", userId));
    const snap = await getDocs(q);
    const existing: CloudNote[] = [];
    snap.forEach(doc => {
        existing.push(doc.data() as CloudNote);
    });
    
    // Natively sort desc by createdAt
    return existing.sort((a, b) => {
       const timeA = typeof a.createdAt === 'number' ? a.createdAt : 0;
       const timeB = typeof b.createdAt === 'number' ? b.createdAt : 0;
       return timeB - timeA;
    });
  } catch (error) {
    console.error("Cloud Vault Fetch Error:", error);
    throw error;
  }
};

export const subscribeCloudNotes = (userId: string, callback: (notes: CloudNote[]) => void): (() => void) => {
  const q = query(collection(db, "cloud_notes"), where("userId", "==", userId));
  const unsubscribe = onSnapshot(q, (snap: any) => {
    // Prevent rendering "Silo is Empty" if we only have an empty local cache
    if (snap.metadata.fromCache && snap.empty) {
       return;
    }

    const existing: CloudNote[] = [];
    snap.forEach((doc: any) => {
      existing.push(doc.data() as CloudNote);
    });
    const sorted = existing.sort((a, b) => {
      const timeA = typeof a.createdAt === 'number' ? a.createdAt : 0;
      const timeB = typeof b.createdAt === 'number' ? b.createdAt : 0;
      return timeB - timeA;
    });
    callback(sorted);
  });
  return unsubscribe;
};

const GENERIC_TAGS = new Set(['upsc', 'notes', 'study', 'general', 'currentaffairs', 'pdf', 'exam', 'test', 'ias', 'prep']);

export const checkTopicUpdates = async (tags: string[] = [], currentNoteId?: string, currentContent?: string, ignoredUpdateIds: string[] = [], userId?: string): Promise<UpdatePayload[]> => {
   try {
      if (!tags || tags.length === 0) return [];

      // Filter out overly broad generic tags to prevent false positive matches across unrelated topics
      let lowerTags = tags
         .map(t => t.replace(/^#/, '').toLowerCase().trim())
         .filter(t => Boolean(t) && !GENERIC_TAGS.has(t));

      if (lowerTags.length === 0) return [];

      // array-contains-any forces a hard structural limit of 10 parameters
      if (lowerTags.length > 10) lowerTags = lowerTags.slice(0, 10);
      
      const qAffairs = query(
         collection(db, "current_affairs"),
         where("tags", "array-contains-any", lowerTags)
      );

      // Restrict global notes matching to current user's own staged notes
      const notesQueries = userId 
         ? [query(collection(db, "cloud_notes"), where("userId", "==", userId), where("tags", "array-contains-any", lowerTags))]
         : [];

      const [affairsSnap, notesSnaps] = await Promise.all([
          getDocs(qAffairs),
          Promise.all(notesQueries.map(q => getDocs(q)))
      ]);

      const updates: UpdatePayload[] = [];
      const MATCH_THRESHOLD = 0.80; // Require 80% specific tag match
      
      affairsSnap.forEach(doc => {
         if (ignoredUpdateIds.includes(doc.id)) return;
         const data = doc.data();
         const docTags = (data.tags || []).map((t: string) => t.replace(/^#/, '').toLowerCase().trim());
         
         let matchCount = 0;
         lowerTags.forEach(tag => {
            if (docTags.includes(tag)) matchCount++;
         });
         
         const matchPercentage = matchCount / lowerTags.length;

         if (matchPercentage >= MATCH_THRESHOLD) {
            updates.push({
               title: data.title || "Target Synchronization Node",
               source: data.source || data.sourceType || "Daily Global DB",
               date: data.publishDate || data.publishedDate || new Date().toISOString().split('T')[0],
               excerpt: data.content ? data.content.substring(0, 300) + "..." : "Additional synchronization parameters mapped securely.",
               imageUrl: data.imageUrl || data.fileUrl,
               id: doc.id
            });
         }
      });

      notesSnaps.forEach(snap => {
         snap.forEach(doc => {
            if (ignoredUpdateIds.includes(doc.id)) return;
            const data = doc.data();
            if (data.isStaged === true) {
                const docTags = (data.tags || []).map((t: string) => t.replace(/^#/, '').toLowerCase().trim());
                
                let matchCount = 0;
                lowerTags.forEach(tag => {
                   if (docTags.includes(tag)) matchCount++;
                });
                
                const matchPercentage = matchCount / lowerTags.length;

                let isIdenticalContent = false;
                if (currentContent && data.content) {
                   const cleanCurrent = currentContent.replace(/<[^>]*>?/gm, '').replace(/\s+/g, '').substring(0, 100);
                   const cleanDoc = data.content.replace(/<[^>]*>?/gm, '').replace(/\s+/g, '').substring(0, 100);
                   if (cleanCurrent === cleanDoc && cleanCurrent.length > 20) {
                      isIdenticalContent = true;
                   }
                }

                if (matchPercentage >= MATCH_THRESHOLD && doc.id !== currentNoteId && !isIdenticalContent) {
                    updates.push({
                        title: data.title || "Raw Note",
                        source: `Raw Notes - ${data.source || data.title || "User Upload"}`,
                        date: data.createdAt ? new Date(data.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                        excerpt: data.content ? data.content.substring(0, 300) + "..." : "Mapping new database matrix intelligence.",
                        imageUrl: data.fileUrl || data.imageUrl,
                        id: doc.id
                    });
                }
            }
         });
      });

      return updates.slice(0, 50); // Hard limit to prevent 1MB Firestore document limit
   } catch(e) {
      return []; // Fail silently preventing UI locking natively
   }
};

export const deleteCloudNote = async (note: CloudNote): Promise<void> => {
   try {
      if (note.id) {
         await deleteDoc(doc(db, "cloud_notes", note.id));
      }
   } catch(error) {
      console.error("Cloud Vault Deletion Error:", error);
      throw error;
   }
};

export const bulkUpdateCloudNotes = async (userId: string, noteIds: string[], updatePayload: Partial<CloudNote>): Promise<void> => {
   try {
      const batch = writeBatch(db);
      noteIds.forEach(id => {
         const sfRef = doc(db, "cloud_notes", id);
         batch.update(sfRef, updatePayload);
      });
      await batch.commit();
   } catch (error) {
      console.error("Cloud Vault Bulk Update Error:", error);
      throw error;
   }
};

export const bulkDeleteCloudNotes = async (userId: string, noteIds: string[]): Promise<void> => {
   try {
      const batch = writeBatch(db);
      noteIds.forEach(id => {
         const sfRef = doc(db, "cloud_notes", id);
         batch.delete(sfRef);
      });
      await batch.commit();
   } catch (error) {
      console.error("Cloud Vault Bulk Deletion Error:", error);
      throw error;
   }
};
