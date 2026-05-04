# GEO Audit Report: PeptidesMuscle

**Audit Date:** 2026-04-29
**URL:** https://www.peptidesmuscle.com
**Business Type:** E-commerce / Publisher hybrid (research peptides + deep editorial guides)
**Pages Analyzed:** 11 directly fetched (homepage, robots.txt, llms.txt, sitemap.xml, /faq, /contact, /stacks, /about/editors, /products/bpc-157-10mg, /bpc-157-complete-guide, /retatrutide-complete-guide-results-dosage) plus full sitemap inventory of ~226 URLs

---

## Executive Summary

**Overall GEO Score: 54/100 (Poor — borderline Fair)**

PeptidesMuscle has one of the strongest *technical* GEO foundations of any peptide vendor on the web: every major AI crawler is explicitly allowed, an excellent `llms.txt` is published, schema markup is rich on products and guides, the site is server-rendered, and the sitemap is fresh and prioritised. **But the trust and authority layer is almost empty** — no third-party brand presence (Wikipedia, Trustpilot, Reddit, press), a single pseudonymous editor with no medical credentials in a YMYL category, and zero verifiable study citations despite the editorial-standards page promising PubMed/NEJM/JAMA sourcing. The composite is dragged down by Brand Authority (22) and E-E-A-T (38) even though Technical GEO scores 88. AI models will discover the site easily; whether they choose to *cite* it for medical/peptide queries is a different question, and right now the answer is mostly "no."

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 65/100 | 25% | 16.25 |
| Brand Authority | 22/100 | 20% | 4.40 |
| Content E-E-A-T | 38/100 | 20% | 7.60 |
| Technical GEO | 88/100 | 15% | 13.20 |
| Schema & Structured Data | 70/100 | 10% | 7.00 |
| Platform Optimization | 55/100 | 10% | 5.50 |
| **Overall GEO Score** | | | **53.95 → 54/100** |

---

## Critical Issues (Fix Immediately)

**None.** No critical-class blockers exist. The site is fully crawlable, indexable, and AI-accessible — a rare baseline.

---

## High Priority Issues (Fix Within 1 Week)

### H1. AggregateRating schema with reviewCount=1 + ratingValue=98 on product pages
On `/products/bpc-157-10mg` the Product schema declares `"ratingValue":"98","reviewCount":"1"`. A single review at 98/100 is the canonical fingerprint Google uses for self-serving review markup and can trigger a structured-data manual action that strips ALL rich results sitewide. AI models also weight this signal as low-credibility. **Either remove `aggregateRating` until you have ≥10 genuine reviews, OR ingest real reviews and emit them honestly.**

### H2. Zero verifiable citations in any guide
`/bpc-157-complete-guide` claims "over 70 published studies" but contains 0 PubMed/DOI/NEJM/ClinicalTrials.gov links (verified by direct HTML grep). The Retatrutide guide references the SURMOUNT-1 / NEJM 2023 trial in body text but has 0 outbound citation links. The `/about/editors` page promises every claim is "sourced to PubMed, NEJM, JAMA, or ClinicalTrials.gov" — the articles do not deliver on that promise. For a YMYL medical category, this is the single biggest reason ChatGPT / Perplexity / Gemini will not cite this site over a clinic blog or PubMed itself.

### H3. Single pseudonymous editor with no credentials for medical content
`/about/editors` lists exactly one editor: "LooksMax Agent · Independent Peptide Research Curator · 5+ years experience." For research peptides — an unapproved-for-human-use, injectable, YMYL category — AI models heavily down-weight authors without verifiable credentials (MD, PharmD, PhD, RN, RD). No real name, no LinkedIn, no Google Scholar, no institutional affiliation. The Person schema with `sameAs:[reddit, x]` is correctly emitted, but those are the only two external identity anchors and neither is authoritative.

### H4. /faq has no FAQPage schema and no on-page answers
The literal `/faq` URL renders 13 question titles with no answer text and no `FAQPage` JSON-LD (verified in HTML — 0 `Question` types). FAQ schema exists on the *guide* pages but not on the page literally called FAQ. This is the single highest-leverage AI-Overviews opportunity on the site.

