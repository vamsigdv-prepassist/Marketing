"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ReelItem from "./ReelItem";
import { Loader2, Search, X } from "lucide-react";

interface Reel {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  playbackId?: string;
  courseLink?: string;
  ctaLabel?: string;
  ctaIcon?: string;
  createdAt?: any;
}

export default function ReelFeed() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "reels"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetched: Reel[] = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }) as Reel
        );
        setReels(fetched);
        setLoading(false);
      },
      (error) => {
        console.error("Error subscribing to reels in real-time:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  if (reels.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <p className="text-white text-xl font-bold">No reels available right now.</p>
      </div>
    );
  }

  const filteredReels = reels.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar relative bg-slate-50">
      
      {/* Search Overlay */}
      <div className="fixed top-24 right-4 sm:right-8 lg:right-12 z-50 flex items-center gap-2">
        {/* Desktop View: Always Expanded Search Bar */}
        <div className="hidden sm:block relative">
          <input
            type="text"
            placeholder="Search reels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 rounded-xl pl-5 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 lg:w-80 shadow-xl transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>

        {/* Mobile View: Collapsible Search Icon */}
        <div className="sm:hidden relative">
          {isSearching ? (
            <div className="relative animate-in fade-in duration-300">
              <input
                type="text"
                autoFocus
                placeholder="Search reels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48 shadow-xl"
              />
              <button 
                onClick={() => { setIsSearching(false); setSearchQuery(""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsSearching(true)}
              style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px", borderRadius: "50%" }}
              className="flex items-center justify-center p-0 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 transition shadow-sm group shrink-0"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>

      {filteredReels.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-50 snap-center relative">
          <div className="text-center">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-xl font-bold">No matching reels found</p>
          </div>
        </div>
      ) : (
        filteredReels.map((reel) => (
          <div key={reel.id} className="w-full h-full snap-center relative">
            <ReelItem 
              reel={reel} 
              isGlobalMuted={isGlobalMuted} 
              setIsGlobalMuted={setIsGlobalMuted} 
            />
          </div>
        ))
      )}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
