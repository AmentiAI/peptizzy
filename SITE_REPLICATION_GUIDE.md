# Site Replication Guide — 50 Unique Ranking Sites

This document explains exactly how PeptidesMuscle is built and how to clone it into 50 unique, fully-indexed, SEO-dominant sites — zero repeated content, maximum bot access.

---

## Table of Contents

1. [Tech Stack Overview](#1-tech-stack-overview)
2. [Full File Structure](#2-full-file-structure)
3. [How SEO Works in This Codebase](#3-how-seo-works-in-this-codebase)
4. [How to Set Up Maximum Bot Access](#4-how-to-set-up-maximum-bot-access)
5. [Sitemap Setup](#5-sitemap-setup)
6. [How to Make 50 Unique Sites Fast](#6-how-to-make-50-unique-sites-fast)
7. [Content Uniqueness System](#7-content-uniqueness-system)
8. [Deployment Per Site (Vercel)](#8-deployment-per-site-vercel)
9. [Checklist: Per-Site Launch](#9-checklist-per-site-launch)
10. [50-Site Topic Ideas](#10-50-site-topic-ideas)

---

## 1. Tech Stack Overview

| Layer | Tool | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Server-rendered = Google indexes everything |
| Language | TypeScript | Type-safe, catches data errors early |
| Styling | Tailwind CSS | Utility classes, no naming issues |
| Animation | Framer Motion | Smooth UX without heavy JS |
| Icons | Lucide React | Clean, consistent SVG icons |
| Images | Next.js `<Image />` + Sharp | Auto-optimized, correct aspect ratios |
| Database | Neon (serverless PostgreSQL) | Free tier, fast cold starts on Vercel |
| AI Chat | OpenAI GPT-4o | On-site AI assistant (drives engagement) |
| Deployment | Vercel | Auto CI/CD, edge network, zero config |
| Fonts | Google Fonts (Inter + Playfair Display + DM Mono) | Loaded in `layout.tsx` |

---

## 2. Full File Structure

```
my-site/
├── app/                          ← All pages live here (Next.js App Router)
│   ├── layout.tsx               ← Root layout: Navbar, Footer, global metadata
│   ├── page.tsx                 ← Homepage
│   ├── globals.css              ← CSS variables, typography, global classes
│   ├── favicon.ico
│   ├── icon.png                 ← 512x512 favicon
│   ├── sitemap.ts               ← Auto-generates /sitemap.xml
│   ├── robots.ts                ← Controls bot access (see Section 4)
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         ← OpenAI chat API endpoint
│   ├── products/
│   │   ├── page.tsx             ← Product listing with filters
│   │   └── [slug]/
│   │       └── page.tsx         ← Dynamic product detail pages
│   ├── stacks/
│   │   ├── page.tsx             ← Protocol stacks listing
│   │   └── [slug]/
│   │       └── page.tsx         ← Dynamic stack pages
│   ├── looks-maxing/page.tsx
│   ├── anti-aging/page.tsx
│   ├── body-composition/page.tsx
│   ├── guide/page.tsx
│   ├── faq/page.tsx
│   ├── learn/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ChatWidget.tsx           ← Floating AI assistant
│   ├── ProductCard.tsx
│   └── AnimateIn.tsx
│
├── lib/
│   ├── products.ts              ← ALL product data (names, descriptions, SEO titles)
│   ├── stacks.ts                ← Protocol stack data
│   └── db.ts                   ← Neon database client + search functions
│
├── public/                      ← Static files (images, icons)
├── scripts/
│   └── seed-db.mjs             ← Seeds Neon database from products.ts
│
├── .env.local                   ← API keys (never commit this)
├── next.config.ts               ← Next.js config (image domains, etc.)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 3. How SEO Works in This Codebase

### Root Metadata (`app/layout.tsx`)

This is the fallback metadata for any page that doesn't define its own.

```typescript
export const metadata: Metadata = {
  title: 'SiteName | Primary Keyword for Peak Results',
  description: 'Your 155-character unique description. Include primary + secondary keywords naturally.',
  keywords: 'keyword1, keyword2, keyword3, keyword4, keyword5',
  openGraph: {
    title: 'SiteName | Primary Keyword',
    description: 'Same or similar to meta description.',
    type: 'website',
  },
};
```

**Rules:**
- Title: max 60 characters, primary keyword near the front
- Description: 140–160 characters, naturally written, includes a CTA
- Keywords: 5–8, no stuffing

---

### Per-Page Metadata

Every static page exports its own `metadata` object:

```typescript
// app/anti-aging/page.tsx
export const metadata: Metadata = {
  title: 'Anti-Aging Peptides | Reverse Biological Age with Proven Protocols | SiteName',
  description: 'Discover the top peptides for anti-aging. Epithalon, GHK-Cu, and NAD+ protocols backed by research.',
};
```

---

### Dynamic Page Metadata (Products, Stacks)

Dynamic routes use `generateMetadata()` — this gives every product/stack its own unique title and description:

```typescript
// app/products/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.seoTitle,           // e.g. "BPC-157 | Best Peptide for Healing Injuries"
    description: product.shortDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      type: 'website',
    },
  };
}
```

Each product in `lib/products.ts` has a dedicated `seoTitle` field — that's what makes 35+ product pages each rank on different keywords.

---

### Static Generation (`generateStaticParams`)

This pre-renders all dynamic pages at build time so Google gets real HTML:

```typescript
// app/products/[slug]/page.tsx
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
```

Add this to every `[slug]` route. Without it, dynamic pages render on demand — slower indexing.

---

### JSON-LD Structured Data (Add This Per Site)

Add this to `app/products/[slug]/page.tsx` inside the `<head>` to get rich results in Google:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.shortDescription,
      "image": product.image,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": product.affiliateUrl,
      },
    }),
  }}
/>
```

Also add `Organization` schema to `app/layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "YourSiteName",
      "url": "https://yourdomain.com",
      "description": "Your site description.",
    }),
  }}
/>
```

---

## 4. How to Set Up Maximum Bot Access

### Step 1 — Create `app/robots.ts`

This file controls every crawler. This config gives MAXIMUM access — all bots allowed, sitemap declared:

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',           // All crawlers
        allow: '/',               // Allow entire site
        disallow: ['/api/'],      // Block API routes (nothing valuable for bots there)
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Slurp',       // Yahoo
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
      },
      {
        userAgent: 'facebot',     // Facebook crawler
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
    host: 'https://yourdomain.com',
  };
}
```

This generates `/robots.txt` automatically. Verify it at `yourdomain.com/robots.txt`.

---

### Step 2 — Verify Bot Access Is Working

After deploy, check:

1. `yourdomain.com/robots.txt` — should show all user-agent rules
2. `yourdomain.com/sitemap.xml` — should show all URLs
3. Google Search Console → URL Inspection Tool → test any page
4. Bing Webmaster Tools → submit sitemap

---

### Step 3 — Submit Sitemap to All Search Engines

Do this immediately after each site goes live:

| Search Engine | Sitemap Submission URL |
|---|---|
| Google | `https://search.google.com/search-console` → Sitemaps |
| Bing | `https://www.bing.com/webmasters` → Sitemaps |
| Yandex | `https://webmaster.yandex.com` → Sitemaps |
| IndexNow | See below |

**IndexNow (Instant indexing for Bing + Yandex + others):**

```typescript
// app/api/indexnow/route.ts
export async function POST() {
  const urls = [
    'https://yourdomain.com/',
    'https://yourdomain.com/products',
    // add all your important pages
  ];

  await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: 'yourdomain.com',
      key: 'YOUR_INDEXNOW_KEY',      // generate at indexnow.org
      keyLocation: 'https://yourdomain.com/YOUR_INDEXNOW_KEY.txt',
      urlList: urls,
    }),
  });

  return Response.json({ submitted: urls.length });
}
```

Call this endpoint once after each deploy.

---

### Step 4 — Speed (Core Web Vitals = Ranking Signal)

Next.js handles most of this automatically, but verify:

- All images use `<Image />` with `width` and `height` set — prevents layout shift (CLS)
- Fonts loaded in `layout.tsx` with `display: swap`
- No blocking third-party scripts in `<head>`
- Run `npx @next/bundle-analyzer` to find large JS bundles

---

## 5. Sitemap Setup

The current `app/sitemap.ts` generates the XML sitemap automatically. Here's the pattern to follow:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';

const BASE_URL = 'https://yourdomain.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                         priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/products`,           priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/stacks`,             priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/looks-maxing`,       priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/anti-aging`,         priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/body-composition`,   priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/guide`,              priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/faq`,               priority: 0.5, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/learn`,             priority: 0.5, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`,           priority: 0.4, changeFrequency: 'yearly' },
  ];

  // Dynamic product pages
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  // Dynamic stack pages
  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...productPages, ...stackPages];
}
```

**Priority guide:**
- `1.0` — Homepage only
- `0.9` — Primary catalog/listing pages
- `0.8` — Individual product/service pages
- `0.7` — Category guides
- `0.5–0.6` — Supporting content (FAQ, learn)
- `0.4` — Contact, legal pages

---

## 6. How to Make 50 Unique Sites Fast

### The Core System

Every site follows this pattern:

```
1. Pick a niche topic (different for each site)
2. Copy the base codebase
3. Replace lib/products.ts with new niche-specific content
4. Replace lib/stacks.ts with niche-specific protocols
5. Update all metadata in layout.tsx + static pages
6. Update BASE_URL in sitemap.ts
7. Update robots.ts with new domain
8. Deploy to Vercel with a unique domain
9. Submit sitemap to Google + Bing
```

### Step-by-Step Replication

**Step 1 — Clone the repo**
```bash
git clone https://github.com/you/peptizzy.git new-site-name
cd new-site-name
npm install
```

**Step 2 — Update the domain everywhere**

Search and replace `peptizzy.com` (or your current domain) with the new domain in:
- `app/sitemap.ts` → `BASE_URL`
- `app/robots.ts` → `sitemap` and `host`
- `app/layout.tsx` → OpenGraph `url`

```bash
# Find all instances to update:
grep -r "yourolddomain.com" . --include="*.ts" --include="*.tsx"
```

**Step 3 — Replace `lib/products.ts`**

This is where 90% of the unique content lives. Each site needs a completely different products array. Keep the same TypeScript interface — only change the data:

```typescript
export interface Product {
  slug: string;               // URL: /products/this-slug
  name: string;               // Display name
  tagline: string;            // One-line hook
  price: number;
  category: string;
  tags: string[];
  image: string;
  affiliateUrl: string;       // Your affiliate link
  shortDescription: string;   // 150 chars, used as meta description
  fullDescription: string;    // 500-2000 words, unique content
  benefits: string[];         // 6-8 bullet points
  protocol: string;           // Dosing/usage instructions
  synergies: string[];        // Related product slugs
  seoTitle: string;           // Full SEO title for this product page
  deepDiveTitle: string;
  highlights: { title: string; body: string }[];
}
```

**Step 4 — Replace `lib/stacks.ts`**

Same approach — keep the interface, replace all data with niche-specific protocols.

**Step 5 — Update static page content**

Each of these files needs unique copy for the new niche:
- `app/page.tsx` — homepage hero, marquee items, FAQ section
- `app/looks-maxing/page.tsx` (rename to match your niche)
- `app/anti-aging/page.tsx`
- `app/body-composition/page.tsx`
- `app/guide/page.tsx`

**Step 6 — Update branding**

- `app/layout.tsx` → site name in metadata + navbar
- `components/Navbar.tsx` → logo text/image
- `components/Footer.tsx` → site name, links
- `components/ChatWidget.tsx` → AI persona name + system prompt
- `public/` → replace favicon, max-avatar.png

**Step 7 — Set new environment variables**

Create a new `.env.local`:
```
OPENAI_API_KEY=sk-...        # Same key works across all sites
DATABASE_URL=postgresql://...  # Create a new Neon database per site (free tier)
```

**Step 8 — Seed the database**
```bash
node scripts/seed-db.mjs
```

**Step 9 — Deploy**
```bash
vercel --prod
```

Set env vars in Vercel dashboard → Project Settings → Environment Variables.

---

## 7. Content Uniqueness System

Google penalizes duplicate content across domains. Every site needs to be genuinely different. Here's the system to ensure that:

### Layer 1 — Different Topic/Niche

Each of the 50 sites covers a different topic entirely. See [Section 10](#10-50-site-topic-ideas) for the full list.

### Layer 2 — Unique Product Data

`lib/products.ts` is the content engine. For each new site:

- **New slugs** — no two sites share a slug
- **New seoTitle** — different keyword target per product
- **New fullDescription** — minimum 500 unique words per product
- **New benefits** — different bullet points
- **New protocol** — different usage instructions
- **New affiliate links** — different affiliate program or different campaign URLs

Use this structure to write content fast:

```
Product Content Template:
1. What it is (1 paragraph)
2. How it works (mechanism of action, 1-2 paragraphs)
3. What results to expect (specific, measurable, 1 paragraph)
4. Who it's for (target user, 1 paragraph)
5. Protocol (exact dosing schedule)
6. What to stack it with (2-3 products from your catalog)
7. FAQ (3-5 Q&As — great for long-tail keyword ranking)
```

### Layer 3 — Unique Page Structures

Don't just change text — change the page layout too:

- Different category names and icons
- Different color scheme (change CSS variables in `globals.css`)
- Different homepage hero message and CTA
- Different FAQ questions

### Layer 4 — Unique Metadata Per Page

The `seoTitle` field in each product is what drives per-page keyword ranking. Make each one target a different long-tail keyword:

```typescript
// Good — targeting specific queries
seoTitle: 'BPC-157 for Tendon Repair | Best Healing Peptide 2025 | SiteName'
seoTitle: 'BPC-157 Gut Health | Fix Leaky Gut & IBD with Peptides | SiteName'
seoTitle: 'BPC-157 Dosage Guide | How to Use for Maximum Recovery | SiteName'

// Bad — generic, won't rank
seoTitle: 'BPC-157 | SiteName'
```

### Layer 5 — Internal Linking

The `synergies` array creates internal links between product pages. This:
- Passes link equity between pages
- Helps Google discover all pages faster
- Keeps users on site longer (lower bounce rate)

Make sure every product links to 2-4 other products via `synergies`.

---

## 8. Deployment Per Site (Vercel)

Each site gets its own Vercel project. The free plan allows unlimited projects.

### Initial Deploy

```bash
cd new-site-name
vercel                     # First time: follow prompts to create project
# Set project name to match domain
# Framework: Next.js (auto-detected)
# Build command: npm run build (default)
# Output directory: .next (default)
```

### Environment Variables

In Vercel dashboard: **Project → Settings → Environment Variables**

| Variable | Value |
|---|---|
| `OPENAI_API_KEY` | Your OpenAI key (same across all sites) |
| `DATABASE_URL` | Unique Neon DB URL per site |

### Custom Domain

In Vercel dashboard: **Project → Settings → Domains**

1. Add your domain
2. Copy the CNAME or A record Vercel gives you
3. Add it in your DNS provider (Namecheap, Cloudflare, etc.)
4. Wait for DNS propagation (usually <10 min on Cloudflare)

### Automatic Deploys

Connect your GitHub repo:
- Every `git push` to `main` triggers a new deploy
- Use separate branches per site, or separate repos

### Recommended: Monorepo Approach for 50 Sites

```
peptide-network/
├── sites/
│   ├── peptizzy/          ← Site 1
│   ├── sarms-guide/       ← Site 2
│   ├── nootropics-lab/    ← Site 3
│   └── ...
├── shared/
│   ├── components/        ← Shared Navbar, Footer, ChatWidget
│   └── lib/               ← Shared DB, OpenAI logic
└── package.json
```

Use `pnpm workspaces` or `turborepo` to manage this efficiently.

---

## 9. Checklist: Per-Site Launch

Use this for every new site before submitting to search engines:

### Pre-Launch
- [ ] All product `seoTitle` fields are unique and keyword-targeted
- [ ] All `shortDescription` fields are 140-160 characters
- [ ] All `fullDescription` fields are 500+ words of unique content
- [ ] `BASE_URL` in `sitemap.ts` matches the live domain
- [ ] `sitemap` and `host` in `robots.ts` match the live domain
- [ ] Root `metadata` in `layout.tsx` has unique title and description
- [ ] Every static page has its own exported `metadata`
- [ ] `generateStaticParams()` is in every `[slug]/page.tsx`
- [ ] `generateMetadata()` is in every `[slug]/page.tsx`
- [ ] JSON-LD structured data added to product pages
- [ ] Organization JSON-LD added to `layout.tsx`
- [ ] Favicon updated (`public/favicon.ico` + `public/icon.png`)
- [ ] AI chat persona updated in `components/ChatWidget.tsx`
- [ ] Neon database seeded (`node scripts/seed-db.mjs`)
- [ ] Environment variables set in Vercel

### Post-Launch
- [ ] Visit `yourdomain.com/robots.txt` — confirm it loads
- [ ] Visit `yourdomain.com/sitemap.xml` — confirm all URLs appear
- [ ] Test a product page in Google Search Console URL Inspector
- [ ] Submit sitemap in Google Search Console
- [ ] Submit sitemap in Bing Webmaster Tools
- [ ] Call IndexNow API to notify Bing/Yandex/others instantly
- [ ] Add site to Google Analytics or Plausible
- [ ] Verify Core Web Vitals pass in PageSpeed Insights
- [ ] Add 3-5 backlinks from related sites or social profiles (minimum to get initial crawling)

---

## 10. 50-Site Topic Ideas

Each site targets a completely different niche with different affiliate products, different content, different domain. All use the same codebase template.

| # | Site Concept | Primary Affiliate | Key Categories |
|---|---|---|---|
| 1 | PeptidesMuscle (current) | Apollo Peptides | Healing, Looks, Body Comp |
| 2 | SARMs Protocol Hub | SARMS.io or similar | Bulking, Cutting, Recomp |
| 3 | Nootropics Lab | Mind Nutrition | Cognition, Focus, Memory |
| 4 | Longevity Stack | DoNotAge.org | NAD+, Sirtuins, Autophagy |
| 5 | TRT & HRT Guide | Defy Medical (affliate) | Testosterone, Estrogen, DHEA |
| 6 | Creatine & Recovery | Bulk Supplements | Creatine, Beta-Alanine, L-Carnitine |
| 7 | Collagen Science | Vital Proteins | Types I-III, Marine, Bovine |
| 8 | Sleep Optimization | Momentous | Magnesium, Glycine, Ashwagandha |
| 9 | Gut Health Stack | Seed, Athletic Greens | Probiotics, Prebiotics, Enzymes |
| 10 | Red Light Therapy Guide | Joovv, Mito | Wavelengths, Protocols, Devices |
| 11 | Cold Plunge & Sauna | Plunge, Sunlighten | Hormesis, Recovery, Longevity |
| 12 | Biohacking Supplements | Neurohacker Collective | Adaptogens, Mitochondria |
| 13 | IV Therapy Protocols | Drip Hydration | NAD+ IV, Glutathione, Vitamin C |
| 14 | Hair Growth Science | Nutrafol, Viviscal | DHT Blockers, Minoxidil, Biotin |
| 15 | Skin Actives HQ | Paula's Choice | Retinol, Niacinamide, AHA/BHA |
| 16 | Pre-Workout Guide | Transparent Labs | Caffeine, L-Citrulline, Betas |
| 17 | Women's Hormone Stack | Thorne, Pure Encaps | Progesterone, Estrogen, Adrenal |
| 18 | Athletic Recovery | Momentous, Thorne | Omega-3, Turmeric, Tart Cherry |
| 19 | Carnivore Supplements | Heart & Soil | Organ meats, Beef Liver, K2 |
| 20 | Mitochondria Protocol | ProHealth, DoNotAge | PQQ, CoQ10, NMN, Berberine |
| 21 | Mental Health Stack | Onnit, Neurohacker | 5-HTP, St. John's Wort, L-Theanine |
| 22 | Testosterone Optimization | Testofuel, Prime Male | Zinc, D3, Ashwagandha, Boron |
| 23 | Peptide Skincare Guide | Ord Beauty affiliate | GHK-Cu topicals, EGF, SNAP-8 |
| 24 | Ketosis & Fasting Stack | Perfect Keto, HVMN | Exogenous Ketones, MCT, Fasting |
| 25 | Methylation Protocol | Seeking Health | Methylfolate, B12, Choline |
| 26 | Adrenal & Cortisol | Designs for Health | Ashwagandha, Rhodiola, Phosphatidylserine |
| 27 | Joint Health Protocol | Thorne, NOW Foods | Collagen Type II, Boswellia, MSM |
| 28 | Eye Health Science | Lutenol, MacuHealth | Lutein, Zeaxanthin, Astaxanthin |
| 29 | Microbiome Mapping | Viome, Ombre | Probiotics, Fiber Types, Fermented |
| 30 | Stem Cell Activators | Life Extension | GDF-11, Klotho, FOXO4 peptides |
| 31 | Blood Sugar Stack | Designs for Health | Berberine, Chromium, ALA |
| 32 | Cardiovascular Protocol | Jarrow, Life Extension | CoQ10, Nattokinase, K2/D3 |
| 33 | Inflammation Protocols | Nordic Naturals | Omega-3, Curcumin, SPM |
| 34 | Deep Sleep Stack | Momentous, Thorne | Magnesium L-Threonate, Glycine, GABA |
| 35 | Stress & Burnout Guide | Ashwagandha, Cortisol | Adaptogens, Nervines, Nervines |
| 36 | Immune Stack | Thorne, Metagenics | Zinc, Vitamin D, Elderberry |
| 37 | Lean Bulking Protocols | Transparent Labs | Protein timing, Creatine, Beta-Alanine |
| 38 | Anti-Glycation Guide | Life Extension | Carnosine, Benfotiamine, AGE breakers |
| 39 | Vascular Health Hub | Jarrow, Source Naturals | Nattokinase, Serrapeptase, Garlic |
| 40 | Men's Fertility Stack | FertilAid, Fairhaven | Zinc, CoQ10, L-Carnitine, Folate |
| 41 | Women's Fertility Guide | Fairhaven Health | Inositol, CoQ10, DHEA, B6 |
| 42 | Cognitive Aging Reversal | BrainMD, Neurohacker | Bacopa, Lion's Mane, PS |
| 43 | Detox Protocols | Pure Encaps | Glutathione, NAC, ALA, Milk Thistle |
| 44 | Longevity Fasting Guide | HVMN, Bulletproof | Fasting mimicry, Rapamycin, NR |
| 45 | Sports Peptides Guide | Apollo (second site) | TB-500, BPC-157 for athletes |
| 46 | Post-Cycle Therapy Hub | Various | SERMs, AI, Natural PCT |
| 47 | Electrolytes & Hydration | LMNT, Buoy | Sodium, Potassium, Magnesium |
| 48 | Thyroid Optimization | Integrative Therapeutics | Iodine, Selenium, L-Tyrosine |
| 49 | Circadian Rhythm Stack | Troscriptions | Blue light blocking, Melanin precursors |
| 50 | Peptide Beginner's Guide | Apollo (third site) | Entry-level peptides, starter stacks |

---

## Quick Reference: Key Commands

```bash
# Start new site
git clone https://github.com/you/peptizzy.git new-site-name
cd new-site-name && npm install

# Dev server
npm run dev

# Build (check for errors before deploy)
npm run build

# Deploy to Vercel
vercel --prod

# Seed database
node scripts/seed-db.mjs

# Find all domain references to update
grep -r "peptizzy" . --include="*.ts" --include="*.tsx" --include="*.js"
```

---

## Key Files to Edit Per New Site

In order of importance:

1. `lib/products.ts` — all product content (most important)
2. `lib/stacks.ts` — protocol stacks
3. `app/layout.tsx` — root metadata + site name
4. `app/sitemap.ts` — BASE_URL
5. `app/robots.ts` — domain in sitemap + host
6. `app/page.tsx` — homepage copy
7. `components/Navbar.tsx` — logo/brand name
8. `components/Footer.tsx` — brand name + links
9. `components/ChatWidget.tsx` — AI persona name + system prompt
10. `.env.local` + Vercel env vars — new DATABASE_URL
