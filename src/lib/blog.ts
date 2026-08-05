import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, deleteDoc, query, where, limit } from "firebase/firestore";

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    metaTitle?: string;
    metaDescription?: string;
    status: 'draft' | 'published';
    createdAt: string;
}

export const createBlogPost = async (data: Omit<BlogPost, "id" | "createdAt"> & { createdAt?: string }, idToUpdate?: string) => {
    let slug = data.slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
    if (!slug) throw new Error("Invalid Slug String.");
    
    // If idToUpdate is provided, we use that as the document ID to overwrite
    const targetId = idToUpdate || slug;
    const blogRef = doc(db, "blogs", targetId);
    
    // Check if slug is taken by a different document (only if we're creating a new one with a different slug)
    if (!idToUpdate || targetId !== slug) {
        const snap = await getDoc(doc(db, "blogs", slug));
        if (snap.exists() && snap.id !== targetId) {
            throw new Error("A blog with this slug already exists.");
        }
    }

    const existingSnap = await getDoc(blogRef);

    const finalCreatedAt = data.createdAt 
        ? data.createdAt 
        : (existingSnap.exists() ? existingSnap.data().createdAt : new Date().toISOString());

    await setDoc(blogRef, {
        ...data,
        slug,
        metaTitle: data.metaTitle || '',
        metaDescription: data.metaDescription || '',
        status: data.status || 'draft',
        createdAt: finalCreatedAt
    });
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const blogsCol = collection(db, "blogs");
    const snap = await getDocs(blogsCol);
    return snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as BlogPost[];
};

export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
    const blogs = await getBlogPosts();
    return blogs.filter(b => b.status === 'published');
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
    // First try finding by document ID (original slug)
    const blogRef = doc(db, "blogs", slug);
    const snap = await getDoc(blogRef);
    if (snap.exists() && snap.data().slug === slug) {
        return { id: snap.id, ...snap.data() } as BlogPost;
    }

    // If document ID changed or slug was updated, query by the slug field
    const q = query(collection(db, "blogs"), where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) return null;
    
    const docSnap = querySnapshot.docs[0];
    return {
        id: docSnap.id,
        ...docSnap.data()
    } as BlogPost;
};

export const toggleBlogPostStatus = async (id: string, currentStatus: boolean) => {
    const blogRef = doc(db, "blogs", id);
    await updateDoc(blogRef, {
        isActive: !currentStatus
    });
};

export const deleteBlogPost = async (id: string) => {
    const blogRef = doc(db, "blogs", id);
    await deleteDoc(blogRef);
};
