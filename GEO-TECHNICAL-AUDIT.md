# GEO Technical SEO Audit — peptidesmuscle.com
Date: 2026-04-21

## Technical Score: 95/100

Stack: Next.js on Vercel. Fully server-rendered, AI-crawler-friendly, globally cached.
Site-wide technical posture is excellent; remaining gaps are low-lift polish items.

## Score Breakdown

| Category | Score | Status |
|---|---|---|
| Crawlability | 15/15 | Pass |
| Indexability | 11/12 | Pass |
| Security | 9/10 | Pass |
| URL Structure | 8/8 | Pass |
| Mobile Optimization | 10/10 | Pass |
| Core Web Vitals | 12/15 | Pass (estimated — no field data) |
| Server-Side Rendering | 15/15 | Pass |
| Page Speed & Server | 15/15 | Pass |

## AI Crawler Access

Every major AI crawler is explicitly allowed in `robots.txt`. No blocks detected.

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed | — |
| OAI-SearchBot | OAI-SearchBot | Allowed | — |
| ChatGPT-User | ChatGPT-User | Allowed | — |
| ClaudeBot | ClaudeBot | Allowed | — |
| Claude-Web | Claude-Web | Allowed | — |
| PerplexityBot | PerplexityBot | Allowed | — |
| Perplexity-User | Perplexity-User | Allowed | — |
| Googlebot | Googlebot | Allowed | — |
| Google-Extended | Google-Extended | Allowed | — |
| Bingbot | Bingbot | Allowed | — |
| Applebot-Extended | Applebot-Extended | Allowed | — |
| CCBot | CCBot | Allowed | — |
| Amazonbot | Amazonbot | Allowed | — |
| Meta-ExternalAgent | Meta-ExternalAgent | Allowed | — |
| cohere-ai | cohere-ai | Allowed | — |
| Diffbot | Diffbot | Allowed | — |
| YandexBot, Baiduspider, DuckDuckBot, Slurp, facebot, Twitterbot | — | Allowed | — |

This is best-in-class AI crawler access. Disallows are correctly scoped to `/api/` and `/go/` (affiliate redirects).

## Critical Issues (fix immediately)

None.

## Warnings (fix this month)

1. **No Content-Security-Policy header.** All other security headers are present (HSTS preload, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). Add a CSP — even a report-only starting policy — to complete the security header set. Suggested starting header: `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' data: https: ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;` (tune to actual third-parties).

2. **IndexNow not implemented.** `/.well-known/indexnow-key.txt` returns 404. IndexNow accelerates Bing indexing, which feeds ChatGPT web search and Bing Copilot. Generate a key, add the key file, and ping `https://api.indexnow.org/indexnow?url=...&key=...` on page publish/update. Low effort, meaningful GEO upside on two platforms.

3. **Sitemap lastmod dates are uniform** (2026-03-28 or 2026-03-01 for most pages). Google treats identical lastmod dates across many URLs as a weaker signal. When editing a specific page, update only that URL's lastmod — don't bulk-reset. The `app/sitemap.ts` structure already uses per-cohort constants, which is the right shape; keep dates honest per content change.

## Recommendations (optimize this quarter)

1. **Confirm Core Web Vitals with field data.** Estimates above are from code-level inspection (preloaded hero images, code-split bundles, clamp-based responsive typography, Vercel edge cache). Pull CrUX / Search Console data to verify LCP < 2.5s, INP < 200ms, CLS < 0.1 at the 75th percentile. Infrastructure looks good; this is a verification task, not a remediation task.

2. **Audit templated-page duplication risk.** Many dynamic peptide and product pages exist. Per project memory (name-swap trap), verify that no sets of pages share identical H2 structure with only the product name swapped — that's a Google duplicate-content flag even when each URL has a unique canonical. Spot-check by pulling 3 similar peptide guides and diffing the H2 arrays. The 1-point deduction on Indexability reflects this risk, not a confirmed issue.

3. **Consider BreadcrumbList schema on category/hub pages.** Product pages already include BreadcrumbList — excellent. Category pages (`/anti-aging`, `/body-composition`, `/stacks`) could gain the same for richer SERP treatment.

4. **Add `Vary: Accept-Encoding` explicitly.** Currently `Vary` only lists `RSC, Next-Router-State-Tree, Next-Router-Prefetch`. Vercel negotiates compression correctly regardless, but shared caches behave better when `Accept-Encoding` is declared. Low impact.

## Detailed Findings

### Crawlability — 15/15

- **robots.txt (3/3):** Valid syntax, proper directives, `Host:` and `Sitemap:` declarations present, `/api/` and `/go/` disallowed correctly.
- **AI crawlers (5/5):** All 22+ listed crawlers allowed explicitly, including GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended.
- **XML sitemap (3/3):** `/sitemap.xml` returns valid XML with 155 URLs, accurate per-URL `<lastmod>` and `<priority>`, proper change frequencies.
- **Crawl depth (2/2):** Core content reachable within 1–2 clicks from navigation (Navbar + Footer surface products, stacks, blog, tools, FAQ). No orphaned content observed in sitemap.
- **Noindex (2/2):** No erroneous `<meta name="robots">` or `X-Robots-Tag: noindex` on sampled indexable pages (homepage, product, hair-growth guide).

### Indexability — 11/12

- **Canonicals (3/3):** Self-referencing canonicals present on all sampled pages. Example: `<link rel="canonical" href="https://www.peptidesmuscle.com/peptides-for-hair-growth-loss">`.
- **Duplicate content (3/3):**
  - HTTP → HTTPS: 308 permanent redirect confirmed.
  - Non-www → www: 301 permanent redirect confirmed.
  - Variant consolidation shipped per `next.config.js` — per-size child slugs (e.g., `semaglutide-3mg`) 301 to canonical parent URLs.
  - `/looks-maxing` → `/looksmaxxing-peptides-guide-men` 308 live.
