"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden font-sans text-slate-900">
      {/* Premium Ambient Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none -z-10"></div>
      {/* Left side glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-15%] md:left-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-rose-200/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      {/* Right side glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-15%] md:right-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12 animate-mobile-enter">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">
            Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-mobile-enter" style={{ animationDelay: "100ms" }}>
          
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for UPSC Preparation: Why Exam-Calibrated Tools Beat Generic Chatbots
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Why Exam-Calibrated Tools Beat Generic Chatbots
              </p>
              <Link
                href="/services/ai-for-upsc-preparation"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI UPSC Study Tool */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI UPSC Study Tool: Smarter Prep for CSE Aspirants
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Mains Answer Evaluation, PDF to Quiz Generator & Personalised Study Schedules
              </p>
              <Link
                href="/services/ai-upsc-study-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Tutor for UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI Tutor for UPSC: Your 24x7 Study Partner That Never Sleeps
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                24x7 Doubt Resolution, Instant Mains Evaluation & Personalized Mentorship
              </p>
              <Link
                href="/services/ai-tutor-for-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC AI Assistant */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC AI Assistant: How a Digital Sidekick Reshapes Your Prep Day
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Dawn to Night Prep Optimization, Current Affairs Filtering & Mains Feedback
              </p>
              <Link
                href="/services/upsc-ai-assistant"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for Polity Preparation UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for Polity Preparation UPSC: Turning the Constitution Into Clarity
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Master Constitutional Concepts, Connect Static to News & Mains Polity Answer Drills
              </p>
              <Link
                href="/services/ai-for-polity-preparation-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for History UPSC Preparation */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for History UPSC Preparation: From Harappa to Independence, Simplified
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Ancient Themes, Medieval Systems, Modern Movements & Art Culture Active Recall
              </p>
              <Link
                href="/services/ai-for-history-upsc-preparation"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for Economy UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for Economy UPSC: Making the Toughest Subject Finally Click
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Logic Before Labels, Budget & RBI News Linking, Spaced Testing & Mains Answers
              </p>
              <Link
                href="/services/ai-for-economy-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Topic-Wise AI Explanation */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Topic-Wise AI Explanation: A Guided Tour Across the Syllabus
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Tailored AI Explanations across History, Polity, Economy & Geography with PDF Quizzes & Mains Review
              </p>
              <Link
                href="/services/upsc-topic-wise-ai-explanation"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for UPSC Conceptual Clarity */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for UPSC Conceptual Clarity: Diagnosing the Gaps and Closing Them
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Diagnose Conceptual Gaps, Move Beyond Recitation, Compare Related Concepts & PDF Quizzes
              </p>
              <Link
                href="/services/ai-for-upsc-conceptual-clarity"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Sentence Explanation Tool for Students */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Sentence Explanation Tool for Students: A Field Guide to the Sentences That Trip Us Up
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Demystify Complex Clauses, Vocabulary & Assumed Context with AI, PDF Quizzes & Mains Writing Review
              </p>
              <Link
                href="/services/sentence-explanation-tool-for-students"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Depth Study Tool */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Depth Study Tool: Following a Single Topic All the Way Down
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                4-Layer Deep Learning (Surface, Causes, Dimensions & Connections), PDF Quizzes & Mains Evaluation
              </p>
              <Link
                href="/services/upsc-depth-study-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI-Based Concept Builder UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI-Based Concept Builder UPSC: Constructing Knowledge That Holds
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Structured Knowledge Construction, Foundational Basics, Connected Frameworks & PDF Quizzes
              </p>
              <Link
                href="/services/ai-based-concept-builder-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Paragraph-Wise Notes */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Paragraph-Wise Notes: The Old Way and the Smarter Way
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Compact Understanding-First Notes, Rapid Revision, Custom PDF Quizzes & Mains Answer Review
              </p>
              <Link
                href="/services/upsc-paragraph-wise-notes"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Explain UPSC Topics With AI */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Explain UPSC Topics With AI: A Step-by-Step Method That Actually Works
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Repeatable 6-Step Method, Plain Language Concepts, Syllabus Connections, PDF Quizzes & Mains Answer Review
              </p>
              <Link
                href="/services/explain-upsc-topics-with-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: NCERT Explanation App for UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                NCERT Explanation App for UPSC: Answering the Questions Aspirants Actually Ask
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Honest Answers, Focused NCERT Teaching, PDF Quizzes & Mains Answer Writing Support
              </p>
              <Link
                href="/services/ncert-explanation-app-for-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Explanation for NCERT */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI Explanation for NCERT: Why the Basics Deserve a Better Teacher
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Unpack History, Economics & Polity NCERT Passages, Build Conceptual Foundations & Generate PDF Quizzes
              </p>
              <Link
                href="/services/ai-explanation-for-ncert"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Topic Deep Explanation AI */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Topic Deep Explanation AI: Going Beyond the Surface of Every Subject
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Multi-Dimensional Subject Exploration, Causes & Consequences Analysis, PDF Quizzes & Mains Answer Review
              </p>
              <Link
                href="/services/upsc-topic-deep-explanation-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Line-by-Line Explanation UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Line-by-Line Explanation UPSC: Reading Difficult Texts Without Getting Lost
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Sentence-by-Sentence NCERT & Editorial Unpacking, Custom PDF Quizzes & Mains Answer Feedback
              </p>
              <Link
                href="/services/line-by-line-explanation-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Concept Explanation App */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Concept Explanation App: When Understanding Comes Before Memorising
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Interactive Guided Conversations, Deep Conceptual Links, Custom PDF Quizzes & Active Memory Recall
              </p>
              <Link
                href="/services/upsc-concept-explanation-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI-Powered UPSC Study Platform */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI-Powered UPSC Study Platform: Bringing the Whole Preparation Under One Roof
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Unified Ecosystem for Concept Explanations, PDF Quizzes, Mains Answer Review & Adaptive Progress
              </p>
              <Link
                href="/services/ai-powered-upsc-study-platform"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Mentor for Civil Services */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI Mentor for Civil Services: Guidance That Stays With You Through the Journey
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Always-On Guidance, Instant Doubt Resolution, Fast Answer Feedback & Equal Opportunity Study Aid
              </p>
              <Link
                href="/services/ai-mentor-for-civil-services"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Personalised AI Tutor UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Personalised AI Tutor UPSC: Preparation That Adapts to You
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Tailored Schedules, Dynamic Adaptive Learning, Custom PDF Quizzes & Individual Answer Reviews
              </p>
              <Link
                href="/services/personalised-ai-tutor-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI-Based UPSC Coaching App */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI-Based UPSC Coaching App: What to Look For Before You Commit
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Interactive Teaching, Active Material Quizzes, Fast Mains Feedback & Connected Prep
              </p>
              <Link
                href="/services/ai-based-upsc-coaching-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Subject-Wise AI Mentor UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Subject-Wise AI Mentor UPSC: One Guide, Tuned to Every Paper
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Tailored Approaches for History, Polity, Economy & Ethics, Subject-Tuned Quizzes & Answer Feedback
              </p>
              <Link
                href="/services/subject-wise-ai-mentor-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for Environment UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for Environment UPSC: Turning a Sprawling Subject Into Steady Marks
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Ecology Frameworks, Filtered Climate News, Active Recall Quizzes & Mains Answer Feedback
              </p>
              <Link
                href="/services/ai-for-environment-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI for Geography UPSC */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h2 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI for Geography UPSC: Mapping Success One Concept at a Time
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Physical, Indian & Economic Geography, Active Map Quizzes & Mains Diagram Answer Feedback
              </p>
              <Link
                href="/services/ai-for-geography-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC AI App: The Answer Evaluation Revolution That Changes How Mains Candidates Prepare
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC AI App
              </p>
              <Link
                href="/services/upsc-ai-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI UPSC Preparation Platform: The Test Structure Extraction Advantage That Changes Mains Success Rates
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                AI UPSC Preparation Platform
              </p>
              <Link
                href="/services/ai-upsc-preparation-platform"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Mains Answer Evaluation AI: The Exam-Calibrated Feedback Advantage That Separates Toppers From Plateau Candidates
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Mains Answer Evaluation AI
              </p>
              <Link
                href="/services/upsc-mains-answer-evaluation-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                PDF to Quiz Generator UPSC: Turn Your Study Notes Into Exam-Aligned Practice Questions in Seconds
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PDF to Quiz Generator UPSC
              </p>
              <Link
                href="/services/pdf-to-quiz-generator-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Notes Maker AI: The Efficiency Multiplier That Converts Passive Reading Into Active Revision
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Notes Maker AI
              </p>
              <Link
                href="/services/upsc-notes-maker-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI UPSC Test Series: The RAG-Powered Approach That Learns From Actual Exam Structures
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                AI UPSC Test Series
              </p>
              <Link
                href="/services/ai-upsc-test-series"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC AI Answer Writing Practice: Build Exam-Ready Answers Through Structured Feedback Loops
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC AI Answer Writing Practice
              </p>
              <Link
                href="/services/upsc-ai-answer-writing-practice"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 9 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Current Affairs AI Tool: Stop Reading News, Start Targeting Exam Angles
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Current Affairs AI Tool
              </p>
              <Link
                href="/services/upsc-current-affairs-ai-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 10 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                PrepAssist UPSC App: Stop Juggling Books, Start Using One Unified AI Ecosystem
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist UPSC App
              </p>
              <Link
                href="/services/prepassist-upsc-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 11 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Mains Answer Checker Online: Instant Rubric-Based Evaluation
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Mains Answer Checker Online
              </p>
              <Link
                href="/services/upsc-mains-answer-checker-online"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 12 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI Study App for UPSC Aspirants: Why Dynamic Test Structure Extraction Beats Static Question Matching
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                AI Study App for UPSC Aspirants
              </p>
              <Link
                href="/services/ai-study-app-for-upsc-aspirants"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 13 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Best AI App for UPSC 2025: The RAG-Driven Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Best AI App for UPSC 2025
              </p>
              <Link
                href="/services/best-ai-app-for-upsc-2025"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 14 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Best AI Tool for UPSC Preparation: Why Exam-Specific Architecture Matters
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Best AI Tool for UPSC Preparation
              </p>
              <Link
                href="/services/best-ai-tool-for-upsc-preparation"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 15 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Preparation App with AI: The Architecture That Separates Serious Aspirants from Casual Learners
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Preparation App with AI
              </p>
              <Link
                href="/services/upsc-preparation-app-with-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 16 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI vs Traditional UPSC Coaching: The Batch Model Bottleneck
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                AI vs Traditional UPSC Coaching
              </p>
              <Link
                href="/services/ai-vs-traditional-upsc-coaching"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 17 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Free AI Tool for UPSC Notes: The RAG Architecture Advantage Over Static Note Makers
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Free AI Tool for UPSC Notes
              </p>
              <Link
                href="/services/free-ai-tool-for-upsc-notes"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 18 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC AI Mock Test Platform: The Structural Logic Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC AI Mock Test Platform
              </p>
              <Link
                href="/services/upsc-ai-mock-test-platform"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 19 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                Best App for UPSC Mains Writing Practice: The Structural Learning Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Best App for UPSC Mains Writing Practice
              </p>
              <Link
                href="/services/best-app-for-upsc-mains-writing-practice"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 20 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC Study App with Current Affairs: The Structural Intelligence Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC Study App with Current Affairs
              </p>
              <Link
                href="/services/upsc-study-app-with-current-affairs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 21 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                AI Powered UPSC Coaching Alternative: The Test Structure Extraction Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                AI Powered UPSC Coaching Alternative
              </p>
              <Link
                href="/services/ai-powered-upsc-coaching-alternative"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 22 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                UPSC App with PDF Quiz Maker: The Test Pattern Extraction Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                UPSC App with PDF Quiz Maker
              </p>
              <Link
                href="/services/upsc-app-with-pdf-quiz-maker"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 23 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-emerald-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full items-center w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 flex items-center justify-center mb-6 text-[#6366f1] border border-indigo-100/50 group-hover:scale-110 group-hover:bg-[#6366f1] group-hover:text-white transition-all duration-300 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-2xl font-black mb-3 text-[#0f172a] group-hover:text-[#6366f1] transition-colors tracking-tight">
                PrepAssist vs Unacademy AI: The Test Structure Extraction Advantage
              </h1>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist vs Unacademy AI
              </p>
              <Link
                href="/services/prepassist-vs-unacademy-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