### H5. No physical address, phone, or business registration anywhere
`/contact` shows only `support@peptidesmuscle.com`. No street address, no phone, no parent company, no country of operation, no Terms / Privacy / Refund pages linked from the footer. For a vendor selling injectable products, this is a major Trustworthiness signal absence and meaningfully reduces citation probability in AI shopping/medical contexts.

---

## Medium Priority Issues (Fix Within 1 Month)

### M1. No Trustpilot, Wikipedia, or Reddit thread presence
Direct site searches (`"peptidesmuscle"`, `peptidesmuscle site:reddit.com`, `peptidesmuscle trustpilot OR wikipedia`) return zero third-party reviews, zero Wikipedia article, zero Reddit discussion thread about the vendor. Competitors (Pure Peptides UK, Pure Peptide Labs, Verified Peptides, Biotech Peptides) all have 300–1,500+ Trustpilot reviews. AI models use third-party platforms for entity recognition; the brand is invisible to them.

### M2. No FAQ schema on product pages
`/products/bpc-157-10mg` renders a "BPC-157 10mg — FAQs" section but has 0 `Question` JSON-LD types in HTML. Each product carrying 4–6 SKU-specific Q&As in `FAQPage` schema is one of the highest-ROI AI-citability wins in e-commerce.

### M3. No GTIN/MPN/SKU on Product schema; missing shipping & return policy markup
Product schema declares `brand:Phiogen`, price, currency, availability, but no `sku`, `mpn`, `gtin`, `itemCondition`, `hasMerchantReturnPolicy`, or `shippingDetails`. Google requires the latter two for Shopping rich results; AI shopping assistants (ChatGPT shopping, Perplexity Shopping) prefer products with complete identification.

### M4. No HowTo schema on injection/reconstitution content
`/how-to-inject-peptides-beginners-guide` and `/bacteriostatic-water-peptide-reconstitution-guide` are textbook `HowTo` schema candidates with step-by-step procedures. Currently neither emits `HowTo` JSON-LD. This is a direct path into ChatGPT and Google AI Overviews "how to" answers.

### M5. Marketing tone in guide intros undermines citability
The BPC-157 guide opens "the first peptide serious athletes reach for" — sales language. AI models extract neutral, declarative sentences for citations ("BPC-157 is a 15-amino-acid peptide derived from gastric juice that..."). Rewrite the first 200 words of each guide to lead with the neutral mechanism/definition, then move positioning later.

### M6. Variant consolidation: each peptide size is a separate URL
BPC-157 5mg, 10mg, capsules, and the BPC-157+TB-500 blend (5mg/10mg/20mg) each live on their own URL. AOD-9604 has separate 2mg/5mg/10mg pages. DSIP has 5/10/15mg. Same-compound-different-size should be ONE parent product URL with an `offers` array of variants. The current pattern dilutes link equity, splits review aggregation, and creates near-duplicate-content risk on AI dedup.

### M7. /faq hub redirects all answers to guides
The `/faq` page is structured as a category index pointing to deeper guides instead of holding answers itself. Per Google's 2020 FAQPage policy, FAQ schema is allowed on exactly ONE URL per Q&A set — but answers should live where users land. Restructure: keep 13–20 evergreen Q&As fully answered on `/faq` with `FAQPage` markup; don't replicate the same Q&As across product/guide FAQs.

---

## Low Priority Issues (Optimize When Possible)

- **L1.** Homepage HTML payload is 363 KB — large for first paint; investigate Core Web Vitals (INP / LCP) on mobile.
- **L2.** Single OG image (`max-avatar.png`) used sitewide; per-page OG images improve social/AI preview citations.
- **L3.** Guide pages average only 2 `<img>` elements — consider adding annotated mechanism diagrams (good for AI image citation and for Reddit/X embed).
- **L4.** No `MedicalScholarlyArticle` schema on long-form guides; `MedicalWebPage` is correct but `MedicalScholarlyArticle` with a `citation` array would be the upgrade once H2 is fixed.
- **L5.** Homepage renders only `Organization` + `WebSite` + `SearchAction` — add `ItemList` schema for the "Most Researched" featured products grid.
- **L6.** Footer lacks visible links to Terms / Privacy / Shipping / Refund pages (or they do not exist) — both a trust and a `WebSite.publisher.legalName` schema gap.
- **L7.** Headings on guides skip from H1 → H2 → H2 (no H3 sub-structure on dosing tables, FAQs); a tighter outline helps AI passage extraction.
- **L8.** Image `alt` text on product pages is generic ("BPC-157 10mg") rather than descriptive ("BPC-157 10mg lyophilized peptide vial with research-only label") — minor lift.
- **L9.** OG images for guides reuse the avatar; per-guide hero/diagram OG would improve social citation.

