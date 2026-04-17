# GEO Audit Report: PeptidesMuscle

**Audit Date:** 2026-04-17
**URL:** https://www.peptidesmuscle.com
**Business Type:** Hybrid — E-commerce (peptide catalog, ~140 SKUs) + Publisher (~45 long-form guides)
**Pages Analyzed:** 202 (full sitemap) — deep-crawled 11 (home, 2 products, 4 guides, /about/editors, /llms.txt, /robots.txt, /sitemap.xml)

---

## Executive Summary

**Overall GEO Score: 66/100 (Fair — rising)**

Technical execution is top-decile (94/100) — SSR intact, all 14 named AI crawlers allow-listed, llms.txt live, security headers complete, schema valid. The binding constraint is **off-site entity signals** (Brand Authority 22/100) and **YMYL credibility** (E-E-A-T 58/100, zero inline primary-source citations on guides). Fixing the two content gaps — inline DOIs and a second credentialed contributor — plus seeding Reddit/YouTube presence over 90 days moves this into the 80-85 range; the rest is earned, not coded.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 84/100 | 25% | 21.0 |
| Brand Authority | 22/100 | 20% | 4.4 |
| Content E-E-A-T | 58/100 | 20% | 11.6 |
| Technical GEO | 94/100 | 15% | 14.1 |
| Schema & Structured Data | 86/100 | 10% | 8.6 |
| Platform Optimization | 62/100 | 10% | 6.2 |
| **Overall** | | | **65.9 → 66/100** |

**Movement vs. prior audit:** +5 points. Previous run: 61/100 (before redirect fixes, robots.txt expansion, llms.txt, /about/editors, MedicalWebPage schema, HSTS preload, footer rel=me).

---

## Critical Issues (Fix Immediately)

None. No crawl blockers, no de-index flags, no render failures, no 5xx, no AI crawlers blocked.

## High Priority Issues (Fix Within 1 Week)

1. **Zero inline primary-source citations on guides.** Site claims "PubMed, NEJM, JAMA, ClinicalTrials.gov sourcing" but 3 sampled YMYL guides (BPC-157, Semaglutide, GLP-1) contain **zero DOIs, zero PMIDs, zero PubMed URLs**. For a medical-adjacent topic, claim-without-proof is the single biggest YMYL trust gap. Target: 8–15 inline citations per guide with `<cite>` + schema-level `citation` array on `MedicalWebPage`.
2. **IndexNow not submission-wired.** Key file at `/de70e44d61f29841aa01ebde75f50209.txt` is deployed, but standard discovery path `/.well-known/IndexNow` returns 404 and no Vercel build-hook submits updated URLs. Bing Copilot + ChatGPT (Bing-index-dependent) see new content on a multi-day delay instead of minutes.
3. **No Bing Webmaster verification.** No `msvalidate.01` meta tag — sitemap priority and IndexNow submissions aren't fully weighted without it.
4. **Brand Authority ceiling (22/100).** Only self-attested entity signals (Organization.sameAs → own X/Reddit). No Wikipedia entity, no YouTube, no third-party mentions, Reddit account has limited karma. This is why LLM citations are rare despite high Citability.
5. **Single-editor team on YMYL content.** "LooksMax Agent" with "Independent Research Curator" credentials is honest (no fake MD) but caps medical-authority ceiling. Add a second named contributor with verifiable credentials (pharmacist / biochemist / RN / published researcher) + ORCID/LinkedIn in `sameAs`.

## Medium Priority Issues (Fix Within 1 Month)

6. **No BreadcrumbList on guide pages** (only on product pages). Easiest schema win — template already exists.
7. **Duplicate entry in llms.txt** ("Peptide Stacking Guide" listed twice in Core Guides).
8. **Product descriptions are boilerplate** across ~140 SKUs ("research-grade purity from Phiogen…"). Product schema missing `brand`/`manufacturer`/`sku`/`mpn`/`gtin` and has no `Review` entity paired with `AggregateRating`.
9. **Flat H2-only hierarchy on guides.** No H3 sub-sections means AI chunkers can't extract sub-answers (Mechanism / Half-life / Dosing / Contraindications / Stacking). Target 1 H3 per ~250 words on flagship guides.
10. **`MedicalWebPage` missing `@id`, `mainEntityOfPage`, `image`, `description`, `inLanguage`, `citation`.** Publisher re-declared inline instead of `@id`-referencing `#organization`.
11. **No `llms-full.txt`** — doubles ingestion surface for GPTBot/ClaudeBot when added.
12. **HSTS preload not submitted to hstspreload.org.** Header is sent with `preload` directive but domain hasn't been registered.
13. **Two-hop HTTP → HTTPS → https://www edge redirect** (Vercel platform limitation). Mitigated by HSTS preload once registered.
14. **No YouTube channel** — Gemini + ChatGPT heavily surface YouTube transcripts in this niche.

