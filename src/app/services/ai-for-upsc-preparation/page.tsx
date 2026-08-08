import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['ai-for-upsc-preparation']?.metaTitle || "PrepAssist",
  description: servicesMetadata['ai-for-upsc-preparation']?.metaDescription || "",
};

export default function AIForUPSCPreparationPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight text-left">
               AI for UPSC Preparation: Why Exam-Calibrated Tools Beat Generic Chatbots
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Most UPSC aspirants waste months using generic AI tools that explain concepts broadly but miss the exam's actual depth and angle. Exam-calibrated AI platforms extract test structures from past papers and official syllabi to deliver preparation that matches what UPSC actually tests.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Critical Flaw in Generic AI for UPSC Preparation</h3>
            <p className="mb-4">The critical difference is whether the tool was built around the UPSC exam's structure and PYQ record, or whether it is a general AI tool adapted for the UPSC market; the second category will give you broadly correct content but cannot give you exam-calibrated preparation. An aspirant can spend forty hours studying topics ChatGPT made seem important and still find the actual Paper I full of angles they never covered, which is one of the most common reasons strong aspirants underperform on Prelims.</p>
            <p>When you ask ChatGPT about the Scheduled Tribes Act, you receive technically correct information but lack PYQ context: which institutional roles and exceptions UPSC has tested. PYQ integration at the question level—specifically, whether the tool knows which angle UPSC has tested on a topic—is the most important feature to look for in a UPSC AI tool.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why PYQ-Grounded Platforms Deliver Better Results</h3>
            <p className="mb-4">Tools specifically built on PYQ data, syllabus structure, and official source material can genuinely improve how efficiently an aspirant covers the right material at the right depth. Prepassist uses retrieval-augmented generation (RAG) to dynamically extract test structures from 15+ years of UPSC papers, mapping each topic to the exact angles and frequency with which UPSC tests them. This means when you study polity, the platform shows which institutional relationships UPSC prioritizes.</p>
            <p>Instead of studying 100 topics at surface level, you identify the 20 topics generating 80 percent of UPSC questions and study those at required depth. UPSC preparation requires you to be specifically prepared for the exact depth, angle, and format that the exam has historically used.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How RAG-Driven Platforms Extract Dynamic Test Structures</h3>
            <p className="mb-4">Retrieval-augmented generation means the AI continuously pulls from live UPSC question archives, current affairs databases, and official syllabus documents. When Parliament passes a significant bill, Prepassist's RAG engine immediately maps it to relevant PYQ angles, generates practice questions covering factual and conceptual dimensions, and flags which General Studies papers historically test this topic.</p>
            <p>The platform also identifies deprioritization opportunities: topics that appear in the syllabus but rarely in actual papers. This saves aspirants 50+ hours by eliminating low-yield study areas.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core AI Features That Actually Accelerate UPSC Success</h3>
            <p className="mb-4">Don't be dazzled by buzzwords like "machine learning" and "neural networks." Ask practical questions: Does this AI solve my actual problems? Does it save time? Does it provide UPSC-specific value? The features that matter for UPSC preparation are content delivery, practice generation, and feedback loops.</p>
            <p className="font-semibold text-slate-800 mb-4">Key features to evaluate:</p>
            <ul className="space-y-3">
              {["Instant answer evaluation with UPSC-style rubrics", "Adaptive learning paths based on weak areas and PYQ patterns", "Current affairs integration mapped to syllabus topics", "Doubt resolution grounded in official sources and PYQ context", "Performance analytics showing strengths relative to PYQ difficulty"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Answer Evaluation: The Game-Changer for Mains Preparation</h3>
            <p className="mb-4">Today's aspirants have access to artificial intelligence that can analyze their weak areas, evaluate their Mains answers, and create personalized study schedules based on actual performance data. Prepassist's answer evaluation engine analyzes your Mains responses against 15+ years of UPSC marking patterns, evaluating structure, keyword coverage, and analytical depth. It flags UPSC-specific weaknesses: missing institutional context or answers lacking directness UPSC examiners reward.</p>
            <p>The platform provides granular feedback like "Your answer covers the concept but misses the 2023 policy shift that UPSC tested in GS-3 Mains." Sustainable UPSC preparation requires consistent daily engagement—3 hours daily for 12 months beats 10 hours daily for 3 months followed by burnout.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Personalized Study Plans Built on Your Performance Data</h3>
            <p>The AI tracks every question you attempt, identifies patterns in your mistakes, and adjusts your learning path accordingly; this level of personalization was previously available only through expensive one-on-one coaching (₹50,000+/month), but AI democratizes it for ₹999/year. Prepassist generates weekly study schedules based on your weak areas and upcoming exam dates. If your performance data shows 40 percent accuracy on environment questions but 75 percent on history, the platform allocates more study time to environment.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Comparing AI Platforms: What Separates Exam-Calibrated Tools from Generic Solutions</h3>
            <p className="mb-6">The UPSC AI platform market includes generic tools (ChatGPT, Gemini), general exam apps (PadhAI, SuperKalam), and exam-calibrated platforms (Prepassist, UPSC.ai). Only exam-calibrated tools deliver the specificity required for competitive success.</p>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 mb-6 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 font-bold text-sm">Feature</th>
                    <th className="p-4 font-bold text-sm">Generic AI (ChatGPT)</th>
                    <th className="p-4 font-bold text-sm">General Exam Apps (PadhAI)</th>
                    <th className="p-4 font-bold text-sm text-indigo-700 bg-indigo-50/50">Exam-Calibrated (Prepassist)</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">PYQ Integration</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 text-slate-500">Partial (question bank only)</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Full (angle-level mapping)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Answer Evaluation</td>
                    <td className="p-4 text-slate-500">Generic writing feedback</td>
                    <td className="p-4 text-slate-500">Basic structure check</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">UPSC-specific rubric analysis</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Current Affairs Mapping</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 text-slate-500">Topic-based only</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Syllabus-linked with PYQ angles</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Deprioritization Guidance</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Yes (low-yield topic flagging)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Adaptive Learning</td>
                    <td className="p-4 text-slate-500">No</td>
                    <td className="p-4 text-slate-500">Basic</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Advanced (performance-driven)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Cost</td>
                    <td className="p-4 text-slate-500">Free to ₹20/month</td>
                    <td className="p-4 text-slate-500">₹500-2000/year</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">₹999-2000/year</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-700">Best For</td>
                    <td className="p-4 text-slate-500">Concept clarity</td>
                    <td className="p-4 text-slate-500">Broad practice</td>
                    <td className="p-4 font-bold text-indigo-700 bg-indigo-50/30">Exam-targeted mastery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 italic px-2">Prepassist's RAG-driven architecture continuously updates as UPSC's testing patterns evolve, adapting faster than static training-based tools.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing and Value</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-300"></div> <span className="text-slate-600">Traditional coaching: <span className="font-semibold text-slate-800">₹50,000-150,000</span></span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-300"></div> <span className="text-slate-600">Generic AI tools: <span className="font-semibold text-slate-800">Free to ₹240/year</span></span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-300"></div> <span className="text-slate-600">General exam apps: <span className="font-semibold text-slate-800">₹500-2000/year</span></span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div> <span className="font-bold text-indigo-700">Exam-calibrated platforms: ₹999-2000/year</span></li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Avoiding Common Pitfalls</h3>
              <ul className="space-y-3">
                {[
                  "Using AI-generated answers directly in Mains",
                  "Relying on AI summaries without reading full articles for high-weightage topics",
                  "Switching between multiple AI tools instead of mastering one",
                  "Treating AI doubt resolution as a substitute for deep reading",
                  "Using AI for intensity instead of consistency"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Can I prepare for UPSC using only free AI tools like ChatGPT?</h4>
                <p className="text-sm">AI tools that are generic do not help much beyond quick concept explanations; tools specifically built on PYQ data, syllabus structure, and official source material can genuinely improve how efficiently an aspirant covers the right material at the right depth.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What is the most important feature in a UPSC AI platform?</h4>
                <p className="text-sm">PYQ integration at the question level—specifically, whether the tool knows which angle UPSC has tested on a topic, not just that the topic has appeared—is the most important feature to look for in a UPSC AI tool, and everything else is secondary to this.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How much does exam-calibrated AI preparation cost compared to coaching?</h4>
                <p className="text-sm">This level of personalization was previously available only through expensive one-on-one coaching (₹50,000+/month), but AI democratizes it for ₹999/year.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Should I use AI-generated answers directly in my UPSC Mains exam?</h4>
                <p className="text-sm text-rose-600 font-semibold bg-rose-50 p-3 rounded-lg border border-rose-100">UPSC mein AI-generated content directly copy karna dangerous hai; examiner easily identify kar lete hain; AI ko research aur practice tool ki tarah use karo, answer writing tool ki tarah nahi.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How do I choose between multiple AI platforms for UPSC preparation?</h4>
                <p className="text-sm">Choose 2-3 complementary tools that cover your specific needs—one for current affairs, one for answer evaluation, one for doubt resolution—and master them rather than dabbling in many.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
