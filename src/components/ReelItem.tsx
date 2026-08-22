"use client";

import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";
import { Play, Pause, ExternalLink, Volume2, VolumeX, Zap, BookOpen, Calendar, Sparkles, PlayCircle, ShoppingBag, ArrowRight, Star, Gift, Flame, CheckCircle } from "lucide-react";
import { handleMobileRedirect } from "@/lib/mobile_redirect";
import MuxVideo from "@mux/mux-video-react";

interface Reel {
  id: string;
  title: string;
  description: string;
  videoUrl?: string; // Legacy R2
  playbackId?: string; // Mux HLS
  courseLink?: string;
  ctaLabel?: string;
  ctaIcon?: string;
}


const renderCtaIcon = (iconId?: string, className: string = "w-4 h-4") => {
  switch (iconId) {
    case "zap": return <Zap className={className} />;
    case "book-open": return <BookOpen className={className} />;
    case "calendar": return <Calendar className={className} />;
    case "sparkles": return <Sparkles className={className} />;
    case "play-circle": return <PlayCircle className={className} />;
    case "shopping-bag": return <ShoppingBag className={className} />;
    case "arrow-right": return <ArrowRight className={className} />;
    case "star": return <Star className={className} />;
    case "gift": return <Gift className={className} />;
    case "flame": return <Flame className={className} />;
    case "check-circle": return <CheckCircle className={className} />;
    case "external-link":
    default:
      return <ExternalLink className={className} />;
  }
};

