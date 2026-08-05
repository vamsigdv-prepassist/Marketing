"use client";

import { useState, useEffect } from "react";
import { CreditCard, Database, Loader2, ArrowUpRight, CheckCircle2, XCircle, Clock } from "lucide-react";
import { db } from "@/lib/firebase";
import { collectionGroup, getDocs, collection } from "firebase/firestore";

interface AdminTransactionRecord {
   id: string;
   userId: string;
   email: string;
   amount: number;
   costINR: number;
   planName: string;
   status: 'Success' | 'Failed' | 'Pending';
   createdAt: Date;
}

export default function GlobalPaymentsDashboard() {
   const [transactions, setTransactions] = useState<AdminTransactionRecord[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchGlobalLedger = async () => {
      setIsLoading(true);
      try {
         // 1. Fetch all users
         const usersSnap = await getDocs(collection(db, "users"));
         console.log("[Ledger] Found total users:", usersSnap.size);
         
         const userMap: Record<string, string> = {};
         usersSnap.forEach((d) => {
            userMap[d.id] = d.data().email || 'Unknown User';
         });
         
         const incoming: AdminTransactionRecord[] = [];
         
         // 2. Fetch transactions for each user concurrently
         const fetchPromises = usersSnap.docs.map(async (userDoc) => {
            const email = userDoc.data().email || 'Unknown User';
            try {
               const txSnap = await getDocs(collection(db, "users", userDoc.id, "transactions"));
               console.log(`[Ledger] User ${userDoc.id} has ${txSnap.size} transactions.`);
               
               txSnap.forEach((txDoc) => {
                  const data = txDoc.data();
                  incoming.push({
                     id: txDoc.id,
                     userId: data.userId || userDoc.id,
                     email: email,
                     amount: data.amount || 0,
                     costINR: data.costINR || 0,
                     planName: data.planName || 'Unknown Plan',
                     status: data.status || 'Pending',
                     createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(0),
                  });
               });
            } catch (err) {
               console.error(`[Ledger] Failed to fetch transactions for user ${userDoc.id}:`, err);
            }
         });

         await Promise.all(fetchPromises);

         // 3. Fetch Mobile App transactions from root "payments" collection
         try {
            const mobileTxSnap = await getDocs(collection(db, "payments"));
            mobileTxSnap.forEach((txDoc) => {
               const data = txDoc.data();
               incoming.push({
                  id: txDoc.id,
                  userId: data.userId || 'System',
                  email: userMap[data.userId] || 'Unknown User',
                  amount: data.credits || 0, // In Mobile Schema, AI Credits are mapped to 'credits'
                  costINR: data.amount || 0, // In Mobile Schema, money is mapped to 'amount'
                  planName: data.planName || 'Unknown Plan',
                  status: data.status === "SUCCESS" ? 'Success' : (data.status || 'Pending'),
                  createdAt: data.date?.toDate ? data.date.toDate() : (data.createdAt?.toDate ? data.createdAt.toDate() : new Date(0)),
               });
            });
         } catch (err) {
            console.error("[Ledger] Failed to fetch mobile root payments:", err);
         }

         console.log("[Ledger] Total transactions fetched globally:", incoming.length);

         // Sort descending natively
         incoming.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
         setTransactions(incoming);

      } catch (err) {
         console.error("Failed to fetch global ledger:", err);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      fetchGlobalLedger();
   }, []);

   return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
         
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
                  <Database className="w-4 h-4" /> Financial Matrix
               </div>
               <h1 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                  <CreditCard className="w-10 h-10 text-emerald-600" />
                  Global Ledger
               </h1>
               <p className="text-slate-500 font-medium mt-2">Every payment executed across the entire PrepAssist ecosystem.</p>
            </div>
            
            <button 
               onClick={fetchGlobalLedger}
               disabled={isLoading}
               className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition border border-slate-200 shadow-sm flex items-center gap-2 disabled:opacity-50"
            >
               {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
               Sync Ledger
            </button>
         </div>

         {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
               <Loader2 className="w-10 h-10 animate-spin text-emerald-500 mb-4" />
               <p className="font-bold tracking-widest uppercase text-sm">Decrypting Ledgers...</p>
            </div>
         ) : (
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
               <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest">User Identity</th>
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Plan Mapped</th>
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Value (INR)</th>
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                           <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Timestamp</th>
                        </tr>
                     </thead>
                     <tbody>
                        {transactions.length === 0 ? (
                           <tr>
                              <td colSpan={6} className="py-12 text-center text-slate-400 font-medium">
                                 No transactions exist in the global ledger.
                              </td>
                           </tr>
                        ) : (
                           transactions.map((tx) => (
                              <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                                 <td className="py-4 px-6">
                                    <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                       {tx.id.substring(0, 12)}...
                                    </div>
                                 </td>
                                 <td className="py-4 px-6">
                                    <p className="font-bold text-slate-900 text-sm">{tx.email}</p>
                                    <p className="text-xs text-slate-400 font-mono mt-0.5">{tx.userId.substring(0, 8)}...</p>
                                 </td>
                                 <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                                       <Database className="w-3 h-3" /> {tx.planName}
                                    </span>
                                    {tx.amount > 0 && (
                                        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">+{tx.amount} AI Credits</p>
                                    )}
                                 </td>
                                 <td className="py-4 px-6 text-right font-black text-slate-900">
                                    ₹{tx.costINR}
                                 </td>
                                 <td className="py-4 px-6 text-center">
                                    {tx.status === 'Success' && <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg border border-emerald-100"><CheckCircle2 className="w-3 h-3"/> Success</span>}
                                    {tx.status === 'Failed' && <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded-lg border border-rose-100"><XCircle className="w-3 h-3"/> Failed</span>}
                                    {tx.status === 'Pending' && <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-lg border border-amber-100"><Clock className="w-3 h-3"/> Pending</span>}
                                 </td>
                                 <td className="py-4 px-6 text-right">
                                    <p className="text-sm font-bold text-slate-700">
                                       {tx.createdAt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </p>
                                    <p className="text-xs text-slate-400 font-medium">
                                       {tx.createdAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                 </td>
                              </tr>
                           ))
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         )}
      </div>
   );
}
