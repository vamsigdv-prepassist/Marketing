"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, LayoutDashboard, FileText, Target, Activity, Settings, User, LogOut, ChevronDown, PenTool, Globe, Cloud, ListChecks, BookOpen, CreditCard, Zap, Network, Bell, FolderUp, Database, HardDrive, Bot, BrainCircuit, ScanText, CalendarDays, GraduationCap } from "lucide-react";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, query, collection, where } from "firebase/firestore";
import { fetchUserProfile } from "@/lib/credits";
import { fetchCloudNotes, formatBytes } from "@/lib/cloud_notes";
import { Engagespot } from "@engagespot/react-component";
import SupportWidget from "./SupportWidget";
import ReferralWidget from "./ReferralWidget";
import CreditLedgerModal from "./CreditLedgerModal";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname() || "";
   const router = useRouter();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [userEmail, setUserEmail] = useState<string | null>(null);
   const [userName, setUserName] = useState<string | null>(null);
   const [creditBalance, setCreditBalance] = useState<number | null>(null);
   const [dataVolumeBytes, setDataVolumeBytes] = useState<number>(0);
   const [unreadCount, setUnreadCount] = useState<number>(0);
   const [userTier, setUserTier] = useState<string>("free");
   const [userId, setUserId] = useState<string | null>(null);
   const [isLedgerOpen, setIsLedgerOpen] = useState(false);
   const [subjectViewedAt, setSubjectViewedAt] = useState<Record<string, number>>({});
   const [unreadNotesMap, setUnreadNotesMap] = useState<any[]>([]);
   const [notesTrackerBadge, setNotesTrackerBadge] = useState<number>(0);

   useEffect(() => {
      if (!userId) return;
      const coreSubjects = ["Polity", "History", "Geography", "Economy", "Environment", "Art & Culture", "Science & Tech"];
      const storedCustom = typeof window !== "undefined" ? localStorage.getItem(`local_custom_core_${userId}`) : null;
      let custom = [];
      if (storedCustom && storedCustom !== "undefined") {
         try { custom = JSON.parse(storedCustom); } catch (e) { }
      }
      const optional = typeof window !== "undefined" ? localStorage.getItem(`local_optional_${userId}`) : null;
      const validSubjects = [...coreSubjects, ...custom, optional].filter(Boolean);

      let count = 0;
      unreadNotesMap.forEach(n => {
         if (!validSubjects.includes(n.subject)) return;
         if (n.hasUpdates) count += 1;
      });
      setNotesTrackerBadge(count);
   }, [unreadNotesMap, userId]);

   useEffect(() => {
      let unsub: (() => void) | undefined;
      let unsubNotes: (() => void) | undefined;

      const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
         if (user) {
            setUserId(user.uid);
            setUserEmail(user.email || null);
            setUserName(user.displayName || user.email?.split('@')[0] || 'Explorer');

            // Ensure native Firebase Profile is strictly initialized with Free Credits if new
            const cachedRef = typeof window !== 'undefined' ? localStorage.getItem('referralPayload') : null;
            await fetchUserProfile(user.uid, user.email || undefined, cachedRef);
            if (cachedRef && typeof window !== 'undefined') localStorage.removeItem('referralPayload');

            // Fetch Vault Storage Native Weight kjjk
            try {
               const vaultNodes = await fetchCloudNotes(user.uid);
               const nativeWeight = vaultNodes.reduce((acc, curr) => acc + (curr.fileSizeBytes || 102400), 0);
               setDataVolumeBytes(nativeWeight);
            } catch (e) { }

            // Bind Real-Time Ledger listener directly updating UI on deduction mathematically
            unsub = onSnapshot(doc(db, "users", user.uid), (docSnap) => {
               if (docSnap.exists()) {
                  const data = docSnap.data();
                  setCreditBalance(data.credits);
                  if (data.tier) setUserTier(data.tier);
                  setSubjectViewedAt(data.subjectViewedAt || {});
               }
            });

            const q = query(collection(db, "cloud_notes"), where("userId", "==", user.uid), where("isStaged", "==", false), where("hasUpdates", "==", true));
            unsubNotes = onSnapshot(q, (snap) => {
               const arr: any[] = [];
               snap.forEach(d => arr.push(d.data()));
               setUnreadNotesMap(arr);
            });
         } else {
            setUnreadNotesMap([]);
            if (unsubNotes) unsubNotes();
         }
      });

      // Notification Global Synchronization Array
      const syncNotifications = async () => {
         try {
            const { getDocs, collection } = await import("firebase/firestore");
            const querySnapshot = await getDocs(collection(db, "notifications"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id }));
            if (data) {
               const readArr = JSON.parse(localStorage.getItem('prepassist_read_notifs') || '[]');
               const unread = data.filter((n: { id: string }) => !readArr.includes(n.id)).length;
               setUnreadCount(unread);
            }
         } catch (e) {
            console.error("Sync Notifs Error:", e);
         }
      };

      syncNotifications();
      window.addEventListener('dashboard_notifs_read', syncNotifications);

      // Study time tracker
      const studyInterval = setInterval(async () => {
         if (auth.currentUser && document.visibilityState === "visible") {
            try {
               const { doc, setDoc, increment } = await import("firebase/firestore");
               const today = new Date();
               const dateStr = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0');
               const docRef = doc(db, "users", auth.currentUser.uid, "daily_stats", dateStr);
               await setDoc(docRef, {
                  studyMinutes: increment(1),
                  updatedAt: Date.now(),
                  dateStr
               }, { merge: true });
            } catch (e) {
               console.error("Failed to sync study minutes:", e);
            }
         }
      }, 60000);

      return () => {
         window.removeEventListener('dashboard_notifs_read', syncNotifications);
         unsubscribeAuth();
         if (unsub) unsub();
         if (unsubNotes) unsubNotes();
         clearInterval(studyInterval);
      };
   }, []);

   const handleSignOut = async () => {
      await signOut(auth);
      router.push("/");
   };

   const publicRoutes = ["/", "/login", "/pricing", "/privacy-policy", "/terms", "/support", "/delete-account", "/services", "/services/aiforupscpreparation", "/services/upscaiapp", "/services/aiupscpreparationplatform", "/services/upscmainanswerevaluationai", "/services/pdftoquizgeneratorupsc", "/services/upscnotesmakerai", "/services/aiupsctestseries", "/services/upscaianswerwritingpractice", "/services/upsccurrentaffairsaitool", "/services/prepassistupscapp", "/services/upscmainsanswercheckeronline", "/services/aistudyappforupscaspirants", "/services/bestaiappforupsc2025", "/services/bestaitoolforupscpreparation", "/services/upscpreparationappwithai", "/services/aivstraditionalupsccoaching", "/services/freeaitoolforupscnotes", "/services/upscaimocktestplatform", "/services/bestappforupscmainswritingpractice", "/services/upscstudyappwithcurrentaffairs", "/services/aipoweredupsccoachingalternative", "/services/upscappwithpdfquizmaker", "/services/prepassistvsunacademyai"];
   const normalizedPathname = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
   if (publicRoutes.includes(normalizedPathname) || normalizedPathname.startsWith("/blog") || normalizedPathname.startsWith("/404") || normalizedPathname.startsWith("/not-found") || pathname.startsWith("/admin")) {
      return <>{children}</>;
   }

   const NavLink = ({ href, icon: Icon, label, badgeCount }: any) => {
      const isActive = pathname === href;
      return (
         <Link href={href} className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${isActive ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
            <div className="flex items-center gap-3">
               <Icon className="w-5 h-5" /> {label}
            </div>
            {badgeCount > 0 && (
               <div className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                  {badgeCount}
               </div>
            )}
         </Link>
      );
   };

   const ExpandableNavLink = ({ icon: Icon, label, defaultExpanded = false, subLinks }: any) => {
      const [isExpanded, setIsExpanded] = useState(defaultExpanded);
      const isChildActive = subLinks.some((sl: any) => pathname.startsWith(sl.href));

      return (
         <div className="flex flex-col">
            <button onClick={() => setIsExpanded(!isExpanded)} className={`!flex !items-center !justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all w-full !text-left ${isChildActive ? 'text-indigo-400' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
               <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" /> {label}
               </div>
               <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-96 mt-1 opacity-100" : "max-h-0 opacity-0"}`}>
               <div className="pl-6 pr-2 py-2 flex flex-col gap-1 border-l-2 border-white/5 ml-6">
                  {subLinks.map((link: any, idx: number) => {
                     const isActive = pathname === link.href;
                     return (
                        <Link
                           key={idx}
                           href={link.href}
                           onClick={() => setIsSidebarOpen(false)}
                           className={`block px-4 py-2 rounded-lg text-xs font-bold transition-all ${isActive ? 'bg-indigo-500/20 text-indigo-300' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                           {link.label}
                        </Link>
                     )
                  })}
               </div>
            </div>
         </div>
      );
   };

   return (
      <div className="min-h-screen bg-[#020617] flex">
         {/* Mobile Sidebar Overlay */}
         {isSidebarOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
         )}

         {/* Sidebar Navigation Matrix */}
         <aside className={`fixed left-0 top-0 h-screen w-72 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 backdrop-blur-3xl border-r border-white/5 flex flex-col z-50 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/5 bg-transparent shrink-0">
               <Link href="/dashboard" className="flex items-center justify-center bg-white px-2.5 py-1.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-sm border border-white/10 inline-block mt-6" onClick={() => setIsSidebarOpen(false)}>
                  <Image src="/1024x1024.png" unoptimized alt="PrepAssist Branding" width={60} height={60} className="object-contain" priority />
               </Link>
               {/* Mobile Close Button inside Sidebar */}
               <button className="md:hidden p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors" onClick={() => setIsSidebarOpen(false)}>
                  <X className="w-5 h-5" />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
               <div className="text-xs font-black uppercase tracking-widest text-white/30 px-4 mb-4 mt-2">Core Ecosystem</div>
               <NavLink href="/dashboard" icon={LayoutDashboard} label="Dashboard Hub" />
               <a href="/courses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-white/50 hover:text-white hover:bg-white/5">
                  <GraduationCap className="w-5 h-5" /> Courses
               </a>
               <NavLink href="/calendar" icon={CalendarDays} label="Study Calendar" />
               <NavLink href="/ai-mentor" icon={Bot} label="AI Mentor" />
               <NavLink href="/account/billing" icon={CreditCard} label="Billing & Plans" />
               <NavLink href="/quiz" icon={FileText} label="PDF Extraction" />
               <ExpandableNavLink
                  icon={ScanText}
                  label="X-Ray Reading"
                  defaultExpanded={pathname.startsWith('/xray-reader')}
                  subLinks={[
                     { href: '/xray-reader/polity', label: 'Polity Agent' },
                     { href: '/xray-reader/history', label: 'History Agent' },
                     { href: '/xray-reader/economy', label: 'Economy Agent' },
                     { href: '/xray-reader/geography', label: 'Geography Agent' },
                     { href: '/xray-reader/environment', label: 'Environment Agent' },
                     { href: '/xray-reader/science', label: 'Science Agent' },
                  ]}
               />
               <NavLink href="/ai-prelims" icon={Target} label="AI Prelims Array" />
               <NavLink href="/progress" icon={Activity} label="Progress Analytics" />

               <div className="text-[10px] font-black uppercase tracking-widest text-white/30 px-4 mb-4 mt-8 pt-4 border-t border-white/5">Advanced Subsystems</div>
               <NavLink href="/mains-bank" icon={PenTool} label="Mains Answer Bank" />
               <NavLink href="/evaluate" icon={PenTool} label="Mains Evaluation" />
               <NavLink href="/daily-news" icon={Globe} label="Current Affairs" />
               <NavLink href="/question-bank" icon={ListChecks} label="Prelims Unlimited Question Bank" />
               <NavLink href="/saved-articles" icon={Globe} label="Saved Articles" />
               <NavLink href="/raw-notes" icon={FolderUp} label="Raw Notes" />
               <NavLink href="/rag-notes" icon={Cloud} label="RAG Notes AI" />
               <NavLink href="/mindmaps" icon={Network} label="AI Mindmaps" />
               <NavLink href="/notes-tracker" icon={BookOpen} label="Notes Tracker" badgeCount={notesTrackerBadge} />
               <NavLink href="/cloud-vault" icon={Database} label="Cloud Data Vault" />
            </div>

            <div className="p-6 border-t border-white/5 bg-transparent flex flex-col gap-3">
               {userTier === 'ultimate' ? (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] border border-orange-400/50">
                     <Target className="w-4 h-4 text-white" />
                     <span className="font-black text-xs uppercase tracking-widest text-white shadow-sm">Ultimate Status</span>
                  </div>
               ) : userTier === 'pro' ? (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-indigo-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)] border border-indigo-400/30">
                     <BrainCircuit className="w-4 h-4 text-indigo-400" />
                     <span className="font-black text-xs uppercase tracking-widest text-indigo-300">UPSC Pro Active</span>
                  </div>
               ) : (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                     <Activity className="w-4 h-4 text-slate-400" />
                     <span className="font-black text-xs uppercase tracking-widest text-slate-400">UPSC Basic</span>
                  </div>
               )}

               <div className="text-[10px] uppercase font-black tracking-widest text-indigo-200/40 text-center mt-1">
                  PrepAssist Cloud Network
               </div>
            </div>
         </aside>

         {/* Main Execution Content Layer */}
         <main className="flex-1 md:ml-72 flex flex-col min-h-screen relative overflow-x-hidden text-white selection:bg-indigo-500/30 w-full">
            {/* Top Glass Header - Hardened for Notches */}
            <header className="sticky top-0 h-auto min-h-[5rem] py-2 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5 z-30 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-2 pt-[env(safe-area-inset-top,0.5rem)]">
               <div className="flex items-center justify-between w-full md:w-auto">
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white/30 truncate max-w-[100px] md:max-w-none">
                        {pathname.replace('/', '').toUpperCase() || 'DASHBOARD'}
                     </span>
                  </div>
                  {/* Mobile Menu Trigger for consistency */}
                  <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 bg-white/5 rounded-lg border border-white/10">
                     <Menu className="w-4 h-4 text-white" />
                  </button>
               </div>

               <div className="flex items-center gap-2 md:gap-5 w-full md:w-auto justify-end overflow-x-auto no-scrollbar pb-1 md:pb-0">
                  {/* Realtime Engagespot Global Notification Hub */}
                  {process.env.NEXT_PUBLIC_ENGAGESPOT_API_KEY && (
                     <div className="relative p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5 cursor-pointer shadow-inner z-[100] flex items-center justify-center shrink-0">
                        <Engagespot
                           apiKey={process.env.NEXT_PUBLIC_ENGAGESPOT_API_KEY}
                           userId={userEmail || "anonymous"}
                           theme={{ colors: { brandingPrimary: "#6366f1" } }}
                        />
                     </div>
                  )}

                  {/* Realtime Credit Rendering Link - Scaled for Mobile */}
                  <button onClick={() => setIsLedgerOpen(true)} className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full hover:bg-orange-500/20 transition-all group shrink-0">
                     <Zap className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110" />
                     <span className="text-[10px] md:text-sm font-black text-orange-300">
                        {creditBalance !== null ? `${creditBalance} Cr` : 'Sync'}
                     </span>
                  </button>

                  {/* Cloud Vault Volume Tracking Link */}
                  <Link href="/cloud-vault" className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full hover:bg-emerald-500/20 transition-all group shrink-0">
                     <HardDrive className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110" />
                     <span className="text-[10px] md:text-sm font-black text-emerald-300">
                        {formatBytes(dataVolumeBytes)}
                     </span>
                  </Link>

                  {/* Account Management Dropdown */}
                  <div className="relative shrink-0">
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 bg-white/5 pl-1.5 pr-2 py-1 rounded-full border border-white/5 shadow-inner hover:bg-white/10 transition-colors group"
                     >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center font-black text-[10px] text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                           {userName ? userName.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <ChevronDown className={`w-3 h-3 text-white/50 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                     </button>
                  </div>

                  {isMenuOpen && (
                     <>
                        <div className="fixed inset-0 z-40 cursor-default" onClick={() => setIsMenuOpen(false)} />
                        <div className="absolute right-0 top-full mt-2 w-64 bg-[#0a0f1c] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 overflow-hidden backdrop-blur-3xl">
                           <div className="p-4 border-b border-white/10">
                              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Identity Token</p>
                              <p className="text-xs font-bold text-white/90 truncate">{userEmail || "Secure Session"}</p>
                           </div>

                           <ReferralWidget userId={userId} />

                           <div className="p-2 space-y-1">
                              <Link href="/account/settings" onClick={() => setIsMenuOpen(false)} className="w-full px-4 py-3 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-xl flex items-center gap-3">
                                 <User className="w-4 h-4 text-sky-400" /> Settings
                              </Link>
                              <button onClick={handleSignOut} className="w-full px-4 py-3 text-xs font-bold text-rose-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl flex items-center gap-3">
                                 <LogOut className="w-4 h-4" /> Sign Out
                              </button>
                           </div>
                        </div>
                     </>
                  )}
               </div>
            </header>

            {/* Internal Payload Engine */}
            <div className="flex-1 relative pb-40 md:pb-20 mt-6 overflow-y-auto px-4 md:px-8">
               {children}
            </div>

            {/* Mobile Bottom Navigation Architecture - Hardened for Home Bar */}
            <nav className="fixed bottom-0 left-0 w-full h-auto min-h-[4rem] bg-[#020617]/95 backdrop-blur-2xl border-t border-white/10 z-40 md:hidden flex items-center justify-around px-2 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-[env(safe-area-inset-bottom,1rem)] pt-2">
               <Link href="/dashboard" className={`flex flex-col items-center justify-center w-full space-y-1 transition-all ${pathname === '/dashboard' ? 'text-indigo-400' : 'text-white/40'}`}>
                  <LayoutDashboard className="w-5 h-5" />
                  <span className="text-[9px] font-bold">Home</span>
               </Link>
               <Link href="/daily-news" className={`flex flex-col items-center justify-center w-full space-y-1 transition-all ${pathname === '/daily-news' ? 'text-indigo-400' : 'text-white/40'}`}>
                  <Globe className="w-5 h-5" />
                  <span className="text-[9px] font-bold">News</span>
               </Link>
               <Link href="/question-bank" className={`flex flex-col items-center justify-center w-full space-y-1 transition-all ${pathname === '/question-bank' ? 'text-indigo-400' : 'text-white/40'}`}>
                  <ListChecks className="w-5 h-5" />
                  <span className="text-[9px] font-bold">Q-Bank</span>
               </Link>
               <Link href="/quiz" className={`flex flex-col items-center justify-center w-full space-y-1 transition-all ${pathname === '/quiz' ? 'text-indigo-400' : 'text-white/40'}`}>
                  <FileText className="w-5 h-5" />
                  <span className="text-[9px] font-bold">Extract</span>
               </Link>
               <button onClick={() => setIsSidebarOpen(true)} className={`flex flex-col items-center justify-center w-full space-y-1 transition-all ${isSidebarOpen ? 'text-indigo-400' : 'text-white/40'}`}>
                  <Menu className="w-5 h-5" />
                  <span className="text-[9px] font-bold">Menu</span>
               </button>
            </nav>

            <SupportWidget />
            <CreditLedgerModal isOpen={isLedgerOpen} onClose={() => setIsLedgerOpen(false)} userId={userId} currentBalance={creditBalance} />
         </main>
      </div>
   );
}
