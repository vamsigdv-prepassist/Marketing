"use client";

import { Check, Star, Zap, CreditCard, ListTree, Target, PenTool, Database } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function PricingPage() {
  const [isLocal, setIsLocal] = useState(false);
  const loginUrl = "http://localhost:3000/login";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const local = window.location.hostname === "localhost" ||
                    window.location.hostname === "127.0.0.1" ||
                    window.location.hostname.endsWith(".local");
      setIsLocal(local);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header />
      <div className="max-w-7xl mx-auto space-y-16 mt-28 px-6 md:px-8">
        
        {/* Universal Pricing Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-sm tracking-tight">Supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">UPSC Output.</span></h1>
          <p className="text-lg text-slate-400 font-medium">Access hyper-optimized analysis, unlimited semantic querying, and granular Mains evaluation arrays directly.</p>
        </div>

        <div className={`grid grid-cols-1 ${isLocal ? 'lg:grid-cols-4 md:grid-cols-2' : 'md:grid-cols-3'} gap-8 pt-8`}>
          {/* Free Tier */}
          <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-white mb-2">UPSC Free</h3>
            <p className="text-slate-500 text-sm font-medium h-10">Essential tools to experience the foundational AI architecture.</p>
            <div className="my-8 flex items-baseline gap-1">
               <span className="text-5xl font-black text-white">₹0</span>
               <span className="text-slate-500 font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-emerald-500 shrink-0"/> 10 Free AI Credits globally</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-emerald-500 shrink-0"/> Standard News Analytics</li>
               <li className="flex items-center gap-3 text-slate-600 font-medium text-sm"><Check className="w-5 h-5 text-slate-800 shrink-0"/> Local Notes Tracker (No RAG)</li>
            </ul>
            <a href={loginUrl} className="w-full py-4 rounded-xl font-bold border transition-all bg-white hover:bg-slate-50 text-indigo-600 border-indigo-200 shadow-sm text-center block">
               Get Started Free
            </a>
          </div>

          {/* Starter Tier (Simulations Only) */}
          {isLocal && (
             <div className="bg-[#0a0f1e] border border-sky-500/30 rounded-3xl p-8 flex flex-col relative shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <h3 className="text-2xl font-black text-white mb-2">Starter</h3>
                <p className="text-slate-500 text-sm font-medium h-10">A trial expansion array to test the primary capabilities live.</p>
                <div className="my-8 flex items-baseline gap-1">
                   <span className="text-5xl font-black text-white">₹10</span>
                   <span className="text-slate-500 font-bold">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                   <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-sky-500 shrink-0"/> 1 AI Credit natively</li>
                   <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-sky-500 shrink-0"/> Trial Pipeline Execution</li>
                   <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-sky-500 shrink-0"/> Entry-level Analytics</li>
                </ul>
                <a href={loginUrl} className="w-full py-4 rounded-xl font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-lg transition-all text-center block">
                   Unlock Starter
                </a>
             </div>
          )}

          {/* Pro Tier */}
          <div className="bg-[#0a0f1e] border border-indigo-500/30 rounded-3xl p-8 flex flex-col relative shadow-xl transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">Most Popular</div>
            <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2"><Star className="w-6 h-6 text-indigo-500 fill-indigo-500"/> UPSC Pro</h3>
            <p className="text-indigo-400/80 text-sm font-medium h-10">Aggressive extraction logic unlocking the full potential of Semantic AI.</p>
            <div className="my-8 flex items-baseline gap-1">
               <span className="text-5xl font-black text-white">₹399</span>
               <span className="text-slate-500 font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> 100 AI Credits natively</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> 1 GB AI Vector Database Storage</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> Limited Recordings courses</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> Mains Evaluator & Priority Extraction</li>
            </ul>
            <a href={loginUrl} className="w-full py-4 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all text-center block">
               Upgrade to Pro
            </a>
          </div>

          {/* Ultimate Tier */}
          <div className="bg-[#0a0f1e] border border-slate-800 rounded-3xl p-8 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-white mb-2">Ultimate</h3>
            <p className="text-slate-500 text-sm font-medium h-10">Explicit maximum compute limits strictly tailored for extreme intensive preparation.</p>
            <div className="my-8 flex items-baseline gap-1">
               <span className="text-5xl font-black text-white">₹699</span>
               <span className="text-slate-500 font-bold">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> 200 AI Credits natively</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> 2 GB AI Vector Database Storage</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> Unlimited Recording courses</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium text-sm"><Check className="w-5 h-5 text-indigo-500 shrink-0"/> Access to future Library</li>
            </ul>
            <a href={loginUrl} className="w-full py-4 rounded-xl font-bold bg-white hover:bg-slate-200 text-slate-900 transition-all text-center block">
               Select Ultimate
            </a>
          </div>
        </div>

        {/* Cloud Storage Expansion */}
        <div className="max-w-4xl mx-auto mt-16 bg-sky-950/20 border border-sky-900/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/10 blur-[100px] pointer-events-none z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3 space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-black uppercase tracking-widest border border-sky-500/30">Storage Expansion</div>
               <h2 className="text-3xl md:text-4xl font-black text-white">PrepAssist Cloud Vault</h2>
               <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
                  Unlock the full power of native Document Tracking. Bypass the Free Tier restrictions and securely upload an additional 1 GB size of encrypted PDFs directly into your Firebase Cloud Storage container to manage your notes eternally.
               </p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-center gap-2 text-slate-300 text-sm font-bold"><Check className="w-4 h-4 text-sky-500"/> +1 GB Storage per Unlock</li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm font-bold"><Check className="w-4 h-4 text-sky-500"/> Permanent File Lifetime</li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm font-bold"><Check className="w-4 h-4 text-sky-500"/> Zero Data Archiving</li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm font-bold"><Check className="w-4 h-4 text-sky-500"/> Memory-Weight Analytics</li>
               </ul>
            </div>
            
            <div className="md:w-1/3 w-full bg-[#020617] p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center">
               <div className="text-slate-500 text-sm font-black uppercase tracking-widest mb-2">Monthly Fee</div>
               <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-400">₹149</span>
               </div>
               <a href={loginUrl} className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl shadow-lg transition-all text-center block">
                  Unlock Cloud Vault
               </a>
            </div>
          </div>
        </div>

        {/* Compute Ledger Table */}
        <div className="mt-16 bg-white border border-slate-200 shadow-sm rounded-3xl p-10 max-w-7xl mx-auto mb-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] pointer-events-none opacity-50 -z-10"></div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
             <Database className="w-8 h-8 text-indigo-500" />
             <div>
                <h2 className="text-2xl font-black text-slate-900">Compute Cost Ledger</h2>
                <p className="text-sm font-medium text-slate-500 mt-1">Exact AI Credit requirements strictly mapped for every computational feature dynamically.</p>
             </div>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
             <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                   <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-y border-slate-200">
                      <th className="py-4 px-6 rounded-tl-xl w-1/3">Feature Subsystem</th>
                      <th className="py-4 px-6 w-1/3">Execution Volume</th>
                      <th className="py-4 px-6 rounded-tr-xl">Mandatory Ledger Cost</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 flex items-center gap-3">
                         <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500 border border-indigo-100"><ListTree className="w-4 h-4"/></div>
                         <span className="font-bold text-slate-700 text-sm">PDF to Quiz Parsing</span>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-500 text-sm">Per Standard Document Extracted</td>
                      <td className="py-5 px-6">
                         <span className="px-3 py-1 bg-indigo-50 text-indigo-600 font-black text-xs uppercase tracking-widest rounded-md border border-indigo-100 border-dashed">
                            5 AI Credits
                         </span>
                      </td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 flex items-center gap-3">
                         <div className="p-2 bg-fuchsia-50 rounded-lg text-fuchsia-500 border border-fuchsia-100"><PenTool className="w-4 h-4"/></div>
                         <span className="font-bold text-slate-700 text-sm">Mains Answer Evaluation</span>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-500 text-sm">Per Handwritten or Typed Answer Scanned</td>
                      <td className="py-5 px-6">
                         <span className="px-3 py-1 bg-fuchsia-50 text-fuchsia-600 font-black text-xs uppercase tracking-widest rounded-md border border-fuchsia-100 border-dashed">
                            3 AI Credits
                         </span>
                      </td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 flex items-center gap-3">
                         <div className="p-2 bg-amber-50 rounded-lg text-amber-500 border border-amber-100"><Target className="w-4 h-4"/></div>
                         <span className="font-bold text-slate-700 text-sm">AI Prelims Generation</span>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-500 text-sm">Per 10 Native Questions Forged</td>
                      <td className="py-5 px-6">
                         <span className="px-3 py-1 bg-amber-50 text-amber-600 font-black text-xs uppercase tracking-widest rounded-md border border-amber-100 border-dashed">
                            2 AI Credits
                         </span>
                      </td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 flex items-center gap-3">
                         <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500 border border-emerald-100"><Zap className="w-4 h-4"/></div>
                         <span className="font-bold text-slate-700 text-sm">Notes Tracker AI Merging</span>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-500 text-sm">Per Explicit RAG API Sequence Executed</td>
                      <td className="py-5 px-6">
                         <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-black text-xs uppercase tracking-widest rounded-md border border-emerald-100 border-dashed">
                            0.5 AI Credits
                         </span>
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  );
}
