"use client";


import { BrainCircuit, PenTool, Globe, ChevronRight, Target, Cloud, Database, Lock, Sparkles, Activity, ShieldCheck, Network, CheckCircle2, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CustomAppStoreButton, CustomGooglePlayButton } from "@/components/StoreButtons";
import Header from "@/components/Header";
import { handleMobileRedirect } from "@/lib/mobile_redirect";

export default function Home() {
   const currentYear = new Date().getFullYear();

   return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 overflow-x-hidden relative">
         {/* Absolute Light Mode Mesh Gradients */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-100/60 via-slate-50 to-slate-50"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-rose-100/50 rounded-full blur-[120px]"></div>
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[100px]"></div>
         </div>

         <Header />

         <main className="pt-4 pb-24 px-6 max-w-7xl mx-auto relative z-10 flex flex-col items-center">

            {/* Spotlight Hero Section */}
            <section className="text-center pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center w-full max-w-5xl">
               <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 mb-8 tracking-widest uppercase shadow-sm animate-mobile-enter"
               >
                  <Sparkles className="w-3 h-3 text-amber-500" /> PrepAssist V2 is Live
               </div>

               <h1
                  className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tighter text-slate-900 mb-8 leading-[1.05] animate-mobile-enter"
                  style={{ animationDelay: '0.1s' }}
               >
                  The ultimate AI engine for <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 pr-2">UPSC preparation.</span>
               </h1>

               <p
                  className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed animate-mobile-enter"
                  style={{ animationDelay: '0.2s' }}
               >
                  Synthesize vast syllabuses, automate Mains evaluation, and generate precision cloud notes instantly. Built specifically for rankers.
               </p>

               <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-mobile-enter"
                  style={{ animationDelay: '0.3s' }}
               >
                  <a href="https://dashboard.prepassist.in/login" onClick={(e) => handleMobileRedirect(e, 'login')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30">
                     Deploy Your Workspace <ChevronRight className="w-4 h-4" />
                  </a>
                  <Link href="#platform" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm">
                     Explore Architecture
                  </Link>
               </div>
            </section>

            {/* Mobile App Download Banner - Ultra Premium Revamp */}
            <div
               className="w-full max-w-5xl mx-auto -mt-10 mb-24 relative z-20 px-4 animate-mobile-enter"
               style={{ animationDelay: '0.4s' }}
            >
               <div className="bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#0B0F19] rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] overflow-hidden relative border border-slate-800">

                  {/* Premium Background Effects */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

                  {/* Content Left */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-xl">
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[11px] font-black text-indigo-300 mb-6 tracking-widest uppercase">
                        <Sparkles className="w-3 h-3 text-indigo-400" /> Now Available Everywhere
                     </div>
                     <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        Your AI Mentor, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">In Your Pocket.</span>
                     </h3>
                     <p className="text-slate-400 font-medium text-lg mb-10 leading-relaxed max-w-md">
                        Seamlessly sync your UPSC notes, evaluate Mains answers, and track your syllabus natively on iOS & Android.
                     </p>

                     {/* Authentic Store Badges (Using Library for Perfect Sizing) */}
                     <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        <div className="hover:-translate-y-1 transition-transform shadow-xl hover:shadow-2xl rounded-xl overflow-hidden shrink-0">
                           <CustomAppStoreButton url="https://apps.apple.com/in/app/prepassist-ai-powered-upsc/id6783227317" />
                        </div>
                        <div className="hover:-translate-y-1 transition-transform shadow-xl hover:shadow-2xl rounded-xl overflow-hidden shrink-0">
                           <CustomGooglePlayButton url="https://play.google.com/store/apps/details?id=com.prepassist.mobile" />
                        </div>
                     </div>
                  </div>

                  {/* Visual Mockup Right (App Icon Squircle) */}
                  <div className="relative z-10 hidden lg:flex items-center justify-center w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full border border-white/5 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]">
                     {/* Glowing shadow behind the app icon */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-36 bg-indigo-500 rounded-full opacity-60 blur-2xl"></div>
                     </div>

                     {/* Circular App Icon Container */}
                     <div className="relative z-20 w-[140px] h-[140px] bg-white rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border-4 border-slate-100/50 flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-500 group">
                        {/* Subtle inner shadow for 3D depth */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.08)] pointer-events-none z-30"></div>
                        <Image src="/1024x1024.png" unoptimized alt="PrepAssist App Icon" width={125} height={125} className="object-contain scale-100 group-hover:scale-105 transition-all duration-500 mix-blend-multiply contrast-125 brightness-110" priority />
                     </div>
                  </div>

               </div>
            </div>

            {/* Brand Banner */}
            <section className="w-full py-16 flex flex-col items-center justify-center text-center mb-32">
               <p className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Trusted by serious UPSC Aspirants & Rankers</p>
               <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
                  <ShieldCheck className="w-12 h-12 text-slate-400" />
                  <Network className="w-12 h-12 text-slate-400" />
                  <BrainCircuit className="w-12 h-12 text-slate-400" />
                  <Target className="w-12 h-12 text-slate-400" />
                  <Database className="w-12 h-12 text-slate-400" />
               </div>
            </section>

            {/* Asymmetrical Bento Grid */}
            <section id="features" className="w-full flex flex-col items-center">
               <div className="text-center mb-16 max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Engineered for absolute dominance.</h2>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">Stop wasting hours manually creating notes. Let PrepAssist autonomously synthesize your data into structural matrices.</p>
               </div>

               <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-[auto_auto] gap-4 md:gap-6">

                  {/* Feature 1 - Massive Row Spanner */}
                  <div className="md:col-span-2 group relative rounded-[32px] bg-white border border-slate-200 p-8 md:p-12 overflow-hidden hover:border-indigo-300 transition-colors shadow-sm hover:shadow-md">
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 blur-[100px] rounded-full group-hover:bg-indigo-100 transition-colors"></div>
                     <Database className="w-10 h-10 text-indigo-500 mb-6 relative z-10" />
                     <h3 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">RAG Vector Data Vault</h3>
                     <p className="text-slate-600 font-medium leading-relaxed max-w-md relative z-10">
                        Upload your entire syllabus directly into our Cloud Storage. We utilize Retrieval-Augmented Generation to allow you to literally "speak" to your entire syllabus index securely.
                     </p>
                     {/* Native Visual Pipeline Rendering */}
                     <div className="hidden sm:block absolute bottom-0 right-[-5%] md:right-4 w-72 md:w-[480px] h-48 md:h-64 rounded-t-2xl shadow-2xl translate-y-[20%] group-hover:translate-y-[10%] transition-transform duration-500 overflow-hidden border border-slate-200 bg-white">
                        <Image
                           src="/rag-pipeline.jpg"
                           alt="PrepAssist RAG AI Pipeline Architecture diagram"
                           fill
                           className="object-contain p-2"
                           unoptimized
                        />
                     </div>
                  </div>

                  {/* Feature 2 - Tall Block */}
                  <div className="group relative rounded-[32px] bg-white border border-slate-200 p-8 md:p-10 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm hover:shadow-md">
                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <PenTool className="w-10 h-10 text-emerald-500 mb-6 relative z-10" />
                     <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Mains Evaluation AI</h3>
                     <p className="text-slate-600 font-medium leading-relaxed relative z-10">
                        Capture a raw image of your handwritten essay. Our computer vision LLMs will grade it precisely against the actual UPSC examiner rubrics, returning structural feedback.
                     </p>
                     <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col gap-3 relative z-10">
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> <span className="text-sm font-semibold text-slate-700">Handwriting Optics</span></div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> <span className="text-sm font-semibold text-slate-700">Structural Grading</span></div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> <span className="text-sm font-semibold text-slate-700">Model Answers</span></div>
                     </div>
                  </div>

                  {/* Feature 3 - Standard Block */}
                  <div className="group relative rounded-[32px] bg-white border border-slate-200 p-8 overflow-hidden hover:border-sky-300 transition-colors shadow-sm hover:shadow-md">
                     <Cloud className="w-10 h-10 text-sky-500 mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Protocol</h3>
                     <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        Every byte you extract or evaluate is instantly synchronized securely to your individual Vault, available across global endpoints.
                     </p>
                  </div>

                  {/* Feature 4 - Standard Block */}
                  <div className="group relative rounded-[32px] bg-white border border-slate-200 p-8 overflow-hidden hover:border-rose-300 transition-colors shadow-sm hover:shadow-md">
                     <Globe className="w-10 h-10 text-rose-500 mb-6" />
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Core Analytics</h3>
                     <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        Track every single milestone, attempt limit, and AI generation metric dynamically through visual Progress Hubs.
                     </p>
                  </div>

                  {/* Feature 5 - Wide Block */}
                  <div className="group relative rounded-[32px] bg-white border border-slate-200 p-8 overflow-hidden hover:border-amber-300 transition-colors shadow-sm hover:shadow-md flex flex-col sm:flex-row items-center gap-6">
                     <div className="flex-1">
                        <Target className="w-10 h-10 text-amber-500 mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">PDF to Quiz Generator</h3>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-sm">
                           Upload any un-formatted PDF or feed a massive topic to the engine. Watch as it instantly compiles rigorous Prelims matrices.
                        </p>
                     </div>
                     <a href="https://dashboard.prepassist.in/quiz" className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold hover:bg-slate-800 transition-colors shadow-md">
                        Generate Quiz
                     </a>
                  </div>

               </div>
            </section>

         </main>

         {/* Massive Conversion Footer */}
         <footer className="w-full relative border-t border-slate-200 bg-slate-50 mt-32 overflow-hidden pt-32 pb-16">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-200/40 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">Ready to secure your rank?</h2>
               <p className="text-slate-600 text-lg md:text-xl font-medium mb-12 max-w-2xl">
                  Stop preparing manually. Integrate with PrepAssist V2 and radically multiply your daily execution speed.
               </p>
               <div className="flex items-center gap-4">
                  <a href="https://dashboard.prepassist.in/login" onClick={(e) => handleMobileRedirect(e, 'login')} className="px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors font-bold text-lg shadow-lg shadow-indigo-600/30">
                     Start Your Free Trial
                  </a>
                  <Link href="/pricing" className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors font-bold text-lg shadow-sm">
                     View Pricing Models
                  </Link>
               </div>

               {/* Small App Store Badges inside CTA */}
               <div className="mt-12 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Also available natively on your mobile devices</span>
                  <div className="scale-[0.85] origin-top flex flex-col sm:flex-row items-center gap-4 -mb-4">
                     <div className="hover:-translate-y-1 transition-transform shadow-md hover:shadow-lg rounded-xl overflow-hidden shrink-0">
                        <CustomAppStoreButton url="https://apps.apple.com/in/app/prepassist-ai-powered-upsc/id6783227317" />
                     </div>
                     <div className="hover:-translate-y-1 transition-transform shadow-md hover:shadow-lg rounded-xl overflow-hidden shrink-0">
                        <CustomGooglePlayButton url="https://play.google.com/store/apps/details?id=com.prepassist.mobile" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-32 flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 text-sm font-semibold text-slate-500">
               <p>© {currentYear} PrepAssist Cloud. All architecture reserved.</p>
               <div className="flex flex-wrap items-center justify-center gap-6 mt-4 md:mt-0">
                  <Link href="/privacy-policy" className="hover:text-slate-800 cursor-pointer transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-slate-800 cursor-pointer transition-colors">Terms & Conditions</Link>
                  <Link href="/delete-account" className="hover:text-slate-800 cursor-pointer transition-colors">Delete Account</Link>
                  <a href="https://dashboard.prepassist.in/admin/login" className="hover:text-indigo-600 transition-colors">Admin Gateway</a>
               </div>
            </div>
         </footer>
      </div>
   );
}
