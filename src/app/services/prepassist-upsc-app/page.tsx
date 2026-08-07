import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "PrepAssist UPSC App | AI-Powered Exam Prep Tool",
  description: "PrepAssist is the AI-powered UPSC app for smarter preparation. Notes, quizzes & mains evaluation in one platform. Download now.",
};

export default function PrepAssistUPSCAppPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
               PrepAssist UPSC App: Stop Juggling Books, Start Using One Unified AI Ecosystem
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">UPSC aspirants waste 3-4 hours daily switching between The Hindu, question banks, revision notes, and coaching materials. PrepAssist consolidates everything into a single AI-powered platform that learns your weak areas, generates exam-level questions on demand, and evaluates your mains answers like a professional examiner. Join 15,000+ serious candidates preparing smarter.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Scattered Study Resources Cost You Months of Wasted Preparation</h3>
            <p className="mb-4">Most UPSC aspirants rely on fragmented tools: physical books, coaching notes, news apps, and random PDFs. This fragmentation creates three critical problems: knowledge gaps because no resource maps current affairs to syllabus clusters; delayed feedback on answer writing (most aspirants write 300-500 answers but receive feedback on fewer than 50); and chaotic revision with notes scattered across multiple platforms.</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Scattered resources force daily context-switching that drains mental energy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Delayed feedback on answer writing prevents iterative improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">No unified progress tracking means you cannot identify weak areas systematically</span>
              </li>
            </ul>
            <p>Aspirants using fragmented resources typically need 18-24 months to crack UPSC, while those using integrated platforms compress this to 12-15 months.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Information Overload Trap: Why More Resources Mean Worse Results</h3>
            <p>UPSC aspirants face a paradox: unlimited study materials actually reduce performance. The Hindu publishes 25-30 pages daily, yet news apps treat items as isolated facts rather than exam triggers. You spend 90 minutes reading but extract only 3-4 exam-relevant points. PrepAssist maps each news item directly to syllabus clusters and historical UPSC patterns. When you read about agricultural reforms, the app shows you the GS-3 connection, related PYQs from 2015-2024, and essay prompt patterns. This transforms passive reading into active, exam-aligned learning.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Feedback Bottleneck: Why 80% of Your Practice Answers Go Unevaluated</h3>
            <p>Mains answer writing demands structured feedback on every attempt, yet most aspirants receive zero evaluation on 80% of what they write. PrepAssist's AI evaluator, trained on topper scripts and UPSC marking standards, delivers feedback in under 60 seconds. You upload a handwritten answer photo, and the system scores your structure, content accuracy, and relevance with actionable improvement points. This enables daily iteration without waiting for mentors.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How PrepAssist Consolidates Five Separate Tools Into One Unified Platform</h3>
            <p className="mb-4">PrepAssist replaces five tools most aspirants juggle: a news aggregator, question bank, note-making app, mind map generator, and answer evaluation service. Switching between tools costs 15-20 minutes daily and fragments learning context.</p>
            <p className="mb-4">The platform uses Retrieval-Augmented Generation (RAG) to extract test structures directly from UPSC papers, meaning it adapts automatically when the exam shifts from factual recall to application-based questions.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Start with AI-curated daily current affairs tagged by syllabus topic</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Generate unlimited MCQs on any topic with adaptive difficulty</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Create visual mind maps from complex topics for quick revision</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Upload PDFs and convert them into custom test suites in seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Submit mains answers for professional AI evaluation with scoring</span>
              </li>
            </ul>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">PrepAssist</th>
                    <th className="p-4 font-bold text-sm">Competitor A</th>
                    <th className="p-4 font-bold text-sm">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">AI-Curated News Feed</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, syllabus-tagged</td>
                    <td className="p-4 text-slate-500">Generic summaries</td>
                    <td className="p-4 text-slate-500">Manual curation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Unlimited MCQ Generation</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, adaptive</td>
                    <td className="p-4 text-slate-500">Limited free tier</td>
                    <td className="p-4 text-slate-500">Paid only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mind Map Creation</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, auto-generated</td>
                    <td className="p-4 text-slate-500">Manual only</td>
                    <td className="p-4 text-slate-500">Not available</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PDF to Quiz Conversion</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, instant</td>
                    <td className="p-4 text-slate-500">Not available</td>
                    <td className="p-4 text-slate-500">Manual upload</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains Answer Evaluation</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Professional AI</td>
                    <td className="p-4 text-slate-500">Basic feedback</td>
                    <td className="p-4 text-slate-500">Human-only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Progress Tracking</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">AI-driven recommendations</td>
                    <td className="p-4 text-slate-500">Basic analytics</td>
                    <td className="p-4 text-slate-500">Manual tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The News Feed That Actually Teaches Exam Relevance</h3>
            <p>PrepAssist's news feed differs fundamentally from generic apps. Instead of listing news chronologically, it auto-tags each story by GS module, connects it to historical precedents, and flags UPSC relevance. When you read about an environmental protection ruling, the app shows the GS-1 geography angle, GS-3 policy implications, and ethics dimension. You save 90 minutes daily while extracting 10x more exam-relevant insights.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unlimited Question Generation That Adapts to Your Weak Areas</h3>
            <p>Most question banks offer 5,000-10,000 static questions. PrepAssist generates unlimited exam-level MCQs on any topic with difficulty that adapts to your performance. Ask for 20 questions on 'Monetary Policy' and the system creates them instantly, matching recent UPSC paper patterns. If you score 60%, the next set increases difficulty. If you score 90%, it introduces application-based variants. This means you never plateau and always practice at the edge of your capability.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Buying Decision: Which PrepAssist Plan Matches Your Preparation Stage</h3>
            <p className="mb-4">PrepAssist offers a free trial with limited features and premium plans unlocking the full ecosystem. Aspirants in their first 6 months benefit most from full features to build foundational clarity. Those in their final 3 months need intensive mains evaluation and revision tools.</p>
            <p className="mb-4">The free trial gives limited video lessons, daily quizzes, current affairs summaries, and basic PYQ practice. Premium plans unlock unlimited AI queries, comprehensive mains evaluation, full syllabus coverage, and mind map generation. Most serious aspirants upgrade within 2-3 weeks because free tier limitations become apparent quickly.</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Free trial: Test the platform, build initial clarity, assess learning style fit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Premium plans: Unlimited features, professional evaluation, adaptive learning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">No credit card required for free trial signup</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Cancel anytime without penalty</span>
              </li>
            </ul>
            <p>The conversion decision hinges on one metric: how many mains answers you plan to write. If you aim for 200+ practice answers, premium access pays for itself through evaluation time saved alone.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Real Results: How PrepAssist Accelerates Your Preparation Timeline</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Time saved:</strong> 45 minutes daily through consolidated tools</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Answer quality:</strong> Structural issues identified within 60 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Consistency:</strong> AI-driven recommendations keep you on track</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Revision speed:</strong> Mind maps enable full-syllabus review in 2-3 hours</span>
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">How does PrepAssist's AI evaluation compare to human mentor feedback?</h4>
                <p className="text-sm">PrepAssist's AI evaluator is trained on topper scripts and delivers detailed scoring on structure, content, and relevance, providing feedback in under 60 seconds versus days for human mentors, enabling daily iteration on your answer-writing technique.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I use PrepAssist if I am already enrolled in a coaching institute?</h4>
                <p className="text-sm">PrepAssist complements coaching classes by providing 24/7 instant doubt resolution, practice questions, personalized feedback, and AI-powered evaluation to enhance your preparation.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What makes PrepAssist's news feed different from generic current affairs apps?</h4>
                <p className="text-sm">PrepAssist delivers AI-curated daily current affairs auto-tagged by syllabus topic, ensuring you never miss a critical update from The Hindu or Indian Express.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How many mains answers should I write before upgrading to premium?</h4>
                <p className="text-sm">If you plan to write more than 50 mains answers before the exam, premium access pays for itself through time saved on professional evaluation alone; most serious aspirants exceed this threshold within 8-10 weeks.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Does PrepAssist cover all UPSC syllabus topics including optional subjects?</h4>
                <p className="text-sm">PrepAssist generates unlimited exam-level MCQs on any topic with adaptive difficulty, transforms complex topics into visual mind maps for quick revision, and covers all GS modules with syllabus-aligned content.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
