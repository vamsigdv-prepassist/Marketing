import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc, increment, serverTimestamp, onSnapshot, collection, addDoc, getDocs, query, orderBy, where as firebaseWhere } from "firebase/firestore";

export interface UserSubscriptionProfile {
  userId: string;
  email?: string;
  credits: number;
  tier: 'free' | 'starter' | 'pro' | 'ultimate';
  hasCloudNotes?: boolean;
  storageLimitBytes?: number;
  storageUsedBytes?: number;
  isUnlimitedStorage?: boolean;
  createdAt?: unknown;
}

/**
 * Initializes or fetches a user's credit profile from Firestore.
 * Automatically provisions 10 Free Credits for new users.
 */
export const fetchUserProfile = async (userId: string, email?: string, referralPayload?: string | null): Promise<UserSubscriptionProfile> => {
   if (!userId) throw new Error("No User ID provided.");
   
   const userRef = doc(db, "users", userId);
   const snap = await getDoc(userRef);
   
   if (snap.exists()) {
      return snap.data() as UserSubscriptionProfile;
   } else {
      // First-time signup initialization
      let initialCredits = 10;
      
      // Execute 20/20 Referral Bonus execution arrays gracefully
      if (referralPayload && referralPayload !== userId) {
         try {
            initialCredits = 30; // 10 Base + 20 Bonus for Invitee
            
            // Simultaneously distribute +20 dynamically to Inviter Ledger
            const inviterRef = doc(db, "users", referralPayload);
            const inviterSnap = await getDoc(inviterRef);
            
            if (inviterSnap.exists()) {
               await updateDoc(inviterRef, {
                  credits: increment(20)
               });
               
               await addDoc(collection(db, "users", referralPayload, "credit_usage"), {
                  userId: referralPayload,
                  cost: -20, // Negative cost implies Ledger Addition globally
                  featureName: `Referral Program Reward (Invited ${email || userId})`,
                  createdAt: serverTimestamp()
               });
            }
         } catch(e) {
            console.error("Referral validation block failed, defaulting safely.", e);
            initialCredits = 10;
         }
      }

      const newProfile: UserSubscriptionProfile = {
         userId,
         email: email || "",
         credits: initialCredits,
         tier: 'free',
         hasCloudNotes: false,
         createdAt: serverTimestamp()
      };
      await setDoc(userRef, newProfile);
      
      if (initialCredits > 10) {
         // Log the signup bonus natively for Invitee
         await addDoc(collection(db, "users", userId, "credit_usage"), {
            userId,
            cost: -20,
            featureName: "Referral Sandbox Signup Bonus",
            createdAt: serverTimestamp()
         });
      }
      
      return newProfile;
   }
};

/**
 * Persistently unlocks the User Cloud Vault mapping to allow indefinite Firebase Blob processing.
 */
export const unlockCloudVault = async (userId: string): Promise<void> => {
   if (!userId) throw new Error("No User ID");
   const ref = doc(db, "users", userId);
   await updateDoc(ref, {
      hasCloudNotes: true,
      storageLimitBytes: increment(1024 * 1024 * 1024)
   });
};

/**
 * Mathematically deducts explicitly mapped AI Credits per action.
 * Throws 'Insufficient Credits' error if balance drops below 0 natively preventing Cloud execution.
 * Simultaneously generates a physical expenditure receipt.
 */
export const deductCredit = async (userId: string, cost: number, featureName: string = "Core API Generation"): Promise<void> => {
   const userRef = doc(db, "users", userId);
   const snap = await getDoc(userRef);
   
   if (!snap.exists()) {
      throw new Error("Credit Profile missing. Please reload the dashboard.");
   }
   
   const currentCredits = snap.data().credits;
   if (currentCredits < cost) {
      throw new Error("INSUFFICIENT_CREDITS");
   }

   // Deduct atomically 
   await updateDoc(userRef, {
      credits: increment(-cost)
   });
   
   // Emit absolute persistent telemetry receipt
   try {
       await addDoc(collection(db, "users", userId, "credit_usage"), {
          userId,
          cost,
          featureName,
          createdAt: serverTimestamp()
       });
   } catch(e) {
       console.error("[Telemetry Fault] Core usage mapping failed.", e);
   }
};

/**
 * Recharges specific Credit amounts to the ledger dynamically.
 */
