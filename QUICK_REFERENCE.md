# Gifts Blog - Quick Reference Card

## Essential Commands
```bash
npm run dev              # Start dev server (http://localhost:4321)
npm run build            # Build production + Pagefind search index
npm run preview          # Preview production build
npm run astro            # Run Astro CLI directly
```

## File Locations

| Task | File |
|------|------|
| Write blog posts | `src/content/blog/*.md` |
| Customize site info | `src/consts.ts` |
| Edit header/nav | `src/components/Header.astro` |
| Modify styles | `src/styles/global.css` or `tailwind.config.mjs` |
| Add pages | `src/pages/*.astro` |
| Configure site | `astro.config.mjs` |

## Blog Post Template
```markdown
---
title: "Post Title"
description: "Meta description"
pubDate: 2024-03-10
heroImage: "../assets/image.jpg"
---

# Heading

Your markdown content here...
```

## Add Search to Any Page
```astro
---
import Search from '../components/Search.astro';
---

<Search />
```

## Deployment Checklist
- [ ] Update `site:` URL in `astro.config.mjs`
- [ ] Update `SITE_TITLE` in `src/consts.ts`
- [ ] Test with `npm run build && npm run preview`
- [ ] Push to GitHub
- [ ] Connect repo to Cloudflare Pages
- [ ] Build: `npm run build` | Publish: `dist`
- [ ] Add custom domain (optional)

## Important Files
- **README.md** - Full documentation
- **GETTING_STARTED.md** - Step-by-step guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SETUP.md** - Setup overview

## Tech Stack Reference
| Layer | Technology | Docs |
|-------|------------|------|
| SSG | Astro 5.17 | astro.build |
| Styling | Tailwind 4.2 | tailwindcss.com |
| CMS | Content Collections | docs.astro.build/content |
| Search | Pagefind 1.4 | pagefind.app |
| Hosting | Cloudflare Pages | pages.cloudflare.com |
| Images | Astro Assets + Sharp | docs.astro.build/assets |

## Common Customizations

**Change site title:**
```typescript
// src/consts.ts
export const SITE_TITLE = "Your Blog Name";
```

**Change primary color:**
```css
/* src/styles/global.css */
:root {
  --accent: #your-color;
}
```

**Use Tailwind colors:**
```astro
<div class="text-blue-600 bg-gray-100 p-4 rounded-lg">
  Content
</div>
```

## Troubleshooting

**Port 4321 in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies fail to install?**
```bash
npm cache clean --force
npm install
```

**Search not appearing?**
- Check `dist/pagefind/` exists after build
- Verify Search component imported on page
- Run `npm run preview` to test locally

## File Size Tips
- Keep images under 2MB each
- Use Astro's Image component for optimization
- For 1000s of images, use Cloudflare R2
- Blog posts: Markdown is naturally lightweight

## Performance Targets
✅ 100/100 Lighthouse  
✅ <100ms search response  
✅ <1s build time  
✅ <50KB HTML output  

## SEO Features Enabled
✅ Dynamic sitemap  
✅ RSS feed  
✅ OpenGraph tags  
✅ Canonical URLs  
✅ Mobile-friendly  

---
Need more help? Read GETTING_STARTED.md
