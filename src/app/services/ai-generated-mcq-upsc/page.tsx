import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

const SLUG = 'ai-generated-mcq-upsc';
const metadataInfo = servicesMetadata[SLUG];

export const metadata: Metadata = {
  title: metadataInfo?.metaTitle || 'AI Generated MCQ for UPSC Exam Prep | PrepAssist India Now',
  description: metadataInfo?.metaDescription || 'PrepAssist\'s AI generates fresh, exam-relevant MCQs for UPSC preparation, helping aspirants test knowledge continuously.',
};

export default function AIGeneratedMCQPage() {
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
            AI-Generated MCQ UPSC: Answering the Doubts Aspirants Have About Them
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
            When aspirants first encounter AI-generated MCQs, they often feel a reasonable hesitation. Can questions made by a machine really be trusted, and are they good enough to prepare from?
          </p>
        </div>

        {/* Main Content Article */}
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-indigo-600 hover:prose-a:text-indigo-800 animate-mobile-enter" style={{ animationDelay: "200ms" }}>
          
          <p className="mb-8 text-slate-600 leading-relaxed">
            These are fair doubts, and they deserve honest answers rather than dismissal. This article works through the main concerns aspirants raise about AI-generated MCQs for UPSC, taking each doubt seriously and responding to it plainly, because trust in a study tool should be earned through honest engagement, not assumed.
          </p>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Concern: Are AI-generated MCQs actually accurate?</h3>
            <p className="mb-4">The first and most important doubt is about accuracy. An aspirant naturally worries that a machine-generated question might be wrong, and for an exam where accuracy is everything, this is a serious concern. The honest response is that the accuracy of an AI-generated MCQ depends heavily on the material it is generated from and on how carefully you use it. A question generated from accurate, well-structured source material is far more likely to be sound than one generated from poor material.</p>
            <p className="mb-4">This is why generating MCQs from good source content matters, and why you should treat AI-generated questions as practice to be understood rather than accepted without thought. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> generate questions from your material, so the quality of that material shapes the questions. The honest answer to the accuracy concern is that AI-generated MCQs can be a useful practice tool when generated from good material and used thoughtfully, with your own understanding as the final check.</p>
            <p className="font-semibold text-slate-800">AI-generated MCQs are useful when built from good material and checked with your own understanding.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Concern: can a machine make questions that actually test understanding?</h3>
            <p className="mb-4">A second doubt is whether AI-generated MCQs can go beyond trivial recall to test genuine understanding. Aspirants worry that machine-made questions might only ask shallow factual questions, missing the deeper understanding the exam increasingly rewards. The response is that AI-generated MCQs can indeed test understanding, not just recall, when the tool is designed to do so, producing questions that ask you to apply concepts rather than merely repeat facts.</p>
            <p className="mb-4">The key is that the questions are generated from meaningful content and framed to require thought. When generated well, an MCQ can test whether you understand a concept, not just whether you remember a definition, which is exactly the kind of practice deeper preparation needs. A <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> can produce questions from your material that test understanding as well as recall. The honest answer to this concern is that AI-generated MCQs can test understanding when built to do so, provided you engage with them thoughtfully.</p>
            <p className="font-semibold text-slate-800">Well-built AI-generated MCQs can test understanding, not just recall, when you engage with them properly.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Concern: will practising AI-generated MCQs mislead my preparation?</h3>
            <p className="mb-4">A third doubt is whether relying on AI-generated MCQs might mislead your preparation, giving a false sense of readiness or steering you wrong. This is a thoughtful concern, and the response is that AI-generated MCQs should be one part of your practice, not the whole of it, and should be used alongside your understanding and your standard preparation. Used as a supplement to reinforce and test what you study, they help; while used as a substitute for genuine understanding, they could mislead.</p>
            <p className="mb-4">The safeguard is to treat AI-generated MCQs as a tool for reinforcing learning rather than a replacement for it, always understanding the material behind the questions. When you use them to test what you have genuinely studied, they reinforce rather than mislead. Keeping your practice organised helps you use it well, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold your MCQs in one place. The honest answer is that AI-generated MCQs support preparation well when used as a supplement to genuine study, not as a substitute for it.</p>
            <p className="font-semibold text-slate-800">Used as a supplement to real study rather than a substitute, AI-generated MCQs reinforce rather than mislead.</p>
          </section>

          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Concern: Is it worth using AI-generated MCQs at all?</h3>
            <p className="mb-4">The final doubt gathers the others together, asking whether, given these concerns, AI-generated MCQs are worth using. The response is that, used thoughtfully, they offer real benefits that outweigh the concerns when those concerns are addressed. They let you generate practice from your own material quickly, test yourself as much as you need, and reinforce your learning through active recall, all of which are genuinely valuable. The concerns are reasons for care, not reasons for avoidance.</p>
            <p className="mb-4">The value lies in using them well, generating from good material, engaging with them thoughtfully, and treating them as a supplement to your study. The understanding you build supports your writing too, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can help. The honest limits remain. AI-generated MCQs cannot guarantee marks, a rank, or selection, and they do not replace understanding the material. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear. The answer to the final doubt is that AI-generated MCQs are worth using when used with care.</p>
            <p className="mb-4">Doubts about AI-generated MCQs for UPSC are reasonable, and the honest answers are reassuring when the concerns are addressed. Generated from good material, engaged with thoughtfully, and used as a supplement to real study, AI-generated MCQs are a practical tool worth using with care.</p>
          </section>

          <div className="my-12 p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">?</span>
              Frequently asked questions
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-base">Are AI-generated MCQs accurate?</p>
                <p className="text-slate-600 text-sm mt-1">They can be, when generated from good material and checked with your understanding.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Can they test understanding?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, well-built ones test understanding as well as recall.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Could they mislead my preparation?</p>
                <p className="text-slate-600 text-sm mt-1">Not if used as a supplement to genuine study rather than a substitute.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Are they worth using?</p>
                <p className="text-slate-600 text-sm mt-1">Yes, when used thoughtfully, their benefits outweigh the concerns.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Will they guarantee marks?</p>
                <p className="text-slate-600 text-sm mt-1">No, they aid preparation but cannot promise results.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-base">Do they replace understanding?</p>
                <p className="text-slate-600 text-sm mt-1">No, you should understand the material behind the questions.</p>
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
              Start practicing with confidence today.
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              Join serious UPSC aspirants using PrepAssist to generate high-quality practice from their own study material.
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
