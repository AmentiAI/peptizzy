import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const BASE = 'https://www.peptidesmuscle.com'

const LAST_UPDATED = '2026-03-21'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/products`,         lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/stacks`,           lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looks-maxing`,     lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/anti-aging`,       lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/body-composition`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guide`,            lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/learn`,            lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,              lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/tools`,            lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,          lastModified: LAST_UPDATED, changeFrequency: 'yearly',  priority: 0.4 },
    // SEO content pages
    { url: `${BASE}/retatrutide-complete-guide-results-dosage`,       lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wolverine-stack-bpc-157-tb-500-guide`,            lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tirzepatide-vs-semaglutide-vs-retatrutide`,       lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looksmaxxing-peptides-guide-men`,                 lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/peptide-stacking-guide`,                          lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cjc-1295-ipamorelin-results-timeline`,            lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ghk-cu-before-and-after-guide`,                   lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/how-to-inject-peptides-beginners-guide`,          lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/snap-8-vs-botox-peptide-alternative`,             lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/epithalon-anti-aging-telomere-peptide-guide`,     lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const stackPages: MetadataRoute.Sitemap = stacks.map(s => ({
    url: `${BASE}/stacks/${s.id}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...stackPages]
}
