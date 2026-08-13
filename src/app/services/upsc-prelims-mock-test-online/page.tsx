import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-prelims-mock-test-online']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-prelims-mock-test-online']?.metaDescription || "",
};

export default function UPSCPrelimsMockTestOnlinePage() {
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
               UPSC Prelims Mock Test: What Each Attempt Is Really Teaching You
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Aspirants take Prelims mock tests to check their scores, but a mock test teaches far more than a number. Each attempt, taken seriously and reviewed carefully, delivers several distinct lessons, and the score is only the most visible of them. A UPSC prelims mock test is a teacher in disguise, and this article looks at the different things it is really teaching you, because understanding these lessons is what turns a mock from a scorecard into a genuine tool for improvement. The score fades, but the lessons last.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">It teaches you where your knowledge is thin</h3>
            <p className="mb-4">The first and most obvious lesson a mock test teaches is where your knowledge is weak. The questions you get wrong, and the ones you guess, reveal the gaps in your preparation with a precision that ordinary study cannot match. A mock test does not let you hide from your weaknesses the way passive reading does, because it forces you to produce answers and exposes exactly where you fall short. This diagnostic value is one of the most useful things a mock offers, provided you study your mistakes rather than just your score.</p>
            <p className="mb-4">Reviewing a mock carefully, question by question, turns each wrong answer into a lesson about what to study next. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> can help you understand the concepts behind the questions you missed, and you can reinforce those areas by generating more practice, with a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> turning the relevant material into questions. The first lesson of a mock is a precise map of what you do not yet know.</p>
            <p className="font-semibold text-slate-800">A mock test reveals exactly where your knowledge is thin, if you study your mistakes.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">It teaches you to manage time under pressure</h3>
            <p className="mb-4">The second lesson is time management, a skill Prelims demands and that only timed practice can build. A large number of questions must be answered in a limited time, and knowing the material is not enough if you cannot pace yourself through the paper. A mock test teaches you how it feels to work against the clock, where you tend to lose time, and how to move through the paper without getting stuck. This is a lesson about performance, not knowledge, and it is learned only by doing.</p>
            <p className="mb-4">Each timed mock builds your sense of pacing, teaching you when to move on from a difficult question and how to distribute your time across the paper. This composure under time pressure is something you cannot develop through untimed study, which is why taking mocks under realistic conditions matters. The second lesson of a mock is how to perform within the clock, a skill as important as the knowledge itself.</p>
            <p className="font-semibold text-slate-800">A mock test teaches pacing under pressure, a skill that only timed practice can build.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">It teaches you the art of intelligent guessing</h3>
            <p className="mb-4">The third lesson concerns the difficult reality of Prelims, that you will not know every answer, and how you handle uncertainty affects your score. With negative marking, deciding when to attempt a question you are unsure of and when to leave it is a genuine skill, and mock tests are where you learn it. Each mock teaches you how to weigh a partial guess against the risk of a penalty, and how to use elimination to improve your odds when you are uncertain. This is the art of intelligent guessing, and it is learned through practice and review.</p>
            <p className="mb-4">Reviewing your mock helps you see whether your guessing helped or hurt, so you can refine your judgment over time. Learning when a calculated attempt is worth the risk, and when it is not, can make a real difference to your score, and only repeated mocks under realistic conditions teach it. Keeping your mock results together helps you track this, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold your test history in one place. The third lesson of a mock is how to handle uncertainty wisely.</p>
            <p className="font-semibold text-slate-800">A mock test teaches you when to guess and when to leave a question, a skill worth real marks.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">It teaches you about your own temperament</h3>
            <p className="mb-4">The final and most personal lesson a mock test teaches is about yourself: how you respond to pressure, to difficulty, and to the ups and downs of a long paper. Some aspirants panic at a hard question, others lose focus late in the paper, and mocks reveal these tendencies so you can work on them before the real exam. This lesson in temperament is easy to overlook, but composure on the day matters as much as knowledge, and mocks are where you build it.</p>
            <p className="mb-4">Each mock is a rehearsal not just of the paper but of your own response to it, and taking many mocks accustoms you to the pressure so that the real exam feels familiar. For those preparing for Mains too, the same steadiness helps in answer writing, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> supports improvement. The honest limits remain. A mock test cannot guarantee marks, a rank, or selection, and it does not replace the study it measures. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear.</p>
            <p className="mb-4">A UPSC prelims mock test teaches far more than a score. It maps your weak knowledge, builds your time management, sharpens your guessing, and reveals your temperament, and an aspirant who learns these lessons from each attempt turns every mock into real preparation for the day itself.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently asked questions</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">What does a Prelims mock test teach?</span>
                <span className="text-slate-700">Where your knowledge is weak, how to manage time, how to guess wisely, and about your own temperament.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Is the score the main point?</span>
                <span className="text-slate-700">No, the lessons from reviewing the mock matter more than the score.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Why take mocks under time pressure?</span>
                <span className="text-slate-700">Because pacing is a skill only timed practice can build.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Do mocks help with guessing?</span>
                <span className="text-slate-700">Yes, they teach when a calculated attempt is worth the risk.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Will they guarantee marks?</span>
                <span className="text-slate-700">No, they aid preparation but cannot promise results.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Do they replace studying?</span>
                <span className="text-slate-700">No, they measure and reinforce your study.</span>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
