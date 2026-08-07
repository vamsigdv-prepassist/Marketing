import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Target, BookOpen, Clock, Brain, Compass, Layers, Sliders } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Subject-Wise AI Mentor UPSC: One Guide, Tuned to Every Paper | PrepAssist",
  description: "Experience paper-tailored UPSC preparation using a Subject-Wise AI Mentor for History, Polity, Economy, Geography & Ethics with subject-tuned quizzes & Mains feedback.",
};

export default function SubjectWiseAIMentorUPSCPage() {
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
              Subject-Wise AI Mentor UPSC: One Guide, Tuned to Every Paper
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          {/* Intro Section */}
          <section>
            <p className="mb-4 text-lg">
              The UPSC syllabus is not one subject but many, and each demands a different way of thinking. History asks you to follow a narrative, polity to understand a system, economy to trace cause and effect, geography to grasp processes, and ethics to reason through values. A single study method applied uniformly across all of them is one of the quiet reasons aspirants underperform in their weaker papers. What preparation really needs is guidance that changes shape from subject to subject, and this is precisely the idea behind a subject-wise AI mentor UPSC, a single tool that adapts its approach to the demands of each paper.
            </p>
            <p className="text-slate-600">
              A general study assistant treats every topic the same way. A subject-wise mentor recognises that answering a polity question is not the same task as answering a geography question, and it adjusts its explanations, its practice, and its feedback accordingly. Understanding this difference is the key to using such a mentor well, so it is worth walking through how the approach shifts across the major subjects.
            </p>
          </section>

          {/* Why One Method Cannot Fit */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sliders className="w-6 h-6 text-indigo-600" />
              Why one method cannot fit every subject
            </h2>
            <p className="mb-4">
              Consider how differently the papers reward you. In history, marks come from understanding why events happened and how they connect across time, so rote dates are almost worthless without the reasoning that links them. In polity, marks come from grasping how constitutional provisions work together, so isolated articles mean little until you see the system. In economy, marks come from following chains of cause and effect, while in geography they come from understanding physical processes and then locating them, and in ethics they come from reasoning clearly through dilemmas rather than reciting definitions.
            </p>
            <p className="mb-6">
              An aspirant who studies all of these the same way, perhaps by reading and rereading, will do well in the subjects that happen to suit that method and poorly in the rest. A subject-wise mentor addresses this by shaping their help to each paper's logic. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 font-semibold hover:underline">AI for UPSC preparation</Link> can explain a historical trend as a story, a constitutional provision as part of a system, and an economic policy as a sequence of effects, matching the mode of thinking that each subject rewards.
            </p>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-900 font-bold text-sm">
              Different subjects reward different kinds of thinking, so the guidance for each should differ too.
            </div>
          </section>

          {/* How Subject-Wise Mentor Adapts */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-600" />
              How a subject-wise mentor adapts across papers
            </h2>
            <p className="mb-4">
              The practical value of a subject-wise mentor shows in how it handles a study week that spans several papers. For history, it might build a timeline and then quiz you on causes and turning points, reinforcing the narrative structure the subject depends on. For polity, it might explain a provision, connect it to a recent judgment in the news, and ask you to write a balanced answer citing the right articles. For geography, it might walk you through a physical process, then check whether your Mains answer adds value through a clear diagram.
            </p>
            <p className="mb-6">
              This adaptability extends to testing as well. After you study any topic, you can turn your notes into targeted practice with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 font-semibold hover:underline">PDF to quiz generator for UPSC</Link>, and the questions can reflect the subject's character, whether that means factual recall for environment, conceptual chains for economy, or cause and effect for history. The mentor does not force a single format onto everything. It meets each subject on its own terms, which is exactly what an aspirant juggling a dozen different demands needs.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold text-sm">
              A mentor that adjusts its method to each paper helps you study every subject the way it is actually tested.
            </div>
          </section>

          {/* Feedback Respecting Subject Demands */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-600" />
              Feedback that respects the subject's demands
            </h2>
            <p className="mb-4">
              Answer writing is where the subject-wise approach proves its worth most clearly, because a good answer in one paper looks quite different from a good answer in another. A polity answer needs balance and constitutional grounding, a geography answer benefits from diagrams, an economy answer must trace mechanisms, and an ethics answer must reason through competing values. Feedback that ignores these differences is of limited use, while feedback tuned to each subject genuinely improves your writing.
            </p>
            <p className="mb-6">
              An <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 font-semibold hover:underline">AI tool for UPSC Mains answer evaluation</Link> can assess your answer against what the specific subject requires, pointing out a missing perspective in polity, a missing diagram in geography, or an unexamined trade-off in economy. Over time, this trains you to write in the register each paper expects, so that you are not applying one rigid template to every question but responding to the actual demands of the subject in front of you. This is the difference between an aspirant who writes competent answers everywhere and one who writes strong answers only where the default method happens to fit.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-bold text-sm">
              Subject-aware feedback teaches you to write each paper the way that paper rewards. The UPSC syllabus asks you to be many kinds of thinkers at once, and a subject-wise AI mentor respects that reality. By tuning its guidance to the logic of each paper, it helps you meet every subject on its own terms, which is a far surer path than forcing one method across them all.
            </div>
          </section>

          {/* Keeping Every Subject on Track */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-indigo-600" />
              Keeping every subject on track together
            </h2>
            <p className="mb-4">
              The final advantage of a subject-wise mentor is balance across the whole syllabus. It is easy to over-study the subjects you enjoy and neglect the ones you find hard, which leaves predictable weak spots. A mentor that tracks your progress across every paper can nudge you toward the subject you have been avoiding and keep your preparation even. Holding all of this in one connected space matters, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 font-semibold hover:underline">UPSC AI app</Link> can keep your subject-wise notes, quizzes, and schedules together so your preparation feels coordinated rather than fragmented.
            </p>
            <p className="mb-6">
              As always, honesty about limits is essential. A subject-wise AI mentor cannot guarantee marks, a rank, or selection, and it does not replace standard textbooks or the judgment of experienced teachers who know each subject deeply. It adapts explanations, testing, and feedback to the character of each paper, and it keeps your preparation balanced. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">pricing</Link> page lays out the options clearly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-sm flex items-center gap-2">
                View Subject-Wise Plans & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm">
                Start Subject-Wise AI Prep Free
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
                <h3 className="font-bold text-slate-900 mb-2 text-base">What is a subject-wise AI mentor?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">A tool that adapts its explanations, practice, and feedback to each UPSC subject.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Why does subject-specific guidance matter?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Because each paper rewards a different kind of thinking.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Can it test me differently for different subjects?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, its quizzes can reflect each subject's character.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Does it help balance my preparation?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it can flag the subjects you have been neglecting.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Will it guarantee results?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">No, it supports preparation but cannot promise outcomes.</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900 mb-2 text-base">Is it useful for Mains across subjects?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Yes, it tailors answer feedback to each paper's demands.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
