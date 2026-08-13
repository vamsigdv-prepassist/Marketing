import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['upsc-ai-document-search-tool']?.metaTitle || "PrepAssist",
  description: servicesMetadata['upsc-ai-document-search-tool']?.metaDescription || "",
};

export default function UPSCAIDocumentSearchToolPage() {
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
               UPSC AI Document Search: The End of Hunting Through Your Own Files
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">Every aspirant knows the frustration of searching through their own documents for something they know is there. The material exists, in a PDF, a report, a set of notes, but finding the exact passage means scrolling, guessing, and often giving up. UPSC AI document search changes this by replacing the old way of searching with something far more capable. The clearest way to see the difference is to set the two side by side, contrasting how traditional search fails and how AI document search succeeds, so the improvement is visible at every point.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The old way searches for exact words</h3>
            <p className="mb-4">Traditional document search works by matching exact words. You type a term, and it finds occurrences of that exact term in the document. This works only when you remember the precise wording used, and it fails the moment your search words differ from the document's words. If the document phrased an idea differently from how you remember it, traditional search finds nothing, even though the content is there. You are left guessing at the exact phrasing, trying variation after variation.</p>
            <p className="mb-4">AI document search works differently, matching meaning rather than exact words. It understands what you are looking for and finds the relevant content even when the wording differs, so you do not need to remember the precise phrasing. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> can search documents by meaning, which finds what you need where exact-word search would fail. The contrast is stark, because searching by meaning succeeds exactly where searching by words breaks down.</p>
            <p className="font-semibold text-slate-800">Old search needs the exact words, while AI search understands what you mean.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The old way finds only where you look</h3>
            <p className="mb-4">Traditional search finds only what you specifically search for, in the one document you are searching. If the material you need is spread across several documents, you must search each one separately, and if you do not remember which document holds it, you may not find it at all. This makes searching across a body of documents slow and unreliable, because you are limited to looking in one place at a time and only for exactly what you specify.</p>
            <p className="mb-4">AI document search can work across your whole body of documents, finding relevant material wherever it lives. Rather than searching one document at a time, you can find what you need across everything you have, which is invaluable when your material is spread across many files. A single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can hold your documents together so they can be searched as one. The contrast again favours the new way, because searching everything at once finds what searching one file at a time would miss.</p>
            <p className="font-semibold text-slate-800">Old search looks in one file at a time, while AI search can look across everything you have.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The old way returns a location, not an answer</h3>
            <p className="mb-4">Traditional search returns a location, pointing you to where a word appears and leaving you to read the surrounding text and work out the answer yourself. It finds the place but not the meaning, so you must still do the work of understanding once you arrive. This is better than nothing, but it is far from an answer, and when the passage is difficult, finding it is only the beginning of your struggle.</p>
            <p className="mb-4">AI document search can return an answer, not just a location, by understanding the relevant content and responding to your question about it. Rather than pointing you to a passage and leaving you to interpret it, it can explain what you were looking for, drawing on the document's content. You can also turn the material into practice, and a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> can generate questions from it. The contrast holds once more, because returning an answer is more useful than returning a mere location.</p>
            <p className="font-semibold text-slate-800">Old search shows you where to look, while AI search can tell you what the material means.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The old way leaves related material hidden</h3>
            <p className="mb-4">Traditional search finds only what you asked for, leaving related material hidden. If you search for one thing, you will not discover the related content that might also help, because exact-word search returns only exact matches. This means much of your own material stays unused, not because it is missing, but because your search never revealed it. You find the one thing you looked for and remain unaware of the rest.</p>
            <p className="mb-4">AI document search can surface related material, showing you not just what you asked for but connected content you might not have thought to seek. This brings more of your own material into use and helps you find connections across your documents. The understanding you gather this way strengthens your writing, and an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can check whether you have used it well. The honest limits remain. AI document search cannot guarantee marks, a rank, or selection, and it does not replace careful reading; answers drawn from documents should still be understood rather than accepted blindly. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear.</p>
            <p className="mb-4">Traditional search finds words in one file, while UPSC AI document search finds meaning across all of them and can explain what it finds. For an aspirant with a growing pile of documents, that difference ends the frustration of hunting through your own files.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently asked questions</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">What is UPSC AI document search?</span>
                <span className="text-slate-700">A way to search documents by meaning and find or explain relevant content.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">How is it better than normal search?</span>
                <span className="text-slate-700">It matches meaning, not exact words, so it finds what you mean.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Can it search many documents at once?</span>
                <span className="text-slate-700">Yes, it can search across your whole body of material.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Does it just find locations?</span>
                <span className="text-slate-700">No, it can return answers, not only point to passages.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Will it guarantee marks?</span>
                <span className="text-slate-700">No, it aids preparation but cannot promise results.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Should I still read carefully?</span>
                <span className="text-slate-700">Yes, material found should be understood, not accepted blindly.</span>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
