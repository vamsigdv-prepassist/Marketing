import { NextResponse } from 'next/server';
import { generateUPSCIdentity } from '@/lib/ai/google-embeddings';

export async function POST(req: Request) {
   try {
      const authHeader = req.headers.get("Authorization");
      const token = authHeader?.split(" ")[1];
      
      if (!token) return NextResponse.json({ error: "Missing Security Token" }, { status: 401 });

      let user;
      let adminDb;
      try {
          const { adminAuth, adminDb: dbInstance } = await import('@/lib/firebase-admin');
          const decodedToken = await adminAuth.verifyIdToken(token);
          user = { id: decodedToken.uid };
          adminDb = dbInstance;
      } catch (e) {
          return NextResponse.json({ error: "Unauthenticated Node." }, { status: 401 });
      }

      const userDoc = await adminDb.collection("users").doc(user.id).get();
      if (!userDoc.exists || userDoc.data()?.role !== "admin") {
          return NextResponse.json({ error: "Insufficient Matrix Clearance." }, { status: 403 });
      }

      const { text, subject } = await req.json();

      if (!text || !subject || text.length < 20) {
         return NextResponse.json({ error: "Missing Target Text or Subject Array (Requires 20+ chars)." }, { status: 400 });
      }

      // Automatically construct the Native Vector
      const vector = await generateUPSCIdentity(text);

      // Push securely to the Pinecone Global Memory Array
      const { pinecone } = await import('@/lib/pinecone');
      const index = pinecone.index('reference-materials');
      await index.upsert({ records: [{
         id: crypto.randomUUID(),
         values: vector,
         metadata: {
            content: text,
            subject: subject.toLowerCase(),
            timestamp: new Date().toISOString(),
            type: 'reference_material'
         }
      }]});

      return NextResponse.json({ success: true, message: "Text Matrix Successfully Appended to Global Memory Array." });

   } catch (error: any) {
      console.error("Admin Vectorization System Error:", error);
      return NextResponse.json({ error: `Internal Vectorization Panic: ${error.message}` }, { status: 500 });
   }
}
