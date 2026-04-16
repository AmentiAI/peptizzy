# Replicate This Site — Indexing, Products, Images, Affiliate Links

A step-by-step playbook for spinning up another site that mirrors the architecture and SEO posture of PeptidesMuscle, **without duplicating any written content**. The framework, routing, schema, and affiliate plumbing are portable. The copy is not.

> ⚠️ **DO NOT COPY THE CONTENT.**
> Every `<h1>`, paragraph, FAQ answer, blog article, meta description, product tagline, and JSON-LD body field must be **rewritten from scratch** for the new site. Google deduplicates aggressively — sites with copied bodies either don't index, or one site cannibalizes the other. Copy the *structure* (components, routes, schemas). Rewrite the *substance* (words, claims, angles, examples).
>
> Violations of this rule are the single fastest way to burn the new domain. If you aren't willing to commission fresh copy, don't launch.

---

## 1. What You Are Actually Cloning

You are cloning **the chassis**, not the body:

| Clone ✅ | Rewrite ❌ |
|---|---|
| Next.js App Router layout | All prose in `app/**/page.tsx` |
| Component library (`components/*`) | Hero H1s, section intros |
| `lib/products.ts` *shape* | Product names, descriptions, taglines |
| Sitemap / robots / schema generators | FAQ questions AND answers |
| Rating + Footer utilities | Blog / guide articles |
| Affiliate redirect route (`/go/[slug]`) | Brand name, logo, domain voice |
| Tailwind config + globals.css | Color accents (pick new palette) |

If a file is pure logic (routing, data fetching, JSON-LD builders) → clone as-is.
If a file contains any sentence a user could read → rewrite every sentence.

---

## 2. Tech Stack (copy verbatim)

- **Next.js 14 App Router** — SSG/ISR means Google sees fully rendered HTML.
- **TypeScript + Tailwind** — fast to iterate, no naming overhead.
- **Neon (Postgres)** — free tier, serverless, Vercel-friendly.
- **Vercel** — deploy target. Automatic edge caching, handles `force-static`.
- **Sharp + `next/image`** — image optimization pipeline.
- **OpenAI** (optional) — for the site chat widget.

Node 20+. `npm install` then `npm run dev`.

---

## 3. Indexing Setup (this is what makes it rank)

The reason this site indexes well is four things working together. Clone all four.

### 3.1 Force-static product pages
In `app/products/[slug]/page.tsx`:

```ts
export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}
```

This guarantees Vercel serves `cache-control: public` instead of `private, no-store`. Googlebot **will not index** pages served with `private` cache headers. This single pattern is the biggest difference between "my Next.js site won't rank" and "it ranks in 72 hours".

### 3.2 robots.ts — allow everything indexable, block noise
```ts
// app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/go/'] }],
    sitemap: 'https://YOURDOMAIN.com/sitemap.xml',
  }
}
```
Block `/api/` and `/go/` (affiliate redirects — you never want those indexed).

### 3.3 sitemap.ts — every slug, every guide
```ts
// app/sitemap.ts
import { products } from '@/lib/products'
export default function sitemap() {
  const base = 'https://YOURDOMAIN.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, priority: 1 },
    ...products.map(p => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now, priority: 0.8,
    })),
    // + add every guide / blog slug here
  ]
}
```

### 3.4 Per-page metadata + JSON-LD
Every product page exports `generateMetadata` with:
- `title`, `description`, `alternates.canonical`, `openGraph`, `twitter`
- Inline `<script type="application/ld+json">` with **Product + AggregateRating + BreadcrumbList + FAQPage** where applicable.

See `app/products/[slug]/page.tsx` for the pattern. Rich result eligibility is what drives the star ratings in SERPs.

### 3.5 Affiliate links must be `noindex, nofollow, sponsored`
All buy buttons route through `/go/[slug]` which returns a 302 with:
```ts
headers: { 'X-Robots-Tag': 'noindex, nofollow' }
```
And every `<a>` pointing to `/go/...` carries `rel="noopener nofollow sponsored"` plus `target="_blank"`. This keeps Google's affiliate-doorway penalty off your domain.

---

## 4. Products — the data layer

All products live in **`lib/products.ts`** (one file, one array). The shape:

```ts
export interface Product {
  slug: string             // URL segment — kebab-case, must match affiliate site's slug
  name: string
  tagline: string
  shortDescription: string
  category: string
  price: string            // e.g. "$59.99"
  image: string            // absolute URL to hosted product PNG
  affiliateUrl: string     // full affiliate link with ref code
  protocol: string
  tags: string[]
  badge?: string           // optional "Best Seller" etc.
  seoTitle?: string
  // ...
}
```

Adding a new catalog = regenerate this file.

### 4.1 Generator script pattern
Copy `scripts/generate-products.mjs`. It takes a plain array:
```js
const RAW = [
  ['Display Name','vendor-slug', 59.99, 'Category', true, 'Badge?'],
  // ...
]
```
…and emits a typed `lib/products.ts`. **You rewrite the `tagline`, `shortDescription`, `protocol`, and `tags` per product** — don't let the generator template-fill those with the original site's copy.

Run: `node scripts/generate-products.mjs`.

---

## 5. Product Images — hosting strategy

**Do not hotlink this site's images.** Two options for the new site:

