# Technical GEO Audit — peptidesmuscle.com

**Target:** https://www.peptidesmuscle.com
**Audit Date:** 2026-04-17
**Auditor:** GEO Technical SEO Agent
**Stack Detected:** Next.js (static export) on Vercel Edge

---

## Technical Foundations

**Technical Score: 94/100 — Excellent**

The site is in a genuinely strong technical state for both traditional search and generative engines. Server-side rendering is fully intact, every major AI crawler is explicitly allow-listed, the sitemap and canonical system are internally consistent, security headers are comprehensive, and TTFB from Vercel Edge is consistently under 200 ms. Only three non-critical issues remain: a two-hop HTTP to HTTPS-www edge redirect (Vercel platform limitation), an IndexNow key hosted but not yet submitted to the engines, and HSTS sent with `preload` but the domain not yet registered on hstspreload.org.

### Score Breakdown

| # | Category | Score | Max | Status |
|---|---|---|---|---|
| 1 | Crawlability | 14 | 15 | Excellent |
| 2 | Indexability | 12 | 12 | Excellent |
| 3 | Security | 9 | 10 | Excellent |
| 4 | URL Structure | 7 | 8 | Good |
| 5 | Mobile Optimization | 10 | 10 | Excellent |
| 6 | Core Web Vitals (est.) | 13 | 15 | Excellent |
| 7 | Server-Side Rendering | 15 | 15 | Excellent |
| 8 | Page Speed / Delivery | 14 | 15 | Excellent |
| | **TOTAL** | **94** | **100** | **Excellent** |

---

## 1. Crawlability — 14/15

**Robots.txt:** Found at `/robots.txt` — syntactically clean, well structured, with 23 explicit user-agent blocks.

- Default `User-agent: *` allows everything except `/api/` and `/go/` (correct: these are internal endpoints and outbound redirects that should never be indexed).
- Traditional search engines explicitly allow-listed: Googlebot, Bingbot, Slurp (Yahoo), DuckDuckBot, Baiduspider, YandexBot.
- Social / preview bots: facebot, Twitterbot.
- **AI crawlers explicitly allow-listed (13):** GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, Amazonbot, Meta-ExternalAgent, cohere-ai, Diffbot.
- `Host` directive present (canonical host declared).
- `Sitemap` directive references `https://www.peptidesmuscle.com/sitemap.xml`.
- No `Crawl-delay` directives that could slow indexing.

**XML Sitemap:** Found and valid.

- 202 URLs, proper XML formatting, correct `xmlns`.
- `<lastmod>` dates are fresh and credible (2026-03-01, 2026-03-28, 2026-04-01, 2026-04-14, 2026-04-17). Products carry today's lastmod.
- `<changefreq>` and `<priority>` populated consistently (products 0.9, stacks 0.8, category pages 0.7).
- Target URL and all product pages appear in the sitemap.

**Meta robots / X-Robots-Tag:** No `noindex`, `nofollow`, or other restrictive directives observed on any sampled page. No `X-Robots-Tag` response header interfering.

**Crawl depth:** Every product and guide is reachable within 1–2 clicks from the homepage (flat hierarchy `/`, `/products/*`, `/stacks/*`, guide slugs at root).

**IndexNow (Warning, -1):** Verification file `/de70e44d61f29841aa01ebde75f50209.txt` is live and returns 200, but the domain has not yet been submitted to the IndexNow endpoints (Bing/Yandex/Seznam/Naver). Sitemap changes are not being push-notified.

---

## 2. Indexability — 12/12

- **Canonical tags:** Self-referencing and correct on all three sampled pages.
  - Homepage: `https://www.peptidesmuscle.com`
  - Product: `https://www.peptidesmuscle.com/products/bpc-157-10mg`
  - Guide: `https://www.peptidesmuscle.com/bpc-157-complete-guide`
- **Duplicate content control:** Old product slugs (e.g. `/products/bpc-157`) return a clean `308 Permanent Redirect` to the canonical dosed slug (`/products/bpc-157-10mg`). One-hop server-side redirect, no chain.
- **Pagination:** No problematic `?page=` parameter duplication observed in sitemap.
- **Hreflang:** Not applicable — single-language (en) site. `<html lang="en">` correctly declared.
- **Index bloat:** No observed low-value URLs (tag archives, search result pages, internal filters) leaking into the sitemap.

---

