"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, X, Database, Shield, ShieldAlert, CreditCard, Save, Settings, Search } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

interface PrepUserModel {
   id: string;
   email: string;
   credits: number;
   role?: "admin" | "user" | "banned";
   tier?: "free" | "pro" | "ultimate";
   hasCloudNotes?: boolean;
   createdAt?: any;
}

export default function UserManagementCMS() {
   const [users, setUsers] = useState<PrepUserModel[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [editingUser, setEditingUser] = useState<PrepUserModel | null>(null);

   const [tempCredits, setTempCredits] = useState<number>(0);
   const [tempRole, setTempRole] = useState<"admin" | "user" | "banned">("user");
   const [tempTier, setTempTier] = useState<"free" | "pro" | "ultimate">("free");
   const [tempCloudNotes, setTempCloudNotes] = useState<boolean>(false);
   const [searchQuery, setSearchQuery] = useState("");

   const filteredUsers = users.filter((u) => 
      (u.email || "").toLowerCase().includes((searchQuery || "").toLowerCase()) || 
      (u.id || "").toLowerCase().includes((searchQuery || "").toLowerCase())
   );

   const fetchUsers = async () => {
      setIsLoading(true);
      try {
         const snap = await getDocs(collection(db, "users"));
         const incoming: PrepUserModel[] = [];
         snap.forEach((d) => {
            incoming.push({ id: d.id, ...d.data() } as PrepUserModel);
         });
         setUsers(incoming);
      } catch (err) {
         console.error("Failed to fetch users natively:", err);
      }
      setIsLoading(false);
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   // Invoked when an admin clicks 'Edit' on a user row
   const openEditorModal = (u: PrepUserModel) => {
      setEditingUser(u);
      setTempCredits(u.credits || 0);
      setTempRole(u.role || "user");
      setTempTier(u.tier || "free");
      setTempCloudNotes(u.hasCloudNotes || false);
   };

   // Pushes the aggressive payload to Firebase remote instance
   const pushUpdate = async () => {
      if (!editingUser) return;
      try {
         const ref = doc(db, "users", editingUser.id);
         await updateDoc(ref, {
            credits: tempCredits,
            role: tempRole,
            tier: tempTier,
            hasCloudNotes: tempCloudNotes
         });
         
         // Synchronize Local Virtual DOM efficiently
         setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, credits: tempCredits, role: tempRole, tier: tempTier, hasCloudNotes: tempCloudNotes } : u));
         setEditingUser(null);
      } catch (error) {
         console.error("Firebase Mutation Locked:", error);
         alert("Action unauthorized or network disconnected.");
      }
   };

   return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
         
         {/* CMS Navigation Header */}
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                  <Database className="w-4 h-4" /> Global Auth Matrix
               </div>
               <h1 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                  <Users className="w-10 h-10 text-indigo-600" />
                  User Ecosystem
               </h1>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
               <div className="relative flex-1 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                     type="text"
                     placeholder="Search users..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
               </div>
               <button 
                  onClick={fetchUsers}
                  className="bg-white/5 hover:bg-white/10 text-white/70 px-6 py-3 rounded-xl font-bold text-sm transition border border-white/10 hidden md:block whitespace-nowrap"
               >
                  Sync Engine
               </button>
            </div>
         </div>

         {/* Native Dashboard Table Layout */}
         <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-black uppercase tracking-widest text-[10px]">
                     <tr>
                        <th className="px-6 py-5 border-b border-slate-100">Firebase Node ID</th>
                        <th className="px-6 py-5 border-b border-slate-100">Registered Email</th>
                        <th className="px-6 py-5 border-b border-slate-100">Role</th>
                        <th className="px-6 py-5 border-b border-slate-100">AI Credit Ledger</th>
                        <th className="px-6 py-5 border-b border-slate-100 text-right flex justify-end">Administrative Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {isLoading ? (
                        <tr><td colSpan={5} className="text-center py-12 text-black font-bold uppercase tracking-widest">Querying Firebase Arrays...</td></tr>
                     ) : filteredUsers.length === 0 ? (
                        <tr><td colSpan={5} className="text-center py-12 text-black font-bold uppercase tracking-widest">No Users Found</td></tr>
                     ) : (
                        filteredUsers.map((u, i) => (
                           <motion.tr 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              key={u.id} 
                              className="border-b border-white/5 hover:bg-white/10 transition-colors group"
                           >
                              <td className="px-6 py-5 font-mono text-[10px] text-slate-400">{u.id}</td>
                              <td className="px-6 py-5 font-bold text-slate-900">{u.email}</td>
                              <td className="px-6 py-5">
                                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] items-baseline font-black uppercase tracking-widest border ${
                                    u.role === 'admin' ? 'bg-rose-50 border-rose-200 text-rose-700' :
                                    u.role === 'banned' ? 'bg-red-50 border-red-200 text-red-700' :
                                    'bg-indigo-50 border-indigo-200 text-indigo-700'
                                 }`}>
                                    {u.role === 'admin' ? <ShieldAlert className="w-3 h-3"/> : <Shield className="w-3 h-3"/>}
                                    {u.role || 'user'}
                                 </span>
                              </td>
                              <td className="px-6 py-5">
                                 <span className="font-bold text-slate-700 flex items-center gap-1.5">
                                    <CreditCard className="w-4 h-4 text-slate-400"/> {u.credits || 0}
                                 </span>
                              </td>
                              <td className="px-6 py-5 text-right">
                                 <button 
                                    onClick={() => openEditorModal(u)}
                                    className="bg-indigo-600 text-white px-4 py-2 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20"
                                 >
                                    Modify Target
                                 </button>
                              </td>
                           </motion.tr>
                        ))
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Admin Mutation Modal Wrapper */}
         <AnimatePresence>
            {editingUser && (
               <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
               >
                  <motion.div 
                     initial={{ scale: 0.95, y: 20 }}
                     animate={{ scale: 1, y: 0 }}
                     exit={{ scale: 0.95, y: 20 }}
                     className="bg-white border border-slate-200 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
                  >
                     <button onClick={() => setEditingUser(null)} className="absolute top-6 right-6 text-slate-500 hover:text-black transition"><X className="w-5 h-5"/></button>
                     
                     <h3 className="text-2xl font-black text-black mb-2 flex items-center gap-3">
                        <Settings className="w-6 h-6 text-black"/> Overwrite Identity
                     </h3>
                     <p className="text-black text-sm mb-8 font-medium">Injecting structural modifications to payload <span className="text-black font-mono bg-slate-100 border border-slate-200 px-2 py-1 flex-1 rounded">{editingUser.email}</span></p>

                     <div className="space-y-6">
                        <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">AI Ledger Integrity</label>
                           <input 
                              type="number"
                              value={tempCredits}
                              onChange={(e) => setTempCredits(Number(e.target.value))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-black font-mono focus:border-indigo-500 outline-none transition"
                           />
                        </div>

                        <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">Security Clearance Protocol</label>
                           <select 
                              value={tempRole}
                              onChange={(e: any) => setTempRole(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-black font-bold uppercase tracking-widest text-sm focus:border-indigo-500 outline-none transition appearance-none"
                           >
                              <option value="user">Standard Agent</option>
                              <option value="admin">Root Administrator</option>
                              <option value="banned">Banned / Isolated</option>
                           </select>
                        </div>

                        <div>
                           <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">Global Subscription Tier</label>
                           <select 
                              value={tempTier}
                              onChange={(e: any) => setTempTier(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-black font-bold uppercase tracking-widest text-sm focus:border-amber-500 outline-none transition appearance-none"
                           >
                              <option value="free">UPSC Default (Free)</option>
                              <option value="pro">UPSC Pro Engine</option>
                              <option value="ultimate">UPSC Ultimate Access</option>
                           </select>
                        </div>

                        <label className="flex items-center gap-3 cursor-pointer bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                           <input type="checkbox" checked={tempCloudNotes} onChange={(e) => setTempCloudNotes(e.target.checked)} className="w-5 h-5 rounded border-slate-300 bg-white accent-indigo-500"/>
                           <div>
                              <div className="text-sm font-bold text-black uppercase tracking-widest">Manual Cloud Vault Unlock</div>
                              <div className="text-xs text-black font-medium">Bypass transaction gateway entirely to activate 2GB permanent object storage arrays natively.</div>
                           </div>
                        </label>

                        <button 
                           onClick={pushUpdate}
                           className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 mt-4"
                        >
                           <Save className="w-4 h-4"/> Commit Payload
                        </button>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