- **Pagination (2/2):** Not heavily paginated. Category filters on `/products` use query params and rely on canonical at parent URL.
- **Hreflang (2/2):** Single-language (en) site; not applicable.
- **Index bloat (1/2):** 155 URLs in sitemap is right-sized. Light deduction for residual risk of templated-page near-duplication (see Recommendation #2).

### Security — 9/10

Observed homepage response headers:
```
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
x-dns-prefetch-control: on
```
- **HTTPS enforced (4/4):** Valid cert, HSTS preloaded.
- **HSTS (2/2):** 2-year max-age, `includeSubDomains; preload`.
- **X-Content-Type-Options (1/1):** `nosniff`.
- **X-Frame-Options (1/1):** `SAMEORIGIN`.
- **Referrer-Policy (1/1):** `strict-origin-when-cross-origin`.
- **Content-Security-Policy (0/1):** Not set. See Warning #1.

### URL Structure — 8/8

- Slugs are human-readable, lowercase, hyphen-separated (`/bpc-157-complete-guide`, `/melanotan-2-looksmaxxing-tan`).
- Flat hierarchy with logical grouping (`/products/*`, `/stacks/*`, topical guides at root).
- Redirects are single-hop (308/301), no chains observed.
- Parameter-based filters on `/products` don't create indexable duplicates.

### Mobile Optimization — 10/10

- `<meta name="viewport" content="width=device-width, initial-scale=1">` present.
- Tailwind-based responsive layout, `clamp()` font sizes (e.g., `clamp(32px, 6vw, 68px)` on H1).
- CTAs padded `py-3` / `py-3.5` — exceeds 48px tap target.
- Mobile nav in Navbar.tsx with accessible burger toggle.

### Core Web Vitals — 12/15 (estimated)

No CrUX field data retrieved. Estimates below based on code and response headers.

- **LCP (4/5):** Hero image preloaded with responsive `imageSrcSet`, `fetchPriority="high"`, Next/Image WebP/AVIF. CDN edge cache hit (`x-vercel-cache: HIT`). TTFB 130ms. Expected LCP well under 2.5s on broadband; possible 75th-percentile pressure on mid-tier mobile.
- **INP (4/5):** Next.js client hydration and GTM present. No obvious long-task traps in the top code-split chunks. Monitor in the field.
- **CLS (4/5):** Hero images use `imageSrcSet` with Next/Image (preserves aspect ratio). Custom fonts (Playfair Display) loaded via `<link rel="preconnect">` to fonts.gstatic.com — verify `font-display: swap` + size-adjusted fallback to avoid FOUT-driven shift.

Score represents "likely good but unverified". Pull GSC / CrUX data to confirm and reclaim the remaining 3 points.

### Server-Side Rendering — 15/15

Confirmed by `curl` fetch (no JS execution):
- **Main content (8/8):** H1, body copy, product details all in raw HTML. Product-page H1 server-rendered: `<h1>BPC-157 10mg`.
- **Meta + structured data (4/4):** `<title>`, `<meta description>`, canonical, OG tags, Twitter card, and JSON-LD all in raw HTML.
- **Internal links (3/3):** Full navigation (Navbar + Footer) rendered server-side. Link graph is AI-crawler-accessible without JavaScript execution.

JSON-LD detected in raw HTML:
- Homepage: `Organization`, `WebSite` + `SearchAction`, `ImageObject` (2 blocks).
- Product page (`/products/bpc-157-10mg`): `Product`, `Offer`, `AggregateRating`, `Review`, `Rating`, `Brand`, `BreadcrumbList`, `ListItem`, `ImageObject`, `Organization`, `WebSite` — 11 types.

### Page Speed & Server Performance — 15/15

- **TTFB (3/3):** Homepage 130ms, product page 192ms. Both well under 800ms.
- **Page weight (2/2):** Homepage raw HTML 363KB uncompressed → 43KB compressed (Brotli/gzip). Under 2MB.
- **Images (3/3):** Next/Image with `formats: ['image/avif', 'image/webp']` in next.config.js. Responsive `deviceSizes`/`imageSizes` defined. Above-fold heroes preloaded (not lazy-loaded — correct). `minimumCacheTTL: 30 days`.
- **JS bundles (2/2):** Code-split by route (`webpack-*.js`, `main-app-*.js`, `app/page-*.js`, `app/layout-*.js`), all `async`. Third-party scripts (GTM) loaded async.
- **Compression (2/2):** Brotli/gzip enabled. Homepage 363KB → 43KB (88% reduction).
- **Cache headers (2/2):** Static assets `cache-control: public, max-age=31536000, immutable`. HTML uses `public, max-age=0, must-revalidate` with strong ETag — correct for dynamic routes.
- **CDN (1/1):** Vercel edge network confirmed via `x-vercel-id`, `x-vercel-cache: HIT` on cached routes.

## Verification Commands Used

```bash
curl -s -I https://www.peptidesmuscle.com/                   # headers
curl -s    https://www.peptidesmuscle.com/robots.txt          # robots
curl -s    https://www.peptidesmuscle.com/sitemap.xml         # sitemap
curl -o /dev/null -s -w 'TTFB: %{time_starttransfer}s'   ...  # perf
curl -s -H "Accept-Encoding: gzip, br" ...                    # compression
curl -s    https://www.peptidesmuscle.com/products/bpc-157-10mg  # SSR/schema
curl -s -I http://...                                          # HTTPS redirect
curl -s -I https://peptidesmuscle.com/                        # www redirect
curl -s    https://www.peptidesmuscle.com/.well-known/indexnow-key.txt  # IndexNow
```
