"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import MuxVideo from "@mux/mux-video-react";

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

export default function ReelsSection() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "reels"), orderBy("createdAt", "desc"), limit(4));
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
        console.error("Error subscribing to latest reels in real-time:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading || reels.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-24 relative z-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Course Trailers</span>
          </h2>
          <p className="text-slate-500 font-medium mt-2">Get a sneak peek into our premium courses.</p>
        </div>
        <Link 
          href="/reels" 
          className="group flex items-center gap-2 px-5 py-2.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-full font-bold transition-all shadow-sm shrink-0"
        >
          Explore More 
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {reels.map((reel) => (
          <Link 
            href="/reels" 
            key={reel.id} 
            className="w-[240px] sm:w-[280px] shrink-0 snap-start bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group relative aspect-[9/16]"
          >
            {reel.playbackId ? (
              <img 
                src={`https://image.mux.com/${reel.playbackId}/thumbnail.png?time=1`}
                alt={reel.title}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            ) : reel.videoUrl ? (
              <video 
                src={reel.videoUrl} 
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                muted
              />
            ) : null}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <div className="w-10 h-10 mb-3 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              <h3 className="text-white font-bold text-lg line-clamp-2 leading-tight shadow-sm mb-1">{reel.title}</h3>
              <p className="text-white/70 text-xs font-medium line-clamp-1">{reel.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
