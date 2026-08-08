import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, MessageSquare, BookOpenCheck } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ncert-explanation-app-for-upsc']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ncert-explanation-app-for-upsc']?.metaDescription || "",
};

export default function NCERTExplanationAppForUPSCPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative font-sans text-slate-900 pb-20">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-100/60 via-slate-50 to-slate-50 pointer-events-none -z-10"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">

        {/* Title Section */}
        <div className="mb-12 w-full text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight text-left">
              NCERT Explanation App for UPSC: Answering the Questions Aspirants Actually Ask
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="text-lg">
              An aspirant considering a new tool rarely wants a sales pitch. They want honest answers to the practical questions running through their mind. This article is written entirely in that spirit, taking the real questions aspirants ask about an NCERT explanation app for UPSC and answering each one plainly.
            </p>
          </section>

          {/* Q&A Section 1: Definition & Need */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                What exactly is an NCERT explanation app for UPSC?
              </h2>
              <p className="text-slate-600">
                It is a study tool designed specifically to help you understand the NCERT textbooks, which form the foundation of UPSC preparation. Rather than simply storing the books or their summaries, it explains their content in plain language, answers your doubts about particular passages, and helps you connect the basics to the wider syllabus. Think of it as a patient explainer built around the exact books every aspirant is told to start with, available whenever you sit down to read.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Why would I need one when the NCERTs are already simple?
              </h2>
              <p className="text-slate-600">
                This is the most common and most reasonable question, and the answer lies in how the NCERTs are meant to be used. They are school textbooks, written to be taught by a teacher who expands on the text and answers questions in class. Read alone by an adult racing through the syllabus, they can be harder than they look, because the explanation that was meant to accompany them is missing. An explanation app restores that missing half, so reading the NCERTs alone stops feeling like decoding and starts feeling like being taught.
              </p>
            </div>
          </section>

          {/* Q&A Section 2: Online Search & Retention */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                How is it different from just searching my doubts online?
              </h2>
              <p className="text-slate-600">
                A search engine gives you many links and leaves you to sort them, and those links are rarely written for the NCERT passage in front of you or for the UPSC context. An explanation app answers your specific question about the specific text you are reading, stays within the syllabus, and can adapt its explanation when the first version does not land. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> treat your confusion as the starting point, which a general search cannot do. The difference is between focused teaching and scattered information.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Will it actually help me remember what I read, or just understand it once?
              </h2>
              <p className="text-slate-600">
                Understanding and remembering are different, and a good app helps with both. Understanding comes from clear explanation, but retention comes from testing yourself on what you have understood. The better NCERT explanation apps let you convert a chapter into practice questions, and a built-in <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> can turn your notes into a quiz within moments. Recalling an idea strengthens it far more than rereading, so an app that pairs explanation with testing helps the NCERT content actually stay with you.
              </p>
            </div>
          </section>

          {/* Q&A Section 3: Mains & Limits */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Does it help with the later stages, or only the basics?
              </h2>
              <p className="text-slate-600">
                Its core strength is the foundation, but a strong understanding of the NCERTs pays off through every stage of the exam. The basics you grasp clearly become the base for advanced reading, for current affairs, and for answer writing. When your understanding of a foundational concept is solid, you can build on it in a Mains answer rather than stumbling over it, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can then check whether you have used that foundation to build a clear argument. So while the app focuses on the basics, its benefit reaches well beyond them.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Can it replace coaching or my own reading of the NCERTs?
              </h2>
              <p className="text-slate-600">
                No, and it is important to be clear about this. An NCERT explanation app does not replace reading the textbooks themselves, because their careful structure and language are part of their value. Nor does it replace coaching or experienced mentors. It is an explainer that sits beside the books, helping when a passage resists you, not a substitute for the reading and reflection that make knowledge your own. Used alongside the NCERTs rather than instead of them, it makes your foundation stronger.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Does it guarantee that I will clear the exam?
              </h2>
              <p className="text-slate-600">
                No honest tool can make that claim. An NCERT explanation app cannot guarantee marks, a rank, or selection. What it can do is ensure that the foundational stage of your preparation is genuinely understood rather than half-grasped, which removes one of the most common weaknesses in self-study. The exam is cleared through disciplined effort over a long period, and the app is a study aid that makes part of that effort more efficient.
              </p>
            </div>
          </section>

          {/* Q&A Section 4: Self-Study & Decision */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Is it worth it for a self-study aspirant in a smaller city?
              </h2>
              <p className="text-slate-600">
                For exactly such aspirants, it is often most valuable. Those who prepare without easy access to coaching are the ones most likely to read the NCERTs alone and quietly miss the parts that a teacher would have explained. An explanation app brings that teaching to them wherever they study, which helps level a field that geography and income often tilt. Keeping everything in one place helps too, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your NCERT notes, explanations, and quizzes together.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                How do I decide which app to use?
              </h2>
              <p className="mb-4 text-slate-600">
                Judge it by substance rather than marketing. Test whether it explains a difficult NCERT passage in a way that adapts to your level, whether it lets you practise on your own material, and whether it keeps your preparation connected rather than scattered. Consider whether it suits your stage and study style, and compare what different plans offer on the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page before committing. An app is only useful if you will actually use it daily, so choose the one that fits how you study.
              </p>
              <p className="text-slate-600">
                An NCERT explanation app for UPSC answers a real need: the need to understand the foundational books fully rather than approximately. Judged honestly, with clear eyes about what it can and cannot do, it is a practical companion for the stage of preparation that everything else is built upon.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore NCERT App Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Try NCERT Explanation Free
              </Link>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is an NCERT explanation app for UPSC?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A tool that explains NCERT content in plain language and clears your doubts.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it replace reading the NCERTs?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it explains them while you still read the books.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it help me remember what I read?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, when it pairs explanation with self-testing.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful without coaching?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it is especially helpful for self-study aspirants.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it aids preparation but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it work for beginners?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it is built for the foundational stage of preparation.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
