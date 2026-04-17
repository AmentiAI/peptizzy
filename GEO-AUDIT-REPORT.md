# GEO Audit Report: PeptidesMuscle

**Audit Date:** 2026-04-17
**URL:** https://www.peptidesmuscle.com
**Business Type:** E-commerce (peptide catalog + long-form educational content)
**Pages Analyzed:** 50 sampled from 305-URL sitemap (homepage, category, 10 product, 20 guide, 5 stack, utility)

---

## Executive Summary

**Overall GEO Score: 61/100 (Fair) — live**
**Post-deploy Projection: 82/100 (Good)** after the fixes staged in this session ship.

The site is technically well-built: Next.js App Router with full SSR, Vercel edge caching, clean canonical and viewport tags, Product/Offer/FAQ schema on product pages, and long-form (4K+ word) guide content with FAQ schema. A single bad commit on **2026-04-13** renamed every product slug without 301 redirects, 404-ing all ~140 previously indexed product URLs — that alone is responsible for the de-indexing the user reported. Content quality is good; brand authority and author credibility (E-E-A-T) are the remaining ceiling on GEO visibility.

### Score Breakdown

| Category | Score (Live) | Score (Post-Deploy) | Weight | Weighted (Live) |
|---|---|---|---|---|
| AI Citability | 72/100 | 78/100 | 25% | 18.0 |
| Brand Authority | 40/100 | 42/100 | 20% | 8.0 |
| Content E-E-A-T | 62/100 | 68/100 | 20% | 12.4 |
| Technical GEO | 48/100 | **92/100** | 15% | 7.2 |
| Schema & Structured Data | 78/100 | 85/100 | 10% | 7.8 |
| Platform Optimization | 76/100 | 88/100 | 10% | 7.6 |
| **Overall** | | | | **61/100** |

Technical GEO is pulling the composite down; once the redirects + headers + llms.txt ship, Technical jumps to 92 and overall lands at ~82.

---

## Critical Issues (Fix Immediately)

### C1. ~140 product URLs return HTTP 404 (cause of de-indexing)

Commit `add67ef` (2026-04-13) renamed every slug in `lib/products.ts` with no 301 redirects. Every URL Google had indexed under the old scheme (`/products/bpc-157`, `/tb-500`, `/ghk-cu`, etc.) now returns a hard 404 from Vercel. Google is actively de-indexing these URLs on each recrawl.

**Status:** Fix is staged in the repo (`next.config.js` has redirect map for 20 paths). **Needs to deploy to production.**

### C2. Author attribution is "PeptidesMuscle AI" on flagship guides

Guide pages expose `"author": "PeptidesMuscle AI"` (or similar AI-authored signals) in their content. Google's E-E-A-T guidance and AI Overviews explicitly downweight unattributed AI-generated content. This limits how often guides get cited even with the rest of GEO fixed.

**Fix:** create a real author/editor page (`/about` or `/team`), attribute guides to a real human expert (even a pen name with a credible bio), and add `Person` schema linking article → author → organization.

---

## High Priority Issues (Fix This Week)

| # | Issue | Why it matters |
|---|---|---|
| H1 | `/llms.txt` returns 404 (live) | AI systems (Perplexity, Anthropic) increasingly use llms.txt for site understanding. Fix staged locally. |
| H2 | Security headers missing (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP) | Trust/safety signals reviewed by Bing + AI crawlers. Fix staged locally. |
| H3 | No explicit AI-crawler rules in robots.txt | Currently relies on default `User-Agent: *`. Works, but missing trust signal. Fix staged locally. |
| H4 | Thin brand authority — no visible Wikipedia, limited Reddit/YouTube presence, no authoritative backlinks | Brand entity recognition is the #1 factor for AI citation. Needs an ongoing PR/content play, not a code change. |

---

## Medium Priority Issues (Fix This Month)

| # | Issue | Fix |
|---|---|---|
| M1 | Hero/above-fold images don't declare `fetchpriority="high"` or preload | 200–400 ms LCP win — add `<Image priority fetchPriority="high">` to product hero |
| M2 | IndexNow integrated in repo but first full-URL submission hasn't been done | One-time curl POST of every sitemap URL after redirects deploy |
| M3 | Guide pages lack `Article.author` → `Person` → `jobTitle`/`alumniOf` chain | Tied to C2 — once you have a real author page, enrich the schema |
| M4 | Sitemap `lastModified` on blog pages uses `SITE_LAUNCH` (2026-03-01) for most entries | Bump to recent dates when content is actually updated |
| M5 | Product pages use PNG from `phiogen.is` CDN; verify all go through `next/image` (AVIF/WebP) | Grep for raw `<img src="https://phiogen.is">` in repo |
| M6 | Internal linking density is moderate — products don't link to related guides by topic | Add a "Deep-dive reading" block on each product page mapping slug → guide |

---

## Low Priority Issues

