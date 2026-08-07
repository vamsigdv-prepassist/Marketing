"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { handleMobileRedirect } from "@/lib/mobile_redirect";

export default function Header() {
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-sm font-semibold tracking-wide transition-colors ${
      active ? "text-indigo-600 font-bold" : "text-slate-600 hover:text-indigo-600"
    }`;
  };

  return (
    <>
      {/* Ultra-Premium Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-3xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/1024x1024.png" 
              alt="PrepAssist Logo" 
              width={70} 
              height={70} 
              className="object-contain w-[50px] h-[50px] md:w-[70px] md:h-[70px] group-hover:opacity-80 transition-opacity" 
              unoptimized
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/#platform" className={navLinkClass("/#platform")}>The Platform</a>
            <a href="/#features" className={navLinkClass("/#features")}>Capabilities</a>
            <a href="http://localhost:3000/pricing" className={navLinkClass("/pricing")}>Billing</a>
            <Link href="/services" className={navLinkClass("/services")}>Services</Link>
            <Link href="/blog" className={navLinkClass("/blog")}>Blogs</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="http://localhost:3000/login" onClick={(e) => handleMobileRedirect(e, 'login')} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block">
              Sign In
            </a>
            <a href="http://localhost:3000/login?mode=register" onClick={(e) => handleMobileRedirect(e, 'register')} className="hidden sm:flex px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold text-sm transition-all items-center gap-2 shadow-md hover:shadow-lg">
              Register <ChevronRight className="w-4 h-4"/>
            </a>
            <button 
              aria-label="Toggle Mobile Menu" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay Native Binding */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-bold tracking-tight text-slate-800">
            <Link href="/#platform" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">The Platform</Link>
            <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Capabilities</Link>
            <a href="http://localhost:3000/pricing" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Billing Matrices</a>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Services</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">Blogs</Link>
            <div className="flex flex-col gap-4 mt-6">
              <a href="http://localhost:3000/login" onClick={(e) => { handleMobileRedirect(e, 'login'); setIsMobileMenuOpen(false); }} className="w-full py-4 text-center rounded-2xl bg-indigo-50 text-indigo-600 font-black">Sign In to Workspace</a>
              <a href="http://localhost:3000/login?mode=register" onClick={(e) => { handleMobileRedirect(e, 'register'); setIsMobileMenuOpen(false); }} className="w-full py-4 text-center rounded-2xl bg-slate-900 text-white font-black flex items-center justify-center gap-2 shadow-lg">Register Account <ChevronRight className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
