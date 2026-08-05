import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, orderBy, limit, deleteDoc, doc, serverTimestamp, writeBatch } from "firebase/firestore";

export interface CurrentAffair {
  id?: string;
  title: string;
  source: string;
  content: string;
  tags: string[];
  publishDate: string;
  createdAt?: any;
}

export const addCurrentAffair = async (affair: Omit<CurrentAffair, 'id' | 'createdAt'>) => {
  try {
    const formattedTags = (affair.tags || []).map(t => t.replace(/^#/, '').toLowerCase().trim()).filter(Boolean);
    
    const docRef = await addDoc(collection(db, "current_affairs"), {
      title: affair.title,
      source: affair.source,
      content: affair.content,
      tags: formattedTags,
      publishDate: affair.publishDate,
      createdAt: serverTimestamp()
    });
    
    // Sync to Pinecone asynchronously
    fetch("/api/admin/current-affairs/vectorize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        affairs: [{ id: docRef.id, ...affair }]
      })
    }).catch(err => console.error("Failed to sync to Pinecone:", err));

    return docRef.id;
  } catch (error) {
    console.error("Error pushing Current Affair to DB:", error);
    throw error;
  }
};

export const bulkAddCurrentAffairs = async (affairs: Omit<CurrentAffair, 'id' | 'createdAt'>[]) => {
  try {
    const batch = writeBatch(db);
    const generatedAffairs: CurrentAffair[] = [];
    
    affairs.forEach(affair => {
        const docRef = doc(collection(db, "current_affairs"));
        batch.set(docRef, {
            title: affair.title || "Untitled UPSC Extraction",
            content: affair.content || "",
            source: affair.source || "Unknown Publication",
            tags: (affair.tags || []).map(t => t.replace(/^#/, '').toLowerCase().trim()).filter(Boolean),
            publishDate: affair.publishDate,
            createdAt: serverTimestamp()
        });
        generatedAffairs.push({ id: docRef.id, ...affair });
    });

    await batch.commit();

    // Sync all to Pinecone asynchronously
    if (generatedAffairs.length > 0) {
      fetch("/api/admin/current-affairs/vectorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ affairs: generatedAffairs })
      }).catch(err => console.error("Failed to sync batch to Pinecone:", err));
    }
  } catch (error) {
    console.error("Error pushing batch Current Affairs to DB:", error);
    throw error;
  }
};

export const fetchRecentCurrentAffairs = async (maxResults: number = 10) => {
  try {
    const q = query(
      collection(db, "current_affairs"), 
      orderBy("createdAt", "desc"), 
      limit(maxResults)
    );
    const snap = await getDocs(q);
    
    return snap.docs.map(d => ({
       id: d.id,
       ...d.data()
    })) as CurrentAffair[];
  } catch (error) {
    console.error("Error fetching Current Affairs:", error);
    return [];
  }
};

export const fetchAffairsByDate = async (dateStr: string): Promise<CurrentAffair[]> => {
  try {
    console.log(`[browser] Initiating Firestore Query for publishDate: ${dateStr}`);
    
    // Primary query: strictly match YYYY-MM-DD format
    const q = query(
      collection(db, "current_affairs"),
      where("publishDate", "==", dateStr)
    );
    const snap = await getDocs(q);

    let results = snap.docs.map(d => ({
       id: d.id,
       ...d.data()
    })) as CurrentAffair[];

    // Fallback query: If no results found, try DD/MM/YYYY format (common in legacy data)
    if (results.length === 0 && dateStr.includes('-')) {
       const [y, m, d] = dateStr.split('-');
       const fallbackDate = `${d}/${m}/${y}`;
       console.log(`[browser] No records for ${dateStr}. Attempting legacy fallback: ${fallbackDate}`);
       
       const qFallback = query(
          collection(db, "current_affairs"),
          where("publishDate", "==", fallbackDate)
       );
       const snapFallback = await getDocs(qFallback);
       results = snapFallback.docs.map(d => ({
          id: d.id,
          ...d.data()
       })) as CurrentAffair[];
    }

    console.log(`[browser] Query complete. Found ${results.length} articles.`);

    // Sort in memory to avoid requiring a composite index in Firestore
    return results.sort((a, b) => {
      const timeA = a.createdAt?.seconds || 0;
      const timeB = b.createdAt?.seconds || 0;
      return timeB - timeA;
    });
  } catch (error) {
    console.error("Error fetching affairs by date: ", error);
    return [];
  }
};

export const deleteCurrentAffair = async (id: string) => {
  if (!id) throw new Error("Missing ID for deletion directive.");
  try {
    await deleteDoc(doc(db, "current_affairs", id));
  } catch (error) {
    console.error("Error destroying Current Affair Payload:", error);
    throw error;
  }
};