---

## Category Deep Dives

### AI Citability — 65/100

**What's working**

- `llms.txt` is genuinely excellent. It uses the canonical `# Title > Summary` H1+blockquote structure, declares "All content is public and free to cite. Canonical origin: ...", and groups links into `## Core Guides`, `## Looksmaxxing`, `## Specialty`, `## Featured Products`, `## Stacks`, `## Category Pages`, `## Optional`. This is in the top 1% of `llms.txt` files. AI agents (Claude, ChatGPT, Perplexity) can ingest this and reach any guide in one hop.
- `FAQPage` + `Question` + `Answer` schema is correctly implemented on guide pages (`/bpc-157-complete-guide` carries FAQPage with embedded Q&As).
- Guides are structured for extraction: "Results Timeline" (Days 1–7, Weeks 2–4), "Injury-Specific Protocols" (Tendon/Joint/Muscle/Gut), "Dosing & Reconstitution" tables. These are high-citability passage formats.
- Internal cross-linking is dense — guides link to products, products link to guides, stacks link to component peptides.

**What's hurting the score**

- Marketing-leading paragraphs on guides (see M5).
- Empty `/faq` page is a wasted asset (see H4).
- Product page FAQ sections are visible HTML but not schema (see M2).
- Citation absence (see H2) — without sourced claims, AI extraction defaults to safer competitors.

**Top rewrite targets (highest citability lift per hour of work)**

1. `/faq` — build out 15–20 fully answered evergreen Q&As with `FAQPage` schema. Highest single ROI on the site.
2. First 200 words of every "Complete Guide" — lead with neutral mechanism/definition, push positioning lower.
3. Add a `Key Facts` table at the top of each peptide guide (CAS number, sequence, half-life, primary mechanism, primary trial cited). Tables are AI gold.

### Brand Authority — 22/100

This is the single weakest dimension and will drag the whole audit until it is improved.

| Platform | Presence | Evidence |
|---|---|---|
| Wikipedia article | None | No article exists for "PeptidesMuscle" |
| Trustpilot | None | Direct search returns zero results; competitors have 300–1,500+ reviews |
| Reddit organic mentions | None | `peptidesmuscle site:reddit.com` returns 0 links |
| YouTube review videos | None | No review/unboxing content surfaced |
| LinkedIn company page | Unknown / not surfaced | Not linked from site, not surfaced in search |
| Press / news mentions | None | No news coverage in search (NPR / Scientific American articles surfaced cover peptides generally, not this brand) |
| Backlinks from authority sites | Likely thin | No PubMed, NEJM, JAMA, university, or .gov linking inferred |
| Brand X/Twitter account | Yes (`@LooksMax_Agent` via Person schema) | Engagement/follower signals not measured here |
| Brand Reddit account | Yes (`u/Loud-Department3185`) | Same — not measured |

For an AI model deciding whether to cite peptidesmuscle.com vs. a Cleveland Clinic blog post or a PubMed paper, the absence of corroborating third-party signals is decisive. The site is "discoverable" but not "trusted" — and AI models conflate the two.

**Highest-ROI brand authority moves**

