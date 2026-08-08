import { Metadata } from "next";
import { CheckCircle2, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-preparation-app-with-ai']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-preparation-app-with-ai']?.metaDescription || "",
};

export default function UPSCPreparationAppWithAIPage() {
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
               UPSC Preparation App with AI: The Architecture That Separates Serious Aspirants from Casual Learners
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Most UPSC aspirants waste 40% of study time on questions that never appear in the exam. Generic AI apps retrieve previous year questions through keyword matching, missing the deeper structural logic UPSC examiners use. Prepassist's RAG-driven architecture extracts test patterns dynamically, grounding AI responses in actual exam structure rather than surface-level topic similarity.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Hidden Cost of Static Question Banks</h3>
            <p className="mb-4">Static question banks rely on keyword matching to surface previous year questions. When you search for "inflation," the app returns every question containing that word, regardless of whether UPSC tested inflation through monetary policy, fiscal policy, or international trade. This creates false confidence: you've "practiced" inflation, but only one narrow interpretation.</p>
            <p>Prepassist's RAG-driven approach extracts the underlying test structure: conceptual relationships, examiner reasoning patterns, and specific knowledge gaps. When you practice inflation, you're learning how UPSC examiners construct questions across different contexts.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How Keyword Matching Creates Blind Spots</h3>
            <p className="mb-4">A 2026 aspirant searching for "governance" receives 200+ questions. But UPSC tests governance through specific lenses: constitutional frameworks, institutional design, policy implementation, and accountability mechanisms. You complete 50 governance questions and still fail because you've practiced governance in isolation, not as UPSC structures it.</p>
            <p>Prepassist's dynamic extraction identifies these structural patterns automatically, mapping the conceptual architecture behind each question so you build mental models aligned with how UPSC examiners think.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Mains Answer Evaluation Bottleneck</h3>
            <p className="mb-4">Most AI apps evaluate Mains answers using generic rubrics applied equally to all questions. But UPSC Mains tests exam-specific answer architecture. A strong answer on "Analyze the role of civil society in environmental governance" requires a different structure than "Discuss the impact of GST on Indian federalism."</p>
            <p>Prepassist evaluates Mains answers against UPSC-specific rubrics extracted from actual answer keys and examiner patterns. Feedback is precise: "Your answer lacks the policy-to-implementation bridge that UPSC examiners expect in governance questions." This accelerates improvement because aspirants understand why it's wrong in UPSC's context.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Test Structure Extraction Beats Question Quantity</h3>
            <p className="mb-4">Competitors advertise volume: 8,000 PYQs, 10 lakh+ practice questions. But 10,000 poorly organized questions teach less than 2,000 organized by structural pattern. An aspirant practicing 5,000 questions through keyword matching often performs worse than one practicing 1,000 questions organized by test structure.</p>
            <p>Prepassist prioritizes structural depth over volume. The platform extracts patterns from previous year questions, then generates new practice questions testing the same patterns in different contexts. This teaches transferable problem-solving skills, not memorized answers.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Dynamic Question Generation vs. Static Question Retrieval</h3>
            <p className="mb-4">Static apps retrieve questions from fixed databases. Once you've practiced all 8,000 PYQs, you plateau. Dynamic generation creates infinite practice variations based on structural patterns. The AI understands that "agricultural subsidies and WTO compliance" tests the same structural pattern as "industrial tariffs and trade agreements."</p>
            <p>This matters in the final 60 days before the exam. Aspirants using static apps plateau; those using Prepassist continue improving through new questions testing learned patterns.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Personalized Weak Area Identification Through Pattern Analysis</h3>
            <p>Generic apps track weak areas by topic: "You scored 60% on Economy." Prepassist tracks by structural pattern: "You struggle with questions requiring policy-to-implementation connections." Instead of re-reading chapters, you practice the specific structural pattern across multiple topics. An aspirant weak in policy-to-implementation improves faster practicing this pattern across 10 topics than practicing 100 economy questions.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Prepassist vs. Competitors: Feature Comparison</h3>
            <p className="mb-6">The UPSC app market offers strong competitors. PadhAI emphasizes AI tutoring and competitive quizzes. SuperKalam focuses on instant Mains evaluation. PrepAiro combines video lessons with AI support. But none combine RAG-driven test structure extraction with comprehensive Mains evaluation like Prepassist.</p>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist</th>
                    <th className="p-4 font-bold text-sm">PadhAI</th>
                    <th className="p-4 font-bold text-sm">SuperKalam</th>
                    <th className="p-4 font-bold text-sm">PrepAiro</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">RAG-Driven Test Structure Extraction</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Keyword matching</td>
                    <td className="p-4 text-slate-500">Keyword matching</td>
                    <td className="p-4 text-slate-500">Keyword matching</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Dynamic Question Generation</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Static retrieval</td>
                    <td className="p-4 text-slate-500">Static retrieval</td>
                    <td className="p-4 text-slate-500">Static retrieval</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">UPSC-Specific Mains Rubrics</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Generic rubrics</td>
                    <td className="p-4 text-slate-500">Generic rubrics</td>
                    <td className="p-4 text-slate-500">Generic rubrics</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Pattern-Based Weak Area Tracking</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Topic-based</td>
                    <td className="p-4 text-slate-500">Topic-based</td>
                    <td className="p-4 text-slate-500">Topic-based</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">24/7 AI Doubt Resolution</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Current Affairs Integration</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                    <td className="p-4 text-slate-500">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Pricing (Annual)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">₹4,999</td>
                    <td className="p-4 text-slate-500">₹3,500</td>
                    <td className="p-4 text-slate-500">₹7,999</td>
                    <td className="p-4 text-slate-500">₹999</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Prepassist's premium pricing reflects its advanced architecture. You're paying for structural intelligence competitors don't offer.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Rubric-Based Scoring Prevents Generic AI Feedback</h3>
            <p className="mb-4">Prepassist uses rubrics extracted from actual UPSC answer keys and examiner patterns. When you submit a Mains answer, the AI evaluates it against the specific rubric UPSC examiners use. Feedback is precise: "Your answer lacks the policy-to-implementation bridge (2 marks) and misses the stakeholder analysis (2 marks)."</p>
            <p>Over 50 Mains answers, you internalize specific UPSC expectations, not generic writing principles. Improvement accelerates because you're learning actual evaluation criteria.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation Steps for Maximum ROI</h3>
            <p className="mb-4">To extract maximum value from Prepassist:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Complete initial assessment to identify structural weak areas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Practice 10-15 questions daily using the dynamic generator, focusing on identified patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Submit 2-3 Mains answers weekly for UPSC-specific rubric evaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Review pattern-based feedback to understand remaining weak areas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Adjust practice focus based on pattern analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Repeat for 90 days before the exam</span>
              </li>
            </ul>
            <p>Aspirants following this sequence typically improve Mains scores by 40-60 marks in 90 days through learning structural patterns, not practicing more questions.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">The ROI Case: Why Prepassist Delivers Superior Outcomes</h3>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Metric</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist</th>
                    <th className="p-4 font-bold text-sm">Competitors</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Questions practiced (90 days)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">1,200 (high-quality, pattern-based)</td>
                    <td className="p-4 text-slate-500">3,000+ (high-volume, keyword-matched)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains answers evaluated</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">30 (UPSC-specific rubrics)</td>
                    <td className="p-4 text-slate-500">30 (generic rubrics)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Structural patterns mastered</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">15-20</td>
                    <td className="p-4 text-slate-500">3-5</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Typical Mains score improvement</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">40-60 marks</td>
                    <td className="p-4 text-slate-500">15-25 marks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Cost per mark improvement</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">₹83-125</td>
                    <td className="p-4 text-slate-500">₹140-233</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Structural learning transfers to novel exam questions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">UPSC-specific feedback accelerates improvement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Pattern-based weak area identification targets root causes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Dynamic question generation prevents plateau effects</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Success Metrics: Measuring Prepassist's Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-600">Can you identify a novel question's underlying pattern within 30 seconds?</span>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-600">Are Mains scores improving by 5-10 marks every 2 weeks?</span>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-600">Are you scoring 65%+ on Prelims mock tests?</span>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-600">Are identified weak areas shrinking from 15-20 patterns to 5-10?</span>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-600">Do you feel prepared for novel questions, not just similar ones?</span>
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
                <h4 className="font-bold text-slate-900 mb-2">How is Prepassist's RAG architecture different from keyword matching used by other apps?</h4>
                <p className="text-sm">Most AI apps use basic algorithms or chatbots that regurgitate generic content, while Prepassist extracts actual test structures from UPSC exam patterns to generate contextually relevant questions and feedback aligned with examiner expectations.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I crack UPSC using only an AI app without coaching?</h4>
                <p className="text-sm">Yes, many recent rank-holders have done the majority of their preparation through digital tools by using apps that cover content, test practice, and current affairs cohesively.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What makes Prepassist's Mains evaluation better than other apps?</h4>
                <p className="text-sm">Prepassist uses UPSC-specific evaluation criteria with specific marks or weightage for each element, ensuring detailed and actionable feedback aligned with actual UPSC standards rather than generic rubrics.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How much time should I spend daily on Prepassist for optimal results?</h4>
                <p className="text-sm">Aspirants see measurable improvement by dedicating 90 minutes daily to Prepassist: 60 minutes for pattern-based practice questions and 30 minutes for Mains answer writing and evaluation.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Is Prepassist suitable for beginners or only advanced aspirants?</h4>
                <p className="text-sm">Apps that offer structured study paths and AI-driven platforms help beginners avoid spending months building a study plan that may not be optimized for their knowledge gaps.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
