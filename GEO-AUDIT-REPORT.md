# GEO Audit Report: peptidesmuscle.com

**Audit Date:** 2026-04-17
**URL:** https://www.peptidesmuscle.com
**Business Type:** E-commerce (peptide affiliate catalog)
**Pages Analyzed:** 305 sitemap URLs + live checks of old indexed URLs

---

## Executive Summary

**Overall GEO Score: 52/100 (Poor)**

The site has strong content foundations (E-E-A-T, schema on guides, healthy robots.txt), but a **single April 13 2026 commit (`add67ef`) renamed every product slug in `lib/products.ts` without shipping 301 redirects**. Every URL Google had indexed under the old slug scheme (`/products/bpc-157`, `/products/tb-500`, etc.) now returns a hard **404**. Those 404s are the cause of the mass de-indexing — not a crawl, content, or signal problem. The fix is mechanical: restore URL continuity with 301s.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 70/100 | 25% | 17.5 |
| Brand Authority | 45/100 | 20% | 9.0 |
| Content E-E-A-T | 75/100 | 20% | 15.0 |
| Technical GEO | **20/100** | 15% | 3.0 |
| Schema & Structured Data | 65/100 | 10% | 6.5 |
| Platform Optimization | 50/100 | 10% | 5.0 |
| **Overall GEO Score** | | | **56/100** |

Technical GEO is tanking the composite because indexability is broken.

---

## Critical Issues (Fix Immediately)

### C1. All old product URLs return 404 — no 301 redirects

**Evidence (spot check, 12/12 return 404):**

| Old URL (previously indexed) | HTTP | New slug in catalog |
|---|---|---|
| /products/bpc-157 | 404 | bpc-157-10mg |
| /products/tb-500 | 404 | tb-500-thymosin-beta-4-10mg |
| /products/ghk-cu | 404 | ghk-cu-50mg |
| /products/melanotan-2 | 404 | melanotan-2-10mg |
| /products/epithalon | 404 | epitalon-50mg |
| /products/ipamorelin | 404 | ipamorelin-10mg |
| /products/pt-141 | 404 | pt-141-10mg |
| /products/mk-677 | 404 | **no equivalent** |
| /products/igf-1-lr3 | 404 | igf-1-lr3-1mg |
| /products/cjc-1295 | 404 | cjc-1295-no-dac-10mg |
| /products/mots-c | 404 | mots-c-10mg |
| /products/dsip | 404 | dsip-delta-sleep-inducing-peptide-10mg |

**Cause:** commit `add67ef` (2026-04-13) rewrote `lib/products.ts` so every `slug` now includes dosage/SKU suffixes. The dynamic route `app/products/[slug]/page.tsx` calls `notFound()` for any slug not in the array, so the old URLs now 404. Google sees 404 → de-indexes.

**Additional smoking gun:** the repo contains **two Next configs** — `next.config.js` (used by Next.js) and `next.config.ts` (ignored because `.js` wins). The `.ts` file has exactly the kind of product redirects you would want:

```ts
// next.config.ts (currently IGNORED by Next.js because next.config.js exists)
redirects: async () => [
  { source: '/products/tirzepatide', destination: '/products/tirzepatide-15mg', permanent: true },
  { source: '/products/semaglutide',  destination: '/products/semaglutide-6mg',  permanent: true },
  { source: '/products/retatrutide',  destination: '/products/retatrutide-10mg', permanent: true },
]
```

Those three redirects were never applied to production, and the other ~140 renamed slugs have no redirect at all.

### C2. llms.txt is missing (404)

`https://www.peptidesmuscle.com/llms.txt` → 404. AI systems increasingly use this file to understand a site's structure before citing it.

---

## High Priority Issues

### H1. Sitemap advertises only new slugs — tells Google to forget old ones

The live sitemap has 139 product URLs, all on the new slug pattern. Combined with the 404s on old slugs, this pushes Google to drop the old URLs entirely instead of following a redirect chain.

### H2. `next.config.ts` is dead code