## Low Priority Issues (Optimize When Possible)

15. No `rel="me"` on editor's external links in `/about/editors` (present in global Footer only).
16. `reviewedBy` references same Person `@id` as `author` — technically valid, weak E-E-A-T signal; add a distinct reviewer.
17. No `Content-Security-Policy` header (−1 in Technical audit).
18. Homepage hero paragraphs and product taglines score 25–55 on citability — promotional, few stats. Inject one differentiator per product (mg/mL, COA ref, primary indication).
19. No Wikidata entity for PeptidesMuscle.
20. `AboutPage.isPartOf` re-declared inline instead of `@id` ref.

---

## Category Deep Dives

### AI Citability — 84/100 (Excellent)

Guides use self-contained paragraph-level answers with named mechanisms (VEGF upregulation, POMC/AgRP neurons, arcuate nucleus), numeric dosing (2.5mg/mL = 2,500mcg/mL worked example), named trials (STEP-1, SURMOUNT-1, NEJM 2023), and hard statistics (70+ studies, 15–22% weight loss, 30–50% caloric reduction). Each H2 block is an atomic answer — ideal for RAG chunking.

Top-ranked blocks:
1. **GLP-1 / Arcuate Nucleus Mechanism** — 94/100. Names hypothalamic nucleus + both neuron populations + quantifies outcome.
2. **Injection Dose Calculation Worked Example** — 92/100. Concrete math, unit-to-volume conversion, insulin-syringe mapping.
3. **BPC-157 Multi-Mechanism Paragraph** — 88/100. Four mechanisms in one passage with evidence anchor.

Weaker blocks: intro/hero paragraphs (45–55), product descriptions (~25, boilerplate).

### Brand Authority — 22/100 (Critical Gap)

Entity graph is effectively empty. Wikipedia API confirms zero results for "peptidesmuscle" and "LooksMax Agent." No G2/Trustpilot/Capterra. No YouTube channel. No news coverage. Only external signals are the self-declared `sameAs` pair (X + Reddit) reinforced by Organization JSON-LD and rel="me" footer links — technically clean self-attestation, but LLMs weight it low without third-party corroboration.

### Content E-E-A-T — 58/100 (Fair)

| Pillar | Score | Note |
|---|---|---|
| Experience | 10/25 | Pure curation — no first-hand protocols, user logs, lab walkthroughs |
| Expertise | 13/25 | Honest non-medical framing avoids fake-credential penalty but caps ceiling |
| Authoritativeness | 14/25 | Named editor + sameAs + editorial standards page; single editor, no Wikipedia |
| Trustworthiness | 21/25 | Clear disclaimers, dated guides, named accountability; trust loss from missing inline citations |

Sample depth: guides are 1,400–1,950 words, 7–8 H2s, zero H3s, 5 external links, zero DOI/PMID. Standard-form, not long-form, for YMYL.

### Technical GEO — 94/100 (Excellent)

| Sub-category | Score |
|---|---|
| Crawlability | 14/15 |
| Indexability | 12/12 |
| Security | 9/10 (no CSP) |
| URL Structure | 7/8 |
| Mobile | 10/10 |
| Core Web Vitals (est.) | 13/15 |
| SSR | 15/15 |
| Page Speed | 14/15 |

TTFB 110–180ms from Vercel Edge, `x-vercel-cache: HIT` across sampled paths. All 14 AI crawlers allow-listed. Sitemap 202 URLs with fresh lastmods. HSTS preload header sent (submission pending). 3 non-blocking warnings (2-hop redirect, IndexNow not wired, hstspreload.org registration). See `GEO-TECHNICAL-AUDIT.md` for full detail.

### Schema & Structured Data — 86/100 (Excellent)

All JSON-LD server-rendered. No parse errors, no duplicate `@id`s, dates valid ISO-8601, `Person @id` linkage from `MedicalWebPage.author` resolves. Types: Organization, WebSite, Product + Offer + AggregateRating + BreadcrumbList + FAQPage, MedicalWebPage, AboutPage, Person, HowTo (injection guide). Gaps: guide BreadcrumbList missing, Product.brand/sku missing, MedicalWebPage `@id`/`image`/`citation` missing, publisher re-declared instead of @id-referenced.

### Platform Optimization — 62/100 (Fair)

| Platform | Score |
|---|---|
| Google AI Overviews | 54/100 — YMYL-capped |
| ChatGPT (SearchGPT) | 68/100 |
| Perplexity | 66/100 |
| Gemini | 58/100 |
| Bing Copilot | 64/100 |

