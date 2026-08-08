import { Metadata } from "next";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-upsc-preparation-platform']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-upsc-preparation-platform']?.metaDescription || "",
};

export default function AIUPSCPreparationPlatformPage() {
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
               AI UPSC Preparation Platform: The Test Structure Extraction Advantage That Changes Mains Success Rates
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Most UPSC aspirants spend 18 months studying content that never appears on the exam. The difference between 2026 success and failure isn't access to more notes or videos—it's understanding what UPSC actually tests. RAG-driven AI platforms extract test structures from past papers and official syllabi, delivering preparation calibrated to the exam's real depth and angle. Prepassist leads this shift with natively extracted test structures that generic AI tools cannot replicate.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Test Structure Extraction Matters More Than Content Volume</h3>
            <p className="mb-4">Most platforms operate on a content-first model: dump 10,000 notes, hope aspirants find the right angle. This fails because UPSC doesn't test breadth equally. The exam tests specific conceptual intersections, analytical frameworks, and structural patterns that repeat across years.</p>
            <p>Test structure extraction solves this by reverse-engineering the exam itself. Instead of learning "everything about polity," you learn the 47 polity concepts UPSC has tested in the last 15 years, ranked by frequency and difficulty. This transforms preparation from guesswork into precision targeting.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Content Trap: Why More Notes Hurt Your Score</h3>
            <p>Aspirants using traditional platforms average 8-12 hours daily studying content with zero exam relevance. Sustainable UPSC preparation requires consistent daily engagement—3 hours daily for 12 months beats 10 hours daily for 3 months followed by burnout. Prepassist's RAG-driven extraction filters content to only exam-relevant material. You study 3 hours of high-signal content instead of 10 hours of noise, achieving better retention and measurable score improvement within 6 weeks.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How RAG Technology Identifies Repeating Test Patterns</h3>
            <p>Retrieval-Augmented Generation maps conceptual relationships across 15 years of UPSC questions. When you study "Constitutional Amendment," the platform shows the 12 specific amendments UPSC has tested, the exact angles used, and follow-up questions that typically appear. A detailed PYQ analyzer helped aspirants figure out repeating trends and saved weeks of guesswork. Prepassist's native extraction means you're learning from the exam's actual structure, not generic AI summaries.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core Features That Separate Exam-Calibrated Platforms From Generic AI Tools</h3>
            <p>Not all "AI-powered" apps use meaningful artificial intelligence—many slap an "AI" label on basic algorithms, some offer chatbots that regurgitate Wikipedia, and others promise personalization but deliver generic content to everyone. Prepassist differentiates through five core capabilities that directly impact exam performance.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Dynamic Test Structure Extraction and Syllabus Mapping</h3>
            <p className="mb-6">Prepassist natively extracts test structures by analyzing UPSC's official syllabus alongside 15 years of past papers. This creates a dynamic map showing which topics appear in Prelims, which in Mains, and which in both. The platform identifies 47 high-frequency polity concepts, 23 critical economy frameworks, and 31 geography patterns that repeat across years. When you open a topic, you see the exact UPSC angle: "Constitutional Amendment: Focus on procedural requirements and judicial interpretation." This specificity eliminates months of wasted guesswork.</p>

            <h4 className="font-bold text-slate-800 mb-4">Comparison of extraction approaches:</h4>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Generic AI Tools</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Prepassist RAG-Driven</th>
                    <th className="p-4 font-bold text-sm">Competitor Platforms</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Test structure mapping</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, native extraction</td>
                    <td className="p-4 text-slate-500">Partial, content-based</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PYQ pattern analysis</td>
                    <td className="p-4 text-slate-500">Basic search</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Deep conceptual linking</td>
                    <td className="p-4 text-slate-500">Surface-level</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Syllabus alignment</td>
                    <td className="p-4 text-slate-500">Manual</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Automated, real-time</td>
                    <td className="p-4 text-slate-500">Static</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Angle-specific learning</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes, exam-calibrated</td>
                    <td className="p-4 text-slate-500">Generic explanations</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Update frequency</td>
                    <td className="p-4 text-slate-500">Monthly</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Daily from official sources</td>
                    <td className="p-4 text-slate-500">Weekly</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Accuracy to UPSC standards</td>
                    <td className="p-4 text-slate-500">60%</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">94%</td>
                    <td className="p-4 text-slate-500">72%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Mains Answer Evaluation With Examiner-Standard Feedback</h3>
            <p>AI evaluates Mains answers based on content, structure, language, introduction, conclusion, and analytical depth, providing detailed feedback with scores and actionable improvement suggestions. Prepassist's evaluation engine compares your answer structure against 4,000+ model answers from toppers, identifying gaps in analytical depth, and predicts marks using UPSC's actual scoring rubric. You upload a handwritten answer, receive marks prediction within 90 seconds, and get specific feedback. This transforms answer writing from trial-and-error into deliberate practice.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing and Feature Comparison: What You Actually Get for Your Investment</h3>
            <p className="mb-6">The UPSC AI platform market ranges from free tools to ₹1,00,000+ annual coaching. Prepassist offers exam-calibrated features at a fraction of traditional coaching costs.</p>

            <h4 className="font-bold text-slate-800 mb-4">Prepassist vs. Competitors: Feature Matrix and Value Proposition</h4>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Platform</th>
                    <th className="p-4 font-bold text-sm">Annual Cost</th>
                    <th className="p-4 font-bold text-sm">Test Structure Extraction</th>
                    <th className="p-4 font-bold text-sm">Mains Evaluation</th>
                    <th className="p-4 font-bold text-sm">Current Affairs</th>
                    <th className="p-4 font-bold text-sm">PYQ Coverage</th>
                    <th className="p-4 font-bold text-sm">AI Doubt Resolution</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr className="bg-indigo-50/30">
                    <td className="p-4 font-bold text-indigo-700">Prepassist</td>
                    <td className="p-4 font-bold text-indigo-700">₹4,999</td>
                    <td className="p-4 font-medium text-slate-700">Native RAG-driven</td>
                    <td className="p-4 font-medium text-slate-700">Examiner-standard</td>
                    <td className="p-4 font-medium text-slate-700">Daily integrated</td>
                    <td className="p-4 font-medium text-slate-700">15 years</td>
                    <td className="p-4 font-medium text-slate-700">24/7</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">SuperKalam</td>
                    <td className="p-4 text-slate-500">₹7,999</td>
                    <td className="p-4 text-slate-500">Content-based</td>
                    <td className="p-4 text-slate-500">Fast feedback</td>
                    <td className="p-4 text-slate-500">Limited</td>
                    <td className="p-4 text-slate-500">10 years</td>
                    <td className="p-4 text-slate-500">24/7</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PadhAI</td>
                    <td className="p-4 text-slate-500">₹3,500</td>
                    <td className="p-4 text-slate-500">Partial</td>
                    <td className="p-4 text-slate-500">Basic</td>
                    <td className="p-4 text-slate-500">Daily</td>
                    <td className="p-4 text-slate-500">8,000+ PYQs</td>
                    <td className="p-4 text-slate-500">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">UPSC.ai</td>
                    <td className="p-4 text-slate-500">₹6,000</td>
                    <td className="p-4 text-slate-500">Moderate</td>
                    <td className="p-4 text-slate-500">Standard</td>
                    <td className="p-4 text-slate-500">Weekly</td>
                    <td className="p-4 text-slate-500">25,000+ MCQs</td>
                    <td className="p-4 text-slate-500">24/7</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PrepAiro</td>
                    <td className="p-4 text-slate-500">₹999</td>
                    <td className="p-4 text-slate-500">Partial</td>
                    <td className="p-4 text-slate-500">AI-powered</td>
                    <td className="p-4 text-slate-500">Daily</td>
                    <td className="p-4 text-slate-500">10 lakh+ questions</td>
                    <td className="p-4 text-slate-500">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Prepassist's advantage lies in native test structure extraction combined with examiner-standard evaluation. The ₹4,999 annual investment breaks down to ₹13.70 daily for features that save 200+ hours of wasted study time.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Buying Decision Checklist</h3>
              <p className="mb-4 text-sm text-slate-500">Before committing to any platform, verify these five criteria:</p>
              <ul className="space-y-3">
                {[
                  "Does the platform extract test structures from past papers, or does it just deliver generic content?",
                  "Can you verify the Mains evaluation accuracy by comparing feedback against official answer keys?",
                  "Does current affairs integration link news to specific PYQs and Mains questions?",
                  "Is the AI doubt resolution UPSC-specific, or does it regurgitate Wikipedia?",
                  "What's the refund policy if the platform doesn't improve your mock test scores within 60 days?"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate-700 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                Prepassist meets all five criteria with native extraction, examiner-standard evaluation, integrated current affairs, UPSC-trained AI tutor, and a 60-day performance guarantee with full refund if mock scores don't improve.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Metrics to Track</h3>
              <p className="mb-4 text-sm text-slate-500">How to Know If Your Platform Is Working:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Mock test scores</span>
                    <span className="text-sm text-slate-600">Should improve 2-3 points monthly</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Mains answer marks prediction</span>
                    <span className="text-sm text-slate-600">Should increase from 45/250 to 120/250 over 6 months</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Weak area reduction</span>
                    <span className="text-sm text-slate-600">Track how many weak topics you've mastered</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Current affairs integration</span>
                    <span className="text-sm text-slate-600">Can you link 80% of news items to past UPSC questions?</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Consistency</span>
                    <span className="text-sm text-slate-600">Are you studying 3 hours daily, 6 days weekly?</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">What makes RAG-driven test structure extraction different from regular AI tutoring?</h4>
                <p className="text-sm">Some platforms use AI to generate potential MCQs and Mains questions from current developments, enabling immediate testing of understanding rather than passive reading.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can AI evaluation really predict my UPSC Mains marks accurately?</h4>
                <p className="text-sm">Prepassist's evaluation engine compares your answer structure, content depth, and analytical framework against 4,000+ topper responses and official answer keys, achieving 94% accuracy in marks prediction when evaluated against actual UPSC scoring patterns.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Is Prepassist better than traditional coaching for UPSC preparation?</h4>
                <p className="text-sm">AI tools complement rather than replace traditional coaching, excelling at personalization, immediate feedback, and efficient information processing—areas where classroom coaching struggles due to scale.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How much time should I spend daily on an AI UPSC platform to see results?</h4>
                <p className="text-sm">Sustainable UPSC preparation requires consistent daily engagement—3 hours daily for 12 months beats 10 hours daily for 3 months followed by burnout.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What's the refund policy if Prepassist doesn't improve my mock scores?</h4>
                <p className="text-sm">Prepassist offers a 60-day performance guarantee: if your mock test scores don't improve by at least 5 points within 60 days of consistent use, you receive a full refund with no questions asked.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
