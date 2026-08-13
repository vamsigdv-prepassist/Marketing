import { Metadata } from "next";
import { CheckCircle2, Sparkles, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

import { servicesMetadata } from "@/lib/constants/servicesMetadata";

export const metadata: Metadata = {
  title: servicesMetadata['smart-upsc-study-vault']?.metaTitle || "PrepAssist",
  description: servicesMetadata['smart-upsc-study-vault']?.metaDescription || "",
};

export default function SmartUPSCStudyVaultPage() {
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
               Smart UPSC Study Vault: One Trusted Place for Everything You Learn
            </h1>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 text-slate-600 font-medium leading-relaxed space-y-12">

          <section>
            <p className="mb-4 text-lg">A vault is a particular kind of place. It keeps things safe, gathers them in one location, protects them from loss, and lets you retrieve them when needed. The idea of a smart UPSC study vault borrows each of these properties, applying them to the material an aspirant accumulates over a long preparation. This article explores the vault through its defining qualities, showing how each property of a vault addresses a real problem in how aspirants store and use their study material. A vault is more than storage, and so is a good study vault.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">A vault gathers everything in one place</h3>
            <p className="mb-4">The first property of a vault is consolidation. A vault gathers valuables into a single place rather than leaving them scattered, and a study vault does the same for your material. Aspirants accumulate an enormous amount over their preparation: notes, documents, quizzes, current affairs, and this material is often spread across notebooks, apps, files, and devices. Scattered material is hard to use, because you can never be sure where anything is or whether you have it all. A vault solves this by bringing everything together.</p>
            <p className="mb-4">Consolidation is more valuable than it first appears, because material you cannot find is material you cannot use. A study vault that gathers all your preparation into one place turns a scattered collection into a coherent whole, and a single <Link href="/services/upsc-ai-app" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">UPSC AI app</Link> can act as that vault, holding your material together. Tools built for <Link href="/services/ai-for-upsc-preparation" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI for UPSC preparation</Link> aim to keep everything in one connected place, so that consolidation becomes the foundation for everything else the vault can do.</p>
            <p className="font-semibold text-slate-800">A vault gathers everything in one place, turning scattered material into a usable whole.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">A vault protects against loss</h3>
            <p className="mb-4">The second property of a vault is protection against loss. A vault keeps its contents safe, and a sturdy vault protects the material you have worked hard to build. Over a long preparation, material is easily lost, notebooks misplaced, files deleted, notes forgotten in some corner of a device, and every loss is a loss of the effort that produced it. The fear of losing material is real, and it is compounded when preparation stretches across years. A vault addresses this by keeping your material secure and retained.</p>
            <p className="mb-4">This protection matters because the material you accumulate is irreplaceable in the sense that remaking it costs time you cannot spare. A study vault that keeps your notes and understanding safe protects not just the material but the hours you invested in it. Knowing that your preparation is held securely lets you build on it with confidence rather than anxiety, which is one of the quieter benefits of keeping everything in a single trusted place.</p>
            <p className="font-semibold text-slate-800">A vault protects your material from loss, safeguarding the effort that made it.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">A vault lets you retrieve what you need</h3>
            <p className="mb-4">The third property of a vault is retrieval. A vault is only useful if you can get what you need out of it, and a smart study vault makes retrieval easy. Storing material is pointless if finding it is hard, and a vault that gathers everything but buries it is no better than scattered notes. What makes a study vault smart is that it lets you find and retrieve exactly what you need, quickly, whether that is a specific note, a concept, or a document.</p>
            <p className="mb-4">Smart retrieval is where the intelligence of the vault shows. Rather than searching manually through your material, you can ask for what you need and receive it, and you can test yourself on stored material by turning it into practice, which a <Link href="/services/pdf-to-quiz-generator-upsc" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">PDF to quiz generator for UPSC</Link> can do from your vault's contents. Retrieval turns a store of material into a working resource, because material you can reach instantly is material you can actually use. A vault you can search is a vault that serves you.</p>
            <p className="font-semibold text-slate-800">A smart vault lets you retrieve exactly what you need, turning storage into a working resource.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">A vault grows more valuable as it fills</h3>
            <p className="mb-4">The final property is that a vault grows more valuable as it fills. An empty vault holds little worth, but a full one holds a great deal, and a study vault becomes more useful the more of your preparation it contains. As you fill it over months, it accumulates into a comprehensive store of your understanding, and near the exam this full vault becomes an invaluable resource for revision and for answer writing, where an <Link href="/services/upsc-mains-answer-evaluation-ai" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">AI tool for UPSC Mains answer evaluation</Link> can help you use the material well.</p>
            <p className="mb-4">A study vault, then, is defined by these properties together, consolidating your material, protecting it, letting you retrieve it, and growing more valuable as it fills. The honest limits apply as always. A study vault cannot guarantee marks, a rank, or selection, and it does not replace the reading and understanding that fill it. What it offers is one trusted place for everything you learn, which brings order and security to a preparation that would otherwise scatter. When you want to compare plans, the <Link href="/pricing" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300 underline-offset-2">pricing</Link> page keeps the options clear.</p>
            <p className="mb-4">A smart UPSC study vault treats your preparation as something worth keeping safe and within reach. By consolidating, protecting, and letting you retrieve everything you learn, it turns the scattered material of a long preparation into one trusted store that grows more valuable with every month you fill it.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently asked questions</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">What is a smart UPSC study vault?</span>
                <span className="text-slate-700">A single trusted place that gathers, protects, and lets you retrieve your study material.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Why keep everything in one place?</span>
                <span className="text-slate-700">Because scattered material is hard to find and easy to lose.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Does it protect my material?</span>
                <span className="text-slate-700">Yes, it keeps your notes and understanding safe and retained.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Can I find things easily?</span>
                <span className="text-slate-700">Yes, smart retrieval lets you reach exactly what you need.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Will it guarantee marks?</span>
                <span className="text-slate-700">No, it aids preparation but cannot promise results.</span>
              </li>
              <li className="flex flex-col gap-2 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800">Does it replace my reading?</span>
                <span className="text-slate-700">No, your reading and understanding fill the vault.</span>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
