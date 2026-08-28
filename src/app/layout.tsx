import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prepassist.in"),
  title: {
    default: "PrepAssist | AI-Powered UPSC Civil Services Preparation",
    template: "%s | PrepAssist",
  },
  description: "Advanced AI platform for UPSC Civil Services Preparation. Turn notes into MCQs, evaluate Mains answers, and master concepts with AI.",
  keywords: [
    "UPSC AI",
    "UPSC Preparation",
    "AI MCQ Generator",
    "UPSC Mains Answer Evaluation",
    "PrepAssist",
    "Civil Services Exam",
    "IAS Preparation",
  ],
  authors: [{ name: "PrepAssist Team", url: "https://prepassist.in" }],
  creator: "PrepAssist",
  publisher: "PrepAssist",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prepassist.in",
    siteName: "PrepAssist",
    title: "PrepAssist | AI-Powered UPSC Civil Services Preparation",
    description: "Advanced AI platform for UPSC Civil Services Preparation. Practice MCQs, evaluate Mains answers, and study smarter.",
    images: [
      {
        url: "/ai_upsc_marketing.png",
        width: 1200,
        height: 630,
        alt: "PrepAssist UPSC AI Mentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepAssist | AI-Powered UPSC Civil Services Preparation",
    description: "Advanced AI platform for UPSC Civil Services Preparation. Practice MCQs, evaluate Mains answers, and study smarter.",
    images: ["/ai_upsc_marketing.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7SK33BJQWG"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7SK33BJQWG');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
