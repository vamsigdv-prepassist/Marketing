"use client";

import { useState, useEffect } from "react";
import { createBlogPost, getBlogPosts, deleteBlogPost, BlogPost } from "@/lib/blog";
import { Loader2, Trash2, Edit3, Send, Save, ChevronRight, FileText, Globe, ImageIcon, Tag, Sparkles, ArrowLeft, Clock, BookOpen, BarChart2, CheckCircle, PenLine, Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("@/components/QuillWrapper"), {
    ssr: false,
    loading: () => <div className="h-96 flex items-center justify-center bg-slate-50 rounded-2xl"><Loader2 className="w-6 h-6 animate-spin text-indigo-400" /></div>
});

export default function BlogAdminPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [view, setView] = useState<'list' | 'editor'>('list');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [content, setContent] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [settingsTab, setSettingsTab] = useState<'details' | 'seo'>('details');

    const loadBlogs = async () => {
        setIsLoading(true);
        try {
            const data = await getBlogPosts();
            setBlogs(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        } catch (e) { console.error(e); }
        finally { setIsLoading(false); }
    };

    useEffect(() => { loadBlogs(); }, []);

    const resetForm = () => {
        setEditingId(null); setTitle(""); setSlug(""); setCoverImage("");
        setMetaTitle(""); setMetaDescription(""); setContent(""); setCreatedAt("");
        setErrorMsg(""); setSuccessMsg(""); setView('list');
    };

    const handleSave = async (status: 'draft' | 'published') => {
        if (!title.trim() || !content.trim()) return setErrorMsg("Title and Content are required.");
        const autoSlug = slug || title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
        setIsSaving(true); setErrorMsg(""); setSuccessMsg("");
        try {
            await createBlogPost({ title, slug: autoSlug, content, coverImage, metaTitle, metaDescription, status, createdAt: createdAt || undefined }, editingId || undefined);
            setSuccessMsg(status === 'published' ? 'Published!' : 'Saved as draft');
            setSlug(autoSlug);
            await loadBlogs();
            setTimeout(() => setSuccessMsg(""), 3000);
        } catch (e: any) { setErrorMsg(e.message); }
        finally { setIsSaving(false); }
    };

    const handleEdit = (blog: BlogPost) => {
        setEditingId(blog.id); setTitle(blog.title); setSlug(blog.slug);
        setCoverImage(blog.coverImage || ""); setMetaTitle(blog.metaTitle || "");
        setMetaDescription(blog.metaDescription || ""); setContent(blog.content);
        setCreatedAt(blog.createdAt || "");
        setErrorMsg(""); setSuccessMsg(""); setView('editor');
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this post permanently?")) return;
        try { await deleteBlogPost(id); if (editingId === id) resetForm(); await loadBlogs(); }
        catch (e) { console.error(e); }
    };

    const handleTitleChange = (val: string) => {
        setTitle(val);
        if (!editingId) setSlug(val.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'));
    };

    const modules = {
        toolbar: [
            [{ 'font': [false, 'serif', 'monospace', 'arial', 'comic-sans', 'courier-new', 'georgia', 'impact', 'lucida', 'tahoma', 'times-new-roman', 'trebuchet', 'verdana'] }, { 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'], ['clean']
        ],
    };

    const published = blogs.filter(b => b.status === 'published').length;
    const drafts = blogs.filter(b => b.status === 'draft').length;

    // ─── EDITOR VIEW ──────────────────────────────────────────────────────────
    if (view === 'editor') {
        return (
            <div className="flex flex-col h-full min-h-screen -m-4 md:-m-8 -mt-8">
                <div className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <button onClick={resetForm} className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors font-semibold group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            Blog Posts
                        </button>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        <span className="text-sm font-bold text-slate-800 max-w-[300px] truncate">{title || 'Untitled Post'}</span>
                        {editingId && <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 border border-sky-200">Editing</span>}
                    </div>
                    <div className="flex items-center gap-3">
                        {successMsg && <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600"><CheckCircle className="w-4 h-4" /> {successMsg}</span>}
                        {errorMsg && <span className="text-sm font-semibold text-rose-600">{errorMsg}</span>}
                        <button onClick={() => handleSave('draft')} disabled={isSaving} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all border border-slate-200 disabled:opacity-50">
                            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4" /> Save Draft</>}
                        </button>
                        <button onClick={() => handleSave('published')} disabled={isSaving} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md disabled:opacity-50">
                            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" /> Publish</>}
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden min-h-0">
                    <div className="flex-1 overflow-y-auto bg-[#fafafa]">
                        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
                            <input type="text" value={title} onChange={e => handleTitleChange(e.target.value)} placeholder="Your article title..." className="w-full text-4xl md:text-5xl font-black text-slate-900 bg-transparent border-none outline-none placeholder:text-slate-200 leading-tight tracking-tight mb-4" />
                            <div className="flex items-center gap-1.5 mb-10 pb-10 border-b border-slate-200">
                                <Globe className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                <span className="text-xs text-slate-400 font-mono">/blog/</span>
                                <input type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="auto-slug" className="text-xs text-indigo-500 font-mono bg-transparent border-none outline-none flex-1 min-w-0" />
                            </div>
                            <div className="blog-quill-premium">
                                <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} placeholder="Write something great..." className="min-h-[500px]" />
                            </div>
                        </div>
                    </div>

                    <div className="w-80 bg-white border-l border-slate-100 flex-shrink-0 overflow-y-auto">
                        <div className="p-4 border-b border-slate-100">
                            <div className="flex bg-slate-100 rounded-xl p-1">
                                <button onClick={() => setSettingsTab('details')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${settingsTab === 'details' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Post Details</button>
                                <button onClick={() => setSettingsTab('seo')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${settingsTab === 'seo' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>SEO</button>
                            </div>
                        </div>
                        <div className="p-5 space-y-6">
                            {settingsTab === 'details' ? (
                                <>
                                    <div>
                                        <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-400 mb-3"><ImageIcon className="w-3.5 h-3.5" /> Cover Image</label>
                                        {coverImage ? <div className="mb-3 rounded-2xl overflow-hidden h-40 border border-slate-100 shadow-sm"><img src={coverImage} alt="cover" className="w-full h-full object-cover" onError={() => setCoverImage('')} /></div> : <div className="mb-3 h-40 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 bg-slate-50"><ImageIcon className="w-6 h-6 mb-2" /><span className="text-xs font-semibold">No cover image</span></div>}
                                        <input type="text" value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="Paste image URL..." className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all" />
                                    </div>
                                    <div>
                                        <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                                            <Calendar className="w-3.5 h-3.5" /> Publish Date
                                        </label>
                                        <input
                                            type="date"
                                            value={createdAt ? createdAt.split('T')[0] : ''}
                                            onChange={(e) => {
                                                if (e.target.value) {
                                                    setCreatedAt(new Date(e.target.value).toISOString());
                                                } else {
                                                    setCreatedAt('');
                                                }
                                            }}
                                            className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-400 mb-3"><Tag className="w-3.5 h-3.5" /> Visibility</label>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /><div><p className="text-xs font-bold text-emerald-800">Publish</p><p className="text-[10px] text-emerald-600">Visible at /blog/slug</p></div></div>
                                            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200"><Save className="w-4 h-4 text-amber-600 flex-shrink-0" /><div><p className="text-xs font-bold text-amber-800">Draft</p><p className="text-[10px] text-amber-600">Hidden from public</p></div></div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Meta Title</label>
                                        <input type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} placeholder="Leave blank to use post title" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all" />
                                        <div className="mt-1.5 flex justify-between text-[11px] text-slate-400"><span>50–60 chars ideal</span><span className={(metaTitle || title).length > 60 ? 'text-rose-500 font-bold' : ''}>{(metaTitle || title).length}/60</span></div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Meta Description</label>
                                        <textarea value={metaDescription} onChange={e => setMetaDescription(e.target.value)} placeholder="Short description for search engines..." rows={4} className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all resize-none" />
                                        <div className="mt-1.5 flex justify-between text-[11px] text-slate-400"><span>150–160 chars ideal</span><span className={metaDescription.length > 160 ? 'text-rose-500 font-bold' : ''}>{metaDescription.length}/160</span></div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-slate-200" /><div className="flex-1 h-2.5 bg-slate-100 rounded-full" /></div>
                                        <div className="p-4"><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Search Preview</p><p className="text-sm font-bold text-blue-700 leading-snug mb-0.5 line-clamp-1">{metaTitle || title || 'Your Article Title'}</p><p className="text-xs text-emerald-700 mb-1 font-mono">prepassist.com › blog › {slug || 'slug'}</p><p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{metaDescription || 'Your meta description will appear here for readers browsing search results.'}</p></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                <style>{`
                    /* ── Toolbar wrapper ── */
                    .blog-quill-premium .ql-toolbar.ql-snow {
                        border: none !important;
                        background: #ffffff;
                        padding: 6px 12px !important;
                        display: flex;
                        align-items: center;
                        gap: 2px;
                        flex-wrap: wrap;
                        border-bottom: 1px solid #f1f5f9 !important;
                        position: sticky;
                        top: 0;
                        z-index: 10;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    }
                    /* ── Individual buttons ── */
                    .blog-quill-premium .ql-toolbar.ql-snow button {
                        width: 28px !important;
                        height: 28px !important;
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        border-radius: 8px !important;
                        border: none !important;
                        background: transparent !important;
                        color: #64748b !important;
                        transition: all 0.15s ease !important;
                        padding: 0 !important;
                    }
                    .blog-quill-premium .ql-toolbar.ql-snow button:hover {
                        background: #f1f5f9 !important;
                        color: #6366f1 !important;
                    }
                    .blog-quill-premium .ql-toolbar.ql-snow button.ql-active {
                        background: #eef2ff !important;
                        color: #6366f1 !important;
                    }
                    .blog-quill-premium .ql-toolbar.ql-snow button svg {
                        width: 16px !important;
                        height: 16px !important;
                    }
                    /* ── SVG colours ── */
                    .blog-quill-premium .ql-toolbar .ql-stroke { stroke: #64748b; }
                    .blog-quill-premium .ql-toolbar button:hover .ql-stroke,
                    .blog-quill-premium .ql-toolbar button.ql-active .ql-stroke { stroke: #6366f1; }
                    .blog-quill-premium .ql-toolbar .ql-fill { fill: #64748b; }
                    .blog-quill-premium .ql-toolbar button:hover .ql-fill,
                    .blog-quill-premium .ql-toolbar button.ql-active .ql-fill { fill: #6366f1; }
                    /* ── Select dropdowns (Header & Font) ── */
                    .blog-quill-premium .ql-toolbar.ql-snow .ql-picker.ql-header,
                    .blog-quill-premium .ql-toolbar.ql-snow .ql-picker.ql-font {
                        height: 28px !important;
                        border: 1px solid #e2e8f0 !important;
                        border-radius: 6px !important;
                        background: #f8fafc !important;
                        font-size: 11px !important;
                        font-weight: 700 !important;
                        color: #475569 !important;
                        padding: 0 6px !important;
                        min-width: 90px !important;
                    }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label,
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label {
                        border: none !important; padding: 0 !important; display: flex; align-items: center; height: 28px; font-size: 11px; font-weight: 700; color: #475569; line-height: 1;
                    }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label::before { content: 'Paragraph'; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label[data-value='1']::before { content: 'Heading 1'; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label[data-value='2']::before { content: 'Heading 2'; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label[data-value='3']::before { content: 'Heading 3'; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label[data-value='4']::before { content: 'Heading 4'; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-label svg,
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label svg { display: none; }
                    
                    /* Font labels */
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label::before { content: 'Sans Serif'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='serif']::before { content: 'Serif'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='monospace']::before { content: 'Monospace'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='arial']::before { content: 'Arial'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='comic-sans']::before { content: 'Comic Sans'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='courier-new']::before { content: 'Courier New'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='georgia']::before { content: 'Georgia'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='impact']::before { content: 'Impact'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='lucida']::before { content: 'Lucida'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='tahoma']::before { content: 'Tahoma'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='times-new-roman']::before { content: 'Times New Roman'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='trebuchet']::before { content: 'Trebuchet'; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-label[data-value='verdana']::before { content: 'Verdana'; }
                    /* ── Dropdown panel ── */
                    .blog-quill-premium .ql-toolbar .ql-picker-options {
                        border: 1px solid #e2e8f0 !important; border-radius: 12px !important; box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important; padding: 6px !important; background: #fff !important; margin-top: 4px !important; min-width: 140px !important;
                    }
                    .blog-quill-premium .ql-toolbar .ql-picker-item {
                        border-radius: 8px !important; padding: 8px 12px !important; font-size: 13px !important; font-weight: 600 !important; color: #475569 !important; transition: all 0.1s !important;
                    }
                    .blog-quill-premium .ql-toolbar .ql-picker-item:hover { background: #f1f5f9 !important; color: #6366f1 !important; }
                    .blog-quill-premium .ql-toolbar .ql-picker-item[data-value='1']::before { content: 'Heading 1'; font-size: 16px; font-weight: 800; }
                    .blog-quill-premium .ql-toolbar .ql-picker-item[data-value='2']::before { content: 'Heading 2'; font-size: 14px; font-weight: 800; }
                    .blog-quill-premium .ql-toolbar .ql-picker-item[data-value='3']::before { content: 'Heading 3'; font-size: 13px; font-weight: 700; }
                    .blog-quill-premium .ql-toolbar .ql-picker-item[data-value='4']::before { content: 'Heading 4'; font-weight: 700; }
                    .blog-quill-premium .ql-toolbar .ql-header .ql-picker-item:not([data-value])::before { content: 'Paragraph'; }
                    
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item:not([data-value])::before { content: 'Sans Serif'; font-family: sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='serif']::before { content: 'Serif'; font-family: serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='monospace']::before { content: 'Monospace'; font-family: monospace; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='arial']::before { content: 'Arial'; font-family: Arial, sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='comic-sans']::before { content: 'Comic Sans'; font-family: 'Comic Sans MS', cursive, sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='courier-new']::before { content: 'Courier New'; font-family: 'Courier New', Courier, monospace; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='georgia']::before { content: 'Georgia'; font-family: Georgia, serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='impact']::before { content: 'Impact'; font-family: Impact, sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='lucida']::before { content: 'Lucida'; font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='tahoma']::before { content: 'Tahoma'; font-family: Tahoma, Geneva, sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='times-new-roman']::before { content: 'Times New Roman'; font-family: 'Times New Roman', Times, serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='trebuchet']::before { content: 'Trebuchet'; font-family: 'Trebuchet MS', Helvetica, sans-serif; }
                    .blog-quill-premium .ql-toolbar .ql-font .ql-picker-item[data-value='verdana']::before { content: 'Verdana'; font-family: Verdana, Geneva, sans-serif; }

                    /* Content area fonts */
                    .blog-quill-premium .ql-editor .ql-font-serif { font-family: serif; }
                    .blog-quill-premium .ql-editor .ql-font-monospace { font-family: monospace; }
                    .blog-quill-premium .ql-editor .ql-font-arial { font-family: Arial, sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-comic-sans { font-family: 'Comic Sans MS', cursive, sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-courier-new { font-family: 'Courier New', Courier, monospace; }
                    .blog-quill-premium .ql-editor .ql-font-georgia { font-family: Georgia, serif; }
                    .blog-quill-premium .ql-editor .ql-font-impact { font-family: Impact, sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-lucida { font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-tahoma { font-family: Tahoma, Geneva, sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-times-new-roman { font-family: 'Times New Roman', Times, serif; }
                    .blog-quill-premium .ql-editor .ql-font-trebuchet { font-family: 'Trebuchet MS', Helvetica, sans-serif; }
                    .blog-quill-premium .ql-editor .ql-font-verdana { font-family: Verdana, Geneva, sans-serif; }

                    /* ── Group separators ── */
                    .blog-quill-premium .ql-toolbar.ql-snow .ql-formats {
                        display: inline-flex !important; align-items: center !important; gap: 2px !important; margin-right: 4px !important; padding-right: 6px !important; border-right: 1px solid #e2e8f0 !important;
                    }
                    .blog-quill-premium .ql-toolbar.ql-snow .ql-formats:last-child { border-right: none !important; margin-right: 0 !important; }
                    /* ── Editor ── */
                    .blog-quill-premium .ql-container.ql-snow { border: none !important; font-family: 'Georgia', serif; font-size: 18px; }
                    .blog-quill-premium .ql-editor { padding: 32px 0 !important; min-height: 500px; line-height: 1.85; color: #1e293b; }
                    .blog-quill-premium .ql-editor.ql-blank::before { color: #94a3b8; font-style: italic; left: 0; }
                    .blog-quill-premium .ql-editor h1 { font-size: 2.25rem; font-weight: 900; line-height: 1.2; margin: 0 0 1rem; font-family: system-ui, sans-serif; }
                    .blog-quill-premium .ql-editor h2 { font-size: 1.75rem; font-weight: 800; margin: 2rem 0 0.75rem; font-family: system-ui, sans-serif; }
                    .blog-quill-premium .ql-editor h3 { font-size: 1.35rem; font-weight: 700; margin: 1.5rem 0 0.5rem; font-family: system-ui, sans-serif; }
                    .blog-quill-premium .ql-editor h4 { font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.5rem; font-family: system-ui, sans-serif; }
                    .blog-quill-premium .ql-editor p { margin-bottom: 1.25rem; }
                    .blog-quill-premium .ql-editor a { color: #6366f1; text-decoration: underline; }
                    .blog-quill-premium .ql-editor strong { font-weight: 700; }
                    .blog-quill-premium .ql-editor em { font-style: italic; }
                    .blog-quill-premium .ql-editor ul, .blog-quill-premium .ql-editor ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
                    .blog-quill-premium .ql-editor li { margin-bottom: 0.35rem; }
                    .blog-quill-premium .ql-editor blockquote { border-left: 3px solid #6366f1; padding: 0.75rem 0 0.75rem 1.25rem; color: #64748b; font-style: italic; margin: 1.5rem 0; background: #f8f7ff; border-radius: 0 8px 8px 0; }
                    .blog-quill-premium .ql-editor img { max-width: 100%; border-radius: 12px; margin: 1rem 0; }
                `}</style>
            </div>
        );
    }

    // ─── LIST VIEW ────────────────────────────────────────────────────────────
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Blog Engine</h1>
                    <p className="text-slate-500 text-sm mt-1">Create, manage and publish articles to your public blog</p>
                </div>
                <button onClick={() => { resetForm(); setView('editor'); }} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm">
                    <PenLine className="w-4 h-4" /> Write New Post
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Total Posts', value: blogs.length, icon: <BookOpen className="w-5 h-5 text-indigo-500" />, bg: 'bg-indigo-50', border: 'border-indigo-100' },
                    { label: 'Published', value: published, icon: <Globe className="w-5 h-5 text-emerald-500" />, bg: 'bg-emerald-50', border: 'border-emerald-100' },
                    { label: 'Drafts', value: drafts, icon: <FileText className="w-5 h-5 text-amber-500" />, bg: 'bg-amber-50', border: 'border-amber-100' },
                ].map(stat => (
                    <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-2xl p-5 flex items-center gap-4`}>
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-white">{stat.icon}</div>
                        <div><p className="text-2xl font-black text-slate-900">{stat.value}</p><p className="text-xs font-bold text-slate-500">{stat.label}</p></div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-bold text-slate-800">All Posts</h2>
                    <span className="text-xs text-slate-400 font-semibold">{blogs.length} total</span>
                </div>
                {isLoading ? (
                    <div className="flex justify-center py-16"><Loader2 className="w-7 h-7 text-indigo-500 animate-spin" /></div>
                ) : blogs.length === 0 ? (
                    <div className="py-20 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4"><PenLine className="w-7 h-7 text-slate-400" /></div>
                        <h3 className="text-base font-bold text-slate-700 mb-1">No articles yet</h3>
                        <p className="text-sm text-slate-400 mb-6 max-w-xs">Start writing to publish your first blog article to PrepAssist readers</p>
                        <button onClick={() => { resetForm(); setView('editor'); }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm">Write First Article</button>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50/70">
                            <span className="col-span-5 text-xs font-black uppercase tracking-widest text-slate-400">Title</span>
                            <span className="col-span-2 text-xs font-black uppercase tracking-widest text-slate-400">Status</span>
                            <span className="col-span-3 text-xs font-black uppercase tracking-widest text-slate-400">URL</span>
                            <span className="col-span-2 text-xs font-black uppercase tracking-widest text-slate-400 text-right">Actions</span>
                        </div>
                        {blogs.map(blog => (
                            <div key={blog.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50/80 transition-colors group">
                                <div className="col-span-5 flex items-center gap-4 min-w-0">
                                    <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-50 to-violet-50 border border-slate-100 flex items-center justify-center">
                                        {blog.coverImage ? <img src={blog.coverImage} alt="" className="w-full h-full object-cover" /> : <FileText className="w-5 h-5 text-indigo-300" />}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-slate-800 text-sm truncate group-hover:text-indigo-700 transition-colors">{blog.title}</p>
                                        <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase px-2.5 py-1 rounded-full border ${blog.status === 'published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${blog.status === 'published' ? 'bg-emerald-500' : 'bg-amber-500'}`} />{blog.status}
                                    </span>
                                </div>
                                <div className="col-span-3 min-w-0"><span className="text-xs text-slate-400 font-mono truncate block">/blog/{blog.slug}</span></div>
                                <div className="col-span-2 flex items-center gap-2 justify-end">
                                    <button onClick={() => handleEdit(blog)} className="p-2 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors border border-sky-100"><Edit3 className="w-3.5 h-3.5" /></button>
                                    <button onClick={() => handleDelete(blog.id)} className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors border border-rose-100"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
