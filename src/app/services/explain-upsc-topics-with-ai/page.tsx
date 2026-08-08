import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, ListOrdered, FileCheck2, PenTool } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['explain-upsc-topics-with-ai']?.metaTitle || "PrepAssist",
  description: servicesMetadata['explain-upsc-topics-with-ai']?.metaDescription || "",
};

export default function ExplainUPSCTopicsWithAIPage() {
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
              Explain UPSC Topics With AI: A Step-by-Step Method That Actually Works
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="text-lg">
              Knowing that AI can explain UPSC topics is one thing. Knowing how to use it well is another, and many aspirants who try it get shallow results simply because they use it carelessly, throwing in a vague question and accepting whatever comes back. There is a better way, a repeatable method that turns AI from a casual answer machine into a genuine explaining tool. What follows is that method, laid out as a sequence you can apply to any topic in the syllabus.
            </p>
          </section>

          {/* Steps 1 - 3 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                Start with a clear, specific question
              </h2>
              <p className="text-slate-600">
                The quality of an explanation depends heavily on the quality of the question. A vague prompt such as asking about the economy returns a vague, sprawling answer, while a specific question such as asking why the central bank raises interest rates to control inflation returns a focused explanation you can actually use. Before you turn to the AI, decide precisely what you want to understand, and phrase it as a clear question. This first step does more to improve your results than any other, because it points the explanation exactly where you need it.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                Ask for the concept in plain language first
              </h2>
              <p className="text-slate-600">
                Once you have your question, ask for the idea in simple terms before anything else. Resist the temptation to demand a comprehensive answer immediately, because a wall of detail is hard to absorb when the basic idea is not yet clear. Get the core concept in plain language, with an everyday example if it helps, and make sure it makes sense before going further. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> can pitch an explanation at whatever level you ask for, so begin at the simplest level and build up from there.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                Probe the parts you still do not understand
              </h2>
              <p className="mb-4 text-slate-600">
                This is the step most aspirants skip, and it is where real understanding is made. After the first explanation, notice which parts remain unclear and ask about those specifically. If a term was used that you do not know, ask for it to be defined. If a step in the reasoning was assumed, ask for it to be spelt out. This back and forth, narrowing in on your exact gaps, is what separates genuine understanding from the comfortable illusion of it. Keep probing until nothing in the explanation is fuzzy.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                Explaining UPSC topics with AI works best as a method, not a habit of casual questions. Move from a clear question to plain understanding, probe your gaps, build connections, test yourself, and write, and each topic becomes something you genuinely know rather than something you merely looked up.
              </div>
            </div>
          </section>

          {/* Steps 4 - 6 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                Ask how the topic connects to the wider syllabus
              </h2>
              <p className="text-slate-600">
                A topic understood in isolation is fragile, while a topic understood in connection with others is durable and far more useful in answers. Once the concept itself is clear, ask how it links to related topics and to current affairs. Understanding how a policy connects to the constitutional provision behind it, or how an economic concept shows up in the year's budget, gives the topic roots across the syllabus. These connections are exactly what strong Mains answers draw upon, so building them into your understanding from the start pays off later.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">5</span>
                Test yourself on what you have learned
              </h2>
              <p className="text-slate-600">
                Understanding a topic is not the same as remembering it, and the fifth step locks the learning in. Turn what you have understood into practice by converting your notes into questions with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link>, and test yourself soon after, then again later. Retrieving the idea strengthens it far more than rereading, and testing quickly reveals whether your understanding was as solid as it felt. A topic you can recall under question is a topic you have truly learned.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">6</span>
                Write about it and get feedback
              </h2>
              <p className="text-slate-600">
                The final step turns understanding into exam-ready skill. For any topic likely to appear in Mains, write a short answer on it, because writing forces you to organise your understanding and exposes any remaining gaps. An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can then check whether your answer is well structured, balanced, and connected to the wider context, and its feedback shows you where your understanding needs deepening. This closes the loop, taking you from a first question all the way to a written answer you can defend.
              </p>
            </div>
          </section>

          {/* Integration & Conclusion */}
          <section className="space-y-6">
            <p className="text-slate-600">
              Applied consistently, this six-step method transforms how you use AI. Instead of collecting shallow answers, you build clear, connected, tested, and expressed understanding of each topic, which is exactly what the exam rewards. Keeping the whole process in one place makes it easier to sustain, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your questions, notes, quizzes, and answers together.
            </p>
            <p className="text-slate-600">
              A closing note on limits is due. Using AI to explain UPSC topics cannot guarantee marks, a rank, or selection, and it does not replace your standard books or the guidance of an experienced teacher. It is a method for understanding topics more clearly and efficiently, and when you want to compare plans, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page keeps the choices simple.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Topic Explanation Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Try 6-Step AI Method Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does the way I ask really matter?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, a specific question produces a far more useful explanation than a vague one.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Should I ask for detail right away?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, start simple and build up once the core idea is clear.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Why probe the unclear parts?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Because narrowing in on your exact gaps is where real understanding forms.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Do I need to test myself?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, testing turns understanding into lasting recall.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will this guarantee good marks?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it improves understanding but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is writing an answer necessary?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">For Mains topics, yes, because writing exposes and closes remaining gaps.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
