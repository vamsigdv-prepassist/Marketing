import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeFirestore, getFirestore, memoryLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const isConfigValid = !!firebaseConfig.apiKey;
const activeConfig = isConfigValid ? firebaseConfig : { ...firebaseConfig, apiKey: "mock-api-key-for-build-safety" };

export const app = !getApps().length ? initializeApp(activeConfig) : getApp();
export const adminApp = app;

// Firebase Storage specifically optimized for Cloud Notes Vault
export const storage = getStorage(app);
export const adminStorage = storage;

// Firestore specifically configured with memoryLocalCache to prevent tab lock/closing errors in Next.js
let dbInstance;
try {
  dbInstance = initializeFirestore(app, { localCache: memoryLocalCache() });
} catch {
  dbInstance = getFirestore(app);
}
export const db = dbInstance;
export const adminDb = db;

// Firebase Auth for unified identity management
export const auth = getAuth(app);
export const adminAuth = auth;
