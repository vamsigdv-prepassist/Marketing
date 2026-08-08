import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, Layers, ArrowDownCircle, Network, PenTool } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-depth-study-tool']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-depth-study-tool']?.metaDescription || "",
};

export default function UPSCDepthStudyToolPage() {
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
              UPSC Depth Study Tool: Following a Single Topic All the Way Down
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="text-lg">
              The best way to understand what a UPSC depth study tool does is to watch it work on a single topic, following that topic downward from the shallow familiarity most aspirants stop at to the depth the exam actually rewards. So rather than describe depth in the abstract, this article takes one topic and descends through it layer by layer, showing at each level what a depth study tool adds. The topic barely matters, because the method is the same for any of them. What matters is how far down you are willing to go.
            </p>
          </section>

          {/* Layer One & Two */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                Layer one: the surface, where most preparation stops
              </h2>
              <p className="mb-4 text-slate-600">
                Begin at the surface, where an aspirant first meets a topic. Here you learn what it is, a basic definition, a few key facts, enough to recognise the topic and recall a line or two about it. Most preparation, pressed for time and spread across a vast syllabus, stops at roughly this level. You have covered the topic, you can identify it, and you move on. For Prelims recognition, this shallow layer is sometimes enough, but for Mains it is thin ground, because a definition and a couple of facts do not make an answer with substance.
              </p>
              <p className="mb-4 text-slate-600">
                A depth study tool does not let you mistake this surface for understanding. It acknowledges what you know and then asks the question that pushes you deeper, the question of why. Why does this topic exist, why does it matter, why is it framed the way it is. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> treat the first definition as a starting point rather than a destination, which is exactly the shift in habit that depth requires.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                The surface tells you what a topic is, but it never tells you why it matters.
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                Layer two: causes and context, the reasons behind the topic
              </h2>
              <p className="mb-4 text-slate-600">
                Descend one layer, and you reach causes and context, where the topic stops being a bare fact and becomes something with a history and a purpose. Here you learn why the topic came about, what problem it addresses, and what circumstances gave rise to it. A policy studied at this layer is no longer just a policy, but a response to a specific need, and a concept is no longer just a definition but an answer to a real question. This is where understanding begins to acquire weight.
              </p>
              <p className="mb-4 text-slate-600">
                A depth study tool guides this descent by prompting you to explore the background rather than accept the topic as given. It can explain the circumstances that led to a policy or the reasoning behind a constitutional provision, so the topic gains roots. This context is what allows you to write about a topic with insight, because you can explain not just what it is but why it exists, and an examiner can tell the difference immediately.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                Understanding the reasons behind a topic turns a memorised fact into an argument you can make.
              </div>
            </div>
          </section>

          {/* Layer Three & Four */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                Layer three: dimensions and perspectives, seeing the topic in the round
              </h2>
              <p className="mb-4 text-slate-600">
                Go deeper still, and you reach the layer of dimensions, where a single topic reveals its many sides. Almost every UPSC topic can be viewed from more than one angle: economic, social, political, environmental, ethical, and each angle adds a dimension to your understanding. A topic seen from only one side is flat, while a topic seen from several is rounded, and the exam consistently rewards the rounded view. This is the layer where good answers are made, because it gives you material to address a question from whichever direction it demands.
              </p>
              <p className="mb-4 text-slate-600">
                A depth study tool is particularly useful here, because it can surface dimensions you had not considered on your own. Ask about the different perspectives on a topic, and it can lay out the competing views and the trade-offs between them, so you see the full shape of the issue. This many-sided understanding is what lets you write balanced answers that weigh perspectives rather than asserting a single line, which is precisely the quality that lifts a Mains answer.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                A topic seen from several angles gives you the balance that strong answers require.
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">4</span>
                Layer four: connections, where the topic joins the wider syllabus
              </h2>
              <p className="mb-4 text-slate-600">
                The deepest useful layer is connection, where the topic stops standing alone and joins the web of the wider syllabus. Here you see how the topic links to other topics, to current affairs, and to the broader themes that run through the exam. A topic understood at this depth is not an isolated island of knowledge but a node connected to many others, and this connectedness is what makes it durable and flexible. Connected knowledge can be reached from many directions and applied to many questions.
              </p>
              <p className="mb-4 text-slate-600">
                A depth study tool helps build these connections by relating the topic to related concepts and to developments in the news, so your understanding becomes part of a larger structure. Reaching this layer for every topic is neither possible nor necessary, and part of using the tool wisely is choosing which topics deserve the full descent. Keeping your deep work in one place supports this, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your layered notes, quizzes, and connections together.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                The deepest understanding comes when a topic joins the wider web of the syllabus. Following a topic all the way down, from surface to causes to dimensions to connections, is how understanding gains the weight the exam looks for. A UPSC depth study tool guides that descent, and then helps you carry the depth back up into answers that show it.
              </div>
            </div>
          </section>

          {/* Testing, Writing & Conclusion */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-indigo-600" />
              Bringing the depth back to the surface: testing and writing
            </h2>
            <p className="text-slate-600">
              Descending through the layers is only worthwhile if the depth is retained and expressed, so the final movement is back up to the surface, where understanding meets the exam. Retention comes from testing, and converting your deep notes into questions with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> checks whether the depth you built has held. Expression comes from writing, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can check whether your answer draws on the causes, dimensions, and connections you uncovered, turning depth into marks.
            </p>
            <p className="text-slate-600">
              The honest limits apply throughout. A depth study tool cannot guarantee marks, a rank, or selection, and it does not replace your standard books or the insight of an experienced mentor. What it offers is a disciplined way to descend beneath the surface of a topic, which is exactly what an exam that rewards depth demands. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page keeps the options clear.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Depth Study Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Deep Learning Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is a UPSC depth study tool?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A tool that helps you understand topics beyond the surface, through their causes, dimensions, and connections.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Why is depth important?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Because Mains rewards analysis and many-sided understanding, not bare facts.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Should every topic be studied deeply?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, reserve full depth for the topics that most reward it.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does depth help retention?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, especially when deep understanding is followed by testing.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee marks?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it aids understanding but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful for Mains?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, depth is what gives Mains answers their substance.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
