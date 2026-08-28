import { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/lib/blog';
import { servicesMetadata } from '@/lib/constants/servicesMetadata';

export const dynamic = 'force-dynamic';

// Fallback blog list in case Firestore is unreachable during static builds or downtime
const FALLBACK_BLOGS: Array<{ slug: string; createdAt: string }> = [
  { slug: 'ai-that-reads-your-upsc-notes', createdAt: '2026-08-13T07:59:25.721Z' },
  { slug: 'how-to-use-ai-for-upsc-preparation', createdAt: '2026-07-09T00:00:00.000Z' },
  { slug: 'line-by-line-explanation-upsc', createdAt: '2026-07-28T00:00:00.000Z' },
  { slug: 'rag-based-upsc-preparation', createdAt: '2026-08-13T07:47:55.623Z' },
  { slug: 'upsc-paragraph-wise-notes', createdAt: '2026-07-29T00:00:00.000Z' },
  { slug: 'upsc-mains-answer-writing-tips-ai', createdAt: '2026-07-09T12:49:27.335Z' },
];

function parseValidDate(dateInput: any, fallbackDateStr: string): Date {
  if (!dateInput) return new Date(fallbackDateStr);
  if (typeof dateInput?.toDate === 'function') {
    return dateInput.toDate();
  }
  const parsed = new Date(dateInput);
  return isNaN(parsed.getTime()) ? new Date(fallbackDateStr) : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prepassist.in';

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getPublishedBlogPosts();
    if (blogs && blogs.length > 0) {
      blogEntries = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: parseValidDate(blog.createdAt, '2026-08-01T00:00:00.000Z'),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    } else {
      blogEntries = FALLBACK_BLOGS.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (e) {
    console.error('Sitemap blog extraction error:', e);
    blogEntries = FALLBACK_BLOGS.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.createdAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  }

  const serviceEntries: MetadataRoute.Sitemap = Object.entries(servicesMetadata).map(([slug, meta]) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: parseValidDate(meta.publishedAt, '2026-08-08T17:30:45+05:30'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-08-25T13:14:24.000Z'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-08-13T08:00:00.000Z'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-08-13T17:45:14.000Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date('2026-08-08T17:30:45.000Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reels`,
      lastModified: new Date('2026-08-17T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-08-08T17:30:45.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-08-08T17:30:45.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...blogEntries,
    ...serviceEntries,
  ];
}
