# Download These Images

The site needs your real images. Sandbox couldn't reach Squarespace's CDN to download them automatically. Takes ~5 minutes to do manually.

## How to download

For each URL below:
1. Right-click the link → **Save Image As...**
2. Save to `C:\Users\User\Desktop\Projects\allscape-site\public\images\`
3. **Use the exact filename listed** (the code expects these names)

After all images are saved, your dev server will auto-reload and they'll appear.

## The 7 images

### 1. Logo (most important)
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/f1a65a2e-5d5e-4d3f-8de4-bedad645a875/Final_AllscapeLogo.png?format=1500w
**Save as:** `logo.png`

### 2. Hero irrigation photo (replaces the food photo)
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/93be0db6-4891-438c-8488-d1b9e66316eb/Screen+Shot+2022-01-08+at+11.50.52+AM.png
**Save as:** `hero-irrigation.jpg` (yes, save as .jpg even though source is .png)

### 3. Irrigation service card
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/415ac643-1239-4f9b-923c-52e1aa536038/unsplash-image-1_K74KTKke8.jpg
**Save as:** `card-irrigation.jpg`

### 4. Landscape lighting service card
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/67d97701-26b1-42d4-83df-6da47b082ecb/unsplash-image-WvHrrR1C5Po.jpg
**Save as:** `card-landscape-lighting.jpg`

### 5. Holiday lighting service card
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/0b11f9ed-285b-4b06-b1c3-12d27736a4cc/unsplash-image-Mu_9w7l1koI.jpg
**Save as:** `card-holiday-lighting.jpg`

### 6. Christmas lights image (alt for holiday section)
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/1731880456932-3BJNK7746JWFOSWWVGSA/unsplash-image-D4PBlzhwAy4.jpg
**Save as:** `card-christmas-lights.jpg`

### 7. Footer graphic (optional, can skip)
**URL:** https://images.squarespace-cdn.com/content/v1/61573965a4c1b46e6314e2d1/4d2ec19d-9c32-4377-97f8-425ad7fa37f4/Footer+Graphic+copy.jpg
**Save as:** `footer-graphic.jpg`

---

## Verify

After downloading, your `public/images/` folder should look like:

```
allscape-site/public/images/
├── card-christmas-lights.jpg
├── card-holiday-lighting.jpg
├── card-irrigation.jpg
├── card-landscape-lighting.jpg
├── footer-graphic.jpg
├── hero-irrigation.jpg
└── logo.png
```

The dev server (`npm run dev`) will hot-reload — refresh the browser and the food photo should be replaced with your real irrigation photo and your logo should appear in the header.

---

## Long-term: move to Supabase Storage

Local images work fine for launch. Long-term, upload these same images to your `allscape-public` Supabase bucket, then change the `<img src="/images/X" />` references to point at the Supabase URLs. That gives you a CDN, automatic image optimization, and easy photo management without code changes.

I'll help you do that swap once you have GBP photos / project photos to add. For now: get launched with these.
