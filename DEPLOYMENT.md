# Deployment & Configuration Guide

## Cloudflare Pages Setup

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Astro blog with Tailwind and Pagefind"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gifts-blog.git
git push -u origin main
```

### Step 2: Configure Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** → **Create a project**
3. Select **Connect to Git** and authorize GitHub
4. Select your `gifts-blog` repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

Cloudflare will automatically deploy on each push to `main`.

### Step 3: Custom Domain

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain (e.g., `gifts.example.com`)
4. Update DNS records as instructed

## Environment Setup

### Local Development

```bash
# Install dependencies
npm install

# Start dev server on http://localhost:3000
npm run dev

# Build for production (includes search index)
npm run build

# Preview production build
npm run preview
```

### Image Optimization with Cloudflare R2

For hosting 1000s of images, configure Cloudflare R2:

1. Create R2 bucket in Cloudflare dashboard
2. Install AWS CLI or use Cloudflare's direct upload
3. Update image paths in your markdown to point to R2 URLs:

```markdown
![Gift Image](https://r2-bucket-url.com/images/gift-1.jpg)
```

Alternatively, keep images in `src/assets/` for smaller image collections (under 100 images).

## Search Configuration

Pagefind automatically indexes all content during build. To customize search:

1. Edit `src/components/Search.astro` for UI styling
2. Pagefind respects `data-pagefind="ignore"` attributes to exclude content
3. Index is generated at `dist/pagefind/`

## SEO & Analytics

### Update Site Metadata

Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = "Your Gift Blog";
export const SITE_DESCRIPTION = "Thoughtful gift ideas and recommendations";
export const SITE_URL = "https://yourdomain.com";
```

### Add Analytics

In `src/components/BaseHead.astro`, add your analytics script:

```html
<!-- Google Analytics example -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Environment Variables

Create `.env` file for sensitive data (not committed to git):

```env
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

Update `.env.example` for documentation:

```env
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

## Performance Optimization

### Lighthouse Audit

Run locally:
```bash
npm run build
npm run preview
# Open http://localhost:3000 and audit with Chrome DevTools
```

### Optimizations Already Enabled

- ✅ Static HTML (no server overhead)
- ✅ Tailwind CSS purging (only used styles)
- ✅ Image optimization with Astro Assets
- ✅ Automatic sitemap generation
- ✅ RSS feed for subscribers
- ✅ Zero JavaScript by default (islands architecture)

### Further Optimization

1. Use Cloudflare's Page Rules for caching headers
2. Enable Brotli compression
3. Use Cloudflare's CDN for global edge distribution

## Troubleshooting

### Build fails with Pagefind error

```bash
# Clear Pagefind cache and rebuild
rm -rf dist/pagefind
npm run build
```

### Search not appearing on built site

1. Ensure `dist/pagefind/` directory exists
2. Check that Search component is imported in pages
3. Run `npm run preview` to test locally before deploying

### Images not loading in production

1. Check image paths are relative or use Astro Assets
2. For R2 images, ensure bucket is public
3. Verify images are deployed with correct paths

## Scaling Your Blog

### Multiple Authors

Add author field to frontmatter:
```markdown
---
title: "Post Title"
author: "Author Name"
pubDate: 2024-03-10
---
```

### Categories/Tags

Add to frontmatter and create dynamic routes:
```markdown
---
title: "Post Title"
tags: ["gift-guide", "birthday", "luxury"]
---
```

### RSS Customization

Edit `src/pages/rss.xml.ts` to customize feed structure

## Support & Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Pagefind Docs](https://pagefind.app/docs/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
