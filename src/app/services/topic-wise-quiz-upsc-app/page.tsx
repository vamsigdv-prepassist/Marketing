import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

const SLUG = 'topic-wise-quiz-upsc-app';
const metadataInfo = servicesMetadata[SLUG];

export const metadata: Metadata = {
  title: metadataInfo?.metaTitle || 'Topic-Wise Quiz App for UPSC Exam Online | PrepAssist India',
  description: metadataInfo?.metaDescription || 'PrepAssist offers topic-wise UPSC quizzes so aspirants can test and strengthen understanding subject by subject.',
};

export default function TopicWiseQuizUPSCAppPage() {
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
            Topic-Wise Quiz UPSC App: The Power of Testing One Topic at a Time
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
            Testing yourself on a whole subject at once tells you roughly how you are doing, but testing yourself on one topic at a time tells you exactly where you stand.
          </p>
        </div>

        {/* Main Content Article */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-indigo-600 hover:prose-a:text-indigo-800 animate-mobile-enter" style={{ animationDelay: "200ms" }}>
          
          <p className="mb-8 text-slate-600 leading-relaxed">
            This precision is the heart of a topic-wise quiz UPSC app, which lets you quiz yourself topic by topic rather than in broad sweeps. This article explores what this precision makes possible, examining the specific advantages of testing one topic at a time, because the power of the topic-wise approach lies in the fine detail it reveals and the targeted practice it allows.
          </p>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Pinpointing exactly where you are weak</h3>
            <p className="mb-4">The first power of topic-wise quizzing is precision in diagnosis. A broad test across a subject tells you your overall level but hides the detail, so you might score reasonably while harbouring serious weaknesses in particular topics that the average conceals. Topic-wise quizzing removes this blur, testing each topic separately so you can see exactly which ones you have mastered and which need work. This pinpoint diagnosis is far more useful than a general sense of a subject, because it tells you precisely where to focus.</p>
            <p className="mb-4">Knowing your standing topic by topic lets you direct your effort with precision, working on the specific topics that are weak rather than revising a whole subject blindly. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> can quiz you topic by topic, and a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> can generate a quiz for a single topic from your material. The first power of topic-wise quizzing is precise diagnosis, because knowing exactly where you are weak is more useful than a general impression.</p>
            <p className="font-semibold text-slate-800">Topic-wise quizzing pinpoints exactly which topics are weak, replacing a blurred average with clear detail.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Practising a topic until you master it</h3>
            <p className="mb-4">The second power is focused practice. Once you know a particular topic is weak, topic-wise quizzing lets you practise that topic specifically, testing yourself on it repeatedly until you master it. Broad tests do not allow this, because they mix topics together, but a topic-wise app lets you drill a single topic as much as you need. This focused, repeated practice on a weak topic is how you turn a weakness into a strength, concentrating your effort exactly where it counts.</p>
            <p className="mb-4">This ability to practise one topic intensively is especially valuable for the stubborn topics that resist you, because you can return to them again and again in isolation until they finally stick. Keeping your topic-wise practice organised helps, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold it in one place. The second power of topic-wise quizzing is focused practice, because drilling a single weak topic until you master it is how targeted improvement happens.</p>
            <p className="font-semibold text-slate-800">Topic-wise quizzing lets you drill a weak topic repeatedly until you turn it into a strength.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Building mastery one topic at a time</h3>
            <p className="mb-4">The third power is structured progress. Topic-wise quizzing lets you build your mastery topic by topic, working through a subject one topic at a time and confirming each before moving on. This structured approach ensures that you build a solid command of a subject piece by piece, rather than leaving scattered weaknesses hidden within a general familiarity. Mastering topics one at a time produces a more reliable command of the whole than sweeping over everything at once.</p>
            <p className="mb-4">This topic-by-topic building gives your preparation a clear structure, letting you track which topics you have secured and which remain. It turns the vague goal of studying a subject into the concrete process of mastering its topics one by one. The third power of topic-wise quizzing is structured progress, because building mastery topic by topic produces a more reliable command than broad, unfocused study.</p>
            <p className="font-semibold text-slate-800">Building mastery one topic at a time produces a more reliable command than sweeping over everything at once.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Making revision efficient near the exam</h3>
            <p className="mb-4">The final power appears near the exam, when time is short, and efficiency matters most. Topic-wise quizzing lets you revise efficiently by focusing on exactly the topics that need it, rather than spending scarce time re-covering topics you have already mastered. In the final weeks, this precision is invaluable, because it directs your limited time to the topics where it will do the most good. Topic-wise quizzing makes late revision targeted rather than wasteful.</p>
            <p className="mb-4">This efficiency is one of the strongest reasons to quiz topic by topic, because as the exam nears, every hour counts, and precision in revision protects those hours. The understanding you reinforce supports your writing too, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can help. The honest limits remain. Topic-wise quizzing cannot guarantee marks, a rank, or selection, and it does not replace understanding the material. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear. The final power of topic-wise quizzing is efficient revision, because focusing on the topics that need work protects your scarce time near the exam.</p>
            <p className="mb-4">A topic-wise quiz UPSC app draws its power from precision, pinpointing your weak topics, letting you drill them, building mastery one topic at a time, and making late revision efficient. Testing one topic at a time gives you the fine detail and the targeted practice that broad testing cannot.</p>
          </section>

          <div className="my-12 p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">?</span>
              Frequently asked questions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-base">What is a topic-wise quiz UPSC app?</p>
                <p className="text-slate-600 text-sm mt-1">An app that lets you quiz yourself one topic at a time.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Why test topic by topic?</p>
                <p className="text-slate-600 text-sm mt-1">Because it pinpoints exactly which topics are weak.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Can I practise a single topic?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, you can drill a weak topic repeatedly until you master it.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Does it help near the exam?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, it makes late revision efficient by focusing on what needs work.</p>
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
              Start mastering subjects topic by topic today.
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              Join serious UPSC aspirants using PrepAssist to find their weaknesses and build reliable mastery.
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
