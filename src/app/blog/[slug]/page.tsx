"use client";

import { useEffect, useState } from "react";
import { getBlogBySlug, BlogPost } from "@/lib/blog";
import { useParams, useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "react-quill-new/dist/quill.snow.css";
import Header from "@/components/Header";

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const slug = typeof params.slug === 'string' ? params.slug : '';
    
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) return;
            try {
                const data = await getBlogBySlug(slug);
                // If blog doesn't exist or is still a draft, return 404
                if (!data || data.status !== 'published') {
                    router.push('/404');
                    return;
                }
                setBlog(data);
                
                // Update SEO Meta Tags dynamically
                document.title = data.metaTitle || data.title;
                let metaDesc = document.querySelector('meta[name="description"]');
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }
                metaDesc.setAttribute('content', data.metaDescription || `Read ${data.title} on PrepAssist Insights.`);
            } catch (e) {
                console.error(e);
                router.push('/404');
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlog();
    }, [slug, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex justify-center items-center">
                <Loader2 className="w-12 h-12 animate-spin text-indigo-500" />
            </div>
        );
    }

    if (!blog) return null;

    // Strip <br> tags and replace &nbsp; non-breaking spaces with regular spaces.
    // Quill editor saves all spaces as &nbsp; which makes the browser treat the entire
    // paragraph as one giant word, causing mid-word line breaks.
    const cleanContent = blog.content
        .replace(/&nbsp;/gi, ' ')           // replace HTML entity non-breaking spaces
        .replace(/\u00A0/g, ' ')            // replace unicode non-breaking spaces
        .replace(/<br\s*\/?>/gi, ' ')       // replace <br> tags with a space
        .replace(/  +/g, ' ');              // collapse any double spaces

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 pb-20">
            {/* Navigation Header */}
            <Header />

            {/* Quill display styles: hide editor chrome, map font classes */}
            <style>{`
                /* Hide Quill editor chrome - only show content */
                .blog-article .ql-editor { padding: 0; border: none; }
                .ql-toolbar { display: none !important; }
                .ql-container { border: none !important; font-size: inherit !important; }

                /* Custom font family mappings are now in globals.css */

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
                        {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
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
