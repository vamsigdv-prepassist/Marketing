"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Plus, Save, Loader2, Search, CheckCircle2, FileText, UploadCloud, BrainCircuit, X, CalendarDays, Layers, Trash2, AlertCircle, Globe, Calendar, Terminal, Sparkles } from "lucide-react";
import { addCurrentAffair, bulkAddCurrentAffairs, fetchAffairsByDate, deleteCurrentAffair, CurrentAffair } from "@/lib/currentAffairs";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit, updateDoc, setDoc, doc } from "firebase/firestore";
import { getApiUrl } from "@/lib/api";

export default function CurrentAffairsAdmin() {
   const [mounted, setMounted] = useState(false);
   useEffect(() => { setMounted(true); }, []);
   const [tab, setTab] = useState<"manual" | "bulk" | "pib">("pib");
   const [showLogsModal, setShowLogsModal] = useState(false);
   const [ragLogs, setRagLogs] = useState<any[]>([]);
   const [isLoadingLogs, setIsLoadingLogs] = useState(false);
   const [ragSuccessData, setRagSuccessData] = useState<{ processed: number, updated: number, batches: number } | null>(null);

   // Manual Entry States
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [source, setSource] = useState("");
   const [tags, setTags] = useState("");
   const [publishDate, setPublishDate] = useState(() => {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
   });

   // Bulk AI Extraction States
   const [bulkFile, setBulkFile] = useState<File | null>(null);
   const [bulkProvider, setBulkProvider] = useState<string>("The Hindu");
   const [bulkPublishDate, setBulkPublishDate] = useState(() => {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
   });
   const [isExtracting, setIsExtracting] = useState(false);
   const [extractedAffairs, setExtractedAffairs] = useState<CurrentAffair[]>([]);
   const [isInjectingBulk, setIsInjectingBulk] = useState(false);
   const [isSyncing, setIsSyncing] = useState(false);

   const [isSaving, setIsSaving] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [success, setSuccess] = useState(false);
   const [affairsList, setAffairsList] = useState<CurrentAffair[]>([]);

   // PIB Scraper States
   const [pibDate, setPibDate] = useState(() => {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
   });
   const [isFetchingPib, setIsFetchingPib] = useState(false);
   const [pibReleases, setPibReleases] = useState<any[]>([]);
   const [isProcessingPib, setIsProcessingPib] = useState(false);
   const [pibLogs, setPibLogs] = useState<string[]>([]);

   const loadAffairs = async () => {
      setIsLoading(true);
      const targetDate = tab === "pib" ? pibDate : bulkPublishDate;
      const data = await fetchAffairsByDate(targetDate);
      setAffairsList(data);
      setIsLoading(false);
   };

   const parseAndCleanLogs = (snapDocs: any[]) => {
      return snapDocs.map(d => {
         const data = d.data();
         if (data.status === 'running' && Date.now() - (data.startTime || 0) > 300000) {
            updateDoc(doc(db, "rag_logs", d.id), { status: "abandoned" }).catch(() => {});
            return { id: d.id, ...data, status: "abandoned" };
         }
         return { id: d.id, ...data };
      });
   };

   const fetchRagLogs = async () => {
      setIsLoadingLogs(true);
      setShowLogsModal(true);
      try {
         const q = query(collection(db, "rag_logs"), orderBy("startTime", "desc"), limit(20));
         const snap = await getDocs(q);
         setRagLogs(parseAndCleanLogs(snap.docs));
      } catch (e) { console.error("Failed to fetch logs", e); }
      setIsLoadingLogs(false);
   };

   useEffect(() => {
      loadAffairs();
   }, [bulkPublishDate, pibDate, tab]);

   useEffect(() => {
      let interval: any;
      if (showLogsModal) {
         const fetchLogsSilently = async () => {
            if (typeof document !== "undefined" && document.hidden) return;
            try {
               const q = query(collection(db, "rag_logs"), orderBy("startTime", "desc"), limit(20));
               const snap = await getDocs(q);
               setRagLogs(parseAndCleanLogs(snap.docs));
            } catch (e) {
               // Suppress background errors when database connection is closing/hidden
            }
         };
         interval = setInterval(fetchLogsSilently, 3000);
      }
      return () => {
         if (interval) clearInterval(interval);
      };
   }, [showLogsModal, isSyncing]);

   const handleFetchPibReleases = async () => {
      if (!pibDate) return;
      setIsFetchingPib(true);
      setPibReleases([]);
      setPibLogs([`[PIB Scraper] Fetching release list for date: ${pibDate}...`]);

      try {
         const { getAuth } = await import("firebase/auth");
         const { app: fbApp } = await import("@/lib/firebase");
         const token = await getAuth(fbApp).currentUser?.getIdToken();
         const headers: Record<string, string> = { "Content-Type": "application/json" };
         if (token) headers["Authorization"] = `Bearer ${token}`;

         const res = await fetch("/api/admin/pib/fetch-list", {
            method: "POST",
            headers,
            body: JSON.stringify({ date: pibDate })
         });

         const data = await res.json();
         if (!res.ok) throw new Error(data.error || "Unknown server error");

         const list = (data.releases || []).map((r: any) => ({
            ...r,
            selected: !!r.selected // Auto-check if backend marked it as high-yield
         }));

         setPibReleases(list);
         const selectedCount = list.filter((r: any) => r.selected).length;
         setPibLogs(prev => [
            ...prev,
            `[PIB Scraper] Retrieved ${list.length} press releases grouped by ministry.`,
            `[AI Auto-Suggest] Auto-selected ${selectedCount} UPSC High-Yield articles.`
         ]);
      } catch (e: any) {
         setPibLogs(prev => [...prev, `[PIB Scraper] ❌ FETCH ERROR: ${e.message}`]);
         alert("PIB Fetch Failed: " + e.message);
      } finally {
         setIsFetchingPib(false);
      }
   };

   const handleProcessPib = async () => {
      const selected = pibReleases.filter(r => r.selected);
      if (selected.length === 0) {
         alert("Please select at least one release to process.");
         return;
      }

      setIsProcessingPib(true);
      setPibLogs(prev => [
         ...prev,
         `[Auto-Publisher] Starting background synthesis for ${selected.length} articles (one-by-one execution to avoid Vercel Hobby server timeout limits)...`
      ]);

      let successCount = 0;
      let errorCount = 0;
      let skippedCount = 0;

      for (let i = 0; i < selected.length; i++) {
         const release = selected[i];
         setPibLogs(prev => [
            ...prev,
            `[${i + 1}/${selected.length}] Processing: "${release.title.substring(0, 60)}..."`
         ]);

         try {
            const { getAuth } = await import("firebase/auth");
            const { app: fbApp } = await import("@/lib/firebase");
            const token = await getAuth(fbApp).currentUser?.getIdToken();
            const headers: Record<string, string> = { "Content-Type": "application/json" };
            if (token) headers["Authorization"] = `Bearer ${token}`;

            const res = await fetch("/api/admin/pib/process", {
               method: "POST",
               headers,
               body: JSON.stringify({ date: pibDate, releases: [release] })
            });

            const data = await res.json();
            console.log(`[PIB Debug] API response version: ${data._version || 'UNKNOWN (old code)'}, status: ${res.status}`);
            if (!res.ok) throw new Error(data.error || "Server processing crashed");

            if (data.processed && data.processed.length > 0) {
               const p = data.processed[0];
               const vecNote = p.vectorized ? "published & vectorized" : "published (vector sync skipped)";
               setPibLogs(prev => [...prev, `  ✅ SUCCESS: "${p.title}" ${vecNote}.`]);
               successCount++;
            } else if (data.skipped && data.skipped.length > 0) {
               const s = data.skipped[0];
               setPibLogs(prev => [...prev, `  ⏭️ SKIPPED: ${s.reason}`]);
               skippedCount++;
            } else if (data.errors && data.errors.length > 0) {
               const e = data.errors[0];
               setPibLogs(prev => [...prev, `  ❌ ERROR [${e.stage || "unknown"}]: ${e.error}`]);
               errorCount++;
            } else {
               throw new Error("Empty response received from server");
            }
         } catch (err: any) {
            setPibLogs(prev => [...prev, `  ❌ EXCEPTION: ${err.message}`]);
            errorCount++;
         }
      }

      setPibLogs(prev => [
         ...prev,
         `[Auto-Publisher] Finished! Published: ${successCount} | Skipped (already live): ${skippedCount} | Failed: ${errorCount}`
      ]);
      loadAffairs();
      setIsProcessingPib(false);
   };

   const handleManualPublish = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !content) return;

      setIsSaving(true);
      try {
         await addCurrentAffair({
            title,
            content,
            source: source || "Internal Editor",
            tags: tags.split(",").map(t => t.trim()).filter(Boolean),
            publishDate
         });
         setSuccess(true);
         setTitle(""); setContent(""); setSource(""); setTags("");
         loadAffairs();
         setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
         alert("Failed to inject into Firestore Database.");
      } finally {
         setIsSaving(false);
      }
   };

   const handleDeleteArticle = async (id: string, title: string) => {
      if (!window.confirm(`Destructive Action! Are you absolutely sure you want to permanently delete "${title}"?`)) return;
      try {
         await deleteCurrentAffair(id);
         alert(`Successfully deleted "${title}" from the registry.`);
         loadAffairs();
      } catch (err: any) {
         alert("CRASH ERROR: " + err.message);
      }
   };

   const handleAIExtraction = async () => {
      if (!bulkFile || !bulkProvider) return;
      setIsExtracting(true);
      setExtractedAffairs([]);

      try {
         let fileToSend: File | Blob = bulkFile;

         if (bulkFile.size > 100 * 1024 * 1024) {
            console.warn("Large PDF detected, proceeding with full upload.");
         }

         const cleanName = `${Date.now()}_${bulkFile.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
         const { storage, auth } = await import("@/lib/firebase");
         const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");

         console.log("DEBUG AUTH STATE:", auth.currentUser ? "Logged in as " + auth.currentUser.email : "NOT LOGGED IN");
         console.log("DEBUG FILE:", fileToSend);

         const storageRef = ref(storage, `newspapers/${cleanName}`);
         await uploadBytes(storageRef, fileToSend, { contentType: "application/pdf" });
         const publicUrl = await getDownloadURL(storageRef);

         const directApiUrl = getApiUrl("/api/extract/advanced/newspaper");
         console.log("Calling Newspaper Extraction Engine:", directApiUrl);

         let res: Response | null = await fetch(directApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fileUrl: publicUrl, provider: bulkProvider })
         });

         if (!res || !res.ok) {
            const status = res ? res.status : 500;
            const errData = res ? await res.json().catch(() => null) : null;
            const detailMsg = typeof errData?.detail === 'string' ? errData.detail : (errData?.detail ? JSON.stringify(errData?.detail) : null);
            
            if (status === 502 || status === 504) {
               throw new Error(`The AI extraction backend is waking up or scaling. Please wait 10 seconds and click Extract again.`);
            }
            
            throw new Error(detailMsg || errData?.error || `HTTP ${status}: Backend service error. Check API credentials or PDF length.`);
         }

         const { results } = await res.json();
         setExtractedAffairs(results);
      } catch (e: any) {
         alert("EXTRACTION NOTICE: " + e.message);
      } finally {
         setIsExtracting(false);
      }
   };

   const approveAndInjectBulk = async () => {
      if (extractedAffairs.length === 0) return;
      setIsInjectingBulk(true);
      try {
         const enrichedAffairs = extractedAffairs.map(affair => ({
            ...affair,
            publishDate: bulkPublishDate,
            source: bulkProvider
         }));
         await bulkAddCurrentAffairs(enrichedAffairs);
         setExtractedAffairs([]);
         setBulkFile(null);
         setSuccess(true);
         loadAffairs();
         alert("SUCCESS: Pushed exactly " + enrichedAffairs.length + " Newspaper Extractions perfectly to Firestore Database!");
         setTimeout(() => setSuccess(false), 3000);
      } catch (error: any) {
         alert("CRASH LOG: " + error.message);
      } finally {
         setIsInjectingBulk(false);
      }
   };

   const handleRAGSync = async () => {
      setIsSyncing(true);
      setShowLogsModal(true);

      const now = Date.now();
      const sessionId = now.toString();

      const initialLog = {
         id: sessionId,
         startTime: now,
         trigger: 'manual',
         status: 'running',
         syncedCount: 0,
         processedCount: 0,
         durationMs: 0
      };

      try {
         await setDoc(doc(db, "rag_logs", sessionId), initialLog);
         setRagLogs(prev => [initialLog, ...prev.filter(l => l.id !== sessionId)]);
      } catch (e) {
         console.error("Failed to create initial log doc:", e);
      }

      let totalProcessed = 0;
      let totalUpdated = 0;
      let totalEligible = 0;
      let batchNum = 0;

      console.log(`%c[RAG Pipeline] ▶ STARTING`, 'color: #10b981; font-weight: bold; font-size: 14px;');
      console.log(`[RAG Pipeline] Admin clicked once — auto-looping batches of 5 until ALL notes are synced...`);
      console.time('[RAG Pipeline] Total Duration');

      try {
         while (true) {
            batchNum++;

            const res = await fetch("/api/admin/rag-sync", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ sessionId })
            });

            // Vercel timeout returns HTML, not JSON — detect and handle gracefully
            const contentType = res.headers.get("content-type") || "";
            if (!contentType.includes("application/json")) {
               const rawText = await res.text();
               console.error(`[RAG Pipeline] ❌ Non-JSON response (Vercel timeout?):`, rawText.substring(0, 200));
               throw new Error(`Vercel timed out on batch #${batchNum}. Synced ${totalProcessed}/${totalEligible} notes before crash.`);
            }

            const data = await res.json();
            if (!data.success) {
               throw new Error(data.error || "Unknown error from server");
            }

            // Always capture the current total from each response — it shrinks as batches complete
            totalEligible = data.totalEligible || totalEligible;

            totalProcessed += data.processed || 0;
            totalUpdated += data.updated || 0;

            // Log progress as X/total e.g. 5/108, 10/108, 108/108
            console.log(`[RAG Pipeline] ${totalProcessed}/${totalEligible} notes synced`);

            // Refresh logs in UI so the modal updates the count!
            fetchRagLogs();

            if (!data.hasMore) break;

            // Brief pause between batches to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
         }

         console.timeEnd('[RAG Pipeline] Total Duration');
         console.log(`%c[RAG Pipeline] ✅ ALL DONE — ${totalProcessed}/${totalEligible} synced | Vaults Updated: ${totalUpdated}`, 'color: #10b981; font-weight: bold; font-size: 14px;');
         setRagSuccessData({
            processed: totalProcessed,
            updated: totalUpdated,
            batches: batchNum
         });

      } catch (err: any) {
         console.error(`[RAG Pipeline] 💥 CRASHED:`, err);
         if (sessionId) {
            try {
               await updateDoc(doc(db, "rag_logs", sessionId), {
                  status: "error",
                  error: err.message || "Pipeline crashed"
               });
               fetchRagLogs();
            } catch (e) {
               console.error("Failed to update error status in Firestore", e);
            }
         }
         alert("PIPELINE CRASH: " + err.message);
      } finally {
         setIsSyncing(false);
      }
   };


   return (
      <div className="min-h-screen bg-[#0a0f1c] text-white font-sans p-6 md:p-12">
         <header className="mb-12 max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
               <p className="text-sky-400 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" /> Firebase Database Admin
               </p>
               <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
                  Current Affairs Registry
               </h1>
            </motion.div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                  <button
                     onClick={handleRAGSync}
                     disabled={isSyncing}
                     className="px-6 py-2.5 rounded-xl text-sm font-black bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2 border border-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     {isSyncing ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Syncing Global Vault...</>
                     ) : (
                        <><Layers className="w-4 h-4" /> Run RAG Pipeline (Manual Sync)</>
                     )}
                  </button>
                  <button onClick={fetchRagLogs} className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-2">
                     View Logs
                  </button>
               </div>
               <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1 shrink-0">
                  <button onClick={() => setTab("pib")} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === 'pib' ? 'bg-indigo-50 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}>PIB Scraper</button>
                  <button onClick={() => setTab("bulk")} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === 'bulk' ? 'bg-indigo-50 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}>AI Bulk PDF Engine</button>
                  <button onClick={() => setTab("manual")} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === 'manual' ? 'bg-indigo-50 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}>Manual Entry</button>
               </div>
            </div>
         </header>

         <AnimatePresence>
            {ragSuccessData && (
               <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl glass rounded-2xl border border-emerald-500/50 bg-[#064e3b]/90 shadow-[0_20px_50px_rgba(16,185,129,0.3)] backdrop-blur-xl p-5 flex items-center justify-between gap-4"
               >
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                     </div>
                     <div>
                        <h2 className="text-lg font-black text-white mb-0.5">Pipeline Finished!</h2>
                        <p className="text-white/80 text-xs font-medium">Processed {ragSuccessData.processed} notes • Updated {ragSuccessData.updated} vectors • {ragSuccessData.batches} batches.</p>
                     </div>
                  </div>
                  <button onClick={() => setRagSuccessData(null)} className="shrink-0 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-xl font-bold transition-colors">
                     Dismiss
                  </button>
               </motion.div>
            )}
         </AnimatePresence>

         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 flex flex-col gap-6 h-max">
               {success && (
                  <div className="glass p-4 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-3 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                     <CheckCircle2 className="w-5 h-5" />
                     <span className="font-bold">Successfully injected directly into Database!</span>
                  </div>
               )}

               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 md:p-10 border border-indigo-500/20 shadow-2xl bg-[#020617]/80">
                  {tab === "manual" ? (
                     <form onSubmit={handleManualPublish} className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-white/5 pb-4 mb-8"><Plus className="w-6 h-6 text-indigo-400" /> Hardcode Entry</h2>
                        <div>
                           <label className="text-xs uppercase tracking-widest text-indigo-400/80 font-bold mb-2 block">Headlining Topic</label>
                           <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/5 focus:border-indigo-500 outline-none transition-colors" placeholder="e.g. 106th Constitutional Amendment" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="text-xs uppercase tracking-widest text-indigo-400/80 font-bold mb-2 block">Publish Date (Target)</label>
                              <input type="date" required value={publishDate} onChange={e => setPublishDate(e.target.value)} className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/5 focus:border-indigo-500 outline-none transition-colors text-white/90 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                           </div>
                           <div>
                              <label className="text-xs uppercase tracking-widest text-indigo-400/80 font-bold mb-2 block">Source Organization</label>
                              <select required value={source} onChange={e => setSource(e.target.value)} className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/5 focus:border-indigo-500 outline-none transition-colors text-white/90">
                                 <option value="" disabled>Select Source</option>
                                 <option value="PrepAssist Editorial">PrepAssist Editorial</option>
                                 <option value="The Hindu">The Hindu</option>
                                 <option value="Times of India">Times of India</option>
                                 <option value="PIB Release">PIB Release</option>
                              </select>
                           </div>
                        </div>
                        <div>
                           <label className="text-xs uppercase tracking-widest text-indigo-400/80 font-bold mb-2 block">Syllabus Tags</label>
                           <input type="text" value={tags} onChange={e => setTags(e.target.value)} className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/5 focus:border-indigo-500 outline-none transition-colors" placeholder="GS2, Polity" />
                        </div>
                        <div>
                           <label className="text-xs uppercase tracking-widest text-indigo-400/80 font-bold mb-2 block">Comprehensive Bulletin</label>
                           <textarea required value={content} onChange={e => setContent(e.target.value)} className="w-full h-48 bg-[#0a0f1c] rounded-xl p-4 border border-white/5 focus:border-indigo-500 outline-none resize-none transition-colors custom-scrollbar leading-relaxed" />
                        </div>
                        <button type="submit" disabled={isSaving} className="w-full py-5 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-black text-lg transition-colors flex justify-center items-center gap-3 disabled:opacity-50">
                           {isSaving ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />} Publish Direct
                        </button>
                     </form>
                  ) : tab === "bulk" ? (
                     <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-white/5 pb-4 mb-8"><BrainCircuit className="w-6 h-6 text-sky-400" /> Deep Extraction Engine</h2>
                        <p className="text-white/50 text-sm font-medium leading-relaxed mb-6">Upload an entire daily newspaper natively. The AI processor will scan all 20+ pages and cleanly extract only UPSC-relevant summaries formatted strictly for RAG queries.</p>
                        <div className="space-y-6">
                           <div>
                              <label className="text-xs uppercase tracking-widest text-sky-400/80 font-bold mb-3 block">1. Select Publication Target Date</label>
                              <input type="date" required value={bulkPublishDate} onChange={e => setBulkPublishDate(e.target.value)} className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/10 focus:border-sky-500 outline-none transition-colors text-white/90 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert shadow-inner" />
                           </div>
                           <div>
                              <label className="text-xs uppercase tracking-widest text-sky-400/80 font-bold mb-3 block">2. Select Publication</label>
                              <div className="flex gap-4">
                                 {[{ name: "The Hindu" }, { name: "Times of India" }].map(pub => (
                                    <button key={pub.name} onClick={() => setBulkProvider(pub.name)} className={`flex-1 py-5 px-6 rounded-2xl font-black border transition-all flex items-center justify-center gap-4 group ${bulkProvider === pub.name ? 'bg-indigo-50 border-indigo-200 text-[#020617] shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-[1.02]' : 'bg-transparent border-white/10 text-white/50 hover:bg-white/5 hover:border-white/20'}`}><span className="text-lg">{pub.name}</span></button>
                                 ))}
                              </div>
                           </div>
                        </div>
                        <div className="mt-6">
                           <label className="text-xs uppercase tracking-widest text-sky-400/80 font-bold mb-3 block">3. Upload Newspaper Document</label>
                           <label className={`block w-full h-40 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${bulkFile ? 'border-sky-500/50 bg-sky-500/10' : 'border-white/20 hover:border-white/40 hover:bg-white/5'}`}>
                              <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setBulkFile(e.target.files?.[0] || null)} />
                              {bulkFile ? (
                                 <><FileText className="w-8 h-8 text-sky-400 mb-3" /><span className="font-bold text-sky-400 text-center px-4">{bulkFile.name}</span><span className="text-xs font-bold uppercase tracking-widest text-sky-400/60 mt-1">{(bulkFile.size / 1024 / 1024).toFixed(2)} MB PDF LOADED</span></>
                              ) : (
                                 <><UploadCloud className="w-10 h-10 text-white/20 mb-3" /><span className="font-bold text-white/60">Upload Source PDF</span></>
                              )}
                           </label>
                        </div>
                        <button onClick={handleAIExtraction} disabled={!bulkFile || isExtracting} className="w-full mt-4 py-5 bg-sky-500 hover:bg-sky-600 rounded-2xl font-black text-lg transition-colors flex justify-center items-center gap-3 disabled:opacity-50">
                           {isExtracting ? <><Loader2 className="w-6 h-6 animate-spin" /> Deep Processing Document...</> : <><BrainCircuit className="w-6 h-6" /> Synthesize Entire Newspaper</>}
                        </button>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-white/5 pb-4 mb-8">
                           <Globe className="w-6 h-6 text-sky-400" /> PIB Release Auto-Scraper
                        </h2>
                        <p className="text-white/50 text-sm font-medium leading-relaxed mb-6">
                           Scrape the official Press Information Bureau website by date. Auto-select or manually select high-yield releases to synthesize and publish directly.
                        </p>

                        <div className="space-y-6">
                           <div>
                              <label className="text-xs uppercase tracking-widest text-sky-400/80 font-bold mb-3 block">1. Select Publication Target Date</label>
                              <input
                                 type="date"
                                 required
                                 value={pibDate}
                                 onChange={e => setPibDate(e.target.value)}
                                 className="w-full bg-[#0a0f1c] rounded-xl p-4 border border-white/10 focus:border-sky-500 outline-none transition-colors text-white/90 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert shadow-inner"
                              />
                           </div>

                           <button
                              onClick={handleFetchPibReleases}
                              disabled={isFetchingPib || isProcessingPib}
                              className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-black text-lg transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
                           >
                              {isFetchingPib ? (
                                 <><Loader2 className="w-6 h-6 animate-spin" /> Fetching Releases...</>
                              ) : (
                                 <><Calendar className="w-6 h-6 text-indigo-200" /> Fetch PIB Releases</>
                              )}
                           </button>
                        </div>

                        {pibReleases.length > 0 && (
                           <div className="mt-8 pt-6 border-t border-white/5 space-y-6">
                              <div className="flex items-center justify-between">
                                 <span className="text-xs uppercase tracking-widest text-sky-400/80 font-bold">
                                    2. Select Articles ({pibReleases.filter(r => r.selected).length} / {pibReleases.length})
                                 </span>
                                 <div className="flex gap-2">
                                    <button
                                       onClick={() => setPibReleases(prev => prev.map(r => ({ ...r, selected: true })))}
                                       className="text-[10px] uppercase font-bold tracking-wider text-sky-400 hover:text-indigo-300"
                                    >
                                       Select All
                                    </button>
                                    <span className="text-white/20">|</span>
                                    <button
                                       onClick={() => setPibReleases(prev => prev.map(r => ({ ...r, selected: false })))}
                                       className="text-[10px] uppercase font-bold tracking-wider text-sky-400 hover:text-indigo-300"
                                    >
                                       Clear All
                                    </button>
                                 </div>
                              </div>

                              <div className="max-h-[350px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                                 {/* Group by Ministry */}
                                 {Object.entries(
                                    pibReleases.reduce((acc: Record<string, any[]>, curr) => {
                                       if (!acc[curr.ministry]) acc[curr.ministry] = [];
                                       acc[curr.ministry].push(curr);
                                       return acc;
                                    }, {})
                                 ).map(([ministry, items]: [string, any[]]) => (
                                    <div key={ministry} className="space-y-2">
                                       <h4 className="text-[11px] font-bold text-sky-400/70 tracking-wide uppercase mt-2">
                                          {ministry}
                                       </h4>
                                       <div className="space-y-1.5 pl-2 border-l border-white/5">
                                          {items.map(release => (
                                             <div
                                                key={release.prid}
                                                onClick={() => {
                                                   setPibReleases(prev => prev.map(r => r.prid === release.prid ? { ...r, selected: !r.selected } : r));
                                                }}
                                                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${release.selected
                                                      ? 'bg-indigo-500/10 border-indigo-500/40 text-white'
                                                      : 'bg-black/20 border-white/5 text-white/60 hover:border-white/10'
                                                   }`}
                                             >
                                                <div className="mt-0.5 shrink-0">
                                                   {release.selected ? (
                                                      <div className="w-4 h-4 bg-indigo-500 rounded flex items-center justify-center text-[#0a0f1c]">
                                                         <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                                      </div>
                                                   ) : (
                                                      <div className="w-4 h-4 rounded border border-white/20" />
                                                   )}
                                                </div>
                                                <div className="text-xs font-semibold leading-relaxed">
                                                   {release.title}
                                                   <span className="text-[10px] text-white/30 ml-2">({release.prid})</span>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 ))}
                              </div>

                              <button
                                 onClick={handleProcessPib}
                                 disabled={isProcessingPib || pibReleases.filter(r => r.selected).length === 0}
                                 className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-[#020617] rounded-2xl font-black text-lg transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                              >
                                 {isProcessingPib ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Auto-Publishing...</>
                                 ) : (
                                    <><Save className="w-5 h-5" /> Process & Publish Selected</>
                                 )}
                              </button>
                           </div>
                        )}

                        {/* Real-time status logs */}
                        {pibLogs.length > 0 && (
                           <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                              <label className="text-xs uppercase tracking-widest text-sky-400/80 font-bold flex items-center gap-2">
                                 <Terminal className="w-4 h-4" /> Scraper Execution Logs
                              </label>
                              <div className="w-full h-32 bg-[#020617] rounded-xl p-4 font-mono text-[10px] leading-relaxed text-sky-400 overflow-y-auto custom-scrollbar border border-white/5 shadow-inner">
                                 {pibLogs.map((log, index) => (
                                    <div key={index} className="whitespace-pre-wrap">{log}</div>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  )}
               </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 h-[85vh]">
               {extractedAffairs.length > 0 && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl border border-green-500/30 bg-green-500/5 shadow-[0_0_50px_rgba(34,197,94,0.1)] p-8">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-green-400 flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Generated {extractedAffairs.length} Injection Blocks</h3>
                        <button onClick={() => setExtractedAffairs([])} className="p-2 hover:bg-white/10 rounded-full text-white/50 transition-colors"><X className="w-5 h-5" /></button>
                     </div>
                     <div className="max-h-80 overflow-y-auto pr-4 custom-scrollbar space-y-4 mb-6">
                        {extractedAffairs.map((affair, i) => (
                           <div key={i} className="bg-[#020617]/50 rounded-2xl p-6 border border-white/5 shadow-inner">
                              <h4 className="font-black text-lg mb-2">{affair.title}</h4>
                              <div className="flex gap-2 mb-4">{affair.tags?.map(t => <span key={t} className="text-[10px] uppercase font-bold tracking-widest bg-white/10 text-white/60 px-2 py-1 rounded-md">{t}</span>)}</div>
                               <div className="text-white/70 text-sm leading-relaxed">
                                  {affair.content?.split('\n').map((line, idx) => {
                                     const trimmed = line.trim();
                                     if (trimmed.startsWith('### ')) return <h5 key={idx} className="text-sm font-bold text-sky-400 mt-4 mb-1">{trimmed.replace('### ', '')}</h5>;
                                     if (trimmed.startsWith('## ')) return <h4 key={idx} className="text-base font-bold text-sky-300 mt-4 mb-1">{trimmed.replace('## ', '')}</h4>;
                                     if (trimmed.startsWith('# ')) return <h3 key={idx} className="text-lg font-bold text-sky-200 mt-4 mb-2">{trimmed.replace('# ', '')}</h3>;
                                     if (trimmed.length === 0) return <div key={idx} className="h-1" />;
                                     const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ');
                                     const cleanLine = isBullet ? trimmed.substring(2) : line;
                                     const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
                                     const lineContent = parts.map((p, j) => {
                                        if (p.startsWith('**') && p.endsWith('**')) {
                                           return <strong key={j} className="font-bold text-white">{p.slice(2, -2)}</strong>;
                                        }
                                        return p;
                                     });
                                     if (isBullet) {
                                        return (
                                           <div key={idx} className="flex items-start gap-2 pl-2 my-1 text-white/80">
                                              <span className="text-sky-400 font-bold">•</span>
                                              <div>{lineContent}</div>
                                           </div>
                                        );
                                     }
                                     return <p key={idx} className="mb-2 text-white/80">{lineContent}</p>;
                                  })}
                               </div>
                           </div>
                        ))}
                     </div>
                     <button onClick={approveAndInjectBulk} disabled={isInjectingBulk} className="w-full py-4 bg-green-500 hover:bg-green-600 text-[#020617] rounded-2xl font-black text-lg transition-colors shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
                        {isInjectingBulk ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />} Publish
                     </button>
                  </motion.div>
               )}

               <div className="glass rounded-3xl border border-white/5 bg-[#020617]/50 shadow-2xl flex flex-col flex-1 overflow-hidden">
                  <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/[0.01]">
                     <h3 className="text-xl font-bold text-white flex items-center gap-3"><Database className="w-5 h-5 text-sky-400" /> Firebase Remote Data</h3>
                  </div>
                  <div className="p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                     {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-full opacity-50"><Loader2 className="w-8 h-8 animate-spin mb-4" /><p>Querying Database Entities...</p></div>
                     ) : affairsList.length === 0 ? (
                        <div className="text-center p-10 opacity-50 border border-dashed border-white/20 rounded-3xl"><FileText className="w-12 h-12 mx-auto mb-4" /><p className="font-bold text-xl">Table is currently empty</p></div>
                     ) : (
                        affairsList.map(affair => (
                           <div key={affair.id} className="bg-black/40 rounded-3xl p-6 border border-white/5 shadow-inner hover:border-white/10 transition-colors relative group">
                              <button onClick={() => handleDeleteArticle(affair.id!, affair.title)} className="absolute top-6 right-6 p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md"><Trash2 className="w-4 h-4" /></button>
                              <div className="flex justify-between items-start mb-4 pr-12">
                                 <div><h4 className="text-xl font-black text-indigo-100">{affair.title}</h4><p className="text-xs font-bold text-sky-400 mt-1 flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {affair.publishDate || "Today"}</p></div>
                                 <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-indigo-500/30">{affair.source}</span>
                              </div>
                              <p className="text-white/60 text-sm leading-relaxed mb-6 whitespace-pre-wrap">{affair.content}</p>
                              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                 <div className="flex gap-2">{affair.tags?.map((t, i) => (<span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-sky-400/80 px-2 py-1 rounded-md border border-white/5">{t}</span>))}</div>
                              </div>
                           </div>
                        ))
                     )}
                   </div>
                </div>
             </div>
          </div>

          <AnimatePresence>
            {showLogsModal && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:pl-72 bg-black/60 backdrop-blur-sm">
                  <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#0f172a] border border-white/10 shadow-2xl rounded-3xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden">
                     <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                           <Database className="w-5 h-5 text-indigo-400" /> RAG Pipeline Execution Logs
                        </h2>
                        <button onClick={() => setShowLogsModal(false)} className="p-2 hover:bg-white/10 rounded-full transition-all">
                           <X className="w-5 h-5 text-white/50" />
                        </button>
                     </div>

                     <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                        {isSyncing && (
                           <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
                              <Loader2 className="w-5 h-5 text-amber-400 animate-spin shrink-0 mt-0.5" />
                              <div>
                                 <h4 className="text-amber-400 font-bold text-sm">
                                    Pipeline in Progress: Processing background batches...
                                 </h4>
                                 <p className="text-amber-400/80 text-xs mt-1">Please keep this page open until the sync completes. Synced notes are saved immediately.</p>
                              </div>
                           </div>
                        )}
                        {isLoadingLogs ? (
                           <div className="flex flex-col items-center justify-center py-20 gap-4 text-white/50">
                              <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
                              <p>Loading execution history...</p>
                           </div>
                        ) : ragLogs.length === 0 ? (
                           <div className="text-center py-20 text-white/50">
                              <Layers className="w-12 h-12 mx-auto mb-4 opacity-20" />
                              <p>No RAG pipeline executions found yet.</p>
                           </div>
                        ) : (
                           <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.01]">
                              <table className="w-full text-left text-sm text-white/70 border-collapse">
                                 <thead className="bg-white/5 text-white/50 text-xs uppercase font-bold tracking-wider">
                                    <tr>
                                       <th className="px-5 py-4 whitespace-nowrap">Start Time</th>
                                       <th className="px-5 py-4 whitespace-nowrap">Trigger</th>
                                       <th className="px-5 py-4 whitespace-nowrap">Notes Progress</th>
                                       <th className="px-5 py-4 whitespace-nowrap">New Updates Found</th>
                                       <th className="px-5 py-4 whitespace-nowrap">Time Taken</th>
                                       <th className="px-5 py-4 whitespace-nowrap">Status</th>
                                    </tr>
                                 </thead>
                                 <tbody className="divide-y divide-white/5">
                                    {ragLogs.map((log) => {
                                       const isActiveRun = log.status === 'running' && isSyncing && ragLogs[0]?.id === log.id && Date.now() - (log.startTime || 0) < 300000;
                                       const secs = log.durationMs && log.durationMs > 0 
                                          ? log.durationMs / 1000 
                                          : isActiveRun && log.startTime 
                                             ? Math.max(0, (Date.now() - log.startTime) / 1000) 
                                             : log.lastUpdated && log.startTime 
                                                ? Math.max(0, (log.lastUpdated - log.startTime) / 1000) 
                                                : 0;
                                       const mins = Math.floor(secs / 60);
                                       const remainingSecs = Math.round(secs % 60);
                                       const formattedTime = secs > 0 ? (mins > 0 ? `${mins}m ${remainingSecs}s` : `${remainingSecs}s`) : '-';

                                    const synced = log.syncedCount || 0;
                                    const total = log.processedCount || 0;
                                    const remaining = Math.max(0, total - synced);
                                    const isComplete = log.status === 'success' || (total > 0 && synced >= total) || total === 0;

                                    return (
                                       <tr key={log.id} className="hover:bg-white/[0.03] transition-colors">
                                          <td className="px-5 py-4 font-medium text-white text-xs whitespace-nowrap">
                                             {mounted && log.startTime ? new Date(log.startTime).toLocaleString() : '-'}
                                          </td>
                                          <td className="px-5 py-4 whitespace-nowrap">
                                             <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${log.trigger === 'cron' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                                                {log.trigger?.toUpperCase() || 'MANUAL'}
                                             </span>
                                          </td>
                                          <td className="px-5 py-4 font-bold text-xs whitespace-nowrap">
                                             {isComplete ? (
                                                synced === 0 ? (
                                                   <span className="text-emerald-400 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> All Notes Up to Date (0 Pending)</span>
                                                ) : (
                                                   <span className="text-emerald-400">All {synced} Notes Synced (0 Pending)</span>
                                                )
                                             ) : (
                                                <span className="text-amber-300">{synced} of {total} Synced ({remaining} Remaining)</span>
                                             )}
                                          </td>
                                          <td className="px-5 py-4 whitespace-nowrap">
                                             {log.updatedCount > 0 ? (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-500/15 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                                                   <Sparkles className="w-3.5 h-3.5" /> +{log.updatedCount} New Updates
                                                </span>
                                             ) : (
                                                <span className="text-white/40 text-xs font-normal">0 New Updates</span>
                                             )}
                                          </td>
                                          <td className="px-5 py-4 font-mono text-xs text-white/80 whitespace-nowrap">
                                             {formattedTime}
                                          </td>
                                          <td className="px-5 py-4 text-xs whitespace-nowrap">
                                             {log.status === 'success' ? (
                                                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold"><CheckCircle2 className="w-4 h-4" /> Complete</span>
                                             ) : log.status === 'running' && isSyncing && ragLogs[0]?.id === log.id && Date.now() - log.startTime < 300000 ? (
                                                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold"><Loader2 className="w-4 h-4 animate-spin" /> Running</span>
                                             ) : log.syncedCount && log.syncedCount > 0 ? (
                                                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold" title="Interrupted — synced notes were saved"><AlertCircle className="w-4 h-4" /> Interrupted ({log.syncedCount} Saved)</span>
                                             ) : (
                                                <span className="inline-flex items-center gap-1.5 text-red-400 font-bold"><X className="w-4 h-4" /> Failed</span>
                                             )}
                                          </td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        </div>
                     )}
                  </div>
               </motion.div>
            </motion.div>
         )}
         </AnimatePresence>
      </div>
   );
}
