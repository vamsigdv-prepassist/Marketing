"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, FileText, ChevronRight } from "lucide-react";

export default function TermsOfService() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const next = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prev = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-6 selection:bg-emerald-500/20 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:text-indigo-800 transition-colors">
          <ChevronLeft className="w-5 h-5" /> Back to Platform
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-200 min-h-[700px] flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Terms of Service</h1>
                <p className="text-slate-500 text-sm font-medium mt-1">Effective Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-widest uppercase">
              Page {currentPage} of {totalPages}
            </div>
          </div>
          
          <div className="text-slate-700 leading-relaxed space-y-6 flex-1 animate-in fade-in duration-500">
            {currentPage === 1 && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acknowledgment and Acceptance</h2>
                  <p className="mb-4">
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  </p>
                  <p className="mb-4">
                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Interpretation and Definitions</h2>
                  <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li><strong>Credits</strong> refers to the internal ledger unit utilized to execute heavy AI operations within the platform.</li>
                    <li><strong>Service</strong> refers to the PrepAssist AI platform, including its cloud infrastructure, evaluating agents, and generative chat interfaces.</li>
                    <li><strong>User Content</strong> refers to documents, PDFs, essays, text, images, or other materials uploaded by You to the Cloud Vault.</li>
                    <li><strong>RAG</strong> stands for Retrieval-Augmented Generation, the mathematical process by which we index your files.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Platform Usage & AI Disclaimer</h2>
                  <p className="mb-4">PrepAssist is an advanced AI-augmented educational ecosystem built specifically for UPSC Civil Services preparation. While our multi-agent models are highly optimized and calibrated against official UPSC examiner rubrics, you must understand the probabilistic nature of Large Language Models (LLMs).</p>
                  <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 mb-4">
                    <p className="text-sm text-amber-900 font-semibold leading-relaxed">
                      <strong>CRITICAL DISCLAIMER:</strong> LLMs are inherently prone to hallucinations. You explicitly agree that PrepAssist is a supplementary preparation tool, not a definitive authority. You must independently verify all AI-generated facts, statistics, historical dates, constitutional articles, and legal judgments before utilizing them in actual UPSC examinations.
                    </p>
                  </div>
                  <p>We do not guarantee the absolute accuracy of model answers or evaluated Mains scores. They are statistical probabilities designed to simulate grading standards, but human discretion must always supersede AI outputs.</p>
                </section>
              </div>
            )}

            {currentPage === 2 && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. The Execution Credits System</h2>
                  <p className="mb-4">The platform operates via a dynamic 'Credits' ledger to ensure sustainable access to high-end GPU clusters. Heavy AI executions consume these Credits instantly to cover our backend GPU and API infrastructure costs.</p>
                  <ul className="list-disc pl-6 space-y-4 mb-4">
                    <li><strong>Heavy Operations:</strong> Computer Vision processing of lengthy handwritten essays, generating massive PDF-based Quizzes, or executing deep vector searches will consume significantly more credits than standard chat interactions.</li>
                    <li><strong>Dynamic Pricing:</strong> PrepAssist reserves the absolute right to algorithmically adjust the credit-cost of specific operations without prior notice, based directly on fluctuations in our underlying API bandwidth expenses and global compute costs.</li>
                    <li><strong>Finality of Consumption:</strong> Because API costs are incurred instantly during the generation process, all credit consumptions are final and non-refundable. If a generation fails due to a verified server error, our system will automatically attempt to reimburse the credits to your ledger.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Uploads & Copyright Integrity</h2>
                  <p className="mb-4">The Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.</p>
                  <p className="mb-4">You may only upload documents, unformatted PDFs, and essays to which you hold legal rights or which are strictly in the public domain. You are explicitly responsible for ensuring that your uploads do not violate intellectual property laws.</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-4">Anti-Piracy & Coaching Institute IP</h3>
                  <p className="mb-4">You are expressly prohibited from utilizing our RAG infrastructure to upload, vectorize, and query copyrighted material owned by third-party coaching institutes (e.g., paid test series, proprietary study materials) without their explicit permission. We reserve the right to instantly suspend or terminate workspaces found distributing or processing mass volumes of pirated UPSC materials.</p>
                </section>
              </div>
            )}

            {currentPage === 3 && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Account Suspension and Termination</h2>
                  <p className="mb-4">We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>
                  <p className="mb-4">Prohibited activities that will lead to immediate termination include: attempting to reverse-engineer our grading algorithms, automated scraping of our endpoints, executing injection attacks against our LLMs, or engaging in fraudulent credit regeneration schemes.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                  <p className="mb-4">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service in the past 30 days or $10 USD if You haven't purchased anything.</p>
                  <p className="mb-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for failing examinations, subjective loss of marks, loss of data, loss of privacy, or business interruption) arising out of or in any way related to the use of or inability to use the Service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
                  <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
                  <p className="mb-4">The laws of the jurisdiction in which the Company is headquartered, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                  <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company via our official support channels.</p>
                </section>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 mt-8 pt-8">
            <button 
              onClick={prev} 
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 text-slate-700"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <div key={page} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === page ? 'bg-emerald-500 w-6' : 'bg-slate-200'}`} />
              ))}
            </div>

            <button 
              onClick={next} 
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
