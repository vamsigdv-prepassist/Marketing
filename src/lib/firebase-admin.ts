import * as admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
  let credential;
  try {
    const serviceAccountPath = path.resolve(process.cwd(), 'gcp-key.json');
    if (fs.existsSync(serviceAccountPath)) {
      const fileContent = fs.readFileSync(serviceAccountPath, 'utf8');
      credential = admin.credential.cert(JSON.parse(fileContent));
    } else if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      credential = admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY));
    } else if (process.env.GCP_PRIVATE_KEY && process.env.GCP_CLIENT_EMAIL && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      credential = admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.GCP_CLIENT_EMAIL,
        privateKey: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
    }
  } catch (err) {
    console.warn("Failed to load Firebase credentials manually. Falling back to Application Default Credentials.", err);
  }

  const config: admin.AppOptions = {
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'prepassist-v2'
  };
  
  if (credential) {
    config.credential = credential;
  }
  
  try {
      admin.initializeApp(config);
  } catch (initErr) {
      console.warn("Firebase app already initialized or failed:", initErr);
  }
}

let adminDb: admin.firestore.Firestore | any = null;
let adminAuth: admin.auth.Auth | any = null;
let adminStorage: admin.storage.Storage | any = null;

try {
  adminDb = admin.firestore();
  adminAuth = admin.auth();
  adminStorage = admin.storage();
} catch (e) {
  console.warn("Firebase Admin failed to initialize during build. Ensure FIREBASE_SERVICE_ACCOUNT_KEY is set in Vercel.");
}

export { adminDb, adminAuth, adminStorage };

/**
 * Server-side Firebase Admin equivalent of deductCredit.
 * Deducts credit atomically and adds a credit_usage log using Admin SDK to avoid client offline socket issues on the server.
 */
export const deductCreditAdmin = async (userId: string, cost: number, featureName: string = "Core API Generation"): Promise<void> => {
  if (!adminDb) {
    throw new Error("Admin Firestore database is not initialized.");
  }

  const userRef = adminDb.collection("users").doc(userId);
  const snap = await userRef.get();

  if (!snap.exists) {
    throw new Error("Credit Profile missing. Please reload the dashboard.");
  }

  const data = snap.data();
  const currentCredits = data?.credits ?? 0;
  if (currentCredits < cost) {
    throw new Error("INSUFFICIENT_CREDITS");
  }

  // Deduct atomically
  await userRef.update({
    credits: admin.firestore.FieldValue.increment(-cost)
  });

  // Emit absolute persistent telemetry receipt
  try {
    await userRef.collection("credit_usage").add({
      userId,
      cost,
      featureName,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.error("[Telemetry Fault] Core usage mapping failed.", e);
  }
};

