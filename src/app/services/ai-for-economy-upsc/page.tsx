import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, TrendingUp, Coins, LineChart } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-for-economy-upsc']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-for-economy-upsc']?.metaDescription || "",
};

export default function AIForEconomyUPSCPage() {
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
              AI for Economy UPSC: Making the Toughest Subject Finally Click
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              Few subjects divide UPSC aspirants as sharply as economics. Those from a commerce or economics background often glide through it, while many others open the syllabus, meet terms like fiscal deficit, repo rate, and current account balance, and quietly decide that economy is simply not for them. That decision is a mistake, and an expensive one, because the economy runs through Prelims, Mains, the essay, and the interview alike. The good news is that the subject is far more logical than it looks from the outside, and using AI for economy UPSC can turn what feels like a wall of jargon into a set of connected, understandable ideas.
            </p>
            <p className="text-slate-600">
              The reason economy intimidates is not that it is unusually hard. It is that it is usually taught as vocabulary rather than as reasoning. When you memorise a definition of inflation without understanding why prices rise or how the central bank responds, the term never really settles. An AI tool changes the order of learning. It lets you understand the mechanism first and attach the vocabulary afterwards, which is the way the subject was always meant to be learned.
            </p>
          </section>

          {/* Why Economy Feels Harder */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              Why economy feels harder than it really is
            </h2>
            <p className="mb-4">
              Economics is a subject of relationships. Interest rates affect borrowing, borrowing affects demand, demand affects prices, and prices affect policy. Miss the relationships and you are left holding a bag of disconnected terms that refuse to stay in memory. Most aspirants who struggle are not weak students. They have simply never had the chains of cause and effect explained slowly enough, with examples close enough to daily life, for the logic to take hold.
            </p>
            <p className="mb-6">
              This is exactly the gap an AI tool fills. Ask it to explain why the Reserve Bank raises the repo rate when inflation climbs, and it can walk you through the reasoning step by step, using an everyday example of a household deciding whether to take a loan. When one explanation does not land, you can ask for a simpler version without any embarrassment. Tools designed for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> are patient in a way a crowded classroom cannot be, and for a subject built on layered reasoning, that patience is worth a great deal.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              Economy stops being frightening the moment you learn the logic before the labels.
            </div>
          </section>

          {/* Building a Base for Current Affairs */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Coins className="w-6 h-6 text-indigo-600" />
              Building a base that current affairs can stand on
            </h2>
            <p className="mb-4">
              Economy is unusual in how tightly the static syllabus binds to the news. The Union Budget, monetary policy decisions, inflation figures, and trade data all connect directly to concepts in your textbooks. An aspirant who treats the two as separate worlds works twice as hard for half the reward, while one who links them turns every economic headline into revision. The trick is to build the conceptual base first, so that when a news item about the fiscal deficit appears, you already understand what a fiscal deficit is and why its size matters.
            </p>
            <p className="mb-6">
              AI supports this linking naturally. When the central bank announces a policy change, you can ask the tool to explain what it means and tie it back to the concept you studied, so your static and dynamic preparation grow together. Over months, this builds the integrated understanding that Mains rewards, where a strong answer moves easily between a textbook concept and a current development. The subject begins to feel less like memorisation and more like reading the news with informed eyes.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              A firm grasp of the basics turns the daily economic news from noise into revision.
            </div>
          </section>

          {/* Turning Concepts into Recall */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <LineChart className="w-6 h-6 text-indigo-600" />
              Turning concepts into recall and answers
            </h2>
            <p className="mb-4">
              Understanding a concept once is not the same as remembering it under exam pressure, and the economy has enough moving parts that recall needs deliberate practice. Active testing is the answer. After studying a topic such as types of inflation or the components of the balance of payments, convert your notes into practice questions with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> and test yourself the same day, then again a week later. The act of retrieving an idea strengthens it far more than rereading, and it quickly shows you which relationships you have truly grasped and which only felt clear at the time.
            </p>
            <p className="mb-6">
              Mains economy questions demand more than definitions. They ask you to analyse, to weigh trade-offs, and to connect policy to outcomes. Writing such answers well is a skill that grows through feedback, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can check whether your answer explains the mechanism clearly, considers more than one side, and reaches a reasoned conclusion. With each corrected answer, your ability to argue an economic point with clarity improves, and that clarity is precisely what separates a strong economy answer from a vague one.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              In economy, testing what you learn and writing about it are what convert understanding into marks. Economics is not a subject to fear but a subject to understand, one logical link at a time.
            </div>
          </section>

          {/* Studying Economy Without Losing Thread */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              Studying economy without losing the thread
            </h2>
            <p className="mb-4">
              Economics rewards a steady, connected approach rather than scattered reading. It helps to move through the subject in a logical order, beginning with basic concepts of growth and development, then national income, then money and banking, then fiscal policy and the budget, then external sector and trade, and finally the current economic survey and budget of the year. Studying in this sequence lets each topic build on the last, so that by the time you reach the budget you already understand the concepts it rests on. Keeping all of this in one connected space matters too, because economy notes scattered across notebooks are hard to revise, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your concepts, quizzes, and current affairs links together.
            </p>
            <p className="mb-6">
              It is worth being clear about what AI cannot do here. It cannot guarantee marks, a rank, or selection, and it does not replace standard economics textbooks, the annual Economic Survey, or the guidance of an experienced teacher. What it offers is a faster path to understanding, consistent testing, and quick feedback on your writing. When you want to see which study plan suits your stage, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page sets out the options plainly.
            </p>

            <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-bold text-sm mb-8">
              A logical order of study, held together in one place, makes economy far easier to sustain.
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                View Economy Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Economy AI Prep Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is economy hard to learn with AI?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">AI makes it clearer by explaining the logic first, but you still need regular practice.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it explain difficult terms simply?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it breaks jargon into plain language with everyday examples.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it link economy to current affairs?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it connects budget and policy news to core concepts.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it test me on economy?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, through quizzes built from your own notes.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee good marks?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it strengthens preparation but cannot promise outcomes.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful for Mains economy?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, particularly for feedback on analytical answers.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
