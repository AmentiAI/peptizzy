import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /go/ affiliate redirects: already noindex via X-Robots-Tag header,
        // but disallowing here saves crawl budget — no reason for bots to touch them.
        disallow: ['/api/', '/go/'],
      },
      { userAgent: 'Googlebot',    allow: '/' },
      { userAgent: 'Bingbot',      allow: '/' },
      { userAgent: 'Slurp',        allow: '/' },
      { userAgent: 'DuckDuckBot',  allow: '/' },
      { userAgent: 'Baiduspider',  allow: '/' },
      { userAgent: 'YandexBot',    allow: '/' },
      { userAgent: 'facebot',      allow: '/' },
      { userAgent: 'Twitterbot',   allow: '/' },
    ],
    sitemap: 'https://www.peptidesmuscle.com/sitemap.xml',
    host: 'https://www.peptidesmuscle.com',
  };
}
