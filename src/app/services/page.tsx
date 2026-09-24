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
        <div className="text-center mt-8 mb-12 animate-mobile-enter">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">
            Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-mobile-enter" style={{ animationDelay: "100ms" }}>

          {/* New Card: UPSC Smart Alert Current Affairs */}
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
                UPSC Smart Alert Current Affairs: How PrepAssist Delivers Only What Matters to Your Preparation
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist filters noise with exam-probability weighting, contextual enrichment, and instant note creation.
              </p>
              <Link
                href="/services/upsc-smart-alert-current-affairs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Current Affairs to Mains Notes */}
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
                Current Affairs to Mains Notes: The PrepAssist Framework That Closes the Biggest Gap in UPSC Preparation
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist transforms raw current affairs into 7-section analytical notes, static cross-links, and practice prompts.
              </p>
              <Link
                href="/services/current-affairs-to-mains-notes"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Mains Notes Update */}
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
                UPSC Mains Notes Update: The PrepAssist System That Keeps Your Library Exam-Ready
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist audits structural consistency, checks content currency, and eliminates syllabus gaps before mains.
              </p>
              <Link
                href="/services/upsc-mains-notes-update"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Auto-Update UPSC Notes */}
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
                Auto-Update UPSC Notes: How PrepAssist Keeps Your Study Library Current All Year
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist monitors policies, budgets, and judgments to flag updates and keep your notes accurate all year.
              </p>
              <Link
                href="/services/auto-update-upsc-notes"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Current Affairs Alert App */}
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
                UPSC Current Affairs Alert App: How PrepAssist Keeps You Notified About What Actually Matters
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist filters out daily news noise and alerts you to syllabus-relevant developments with instant note conversion.
              </p>
              <Link
                href="/services/upsc-current-affairs-alert-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Daily Current Affairs UPSC App */}
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
                Daily Current Affairs UPSC App: Why PrepAssist Is the Only Tool Serious Aspirants Need
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist converts your daily reading into structured notes, spaced repetition revision, and mock test questions.
              </p>
              <Link
                href="/services/daily-current-affairs-upsc-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Mains Notes Current Affairs */}
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
                UPSC Mains Notes Current Affairs: The PrepAssist System That Builds Exam-Ready Answers
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist generates 7-part analytical mains notes and links current affairs directly into answer writing practice.
              </p>
              <Link
                href="/services/upsc-mains-notes-current-affairs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Current Affairs for Mains */}
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
                UPSC Current Affairs for Mains: The PrepAssist Approach to Writing Answers That Score
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist generates 7-part analytical notes and mains practice prompts to turn daily current affairs into high-scoring exam answers.
              </p>
              <Link
                href="/services/upsc-current-affairs-for-mains"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Current Affairs Daily */}
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
                UPSC Current Affairs Daily: The PrepAssist System That Keeps You Ahead Without Burning Out
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist structures daily current affairs into a 50-minute routine with automated note extraction, tagging, and spaced repetition.
              </p>
              <Link
                href="/services/upsc-current-affairs-daily"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: News to Notes UPSC App */}
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
                News to Notes UPSC App: How PrepAssist Converts Today&apos;s Headlines into Tomorrow&apos;s Exam Answers
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist automates the conversion of daily newspapers, PIB releases, and policy briefs into structured UPSC notes in under 2 minutes.
              </p>
              <Link
                href="/services/news-to-notes-upsc-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Summariser for UPSC Blogs */}
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
                AI Summariser for UPSC Blogs: Why General Tools Fall Short, and PrepAssist Does Not
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist&apos;s UPSC-trained AI summariser extracts facts, constitutional references, and answer-writing frameworks from blogs.
              </p>
              <Link
                href="/services/ai-summariser-for-upsc-blogs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Notes Builder AI */}
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
                UPSC Notes Builder AI: The PrepAssist System That Builds Your Study Library While You Read
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist builds a syllabus-aligned, cross-linked, and revision-scheduled UPSC notes library automatically as you read.
              </p>
              <Link
                href="/services/upsc-notes-builder-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Blog to Notes AI Tool */}
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
                The Blog-to-Notes AI Tool That Is Transforming How UPSC Aspirants Prepare
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist reorganizes blogs around what UPSC actually tests, converting articles into structured, exam-ready notes in under 90 seconds.
              </p>
              <Link
                href="/services/blog-to-notes-ai-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Content to Notes Converter */}
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
                UPSC Content to Notes Converter: Why PrepAssist Is the Tool Every Aspirant Needs in 2025
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist unifies books, articles, reports, and PDFs into structured, syllabus-tagged UPSC notes through a single interface.
              </p>
              <Link
                href="/services/upsc-content-to-notes-converter"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Automated UPSC Notes from Blogs */}
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
                Automated UPSC Notes from Blogs: How PrepAssist Eliminates the Biggest Time Drain in Civil Services Prep
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist automatically extracts, structures, and syllabus-tags high-value insights from daily blogs in under 2 minutes.
              </p>
              <Link
                href="/services/automated-upsc-notes-from-blogs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: One Click Notes UPSC */}
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
                One Click Notes for UPSC: Why PrepAssist Is the Fastest Way to Build Your Study Library
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist&apos;s one-click note generation converts raw content into structured, tagged, revision-ready notes in under 3 minutes.
              </p>
              <Link
                href="/services/one-click-notes-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Notes from Web Articles */}
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
                AI Notes from Web Articles for UPSC: How PrepAssist Turns Your Browser into a Study Tool
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist extracts and reorganizes relevant content from web articles into structured, syllabus-tagged notes in under 2 minutes.
              </p>
              <Link
                href="/services/ai-notes-from-web-articles"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Smart Notes Generator UPSC */}
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
                PrepAssist&apos;s Smart Notes Generator for UPSC: The Tool That Thinks Like a Topper
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist filters, structures, and cross-links policy documents and editorials into exam-ready notes that mirror topper frameworks.
              </p>
              <Link
                href="/services/smart-notes-generator-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Summarise Blog for UPSC Notes */}
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
                How to Summarise a Blog for UPSC Notes Without Wasting Hours Every Day
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist structures and summarizes long editorials and articles into concise, syllabus-mapped notes in seconds.
              </p>
              <Link
                href="/services/summarise-blog-for-upsc-notes"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Notes from Current Affairs */}
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
                UPSC Notes from Current Affairs: The PrepAssist System That Keeps You Ahead All Year
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist integrates daily current affairs directly into your static subject notes with auto-extraction and multi-subject tagging.
              </p>
              <Link
                href="/services/upsc-notes-from-current-affairs"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Auto Notes from Articles UPSC */}
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
                Auto Notes from Articles for UPSC: How PrepAssist Makes Daily Reading 3x More Productive
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist automatically filters, structures, and tags daily newspaper articles to relevant UPSC syllabus topics.
              </p>
              <Link
                href="/services/auto-notes-from-articles-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Notes Maker for UPSC */}
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
                How PrepAssist&apos;s AI Notes Maker for UPSC Is Saving Aspirants Hours Every Week
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist&apos;s AI eliminates mechanical note-taking by extracting structured facts, concepts, and arguments from articles and PDFs.
              </p>
              <Link
                href="/services/ai-notes-maker-for-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Best Notes App for UPSC */}
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
                Finding the Best Notes App for UPSC: Why PrepAssist Stands Above the Rest
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist is purpose-built for civil services aspirants with pre-built syllabus taxonomy, AI note generation, and spaced repetition.
              </p>
              <Link
                href="/services/best-notes-app-for-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Notes Making App */}
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
                The PrepAssist UPSC Notes-Making App That Is Changing How Aspirants Study
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist has developed a notes ecosystem designed around how UPSC aspirants actually study: across subjects, across sources, and across revision cycles.
              </p>
              <Link
                href="/services/upsc-notes-making-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Prelims AI Test Series */}
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
                Why PrepAssist&apos;s UPSC Prelims AI Test Series Is the Smartest Way to Crack GS Paper 1
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist has built an adaptive, intelligent test environment that understands your patterns, identifies weak zones, and builds revision loops.
              </p>
              <Link
                href="/services/upsc-prelims-ai-test-series"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Topic-Wise Quiz UPSC App */}
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
                Topic-Wise Quiz UPSC App: The Power of Testing One Topic at a Time
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist offers topic-wise UPSC quizzes so aspirants can test and strengthen understanding subject by subject.
              </p>
              <Link
                href="/services/topic-wise-quiz-upsc-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Generated MCQ UPSC */}
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
                AI-Generated MCQ UPSC: Answering the Doubts Aspirants Have About Them
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist's AI generates fresh, exam-relevant MCQs for UPSC preparation, helping aspirants test knowledge continuously.
              </p>
              <Link
                href="/services/ai-generated-mcq-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Best UPSC Quiz App */}
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
                Best UPSC Quiz App: A Practical Checklist for Choosing Well
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist is the go-to UPSC quiz app for aspirants, offering AI-generated questions across every subject and difficulty level.
              </p>
              <Link
                href="/services/best-upsc-quiz-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Prelims Practice Test App */}
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
                UPSC Prelims Practice Test App: Why Regular Practice Beats Last-Minute Cramming
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Practice for UPSC prelims with PrepAssist's dedicated test app, offering realistic questions and instant performance feedback.
              </p>
              <Link
                href="/services/upsc-prelims-practice-test-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Auto Quiz From Study Material */}
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
                Auto Quiz From Study Material: Reclaiming the Hours You Spend Making Questions
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist automatically generates quizzes from your study material, saving time while reinforcing what you've just learned.
              </p>
              <Link
                href="/services/auto-quiz-from-study-material"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Convert PDF to MCQ UPSC */}
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
                Convert PDF to MCQ UPSC: What Separates a Good Question From a Poor One
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Convert any UPSC study PDF into MCQs instantly with PrepAssist's AI, making self-testing fast, easy, and syllabus-relevant.
              </p>
              <Link
                href="/services/convert-pdf-to-mcq-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: PDF to Quiz Generator */}
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
                PDF to Quiz Generator: How a Document Becomes a Practice Set
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Turn any study PDF into a quiz instantly with PrepAssist's AI-powered generator, perfect for quick self-testing and revision.
              </p>
              <Link
                href="/services/pdf-to-quiz-generator"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Mock Test Generator AI */}
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
                UPSC Mock Test Generator AI: The Anatomy of a Well-Built Practice Test
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Generate customized UPSC mock tests instantly with PrepAssist's AI, tailored to your syllabus coverage and preparation level.
              </p>
              <Link
                href="/services/upsc-mock-test-generator-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI Quiz Generator for UPSC */}
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
                AI Quiz Generator for UPSC: The Range of Questions It Can Build
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist's AI quiz generator creates UPSC-focused questions instantly, helping you test understanding across every topic.
              </p>
              <Link
                href="/services/ai-quiz-generator-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Quiz from PDF */}
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
                UPSC Quiz From PDF: Turning Your Own Study Material Into Daily Practice
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Generate UPSC quizzes directly from your PDF notes with PrepAssist, turning static material into active practice instantly.
              </p>
              <Link
                href="/services/upsc-quiz-from-pdf"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Prelims Mock Test Online */}
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
                UPSC Prelims Mock Test: What Each Attempt Is Really Teaching You
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Practice with PrepAssist's UPSC prelims mock tests, designed to simulate real exam conditions and sharpen your preparation.
              </p>
              <Link
                href="/services/upsc-prelims-mock-test-online"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Test Series Online */}
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
                UPSC Test Series Online: A Program That Carries You to the Exam
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist offers a comprehensive UPSC test series online, helping aspirants practice and track progress across all subjects.
              </p>
              <Link
                href="/services/upsc-test-series-online"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC AI Document Search Tool */}
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
                UPSC AI Document Search: The End of Hunting Through Your Own Files
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Search across all your UPSC documents instantly with PrepAssist's AI-powered document search, built for fast, accurate retrieval.
              </p>
              <Link
                href="/services/upsc-ai-document-search-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Retrieval AI Tool */}
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
                UPSC Retrieval AI Tool: Following a Question From Doubt to Answer
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist's retrieval AI tool pulls accurate, relevant answers from your UPSC study material instantly, whenever you need them.
              </p>
              <Link
                href="/services/upsc-retrieval-ai-tool"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Personal AI Study Assistant UPSC */}
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
                Personal AI Study Assistant UPSC: A Companion That Knows Your Preparation
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Get a personal AI study assistant for UPSC preparation with PrepAssist, offering tailored explanations and round-the-clock support.
              </p>
              <Link
                href="/services/personal-ai-study-assistant-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI-Powered Study Database UPSC */}
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
                AI-Powered Study Database UPSC: Treating Your Preparation as Data You Can Query
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist's AI-powered study database organizes UPSC material for fast retrieval, helping aspirants study smarter, not harder.
              </p>
              <Link
                href="/services/ai-powered-study-database-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Cloud Notes With AI Search */}
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
                UPSC Cloud Notes With AI Search: Finding the Right Note the Moment You Need It
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Access your UPSC notes from anywhere with PrepAssist's cloud storage and AI-powered search, finding exactly what you need instantly.
              </p>
              <Link
                href="/services/upsc-cloud-notes-ai-search"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Smart UPSC Study Vault */}
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
                Smart UPSC Study Vault: One Trusted Place for Everything You Learn
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Store and organize all your UPSC study material in PrepAssist's smart study vault, searchable and AI-enhanced for faster revision.
              </p>
              <Link
                href="/services/smart-upsc-study-vault"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: UPSC Knowledge Base AI */}
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
                UPSC Knowledge Base AI: Building a Connected Body of Understanding Over Time
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist builds a personalized UPSC knowledge base with AI, organizing your study material for quick, searchable access.
              </p>
              <Link
                href="/services/upsc-knowledge-base-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Chat With PDF UPSC */}
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
                Chat With PDF UPSC: Studying a Document as a Conversation
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Chat directly with your UPSC study PDFs using PrepAssist's AI, turning static notes into an interactive learning conversation.
              </p>
              <Link
                href="/services/chat-with-pdf-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Upload PDF and Ask Questions AI */}
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
                Upload PDF and Ask Questions AI: Turning Any Document Into a Study Session
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Upload your UPSC study PDFs to PrepAssist and ask AI questions directly, getting instant, accurate answers from your own material.
              </p>
              <Link
                href="/services/upload-pdf-ask-questions-ai"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: AI UPSC Notes App */}
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
                AI UPSC Notes App: Rethinking the Whole Life of a Note
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                Organize and understand your UPSC notes better with PrepAssist's AI-powered notes app, built for structured, exam-focused learning.
              </p>
              <Link
                href="/services/ai-upsc-notes-app"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* New Card: Smart Explanation App */}
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
                Smart Explanation App UPSC: What Actually Makes an Explanation Smart
              </h2>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed font-medium">
                PrepAssist's smart explanation app breaks down UPSC topics clearly, helping aspirants build genuine understanding.
              </p>
              <Link
                href="/services/smart-explanation-app-upsc"
                className="w-full flex items-center justify-center bg-[#6366f1] text-white font-bold py-3.5 rounded-full hover:bg-indigo-600 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View details</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

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
