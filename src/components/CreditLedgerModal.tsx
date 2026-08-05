"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowDownRight, ArrowUpRight, Clock, Loader2, Search } from "lucide-react";
import { fetchCreditUsageHistory, CreditUsageRecord } from "@/lib/credits";

export default function CreditLedgerModal({ isOpen, onClose, userId, currentBalance }: { isOpen: boolean, onClose: () => void, userId: string | null, currentBalance: number | null }) {
   const [history, setHistory] = useState<CreditUsageRecord[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const [search, setSearch] = useState("");

   useEffect(() => {
      if (isOpen && userId) {
         setIsLoading(true);
         fetchCreditUsageHistory(userId).then(data => {
            setHistory(data);
            setIsLoading(false);
         }).catch(err => {
            console.error(err);
            setIsLoading(false);
         });
      }
   }, [isOpen, userId]);

   if (!isOpen) return null;

   const filteredHistory = history.filter(h => h.featureName.toLowerCase().includes(search.toLowerCase()));

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }} 
               className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
               onClick={onClose}
            >
               <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  onClick={e => e.stopPropagation()}
                  className="w-full max-w-2xl bg-gradient-to-b from-[#0a0f1c] to-[#020617] border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.15)] rounded-3xl overflow-hidden flex flex-col max-h-[85vh]"
               >
                  {/* Header */}
                  <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-pink-500/20 border border-orange-500/30 flex items-center justify-center shadow-inner">
                           <Zap className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                           <h2 className="text-xl font-black text-white tracking-tight">AI Compute Ledger</h2>
                           <p className="text-xs font-bold uppercase tracking-widest text-indigo-300/60 mt-0.5">Absolute Execution History</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                           <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Current Balance</p>
                           <p className="text-lg font-black text-orange-400">{currentBalance !== null ? currentBalance.toFixed(1) : '--'} Cr</p>
                        </div>
                        <button onClick={onClose} className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/5">
                           <X className="w-5 h-5 text-white/60" />
                        </button>
                     </div>
                  </div>

                  {/* Search / Filter */}
                  <div className="px-6 py-4 border-b border-white/5 bg-black/20">
                     <div className="relative">
                        <Search className="w-4 h-4 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input 
                           type="text" 
                           placeholder="Search execution traces..."
                           value={search}
                           onChange={e => setSearch(e.target.value)}
                           className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm font-medium text-white placeholder:text-white/30 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all shadow-inner"
                        />
                     </div>
                  </div>

                  {/* Body / List */}
                  <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-3">
                     {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                           <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
                           <p className="text-xs font-black uppercase tracking-widest text-white/40">Syncing Matrices...</p>
                        </div>
                     ) : filteredHistory.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                           <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                              <Zap className="w-8 h-8 text-white/20" />
                           </div>
                           <p className="text-sm font-bold text-white/60">No execution records found.</p>
                           <p className="text-xs font-medium text-white/40 mt-1">Your ledger is completely clean.</p>
                        </div>
                     ) : (
                        filteredHistory.map((record, idx) => {
                           const isDeduction = record.cost > 0;
                           const displayAmount = Math.abs(record.cost).toFixed(1);
                           let dateObj = new Date();
                           if (record.createdAt) {
                              const createdAny = record.createdAt as any;
                              if (typeof createdAny.toDate === 'function') dateObj = createdAny.toDate();
                              else if (createdAny.seconds) dateObj = new Date(createdAny.seconds * 1000);
                              else dateObj = new Date(record.createdAt as any);
                           }

                           return (
                              <motion.div 
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: idx * 0.03 }}
                                 key={record.id || idx}
                                 className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                              >
                                 <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-inner ${isDeduction ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                       {isDeduction ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                    </div>
                                    <div>
                                       <h4 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">{record.featureName}</h4>
                                       <div className="flex items-center gap-2 mt-1">
                                          <Clock className="w-3 h-3 text-white/30" />
                                          <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                                             {dateObj.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className={`text-right ${isDeduction ? 'text-rose-400' : 'text-emerald-400'}`}>
                                    <p className="text-lg font-black">{isDeduction ? '-' : '+'}{displayAmount}</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Cr</p>
                                 </div>
                              </motion.div>
                           )
                        })
                     )}
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
