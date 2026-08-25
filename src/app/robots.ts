import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://prepassist.in';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/blog', '/blog/', '/services', '/services/', '/pricing', '/privacy-policy', '/terms', '/reels'],
      disallow: ['/api/', '/delete-account'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