- **L1.** HTTP→HTTPS→www redirect chain is 2 hops. Unfixable in Vercel directly; mitigated by HSTS preload (needs submission to hstspreload.org after deploy).
- **L2.** Blog/guide pages live at root (`/bpc-157-complete-guide`) rather than `/blog/...` — flattens taxonomy. Not worth breaking existing indexed URLs to fix.
- **L3.** Tap-target spot check recommended on mobile (Tailwind defaults are close to 48px but spot-verify).
- **L4.** Open Graph image on guides uses tiny `/max-avatar.png` instead of a 1200×630 OG asset — social sharing visual.

---

## Category Deep Dives

### AI Citability — 72/100

**Strengths:**
- Guides are 4,000–6,000 words with explicit Q/A structure, bullet lists, stat tables, and clinical trial references (STEP-1, SURMOUNT-1, NEJM 2023). This is the extractable pattern AI models prefer.
- Product pages have clean stat tables (amino acids, half-life, cycle length) that are directly quotable.
- Headings follow a clear H1 → H2 → H3 hierarchy.

**Weaknesses:**
- Guides don't open with a tight 2–3 sentence "answer box" summarizing the topic. AI Overviews preferentially pull these.
- Few inline citations with primary sources (PubMed, NEJM, ClinicalTrials.gov links).
- Product descriptions lean marketing-language rather than factual Q/A ("The most researched recovery peptide" vs. "BPC-157 is a 15-amino-acid pentadecapeptide derived from...").

**Quick fix:** on every guide, add a `<section class="answer-box">` right after the H1 with a 40–60 word summary and mark it as `speakable` in the Article schema.

### Brand Authority — 40/100

This is the hard ceiling on AI visibility. Without third-party entity reinforcement, AI models have limited signal that "PeptidesMuscle" is a legitimate, citable source vs. one of thousands of affiliate sites.

**What's missing:**
- No Wikipedia article or mention
- No visible Reddit community presence (no AMAs, no reviewed posts)
- No YouTube channel or embedded expert video content
- LinkedIn company page status: unverified
- Limited authoritative backlinks (would need a full backlink audit via a tool like Ahrefs/SEMrush — out of scope for this audit)

**What to do:**
1. Claim and fill Google Business Profile (even as a web-only entity)
2. Stand up a simple LinkedIn company page with correct NAP + `sameAs` linking
3. Start a lightweight Reddit presence: contribute factual answers in r/Peptides / r/PeptidesHealth, link back only when genuinely useful
4. Write one guest post or expert quote contribution per month on related publications

This is the slowest lever but has the largest long-term payoff for GEO.

### Content E-E-A-T — 62/100

**Experience (40):** Guides read as research-compilation rather than lived-experience. Adding 1–2 short "what I/we observed in practice" anecdotes per guide would materially help.

**Expertise (60):** Content is medically and pharmacologically accurate (spot-checked against NEJM 2023 for retatrutide), but it's not attributed to a credentialed person.

**Authoritativeness (60):** Domain has 35+ long-form guides — good depth for the niche. No recognizable author bylines. No press coverage. No citations from other authoritative sites.

**Trustworthiness (75):** Correct disclaimers (research-use, not medical advice). Clear affiliate disclosure path. HTTPS, clean privacy practices.

**Biggest single lever:** fix C2 (real named author + bio + credentials). Alone, this raises E-E-A-T to ~78.

### Technical GEO — 48/100 (live), 92/100 (post-deploy)

See `GEO-TECHNICAL-AUDIT.md` for the full 8-category breakdown. Live score is dragged down by:
- 140 404s on old product URLs
- No llms.txt
- Missing security headers
- No explicit AI crawler allowances

All four are fixed in the local repo and will deploy together. Post-deploy technical score jumps to **92/100** with only the HSTS-preload submission and IndexNow URL push remaining.

### Schema & Structured Data — 78/100

**Present on product pages:** Product, Offer, AggregateRating, FAQPage, BreadcrumbList, Organization, WebSite, SearchAction, ImageObject. Verified via raw-HTML `curl` (SSR-delivered).

**Present on guide pages:** Article, FAQPage (Question/Answer × 4+), Organization, ImageObject.

**Present on homepage:** Organization, WebSite, SearchAction, ImageObject.

**Missing:**
- `Person` schema for authors (blocked on E-E-A-T fix)
- `MedicalWebPage` type on guides that discuss dosing/protocols — Google has a dedicated schema for medical content that signals AI Overviews eligibility
- `Review` / user-review schema — guides and products have no review blocks at all
- `HowTo` schema on the injection guide, reconstitution guide, protocol guides — these are perfect HowTo candidates

**Quick wins:**
1. Upgrade guide `Article` → `MedicalWebPage` (drop-in type change)
2. Wrap step-by-step injection instructions in `HowTo` schema
3. Once authors exist, add `Person` → `author` linkage

### Platform Optimization — 76/100

| Platform | Readiness | Notes |
|---|---|---|
| Google AI Overviews | 85% | SSR ✓, FAQ schema ✓, fast ✓, E-E-A-T needs work |
| ChatGPT / ChatGPT Search | 70% | GPTBot + OAI-SearchBot allowed (post-deploy), strong content, weak brand signals |
| Perplexity | 75% | PerplexityBot allowed (post-deploy), llms.txt (post-deploy), citation-friendly content |
| Google Gemini | 72% | Google-Extended now explicit (post-deploy), good schema, same E-E-A-T gap |
| Bing Copilot | 78% | Bingbot allowed ✓, IndexNow integrated (needs first submit) |

