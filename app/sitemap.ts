import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const BASE = 'https://peptidesmuscle.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/products`,    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/stacks`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/looks-maxing`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/anti-aging`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/body-composition`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/guide`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.4 },
  ]

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const stackPages: MetadataRoute.Sitemap = stacks.map(s => ({
    url: `${BASE}/stacks/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...stackPages]
}
