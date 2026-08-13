import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['personal-ai-study-assistant-upsc']?.metaTitle || "PrepAssist",
  description: servicesMetadata['personal-ai-study-assistant-upsc']?.metaDescription || "",
};

export default function PersonalAIStudyAssistantUPSCPage() {
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
               Personal AI Study Assistant UPSC: A Companion That Knows Your Preparation
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">The word personal is what sets this tool apart. A general study aid helps anyone in the same way, but a personal AI study assistant for UPSC knows your particular preparation, your material, your progress, and your weaknesses, and helps you accordingly. Because it knows you, it can play several roles at once, each shaped by its knowledge of where you are in your journey. This article looks at the assistant through those roles, the different parts it plays for an aspirant who has made it a companion in their preparation. Each role draws on the same personal knowledge, applied in a different way.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The role of explainer, tuned to what you know</h3>
            <p className="mb-4">The first role is explainer, but a personal assistant explains differently from a general one, because it knows what you already understand. When you ask it to explain something, it can pitch the explanation to your level and connect it to material you have already studied, so the explanation fits into your existing understanding rather than standing apart from it. This personal tuning makes explanations land more easily, because they build on what you know rather than starting from scratch each time.</p>
            <p className="mb-4">An assistant that knows your preparation can also see when a new concept relates to something you learned before and point out the connection, strengthening your understanding as a whole. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> can shape their explanations around your material, which is far more useful than a generic explanation. As an explainer, a personal assistant teaches you in the context of everything else you have learned.</p>
            <p className="font-semibold text-slate-800">A personal explainer teaches in the context of what you already understand.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The role of examiner, testing what you need</h3>
            <p className="mb-4">The second role is examiner, testing you on the material that matters for your particular preparation. A personal assistant knows what you have studied and where you are weak, so it can test you on exactly the right things rather than on generic content. It can focus your practice on your weak areas, revisit material you are likely to have forgotten, and draw questions from your own notes, so your testing is targeted rather than random.</p>
            <p className="mb-4">This personal testing is more efficient than generic practice, because every question serves your particular needs. A <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> can create questions from your material, and a personal assistant can direct that testing to where you most need it. As an examiner, a personal assistant makes your revision count for more by testing precisely what your preparation requires.</p>
            <p className="font-semibold text-slate-800">A personal examiner tests exactly the material your preparation needs, not generic content.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The role of planner, organising your particular journey</h3>
            <p className="mb-4">The third role is planner, and it is one only a personal assistant can play well, because good planning depends on knowing your situation. A personal assistant knows your progress, your weak areas, and your available time, so it can plan your study around your actual needs rather than a one-size-fits-all schedule. It can prioritise what you most need to study, adjust as your progress changes, and shape a plan that fits your circumstances, whether you are a full-time aspirant or preparing alongside a job.</p>
            <p className="mb-4">This personal planning removes much of the burden of deciding what to study, which is one of the quiet drains on an aspirant's energy. A single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold your material and progress so the assistant can plan around them. As a planner, a personal assistant turns the vast, undifferentiated task of preparation into a manageable, personalised path.</p>
            <p className="font-semibold text-slate-800">A personal planner shapes your study around your actual progress and circumstances.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The role of coach, keeping you on track</h3>
            <p className="mb-4">The final role is coach, the one that keeps you moving through a long and demanding preparation. A personal assistant knows your patterns, so it can notice when you have neglected a subject, remind you to revise before you forget, and help you keep your preparation consistent. It also supports your answer writing, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can track your progress and guide your improvement over time. As a coach, it helps you sustain the steady effort that a preparation of this length requires.</p>
            <p className="mb-4">Across all these roles, explainer, examiner, planner, and coach, the common thread is that the assistant knows you and applies that knowledge to help in a personal way. The honest limits apply throughout. A personal AI study assistant cannot guarantee marks, a rank, or selection, and it does not replace the effort, reading, and human guidance that preparation needs. What it offers is a companion that knows your preparation and helps you accordingly, which makes the long journey more manageable. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear.</p>
            <p className="mb-4">A personal AI study assistant for UPSC earns the word personal by knowing your preparation and shaping its help around it. Playing the roles of explainer, examiner, planner, and coach, all tuned to where you are, it becomes a companion that makes the long journey feel less overwhelming and more your own.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently asked questions</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">What is a personal AI study assistant for UPSC?</span>
                <span className="text-slate-700">A companion that knows your material and progress and helps you accordingly.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">How is it personal?</span>
                <span className="text-slate-700">It tailors explanations, testing, and planning to your particular preparation.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Can it plan my study?</span>
                <span className="text-slate-700">Yes, it plans around your progress, weak areas, and available time.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Does it help me stay consistent?</span>
                <span className="text-slate-700">Yes, it reminds you to revise and keeps you on track.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Will it guarantee results?</span>
                <span className="text-slate-700">No, it supports your effort but cannot promise outcomes.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Does it replace mentors?</span>
                <span className="text-slate-700">No, it complements human guidance rather than replacing it.</span>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
