import { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-ai-mock-test-platform']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-ai-mock-test-platform']?.metaDescription || "",
};

export default function UPSCAIMockTestPlatformPage() {
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
               UPSC AI Mock Test Platform: The Structural Logic Advantage That Separates Serious Preparation from Wasted Hours
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Most UPSC aspirants complete mock tests but never understand why they failed. Static platforms deliver the same 100 questions to every student, missing the deeper structural patterns UPSC examiners test. Prepassist's RAG-driven UPSC AI mock test platform natively extracts test structures, generating personalized full-length mocks that adapt to your exact knowledge gaps.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Static Question Bank Trap: Why Volume Defeats Purpose</h3>
            <p className="mb-4">Traditional UPSC mock test platforms store 10,000 questions and retrieve them by keyword matching without understanding structural relationships. This is the blind spot in traditional government exam preparation where you're practicing, but you're not learning what to fix. Static banks treat all questions as equal, ignoring the structural logic that determines which topics appear together and how difficulty scales across sections.</p>
            <p>When you complete a mock test on a static platform, you get a score and maybe a topic-wise breakdown, but not the exam's hidden architecture. UPSC Prelims is not a knowledge test. It is a decision-making test under time pressure. The difference between qualifying and missing the cutoff by 2 marks often comes down to which questions you attempted and which you skipped.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How Keyword Matching Creates Blind Spots</h3>
            <p className="mb-4">Generic AI platforms use keyword matching to retrieve questions. But UPSC doesn't test polity in isolation—it tests polity concepts embedded in current affairs scenarios and constitutional amendments. A question about the 44th Amendment isn't just a polity question; it's a polity-history-current affairs intersection. Keyword matching misses these intersections entirely.</p>
            <p>Prepassist's RAG architecture doesn't retrieve questions by keywords. It extracts structural relationships between concepts, understanding that certain topics must appear together because UPSC's exam design demands it. This means every mock test mirrors the actual exam's conceptual architecture.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Performance Analysis Bottleneck</h3>
            <p>Most platforms show you a score and topic-wise accuracy. Get a detailed breakdown across 4 dimensions: subject-wise accuracy, difficulty-wise performance, time management analysis, and negative marking impact. Prepassist analyzes your decision-making patterns across every mock test. Over time, the platform builds a profile of your strengths and weaknesses far more granular than topic-wise accuracy, identifying whether you struggle with inference-based questions or freeze on unfamiliar formats.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Dynamic Test Structure Extraction Beats Static Question Retrieval</h3>
            <p>Static platforms retrieve pre-written questions from a database. Prepassist dynamically extracts test structures from UPSC's actual exam patterns, then generates personalized mocks matching your preparation level. UPSC Prelims has specific patterns in difficulty distribution and how current affairs weaves into traditional GS topics. A static platform can't capture these patterns because they change year to year.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Test Structure Extraction vs. Content Summarization</h3>
            <p>Most AI UPSC platforms focus on content: summarizing notes or generating practice questions. Prepassist focuses on structure: understanding how UPSC actually tests knowledge. When Prepassist generates a mock test, it extracts structural logic from UPSC's past papers, understanding probability distribution of question types and difficulty levels. It generates a personalized test matching your preparation level while exposing you to exact patterns you'll face on exam day.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Adaptive Difficulty and Real-Time Calibration</h3>
            <p>Static platforms offer the same test to every student. Prepassist adapts. AI mock tests are transforming government exam preparation with adaptive difficulty, instant error analysis, and personalized practice. After each mock test, Prepassist recalibrates your preparation level and adjusts the next test accordingly. If you scored 65%, the next test targets your specific weak areas while building confidence in strong areas. This adaptive approach is critical because UPSC preparation isn't linear—you might be strong in history but weak in economics.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Competitive Advantage: RAG Architecture and Real-Time Performance Insights</h3>
            <p>Prepassist's RAG (Retrieval-Augmented Generation) architecture understands relationships between information. In UPSC mock tests, this means understanding how a question about the Indian Constitution relates to federalism and recent amendments. This relational understanding enables three advantages: every mock test is structurally accurate to the actual UPSC exam, performance analysis is multi-dimensional and actionable, and the platform learns from your mistakes to rebuild preparation in real time.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Feedback That Identifies Root Causes</h3>
            <p>When you answer incorrectly on Prepassist, the AI identifies why you failed. Was it conceptual, a reading comprehension error, or time management? Every question has detailed explanation of why each wrong option is wrong. Hit the Ask Airo button on any question to get AI-powered explanation tailored to your doubt. If you failed due to conceptual gap, revisit foundational material. If you misread, slow down. If you ran out of time, practice speed. Prepassist identifies which category your error falls into and recommends specific intervention.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">All India Rank and Competitive Benchmarking</h3>
            <p>Knowing your score is useless without comparing it to other aspirants. After every test, see exactly where you stand among thousands of fellow aspirants. Your rank tells you whether your preparation level is competitive enough. Prepassist provides All India Rank after every mock test, giving real-time insight into whether you're on track to clear the cutoff. This competitive benchmarking is a reality check: if you're scoring 65% but your rank is 8,000, you need significant improvement. If your rank is 500, you're on track.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation Strategy: How to Maximize Prepassist's UPSC AI Mock Test Platform</h3>
            <p className="mb-4">Prepassist's RAG-driven architecture is powerful only if used strategically. Treat mock tests as learning tools, not just assessment tools. Each test should teach you about the exam's structure, your preparation level, and weak areas.</p>
            <p className="font-bold text-slate-900 mb-2">The Four-Week Calibration Cycle</p>
            <p>Week 1: Take your first full-length mock without preparation to establish baseline. Focus on understanding test format and question types. Review detailed feedback and identify your three weakest topics.</p>
          </section>

          {/* FAQ Section */}
          <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">How does Prepassist's RAG architecture differ from traditional UPSC mock test platforms?</h4>
                <p className="text-sm">Prepassist dynamically extracts UPSC exam structures and generates personalized tests that adapt to your preparation level, while traditional platforms retrieve static questions by keyword matching without understanding structural relationships between concepts.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Can I use Prepassist's mock tests if I'm a working professional with limited study time?</h4>
                <p className="text-sm">Yes, Prepassist's adaptive difficulty means each mock test is calibrated to your level, so you maximize learning per hour spent, and the platform's performance analytics help you focus on high-impact weak areas rather than wasting time on strong topics.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">What makes Prepassist's performance analysis better than competitors?</h4>
                <p className="text-sm">Prepassist analyzes performance across four dimensions (subject-wise accuracy, difficulty-wise performance, time management, and negative marking impact) and identifies root causes of errors, enabling targeted interventions rather than generic topic-wise breakdowns.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">How often should I take full-length mock tests on Prepassist?</h4>
                <p className="text-sm">Follow the four-week calibration cycle: take a baseline test, study weak areas for two weeks, take a second test to measure improvement, then repeat; this structured approach yields noticeable improvement within 2-4 weeks of consistent use.</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-bold text-slate-900 mb-2">Does Prepassist provide All India Rank after each mock test?</h4>
                <p className="text-sm">Yes, Prepassist provides All India Rank after every mock test, showing you exactly where you stand among thousands of aspirants and whether your preparation level is competitive enough to clear the UPSC Prelims cutoff.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