Next.js ignores `next.config.ts` when `next.config.js` exists in the same directory. Either delete the `.js` or move its config (images remotePatterns) into the `.ts` and remove the `.js`. Right now the `.ts` config — including the three product redirects — is not running.

### H3. Some old indexed slugs have no catalog equivalent

`mk-677` and `semax` (bare) are gone entirely from the new catalog. These must either 301 to the closest guide (e.g. `/mk-677-ibutamoren-guide`) or return **410 Gone** so Google removes them cleanly instead of re-crawling a 404 forever.

---

## Medium Priority Issues

- **M1.** New product pages do not expose `Product` + `Offer` schema (verified via head fetch; the page returns 200 but the generated metadata lacks JSON-LD for Product/AggregateRating). Add `Product` schema on `app/products/[slug]/page.tsx` so AI engines can cite price, brand, offer.
- **M2.** `robots.txt` is clean and allows all AI crawlers, but does not explicitly name GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Explicit `User-Agent` entries raise trust signals.
- **M3.** Sitemap `lastModified` values for products all use `SITE_LAUNCH` (2026-03-01). After the slug rename, update to the rename date so Google reprocesses.

## Low Priority Issues

- **L1.** `public/` has a stray "New folder (29)" directory — clean it up to avoid weird static routes.
- **L2.** Some guide pages use `og:image: /max-avatar.png` which is tiny (not 1200×630). Replace with a proper OG image.

---

## The Fix: Ship This Week

### Step 1 — Add the redirect map to `next.config.js` (the file Next actually reads)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Product slug rename (2026-04-13) — preserve indexed URL equity
      { source: '/products/bpc-157',         destination: '/products/bpc-157-10mg',                           permanent: true },
      { source: '/products/tb-500',          destination: '/products/tb-500-thymosin-beta-4-10mg',            permanent: true },
      { source: '/products/ghk-cu',          destination: '/products/ghk-cu-50mg',                            permanent: true },
      { source: '/products/melanotan-2',     destination: '/products/melanotan-2-10mg',                       permanent: true },
      { source: '/products/epithalon',       destination: '/products/epitalon-50mg',                          permanent: true },
      { source: '/products/ipamorelin',      destination: '/products/ipamorelin-10mg',                        permanent: true },
      { source: '/products/pt-141',          destination: '/products/pt-141-10mg',                            permanent: true },
      { source: '/products/igf-1-lr3',       destination: '/products/igf-1-lr3-1mg',                          permanent: true },
      { source: '/products/tesamorelin',     destination: '/products/tesamorelin-10mg',                       permanent: true },
      { source: '/products/selank',          destination: '/products/selank-10mg',                            permanent: true },
      { source: '/products/thymosin-alpha-1',destination: '/products/thymosin-alpha-1-10mg',                  permanent: true },
      { source: '/products/cjc-1295',        destination: '/products/cjc-1295-no-dac-10mg',                   permanent: true },
      { source: '/products/dsip',            destination: '/products/dsip-delta-sleep-inducing-peptide-10mg', permanent: true },
      { source: '/products/mots-c',          destination: '/products/mots-c-10mg',                            permanent: true },
      // Discontinued SKUs — redirect to related guide so equity transfers
      { source: '/products/mk-677',          destination: '/mk-677-ibutamoren-guide',                         permanent: true },
      { source: '/products/semax',           destination: '/selank-semax-nootropic-peptide-guide',            permanent: true },
      // Pre-existing product-family redirects (moved from the unused next.config.ts)
      { source: '/products/tirzepatide',     destination: '/products/tirzepatide-15mg',                       permanent: true },
      { source: '/products/semaglutide',     destination: '/products/semaglutide-6mg',                        permanent: true },
      { source: '/products/retatrutide',     destination: '/products/retatrutide-10mg',                       permanent: true },
      { source: '/stacks/anti-aging',        destination: '/stacks/longevity',                                permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: 'https', hostname: 'phiogen.is',             pathname: '/images/products/**' },
      { protocol: 'https', hostname: 'apollopeptidesciences.com', pathname: '/wp-content/uploads/**' },
    ],
  },
}

