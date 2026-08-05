"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Send, Bell, Loader2, Globe, Database, History, Clock, X } from "lucide-react";

export default function AdminPushNotificationsPage() {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [type, setType] = useState("general");
   const [url, setUrl] = useState("");
   const [isPushing, setIsPushing] = useState(false);
   const [history, setHistory] = useState<any[]>([]);
   const [loadingHistory, setLoadingHistory] = useState(true);
   const [isHistoryOpen, setIsHistoryOpen] = useState(false);
   const [sentNotification, setSentNotification] = useState<{title: string, body: string} | null>(null);

   const fetchHistory = async () => {
      try {
         const q = query(collection(db, "notifications"), orderBy("createdAt", "desc"), limit(10));
         const snap = await getDocs(q);
         const docs = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
         setHistory(docs);
      } catch (err) {
         console.error("Error fetching history:", err);
      } finally {
         setLoadingHistory(false);
      }
   };

   useEffect(() => {
      fetchHistory();
   }, []);


   const handleBroadcast = async () => {
      if (!title || !body) return alert("System Requires a strict Title and Broadcast Body natively.");
      setIsPushing(true);
      try {
         await addDoc(collection(db, "notifications"), {
            title,
            body,
            type,
            contentUrl: url || null,
            isRead: false,
            createdAt: serverTimestamp()
         });
         
         setSentNotification({ title, body });
         setTitle(""); setBody(""); setUrl("");
         fetchHistory();
      } catch (err: any) {
         alert(`Global Transmission failed: ${err.message}`);
      } finally {
         setIsPushing(false);
      }
   };

   return (
      <div className="max-w-4xl mx-auto space-y-8 font-serif">
         <header className="flex items-center justify-between bg-[#0a0f1c]/80 p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Globe className="w-3 h-3 animate-pulse" /> Legacy Firebase Broadcast
               </div>
               <h1 className="text-3xl font-black text-white tracking-tight mb-2">Push Transmission Engine</h1>
               <p className="text-white/50 text-sm font-medium">Bypass localized user arrays perfectly injecting raw systemic data blobs directly into the Firestore Universal 'Notifications' persistence layer.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0 z-10">
               <button onClick={() => setIsHistoryOpen(true)} className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-3 md:px-5 md:py-4 rounded-2xl transition-all shadow-inner group text-white font-bold h-full">
                  <History className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="hidden md:block">History</span>
               </button>
               <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl hidden md:flex items-center justify-center shadow-inner">
                  <Bell className="w-6 h-6 md:w-8 md:h-8 text-amber-500 hover:scale-110 transition-transform" />
               </div>
            </div>
         </header>

         <div className="bg-[#0a0f1c]/50 p-8 rounded-[2rem] border border-white/5 shadow-inner">
            <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-8 font-sans border-b border-white/5 pb-4">
                <Database className="w-5 h-5 text-sky-400" /> Payload Configuration
            </h2>
            
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30">Transmission Title (Subject)</label>
                  <input 
                     value={title} 
                     onChange={(e)=>setTitle(e.target.value)} 
                     placeholder="e.g. UPSC Prelims 2026 Core Notification Released" 
                     className="w-full bg-[#020617] border border-white/5 focus:border-amber-500/50 outline-none rounded-xl px-4 py-4 font-bold text-white placeholder:text-white/20 transition-colors shadow-inner"
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30">Broadcast Body</label>
                  <textarea 
                     value={body} 
                     onChange={(e)=>setBody(e.target.value)} 
                     placeholder="Deploy critical examination metrics or system telemetry changes here..." 
                     className="w-full h-32 bg-[#020617] border border-white/5 focus:border-amber-500/50 outline-none rounded-xl px-4 py-4 font-semibold text-white/80 placeholder:text-white/20 transition-colors resize-none custom-scrollbar shadow-inner"
                  />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30">Vector Data Type</label>
                     <select 
                        value={type}
                        onChange={(e)=>setType(e.target.value)}
                        className="w-full bg-[#020617] border border-white/5 focus:border-amber-500/50 outline-none rounded-xl px-4 py-4 font-bold text-white/80 transition-colors shadow-inner appearance-none"
                     >
                        <option value="general">Core / General Update</option>
                        <option value="article">Editorial / Content Release</option>
                        <option value="question_paper">Question Bank Update / Exams</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30">Redirect Target Network (Optional)</label>
                     <input 
                        value={url} 
                        onChange={(e)=>setUrl(e.target.value)} 
                        placeholder="e.g. https://prepassist.com/upsc/new" 
                        className="w-full bg-[#020617] border border-white/5 focus:border-amber-500/50 outline-none rounded-xl px-4 py-4 font-bold text-sky-400 placeholder:text-white/20 transition-colors shadow-inner"
                     />
                  </div>
               </div>

               <button 
                  onClick={handleBroadcast}
                  disabled={isPushing || !title || !body}
                  className="w-full py-4 mt-8 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-amber-950 font-black tracking-wide text-lg rounded-xl flex items-center justify-center gap-3 transition-all font-sans"
               >
                  {isPushing ? <Loader2 className="w-5 h-5 animate-spin"/> : <Send className="w-5 h-5"/>}
                  {isPushing ? "Transmitting across Cloud Arrays..." : "Execute Global Broadcast Push"}
               </button>
            </div>
         </div>

         {/* History Modal */}
         {isHistoryOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:pl-72 pt-20 lg:pt-4">
               {/* Backdrop */}
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsHistoryOpen(false)}></div>
               
               {/* Modal Content */}
               <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#0a0f1c] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden font-serif">
                  <div className="p-6 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#020617]/50">
                     <h2 className="text-xl font-bold text-white flex items-center gap-3 font-sans">
                         <History className="w-5 h-5 text-indigo-400" /> Recent Transmissions
                     </h2>
                     <button onClick={() => setIsHistoryOpen(false)} className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                        <X className="w-5 h-5" />
                     </button>
                  </div>
                  
                  <div className="p-6 overflow-y-auto custom-scrollbar">
                     {loadingHistory ? (
                        <div className="flex items-center justify-center py-8 text-white/50">
                           <Loader2 className="w-6 h-6 animate-spin" />
                        </div>
                     ) : history.length === 0 ? (
                        <div className="text-center py-8 text-white/40 font-medium font-sans bg-[#020617] rounded-xl border border-white/5">
                           No previous transmissions found.
                        </div>
                     ) : (
                        <div className="space-y-4">
                           {history.map((item) => (
                              <div key={item.id} className="bg-[#020617] border border-white/5 rounded-xl p-5 flex flex-col gap-2 font-sans transition-all hover:border-indigo-500/30">
                                 <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                    <span className="shrink-0 flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-white/30 bg-white/5 px-2 py-1 rounded-md">
                                       <Clock className="w-3 h-3" />
                                       {item.createdAt?.toDate ? new Intl.DateTimeFormat('en-IN', {
                                          day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                                       }).format(item.createdAt.toDate()) : 'Just now'}
                                    </span>
                                 </div>
                                 <p className="text-white/70 text-sm">{item.body}</p>
                                 <div className="flex items-center gap-4 mt-2">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">Type: {item.type}</span>
                                    {item.contentUrl && (
                                       <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 truncate max-w-[200px]">Link: {item.contentUrl}</span>
                                    )}
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}

         {/* Success / Preview Modal */}
         {sentNotification && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:pl-72 pt-20 lg:pt-4">
               <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSentNotification(null)}></div>
               
               <div className="relative w-full max-w-sm flex flex-col bg-slate-900 rounded-[2rem] border border-emerald-500/30 shadow-[0_0_80px_rgba(16,185,129,0.2)] overflow-hidden font-sans animate-in fade-in zoom-in duration-300">
                  <div className="p-8 text-center border-b border-white/5 bg-gradient-to-b from-emerald-500/10 to-transparent">
                     <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/50">
                        <Send className="w-10 h-10 text-emerald-400 translate-x-1 -translate-y-1" />
                     </div>
                     <h2 className="text-2xl font-black text-white mb-2">Broadcast Deployed</h2>
                     <p className="text-white/60 text-sm">Your push notification is now traversing the global network.</p>
                  </div>
                  
                  <div className="p-6 bg-black/40">
                     <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-4 text-center">User Device Preview</p>
                     
                     {/* iOS Style Notification Mockup */}
                     <div className="bg-[#1c1c1e]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl relative overflow-hidden">
                        <div className="flex gap-3">
                           <div className="w-12 h-12 rounded-[14px] bg-white shrink-0 overflow-hidden shadow-inner flex items-center justify-center">
                              <img src="/1024x1024.png" alt="Logo" className="w-full h-full object-contain scale-150 p-1" />
                           </div>
                           <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <div className="flex items-center justify-between mb-0.5">
                                 <span className="font-semibold text-[13px] text-white/90">PrepAssist</span>
                                 <span className="text-[11px] text-white/40">now</span>
                              </div>
                              <h4 className="font-bold text-[14px] text-white leading-tight mb-1">{sentNotification.title}</h4>
                              <p className="text-[13px] text-white/70 leading-snug line-clamp-2">{sentNotification.body}</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-6">
                     <button onClick={() => setSentNotification(null)} className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-sm uppercase tracking-wider">
                        Acknowledge & Close
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
