# Allscape Site — Deployment Guide

Quick steps to get this site live on Vercel at `allscapeservices.com`.

---

## What you have

A complete Next.js 15 + Tailwind website with:
- Homepage (Direction 2: Clean & Trustworthy)
- 4 service pages (lawn irrigation, landscape lighting, holiday lighting, paver restoration)
- 73 city pages, auto-generated from `content/cities.json`
- About, Reviews, FAQs, Blog, Contact, Privacy, Terms
- Auto sitemap + robots.txt
- LocalBusiness JSON-LD schema on every page (per-city schema on city pages)
- All 70+ 301 redirects from old Squarespace URLs preserved

---

## Step 1 — Local test (5 min, optional but recommended)

Open a terminal in the project folder and run:

```bash
npm install --legacy-peer-deps
npm run dev
```

Visit `http://localhost:3000` to see the site running locally. You should see the homepage with the navy + gold theme.

If it works, stop the dev server with `Ctrl+C` and continue.

---

## Step 2 — Push to GitHub (5 min)

```bash
# In the project folder
git init
git add .
git commit -m "Initial commit: Allscape Services website"

# Create a new GitHub repo first at github.com/new (name it: allscape-site)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/allscape-site.git
git branch -M main
git push -u origin main
```

---

## Step 3 — Deploy to Vercel (3 min)

1. Go to https://vercel.com/new
2. Click **Import** next to your `allscape-site` GitHub repo
3. Accept all the defaults — Vercel auto-detects Next.js
4. Click **Deploy**
5. Wait ~60 seconds — you'll get a temporary URL like `allscape-site-xxx.vercel.app`

Visit the URL to confirm the site is live.

---

## Step 4 — Connect your domain (10 min)

In your new Vercel project:

1. Go to **Settings → Domains**
2. Add `allscapeservices.com`
3. Add `www.allscapeservices.com`
4. Vercel will show you DNS records to update

In your domain registrar (probably Squarespace's domain manager or GoDaddy):

- Update the DNS records as shown by Vercel
- Squarespace specifically: Settings → Domains → manage DNS → point A and CNAME records to Vercel
- DNS propagation takes 5 min – 24 hr

Once DNS resolves, your site is live at `allscapeservices.com`.

---

## Step 5 — Submit to Google (5 min)

1. Go to Google Search Console
2. Add your property (if not already verified)
3. Submit sitemap: `https://allscapeservices.com/sitemap.xml`
4. In **URL Inspection**, request indexing for the homepage and 2-3 service pages

This tells Google your site has changed and to start re-crawling.

---

## Step 6 — Wind down Squarespace

After 7 days of monitoring (no broken pages, traffic stable):

- Cancel Squarespace subscription
- Or downgrade to a free tier as a backup

---

## Editing content after launch

All content lives in `/content/*.json`:

| Want to change | File |
|---|---|
| Phone, address, hours | `content/business.json` |
| Service text, FAQs | `content/services.json` |
| Add/remove cities | `content/cities.json` |
| Add a redirect | `next.config.js` |

Workflow:

```bash
# Edit the JSON file
git add .
git commit -m "Update phone number"
git push

# Vercel auto-deploys in ~60 seconds
```

That's it. No CMS to learn, no Squarespace lock-in, full control.

---

## Adding photos

Photos live in your Supabase Storage `allscape-public` bucket. To use one in the site:

1. Upload via Supabase Storage dashboard
2. Get the public URL (right-click → Get URL)
3. Drop it into the relevant page or content file as the image URL

The current site uses placeholder photos from Unsplash. We'll swap them for your real photos in week 2.

---

## Need help?

If anything goes wrong during deploy, send me:
- The error message
- The Vercel deployment logs (View → Deployment → Build Logs)
- A screenshot of what you're seeing

We'll work through it.
