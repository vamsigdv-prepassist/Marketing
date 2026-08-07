import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, UserCheck, HeartHandshake, Compass } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AI Tutor for UPSC: Your 24x7 Study Partner That Never Sleeps | PrepAssist",
  description: "Get 24x7 instant doubt resolution, Mains answer evaluation, and structured study plans with an AI tutor built specifically for UPSC CSE aspirants.",
};

export default function AITutorForUPSCPage() {
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
              AI Tutor for UPSC: Your 24x7 Study Partner That Never Sleeps
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              Every UPSC aspirant knows the feeling of a doubt that refuses to leave. You are reading about the doctrine of basic structure late at night, one question forms in your mind, and there is no one awake to ask. By morning, the question has either faded or grown into a larger confusion. Multiply that small loss across a year of preparation, and you begin to see how much quiet ground is lost, not to a lack of effort, but to a lack of timely help. This is the gap an AI tutor for UPSC is built to close.
            </p>
            <p className="text-slate-600">
              An AI tutor is not a replacement for your teachers or your books. It is a companion that stays available when they cannot, answering questions in seconds, checking your writing without delay, and keeping your revision on track. To understand why this matters, it helps to look at what a tutor actually does across a real day of preparation, and then at where its usefulness ends.
            </p>
          </section>

          {/* What is an AI Tutor & How it Works */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              What is an AI tutor for UPSC, and how does it actually work?
            </h2>
            <p className="mb-4">
              An AI tutor for UPSC is a study assistant powered by artificial intelligence that explains concepts in plain language, responds to your doubts, reviews your answers, and reminds you to revise. You interact with it much as you would with a knowledgeable senior who is endlessly patient. When a concept does not click, you can ask it to explain the same idea a second and third time in simpler words, with an example drawn from everyday life. That patience is not a small thing. In a classroom of hundreds, you rarely get to ask the same question three ways until it finally makes sense.
            </p>
            <p className="mb-6">
              The scale of the exam is what makes this speed valuable. The UPSC Civil Services Examination draws over 10 lakh applicants each year for roughly 1,000 vacancies. In a contest that demanding, the aspirants who keep moving without getting stuck hold a real advantage over those who lose days waiting for answers. An AI tutor keeps you moving. It removes the friction that builds up between the moment a doubt appears and the moment it is resolved, and over months that saved friction becomes saved time and preserved motivation.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              The habit that makes preparation feel lighter is the habit of never letting a doubt sit overnight.
            </div>
          </section>

          {/* Why Aspirants Struggle */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-600" />
              Why do so many aspirants struggle without one?
            </h2>
            <p className="mb-4">
              The struggles of self-study rarely come from unwillingness to work. They come from structural gaps that are hard to fix alone. The first gap is feedback. When you write an answer or hit a confusing concept, you often have no one to correct you quickly, so mistakes settle in and get repeated. The second gap is revision. Without a system that reminds you what to revisit, topics you learned two months ago quietly slip away before the exam. The third gap is isolation, which is especially real for aspirants outside the large coaching hubs concentrated in a few cities. Not everyone can move to Delhi or afford premium classes, and geography should not decide the quality of preparation.
            </p>
            <p className="mb-6">
              Tools designed for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> exist to soften these gaps. They bring instant explanations, structured revision, and answer feedback to any aspirant with a phone, no matter which city or town they study from. The point is not that technology replaces discipline. The point is that it removes the obstacles that make discipline harder to sustain.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              An aspirant who studies alone does not need more willpower so much as fewer obstacles between effort and progress.
            </div>
          </section>

          {/* Daily Guide */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-indigo-600" />
              How does an AI tutor guide your daily study?
            </h2>
            <p className="mb-8">
              The value of an AI tutor becomes clearest when you see it working in three overlapping roles through a normal study day:
            </p>

            <div className="space-y-6 mb-6">
              {/* Role 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-bold text-slate-900 mb-2">As a Teacher</h3>
                <p className="text-slate-600 leading-relaxed">
                  As a teacher, it explains what is unclear. Ask it about the doctrine of basic structure at midnight, and it will lay out the origin, the landmark cases, and the practical effect in simple, structured steps. It does not hand you ten links to sort through. It gives you one focused answer, remembers what you asked before, and adjusts to your level.
                </p>
              </div>

              {/* Role 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-bold text-slate-900 mb-2">As a Corrector</h3>
                <p className="text-slate-600 leading-relaxed">
                  As a corrector, it sharpens your writing. Mains rewards clear, structured answers, and clear writing is built through repeated practice with fast feedback. An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI system for UPSC Mains answer evaluation</Link> reads your answer, scores it on structure, coverage, and relevance, and tells you what to fix, whether that is a weak introduction, a missing dimension, or a conclusion that drifts from the question. Because that feedback arrives in minutes rather than days, you can write more answers each week, and volume with feedback is the surest route to improvement.
                </p>
              </div>

              {/* Role 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <h3 className="text-lg font-bold text-slate-900 mb-2">As a Coach</h3>
                <p className="text-slate-600 leading-relaxed">
                  As a coach, it keeps you accountable. It tracks what you have studied, flags the topics you have neglected, and nudges you to revise before forgetting sets in. If you have not touched economy in a week, it surfaces that gap instead of letting it hide. Consistency is the quiet skill that separates aspirants who finish the syllabus from those who keep starting over, and gentle, timely reminders protect that consistency far better than good intentions do.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-bold text-sm">
              A tutor that teaches, corrects, and reminds turns scattered effort into a steady routine.
            </div>
          </section>

          {/* Human Mentors Comparison */}
          <section className="bg-indigo-50/60 border border-indigo-200/80 p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-indigo-950 mb-4 flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-indigo-600" />
              Can an AI tutor replace human mentors?
            </h2>
            <p className="mb-4 text-indigo-900">
              It cannot, and it should never claim to. An AI tutor cannot promise a rank, a selection, or a guaranteed result. It does not replace standard textbooks, coaching, or the judgment of an experienced mentor who has watched hundreds of aspirants rise and stumble.
            </p>
            <p className="mb-6 text-indigo-900">
              What an AI tutor does well is handle the parts of preparation that reward speed and consistency, which frees your human mentors to focus on strategy, motivation, and difficult decisions. The healthiest way to think about it is as a partnership: use AI for daily doubts, quick revision, and answer drills, and use your mentors for direction and perspective.
            </p>

            <div className="p-4 bg-white border border-indigo-200 rounded-xl text-indigo-900 font-bold text-sm">
              The smartest preparation combines the patience of a machine with the wisdom of a human guide.
            </div>
          </section>

          {/* Building Into Routine */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-600" />
              How do you build an AI tutor into your routine?
            </h2>
            <p className="mb-4">
              The easiest way to adopt any tool is to start small enough that the habit sticks. Begin with one subject and bring the tutor three real doubts you have been avoiding. Write a single Mains answer and get it reviewed the same day, while your reasoning is still fresh. Take a short quiz on yesterday's reading to test what actually stayed with you. Set two revision reminders for the week.
            </p>
            <p className="mb-6">
              It also helps to keep your materials together rather than scattered across notebooks and apps. A single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can hold your notes, quizzes, schedules, and answer reviews in one place, so your preparation feels like one connected system instead of a pile of loose parts. When you want to understand what different plans offer, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page lays out the options clearly, so you can match a plan to your stage and budget without guessing.
            </p>

            <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-bold text-sm mb-8">
              A tool only helps if you actually use it, so begin with one small habit and let it grow.
            </div>

            <p className="text-slate-600 mb-6 italic">
              An AI tutor for UPSC will never walk the path for you, and it would be dishonest to suggest otherwise. What it offers is company on a long and often lonely road, the kind of steady, patient help that keeps small doubts from becoming large ones and keeps a difficult year moving forward.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                Explore Pricing & Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Studying with AI Tutor
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is an AI tutor for UPSC available all day?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it responds at any hour, including late nights when no teacher is available.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it guarantee selection?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No. It supports your effort and improves efficiency, but it cannot promise results.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it review my Mains answers?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it gives structured feedback on your writing along with specific suggestions to improve.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it suitable for first-time aspirants?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it explains concepts in simple, step-by-step language that beginners can follow.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it replace textbooks?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it works alongside your standard books, not in place of them.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it help working aspirants?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it fits study around a busy schedule and sends reminders that protect consistency.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
