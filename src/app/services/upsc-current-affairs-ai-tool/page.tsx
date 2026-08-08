import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-current-affairs-ai-tool']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-current-affairs-ai-tool']?.metaDescription || "",
};

export default function UPSCCurrentAffairsAIToolPage() {
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
               UPSC Current Affairs AI Tool: Stop Reading News, Start Targeting Exam Angles
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">UPSC aspirants face a critical bottleneck: The Hindu and Indian Express publish 25-30 pages daily, yet most current affairs tools treat news as isolated facts rather than exam triggers. Prepassist's RAG-driven approach maps each news item directly to syllabus clusters and historical UPSC patterns, eliminating the guesswork that costs aspirants weeks of wasted study time.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Generic Current Affairs Summaries Fail UPSC Aspirants</h3>
            <p>Most current affairs platforms deliver news summaries without exam context. They tell you what happened, not what UPSC will ask. Tools built around general AI rather than UPSC's structure cannot deliver exam-calibrated preparation. The Hindu and Indian Express together publish 25-30 pages daily, taking 2-3 hours to read, yet working aspirants cannot afford this time investment. Without exam-aligned filtering, you spend hours on topics that never appear in Prelims or Mains.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Information Overload Trap</h3>
            <p>You encounter 50+ current affairs items weekly but lack a system to rank them by exam probability. For working aspirants, limited preparation time means every hour must target material that is genuinely exam-weighted. Prepassist automatically maps current affairs to specific GS clusters, showing you exactly which syllabus section each news item activates and what UPSC has historically tested in that area.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Delayed Coaching Notes Miss the Exam Window</h3>
            <p>Traditional coaching notes arrive weekly, often covering events that have already appeared in multiple PIB releases, leaving aspirants behind on the next month's compilation. Prepassist delivers real-time current affairs integration, updating your study plan within hours of major policy announcements.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How RAG-Powered Current Affairs AI Actually Works</h3>
            <p className="mb-4">Retrieval-Augmented Generation (RAG) retrieves relevant information from multiple sources (news articles, UPSC papers, syllabus documents) and generates contextual answers grounded in that data. For UPSC current affairs, the AI retrieves the exact PYQ history, syllabus linkage, and exam angle for each topic.</p>
            <p>Prepassist's RAG architecture works in three layers. First, it scans news sources and identifies policy signals, institutional changes, and factual developments. Second, it retrieves all related UPSC previous year questions, showing you exactly how the exam has tested similar topics. Third, it generates a ranked priority list showing which topics are high-probability for Prelims and which require Mains depth.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Layer 1: Real-Time News Scanning and Relevance Ranking</h3>
            <p>AI agents scan 500+ articles daily, detect key themes, policy signals, schemes, and institutions, eliminating irrelevant noise before it reaches you. The system evaluates each item for Prelims potential, Mains depth, static linkage, and factual relevance, calibrating importance to your exam stage.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Layer 2: PYQ Mapping and Exam Pattern Recognition</h3>
            <p>A tool must know the PYQ record in depth: not just that a topic has appeared before, but exactly how it appeared, what statement was correct, what wrong option was planted, which angle UPSC favoured, and how the question type evolved across years. Prepassist retrieves this historical context automatically. When a new environmental policy emerges, the system surfaces all related Prelims MCQs from the past 30 years. For Mains, it identifies which static concepts the news activates, enabling you to build integrated answers.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Feature Matrix: Core Capabilities Across Platforms</h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist</th>
                    <th className="p-4 font-bold text-sm">PadhAI</th>
                    <th className="p-4 font-bold text-sm">SuperKalam</th>
                    <th className="p-4 font-bold text-sm">UPSC.ai</th>
                    <th className="p-4 font-bold text-sm">CurrentAffairsAI</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Real-time news scanning</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, RAG-driven</td>
                    <td className="p-4 text-slate-500">Daily summaries</td>
                    <td className="p-4 text-slate-500">Daily updates</td>
                    <td className="p-4 text-slate-500">Curated updates</td>
                    <td className="p-4 text-slate-500">500+ articles daily</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PYQ mapping per topic</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Automatic, 30+ years</td>
                    <td className="p-4 text-slate-500">Linked to news</td>
                    <td className="p-4 text-slate-500">Topic-wise practice</td>
                    <td className="p-4 text-slate-500">PYQ analyzer</td>
                    <td className="p-4 text-slate-500">Exam-calibrated ranking</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Syllabus integration</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Dynamic, before asking</td>
                    <td className="p-4 text-slate-500">Manual connection</td>
                    <td className="p-4 text-slate-500">Structured modules</td>
                    <td className="p-4 text-slate-500">Personalized plans</td>
                    <td className="p-4 text-slate-500">Ranked by exam relevance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains answer evaluation</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">AI feedback with PYQ context</td>
                    <td className="p-4 text-slate-500">Answer grader</td>
                    <td className="p-4 text-slate-500">Detailed feedback</td>
                    <td className="p-4 text-slate-500">Mains evaluation</td>
                    <td className="p-4 text-slate-500">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Exam angle prediction</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, historical pattern analysis</td>
                    <td className="p-4 text-slate-500">Topic coverage</td>
                    <td className="p-4 text-slate-500">MCQ focus</td>
                    <td className="p-4 text-slate-500">Trend analysis</td>
                    <td className="p-4 text-slate-500">Prelims/Mains calibration</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Pricing transparency</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Flexible plans</td>
                    <td className="p-4 text-slate-500">Free + Premium</td>
                    <td className="p-4 text-slate-500">Affordable tiers</td>
                    <td className="p-4 text-slate-500">Free trial + Premium</td>
                    <td className="p-4 text-slate-500">Monthly subscription</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Buying Checklist: How to Evaluate Current Affairs AI Tools</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Does the platform automatically map news to your syllabus, or do you manually identify connections?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Can you see the exact PYQ history for each current affairs topic, including question type and difficulty?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Does the tool rank topics by exam probability?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">For Mains aspirants, does it provide answer writing practice linked to current affairs topics?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Is the pricing transparent?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Does the platform update in real-time or on a delayed schedule?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Can you customize your current affairs feed by GS paper or by topic cluster?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Does the tool provide performance analytics showing which current affairs topics you have mastered vs. need revision?</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Prepassist Pricing Plans and Feature Allocation</h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Plan</th>
                    <th className="p-4 font-bold text-sm">Monthly Cost</th>
                    <th className="p-4 font-bold text-sm">Annual Cost</th>
                    <th className="p-4 font-bold text-sm">Key Features</th>
                    <th className="p-4 font-bold text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Starter</td>
                    <td className="p-4 font-medium text-slate-700">₹299</td>
                    <td className="p-4 text-slate-500">₹2,990</td>
                    <td className="p-4 text-slate-500">Daily current affairs summaries, basic PYQ linking, mobile app access</td>
                    <td className="p-4 text-slate-500">Prelims-focused aspirants, working professionals</td>
                  </tr>
                  <tr className="bg-indigo-50/30">
                    <td className="p-4 font-bold text-indigo-700">Professional</td>
                    <td className="p-4 font-bold text-indigo-700">₹699</td>
                    <td className="p-4 font-bold text-indigo-700">₹6,990</td>
                    <td className="p-4 font-medium text-slate-700">Real-time news mapping, 30-year PYQ history, Mains answer evaluation, syllabus integration</td>
                    <td className="p-4 font-medium text-slate-700">Serious Mains aspirants, 6-12 month prep timeline</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Elite</td>
                    <td className="p-4 font-medium text-slate-700">₹1,299</td>
                    <td className="p-4 text-slate-500">₹12,990</td>
                    <td className="p-4 text-slate-500">All Professional features plus AI doubt resolution, personalized study plans, mock test integration, priority support</td>
                    <td className="p-4 text-slate-500">Full-time aspirants, final-stage Mains prep</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Institutional</td>
                    <td className="p-4 font-medium text-slate-700">Custom</td>
                    <td className="p-4 text-slate-500">Custom</td>
                    <td className="p-4 text-slate-500">White-label integration, batch licensing, performance dashboards for coaching institutes</td>
                    <td className="p-4 text-slate-500">Coaching centers, study groups</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Start Your Free Trial and Evaluate Fit</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Visit Prepassist.in and click 'Start Free Trial' to access the 7-day evaluation period with full Professional plan features.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Complete your profile with your target exam year and preferred GS papers to customize your current affairs feed.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Spend 3-4 days using the real-time news mapping feature, noting how many topics you would have missed without automatic syllabus linking.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">Test the PYQ retrieval by selecting 2-3 current affairs topics and reviewing the historical question patterns.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">If you prepare Mains answers, use the AI evaluation feature on 2-3 practice answers to assess feedback quality.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                <span className="text-sm text-slate-600">After the trial, choose your plan based on which features you used most frequently.</span>
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
                <h4 className="font-bold text-slate-900 mb-2">How does Prepassist's RAG approach differ from generic AI summarizers like ChatGPT for current affairs?</h4>
                <p className="text-sm">Tools built around general AI rather than UPSC's structure cannot deliver exam-calibrated preparation, while UPSC-specific tools ground answers in PYQs and map current affairs to the syllabus.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I use Prepassist for both Prelims and Mains current affairs preparation?</h4>
                <p className="text-sm">Yes; Prepassist automatically calibrates current affairs relevance to both Prelims (MCQ-style, factual depth) and Mains (conceptual integration, policy analysis), showing you which topics require which preparation depth.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How often does Prepassist update its current affairs content?</h4>
                <p className="text-sm">Prepassist updates in real-time within hours of major policy announcements, news releases, and PIB updates, ensuring you never fall behind the exam cycle.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Does Prepassist provide answer writing practice for current affairs-based Mains questions?</h4>
                <p className="text-sm">Yes; the Professional and Elite plans include AI-powered Mains answer evaluation linked to current affairs topics, with feedback calibrated to UPSC examiner standards.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What is the refund policy if I am not satisfied with Prepassist after the free trial?</h4>
                <p className="text-sm">Prepassist offers a 14-day money-back guarantee on all paid plans if you are unsatisfied, with no questions asked; contact support at support@prepassist.in for refund processing.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
