import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, Smartphone, SearchCheck, MessageSquare } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-based-upsc-coaching-app']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-based-upsc-coaching-app']?.metaDescription || "",
};

export default function AIBasedUPSCCoachingAppPage() {
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
              AI-Based UPSC Coaching App: What to Look For Before You Commit
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              The market for UPSC preparation has changed quickly. Where aspirants once had little choice beyond classroom coaching and printed material, they now face a growing number of digital options, each promising smarter and faster preparation. Among these, the AI-based UPSC coaching app has become one of the most talked-about categories. Yet the very number of choices creates a new problem, which is knowing how to tell a genuinely useful app from one that simply wears the label of artificial intelligence. This article is a practical guide to what actually matters, so you can judge these tools on substance rather than marketing.
            </p>
            <p className="text-slate-600">
              The first thing to hold onto is a realistic expectation. No app, however sophisticated, can guarantee selection or replace your own disciplined effort. The right question is not whether an app will clear the exam for you, because none will, but whether it removes real obstacles from your preparation and makes your effort more efficient. With that frame in place, the features worth examining become much clearer.
            </p>
          </section>

          {/* Help Understand or Deliver Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              Does it actually help you understand, or just deliver content?
            </h2>
            <p className="mb-4">
              Many apps are little more than a library of videos and notes with a search box attached. Content alone is not coaching. What distinguishes a genuinely useful AI-based app is its ability to help you understand, not just consume. A strong tool can explain a difficult concept in plain language, respond to your specific doubts, and rephrase an explanation when the first version does not land. This interactive quality is what separates a passive content store from an active study companion.
            </p>
            <p className="mb-6">
              When you evaluate an app, test this directly. Ask it to explain a concept you find hard and see whether it can adapt its explanation to your level, or whether it simply repeats a fixed definition. Tools built around genuine <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> treat your questions as the starting point and shape their help around them, which is far more valuable over a long preparation than a static repository you must navigate alone. An app that helps you understand is worth more than one that merely stores information.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              The best test of a coaching app is whether it can teach a concept, not just display it.
            </div>
          </section>

          {/* Active Practice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-indigo-600" />
              Does it turn your material into active practice?
            </h2>
            <p className="mb-4">
              Understanding is only half the task, because the exam rewards recall and application under pressure. A coaching app earns its place when it helps you practise actively rather than read passively. One of the most useful features to look for is the ability to convert your own study material into practice. An app that includes a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> lets you upload a chapter or your notes and receive a set of questions in moments, turning reading into testing without extra effort.
            </p>
            <p className="mb-6">
              This matters because active recall is one of the most reliable ways to move material into long-term memory, and an app that builds testing into your routine is quietly making your study more effective. When judging an app, look for practice that draws on what you are actually studying, adapts to your weak areas, and lets you revisit questions over time. An app that only offers a fixed bank of questions unrelated to your material is far less useful than one that generates practice from your own preparation.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              A coaching app proves its value when it turns your reading into steady, active practice.
            </div>
          </section>

          {/* Feedback on Writing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              Does it give real feedback on your writing?
            </h2>
            <p className="mb-4">
              For the Mains stage, the single most valuable feature an app can offer is genuine feedback on your answers. Answer writing is a skill that improves only through repeated cycles of writing, review, and rewriting, and the slowest part of that cycle for most aspirants is waiting for someone to evaluate their work. An app that includes an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can shorten that wait dramatically, checking your answer against structure, coverage, and relevance and suggesting specific improvements within minutes.
            </p>
            <p className="mb-6">
              When you assess this feature, look for feedback that is specific rather than generic. A useful evaluation tells you what to fix and why, not merely that an answer is good or weak. It should identify a thin introduction, a missing dimension, or a conclusion that drifts from the question. This kind of targeted feedback lets you write more answers per week and learn from each one, which is exactly the volume-with-feedback approach that builds strong writing over time. An app that only stores model answers, without evaluating yours, misses the point of what makes answer writing improve.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              Fast, specific feedback on your own answers is where a coaching app helps your Mains most.
            </div>
          </section>

          {/* Whole Preparation Connected */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-indigo-600" />
              Does it keep your whole preparation connected?
            </h2>
            <p className="mb-4">
              Beyond individual features, the best AI-based apps bring the parts of preparation together. Preparation scattered across separate tools, one for notes, another for quizzes, another for news, is hard to sustain and easy to lose track of. An app that holds your notes, quizzes, schedules, and progress in one connected space makes your preparation feel coordinated, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> that keeps everything in one place saves both time and mental effort. Look, too, for progress tracking that shows you honestly where you stand and adapts your plan to your weak areas.
            </p>
            <p className="mb-6">
              Finally, weigh the practical factors. Consider whether the app suits self-study learners and aspirants in smaller cities who may lack easy access to coaching, and compare what different plans offer on the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page before you commit. Remember throughout that an app is a study aid. It cannot guarantee marks, a rank, or selection; it does not replace standard books or experienced mentors, and it does not know the exam's exact questions. Judged honestly against these standards, a good AI-based app can make a real difference to how efficiently you prepare. Choosing an AI-based UPSC coaching app is not about chasing the flashiest promises but about finding a tool that genuinely helps you understand, practise, and improve. Judge each app by whether it teaches, tests, and gives real feedback; keep your expectations honest, and the right choice will make your preparation meaningfully more efficient.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore App Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Try AI Coaching Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is an AI-based UPSC coaching app?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A digital tool that helps you understand, practise, and review your preparation using AI.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it replace classroom coaching?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it complements coaching and self-study rather than replacing them.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it help with answer writing?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">The best ones evaluate your answers and suggest specific improvements.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it create practice from my notes?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, good apps turn your own material into quizzes.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it supports your effort but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it suitable for self-study learners?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it is especially useful where coaching access is limited.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
