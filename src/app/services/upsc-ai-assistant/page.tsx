import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, UserCheck, Sun, Sunset, Moon, Coffee, AlertCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "UPSC AI Assistant: How a Digital Sidekick Reshapes Your Prep Day | PrepAssist",
  description: "Experience how a UPSC AI assistant optimizes a full study day from morning plan creation to midday current affairs, evening Mains answer evaluation, and night analytics.",
};

export default function UPSCAIAssistantPage() {
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
              UPSC AI Assistant: How a Digital Sidekick Reshapes Your Prep Day
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              Most articles about study tools list features and leave you to imagine the rest. This one takes a different route. Rather than describe a UPSC AI assistant in the abstract, it follows a single day of preparation from dawn to night, so you can see how the tool fits into the ordinary rhythm of an aspirant's life. By the end, the point should be clear. The value of an assistant lies not in any one feature but in the steadier rhythm it creates, and rhythm is what carries a candidate through the long months of the UPSC journey.
            </p>
            <p className="text-slate-600">
              Before the day begins, it helps to fix the definition. A UPSC AI assistant is a digital helper that plans your study, condenses current affairs, generates quizzes, reviews your answers, and tracks your progress, all inside one connected space. Now let the day unfold.
            </p>
          </section>

          {/* Morning Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-amber-500" />
              Morning: a plan that is ready before you are
            </h2>
            <p className="mb-4">
              The hardest twenty minutes of any study day are often the first. You sit down, and instead of studying you spend that time deciding what to study. A UPSC AI assistant removes that decision. When you open it in the morning, the day is already mapped, shaped by the weak areas it noticed the day before. It might set three priorities: revise economy, write one Mains answer, and take a short current affairs quiz.
            </p>
            <p className="mb-6">
              This matters more than it appears to. Decision fatigue is real, and every choice you make early drains a little of the focus you need for the harder work ahead. A plan made the night before protects that focus. There is also a learning principle quietly at work here. Research on memory shows that active recall through quizzing beats plain rereading, so an assistant that builds testing into your morning is making your effort count for more from the very first hour.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              A day that begins with a ready plan spends its energy on studying rather than on deciding.
            </div>
          </section>

          {/* Midday Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Coffee className="w-6 h-6 text-indigo-600" />
              Midday: current affairs without the flood
            </h2>
            <p className="mb-4">
              Current affairs can swallow an entire morning if you let them. Newspapers are wide, and much of what they carry has little to do with the syllabus. A UPSC AI assistant condenses the day's news into short, exam-focused points, so you read what matters and skip what does not. It surfaces the government schemes and their aims, the important bills and judgments, the international relations developments tied to the syllabus, and the notable items from science and the environment.
            </p>
            <p className="mb-4">
              You read these in a fraction of the time, tag one or two topics for later revision, and move on to deeper study. Tools that support <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> turn a flood of information into a filtered stream, which protects both your hours and your attention. The discipline here is subtle. Current affairs should feed your preparation, not consume it, and an assistant that filters the noise keeps that balance for you.
            </p>
            <p className="mb-6">
              Around lunch, the rhythm shifts from reading to practice. You upload a chapter you studied earlier, and a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link> turns it into a set of practice questions in seconds. Instead of promising yourself you will revise later, you test yourself now, while the material is fresh. That single habit closes the stubborn gap between reading something and actually remembering it.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              The goal of a study morning is not to read more but to retain more of what you read.
            </div>
          </section>

          {/* Evening Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sunset className="w-6 h-6 text-rose-500" />
              Evening: one answer and honest feedback
            </h2>
            <p className="mb-4">
              By late afternoon it is time to write. You produce a 250-word Mains answer, and the assistant reviews it against the directive word, the structure, and the coverage. It might point out that your introduction is thin, that you missed a key dimension, or that your conclusion does not return to the question. You rewrite the answer while the lesson is still fresh, not three days later when you have forgotten your own reasoning.
            </p>
            <p className="mb-6">
              This is where fast feedback earns its keep. Answer writing improves through repeated cycles of writing, reviewing, and rewriting, and the shorter each cycle, the more of them you can complete in a week. Over a month, an aspirant who runs many quick cycles pulls ahead of one who writes an answer and waits days for a verdict. The assistant does not write the answer for you, and it should not. It sharpens the answer you wrote, which is exactly the kind of help that builds a lasting skill.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              Feedback only helps when it reaches you fast enough to act on while the thinking is still warm.
            </div>
          </section>

          {/* Night Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Moon className="w-6 h-6 text-slate-700" />
              Night: measuring the day and shaping the next
            </h2>
            <p className="mb-4">
              Before you close the books, the assistant shows you the day in plain numbers. It might report four topics revised, a quiz accuracy of seventy two percent, and an answer score that has risen for the third day running. More useful than the numbers themselves is what the assistant does with them. It sets tomorrow's focus around whatever slipped today, so weak spots are addressed before they harden into gaps.
            </p>
            <p className="mb-6">
              This closing loop of plan, study, test, and review is the real engine of progress, and no single feature matters as much as keeping that loop unbroken. A capable <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> holds every part of it together, so nothing falls through the cracks between your notes, your quizzes, and your schedule. On weekends, the assistant shifts gears, gathering the week's weak areas into one revision list and setting a longer practice test when the exam draws near, which stops small gaps from quietly becoming permanent ones.
            </p>

            <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-bold text-sm">
              A day you measure honestly becomes a plan you can improve tomorrow.
            </div>
          </section>

          {/* What a UPSC AI Assistant Will Not Do */}
          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-400" />
              What a UPSC AI assistant will not do
            </h2>
            <p className="mb-4 text-slate-300">
              It is worth being direct about the limits. A UPSC AI assistant cannot guarantee a rank or a result. It does not replace coaching, mentors, or standard books, and it does not know the exact questions the exam will ask. What it offers is structure, speed, and consistency, and it is honest work to present it as a study aid rather than a shortcut. When you want to see which plan suits your stage and budget, the <Link href="/pricing" className="text-indigo-400 font-semibold hover:underline">pricing</Link> page sets out the options plainly.
            </p>
            <p className="mb-6 text-slate-300">
              The deeper reason an assistant helps is that it removes waste rather than adding hours. It reclaims the minutes lost to planning, sorting news, and waiting for feedback, and it returns those minutes to real study. It also protects you on low-energy days, when the plan is still ready and the reminders still fire, which is precisely when unaided routines tend to collapse.
            </p>

            <div className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-amber-300 font-bold text-sm mb-8">
              A UPSC AI assistant does not lengthen your day. It helps you use the day you already have, and across a preparation measured in months, using time wisely quietly outperforms simply spending more of it.
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                Explore Pricing & Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-sm">
                Try PrepAssist Sidekick Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is a UPSC AI assistant?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A digital helper that plans your study, condenses news, builds quizzes, and reviews answers.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it write my answers for me?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it reviews and improves the answers you write yourself.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it summarise current affairs?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, into short, exam-focused points that save reading time.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it adapt to my weak areas?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it uses your recent performance to plan the next day.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it promise success?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No tool can. Your results depend on your own consistent effort.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it fit a working professional's schedule?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it plans around the actual hours you have available.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
