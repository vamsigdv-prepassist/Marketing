"use client";

import { useEffect, useState } from "react";
import { getPublishedBlogPosts, BlogPost } from "@/lib/blog";
import Link from "next/link";
import { Loader2, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";

export default function BlogIndexPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getPublishedBlogPosts();
                // Sort by date descending
                setBlogs(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/20 pt-24">
            <Header />
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a] mb-4">
                        PrepAssist <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Insights</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        Expert strategies, exam analysis, and preparation techniques to accelerate your UPSC journey.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center p-20">
                        <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.length === 0 && (
                            <div className="col-span-1 md:col-span-2 text-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm text-slate-500">
                                No articles published yet. Check back soon!
                            </div>
                        )}
                        {blogs.map(blog => (
                            <Link href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
                                {blog.coverImage ? (
                                    <div className="w-full h-48 md:h-56 relative overflow-hidden bg-slate-100">
                                        <Image src={blog.coverImage} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 md:h-56 bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center p-6 text-center">
                                        <span className="text-xl font-bold text-indigo-900/30 font-serif italic line-clamp-2">{blog.title}</span>
                                    </div>
                                )}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{blog.title}</h2>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-indigo-600">
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
