import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, UserCheck, Calendar, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['personalised-ai-tutor-upsc']?.metaTitle || "PrepAssist",
  description: servicesMetadata['personalised-ai-tutor-upsc']?.metaDescription || "",
};

export default function PersonalisedAITutorUPSCPage() {
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
              Personalised AI Tutor UPSC: Preparation That Adapts to You
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              No two UPSC aspirants are the same. One is a first-timer trying to make sense of a syllabus that seems to have no edges, another is a repeat candidate who cleared Prelims but stumbled in Mains, a third is a working professional with only two hours each night, and a fourth is a college student preparing years in advance. A study plan that works beautifully for one of them can be almost useless for another. This is why the idea of a personalised AI tutor UPSC matters so much, because it shifts preparation away from one-size-fits-all material and toward guidance shaped around the individual aspirant.
            </p>
            <p className="text-slate-600">
              Personalisation is more than a pleasant feature. It goes to the heart of why so many aspirants feel that generic resources do not quite fit their situation. A tutor that adapts to your level, your schedule, and your weak areas removes the friction of constantly translating general advice into your own circumstances, and over a long preparation, that saved friction adds up to real progress.
            </p>
          </section>

          {/* What Personalisation Means */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6 text-indigo-600" />
              What personalisation actually means in practice
            </h2>
            <p className="mb-4">
              Personalisation is easy to claim and harder to deliver, so it helps to be concrete about what it should mean. A personalised tutor begins by understanding where you are. It takes account of your target attempt, your available hours, your stronger and weaker subjects, and your current stage in the journey. From that starting point, it shapes its guidance, so a beginner receives foundational explanations and a clear plan, while a repeat aspirant focused on Mains receives more answer practice and analysis.
            </p>
            <p className="mb-6">
              This adaptation continues as you study. As the tutor observes which topics you find difficult, it can revisit them more often and adjust your plan accordingly, rather than marching everyone through the same fixed sequence. Tools built around genuine <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> use your own performance as the guide, so the help you receive tomorrow reflects how you did today. This is a very different experience from a static course that treats every aspirant identically, and it is far closer to how a good human mentor would work.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              Real personalisation means guidance that starts from your situation and keeps adjusting to your progress.
            </div>
          </section>

          {/* Schedule and Stage */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              Preparation shaped around your schedule and stage
            </h2>
            <p className="mb-4">
              Consider how differently a personalised tutor serves different aspirants. For the working professional with limited time, it can build a plan that focuses each short session on the highest-priority weak areas, so that scarce hours are never wasted deciding what to study. For the first-timer, it can break the vast syllabus into a manageable sequence and explain concepts from the ground up. For the repeat aspirant, it can concentrate on the answer writing and analysis that will lift a Mains score, and for the student preparing early, it can lay a slow, steady foundation over a longer horizon.
            </p>
            <p className="mb-6">
              This flexibility extends to practice as well. A personalised tutor can draw questions from the material you are actually studying, turning your notes into targeted quizzes with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> and focusing your testing on the areas where you are weakest. Instead of a generic question bank, you get practice that matches your stage and addresses your specific gaps, which makes each testing session count for more. The effect is a preparation that feels tailored rather than borrowed.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              A tutor that adapts to your schedule and stage lets every aspirant prepare on their own terms.
            </div>
          </section>

          {/* Feedback and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-indigo-600" />
              Feedback and tracking that reflect your journey
            </h2>
            <p className="mb-4">
              The personalised approach shows its value clearly in answer writing and progress tracking. Feedback is most useful when it responds to your particular weaknesses, and a personalised tutor can watch how your answers evolve. An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can identify the recurring issues in your writing, whether that is a consistently weak conclusion or a habit of missing one side of an argument, and guide you to address them specifically. Because the feedback is tied to your own patterns rather than to a generic checklist, it helps you improve where you most need to.
            </p>
            <p className="mb-6">
              Progress tracking works the same way. Rather than showing you the same dashboard as everyone else, a personalised tutor reflects your journey, highlighting the subjects you have neglected and the topics whose recall is slipping. This honest, individual picture lets you adjust before small gaps become serious ones. Holding all of this together in one place strengthens the effect, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can keep your personalised notes, quizzes, feedback, and progress connected so your preparation feels coherent rather than scattered.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              Feedback and tracking mean the most when they reflect your own path rather than a generic one. A personalised AI tutor for UPSC recognises a simple truth: that preparation works best when it fits the person doing it. By adapting to your level, your time, and your weaknesses, it turns a generic syllabus into a plan that feels like your own, and while it can never do the work for you, it can make the work you do count for considerably more.
            </div>
          </section>

          {/* Limits of Personalisation */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              The honest limits of personalisation
            </h2>
            <p className="mb-4">
              For all its promise, a personalised AI tutor has clear limits that are worth stating plainly. It cannot guarantee marks, a rank, or selection, and no honest tool would claim otherwise. It does not replace standard textbooks, coaching, or the judgment of an experienced mentor who can read your temperament and motivation in ways no algorithm can. What it personalises is the mechanics of preparation, the explanations, the practice, the feedback, and the schedule, and these are exactly the areas where a good fit saves time and sustains momentum.
            </p>
            <p className="mb-6">
              The healthiest way to use such a tutor is as a companion that adapts to you while your own discipline and your human mentors provide direction and perspective. Used this way, personalisation becomes a genuine advantage rather than a marketing line. When you want to see which plan fits your particular situation, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page sets out the options clearly, so you can choose based on your stage and needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Personalised Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Personalised AI Prep Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is a personalised AI tutor for UPSC?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A tool that adapts its explanations, practice, and plan to your individual situation.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">How does it personalise my study?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">It uses your level, schedule, and weak areas to shape its guidance.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it adjust as I improve?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it revisits difficult topics and updates your plan over time.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it help working professionals?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it focuses limited study time on the highest-priority areas.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it supports your effort but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it replace mentors?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it complements human guidance rather than replacing it.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