AIO and Gemini are ceiling-limited by YMYL credentialing. ChatGPT and Perplexity are best-positioned but waiting on off-site entity signals and IndexNow wiring.

---

## Quick Wins (Implement This Week)

1. **Wire IndexNow submission into Vercel build hook** — POST every changed URL on deploy. Also deploy key at `/.well-known/IndexNow/{key}.txt` in addition to root. (<2 hours, Medium impact)
2. **Add `msvalidate.01` meta tag** to `app/layout.tsx` after verifying domain in Bing Webmaster Tools. (<30 min, Medium impact)
3. **Submit domain to hstspreload.org** — HSTS header already carries `preload` directive. (<10 min, Low impact)
4. **Fix llms.txt duplicate** — "Peptide Stacking Guide" appears twice in Core Guides. (<5 min, Low impact)
5. **Add BreadcrumbList JSON-LD to every guide page** — template exists on products; copy to guide layout. (<1 hour, Medium impact)

## 30-Day Action Plan

### Week 1: Citation + Sourcing Layer (YMYL Credibility)
- [ ] Audit every H2 claim across top 10 guides; assign one PubMed ID or DOI per mechanism/dosage/half-life/efficacy claim.
- [ ] Render citations inline as `<a href="https://pubmed.ncbi.nlm.nih.gov/...">` with `rel="nofollow noopener"`.
- [ ] Add schema-level `citation` array on `MedicalWebPage` for each guide.
- [ ] Target: 8–15 inline citations per flagship guide (BPC-157, GLP-1, Semaglutide, Tirzepatide, Retatrutide).

### Week 2: Editorial Team Expansion
- [ ] Recruit or contract a named contributor with verifiable credentials (pharmacist/biochemist/RN/PhD researcher).
- [ ] Create a second `Person` in `lib/authors.ts` with real ORCID / LinkedIn / PubMed author profile in `sameAs`.
- [ ] Assign this person as `reviewedBy` on top 10 YMYL guides (distinct from `author`).
- [ ] Publish a "How we evaluate sources" methodology page.

### Week 3: Off-Site Entity Signals
- [ ] Launch YouTube channel (`@LooksMax_Agent`); publish 4 short explainer videos (BPC-157, GLP-1, CJC-1295/Ipamorelin, How to Inject).
- [ ] Add YouTube URL to `Organization.sameAs` and the editor's `Person.sameAs`.
- [ ] Reddit: 15–20 substantive, cited, non-promotional answers in r/Peptides, r/PeptideTherapy, r/Biohackers under the Loud-Department3185 account.
- [ ] Outreach for 1 guest post / podcast appearance on Longevity Advice, Ben Greenfield, Modern Healthspan.

### Week 4: Schema Enrichment + llms-full.txt
- [ ] Ship `/llms-full.txt` with concatenated guide bodies (Markdown).
- [ ] Expand `HowTo` schema to reconstitution + stacking + dosing-calculator guides.
- [ ] Add H3 sub-sections (Mechanism / Half-life / Typical Research Doses / Contraindications / Stacking) to flagship guides.
- [ ] Unify `@graph` across JSON-LD blocks; collapse inline publisher declarations to `@id` refs.
- [ ] Add `Product.brand` (Phiogen), rewrite ~15 top-SKU descriptions with unique 1–2 sentence specs.

---

## Appendix: Pages Analyzed (Deep Crawl)

| URL | Status | Key Schema | Notes |
|---|---|---|---|
| / | 200 | Organization, WebSite | SSR clean, HSTS preload |
| /robots.txt | 200 | — | 14 AI crawlers allow-listed |
| /sitemap.xml | 200 | — | 202 URLs, fresh lastmods |
| /llms.txt | 200 (24h cache) | — | Duplicate "Peptide Stacking" entry |
| /products/bpc-157-10mg | 200 | Product, Offer, AggregateRating, BreadcrumbList, FAQPage | Missing brand/sku |
| /products/bpc-157 | 308 → /products/bpc-157-10mg | — | Redirect working |
| /bpc-157-complete-guide | 200 | MedicalWebPage, FAQPage, Person | Zero inline citations, no BreadcrumbList, no H3s |
| /semaglutide-complete-guide | 200 | MedicalWebPage, FAQPage, Person | Same gaps |
| /glp-1-peptides-complete-guide | 200 | MedicalWebPage, FAQPage, Person | Same gaps |
| /how-to-inject-peptides-beginners-guide | 200 | HowTo, FAQPage, Person | HowTo schema richer than other guides |
| /about/editors | 200 | AboutPage, Person | Clean; single editor caps ceiling |

Referenced audit artifacts:
- `/mnt/c/Users/Wilso/peptizzy/GEO-TECHNICAL-AUDIT.md` — full technical category breakdown (94/100)
