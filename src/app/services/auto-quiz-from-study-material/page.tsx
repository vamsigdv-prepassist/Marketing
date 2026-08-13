import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

const SLUG = 'auto-quiz-from-study-material';
const metadataInfo = servicesMetadata[SLUG];

export const metadata: Metadata = {
  title: metadataInfo?.metaTitle || 'Auto Quiz from Study Material Online | PrepAssist India',
  description: metadataInfo?.metaDescription || 'PrepAssist automatically generates quizzes from your study material, saving time while reinforcing what you\'ve just learned.',
};

export default function AutoQuizFromStudyMaterialPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20">
      <Header />

      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto relative z-10">
        
        {/* Back Button */}
        <div className="mb-8 animate-mobile-enter">
          <Link href="/services" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-16 animate-mobile-enter" style={{ animationDelay: "100ms" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-amber-500" /> PrepAssist AI
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Auto Quiz From Study Material: Reclaiming the Hours You Spend Making Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
            Making practice questions by hand is slow work, and for an aspirant whose time is already stretched thin, the hours spent creating quizzes are hours taken from studying.
          </p>
        </div>

        {/* Main Content Article */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-indigo-600 hover:prose-a:text-indigo-800 animate-mobile-enter" style={{ animationDelay: "200ms" }}>
          
          <p className="mb-8 text-slate-600 leading-relaxed">
            An auto quiz from study material removes that labour, generating questions automatically so that you can practise without first spending time building the practice. The real value of automation is in what it gives back to you, so this article looks at what you reclaim when question-making becomes automatic. Time is the aspirant's scarcest resource, and automation protects it.
          </p>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You reclaim the time spent writing questions</h3>
            <p className="mb-4">The most direct benefit of automation is the time you save. Writing good practice questions by hand takes considerable effort: reading through material, deciding what to test, and phrasing each question, and this effort adds up across a long preparation. An auto quiz tool does this work for you, generating questions from your material in moments, so the hours you would have spent making questions are returned to you. For an aspirant balancing a vast syllabus against limited time, this saving is significant.</p>
            <p className="mb-4">The time reclaimed can go back into actual study, which is where it belongs. Rather than spending an evening making a quiz, you generate one instantly and spend the evening studying and practising. A <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> produces questions from your material at once, and tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> make this automatic. The first benefit of automation is the time it returns, which you can spend on preparation itself.</p>
            <p className="font-semibold text-slate-800">Automation returns the hours you would spend writing questions, giving them back to study.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You reclaim energy for what matters</h3>
            <p className="mb-4">Beyond time, automation saves energy, which for an aspirant is as precious as time. Making questions by hand is not only slow but mentally taxing, and the effort spent on it drains energy that could go into understanding and practising. By removing this labour, an auto quiz tool preserves your mental energy for the work that matters most: studying, understanding, and practising. You arrive at your practice with your energy intact rather than depleted by the chore of making it.</p>
            <p className="mb-4">This preserved energy improves the quality of your study, because tired study is poor study, and conserving your effort for understanding rather than question-making keeps your mind fresh for the real work. Automation thus protects not just your time but your capacity to use it well. The second benefit of automation is the energy it preserves, letting you spend your effort where it counts rather than on the mechanics of making practice.</p>
            <p className="font-semibold text-slate-800">Automation preserves the mental energy that hand-making questions would drain, keeping you fresh for real study.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You reclaim consistency</h3>
            <p className="mb-4">A subtler benefit of automation is consistency, because a practice that is easy to do is a practice you will actually keep doing. When making a quiz takes effort, you will often skip it, especially when tired or busy, and inconsistent practice undermines its value. When generating a quiz is instant, the barrier disappears, and you are far more likely to quiz yourself regularly. Automation removes the friction that breaks good habits, which makes consistent practice achievable.</p>
            <p className="mb-4">Consistency is one of the most important factors in effective revision, because regular testing over time builds and maintains memory far better than occasional bursts. By making quizzing effortless, automation supports the steady habit that produces results. Keeping your quizzes together reinforces the habit, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold your practice in one place. The third benefit of automation is the consistency it enables, because effortless practice is practice you will sustain.</p>
            <p className="font-semibold text-slate-800">Automation removes the friction that breaks habits, making consistent practice achievable.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You reclaim the ability to practise anything</h3>
            <p className="mb-4">A final benefit is breadth, because automation lets you generate practice on any material without the labour of building each set by hand. You can quiz yourself on any chapter, any document, any set of notes, whenever you want, because the cost of making the quiz is no longer a barrier. This means no material need go untested simply because making questions for it would take too long, so your practice can cover everything rather than only what you had time to build.</p>
            <p className="mb-4">This breadth ensures that your whole preparation can be reinforced through testing, not just the parts you managed to make quizzes for. The understanding you build across all your material supports your writing, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can help. The honest limits remain. Auto quizzing cannot guarantee marks, a rank, or selection, and it does not replace understanding the material first. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear.</p>
            <p className="mb-4">An auto quiz from study material gives back what hand-making questions takes: your time, your energy, your consistency, and your ability to practise anything. By removing the labour of building practice, automation lets you spend your effort where it truly counts, on preparation itself.</p>
          </section>

          <div className="my-12 p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">?</span>
              Frequently asked questions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-base">What is an auto quiz from study material?</p>
                <p className="text-slate-600 text-sm mt-1">Practice questions generated automatically from your material.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">What does automation save?</p>
                <p className="text-slate-600 text-sm mt-1">The time and energy of making questions by hand.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Does it help consistency?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, effortless quizzing is easier to do regularly.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Can I practise any material?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, you can generate quizzes on any of your material.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Will it guarantee marks?</p>
                <p className="text-slate-600 text-sm mt-1">No, it aids preparation but cannot promise results.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Does it replace understanding?</p>
                <p className="text-slate-600 text-sm mt-1">No, you should understand the material before quizzing.</p>
              </div>
            </div>
          </div>
          
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 animate-mobile-enter" style={{ animationDelay: "300ms" }}>
          <div className="bg-gradient-to-br from-[#0f172a] to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
              Start generating auto quizzes today.
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              Join serious UPSC aspirants using PrepAssist to create instant quizzes directly from their study notes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="https://dashboard.prepassist.in/login" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                Create Free Account
              </a>
              <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors border border-slate-700">
                View Pricing
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
