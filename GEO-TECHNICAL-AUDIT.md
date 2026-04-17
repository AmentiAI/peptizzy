# GEO Technical SEO Audit — peptidesmuscle.com
Date: 2026-04-17

## Technical Score: 71/100

Overall: **Good foundation, one critical issue (the slug-rename 404s) already being fixed, plus moderate gaps in security headers and redirect hygiene.**

## Score Breakdown
| Category | Score | Status |
|---|---|---|
| Crawlability | 10/15 | Warn |
| Indexability | 8/12 | Warn |
| Security | 5/10 | Warn |
| URL Structure | 6/8 | Pass |
| Mobile Optimization | 9/10 | Pass |
| Core Web Vitals | 11/15 | Pass |
| Server-Side Rendering | 15/15 | Pass |
| Page Speed & Server | 13/15 | Pass |

---

## AI Crawler Access
robots.txt rule set: `User-Agent: *  Allow: /  Disallow: /api/, /go/`. No AI-specific user-agents. Default `*` rule covers everyone, so all AI bots are allowed — but there are no explicit entries that give trust signals.

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed (via `*`) | Add explicit `User-Agent: GPTBot` + `Allow: /` |
| Google-Extended | Google-Extended | Allowed (via `*`) | Add explicit entry — required for AI Overviews training |
| Googlebot | Googlebot | **Explicitly allowed** | No change |
| Bingbot | bingbot | **Explicitly allowed** | No change |
| PerplexityBot | PerplexityBot | Allowed (via `*`) | Add explicit entry |
| ClaudeBot | ClaudeBot | Allowed (via `*`) | Add explicit entry |
| Amazonbot | Amazonbot | Allowed (via `*`) | Add explicit entry |
| CCBot | CCBot | Allowed (via `*`) | Add explicit entry |
| FacebookBot | FacebookExternalHit | Allowed (via `*`) | Keep default |
| Bytespider | Bytespider | Allowed (via `*`) | Consider blocking (aggressive crawler) |
| Applebot-Extended | Applebot-Extended | Allowed (via `*`) | Add explicit entry |

---

## Critical Issues (fix immediately)

### C1. ~140 old product URLs return 404 (already in flight)
Commit `add67ef` (2026-04-13) renamed every slug in `lib/products.ts`. No 301 redirects were shipped. Live spot checks return HTTP 404 for `/products/bpc-157`, `/tb-500`, `/ghk-cu`, `/ipamorelin`, `/pt-141`, `/igf-1-lr3`, `/cjc-1295`, `/epithalon`, `/melanotan-2`, `/mots-c`, `/dsip`, `/mk-677`.

**Status:** redirect map committed to `next.config.js` locally this session. Deploy to take effect.

---

## Warnings (fix this month)

### W1. Security headers are thin
The only security header in production is `strict-transport-security: max-age=63072000`. Missing:

| Header | Impact |
|---|---|
| `X-Content-Type-Options: nosniff` | Prevents MIME sniffing; trust signal for Bingbot |
| `X-Frame-Options: SAMEORIGIN` | Blocks clickjacking |
| `Referrer-Policy: strict-origin-when-cross-origin` | Privacy; small ranking factor |
| `Content-Security-Policy` | XSS mitigation |
| `Permissions-Policy` | Modern replacement for Feature-Policy |

HSTS also lacks `includeSubDomains` and `preload`.

**Fix:** add a `headers()` function to `next.config.js`:

```js
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options',    value: 'nosniff' },
      { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }]
}
```

### W2. Redirect chain on bare-domain HTTP
- `http://peptidesmuscle.com/` → 308 → `https://peptidesmuscle.com/` → 301 → `https://www.peptidesmuscle.com/`

Two hops where one will do. Vercel's project settings let you collapse these into a single redirect to the canonical origin.

### W3. No explicit AI-crawler rules in robots.txt
All AI crawlers inherit `User-Agent: *` — which works, but robots.txt already has explicit entries for Googlebot, Bingbot, Slurp, etc. Add explicit AI entries so intent is obvious and future changes don't accidentally block them. Fix in `app/robots.ts`:

```ts
{ userAgent: 'GPTBot',             allow: '/' },
{ userAgent: 'ClaudeBot',          allow: '/' },
{ userAgent: 'PerplexityBot',      allow: '/' },
{ userAgent: 'Google-Extended',    allow: '/' },
{ userAgent: 'Applebot-Extended',  allow: '/' },
{ userAgent: 'CCBot',              allow: '/' },
{ userAgent: 'Amazonbot',          allow: '/' },
```

### W4. No `llms.txt`
`/llms.txt` returns 404. Increasingly referenced by AI systems (Perplexity, Anthropic) for site understanding.

### W5. No IndexNow
No IndexNow key file at `/.well-known/`. Bing + ChatGPT (via Bing) + Copilot benefit. Vercel has an IndexNow integration — one-click install.

---

## Recommendations (optimize this quarter)

- **R1.** Product images are served as PNG from the `phiogen.is` CDN. `next.config.js` already declares AVIF/WebP in `images.formats`, so `<Image>` will auto-convert when you pass the remote URL through `/_next/image`. Verify every `<img src="https://phiogen.is/...">` on the site goes through `next/image` and not a raw `<img>` tag.
- **R2.** 11 JS chunks on product pages is fine for Next.js App Router, but shared bundle is 87.1 KB. Audit with `next build --analyze` if you want to trim further.
- **R3.** Above-fold hero image on the product page is NOT lazy loaded (correct), but also no `fetchpriority="high"` preload — cheap LCP win.
- **R4.** `public/` contains a stray "New folder (29)" directory — clean up to prevent any accidental exposure.

---

## Detailed Findings

