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
      // Traditional search crawlers
      { userAgent: 'Googlebot',         allow: '/' },
      { userAgent: 'Bingbot',           allow: '/' },
      { userAgent: 'Slurp',             allow: '/' },
      { userAgent: 'DuckDuckBot',       allow: '/' },
      { userAgent: 'Baiduspider',       allow: '/' },
      { userAgent: 'YandexBot',         allow: '/' },
      { userAgent: 'facebot',           allow: '/' },
      { userAgent: 'Twitterbot',        allow: '/' },
      // AI crawlers — explicit allow so intent is obvious and future edits don't
      // accidentally block them. All content is public; we want AI citation.
      { userAgent: 'GPTBot',            allow: '/' }, // ChatGPT / OpenAI
      { userAgent: 'OAI-SearchBot',     allow: '/' }, // ChatGPT Search
      { userAgent: 'ChatGPT-User',      allow: '/' }, // On-demand ChatGPT browsing
      { userAgent: 'ClaudeBot',         allow: '/' }, // Anthropic training
      { userAgent: 'Claude-Web',        allow: '/' }, // Anthropic live fetch
      { userAgent: 'PerplexityBot',     allow: '/' }, // Perplexity AI
      { userAgent: 'Perplexity-User',   allow: '/' }, // Perplexity on-demand
      { userAgent: 'Google-Extended',   allow: '/' }, // Gemini + AI Overviews training
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'CCBot',             allow: '/' }, // Common Crawl
      { userAgent: 'Amazonbot',         allow: '/' }, // Alexa / Amazon AI
      { userAgent: 'Meta-ExternalAgent', allow: '/' }, // Meta AI
      { userAgent: 'cohere-ai',         allow: '/' }, // Cohere
      { userAgent: 'Diffbot',           allow: '/' }, // Knowledge-graph provider many LLMs use
    ],
    sitemap: 'https://www.peptidesmuscle.com/sitemap.xml',
    host: 'https://www.peptidesmuscle.com',
  };
}
