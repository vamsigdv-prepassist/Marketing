import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['prepassist-vs-unacademy-ai']?.metaTitle || "PrepAssist",
  description: servicesMetadata['prepassist-vs-unacademy-ai']?.metaDescription || "",
};

export default function PrepAssistVsUnacademyAIPage() {
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
               PrepAssist vs Unacademy AI: The Test Structure Extraction Advantage That Separates Exam-Ready Aspirants from Content Consumers
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">UPSC aspirants in 2026 face a critical choice: invest in Unacademy's educator-led platform or leverage PrepAssist's RAG-driven AI that dynamically extracts 25+ years of exam patterns. While Unacademy excels at classroom-style learning, PrepAssist's advanced test structure extraction delivers personalized preparation aligned to how examiners actually test.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Core Difference: Content Delivery vs. Pattern Recognition</h3>
            <p className="mb-4">Unacademy operates on a traditional educator-first model where instructors deliver lectures covering broad syllabus topics. PrepAssist uses Retrieval-Augmented Generation (RAG) to analyze actual UPSC question patterns, difficulty progressions, and topic weightings across decades of papers. Unacademy teaches what the syllabus says; PrepAssist teaches what examiners actually test.</p>
            <p>Aspirants using content-heavy platforms often complete their notes but struggle during mock tests because they haven't internalized the structural logic of UPSC questions. PrepAssist's test structure extraction identifies which topics appear in Prelims vs. Mains, which concepts are tested through case studies, and which subjects demand conceptual depth versus factual recall.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unacademy's Educator-Led Strength and Its Limitation</h3>
            <p>Unacademy's value centers on access to renowned educators with deep expertise. The platform offers live classes, recorded lectures, and structured course progression appealing to aspirants seeking classroom-style accountability. However, this model creates content overload: with hundreds of courses and thousands of video hours, aspirants struggle to prioritize what actually matters for the exam. Additionally, live doubt resolution in sessions with thousands of participants rarely addresses individual learning gaps effectively.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">PrepAssist's RAG-Driven Advantage: Exam Logic Over Syllabus Logic</h3>
            <p>PrepAssist's RAG engine extracts the structural intelligence embedded in UPSC papers. The system identifies topic clusters that appear together, recognizes which concepts are tested through specific question types, and maps difficulty progression across years. When you upload study notes or PDFs, PrepAssist converts them into adaptive quizzes aligned to actual exam patterns. Your practice directly mirrors how examiners construct questions, dramatically improving your answer writing accuracy and time management during the actual exam.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Feature Comparison: What Each Platform Actually Delivers</h3>
            <p className="mb-6">Unacademy provides breadth; PrepAssist provides depth aligned to exam logic. The table below maps their core offerings against critical UPSC preparation phases: foundation building, practice refinement, and performance optimization.</p>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Unacademy AI</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">PrepAssist</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Live Classes</td>
                    <td className="p-4 text-slate-500">Yes, 100+ educators</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">No, AI-first approach</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Current Affairs Coverage</td>
                    <td className="p-4 text-slate-500">Multiple educator perspectives</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">AI-analyzed daily digest</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains Answer Evaluation</td>
                    <td className="p-4 text-slate-500">Limited, educator-dependent</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Continuous AI feedback with pattern analysis</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Test Structure Extraction</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, RAG-driven across 25+ years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Adaptive Question Generation</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, from your PDFs and notes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Doubt Resolution</td>
                    <td className="p-4 text-slate-500">Live sessions (high latency)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Instant 24/7 AI assistance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Pricing</td>
                    <td className="p-4 text-slate-500">₹40,000-₹1,00,000+ annually</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Significantly lower, transparent tiers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Self-Paced Learning</td>
                    <td className="p-4 text-slate-500">Partial, course-dependent</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Fully self-paced with AI guidance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>Unacademy prioritizes educator access and community, while PrepAssist prioritizes exam-aligned personalization and instant feedback. For self-directed learners focused on maximizing exam performance, PrepAssist's test structure extraction delivers measurable advantages.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unacademy's Breadth: Comprehensive but Overwhelming</h3>
            <p>Unacademy's strength lies in its vast library covering every UPSC topic through multiple educator perspectives. The platform's subscriptions unlock live classes, recorded lectures, and community forums. However, with 100+ educators teaching similar topics, aspirants waste time choosing between courses rather than deepening understanding of high-yield concepts.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">PrepAssist's Depth: Precision Practice Aligned to Exam Logic</h3>
            <p>PrepAssist delivers focused, exam-aligned preparation through RAG-driven test structure extraction, adaptive quiz generation from your study materials, and continuous mains answer evaluation with pattern-based feedback. The platform maximizes the value of content you already have by converting it into practice aligned to actual UPSC patterns. When you submit a mains answer, PrepAssist analyzes whether your response addresses the specific angle examiners tested in similar questions across years.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Economics of Preparation: Cost vs. Outcome</h3>
            <p>Unacademy's subscription tiers range from ₹40,000 to over ₹1,00,000 annually. PrepAssist operates on transparent, tiered pricing that democratizes access to AI-powered preparation without requiring premium educator access. Most aspirants spend 12-18 months preparing for UPSC. Over this period, Unacademy's cumulative cost often exceeds ₹1,50,000 when including optional subject courses and test series. PrepAssist's transparent pricing allows aspirants to access core features at a fraction of this cost, freeing financial resources for other preparation needs. For middle-class aspirants, this cost difference is material.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unacademy's Premium Positioning and Hidden Costs</h3>
            <p>Unacademy's pricing reflects access to renowned educators and large peer communities. The iconic subscription (₹40,000-₹60,000 annually) provides live classes and recorded lectures, while the plus subscription (₹80,000-₹1,00,000+) unlocks priority doubt resolution. Beyond subscriptions, aspirants often purchase additional test series and specialized programs, pushing total annual costs to ₹1,50,000 or more. This premium pricing works for aspirants who thrive in structured, classroom-like environments but may not optimize exam performance for self-directed learners.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Making Your Choice: Which Platform Matches Your Preparation Style</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Assess your learning preference: Do you thrive with live classes and educator guidance, or do you prefer self-paced learning with instant AI feedback?</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Evaluate your financial capacity: Can you sustain ₹1,50,000+ annual investment, or do you need a lower-cost platform?</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Identify your preparation bottleneck: Are you struggling with content gaps, or practicing answers without improving exam-specific accuracy?</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Consider your timeline: Do you have 18+ months for comprehensive preparation, or are you in the final 6-month sprint?</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Test the platforms: Both offer free trials; use them to experience the learning experience before committing.</span>
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
                <h4 className="font-bold text-slate-900 mb-2">Does PrepAssist replace traditional coaching or Unacademy entirely?</h4>
                <p className="text-sm">PrepAssist excels at mains answer writing practice and test pattern analysis but doesn't provide live classes or educator-led foundation building; many aspirants combine PrepAssist with free YouTube lectures or optional subject coaching for comprehensive preparation.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I use both Unacademy and PrepAssist together?</h4>
                <p className="text-sm">Yes, many aspirants use Unacademy for foundation building and current affairs through live classes, then switch to PrepAssist during the mains phase for exam-aligned answer evaluation and test structure analysis.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How does PrepAssist's RAG-driven test structure extraction actually improve exam performance?</h4>
                <p className="text-sm">RAG analysis identifies which topics appear together in UPSC questions, which concepts are tested through specific question types, and how difficulty progresses across years, allowing you to practice answers aligned to actual exam logic rather than generic difficulty levels.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Is Unacademy's live class experience worth the ₹1,50,000+ annual cost?</h4>
                <p className="text-sm">Live classes provide motivation and accountability for aspirants who thrive in structured environments, but self-directed learners often achieve better exam outcomes by investing in lower-cost platforms like PrepAssist that prioritize exam-aligned practice over educator access.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Which platform is better for UPSC Mains answer writing specifically?</h4>
                <p className="text-sm">PrepAssist delivers superior mains preparation through continuous AI evaluation with pattern-based feedback, while Unacademy's mains support depends on educator availability and is often limited in live sessions with thousands of participants.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
