import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, Compass, Landmark, Scale, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-topic-wise-ai-explanation']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-topic-wise-ai-explanation']?.metaDescription || "",
};

export default function UPSCTopicWiseAIExplanationPage() {
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
              UPSC Topic-Wise AI Explanation: A Guided Tour Across the Syllabus
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="text-lg">
              The UPSC syllabus is not a single terrain but many, and a topic in one subject demands a different kind of explanation from a topic in another. A good UPSC topic-wise AI explanation recognises this, shaping its help to the particular topic in front of you rather than applying one flat approach to everything. The clearest way to appreciate this is to take a guided tour, stopping at a sample topic from several different subjects and seeing how topic-wise explanation adapts at each stop. The tour is illustrative rather than exhaustive, but it shows the principle vividly.
            </p>
          </section>

          {/* Stops 1 & 2 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Landmark className="w-6 h-6 text-amber-600" />
                First stop: a history topic, where explanation tells a story
              </h2>
              <p className="mb-4 text-slate-600">
                Begin in history, at a topic such as a phase of the freedom struggle. Here the right explanation is narrative, because history is a story of causes and consequences unfolding over time. A topic-wise explanation of a historical phase does not simply list events but shows why they happened, how one led to the next, and what they led to in turn. It places the topic in its timeline and connects it to the movements before and after, so you understand the phase as part of a flowing story rather than a set of isolated dates.
              </p>
              <p className="mb-4 text-slate-600">
                An explanation shaped this way is what makes history stick, because the mind holds stories far better than lists. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> can narrate a historical topic with its causes and effects intact, turning a dry section into a coherent account. This narrative approach suits history precisely, and it would be the wrong approach for a subject with a different logic, which is the whole point of topic-wise explanation.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-900 font-bold text-sm">
                A history topic is best explained as a story, with each event connected to what caused it.
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Scale className="w-6 h-6 text-indigo-600" />
                Second stop: a polity topic, where explanation reveals a system
              </h2>
              <p className="mb-4 text-slate-600">
                Move now to polity, at a topic such as a constitutional provision. Here the story-based approach of history would not fit, because polity is not a narrative but a system, and the right explanation reveals how the parts of that system work together. A topic-wise explanation of a provision shows what it does, how it relates to other provisions, and how it fits within the larger structure of governance. It treats the topic as a component of a working machine rather than an episode in a story.
              </p>
              <p className="mb-4 text-slate-600">
                This systemic explanation is what gives polity its logic, because a provision understood in relation to the whole is far clearer than one memorised alone. The explanation connects the topic to related provisions and, where useful, to a recent judgment or debate in the news, so the static concept meets the living system. Understanding polity this way lets you write balanced, grounded answers, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can check whether your answer reflects that systemic grasp.
              </p>
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
                A polity topic is best explained as part of a system, not as an isolated rule.
              </div>
            </div>
          </section>

          {/* Stops 3 & 4 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                Third stop: an economy topic, where explanation traces cause and effect
              </h2>
              <p className="mb-4 text-slate-600">
                Continue to economy, at a topic such as a monetary policy decision. The economy has its own logic again, one of cause and effect running through chains of consequences, and the right explanation traces those chains. A topic-wise explanation of a policy decision does not stop at what the decision is but follows what it leads to, showing how a change in one variable ripples through to others. It makes the mechanism visible, so you understand the topic as a process rather than a fact.
              </p>
              <p className="mb-4 text-slate-600">
                This mechanistic explanation is what makes economy comprehensible to aspirants who find it forbidding, because once the chain of cause and effect is clear, the jargon falls into place around it. The explanation can use an everyday example to ground the mechanism, and it can connect the topic to the year's economic developments. An economy understood as a set of working mechanisms rather than a list of terms is an economy you can actually reason about in an answer.
              </p>
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-900 font-bold text-sm">
                An economy topic is best explained by tracing the chain of cause and effect it sets in motion. The syllabus asks you to understand many kinds of topics, and each is clearest when explained in its own way. A UPSC topic-wise AI explanation gives you that tailored clarity, meeting history as a story, polity as a system, economy as a mechanism, and geography as a process, so every topic is explained the way it is best understood.
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Globe className="w-6 h-6 text-sky-600" />
                Fourth stop: a geography topic, where explanation makes a process visible
              </h2>
              <p className="mb-4 text-slate-600">
                End the tour in geography, at a topic such as a climatic phenomenon. Geography rewards understanding of processes located in space, and the right explanation makes the process visible before placing it on the map. A topic-wise explanation of a phenomenon walks through how it works, step by step, and only then ties it to where it occurs, so the map becomes a picture of something understood rather than a set of facts to memorise. This process-first approach is what turns geography from rote learning into comprehension.
              </p>
              <p className="mb-4 text-slate-600">
                Across all four stops, the common thread is adaptation. The tool explains each topic in the way that the topic demands: narrative for history, systemic for polity, mechanistic for economy, process-based for geography. Retention across all of them comes from testing, and converting your topic notes into questions with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> locks the understanding in. Keeping the whole tour in one place helps, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your topic-wise explanations and quizzes together.
              </p>
            </div>
          </section>

          {/* Conclusion & Limits */}
          <section className="space-y-6">
            <p className="text-slate-600">
              The honest limits close the tour. Topic-wise AI explanations cannot guarantee marks, a rank, or selection, and it does not replace your standard books or an experienced teacher. What it offers is explanation shaped to each topic's nature, which is far more useful than one flat method. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page keeps the options clear.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Topic-Wise Explanation Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Syllabus Tour Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is topic-wise AI explanation?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Explanation shaped to the nature of each specific topic and subject.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Why not explain every topic the same way?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Because different subjects reward different kinds of understanding.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">How does it explain history topics?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">As stories of causes and consequences over time.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it connect topics to current affairs?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, where the topic links to developments in the news.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee marks?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it aids understanding but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful across all subjects?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it adapts its approach to each subject's logic.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
