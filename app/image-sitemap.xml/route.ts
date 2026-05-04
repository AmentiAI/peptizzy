import { getCanonicalProducts } from '@/lib/variants'
import { canonicalProductHref } from '@/lib/variants'

const BASE = 'https://www.peptidesmuscle.com'

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

export function GET() {
  const products = getCanonicalProducts()

  const productUrls = products
    .filter(p => !!p.image)
    .map(p => {
      const loc = `${BASE}${canonicalProductHref(p.slug)}`
      // Image sitemap entries require absolute URLs. Product images are now
      // self-hosted under /images/products/, so prefix with BASE.
      const imgLoc = p.image.startsWith('http') ? p.image : `${BASE}${p.image}`
      const caption = `${p.name} — ${p.tagline}`
      const title = p.name
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <image:image>
      <image:loc>${escapeXml(imgLoc)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>
  </url>`
    })
    .join('\n')

  // Site logo / brand image surfaced on every page — list against the homepage.
  const homepage = `  <url>
    <loc>${BASE}</loc>
    <image:image>
      <image:loc>${BASE}/max-avatar.png</image:loc>
      <image:title>PeptidesMuscle</image:title>
      <image:caption>PeptidesMuscle — Elite Peptide Protocols</image:caption>
    </image:image>
  </url>`

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${homepage}
${productUrls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