### Category 1: Crawlability — 10/15

| Check | Points | Evidence |
|---|---|---|
| robots.txt valid and complete | 3/3 | Served from `/robots.txt`, syntactically valid, sitemap declared |
| AI crawlers allowed | 4/5 | All allowed, but no explicit UA entries |
| XML sitemap present and valid | 3/3 | 305 URLs, correct XML, declares `lastModified` |
| Crawl depth ≤ 3 clicks | 2/2 | Homepage → /products → /products/[slug]. Good. |
| No erroneous noindex directives | **-2** | Not literally noindex, but 140 product URLs return 404 which is functionally "un-indexed." Penalty pending redirect deploy. |

### Category 2: Indexability — 8/12

- Canonical: **pass** — `<link rel="canonical" href="https://www.peptidesmuscle.com/products/bpc-157-10mg">` (self-referencing) (3/3)
- Duplicate content: **warn** — HTTP→HTTPS and non-www→www both redirect, but with a redirect chain instead of single-hop (2/3)
- Pagination: n/a (no paginated lists) (2/2)
- Hreflang: n/a (English only) (skip)
- Index bloat: **warn** — sitemap has 139 product URLs. Old indexed URLs (140+) currently 404 and will be "crawled then discarded" until redirects go live. Post-fix score recovers. (1/4)

### Category 3: Security — 5/10

| Check | Points | Evidence |
|---|---|---|
| HTTPS enforced with valid cert | 4/4 | TLS 1.3 via Vercel edge, HTTP→HTTPS redirect, no mixed content |
| HSTS header | 1/2 | Present but no `includeSubDomains` / `preload` |
| X-Content-Type-Options | 0/1 | Missing |
| X-Frame-Options | 0/1 | Missing |
| Referrer-Policy | 0/1 | Missing |
| Content-Security-Policy | 0/1 | Missing |

### Category 4: URL Structure — 6/8

- Clean, readable URLs: 2/2 — e.g. `/products/bpc-157-10mg`, `/how-to-inject-peptides-beginners-guide`
- Logical hierarchy: 1/2 — products under `/products/[slug]` is good; blog/guide pages all live at root (`/bpc-157-complete-guide`) instead of `/blog/...` or `/guides/...`, which flattens the taxonomy
- Redirect chains: 1/2 — HTTP/www chain is 2 hops (see W2)
- Parameter handling: 2/2 — no query-string duplicate pages observed

### Category 5: Mobile Optimization — 9/10

- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">` ✓
- Responsive layout: built with Tailwind; `style="font-size:clamp(36px, 5.5vw, 68px)"` on hero H1 — proper fluid scaling
- Tap targets: Tailwind defaults (`py-2`, `px-4`) typically produce 40–48px targets — spot check recommended
- Font sizes: base 16px (Tailwind default); one warning: hero H1 uses Playfair Display from Google Fonts — make sure `font-display: swap` is set via `next/font`

### Category 6: Core Web Vitals — 11/15 (estimated, no CrUX data)

- **LCP**: likely good. `dynamic = 'force-static'`, Vercel edge cache HIT observed, TTFB 131ms, next/image auto-conversion. Hero image optimization recommended (add `priority` + `fetchpriority="high"`).
- **INP**: likely good. App Router + limited client components + 87 KB shared JS.
- **CLS**: likely good. `next/image` fills width/height automatically.

Estimate: all three metrics in "Good" range. Full measurement via PageSpeed Insights / CrUX is recommended once redirects deploy.

### Category 7: Server-Side Rendering — 15/15

Verified via `curl` (no JS execution):
- H1 text present in raw HTML: ✓ "BPC-157 10mg"
- JSON-LD structured data in raw HTML: ✓ `Product`, `Offer`, `AggregateRating`, `FAQPage`, `BreadcrumbList`, `Organization`
- Meta tags in raw HTML: ✓ `<link rel="canonical">`, viewport, Open Graph
- Internal links in raw HTML: ✓

`app/products/[slug]/page.tsx` uses `export const dynamic = 'force-static'` + `generateStaticParams` — every slug is pre-rendered at build. Perfect SSR/SSG setup for AI crawlers.

### Category 8: Page Speed & Server Performance — 13/15

| Check | Points | Evidence |
|---|---|---|
| TTFB < 800ms | 3/3 | 131ms measured, 135ms on product page |
| Page weight < 2MB | 2/2 | Homepage 391 KB, product 128 KB raw HTML |
| Images optimized | 2/3 | next/image AVIF/WebP on, but verify all `phiogen.is` images go through `<Image>` not raw `<img>` |
| JS bundles reasonable | 2/2 | Shared JS 87.1 KB compressed, product page first-load 94.1 KB |
| Compression enabled | 2/2 | Vercel default: brotli/gzip |
| Cache headers on static | 1/2 | HTML `cache-control: public, max-age=0, must-revalidate` — correct for ISR; verify `/_next/static/*` assets carry long `immutable` cache (typical Vercel default) |
| CDN in use | 1/1 | `server: Vercel`, `x-vercel-cache: HIT`, edge iad1 |

---

## What to do, in order

1. **Deploy the redirect map** already in `next.config.js` (this session). This fixes C1.
2. **Add `headers()` block** to `next.config.js` (W1) — same PR.
3. **Add explicit AI-crawler entries** to `app/robots.ts` (W3) — same PR.
4. **Collapse the HTTP/www redirect chain** in Vercel project settings (W2) — no code change.
5. **Generate `llms.txt`** with `/geo-llmstxt https://www.peptidesmuscle.com` (W4).
6. **Enable IndexNow** via Vercel integration marketplace (W5).

Expected technical score after steps 1–3: **88/100**.