1. **Trustpilot:** Claim the profile, add review collection to post-purchase email. Target: 100+ reviews in 90 days. This single move would lift the score 15+ points.
2. **Reddit:** A real, transparent presence on r/Peptides, r/longevity, r/Looksmaxxing — answer questions, link guides where genuinely helpful. Generic vendor link-dumping is counterproductive.
3. **Wikipedia:** Not the brand article (won't survive notability) but ensure individual peptide articles (BPC-157, Tirzepatide, Epitalon, Retatrutide) cite high-quality external sources — and consider whether your guides could become reliable enough for inclusion.
4. **YouTube:** Even one well-produced video per major peptide (mechanism + dosing + protocol) creates entity associations AI models scrape from transcripts.
5. **Press / podcast outreach:** Place the editor on biohacker / longevity / fitness podcasts with named-guest credit. Each episode creates a citable third-party mention.

### Content E-E-A-T — 38/100

| Pillar | Score | Findings |
|---|---|---|
| Experience | Low | No first-person protocols, no documented n=1 results, no editor's lived peptide experience disclosed |
| Expertise | Very low | "5+ years independent research curator" — no MD/PharmD/PhD/RN/RD; no published research; pseudonymous |
| Authoritativeness | Low | No external citations TO the site found in search; no PubMed/medical citation network |
| Trustworthiness | Low | No physical address, phone, or business registration; promised study citations not delivered; AggregateRating with N=1 |

**Notable positive:** the `/about/editors` page does articulate editorial standards (PubMed/NEJM/JAMA/ClinicalTrials.gov sourcing, named accountability). Closing the gap between *stated* and *executed* standards is the cheapest E-E-A-T win — when guides actually carry the citation links, the trust score lifts immediately.

**Notable risk:** selling injectable research peptides in the US is a legally gray category. The "research only" disclaimer is present and correct. But the absence of business registration / parent company creates ambiguity for an AI deciding whether to cite for medical-adjacent queries.

### Technical GEO — 88/100

This is the strongest category. Specific findings from raw HTML / header inspection:

**robots.txt** explicitly allows: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, ChatGPT-User, OAI-SearchBot, Applebot-Extended, Amazonbot, Meta-ExternalAgent, Diffbot. Default `User-agent: *` allows all except `/api/` and `/go/` (correct). No `crawl-delay`. Sitemap declared.

**llms.txt** present, well-formed, with proper section hierarchy and a canonical-origin / cite-permission statement. Top quartile.

**Sitemap** at `/sitemap.xml` returns ~226 URLs as a `urlset`, each with `lastmod` and `priority` — most recent updates 2026-04-14. Index pattern (homepage 1.0, products/blog 0.9, category 0.8, contact 0.4) is correct.

**Rendering:** Vercel-hosted Next.js. HTML response is fully populated server-side — JSON-LD, headings, content, and meta all present in initial response without JavaScript execution. AI bots that don't run JS get full content. `x-vercel-cache: HIT` confirms CDN caching.

**Security headers:** `strict-transport-security: max-age=63072000; includeSubDomains; preload`, `x-content-type-options: nosniff`, `x-frame-options: SAMEORIGIN`, `referrer-policy: strict-origin-when-cross-origin`, restrictive `permissions-policy`. HTTP/2.

**Canonical handling:** `<link rel="canonical">` present on homepage; needs spot-check across deeper URLs (sitemap is on `www.` apex, robots.txt also points to `www.` — internally consistent).

**Why not higher than 88?**

- Page weight: homepage 363 KB, product page 116 KB, guide 96 KB. These are heavy for mobile and may impact Core Web Vitals (INP — replacement for FID — and LCP), which Google uses as a ranking input that flows into AI Overviews eligibility. A real Lighthouse run is warranted.
- No `Article` / `MedicalScholarlyArticle` on long-form guides (uses `MedicalWebPage`, valid but not optimal).
- No verified `hreflang` audit; no verified XML sitemap segmentation by content type.

### Schema & Structured Data — 70/100

**Inventory (verified directly in HTML):**

| Page | Schema Types Found |
|---|---|
| Homepage `/` | `Organization`, `WebSite` + `SearchAction`, `ImageObject` |
| Product `/products/bpc-157-10mg` | `Product`, `Offer` (price, priceCurrency, availability:InStock), `AggregateRating`, `Review`, `Brand` (Phiogen), `BreadcrumbList`, `ListItem`, `Organization`, `WebSite`, `ImageObject` |
| Guide `/bpc-157-complete-guide` | `MedicalWebPage`, `FAQPage`, `Question`, `Answer`, `Person` (author with sameAs), `Organization`, `WebSite`, `ImageObject` |
| Editors `/about/editors` | `AboutPage`, `Person` (with `sameAs` to Reddit + X), `Organization`, `WebSite` |
| FAQ `/faq` | `Organization`, `WebSite` (no `FAQPage`, no `Question`) — gap |

**Strong:** Product carries Brand + AggregateRating + Review + BreadcrumbList — better than most direct competitors. Guides correctly use `MedicalWebPage` (right vertical) and embed `FAQPage` natively. Person schema with `sameAs` is a textbook entity-association pattern.

**Gaps (in priority order):**
1. AggregateRating reviewCount=1 ratingValue=98 (see H1 — fix today).
2. No FAQPage schema on `/faq` or on individual product pages.
3. No GTIN/MPN/SKU/itemCondition/hasMerchantReturnPolicy/shippingDetails on Offer.
4. No HowTo schema on procedural guides.
5. No ItemList schema on category and homepage product grids.
6. No `MedicalCondition` / `Drug` / `MedicalEntity` references in MedicalWebPage `about` field.
7. Homepage `Organization` schema present but `sameAs` and `legalName` / `address` not verified.

### Platform Optimization — 55/100

| Platform | Readiness | Notes |
|---|---|---|
| Google AI Overviews | Medium | Technical foundation strong; YMYL E-E-A-T weakness will exclude site from medical-query Overviews. Schema is in good shape. |
| ChatGPT (search + browsing) | High | GPTBot allowed, llms.txt published, content in initial HTML, FAQPage schema on guides. Likely retrieved; citation likelihood limited by H2/H3. |
| Perplexity | Medium-High | PerplexityBot allowed; Perplexity weights citations heavily — H2 (no studies cited) is the binding constraint. |
| Google Gemini | Medium | Google-Extended allowed; Gemini's medical citation bar is the highest of the platforms; needs credentialed authorship. |
| Bing Copilot | Medium-High | Bing crawlers fully allowed; no Bing-specific gaps. |

**Platform-specific quick wins:**
- For ChatGPT shopping: add GTIN/MPN to Product schema (M3).
- For Perplexity: every claim → linked source. This is the platform that most rewards citation density.
- For Gemini medical: even one MD reviewing flagship guides as "Medically reviewed by …" with `Person.hasCredential` would lift the score 5–10 points by itself.

---

## Quick Wins (Implement This Week)

1. **Remove or fix the AggregateRating block on every product page** (currently `reviewCount:1, ratingValue:98`). Either delete `aggregateRating` from the JSON-LD until you have ≥10 honest reviews, or wire in real review aggregation. *Risk: structured-data manual action.*
2. **Build out `/faq` with 15–20 fully answered Q&As + valid `FAQPage` JSON-LD.** Currently zero answers and zero schema on the page literally called FAQ.
3. **Add `FAQPage` JSON-LD to every product page** with the 4–6 SKU-specific questions already rendered as plain HTML.
4. **Add citation links to the top 3 guides** (BPC-157, Tirzepatide, Retatrutide). PubMed PMID + DOI for the 3–5 anchor studies each. The Retatrutide guide already references "NEJM 2023" — link it.
5. **Add `gtin` / `mpn` / `sku` and `hasMerchantReturnPolicy` + `shippingDetails` to all Product/Offer schema.** Required for Shopping rich results and for AI shopping assistants.

---

## 30-Day Action Plan

### Week 1 — Trust signal repair
- [ ] Fix AggregateRating schema sitewide (remove or wire to real reviews)
- [ ] Add full answers + FAQPage schema to `/faq`
- [ ] Add FAQPage schema to all 60+ product pages
- [ ] Publish a real `/about` page with business entity, country of operation, and editorial board
- [ ] Add Terms / Privacy / Shipping / Refund pages and link from footer

### Week 2 — Citation backfill on flagship guides
- [ ] BPC-157 guide: cite ≥5 PubMed studies inline with PMID + DOI
- [ ] Tirzepatide guide: link SURMOUNT-1 and SURPASS trials
- [ ] Retatrutide guide: link NEJM 2023 trial directly
- [ ] Semaglutide guide: link STEP-1 trial
- [ ] BPC-157, TB-500 guides: link key animal-model studies and human safety reviews
- [ ] Add `MedicalScholarlyArticle` schema with `citation:[]` array to upgraded guides

### Week 3 — Brand authority foundation
- [ ] Claim Trustpilot profile, set up post-purchase review request flow
- [ ] Set up LinkedIn company page with editorial team
- [ ] Submit individual peptide guides to peptide subreddits as resources where rules permit (high-quality contribution only)
- [ ] Reach out to 5 biohacker/longevity podcasts for an editor guest spot
- [ ] Publish 1 long-form YouTube video on BPC-157 mechanism (anchor video for entity association)

### Week 4 — Variant consolidation + HowTo schema
- [ ] Consolidate same-compound-different-size into single parent product URLs with `offers[]` variant array (BPC-157 5mg/10mg/capsules → one URL; AOD-9604 2/5/10mg → one URL; DSIP 5/10/15mg → one URL; etc.)
- [ ] Add `HowTo` JSON-LD to `/how-to-inject-peptides-beginners-guide` and `/bacteriostatic-water-peptide-reconstitution-guide`
- [ ] Add `ItemList` schema to homepage "Most Researched" grid and to `/products`, `/stacks`
- [ ] Spot-check canonical tags across deep pages (`/products/*`, `/blog/*`)
- [ ] Run Lighthouse on 5 representative pages — fix any LCP/INP regressions exposed

---

## Appendix A: Pages Analyzed

| URL | Title | Key Findings |
|---|---|---|
| `/` | PeptidesMuscle homepage | Org + WebSite + SearchAction schema; OG complete; canonical present; 363 KB payload |
| `/robots.txt` | n/a | All AI crawlers explicitly allowed; `/api/` and `/go/` blocked correctly |
| `/llms.txt` | n/a | Excellent — top-tier structure, cite permission, full link inventory |
| `/sitemap.xml` | n/a | 226 URLs, `lastmod` + `priority`, fresh dates (2026-04-14) |
| `/faq` | Peptides Muscle FAQ | **Critical gap**: 13 question titles, 0 answers, 0 FAQPage schema |
| `/contact` | Contact | **Trust gap**: only email, no address/phone/registration |
| `/stacks` | Stacks | 5 named stacks, internal links to component peptides, no schema detected |
| `/about/editors` | Editors & Contributors | AboutPage + Person schema with sameAs; single pseudonymous editor |
| `/products/bpc-157-10mg` | BPC-157 10mg | Rich Product schema; H1 issue: AggregateRating reviewCount=1 ratingValue=98 |
| `/bpc-157-complete-guide` | BPC-157 Complete Protocol Guide | MedicalWebPage + FAQPage schema; 0 study citations; marketing-led intro |
| `/retatrutide-complete-guide-results-dosage` | Retatrutide Complete Guide | Same pattern: schema fine, 0 citation links despite NEJM reference in body |

## Appendix B: External Brand Search Results

| Query | Outcome |
|---|---|
| `"peptidesmuscle"` | Only the brand's own pages returned — no third-party mentions |
| `"peptidesmuscle" trustpilot OR youtube OR wikipedia` | Zero brand-specific results; competitors dominate |
| `peptidesmuscle.com reviews reddit` | Zero brand-specific results |
| `peptidesmuscle site:reddit.com` | "No links found" |
| `peptidesmuscle.com peptides review legitimate vendor` | Zero brand-specific results |

## Appendix C: Competitor Brand Authority Benchmark (for context)

| Vendor | Trustpilot reviews |
|---|---|
| Pure Peptide Labs | 1,520 |
| Verified Peptides | 342 |
| Biotech Peptides | 334 |
| Peptide Systems | 5★ (count not surfaced) |
| Peptides (peptideproduct.eu) | 289 |
| **PeptidesMuscle** | **0** |

This is the single largest gap to close in the 90-day window.

---

*Audit methodology: WebFetch for content extraction, raw HTTP fetches for HTML/header verification, WebSearch for third-party brand presence. Composite GEO Score weights per the geo-audit skill specification (Citability 25%, Brand 20%, E-E-A-T 20%, Technical 15%, Schema 10%, Platform 10%).*
