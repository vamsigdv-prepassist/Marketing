import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, UserCheck } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-upsc-study-tool']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-upsc-study-tool']?.metaDescription || "",
};

export default function AIUPSCStudyToolPage() {
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
               AI UPSC Study Tool: Smarter Prep for CSE Aspirants
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              An AI UPSC study tool is a digital platform that uses artificial intelligence to help Civil Services aspirants study more efficiently. It can check your Mains answers, turn study material into notes, build quizzes, create a study plan, and track your progress over time. The goal is simple: help you cover the huge UPSC syllabus without wasting hours. Think of it as a study companion, not a replacement for books, coaching, or steady effort. For example, instead of waiting days for feedback on a written answer, the tool can flag weak structure or missing points in minutes. This matters because the UPSC Civil Services Exam draws over 10 lakh applicants each year for roughly 1,000 vacancies, so consistent, focused preparation counts.
            </p>
          </section>

          {/* Why Aspirants Need AI */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-600" />
              Why do UPSC aspirants need an AI study tool?
            </h2>
            <p className="mb-4">
              The UPSC syllabus is one of the widest of any exam in India. General Studies alone spans history, polity, geography, economy, environment, science, ethics, and daily current affairs. Most aspirants prepare for one to three years, and many attempt the exam more than once.
            </p>
            <p className="mb-6">
              The hardest parts are not always the reading. They are revision, answer writing, and knowing what to study next. A self-study learner in a Tier 2 or Tier 3 city may not have easy access to feedback or mentorship. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> help close that gap by giving structure and quick feedback at a lower cost.
            </p>
            
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm flex items-center justify-between flex-wrap gap-4">
              <span>Try structured prep instead of guessing what to revise next.</span>
              <Link href="/login" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center gap-2 text-xs uppercase tracking-wider">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* What AI Tool Can Actually Do */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              What can an AI UPSC study tool actually do?
            </h2>
            <p className="mb-8">
              A good <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> brings your whole routine into one place. Here is what these tools commonly handle:
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">How does AI evaluate Mains answers?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mains is won or lost on answer writing. An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI UPSC study tool for Mains answer evaluation</Link> reads your written answer and scores it against a rubric: does it address the directive word, is the structure clear, does it cover the key dimensions, and is the length right? It then suggests specific fixes, like adding a diagram or a real example. You get feedback in minutes rather than days, so you can write more answers per week and improve faster.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Can it turn notes into quizzes?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes. A <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> takes a PDF, chapter, or set of notes and creates practice questions automatically. This turns passive reading into active recall, which research on learning shows helps memory more than re-reading. One NCERT chapter can become a 15-question quiz in seconds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Does it help with planning and revision?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes. It builds a study schedule around the hours you actually have, tracks which topics you have mastered and which need work, condenses daily current affairs into short points, and creates flashcards for fast revision.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm flex items-center justify-between flex-wrap gap-4">
              <span>See these features in one place before your next study session.</span>
              <Link href="/dashboard" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2 text-xs uppercase tracking-wider">
                Explore Features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Who Should Use */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-indigo-600" />
              Who should use an AI UPSC study tool?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">First-Time Aspirants</h3>
                <p className="text-sm text-slate-600">Use it to understand the syllabus and build a clear, manageable study plan from day one.</p>
              </div>
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">Repeat Aspirants</h3>
                <p className="text-sm text-slate-600">Use answer evaluation and analytics to identify blind spots and lift your Mains scores.</p>
              </div>
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">Working Professionals & Students</h3>
                <p className="text-sm text-slate-600">Use flexible schedules to focus limited study hours on the weakest topics flagged by AI.</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic">
              Match the tool to your stage, whether you are starting out or on your third attempt. PrepAssist is built to support all of these learners with the same core toolkit.
            </p>
          </section>

          {/* Is AI Tool Enough */}
          <section className="bg-amber-50/60 border border-amber-200/80 p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              Is an AI tool enough to clear UPSC?
            </h2>
            <p className="mb-4 text-amber-900">
              No, and any honest answer says so. An AI tool cannot guarantee selection, a rank, or a fixed result. It does not replace disciplined study, standard books, or a human mentor.
            </p>
            <p className="text-amber-900 font-medium">
              What it does well is save time, give faster feedback, and keep your preparation organised. Success still depends on your own effort over many months. Treat the AI as a productivity aid that supports your plan, not a shortcut around the work. Use AI to work smarter, and keep your books and mentors in the loop.
            </p>
          </section>

          {/* Getting Started */}
          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-indigo-400" />
              How do you get started with PrepAssist?
            </h2>
            <p className="mb-4 text-slate-300">
              Start by adding your target attempt year and weekly study hours so the tool can build a plan. Upload a few notes to test the quiz feature, then write one Mains answer to see how the evaluation works. From there, follow the daily plan and review your analytics each week. PrepAssist offers different plans, and you can compare features on the <Link href="/pricing" className="text-indigo-400 font-semibold hover:underline">pricing</Link> page to pick what fits your stage and budget.
            </p>
            <p className="mb-6 text-indigo-300 font-semibold italic">
              Set up your plan and write your first evaluated answer this week.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                View Pricing & Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm">
                Write First Evaluated Answer
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is an AI UPSC study tool and how does it work?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">It is a digital platform that uses AI to evaluate answers, generate notes and quizzes, plan your schedule, and track progress. You add your material and goals, and the tool gives feedback and reminders as you study.</p>
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can an AI tool replace UPSC coaching or a mentor?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No. It is a study aid that complements coaching, books, and mentorship. It makes preparation faster and more organised, but it cannot replace expert guidance or your own consistent effort.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">How does the AI evaluate Mains answers?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">It checks your answer against a rubric covering the directive word, structure, coverage, and length, then suggests specific improvements. It offers feedback and pointers, not guaranteed marks.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful for first-time aspirants and working professionals?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes. Beginners get syllabus guidance and a clear plan, while working professionals get flexible schedules and progress tracking that fit study around a job.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does using an AI tool guarantee UPSC selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No. No tool can guarantee selection. Results depend on your own preparation. An AI tool simply helps make that preparation more structured and efficient.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