export const addCredits = async (userId: string, amount: number): Promise<void> => {
   const userRef = doc(db, "users", userId);
   await setDoc(userRef, {
      credits: increment(amount)
   }, { merge: true });
};

/**
 * Upgrades the subscription tier natively.
 */
export const upgradeTier = async (userId: string, tier: 'free'|'starter'|'pro'|'ultimate'): Promise<void> => {
   const userRef = doc(db, "users", userId);
   const payload: any = { tier };
   if (tier === 'ultimate') {
      payload.hasCloudNotes = true;
   }
   await setDoc(userRef, payload, { merge: true });
};

// --- Native Ledger System Extensions ---

export interface TransactionRecord {
   id?: string;
   userId: string;
   amount: number;     // AI Credits injected
   costINR: number;    // Absolute Cost globally mapped in INR
   planName: string;   // Identifier (e.g., Target 50 Pack)
   status: 'Success' | 'Failed' | 'Pending';
   createdAt?: unknown;
}

/**
 * Commits a physical transaction receipt directly to the Ledger natively.
 */
export const logTransaction = async (userId: string, amount: number, costINR: number, planName: string, status: 'Success'|'Failed'|'Pending' = 'Success', transactionId?: string) => {
   if (!userId) return;
   try {
      const data = {
         userId,
         amount,
         costINR,
         planName,
         status,
         createdAt: serverTimestamp()
      };
      
      if (transactionId) {
         await setDoc(doc(db, "users", userId, "transactions", transactionId), data);
      } else {
         await addDoc(collection(db, "users", userId, "transactions"), data);
      }
   } catch(e) {
      console.error("[Native Ledger Fault] Transactions array dropped.", e);
   }
};

/**
 * Extracts and maps all transaction records for the Ledger explicitly ordered chronologically.
 * Scans both the Web App sub-ledgers and the Mobile App root ledger.
 */
export const fetchTransactionHistory = async (userId: string): Promise<TransactionRecord[]> => {
   if (!userId) return [];
   try {
      const incoming: TransactionRecord[] = [];

      // 1. Fetch Web App transactions
      const q = query(collection(db, "users", userId, "transactions"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      snap.forEach((doc) => {
         const data = doc.data();
         incoming.push({
            id: doc.id,
            userId: data.userId || userId,
            amount: data.amount || 0,
            costINR: data.costINR || 0,
            planName: data.planName || 'Unknown',
            status: data.status || 'Pending',
            createdAt: data.createdAt, // Keep as Timestamp for sorting
         });
      });

      // 2. Fetch Mobile App transactions
      const mobileQ = query(collection(db, "payments"), firebaseWhere("userId", "==", userId));
      const mSnap = await getDocs(mobileQ);
      mSnap.forEach((doc) => {
         const data = doc.data();
         incoming.push({
            id: doc.id,
            userId: data.userId || userId,
            amount: data.credits || 0, // Mobile maps AI credits to 'credits'
            costINR: data.amount || 0, // Mobile maps money to 'amount'
            planName: data.planName || 'Unknown',
            status: data.status === "SUCCESS" ? 'Success' : (data.status || 'Pending'),
            createdAt: data.date, // Mobile uses 'date' Timestamp
         });
      });

      // Sort descending natively (since some may be missing timestamps, fallback to 0)
      incoming.sort((a, b) => {
         const timeA = (a.createdAt as any)?.toDate ? (a.createdAt as any).toDate().getTime() : 0;
         const timeB = (b.createdAt as any)?.toDate ? (b.createdAt as any).toDate().getTime() : 0;
         return timeB - timeA;
      });

      return incoming;
   } catch(e) {
      console.error("[Native Ledger Fault] Retrieval arrays corrupted.", e);
      return [];
   }
};

// --- Expenditure Telemetry Interfaces ---

export interface CreditUsageRecord {
   id?: string;
   userId: string;
   cost: number;
   featureName: string;
   createdAt?: unknown;
}

/**
 * Extracts chronological matrices locating explicit AI expenditure burns mapped to individual triggers.
 */
export const fetchCreditUsageHistory = async (userId: string): Promise<CreditUsageRecord[]> => {
   if (!userId) return [];
   try {
      const q = query(collection(db, "users", userId, "credit_usage"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      return snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as CreditUsageRecord[];
   } catch(e) {
      console.error("[Telemetry Fault] Usage arrays dropped.", e);
      return [];
   }
};