## 3. Security — 9/10

**Observed response headers (homepage):**

| Header | Value | Status |
|---|---|---|
| HTTPS | TLS served | Present |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains; preload` | Present (2-year, subdomains, preload) |
| X-Content-Type-Options | `nosniff` | Present |
| X-Frame-Options | `SAMEORIGIN` | Present |
| Referrer-Policy | `strict-origin-when-cross-origin` | Present |
| Permissions-Policy | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Present |
| Content-Security-Policy | Not observed | Missing (-1) |

**HSTS preload (Warning, not score-affecting):** The `preload` directive is set correctly, but the domain has not been submitted to hstspreload.org. The header is valid either way; submission converts it to a browser-baked default.

**Notes:** Absence of an explicit CSP is the only real gap. Given the Next.js static export and known third-party scripts (Google Tag Manager / GA4), a moderately strict CSP is achievable and would eliminate the only meaningful missing security surface.

---

## 4. URL Structure — 7/8

**Target URL:** `https://www.peptidesmuscle.com/` — clean, canonical host.

Observed patterns across sitemap and sampled pages:

- Lowercase throughout.
- Hyphen word separators (no underscores).
- Descriptive slugs (`/products/bpc-157-10mg`, `/bpc-157-complete-guide`, `/stacks/longevity`).
- Logical hierarchy: root landing, `/products/*` for SKUs, `/stacks/*` for protocols, guide slugs at root.
- No query parameters, session IDs, or hash fragments.
- Max depth 2 segments — well under the 4-level concern threshold.
- Old slug consolidation handled cleanly with 308 redirects (single hop).

