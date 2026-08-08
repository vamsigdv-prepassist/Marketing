import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, UserCheck, Compass, HeartHandshake } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-mentor-for-civil-services']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-mentor-for-civil-services']?.metaDescription || "",
};

export default function AIMentorForCivilServicesPage() {
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
              AI Mentor for Civil Services: Guidance That Stays With You Through the Journey
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              The civil services journey is as much a test of endurance as of intelligence. Over the months and years of preparation, what often decides an aspirant's progress is not raw ability but the quality of guidance they receive along the way, and the steadiness with which they keep going. A good mentor answers doubts, corrects mistakes early, keeps motivation from sagging, and helps an aspirant see the road ahead when it feels endless. Yet good mentorship is scarce, expensive, and concentrated in a few cities. An AI mentor for civil services is an attempt to make some of that guidance available to every aspirant, at any hour, wherever they happen to study.
            </p>
            <p className="text-slate-600">
              It is important to be clear about what this kind of mentor is and is not. An AI mentor does not replace the wisdom of an experienced human guide who has walked the path and read hundreds of aspirants. What it offers instead is constancy. It is present at midnight when a doubt surfaces; it never tyres of the same question asked three ways, and it holds the thread of your preparation together across the long stretch of the syllabus. Understanding that role is the key to using it well.
            </p>
          </section>

          {/* What an AI mentor actually does */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-600" />
              What an AI mentor for civil services actually does
            </h2>
            <p className="mb-4">
              At its core, an AI mentor is a study companion that explains, corrects, tracks, and encourages. When a concept confuses you, it breaks the idea down in plain language and offers an example close to daily life, then answers your follow-up questions until the idea settles. When you write an answer, it reviews your work and tells you where it fell short. When you drift from your plan, it notices the topics you have neglected and nudges you back on course. None of these tasks is glamorous, but together they form the daily support that keeps preparation moving.
            </p>
            <p className="mb-6">
              The value of this constancy grows when you consider the scale of the challenge. The civil services examination draws over 10 lakh applicants each year for roughly 1,000 vacancies, and the syllabus is wide enough to swallow anyone who studies without structure. An aspirant who can resolve doubts immediately, revise on schedule, and receive feedback quickly holds a real advantage over one who loses days at every obstacle. Tools designed for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> exist precisely to supply this steady, always-available support.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              A mentor's greatest gift is not brilliance in a single moment but reliability across a long journey.
            </div>
          </section>

          {/* Guidance for aspirants studying alone */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-indigo-600" />
              Guidance for aspirants who study alone
            </h2>
            <p className="mb-4">
              Much of the difficulty of self-preparation comes from isolation. An aspirant in a smaller city, or one who cannot afford premium coaching, often studies without anyone to ask when a concept breaks down or an answer needs correcting. Small confusions accumulate, revision slips, and motivation quietly erodes, not because the aspirant lacks discipline but because they lack support. An AI mentor softens this isolation by making guidance portable. It travels in a phone, and it does not care whether the aspirant is in Delhi or in a town far from any coaching centre.
            </p>
            <p className="mb-6">
              This democratising quality matters for a fairer preparation. Geography and family income should not decide the quality of guidance an aspirant can access, and while technology cannot equalise everything, it can bring structured explanations, timely feedback, and consistent revision to those who would otherwise study without them. The mentor becomes a companion that stands in for some of the support that others take for granted, so that a capable aspirant is not held back simply by where they live.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              Guidance that fits in a phone gives aspirants far from coaching hubs a fairer chance to prepare well.
            </div>
          </section>

          {/* From doubt-solving to answer writing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              From doubt-solving to answer writing
            </h2>
            <p className="mb-4">
              The clearest place an AI mentor proves its worth is in the two tasks that most reward speed: doubt-solving and answer feedback. Doubts are dangerous when left to sit, because a small confusion at night can grow into a larger gap by the time help is available. A mentor that answers immediately keeps these confusions from taking root, and because it stays within the syllabus, its explanations are shaped for the exam rather than for general reading.
            </p>
            <p className="mb-6">
              Answer writing is the other task transformed by an ever-present mentor. Writing for Mains improves only through repeated cycles of writing, review, and rewriting, and the slowest part of that cycle is usually the wait for feedback. An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> shortens that wait to minutes, checking your answer for structure, coverage, and relevance and suggesting specific fixes. With feedback this quick, you can write more answers each week and learn from each one, and the steady accumulation of corrected practice is what builds a strong writing hand over time.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              A mentor who resolves doubts at once and corrects answers quickly keeps preparation from stalling. The civil services journey is long, and much of the difference between finishing and faltering comes down to the guidance an aspirant can lean on. An AI mentor cannot walk the path for you, but it can stay beside you through it, and for a road this demanding, steady company is worth a great deal.
            </div>
          </section>

          {/* Keeping the whole journey coherent */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-indigo-600" />
              Keeping the whole journey coherent
            </h2>
            <p className="mb-4">
              Beyond individual tasks, an AI mentor helps hold the long journey together. The civil services syllabus is vast enough that topics learned early are easily forgotten by the time the exam arrives, and preparation scattered across notebooks and apps is hard to sustain. A mentor that tracks your progress, reminds you to revise, and keeps your materials in one place gives your preparation a shape it would otherwise lack, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your notes, quizzes, feedback, and schedule together so the whole effort feels coordinated rather than fragmented.
            </p>
            <p className="mb-6">
              It bears repeating that an AI mentor has firm limits. It cannot guarantee marks, a rank, or selection, and it does not replace the perspective and encouragement of a human mentor who understands your temperament. It handles the constant, repeatable parts of guidance, which frees your human mentors to focus on strategy and motivation. Used as a companion rather than a substitute, it makes a genuine difference to how steadily you can prepare. When you want to see which plan suits your stage, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page lays out the options clearly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                View Mentorship Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Get Started with AI Mentorship Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is an AI mentor for civil services?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A study companion that explains concepts, reviews answers, tracks progress, and keeps you consistent.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it replace a human mentor?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it complements human guidance rather than replacing it.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it available at any time?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it responds at any hour, including late at night.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it help aspirants without coaching?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it brings structured guidance to self-study learners.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it supports your effort but cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it review my Mains answers?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, with specific, structured feedback.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
