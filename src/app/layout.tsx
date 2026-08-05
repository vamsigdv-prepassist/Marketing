"use client";

import { ReactNode, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, LogOut, BookOpen, ListChecks, Hash, Network, FolderCheck, Tag, PenTool, Layers, Database, Menu, X, HeadphonesIcon, CreditCard, BellRing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAdminSignOut = async () => {
     const { auth } = await import("@/lib/firebase");
     const { signOut } = await import("firebase/auth");
     await signOut(auth);
     router.push("/login");
  };

  if (pathname === "/login") {
     return (
       <html lang="en" className="h-full antialiased">
         <body className="h-full">{children}</body>
       </html>
     );
  }

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <title>PrepAssist Admin</title>
        <meta name="description" content="PrepAssist Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full">
        <div className="min-h-screen bg-slate-50 flex font-sans">

          {/* Mobile Header */}
          <div className="lg:hidden fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 p-4 z-[90] flex items-center justify-between">
             <Image src="/1024x1024.png" unoptimized alt="PrepAssist Logo" width={60} height={60} className="object-contain" priority />
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-100 border border-slate-200 rounded-xl text-slate-600">
                {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
             </button>
          </div>

          {isMobileMenuOpen && (
             <div onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 z-[95] bg-slate-900/20 backdrop-blur-sm" />
          )}

          {/* Sidebar */}
          <aside className={`w-72 border-r border-slate-200 flex flex-col p-4 fixed left-0 top-0 h-full z-[100] bg-white shadow-[10px_0_40px_rgba(0,0,0,0.05)] overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="shrink-0 flex items-center gap-2 mb-10 px-2 mt-4 pb-6 border-b border-slate-100">
               <div className="bg-white p-2 rounded-xl w-full flex items-center justify-center border border-slate-100">
                  <Image src="/1024x1024.png" unoptimized quality={100} alt="PrepAssist Logo" width={100} height={100} className="object-contain" priority />
               </div>
            </div>

            <nav className="flex-1 space-y-2 pb-8">
              {[
                { name: 'Dashboard Overview', icon: <LayoutDashboard className="w-5 h-5" />, href: '/' },
                { name: 'User Ecosystem', icon: <Users className="w-5 h-5 text-indigo-400" />, href: '/users' },
                { name: 'Global Financial Ledger', icon: <CreditCard className="w-5 h-5 text-emerald-500" />, href: '/payments' },
                { name: 'Support Requests', icon: <HeadphonesIcon className="w-5 h-5 text-rose-400" />, href: '/support' },
                { name: 'Hashtag Ontology', icon: <Hash className="w-5 h-5" />, href: '/tags' },
                { name: 'Notes Staging Triage', icon: <FolderCheck className="w-5 h-5" />, href: '/notes' },
                { name: 'X-Ray Matrix Library', icon: <Database className="w-5 h-5 text-sky-400" />, href: '/xray-library' },
                { name: 'Curriculum Maps', icon: <Network className="w-5 h-5" />, href: '/maps' },
                { name: 'Current Affairs Bank', icon: <BookOpen className="w-5 h-5" />, href: '/current-affairs' },
                { name: 'Question Bank DB', icon: <ListChecks className="w-5 h-5" />, href: '/question-bank' },
                { name: 'Mains Answer Bank DB', icon: <PenTool className="w-5 h-5 text-fuchsia-400" />, href: '/mains-bank' },
                { name: 'Flash Cards Config', icon: <Layers className="w-5 h-5 text-emerald-400" />, href: '/flashcards' },
                { name: 'Promotional Matrix', icon: <Tag className="w-5 h-5" />, href: '/promocodes' },
                { name: 'Push Notifications', icon: <BellRing className="w-5 h-5 text-amber-400" />, href: '/notifications' },
                { name: 'Content Blog', icon: <FileText className="w-5 h-5 text-amber-400" />, href: '/blog' },
                { name: 'System Logs', icon: <FileText className="w-5 h-5" />, href: '#' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.href ? 'bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`}>
                  {item.icon}
                  <span className="font-bold text-sm tracking-wide">{item.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 px-2">
              <Link href="http://localhost:3000/dashboard" className="px-4 py-3 text-indigo-400 hover:bg-indigo-500/10 rounded-xl flex gap-3 transition font-medium">
                <LayoutDashboard className="w-5 h-5" />
                <span>Student Dashboard</span>
              </Link>
              <div onClick={handleAdminSignOut} className="px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl cursor-pointer flex gap-3 transition">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-72 p-4 md:p-8 pt-24 lg:pt-8 relative overflow-x-hidden min-h-screen w-full flex flex-col max-w-[100vw]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="relative z-10 max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
