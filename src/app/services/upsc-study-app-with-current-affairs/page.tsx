import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-study-app-with-current-affairs']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-study-app-with-current-affairs']?.metaDescription || "",
};

export default function UPSCStudyAppWithCurrentAffairsPage() {
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
               UPSC Study App with Current Affairs: The Structural Intelligence Advantage That Separates Toppers from Aspirants Who Plateau
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Most UPSC aspirants download 4-5 apps, yet 70% struggle to connect current affairs to exam patterns. Static apps deliver news summaries but miss the structural logic that UPSC examiners test. Prepassist's RAG-driven architecture extracts test patterns dynamically, linking current affairs directly to syllabus structure and question design.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Current Affairs Integration Problem: Why Volume Defeats Relevance</h3>
            <p className="mb-4">Aspirants face a paradox: more current affairs content than ever, yet lower retention and exam relevance. Generic news apps deliver 50-100 articles daily, but only 8-12 connect to actual UPSC question patterns. The result is wasted reading time and fragmented knowledge that doesn't translate to exam performance.</p>
            <p>The most effective preparation strategies in 2026 involve two to three apps used for distinct purposes: a primary platform for content and current affairs, a test platform for mocks, and an AI companion for doubt-solving. However, most aspirants don't optimize this strategy. They read current affairs in isolation, disconnected from the structural patterns that determine exam success.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Static Content Trap: Why News Summaries Alone Fail</h3>
            <p className="mb-4">Reliable current-affairs coverage for UPSC requires apps combining breadth (national + international news), depth (analysis, editorials), curated summaries, and revision aids (monthly compilations, MCQs, timeline features). Yet most apps deliver only breadth and summaries. When an aspirant reads about an environmental policy, they see the news but not how UPSC will test it across Prelims MCQs, Mains essays, and optional papers.</p>
            <p>Prepassist's RAG-driven approach reverses this logic. Instead of starting with news and hoping it connects, it starts with UPSC test structures and dynamically pulls relevant current affairs into that framework.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How RAG-Driven Test Structure Extraction Outperforms Keyword Matching</h3>
            <p className="mb-4">Most apps use keyword matching: they scan current affairs articles for UPSC-related terms and surface them to users. This approach is fast but shallow, catching surface-level relevance but missing structural patterns. For example, renewable energy news matches keywords like "environment" and "policy," but won't connect to how UPSC tests energy security, climate commitments, and economic trade-offs across question types.</p>
            <p>Retrieval-Augmented Generation (RAG) works differently. It extracts the underlying structural logic of UPSC questions: what patterns examiners reward, what connections they test, what depth of analysis matters for Mains versus Prelims. An aspirant studying energy policy doesn't just read news; they see how it connects to India's climate commitments (Mains essay), international relations (Prelims MCQ), and economic policy (optional paper).</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Test Pattern Extraction vs. Content Summarization</h3>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Static Apps (Keyword Matching)</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist (RAG-Driven)</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Current Affairs Delivery</td>
                    <td className="p-4 text-slate-500">News summaries + keyword tags</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Structured by exam pattern</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Relevance Logic</td>
                    <td className="p-4 text-slate-500">Surface-level topic match</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Deep structural alignment</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains Preparation</td>
                    <td className="p-4 text-slate-500">Generic articles</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Linked to essay/answer frameworks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Prelims Connection</td>
                    <td className="p-4 text-slate-500">Isolated MCQ practice</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Pattern-based question prediction</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Revision Efficiency</td>
                    <td className="p-4 text-slate-500">Re-read entire articles</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Targeted structural notes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Time to Exam Readiness</td>
                    <td className="p-4 text-slate-500">6-8 months of scattered prep</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">4-5 months of focused learning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>RAG-driven extraction treats current affairs as a dynamic input to your exam-specific knowledge structure, not a separate subject.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Real-World Impact: From Content Consumption to Exam Performance</h3>
            <p>Consider India announcing a new agricultural subsidy policy. A static app delivers a 300-word summary with tags like "economy" and "agriculture." An aspirant reads it but doesn't know if this is Prelims-level fact or Mains-level concept, or how it connects to land reform and food security debates. Prepassist's RAG engine identifies that this policy connects to three exam angles: Prelims MCQ on subsidy mechanisms, Mains essay on agricultural reform, and optional paper on rural development. It surfaces the policy with structural context for each angle.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Feature Comparison: Why Prepassist Stands Apart in Current Affairs Integration</h3>
            <p className="mb-4">For AI-powered adaptive preparation, platforms lead with smart study planning, current affairs integration, and Mains support that few competitors match holistically. Prepassist's differentiation lies in three core capabilities: dynamic test structure extraction, real-time current affairs alignment, and adaptive practice based on your knowledge gaps.</p>
            <p>Most competitors offer current affairs as a feature; Prepassist offers it as a foundation. Every current affairs item is indexed against UPSC test patterns, ensuring relevance before it reaches your screen. This saves 10-15 hours per month compared to traditional apps.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features That Matter for Serious Aspirants</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Daily current affairs curated by exam pattern, not just news volume</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Real-time linking of news to Prelims MCQ patterns and Mains essay frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Bilingual support (Hindi and English) with pattern-aligned summaries</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Offline study mode with downloadable current affairs indexed by structural relevance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">AI-powered doubt resolution connecting current affairs to static concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Monthly revision compilations organized by exam structure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Mock test integration reflecting actual UPSC patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Adaptive practice prioritizing gaps in current affairs knowledge</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Pricing and ROI: Why Prepassist Delivers Better Value</h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Preparation Stage</th>
                    <th className="p-4 font-bold text-sm">Traditional Multi-App Cost</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist Unified Cost</th>
                    <th className="p-4 font-bold text-sm">Time Saved</th>
                    <th className="p-4 font-bold text-sm">ROI</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Prelims (6 months)</td>
                    <td className="p-4 text-slate-500">Rs 8,000-12,000 (4-5 apps)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Rs 4,500-6,000</td>
                    <td className="p-4 text-slate-500">12-15 hrs/month</td>
                    <td className="p-4 text-emerald-600 font-medium">35-40%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains (4 months)</td>
                    <td className="p-4 text-slate-500">Rs 12,000-18,000 (added test series)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Rs 6,000-8,000</td>
                    <td className="p-4 text-slate-500">10-12 hrs/month</td>
                    <td className="p-4 text-emerald-600 font-medium">40-45%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Interview Prep (2 months)</td>
                    <td className="p-4 text-slate-500">Rs 3,000-5,000 (coaching)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Included</td>
                    <td className="p-4 text-slate-500">5-8 hrs/month</td>
                    <td className="p-4 text-emerald-600 font-medium">50%+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Total 12-Month Cost</td>
                    <td className="p-4 text-slate-900 font-bold">Rs 23,000-35,000</td>
                    <td className="p-4 font-black text-indigo-700 bg-indigo-100/50">Rs 10,500-14,000</td>
                    <td className="p-4 text-slate-900 font-bold">27-35 hrs/month</td>
                    <td className="p-4 text-emerald-700 font-bold">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Daily Preparation Workflow: 5 Steps to Exam-Aligned Current Affairs Mastery</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Start with Prepassist's daily current affairs feed, pre-filtered by exam relevance and organized by structural pattern.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Read the curated summary with structural context connecting the news to UPSC test logic.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Engage with embedded MCQ or Mains practice questions applying this knowledge in exam format.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Use AI doubt-resolution to clarify how the news connects to related static concepts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Bookmark the article in your personalized revision timeline, automatically organized by exam relevance.</span>
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
                <h4 className="font-bold text-slate-900 mb-2">How does Prepassist's RAG-driven approach differ from traditional current affairs apps?</h4>
                <p className="text-sm">Prepassist extracts UPSC test patterns dynamically and aligns current affairs to those patterns, ensuring every article serves a specific structural purpose in your exam preparation, whereas traditional apps deliver news summaries with keyword matching that often miss deeper exam relevance.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I use Prepassist alongside other UPSC apps, or is it designed as a standalone platform?</h4>
                <p className="text-sm">Prepassist is designed as a unified platform for current affairs, test structure extraction, and adaptive practice, eliminating the need for 4-5 separate apps, though aspirants can integrate it with specialized test series platforms if needed.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What is the typical time investment required for daily current affairs preparation with Prepassist?</h4>
                <p className="text-sm">Daily current affairs preparation with Prepassist takes 12-15 minutes per article due to pre-filtered relevance and structural context, compared to 20-25 minutes with traditional apps that require manual relevance assessment.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How does Prepassist help with Mains answer writing when current affairs are involved?</h4>
                <p className="text-sm">Prepassist links current affairs to Mains essay frameworks and answer structures, showing aspirants how to apply news knowledge in exam-format answers with proper background, government response, stakeholder impact, and way-forward analysis.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Is Prepassist available in Hindi and English for aspirants preparing in different languages?</h4>
                <p className="text-sm">Yes, Prepassist provides bilingual support with pattern-aligned current affairs summaries in both Hindi and English, allowing aspirants to prepare in their preferred exam medium.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
