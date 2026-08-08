import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-ai-answer-writing-practice']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-ai-answer-writing-practice']?.metaDescription || "",
};

export default function UPSCAIAnswerWritingPracticePage() {
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
               UPSC AI Answer Writing Practice: Build Exam-Ready Answers Through Structured Feedback Loops
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">UPSC Mains answer writing demands 300-500 practice answers before exam day, yet most aspirants receive zero structured feedback on 80% of what they write. AI answer writing practice eliminates this feedback gap by delivering instant evaluation that mirrors examiner expectations, enabling daily iteration without waiting for mentors or coaching institutes.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Aspirants Fail at Answer Writing Without Structured Feedback</h3>
            <p className="mb-4">Answer writing determines Mains rank, yet receives the least structured feedback during preparation. Most aspirants are worst at answer writing when they begin, and the one that receives the least structured feedback; you can watch 500 video lectures and read 30 books, but until you sit down, write an answer to a 15-marker, and have someone qualified tell you exactly what went wrong, your preparation has a fundamental blind spot.</p>
            <p>Traditional evaluation channels fail at scale. Coaching institute corrections take 7-10 days to return. Peer review is inconsistent and unqualified. Self-evaluation becomes biased. This creates a preparation paradox: aspirants need 300-500 answers to crack Mains, but the feedback infrastructure to support that volume simply does not exist in traditional coaching.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Feedback Bottleneck in Conventional Coaching</h3>
            <p>Traditionally, the evaluator was either a coaching teacher (expensive and unavailable on demand), a study group peer (useful but unqualified), or no one at all. Most aspirants writing daily answers received zero structured feedback on 80% of what they wrote. At one evaluation per answer from a human mentor, 300-500 answers becomes logistically and financially impossible.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">What High-Scoring Answers Actually Contain</h3>
            <p>Before you can improve your answers, you need a clear mental model of what a high-scoring answer actually contains. UPSC evaluators reward answers that are structured, dimensioned, and easy to read under time pressure. Without this mental model, aspirants write answers that feel complete but score poorly because they lack the specific dimensions and structural clarity that examiners reward.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How AI Answer Evaluation Works: The Structured Assessment Framework</h3>
            <p className="mb-4">Modern AI answer writing practice platforms follow a multi-dimensional evaluation process that mirrors how experienced UPSC teachers assess answers, with the critical advantage of being available instantly, at any hour, for any answer.</p>
            <p className="mb-4">The evaluation process breaks down into five core dimensions:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Structure and flow:</strong> introduction contextuality, body cohesion, impactful conclusion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Content depth:</strong> dimensional coverage (historical, economic, ethical, constitutional angles)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Keyword optimization:</strong> terminology, committee names, policy vocabulary</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Balance and perspective:</strong> bias detection, multiple viewpoints in sensitive questions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Word count compliance:</strong> adherence to suggested limits without padding</span>
              </li>
            </ul>
            <p>AI assesses your answers across multiple dimensions to mimic UPSC examiner expectations: structure and flow check if your introduction is contextual and conclusion impactful; content depth scans for missing dimensions and factual inaccuracies; keyword optimization highlights missing terminology; balance and perspective detects bias and ensures multiple viewpoints are acknowledged.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Feedback vs. Delayed Mentor Review</h3>
            <p>AI analyzes your answer against UPSC marking schemes within 60 seconds. Unlike manual evaluation which can take 1-2 weeks, AI delivers instant feedback with the same quality standards every time. This speed enables daily iteration, which is impossible with traditional coaching.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Accuracy and Limitations of AI Evaluation</h3>
            <p>AI evaluation is not a replacement for an experienced UPSC teacher, but it is a significant step above writing answers with no feedback at all. Current AI tools assess structural quality, keyword coverage, example specificity, and dimension balance with consistent accuracy. For the volume of practice required (300-500 answers), AI evaluation is the only scalable option available to most aspirants.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Building Your AI Answer Writing Practice Routine: The Weekly Framework</h3>
            <p className="mb-4">Effective AI answer writing practice requires a structured routine that prevents common mistakes while maximizing feedback utility. Many aspirants misuse AI tools; let the first attempt reflect real thinking, and improvement must be visible across multiple questions.</p>
            <p className="mb-4">The weekly framework operates across three phases:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Timed writing phase:</strong> Write 2-3 answers under exam conditions (no reference materials, timer set)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>AI evaluation phase:</strong> Submit answers for instant feedback on all five dimensions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600"><strong>Refinement phase:</strong> Analyze feedback, identify patterns, rewrite one answer incorporating feedback</span>
              </li>
            </ul>
            <p>This cycle repeats weekly, creating measurable improvement across structure, content depth, and keyword usage. For an aspirant writing 2 answers daily, this means 600+ evaluated answers per year without waiting for a teacher or mentor.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Typed vs. Handwritten Practice: Which Format to Use</h3>
            <p>Use typed answers for speed during weekday daily practice when you want faster feedback; use handwritten answers for timed weekend sessions to simulate actual exam conditions. Both formats are supported, allowing you to practice handwriting while maintaining feedback velocity.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tracking Progress Across Multiple Answers</h3>
            <p>It is especially useful for high-volume practice, where the same student submits multiple answers over time. Answer history shows whether structure, relevance, and coverage are improving, extracting patterns from your answer history to identify weak areas rather than evaluating answers in isolation.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Prepassist vs. Generic AI Tools: Why Test Structure Extraction Matters</h3>
            <p className="mb-4">Most AI answer evaluation platforms treat each answer as an isolated assessment. Prepassist uses Retrieval-Augmented Generation (RAG) to dynamically extract actual UPSC test patterns, adapting your practice to match real exam evolution.</p>
            <p className="mb-6">Generic AI tools provide feedback on structure, content, and keywords. Prepassist goes further by analyzing how UPSC papers themselves have evolved, ensuring your practice answers align with current examiner expectations rather than static rubrics.</p>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Generic AI Tools</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist RAG-Driven Platform</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Answer evaluation</td>
                    <td className="p-4 text-slate-500">Yes, instant feedback</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, instant feedback</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Structural analysis</td>
                    <td className="p-4 text-slate-500">Yes, standard rubric</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, exam-aligned rubric</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Keyword optimization</td>
                    <td className="p-4 text-slate-500">Yes, generic keywords</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, extracted from actual papers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Test pattern tracking</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, dynamic extraction</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Adaptive difficulty</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, based on paper evolution</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mentor integration</td>
                    <td className="p-4 text-slate-500">Limited</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Full mentor review layer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Prepassist Pricing and Plan Comparison</h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Plan</th>
                    <th className="p-4 font-bold text-sm">Monthly Cost</th>
                    <th className="p-4 font-bold text-sm">Answers/Month</th>
                    <th className="p-4 font-bold text-sm">Mentor Review</th>
                    <th className="p-4 font-bold text-sm">RAG Updates</th>
                    <th className="p-4 font-bold text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Starter</td>
                    <td className="p-4 font-medium text-slate-700">₹499</td>
                    <td className="p-4 text-slate-500">30</td>
                    <td className="p-4 text-slate-500">Limited</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Daily practice</td>
                  </tr>
                  <tr className="bg-indigo-50/30">
                    <td className="p-4 font-bold text-indigo-700">Pro</td>
                    <td className="p-4 font-bold text-indigo-700">₹999</td>
                    <td className="p-4 font-bold text-indigo-700">100</td>
                    <td className="p-4 font-medium text-slate-700">Full</td>
                    <td className="p-4 font-medium text-slate-700">Yes</td>
                    <td className="p-4 font-medium text-slate-700">Serious aspirants</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Elite</td>
                    <td className="p-4 font-medium text-slate-700">₹1,999</td>
                    <td className="p-4 text-slate-500">Unlimited</td>
                    <td className="p-4 text-slate-500">Priority</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Final 3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Can AI really evaluate UPSC Mains answers as accurately as a human mentor?</h4>
                <p className="text-sm">AI evaluation is not a replacement for an experienced UPSC teacher, but it is a significant step above writing answers with no feedback at all; current AI tools assess structural quality, keyword coverage, example specificity, and dimension balance with consistent accuracy.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How many practice answers should I write before Mains?</h4>
                <p className="text-sm">Aim for a minimum of 200 answers by the time you appear for Mains, ideally 300-500 for a competitive score.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What is the biggest mistake aspirants make with AI answer evaluation?</h4>
                <p className="text-sm">Over-dependence on AI model answers, writing robotic template-heavy responses, and ignoring directive words; UPSC rewards originality within structure, not mechanical reproduction.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Should I use AI evaluation for typed or handwritten answers?</h4>
                <p className="text-sm">Both; use typed answers for speed during weekday daily practice when you want faster feedback; use handwritten answers for timed weekend sessions to simulate actual exam conditions.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How does Prepassist's RAG approach differ from other AI evaluation tools?</h4>
                <p className="text-sm">Prepassist dynamically extracts test patterns from actual UPSC papers, adapting your practice feedback to current examiner expectations rather than using static rubrics that generic tools rely on.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
