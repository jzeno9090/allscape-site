# Allscape Services — Website

The official website for [Allscape Services LLC](https://allscapeservices.com), an outdoor services company serving Northern Illinois since 2000.

Built with **Next.js 15** + **Tailwind CSS** + **TypeScript**, deployed on **Vercel**.

---

## Tech stack

- **Framework:** Next.js 15 (App Router, React Server Components)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript
- **Hosting:** Vercel
- **Content:** JSON files in `/content` (no CMS)
- **Photos:** Supabase Storage (`allscape-public` bucket)

## Quick start

```bash
npm install
npm run dev          # → http://localhost:3000
npm run build        # production build
npm run type-check   # TypeScript check
```

## Project structure

```
allscape-site/
├── content/                      ← Source-of-truth content (edit here)
│   ├── business.json             ← NAP, hours, brand info
│   ├── services.json             ← 4 services with full content
│   └── cities.json               ← 70 cities with coordinates
│
├── src/
│   ├── app/                      ← Next.js App Router pages
│   │   ├── layout.tsx            ← Root layout (header/footer/SEO)
│   │   ├── page.tsx              ← Homepage
│   │   ├── globals.css
│   │   ├── sitemap.ts            ← Auto-generated sitemap
│   │   ├── robots.ts             ← Auto-generated robots.txt
│   │   ├── about/
│   │   ├── contact/
│   │   ├── reviews/
│   │   ├── faqs/
│   │   ├── blog/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── services/
│   │   │   ├── page.tsx          ← /services index
│   │   │   └── [slug]/page.tsx   ← Service detail template
│   │   └── service-areas/
│   │       ├── page.tsx          ← /service-areas index
│   │       └── [city]/page.tsx   ← City template (× 70)
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── JsonLd.tsx
│   │
│   └── lib/
│       ├── content.ts            ← Content loaders
│       ├── schema.ts             ← JSON-LD schema generators
│       └── types.ts
│
├── next.config.js                ← 301 redirects from old Squarespace URLs
├── tailwind.config.ts            ← Brand tokens
└── package.json
```

## Editing content

All content lives in `/content/*.json`. Edit, commit, push — Vercel auto-deploys.

**Update business info** → `content/business.json`
**Update service content** → `content/services.json`
**Add a city** → `content/cities.json` (new entry generates a new page automatically)
**Add a redirect** → `next.config.js`

## SEO built in

- Server-rendered HTML
- LocalBusiness JSON-LD on every page
- Per-city schema with city-specific `areaServed`
- FAQPage schema on every service page
- BreadcrumbList schema everywhere
- Auto sitemap with all 70+ city pages
- 301 redirects from every old Squarespace URL
- Open Graph + Twitter cards
- Canonical URLs

## Deploying to Vercel

1. Push code to GitHub
2. Visit vercel.com/new, connect your repo, click Deploy
3. Add custom domain `allscapeservices.com` in Vercel settings
4. Submit `https://allscapeservices.com/sitemap.xml` to Google Search Console

## Brand

- Navy `#0f1e2d` · Gold `#c9a449` · Paper `#fcfbf7`
- Display font: Source Serif 4
- Body font: Manrope
- Tagline: "Sprinkler systems, landscape lighting, holiday lighting, and paver restoration. Serving Northern Illinois & Southern Wisconsin since 2000."
- DO NOT use "family-owned" anywhere.

## License

© 2026 Allscape Services LLC. All rights reserved.
