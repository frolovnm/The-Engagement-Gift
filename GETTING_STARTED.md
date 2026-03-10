# Getting Started with Your Gifts Blog

Welcome to your new Astro blog! Here's everything you need to know to get started.

## 🚀 Quick Start (30 seconds)

```bash
cd "Gifts Blog"
npm run dev
```

Your blog is now running at `http://localhost:3000` with hot reload!

## 📖 What You Have

✅ **Astro Framework** - Fast static site generation  
✅ **Tailwind CSS** - Modern, responsive styling  
✅ **Content Collections** - Type-safe markdown blog posts  
✅ **Pagefind Search** - Fast client-side full-text search  
✅ **SEO Ready** - Sitemap, RSS feeds, OpenGraph metadata  
✅ **Cloudflare Pages** - Free, zero-config deployment  

## 📝 Next Steps

### 1. Create Your First Blog Post

Create `src/content/blog/my-first-post.md`:

```markdown
---
title: "Welcome to My Gift Blog"
description: "The best gift ideas and guides"
pubDate: 2024-03-10
heroImage: "../assets/blog-placeholder-1.jpg"
---

# Welcome!

Write your content in Markdown here...

- Use lists
- Add **bold** and *italic*
- Include [links](https://example.com)
```

### 2. Customize Site Info

Edit `src/consts.ts`:

```typescript
export const SITE_TITLE = "My Awesome Gift Blog";
export const SITE_DESCRIPTION = "Curated gift ideas for everyone";
```

### 3. Update Site Domain

In `astro.config.mjs`, change:

```javascript
site: 'https://yourdomain.com',
```

### 4. Customize Styling

- Edit `src/styles/global.css` for global styles
- Create `tailwind.config.mjs` to customize Tailwind colors, fonts, etc.
- Modify component styles in individual `.astro` files

### 5. Add the Search Component

To add search to any page, import it:

```astro
---
import Search from '../components/Search.astro';
---

<Search />
```

## 🏗️ Project Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (creates dist/ with search index)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI directly
npm run astro
```

## 📂 File Structure Guide

| Path | Purpose |
|------|---------|
| `src/content/blog/` | Your blog posts (Markdown files) |
| `src/components/` | Reusable components (Header, Footer, Search, etc.) |
| `src/layouts/` | Page templates (BlogPost layout) |
| `src/pages/` | Routes (index, about, blog listing) |
| `src/styles/global.css` | Global styles + Tailwind directives |
| `src/assets/` | Images and static files |
| `public/` | Files copied as-is to dist/ |
| `dist/` | Build output (run `npm run build` to generate) |

## 🌐 Deployment

### Deploy to Cloudflare Pages (5 minutes)

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. **Connect to Git**
4. Select your repository
5. Build command: `npm run build`
6. Build output: `dist`
7. **Save and deploy!**

See `DEPLOYMENT.md` for detailed instructions.

## 🎨 Styling with Tailwind

The project includes Tailwind CSS. Use utility classes:

```astro
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Click me
</button>
```

## 🔍 Search Integration

Pagefind is automatically integrated:

- Search index builds during `npm run build`
- Add `<Search />` component to pages
- Search works entirely client-side (no server needed)
- Automatically indexes all pages

## 📊 SEO Features

Already enabled:
- ✅ Dynamic sitemap at `/sitemap-index.xml`
- ✅ RSS feed at `/rss.xml`
- ✅ OpenGraph meta tags
- ✅ Canonical URLs
- ✅ Mobile-responsive viewport

## 🖼️ Images

### Small Collection (1-100 images)
Keep images in `src/assets/` and use Astro Assets:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/my-image.jpg';
---

<Image src={heroImage} alt="Description" />
```

### Large Collection (1000s of images)
Configure Cloudflare R2 (see DEPLOYMENT.md):

```markdown
![Image](https://r2-bucket.com/images/photo.jpg)
```

## 🤔 Common Tasks

**Change site title and description**
→ Edit `src/consts.ts`

**Add a new page**
→ Create `.astro` file in `src/pages/`

**Add navigation links**
→ Edit `src/components/Header.astro`

**Customize colors**
→ Edit `tailwind.config.mjs` or `src/styles/global.css`

**Add RSS subscribers**
→ RSS feed already enabled at `/rss.xml`

**Add categories/tags**
→ Add to blog post frontmatter and create dynamic routes

## 🚨 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Build fails?**
```bash
rm -rf dist node_modules
npm install
npm run build
```

**Search not working?**
- Ensure `dist/pagefind/` exists
- Check Search component is on the page
- Run `npm run preview` to test locally

## 📚 Learn More

- **Astro**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com
- **Pagefind**: https://pagefind.app
- **Cloudflare Pages**: https://developers.cloudflare.com/pages

---

**You're all set!** 🎉 Start creating amazing gift content now.