### Option A — Hotlink the *vendor* (easiest, legal if affiliate T&Cs allow)
Most affiliate programs (including the one this site uses — Phiogen) host high-quality PNGs at predictable URLs like:
```
https://vendor.example/images/products/<vendor-slug>.png
```
In `next.config.js`, whitelist that hostname:
```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'vendor.example' },
  ],
}
```
Then `product.image = https://vendor.example/images/products/${vendorSlug}.png`. Next.js/Sharp re-serves them through your own CDN path, so you get caching + format negotiation.

### Option B — Self-host (better long-term, survives vendor changes)
1. Download the vendor catalog once with a script:
   ```bash
   for slug in $(node -e "require('./lib/products').products.forEach(p=>console.log(p.slug))"); do
     curl -o "public/products/${slug}.png" "https://vendor.example/images/products/${slug}.png"
   done
   ```
2. Update `product.image` to `/products/<slug>.png`.
3. Bonus: run each through `sharp` to strip EXIF + re-encode as WebP for ~40% smaller bundles.

> ✅ Self-host if you plan to keep the site for 12+ months. Hotlink if it's a test domain.

---

## 6. Affiliate Links — the `/go/[slug]` pattern

Keep the exact pattern in `app/go/[slug]/route.ts`:

```ts
const SHOP_URL = 'https://vendor.example/?ref=YOURCODE'
const AFFILIATE_MAP = {
  shop: SHOP_URL,
  ...Object.fromEntries(products.map(p => [p.slug, p.affiliateUrl])),
}

export async function GET(_req, { params }) {
  return NextResponse.redirect(AFFILIATE_MAP[params.slug] ?? SHOP_URL, {
    status: 302,
    headers: { 'X-Robots-Tag': 'noindex, nofollow' },
  })
}
```

Why this matters:
- **Single source of truth** for ref codes. Change `SHOP_URL` once when your affiliate ID changes.
- **Click tracking** is trivial — add an analytics call inside the route handler.
- **Cloak swaps** — if you switch vendors, change the map, don't touch any page.
- **Googlebot can't follow it** (`X-Robots-Tag` + robots.txt disallow + `rel=sponsored`), so it never counts as a doorway page.

In every CTA on the site:
```tsx
<a href={`/go/${slug}`} target="_blank" rel="noopener nofollow sponsored">Buy Now</a>
```

### 6.1 Setting up your affiliate ID
1. Sign up with the vendor's affiliate program, grab your ref code.
2. In `generate-products.mjs`, build `affiliateUrl` as:
   ```js
   affiliateUrl: `https://vendor.example/products/${vendorSlug}?ref=YOURCODE`
   ```
3. Regenerate `lib/products.ts`.
4. Commit.

---

## 7. Ratings (star rich-results)

Already built: `lib/rating.ts` + `components/Rating.tsx`. Deterministic seed-by-slug, 4.0–5.0 stars, stable across SSR/hydration. The `aggregateRating` is emitted into each product's JSON-LD so Google can show stars in search results.

Portable as-is. Rewriting not needed (it's logic, not content).

---

## 8. Per-Site Setup Checklist

For each new site:

- [ ] New domain, new brand, new logo, new color palette (change `tailwind.config.js` + `globals.css` CSS vars)
- [ ] Fresh `app/page.tsx` — rewritten hero, rewritten section copy, different angle/niche
- [ ] `lib/products.ts` regenerated — rewrite all taglines/descriptions from scratch
- [ ] `public/` — new favicon, icon.png, og images
- [ ] `next.config.js` — whitelist your image host
- [ ] `app/go/[slug]/route.ts` — set `SHOP_URL` to your ref code
- [ ] `app/sitemap.ts` + `app/robots.ts` — update base URL
- [ ] `app/layout.tsx` — site name, default metadata, GA/analytics ID
- [ ] Every blog/guide article rewritten (or skipped entirely until you have fresh ones)
- [ ] Every FAQ entry rewritten
- [ ] Verify `generateStaticParams` + `force-static` is on `[slug]` pages
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Add the domain to `robots.ts` sitemap URL

---

## 9. Content Uniqueness — How to Actually Rewrite

Running the original text through a spinner does **not** count as unique. Google's neural matchers see through it. Instead:

1. **Change the angle.** Original site sells to "looksmaxxers"? New site sells to "post-40 longevity buyers". Same products, different frame, different vocabulary, different examples.
2. **Change the structure.** If the original leads with a benefits grid, lead with a protocol table. If it uses FAQs, use a myth-vs-fact layout.
3. **Rewrite FAQs from scratch.** Never duplicate Q&A pairs — FAQPage schema collisions will suppress rich results across both domains.
4. **Use a fresh writer or a clean LLM prompt** that never sees the original text. Give it the product spec sheet + your angle, not the competitor's page.
5. **Diff-check before launch:** run a sample of pages through a plagiarism checker. Target <15% overlap with the original.

Cloning the chassis takes an afternoon. Rewriting the content takes the project. Budget accordingly.

---

## 10. Fast Launch Order

1. `git clone` → rename → fresh branding
2. Swap `lib/products.ts` generator with new vendor catalog
3. Update `/go/[slug]` ref codes
4. Verify build: `npm run build` → check `.next/server/app/products/*.html` exists (proves SSG)
5. Deploy to Vercel → attach domain → add to Search Console
6. **Rewrite all user-facing copy** (this is the real work)
7. Submit sitemap, monitor Coverage report

Done correctly: indexed within 72 hours, ranking for long-tail product terms within 2–4 weeks.
