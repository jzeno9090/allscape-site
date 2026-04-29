# Allscape Services — Website

The official website for [JZ Allscape Services LLC](https://allscapeservices.com), serving Northern Illinois & Southern Wisconsin since 2000.

Built with **Next.js 15** + **Tailwind CSS** + **TypeScript**, deployed on **Vercel**.

---

## Tech stack

- **Framework:** Next.js 15 (App Router, React Server Components, React 19)
- **Styling:** Tailwind CSS 3.4 — Plus Jakarta Sans (single font family)
- **Language:** TypeScript
- **Hosting:** Vercel
- **Content:** JSON files in `/content` (no CMS)
- **Lead capture:** Jobber Work Request embed at `/contact`

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev          # → http://localhost:3000
npm run build        # production build
npm run type-check   # TypeScript check
```

## Project structure

```
allscape-site/
├── content/                      ← Source-of-truth content (edit here)
│   ├── business.json             ← NAP, hours, brand info, legal entity
│   ├── services.json             ← 4 services with subheadings + FAQs
│   ├── cities.json               ← 78 cities (70 IL + 8 WI Walworth)
│   ├── reviews.json              ← Curated customer reviews
│   └── plumbers.json             ← RPZ plumber directory by city
│
├── public/
│   ├── images/                   ← Logo, hero photos, service cards
│   └── videos/                   ← Homepage hero + lawn-irrigation hero
│
├── src/
│   ├── app/                      ← Next.js App Router pages
│   │   ├── layout.tsx            ← Root layout (header/footer/SEO)
│   │   ├── page.tsx              ← Homepage (video hero)
│   │   ├── globals.css
│   │   ├── sitemap.ts            ← Auto-generated sitemap
│   │   ├── robots.ts             ← Auto-generated robots.txt
│   │   ├── about/, faqs/, reviews/, contact/, privacy/, terms/
│   │   ├── rpz-plumbers-by-city/
│   │   ├── services/
│   │   │   ├── page.tsx          ← /services index
│   │   │   └── [slug]/page.tsx   ← Service detail (× 4)
│   │   └── service-areas/
│   │       ├── page.tsx          ← /service-areas index
│   │       └── [city]/page.tsx   ← City detail (× 78)
│   │
│   ├── components/
│   │   ├── Header.tsx            ← Top bar + main nav, "Request Service" CTA
│   │   ├── Footer.tsx            ← Dark green footer
│   │   ├── JsonLd.tsx            ← JSON-LD injector
│   │   └── JobberRequestForm.tsx ← Jobber embed wrapper
│   │
│   └── lib/
│       ├── content.ts            ← Content loaders
│       ├── schema.ts             ← JSON-LD generators (LocalBusiness,
│       │                           citySchema, serviceSchema, FAQPage,
│       │                           reviewsPageSchema, breadcrumb)
│       └── types.ts
│
├── next.config.js                ← 70+ 301 redirects from old URLs
├── tailwind.config.ts            ← Brand tokens (green palette)
└── package.json
```

## Editing content

All content lives in `/content/*.json`. Edit, commit, push — Vercel auto-deploys.

| Want to change | File |
|---|---|
| Phone, address, hours, legal name | `content/business.json` |
| Service text, FAQs | `content/services.json` |
| Add/remove cities | `content/cities.json` (set `"state": "WI"` for Wisconsin towns) |
| Reviews list | `content/reviews.json` |
| RPZ plumbers | `content/plumbers.json` |
| Add a redirect | `next.config.js` |

## Critical rules

- **Request CTAs use `<a href="/contact">`, NEVER `<Link>`.** Jobber's third-party script doesn't survive Next.js SPA navigation.
- **Always pair "Northern Illinois" with "& Southern Wisconsin"** in copy and metadata.
- **`&amp;` ONLY in JSX text content**, never in TS string literals (metadata descriptions output literal `&amp;` if encoded).
- **City pages use `city.state ?? 'IL'`** for state code.
- **No booking on the website** — only request forms. Booking happens in Jobber/Zesight.

## SEO built in

- Server-rendered HTML
- LocalBusiness JSON-LD on every page (areaServed dynamically derived from cities.json)
- Per-city schema with city-specific `areaServed` + lat/lng
- FAQPage schema on every service page + sitewide `/faqs`
- Review/CollectionPage schema on `/reviews`
- BreadcrumbList schema everywhere
- Auto sitemap with all 78 city pages
- 70+ 301 redirects from old Squarespace URLs (drainage, hardscapes, christmas-lights, every IL city slug)
- Open Graph + Twitter cards
- Canonical URLs

## Deploying to Vercel

1. Push to GitHub `jzeno9090/allscape-site`
2. Vercel auto-deploys from `main`
3. Custom domain `allscapeservices.com` connected via single A record → `216.198.79.1` (Vercel anycast IP)
4. Submit `https://allscapeservices.com/sitemap.xml` to Google Search Console

## Brand

- **Greens** (from logo): `#4ea03c` brand · `#1a4d2a` deep · `#0d2818` ink · `#c5e2b3` soft
- **Paper:** `#fcfbf7` · `#f4f0e8` warm
- **Font:** Plus Jakarta Sans (display + body)
- **Tagline:** "Sprinkler systems, landscape lighting, holiday lighting & paver restoration — done right. Serving Northern Illinois & Southern Wisconsin since 2000."
- **Don't use:** "family-owned" anywhere.
- **Legal entity:** JZ Allscape Services LLC

## License

© 2026 JZ Allscape Services LLC. All rights reserved.