export default function ReelItem({ reel, isGlobalMuted, setIsGlobalMuted }: { reel: Reel, isGlobalMuted: boolean, setIsGlobalMuted: (val: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            setIsPlaying(true);
          } else {
            setInView(false);
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getCtaConfig = (courseLink?: string, customLabel?: string, customIcon?: string) => {
    const link = (courseLink || '').trim();
    if (!link) return null;

    const lower = link.toLowerCase();
    let defaultType = 'website';
    let defaultLabel = 'Visit Website';
    let defaultIcon = 'external-link';

    if (lower.includes('/pricing') || lower.includes('pricing')) {
      defaultType = 'pricing';
      defaultLabel = 'View Pricing';
      defaultIcon = 'zap';
    } else if (lower.includes('schedule-appointment') || lower.includes('appointment')) {
      defaultType = 'appointment';
      defaultLabel = 'Book Appointment';
      defaultIcon = 'calendar';
    } else if (lower.includes('purchase-courses')) {
      defaultType = 'courses';
      defaultLabel = 'Explore Courses';
      defaultIcon = 'book-open';
    } else if (lower.includes('learn.prepassist.in')) {
      defaultType = 'courses';
      defaultLabel = 'Learning Hub';
      defaultIcon = 'book-open';
    }

    return {
      type: defaultType,
      label: customLabel && customLabel.trim() ? customLabel.trim() : defaultLabel,
      icon: customIcon && customIcon.trim() ? customIcon.trim() : defaultIcon,
      url: link,
    };
  };

  const ctaConfig = getCtaConfig(reel.courseLink, reel.ctaLabel, reel.ctaIcon);

  const handlePurchaseClick = (e: React.MouseEvent) => {
    if (!ctaConfig) return;
    const url = ctaConfig.url;

    if (ctaConfig.type === 'pricing') {
      window.location.href = url;
    } else if (ctaConfig.type === 'website') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Courses / Appointment
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div ref={containerRef} className="w-full h-full relative bg-slate-50 flex items-center justify-center overflow-hidden">
      
      {/* Desktop-only Metadata (Left Side) */}
      <div className="hidden sm:flex absolute bottom-8 md:bottom-[calc(50vh-325px)] left-8 md:left-16 lg:left-[calc(50%-450px)] xl:left-[calc(50%-550px)] w-[300px] md:w-[350px] max-h-[350px] flex-col z-20">
        <h2 className="text-slate-900 text-3xl font-black mb-3 leading-tight tracking-tight shrink-0">{reel.title}</h2>
        <div className="overflow-y-auto hide-scrollbar mb-6 shrink pr-2">
          <p className="text-slate-600 text-base leading-relaxed">{reel.description}</p>
        </div>
        {ctaConfig && (
          <div className="shrink-0 mt-auto">
            <button
              onClick={handlePurchaseClick}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              {ctaConfig.label}
            </button>
          </div>
        )}
      </div>

      {/* Video Container (Responsive) */}
      <div className="w-full h-full sm:w-[320px] sm:h-[580px] md:w-[360px] md:h-[650px] bg-black sm:rounded-2xl overflow-hidden sm:shadow-2xl sm:border sm:border-slate-200 relative shrink-0">
        {inView ? (
          reel.playbackId ? (
            <MuxVideo
              ref={videoRef}
              playbackId={reel.playbackId}
              poster={`https://image.mux.com/${reel.playbackId}/thumbnail.png`}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isGlobalMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
            />
          ) : reel.videoUrl ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isGlobalMuted}
              playsInline
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
            />
          ) : null
        ) : (
          <img 
            src={reel.playbackId ? `https://image.mux.com/${reel.playbackId}/thumbnail.png` : undefined} 
            alt={reel.title} 
            className="w-full h-full object-cover"
          />
        )}

        {/* Paused Overlay: Play button (Center) */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-auto bg-black/20 transition-all duration-300"
            onClick={togglePlay}
          >
            <button className="w-16 h-16 shrink-0 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition shadow-md">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </button>
          </div>
        )}

        {/* Desktop Mute Button (Top Right Inside Video) */}
        <div className="hidden sm:block absolute top-4 right-4 z-30">
          <button
            onClick={(e) => { e.stopPropagation(); setIsGlobalMuted(!isGlobalMuted); }}
            className="w-10 h-10 shrink-0 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition shadow-sm"
          >
            {isGlobalMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile-only Bottom Overlay (Hidden on Desktop) */}
        <div className="sm:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10 pb-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-white text-xl font-black mb-2 text-shadow-sm leading-tight">{reel.title}</h2>
            <p className="text-white/90 text-sm mb-5 line-clamp-2 leading-relaxed">
              {reel.description}
            </p>
            <div className="flex justify-between items-center pointer-events-auto w-full">
              {ctaConfig ? (
                <button
                  onClick={handlePurchaseClick}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2 text-sm"
                >
                  {renderCtaIcon(ctaConfig.icon, "w-4 h-4")}
                  {ctaConfig.label}
                </button>
              ) : <div />}
              
              {/* Mobile Mute Button (Always Visible, Bottom Right) */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsGlobalMuted(!isGlobalMuted); }}
                className="w-10 h-10 min-w-[40px] aspect-square p-0 shrink-0 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition shadow-sm"
              >
                {isGlobalMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scrubber Bar (Draggable) */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 cursor-pointer z-40 group hover:h-1.5 transition-all touch-none"
          onPointerDown={(e) => {
            e.stopPropagation();
            e.currentTarget.setPointerCapture(e.pointerId);
            if (videoRef.current && videoRef.current.duration) {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              videoRef.current.currentTime = percent * videoRef.current.duration;
              setProgress(percent * 100);
            }
          }}
          onPointerMove={(e) => {
            if (e.buttons === 1) { // 1 means primary button (or touch) is pressed
              e.stopPropagation();
              if (videoRef.current && videoRef.current.duration) {
                const rect = e.currentTarget.getBoundingClientRect();
                const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                videoRef.current.currentTime = percent * videoRef.current.duration;
                setProgress(percent * 100);
              }
            }
          }}
        >
          <div 
            className="h-full bg-white/60 relative transition-all duration-75 ease-linear shadow-[0_0_5px_rgba(255,255,255,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  );
}
