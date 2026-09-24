import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

const SLUG = 'upsc-notes-making-app';
const metadataInfo = servicesMetadata[SLUG];

export const metadata: Metadata = {
  title: metadataInfo?.metaTitle || '',
  description: metadataInfo?.metaDescription || '',
};

export default function UPSCNotesMakingAppPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20">
      <Header />

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto relative z-10">

        {/* Hero Section */}
        <div className="mb-16 animate-mobile-enter" style={{ animationDelay: "100ms" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            The PrepAssist UPSC Notes-Making App That Is Changing How Aspirants Study
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
            Picture this. You just finished reading a 40-page chapter on Indian Economy. You highlighted key points, scribbled in the margins, and now face the familiar question every UPSC aspirant dreads: how do I make notes from this that I will actually revise?
          </p>
        </div>

        {/* Main Content Article */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-indigo-600 hover:prose-a:text-indigo-800 animate-mobile-enter" style={{ animationDelay: "200ms" }}>
          
          <p className="mb-8 text-slate-600 leading-relaxed">
            Traditional note-making is slow, exhausting, and inconsistent. A UPSC note-making app built specifically for civil services preparation solves this problem at its core. PrepAssist has developed a notes ecosystem designed around how UPSC aspirants actually study: across subjects, across sources, and across months of revision cycles.
          </p>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Real Problem with UPSC Note-Making</h3>
            <p className="mb-4">
              Most aspirants underestimate how broken their note-making process is until they sit down to revise before prelims and realize their notes are a mess.
            </p>
            <p className="mb-4">
              Notes written in different notebooks have no connection. Important points from current affairs are scattered across random files. Notes from coaching material, NCERT books, and newspaper summaries never come together in one place.
            </p>
            <p className="mb-4">
              The result is that aspirants spend more time searching for notes than actually revising. PrepAssist&apos;s UPSC notes-making app is built to fix this structural problem.
            </p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">What PrepAssist&apos;s Notes Making App Offers</h3>
            
            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Unified Subject-Wise Note Structure</h4>
            <p className="mb-4">
              PrepAssist organizes notes in a clean subject hierarchy. Every note you create is tagged to a subject, subtopic, and source. This means when you are revising Indian Polity, you can pull up every note across all sources in seconds, without digging through multiple notebooks or files.
            </p>

            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Smart Tagging and Linking</h4>
            <p className="mb-4">
              When you create a note on Fundamental Rights, PrepAssist lets you tag related concepts like Directive Principles, landmark Supreme Court judgments, and current affairs stories involving constitutional amendments. These tags create a web of connected knowledge that mirrors how UPSC actually tests you.
            </p>
            <p className="mb-4">
              Cross-topic connections are often where students lose marks. PrepAssist&apos;s tagging system helps you see those connections as you build your notes.
            </p>

            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Revision Scheduling Built Into Notes</h4>
            <p className="mb-4">
              Every note in PrepAssist carries a revision schedule attached to it. Based on spaced repetition logic, the app reminds you to revisit a note at optimal intervals: after 1 day, 3 days, 7 days, and then weekly until it is locked into long-term memory.
            </p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Use PrepAssist&apos;s Notes Making App Effectively</h3>
            
            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Step 1: Start with NCERT-Based Foundation Notes</h4>
            <p className="mb-4">
              Begin by using PrepAssist to build chapter-level notes from NCERT books for History, Geography, Economy, Polity, and Science. These become your base. Every advanced reading you do later gets linked back to these foundation notes.
            </p>

            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Step 2: Add Coaching and Standard Reference Material</h4>
            <p className="mb-4">
              Once your NCERT base is ready, add notes from coaching material or standard references like Laxmikanth for Polity or Ramesh Singh for Economy. PrepAssist lets you add these as supplementary layers to your existing notes rather than starting from scratch. A particularly useful feature at this stage is the <Link href="https://www.prepassist.in/#features" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to Quiz Generator</Link>, which converts your reference book chapters and coaching PDFs into instant MCQ sets so you can test your recall right after note-making.
            </p>

            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Step 3: Integrate Current Affairs Daily</h4>
            <p className="mb-4">
              Use PrepAssist&apos;s auto notes feature to pull current affairs updates into your note structure automatically. Daily news is mapped to relevant static topics, so your current affairs notes always have context.
            </p>

            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-6">Step 4: Review and Revise on Schedule</h4>
            <p className="mb-4">
              Follow PrepAssist&apos;s built-in revision reminders. Do not ignore them. The spaced repetition system only works if you show up consistently.
            </p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why PrepAssist&apos;s App Works Better Than OneNote or Notion for UPSC</h3>
            <p className="mb-4">
              General-purpose apps like OneNote, Notion, or even Google Docs are popular among aspirants, but they have a fundamental mismatch with UPSC preparation needs.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-600">
              <li>They have no UPSC subject taxonomy. You have to build your own folder structure, which most aspirants set up poorly and then abandon.</li>
              <li>They have no revision scheduling. You have to manually remember what to revise and when, which is unreliable.</li>
              <li>They have no current affairs integration. Current affairs from newspapers have to be manually pasted and organized.</li>
            </ul>
            <p className="mb-4">
              PrepAssist solves all three gaps with a system built specifically for civil services preparation. It saves aspirants an estimated 45 to 60 minutes every day that would otherwise go into organizing and searching notes. See the complete list of tools PrepAssist offers through its <Link href="/services" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">services</Link> page to understand the full scope of what the platform covers beyond note-making.
            </p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Notes Making for Mains vs. Prelims</h3>
            <p className="mb-4">
              Most aspirants make the mistake of creating one set of notes for both prelims and mains preparation, which leads to notes that serve neither purpose well.
            </p>
            <p className="mb-4">
              PrepAssist&apos;s note-making app lets you create separate note profiles for prelims and mains. Prelims notes are concise, fact-heavy, and optimized for quick recall. Mains notes are structured around answer writing, with arguments, examples, government data, and committee recommendations organized under each topic.
            </p>
            <p className="mb-4">
              This dual-layer approach ensures that as you approach prelims, your revision is sharp and factual, while your mains notes build the analytical depth required for GS 2, GS 3, and GS 4 answers. Check PrepAssist&apos;s <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> to find the right plan for your preparation stage, whether you are just starting out or in the final stretch before the exam.
            </p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Conclusion</h3>
            <p className="mb-4">
              Note-making is not just a study habit. For UPSC, it is a strategic tool that directly determines how efficiently you revise and how well you retain what you have studied. PrepAssist&apos;s UPSC note-making app brings structure, intelligence, and automation to a process that most aspirants handle chaotically. If your current notes feel like a pile of information rather than a revision system, PrepAssist is where that changes. Stay updated with expert content, study strategies, and platform updates through <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PrepAssist Insights</Link>.
            </p>
          </section>

          {/* FAQ Section */}
          <div className="my-12 p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">?</span>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-base">Q1. Can I import my existing notes into PrepAssist&apos;s notes-making app?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, PrepAssist supports import from PDF and text formats, so you can bring in notes you have already created without starting from scratch.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Q2. Is PrepAssist&apos;s notes app available offline?</p>
                <p className="text-slate-600 text-sm mt-1">PrepAssist offers offline access for downloaded notes, so you can revise even without an internet connection.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Q3. How is PrepAssist&apos;s notes app different from a regular note-taking app?</p>
                <p className="text-slate-600 text-sm mt-1">PrepAssist is built specifically for UPSC preparation with subject taxonomy, spaced repetition reminders, current affairs integration, and AI-assisted note generation built in.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Q4. Can I share my notes with a study group?</p>
                <p className="text-slate-600 text-sm mt-1">PrepAssist offers a controlled sharing feature that lets you share specific note sets with study partners without giving full access to your account.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Q5. Does the app work for both prelims and mains preparation?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, PrepAssist supports separate note structures optimized for prelims quick revision and mains answer writing.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Q6. How much storage does PrepAssist&apos;s notes app allow?</p>
                <p className="text-slate-600 text-sm mt-1">PrepAssist provides generous cloud storage that accommodates years of accumulated notes across all UPSC subjects and current affairs.</p>
              </div>
            </div>
          </div>

        </article>

        {/* Bottom CTA */}
        <div className="mt-16 animate-mobile-enter" style={{ animationDelay: "300ms" }}>
          <div className="bg-gradient-to-br from-[#0f172a] to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
              Transform your UPSC note-making today.
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              Join serious UPSC aspirants using PrepAssist to organize, connect, and revise notes smarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="https://dashboard.prepassist.in/login" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                Create Free Account
              </a>
              <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors border border-slate-700">
                View Pricing
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
