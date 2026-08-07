import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, Layers, Layout, RefreshCw } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AI-Powered UPSC Study Platform: Under One Roof | PrepAssist",
  description: "Experience a unified AI-powered UPSC study platform connecting concept explanations, custom PDF quizzes, Mains answer evaluation & progress tracking.",
};

export default function AIPoweredUPSCStudyPlatformPage() {
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
              AI-Powered UPSC Study Platform: Bringing the Whole Preparation Under One Roof
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              Most UPSC aspirants prepare with a scattered toolkit. Notes live in one notebook, current affairs in another, quizzes in a third app, answer practice in a stack of loose sheets, and progress exists only as a vague feeling of whether things are going well. This fragmentation is one of the quiet drains on preparation, because the effort of switching between tools and holding everything in your head is effort not spent studying. An AI-powered UPSC study platform sets out to solve this by bringing the many parts of preparation into one connected environment, where explanation, practice, feedback, and tracking all work together.
            </p>
            <p className="text-slate-600">
              The word platform matters here. A single feature, however clever, only helps with one task. A platform is valuable because its parts reinforce one another, so that what you learn feeds into what you practise, what you practise feeds into what you revise, and your progress across all of it stays visible in one place. To see why this integration is worth having, it helps to look at what a well-built platform actually holds together.
            </p>
          </section>

          {/* Why fragmentation costs more */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-600" />
              Why fragmentation costs more than aspirants realise
            </h2>
            <p className="mb-4">
              The hidden cost of scattered tools is not just inconvenience. It is lost continuity. When your notes and your quizzes and your current affairs live in separate places, the connections between them are easy to miss, and those connections are exactly what the exam rewards. A concept studied in isolation, tested in a separate app, and never linked to the news becomes three disconnected experiences instead of one reinforcing loop. Preparation loses much of its power when its parts do not talk to each other.
            </p>
            <p className="mb-6">
              An integrated platform restores that continuity. When a concept, a quiz on it, and a related news item sit in the same environment, they strengthen one another naturally, and revision becomes faster because everything is in one searchable place. Tools built around <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> aim to create this connected experience, so that an aspirant is not constantly rebuilding context while moving between apps. The result is preparation that feels like a single coherent effort rather than a collection of separate chores.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              A platform earns its value by keeping the parts of preparation connected rather than scattered.
            </div>
          </section>

          {/* Core pieces */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layout className="w-6 h-6 text-indigo-600" />
              The core pieces a strong platform brings together
            </h2>
            <p className="mb-4">
              A capable study platform holds several functions in one place, each supporting the others. It explains, so you can understand difficult concepts in plain language and ask follow-up questions until they settle. It offers practice, turning your own material into questions so that reading becomes active testing. A platform that includes a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> lets you upload a chapter or your notes and receive practice questions within moments, which means your testing always reflects what you are actually studying rather than a generic bank.
            </p>
            <p className="mb-6">
              It offers current affairs support, condensing the flood of daily news into exam-focused points and linking them to the static concepts you have studied. And it offers progress tracking, showing you honestly where you stand and which areas need attention. The strength of the platform lies in how these pieces connect. A quiz result feeds your revision plan, a weak topic surfaces in your tracker, and a news item links back to a concept, so that each part makes the others more useful. This is what a platform can do that a pile of separate tools cannot.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              The power of a platform is that each feature makes the others more effective.
            </div>
          </section>

          {/* Feedback and Personalisation */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-indigo-600" />
              Feedback and personalisation as the platform's engine
            </h2>
            <p className="mb-4">
              The feature that turns a study platform from a content library into a genuine coaching environment is feedback. For Mains, this means real evaluation of your answers, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> built into the platform can check your writing for structure, coverage, and relevance and suggest specific improvements within minutes. Because this evaluation lives alongside your notes and practice, the feedback connects directly to what you have been studying, and the weaknesses it identifies can feed straight into your revision plan.
            </p>
            <p className="mb-6">
              Personalisation is the engine that ties it all together. A strong platform uses your performance across explanation, practice, and answer writing to shape what comes next, revisiting the topics you find difficult and adjusting your plan to your weak areas. This turns a static set of resources into a preparation that adapts to you, which is far more useful over a long journey than a fixed course that treats every aspirant the same. The platform learns from how you study and bends its support toward where you need it most.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              A platform that feeds your feedback into your plan turns study into a self-improving loop.
            </div>
          </section>

          {/* Choosing and Using */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              Choosing and using a platform well
            </h2>
            <p className="mb-4">
              When weighing an AI-powered study platform, look past the marketing and test the substance. Check whether its explanations adapt to your level, whether its practice draws on your own material, whether its answer feedback is specific rather than generic, and whether its tracking gives you an honest picture of your progress. Consider too whether it suits self-study learners and aspirants in smaller cities who may lack coaching access, and compare what different plans offer on the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page before committing. A platform is only as good as the daily use you make of it, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> that keeps everything connected is easier to use consistently than a scattered set of tools.
            </p>
            <p className="mb-6">
              Throughout, keep your expectations grounded. A study platform cannot guarantee marks, a rank, or selection; it does not replace standard books or experienced mentors, and it does not know the exam's exact questions. What it offers is an organised, connected, and adaptive environment that makes your preparation more efficient, and judged on that basis, a well-built platform can be a genuine asset. An AI-powered UPSC study platform will not clear the exam for you, but it can end the fragmentation that quietly slows so many aspirants down. By bringing explanation, practice, feedback, and tracking under one roof and adapting to how you study, it makes the long work of preparation more connected, more efficient, and easier to sustain.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Platform Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Get Started with AI Platform Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is an AI-powered UPSC study platform?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">An integrated environment that combines explanation, practice, feedback, and tracking.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">How is it better than separate tools?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Its connected parts reinforce one another and keep preparation coherent.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it help with answer writing?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, a good platform evaluates your answers and suggests improvements.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it adapt to my weak areas?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, strong platforms personalise your plan based on performance.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee results?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it supports preparation but cannot promise outcomes.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful for self-study?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, especially where coaching access is limited.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
