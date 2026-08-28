import { Metadata } from "next";
import { getBlogBySlug, getPublishedBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import Image from "next/image";
import "react-quill-new/dist/quill.snow.css";
import Header from "@/components/Header";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.status !== 'published') {
    return {
      title: "Article Not Found | PrepAssist",
      description: "The requested article could not be found.",
    };
  }

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || `Read ${blog.title} on PrepAssist Insights.`;
  const url = `https://prepassist.in/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: blog.createdAt,
      images: blog.coverImage ? [{ url: blog.coverImage }] : ["/ai_upsc_marketing.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.coverImage ? [blog.coverImage] : ["/ai_upsc_marketing.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  // Strip <br> tags and replace &nbsp; non-breaking spaces with regular spaces.
  const cleanContent = blog.content
    .replace(/&nbsp;/gi, ' ')
    .replace(/\u00A0/g, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/  +/g, ' ');

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || blog.title,
    datePublished: blog.createdAt,
    dateModified: blog.createdAt,
    image: blog.coverImage || "https://prepassist.in/ai_upsc_marketing.png",
    author: {
      "@type": "Organization",
      name: "PrepAssist",
      url: "https://prepassist.in",
    },
    publisher: {
      "@type": "Organization",
      name: "PrepAssist",
      logo: {
        "@type": "ImageObject",
        url: "https://prepassist.in/brand-logo.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://prepassist.in/blog/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation Header */}
      <Header />

      {/* Quill display styles: hide editor chrome, map font classes */}
      <style>{`
        /* Hide Quill editor chrome - only show content */
        .blog-article .ql-editor { padding: 0; border: none; }
        .ql-toolbar { display: none !important; }
        .ql-container { border: none !important; font-size: inherit !important; }

        /* Alignment classes */
        .ql-align-center { text-align: center !important; }
        .ql-align-right { text-align: right !important; }
        .ql-align-justify { text-align: justify !important; }

        /* Proper word wrapping for all content */
        .blog-article * { max-width: 100%; box-sizing: border-box; }
        .blog-article p, .blog-article li, .blog-article h1,
        .blog-article h2, .blog-article h3, .blog-article h4 {
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          hyphens: none;
        }
      `}</style>

      {/* HERO SECTION */}
      <div className={`relative w-full ${blog.coverImage ? 'aspect-video min-h-[350px] max-h-[85vh]' : 'bg-slate-100'} mb-12`}>
        {blog.coverImage && (
          <>
            <Image src={blog.coverImage} alt={blog.title} fill className="object-cover" unoptimized priority />
            <div className="absolute inset-0 bg-slate-900/60" />
          </>
        )}

        <div className={`relative z-10 w-full h-full max-w-4xl mx-auto px-6 ${blog.coverImage ? 'flex flex-col justify-center items-center text-center pt-8' : 'pt-32 pb-16 flex flex-col items-center text-center'}`}>
          <h1 className={`w-full text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${blog.coverImage ? 'text-white drop-shadow-md' : 'text-[#0f172a]'}`}>
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 box-border">
        {/* Date at the top right of the article description area */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </div>
        </div>

        {/* Rich Text Rendering Area */}
        <article
          className="blog-article prose prose-lg max-w-none prose-slate
                     prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                     prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                     prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-slate-100"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 font-medium">Enjoyed this article? Share it with your fellow aspirants.</p>
        </div>
      </div>
    </div>
  );
}
