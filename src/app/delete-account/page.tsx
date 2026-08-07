import React from 'react';
import { ShieldCheck, Mail, AlertTriangle, ArrowLeft, Trash2, CheckCircle2, Globe } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Your Account - PrepAssist',
  description: 'Information regarding how to delete your PrepAssist account and data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Data Privacy
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-rose-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Delete Your Account</h1>
          </div>

          <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
            At PrepAssist, we respect your privacy and give you full control over your account and personal data. You can permanently delete your PrepAssist account and associated data at any time.
          </p>

          <hr className="border-slate-100 mb-10" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              How to Delete Your Account
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  From the App (Recommended)
                </h3>
                <ol className="flex flex-col gap-3 text-slate-600 font-medium ml-2 border-l-2 border-indigo-100 pl-4">
                  <li>Open PrepAssist app.</li>
                  <li>Sign in to your account.</li>
                  <li>Go to <strong>Profile &rarr; Settings</strong>.</li>
                  <li>Tap <strong>Delete Account</strong>.</li>
                  <li>Confirm the deletion.</li>
                </ol>
                <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 font-bold bg-emerald-50 px-3 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  Processed immediately
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Contact Support
                </h3>
                <p className="text-slate-600 font-medium mb-4">
                  If you are unable to access your account, you can request deletion by contacting us via email.
                </p>
                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                  <p className="text-sm text-slate-500 mb-1">Email To:</p>
                  <a href="mailto:support@prepassist.in" className="text-indigo-600 font-bold flex items-center gap-2">
                    <Mail className="w-4 h-4" /> support@prepassist.in
                  </a>
                </div>
                <p className="text-sm text-slate-600 font-medium">Please include your registered email address, your full name, and use the subject <strong>"Account Deletion Request"</strong>.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What Data Will Be Deleted</h2>
            <p className="text-slate-600 font-medium mb-4">When your account is deleted, the following data is permanently removed:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['User Profile', 'Login Information', 'Personal Details', 'AI Chat History', 'Notes', 'Flashcards', 'Quizzes', 'Bookmarks', 'Cloud Vault Files', 'Study Progress', 'Preferences', 'Uploaded Documents'].map(item => (
                <div key={item} className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Data That May Be Retained
              </h2>
              <p className="text-amber-800 font-medium mb-4">
                Certain information may be retained where required by law or for legitimate business purposes, including:
              </p>
              <ul className="list-disc pl-5 text-amber-800/80 font-medium flex flex-col gap-2">
                <li>Payment and transaction records</li>
                <li>Tax invoices</li>
                <li>Fraud prevention and security logs</li>
              </ul>
              <p className="mt-4 text-sm text-amber-700/80 font-bold">
                * This retained information is not used for marketing purposes.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-4">
              After your account deletion request is confirmed, personal data is deleted immediately or within 30 days. Legally required financial records may be retained for the period required by applicable laws.
            </p>
          </section>

          <hr className="border-slate-100 mb-10" />

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help?</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              If you have questions regarding account deletion, please contact PrepAssist Support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@prepassist.in" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-md">
                <Mail className="w-5 h-5" /> support@prepassist.in
              </a>
              <a href="https://www.prepassist.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
                <Globe className="w-5 h-5" /> www.prepassist.in
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
