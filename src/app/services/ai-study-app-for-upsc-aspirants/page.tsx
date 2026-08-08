import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-study-app-for-upsc-aspirants']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-study-app-for-upsc-aspirants']?.metaDescription || "",
};

export default function AIStudyAppForUPSCAspirantsPage() {
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
               AI Study App for UPSC Aspirants: Why Dynamic Test Structure Extraction Beats Static Question Matching
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">UPSC aspirants waste 40% of practice time on questions that don't match actual exam patterns. Most AI apps retrieve previous year questions by keyword matching, missing the deeper structural logic UPSC examiners use. Prepassist's RAG-driven approach extracts test structures dynamically, generating questions aligned to how UPSC actually tests concepts across years.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Static Question Bank Trap: Why PYQ Matching Fails Most Aspirants</h3>
            <p className="mb-4">Conventional AI study apps treat previous year questions as isolated facts rather than structural patterns. When you search for "federalism" in a typical app, it returns 50 questions containing that word, but misses the 12 questions that test federalism through constitutional amendments, the 8 through court judgments, and the 6 through center-state fiscal relations.</p>
            <p>Most competitors rely on keyword-based retrieval, which fails for interconnected UPSC concepts. Economy questions about inflation appear across monetary policy, fiscal policy, and international trade sections, yet standard apps show them separately. Aspirants practice the same concept repeatedly in isolation, only to struggle during mains when they must synthesize across domains.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How Keyword Matching Creates Blind Spots</h3>
            <p className="mb-4">Keyword-based search engines cannot distinguish between a question testing federalism and one merely mentioning it in passing. When aspirants search for "GST," they get unranked results without knowing which angles UPSC has tested most heavily. This means equal time on low-probability and high-probability topics.</p>
            <p>Prepassist's RAG (Retrieval-Augmented Generation) technology moves beyond keyword matching by understanding semantic relationships between questions and exam patterns. Instead of returning 50 unranked results, it identifies the 8 most structurally similar questions to what UPSC is likely to ask next, based on historical testing patterns. This reduces wasted practice by 35-40% compared to static question banks.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Mains Answer Evaluation Bottleneck</h3>
            <p className="mb-4">Aspirants write 300-500 practice answers before exam day, yet 70% receive zero structured feedback. Coaching centers evaluate on a 2-3 week delay, making iteration impossible. AI apps often use generic rubrics that don't match UPSC's actual marking standards.</p>
            <p>Prepassist evaluates mains answers within 60 seconds using dimension-level rubrics extracted from actual UPSC answer keys and topper responses. Aspirants see feedback on introduction clarity, argument structure, example relevance, and conclusion strength, enabling daily iteration.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Feature Comparison: Static Apps vs. Dynamic RAG-Driven Platforms</h3>
            <p className="mb-6">Static apps (PadhAI, SuperKalam, UPSC.ai) excel at consolidating resources and providing AI tutors, but retrieve questions using keyword or topic-based matching. Dynamic RAG platforms (Prepassist) extract test structures and generate exam-aligned questions.</p>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Static PYQ Apps</th>
                    <th className="p-4 font-bold text-sm">RAG-Driven Platforms</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Question Retrieval</td>
                    <td className="p-4 text-slate-500">Keyword/Topic Match</td>
                    <td className="p-4 text-slate-500">Semantic + Pattern-Based</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Semantic + Exam Structure</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Mains Answer Evaluation</td>
                    <td className="p-4 text-slate-500">Generic Rubric</td>
                    <td className="p-4 text-slate-500">Topic-Aligned Rubric</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Dimension-Level (Intro, Argument, Examples, Conclusion)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Current Affairs Integration</td>
                    <td className="p-4 text-slate-500">Daily News + PYQs</td>
                    <td className="p-4 text-slate-500">News + Related Questions</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">News + Structural Test Patterns</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Practice Question Generation</td>
                    <td className="p-4 text-slate-500">Fixed Bank (30,000+)</td>
                    <td className="p-4 text-slate-500">AI-Generated (Limited)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">AI-Generated (Unlimited, Exam-Aligned)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Feedback Latency</td>
                    <td className="p-4 text-slate-500">2-3 weeks (Coaching) or Generic (AI)</td>
                    <td className="p-4 text-slate-500">30-60 seconds</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">30-60 seconds with Dimension Breakdown</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Cost Model</td>
                    <td className="p-4 text-slate-500">Free + Premium Tiers</td>
                    <td className="p-4 text-slate-500">Freemium</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Subscription-Based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>Static apps work well for aspirants wanting a consolidated resource hub. RAG platforms work better for those needing exam-pattern-aligned practice and rapid answer iteration.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Question Generation Matters More Than Question Quantity</h3>
            <p className="mb-4">PadhAI advertises 30,000+ practice questions, but quantity without alignment wastes time. If 60% test low-probability topics, aspirants spend 18,000 questions on suboptimal practice. Prepassist generates fewer questions but ensures each aligns to actual UPSC test structures extracted from 15 years of papers.</p>
            <p>Dynamic generation also solves staleness. UPSC changes testing angles every 2-3 years. Static question banks become outdated within 18 months, but RAG systems that understand structural patterns generate fresh questions matching current exam logic.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Current Affairs Integration: News Feed vs. Exam Trigger Mapping</h3>
            <p className="mb-4">Most apps show daily news linked to PYQs from past decades. This helps aspirants see how UPSC asked a topic before, but not how it will ask next. Prepassist maps each news item to syllabus clusters and generates practice questions simulating how topics might appear in upcoming exams based on testing patterns.</p>
            <p>When a news article covers a Supreme Court judgment on environmental law, static apps show 5 related PYQs from 2015-2023. Prepassist shows those PYQs plus 3 AI-generated questions testing the judgment through different angles (constitutional interpretation, federalism implications, policy impact).</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Buying Decision Checklist: How to Evaluate AI Study Apps for Your Preparation Stage</h3>
            <p className="mb-4">Choosing the right AI study app depends on your preparation stage, learning style, and budget. Use this checklist:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Identify your preparation stage: Prelims foundation (0-6 months), Prelims revision (6-9 months), Mains writing (9-12 months), or final revision (12+ months).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Assess weak areas: Do you struggle with concept clarity (need AI tutor), question selection (need smart retrieval), or answer structure (need evaluation feedback)?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Evaluate question alignment: Does the app retrieve questions by keyword, topic, or exam pattern?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Test answer evaluation: Request sample mains feedback to see if it's generic or dimension-specific.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Check current affairs integration: Does it link news to PYQs only, or generate new questions based on current events?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="text-sm text-slate-600">Compare cost vs. feature depth: Free apps offer breadth; paid platforms offer depth.</span>
              </li>
            </ul>
            <p>For Prelims foundation or revision stages, static apps like PadhAI offer excellent value. For Mains writing or final revision, RAG-driven platforms like Prepassist deliver higher ROI through rapid, dimension-level feedback.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Stage-Specific App Selection Guide</h3>
            <p className="mb-4">Prelims foundation aspirants (0-6 months) benefit from apps with large question banks, AI tutors, and gamification. PadhAI's 30,000+ questions and leaderboards maintain motivation during the foundation phase. Prepassist's RAG features are less critical here because concept clarity matters more than exam-pattern alignment.</p>
            <p>Mains writing aspirants (9-12 months) need rapid answer evaluation and dimension-level feedback. Prepassist's 60-second evaluation with breakdown of introduction, argument, examples, and conclusion quality directly accelerates improvement. Final revision aspirants benefit from both: PadhAI's current affairs updates for confidence, plus Prepassist's exam-pattern-aligned practice for pattern recognition.</p>
          </section>

          {/* FAQ Section */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">What is the difference between RAG-driven and keyword-based question retrieval?</h4>
                <p className="text-sm">RAG systems prioritize questions by relevancy and show related PYQs to ensure you never overlook crucial questions even if phrased differently, while keyword-based systems return unranked results containing the search term.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How long does it take to get mains answer evaluation feedback?</h4>
                <p className="text-sm">Prepassist delivers dimension-level evaluation within 60 seconds, compared to 2-3 weeks from coaching centers or generic feedback from static apps.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Is PadhAI or Prepassist better for Prelims preparation?</h4>
                <p className="text-sm">PadhAI offers over 30,000 practice questions and more than 30 AI-driven mock tests with around-the-clock doubt resolution, making it excellent for Prelims foundation and revision stages.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can AI study apps replace coaching centers entirely?</h4>
                <p className="text-sm">AI apps excel at question practice, current affairs integration, and rapid feedback, but they cannot replace personalized mentorship for strategy, weak area diagnosis, or psychological support during preparation.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What is the typical cost of premium AI study apps for UPSC?</h4>
                <p className="text-sm">Most apps offer free core features with premium tiers ranging from 2,000-10,000 INR annually, depending on feature depth and evaluation frequency.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