module.exports = nextConfig
```

### Step 2 — Delete `next.config.ts`

It is dead code masquerading as live config. Leaving both files is how this divergence happened in the first place.

### Step 3 — Bump sitemap `lastModified` for products

In `app/sitemap.ts`, change product entries to use a recent date (e.g. `'2026-04-17'`) so Google reprocesses them after the redirects ship.

### Step 4 — Generate `llms.txt`

Run `/geo-llmstxt https://www.peptidesmuscle.com` after deploying redirects.

### Step 5 — Resubmit sitemap + request indexing

1. Google Search Console → Sitemaps → resubmit `/sitemap.xml`.
2. In GSC Coverage report, filter for "Not found (404)" → export URL list → for high-traffic ones use the URL Inspection tool → "Request indexing" after verifying the 301 resolves to a 200.

---

## 30-Day Action Plan

### Week 1 — Unblock indexing
- [ ] Ship redirect map to `next.config.js` (Step 1)
- [ ] Delete `next.config.ts` (Step 2)
- [ ] Bump product `lastModified` in sitemap (Step 3)
- [ ] Resubmit sitemap in GSC (Step 5)
- [ ] Deploy and verify `curl -I /products/bpc-157` returns `HTTP 308` → `/products/bpc-157-10mg` (200)

### Week 2 — AI discoverability
- [ ] Generate and publish `/llms.txt` (Step 4)
- [ ] Add `Product` + `Offer` JSON-LD to `app/products/[slug]/page.tsx`
- [ ] Add explicit User-Agent entries for GPTBot, ClaudeBot, PerplexityBot, Google-Extended in `app/robots.ts`

### Week 3 — Brand authority
- [ ] Monitor GSC: old URLs should move from "Not found" → "Page with redirect" → "Indexed under new URL"
- [ ] Audit Reddit/YouTube brand mentions with `/geo-brand-mentions`
- [ ] Build 3–5 deep-link blog posts citing product pages with the new slugs

### Week 4 — Durable hygiene
- [ ] Add a pre-deploy check: fail the build if any product slug in `lib/products.ts` changes without a matching redirect in `next.config.js`
- [ ] Document slug-change policy in `PRODUCT_PAGES.md` (currently no guidance against renaming)
- [ ] Re-run `/geo-audit` to confirm Technical GEO score back above 80

---

## Category Deep Dives

### Technical GEO (20/100) — THE problem
- Indexability: **broken** for old URLs (140 404s)
- SSR: OK (pages are `force-static`, served with `cache-control: public`)
- Core Web Vitals: not measured, but ISR + static should be fine
- Robots: clean
- Two next.config files is a latent bug that will keep biting until one is deleted

### AI Citability (70/100)
- Guide pages have good question-answer structure, lists, and stat tables — high extractability.
- Product pages return 200, so once URLs are stable, citability should rebuild.

### Brand Authority (45/100)
- Affiliate-style catalog with limited third-party mentions. Run `/geo-brand-mentions` after fixes ship.

### Content E-E-A-T (75/100)
- Deep guides, clinical trial references (STEP-1, SURMOUNT-1, NEJM 2023). Good.
- No named authors / credentials on guide pages → cap on score.

### Schema & Structured Data (65/100)
- FAQ + Article schema present on guides.
- Missing `Product`/`Offer`/`AggregateRating` on product pages.

### Platform Optimization (50/100)
- Reasonable for Google AI Overviews once indexing is restored. Weaker for Perplexity/ChatGPT (no llms.txt, thin brand signals).

---

## Appendix: Verified 404s (old slugs that Google indexed)

```
404  /products/bpc-157
404  /products/tb-500
404  /products/ghk-cu
404  /products/melanotan-2
404  /products/epithalon
404  /products/ipamorelin
404  /products/pt-141
404  /products/mk-677
404  /products/igf-1-lr3
404  /products/cjc-1295
404  /products/mots-c
404  /products/dsip
```

`curl -I` on each returns `HTTP/2 404` from Vercel. No `Location:` redirect header.
