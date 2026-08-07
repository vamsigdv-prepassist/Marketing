import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

export const GET = async () => {
    try {
        const q = query(collection(db, "current_affairs"), orderBy("createdAt", "desc"), limit(20));
        const snap = await getDocs(q);
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        return NextResponse.json({ docs });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
};
