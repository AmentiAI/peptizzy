import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const BASE = 'https://www.peptidesmuscle.com'

// Dates reflect actual publish/update dates so lastmod is honest to Googlebot.
// Stale or future-dated lastmod harms crawl prioritization.
const SITE_LAUNCH  = '2026-03-01'
const RECENT_UPDATE = '2026-03-28'
// Slug rename + redirect map shipped 2026-04-17. Products re-dated so Google
// reprocesses every product URL and discovers the new 301 chain.
const PRODUCT_REINDEX = '2026-04-17'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: RECENT_UPDATE, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/products`,         lastModified: RECENT_UPDATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/blog`,             lastModified: RECENT_UPDATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/stacks`,           lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looks-maxing`,     lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/anti-aging`,       lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/body-composition`, lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guide`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/learn`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,              lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tools`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,          lastModified: SITE_LAUNCH,   changeFrequency: 'yearly',  priority: 0.4 },
    // Blog / SEO content pages — ordered chronologically
    { url: `${BASE}/bpc-157-complete-guide`,                          lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/igf-1-lr3-muscle-growth-guide`,                   lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/semaglutide-complete-guide`,                      lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/retatrutide-body-recomposition-looksmaxxing`,     lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/celebrities-famous-people-using-peptides`,        lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looksmaxxing-peptides-women`,                     lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/facial-looksmaxxing-peptides-guide`,              lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looksmaxxing-routine-daily-protocol`,             lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/peptides-for-hair-growth-loss`,                   lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/melanotan-2-looksmaxxing-tan`,                    lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looksmaxxing-peptides-guide-men`,                 lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ghk-cu-before-and-after-guide`,                   lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/snap-8-vs-botox-peptide-alternative`,             lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/epithalon-anti-aging-telomere-peptide-guide`,     lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cjc-1295-ipamorelin-results-timeline`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tirzepatide-vs-semaglutide-vs-retatrutide`,       lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/retatrutide-complete-guide-results-dosage`,       lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wolverine-stack-bpc-157-tb-500-guide`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/how-to-inject-peptides-beginners-guide`,          lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/peptide-stacking-guide`,                          lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tb-500-complete-guide`,                           lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/nad-plus-anti-aging-guide`,                       lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/tirzepatide-complete-guide`,                      lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-cognitive-performance-guide`,            lastModified: RECENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/cagrilintide-semaglutide-complete-guide`,         lastModified: '2026-04-01',  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/bacteriostatic-water-peptide-reconstitution-guide`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.8 },
    // New content pages — April 2026
    { url: `${BASE}/glp-1-peptides-complete-guide`,              lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-for-gut-health-leaky-gut`,          lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/thymosin-alpha-1-immune-peptide-guide`,      lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/dsip-sleep-optimization-peptide-guide`,      lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/kisspeptin-10-testosterone-hormone-guide`,   lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-for-joint-pain-arthritis`,          lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/aod-9604-fat-loss-peptide-guide`,            lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ghrp-6-complete-guide`,                      lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hexarelin-growth-hormone-peptide-guide`,     lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ipamorelin-complete-guide`,                  lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/looksmaxxing-research-peptides-beginners`,   lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/mk-677-ibutamoren-guide`,                    lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-for-collagen-skin-anti-aging`,      lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/pt-141-bremelanotide-guide`,                 lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/selank-semax-nootropic-peptide-guide`,       lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sermorelin-anti-aging-hgh-guide`,            lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-for-women-complete-guide`,          lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides-athletic-performance-sports`,       lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/fat-loss-peptides-complete-guide`,           lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/mots-c-mitochondrial-longevity-guide`,       lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
  ]

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: PRODUCT_REINDEX,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const stackPages: MetadataRoute.Sitemap = stacks.map(s => ({
    url: `${BASE}/stacks/${s.id}`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...stackPages]
}
