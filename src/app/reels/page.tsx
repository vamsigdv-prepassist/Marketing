import ReelFeed from "@/components/ReelFeed";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrepAssist Reels - Course Trailers & Highlights",
  description: "Watch our short course trailers and highlights to discover what PrepAssist has to offer.",
};

export default function ReelsPage() {
  return (
    <>
      <Header />
      <div className="w-full h-[100dvh] pt-20 bg-black overflow-hidden relative">
        <ReelFeed />
      </div>
    </>
  );
}
