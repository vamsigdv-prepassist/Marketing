import { db } from "./firebase";
import { collection, query, where, getDocs, doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export interface SavedWebsite {
  id: string;
  userId: string;
  url: string;
  domain: string;
  title?: string;
  dateAdded: number;
  content?: string;
  extractedAt?: number;
}

export const fetchSavedWebsites = async (userId: string): Promise<SavedWebsite[]> => {
  try {
    const q = query(collection(db, "saved_websites"), where("userId", "==", userId));
    const snap = await getDocs(q);
    const existing: SavedWebsite[] = [];
    snap.forEach(doc => {
        existing.push({ id: doc.id, ...doc.data() } as SavedWebsite);
    });
    return existing.sort((a, b) => b.dateAdded - a.dateAdded);
  } catch (error) {
    console.error("Cloud Saved Websites Fetch Error:", error);
    return [];
  }
};

export const subscribeSavedWebsites = (userId: string, callback: (sites: SavedWebsite[]) => void): (() => void) => {
  const q = query(collection(db, "saved_websites"), where("userId", "==", userId));
  return onSnapshot(q, (snap) => {
    const existing: SavedWebsite[] = [];
    snap.forEach(docSnap => {
        existing.push({ id: docSnap.id, ...docSnap.data() } as SavedWebsite);
    });
    callback(existing.sort((a, b) => b.dateAdded - a.dateAdded));
  });
};

export const addSavedWebsite = async (url: string, userId: string, title?: string): Promise<SavedWebsite> => {
  try {
    let domain = "Unknown Domain";
    try {
      const parsedUrl = new URL(url);
      domain = parsedUrl.hostname.replace('www.', '');
    } catch {
      domain = url.split('/')[0] || "Unknown";
    }

    const newSiteId = "site_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const newSite: SavedWebsite = {
      id: newSiteId,
      userId,
      url,
      domain,
      title: title || domain,
      dateAdded: Date.now()
    };

    await setDoc(doc(db, "saved_websites", newSiteId), newSite);
    
    return newSite;
  } catch (error) {
    console.error("Cloud Saved Websites Add Error:", error);
    throw error;
  }
};

export const updateSavedWebsite = async (id: string, patch: Partial<SavedWebsite>): Promise<void> => {
  try {
    await setDoc(doc(db, "saved_websites", id), patch, { merge: true });
  } catch (error) {
    console.error("Cloud Saved Websites Update Error:", error);
    throw error;
  }
};

export const deleteSavedWebsite = async (id: string, userId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "saved_websites", id));
  } catch (error) {
    console.error("Cloud Saved Websites Delete Error:", error);
    throw error;
  }
};