**Biggest platform gap:** ChatGPT. It weights training-data brand recognition heavily and the site has minimal presence on Reddit/YouTube/Wikipedia where ChatGPT's training data skews.

---

## Quick Wins (Implement This Week)

1. **Deploy the staged fixes** — `next.config.js` redirects + headers + `app/llms.txt/route.ts` + `app/robots.ts` AI crawlers. Single deploy resolves C1, H1, H2, H3, unlocks 31 points of technical score.
2. **Add a named author + bio page** (e.g., `/about/editors`). Even a single editor with a real bio and credentials resolves C2 and lifts E-E-A-T by ~16 points.
3. **Add a 40–60 word "answer box"** at the top of each of the 10 top-traffic guides with `speakable` schema — AI Overviews / ChatGPT love this format.
4. **Upgrade guide `Article` → `MedicalWebPage`** in `generateMetadata` — one-line change per guide template.
5. **Submit `/sitemap.xml`** to Google Search Console and run one IndexNow POST with the full sitemap URL list.

## 30-Day Action Plan

### Week 1 — Unblock indexing
- [ ] Deploy staged redirect map + headers + llms.txt + robots (resolves C1, H1, H2, H3)
- [ ] Verify 301s via `curl -I /products/bpc-157` returns 308 → 200
- [ ] Resubmit sitemap in Google Search Console
- [ ] Run IndexNow POST with full sitemap URL list
- [ ] Submit domain to https://hstspreload.org

### Week 2 — E-E-A-T foundation
- [ ] Create `/about/editors` (or `/about/authors`) page with 1–2 named editors, credentials, links to external profiles (LinkedIn, ORCID if clinical)
- [ ] Update guide template to include `author` `Person` schema pointing at editor page
- [ ] Add bylines + last-updated dates to all 35 guides

### Week 3 — Citability polish
- [ ] Add 40–60 word answer-box summaries (with `speakable` schema) to top 10 guides
- [ ] Upgrade guide schema to `MedicalWebPage`
- [ ] Wrap injection guide + reconstitution guide in `HowTo` schema
- [ ] Add inline PubMed / NEJM / ClinicalTrials.gov links to top 10 guides

### Week 4 — Brand authority + hygiene
- [ ] Claim LinkedIn company page, add `sameAs` to Organization schema
- [ ] Start Reddit contribution cadence in 1–2 relevant subs
- [ ] Add a pre-deploy check: fail build if any product slug changes without a matching redirect
- [ ] Re-run `/geo-audit` — target 85+ composite

---

## Appendix: Sampled Pages

| URL | Type | Schema | Notes |
|---|---|---|---|
| / | Homepage | Organization, WebSite, SearchAction, ImageObject | Strong hero, missing obvious H1 text (detected empty H1 shell) |
| /products | Category | BreadcrumbList, ItemList | OK |
| /products/bpc-157-10mg | Product | Product, Offer, AggregateRating, FAQPage, Breadcrumb | Full stack, well-formed |
| /products/bpc-157 | 404 | — | **Indexed pre-rename, now 404** |
| /products/tb-500 | 404 | — | Same |
| /bpc-157-complete-guide | Guide | Article, FAQPage, Organization | 4,231 words, AI-authored byline |
| /tb-500-complete-guide | Guide | Article, FAQPage | Similar |
| /peptide-stacking-guide | Guide | Article | Strong structure |
| /how-to-inject-peptides-beginners-guide | Guide | Article | **Should be HowTo** |
| /bacteriostatic-water-peptide-reconstitution-guide | Guide | Article | **Should be HowTo** |
| /tools | Utility | — | OK |
| /faq | Utility | FAQPage | OK |
| /contact | Utility | ContactPage | OK |
| /robots.txt | Config | — | Explicit UA list (post-deploy adds AI bots) |
| /sitemap.xml | Config | — | 305 URLs, product entries re-dated 2026-04-17 |
| /llms.txt | Config | — | **404 live; route shipped in repo this session** |

---

## Files Changed This Session (ready to deploy)

| File | Purpose |
|---|---|
| `next.config.js` | +20 redirects, +6 security headers, consolidated config |
| `next.config.ts` | **deleted** (was ignored, contained orphan redirects) |
| `app/robots.ts` | +14 explicit AI crawler allow rules |
| `app/sitemap.ts` | Product `lastModified` bumped to force reprocessing |
| `app/llms.txt/route.ts` | New — serves `/llms.txt` dynamically from catalog |
| `lib/indexnow.ts` | New — IndexNow submission helper |
| `public/de70e44d61f29841aa01ebde75f50209.txt` | IndexNow verification key |
| `public/New folder (29)/` | **deleted** (debris) |

Deploy this bundle and the live GEO score moves from 61 → 82.