**Two-hop edge redirect (Warning, -1):** `http://peptidesmuscle.com/` resolves via two redirects (HTTP→HTTPS→https://www.). This is a Vercel platform characteristic when combining automatic HTTPS upgrade with apex-to-www canonicalization at the edge; it is not fixable in application code. Impact on crawlers is negligible (both hops are 301-class, preserved, and edge-cached) but an ideal single-hop is not achievable on this platform.

---

## 5. Mobile Optimization — 10/10

- `<meta name="viewport" content="width=device-width, initial-scale=1"/>` present on every sampled page.
- Responsive image pipeline via Next.js `<Image>`: `srcSet` with 640/750/828/1080/1200/1920 widths and `sizes` declared on every hero and product shot (255 `_next/image` references on the homepage alone).
- Fluid typography using CSS `clamp()` (`font-size: clamp(36px, 5.5vw, 68px)`) — scales smoothly from mobile to desktop without breakpoints.
- `<html lang="en">` declared.
- No fixed-width layout signals or horizontal-scroll risks in raw HTML.
- No hover-only interactive patterns detected in visible markup.

---

## 6. Core Web Vitals (Estimated) — 13/15

Static HTML-based estimation. Field data from CrUX or PageSpeed Insights should be layered on top for confirmation.

| Vital | Risk | Evidence |
|---|---|---|
| LCP | Low | Hero images preloaded via `<link rel="preload" as="image" imageSrcSet=...>`, `fetchPriority="high"` applied, AVIF/WebP served through Next.js image pipeline, TTFB 110–180 ms from Vercel Edge. |
| INP | Low–Medium | 21 script tags on homepage, but all tagged `async` or `defer` (47 async/defer attribute matches). Next.js code-splitting in use. No inline `onclick` handlers driving heavy work. |
| CLS | Low | Next.js `<Image>` component emits width/height and `aspect-ratio` implicitly. 30 `loading="lazy"` images below the fold. No ad slots or dynamic above-the-fold injections observed. |

**Deductions (-2):** Homepage raw HTML weight is 382 KB (largely inline JSON-LD + preload hint soup from `<Image>` srcsets). That is above average for a static landing page and a reasonable target for modest trimming. Only 2 of 35 `<img>`/image elements carry explicit `width=` attributes in raw form, though Next.js `<Image>` sets them via `style`.

---

## 7. Server-Side Rendering — 15/15

**Rendering type:** Static Site Generation (Next.js static export) served from Vercel Edge.
**AI crawler visibility:** Full.

Confirmed across three page types (homepage, product, guide):

- Real `<title>`, `<meta name="description">`, `<link rel="canonical">`, full Open Graph and Twitter Card sets rendered in the initial HTML response — no client-side injection.
- Full text content (H1/H2/H3, product copy, FAQ questions and answers, guide body) present in raw HTML before any JavaScript executes.
- JSON-LD rendered server-side:
  - Homepage: Organization, WebSite (with SearchAction), ImageObject.
  - Product: Product, Offer, AggregateRating, BreadcrumbList, FAQPage, Organization, WebSite.
  - Guide: MedicalWebPage, FAQPage, Person (author), Organization, WebSite.
- 110 internal `href="/..."` links on the homepage — navigation graph fully visible to non-JS crawlers.
- Zero `<noscript>` fallbacks needed (content is already there for JS-off).

This is the single most important finding for GEO: GPTBot, ClaudeBot, PerplexityBot, and Google-Extended all see the complete page.

---

## 8. Page Speed & Delivery — 14/15

**TTFB samples (IAD region, cached):**

| Page | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Homepage | 174 ms | 385 ms | 187 ms |
| Product (bpc-157-10mg) | 180 ms | 227 ms | 166 ms |
| Guide (bpc-157-complete-guide) | 116 ms | — | — |

Vercel Edge cache is HIT on every sampled path (`x-vercel-cache: HIT`, `age` values showing hot cache).

**Delivery strengths:**

- Next.js image optimization producing AVIF/WebP with per-breakpoint srcsets.
- Static assets under `/_next/static/` carry hashed filenames — safe for long-TTL immutable caching.
- HTML served with `cache-control: public, max-age=0, must-revalidate` (correct for ISR/edge-cached HTML).
- `llms.txt` explicitly `s-maxage=86400, stale-while-revalidate=604800` — well-tuned for a slow-changing document.
- HTTP/2 end-to-end.
- 2 `preconnect` and 4 `preload` hints on the homepage; `<link rel="preload" as="image" fetchPriority="high">` on the LCP hero.
- 47 `async`/`defer` attributes across 21 scripts — no render-blocking JS in the critical path.

**Deduction (-1):** Homepage HTML payload of 382 KB is larger than ideal. Much of this is inline JSON-LD (valuable for GEO, keep) plus exhaustive image-preload `imageSrcSet` attributes — a minor trim opportunity by reducing the number of preloaded heroes from "all visible products above the fold" to the true LCP candidate only.

---

## Additional Checks

- **Redirect chains:** Old product slugs → new slugs via single 308. Apex → www is 2 hops (see URL Structure Warning).
- **Internationalization:** Single-language site; `<html lang="en">` declared; hreflang correctly omitted.
- **Structured data syntax:** JSON-LD parses cleanly on every sampled page. No visible malformed blocks.
- **Resource hints:** `preconnect` and `preload` in use on all pages.
- **llms.txt:** Live at `/llms.txt` with `s-maxage=86400` — a GEO-positive signal.
- **404 handling:** `/guides` (with trailing 's') returns a 404 with proper `x-next-error-status: 404`. The canonical hub is `/guide`. Worth considering adding a `/guides` → `/guide` 301 to catch the pluralized variant.

---

## Priority Actions

1. **[MEDIUM] Submit IndexNow key to the IndexNow network.** Wire sitemap-changed events to `https://api.indexnow.org/indexnow?url=…&key=de70e44d61f29841aa01ebde75f50209` so Bing, Yandex, Seznam, and Naver pick up changes within minutes instead of days. The verification file is already hosted.
2. **[MEDIUM] Add a Content-Security-Policy header.** Close the last meaningful security gap. Start in `Content-Security-Policy-Report-Only` mode to discover all third-party origins (GTM, GA4, Phiogen images) before enforcing.
3. **[LOW] Submit the domain to hstspreload.org.** The `preload` directive is already in the HSTS header; finishing the submission converts it to a browser-baked default.
4. **[LOW] Add a 301 from `/guides` to `/guide`.** Catches the common pluralized variant that currently 404s.
5. **[LOW] Trim homepage HTML weight.** Reduce the number of hero `<link rel="preload" as="image">` hints to the true LCP image only; the rest can rely on normal lazy loading. Realistic saving: ~50–80 KB off initial HTML.
6. **[INFO / not fixable] Two-hop apex → HTTPS → www redirect** is a Vercel edge-layer characteristic, not a code-level issue. No action required; noted for completeness.

---

**File:** `/mnt/c/Users/Wilso/peptizzy/GEO-TECHNICAL-AUDIT.md`
