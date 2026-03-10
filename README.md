# Gifts Blog - Astro + Tailwind CSS + Pagefind

A modern, fast, and beautiful blog platform built with **Astro**, styled with **Tailwind CSS**, powered by **Content Collections** for markdown-based content, and featuring **Pagefind** for full-text search. Deploy to **Cloudflare Pages** for zero-config hosting.

## ✨ Features

- ⚡ **Static Site Generation** - Lightning-fast with Astro
- 🎨 **Tailwind CSS** - Modern utility-first styling
- 📝 **Content Collections** - Organize blog posts with type-safe frontmatter
- 🔍 **Pagefind Search** - Fast, client-side full-text search
- 🌐 **SEO Optimized** - Sitemap, RSS feeds, OpenGraph metadata
- 🚀 **Cloudflare Pages Ready** - One-click deployment
- 📱 **Responsive Design** - Mobile-first approach
- 🖼️ **Image Optimization** - Astro Assets with Sharp

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro (Static Site Generation) |
| Styling | Tailwind CSS v4 |
| CMS | Content Collections (Markdown) |
| Search | Pagefind |
| Hosting | Cloudflare Pages |
| Images | Astro Assets + Sharp |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Search.astro    # Pagefind search integration
│   └── BaseHead.astro  # Meta & SEO component
├── content/            # Content Collections
│   └── blog/          # Blog posts (Markdown)
├── layouts/           # Page layouts
│   └── BlogPost.astro # Blog post template
├── pages/             # Route pages
│   ├── index.astro    # Home page
│   ├── about.astro    # About page
│   └── blog/
│       ├── index.astro      # Blog listing
│       └── [...slug].astro  # Dynamic blog post pages
├── styles/
│   └── global.css    # Global styles + Tailwind directives
└── consts.ts         # Site-wide constants

public/               # Static assets
dist/                 # Build output (generated)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
cd "Gifts Blog"
npm install
```

### Development

Start the local dev server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building

Generate the static site and search index:

```bash
npm run build
```

This will:
1. Build the Astro site to `dist/`
2. Generate the Pagefind search index

Preview the built site locally:

```bash
npm run preview
```

## 📝 Creating Blog Posts

Blog posts live in `src/content/blog/` as Markdown files.

### Create a new post

Create a file like `my-awesome-gift.md`:

```markdown
---
title: "My Awesome Gift Idea"
description: "A thoughtful gift guide for everyone"
pubDate: 2024-03-10
heroImage: "../assets/gift-image.jpg"
---

# Gift Guide

Your content here...
```

### Frontmatter fields

- **title** (required) - Post title
- **description** (required) - Meta description & preview text
- **pubDate** (required) - Publication date (YYYY-MM-DD)
- **updatedDate** (optional) - Last update date
- **heroImage** (optional) - Featured image path

Posts are automatically discovered and available at `/blog/[slug]`

## 🔍 Search Integration

The Pagefind search component is included in `src/components/Search.astro` and can be added to any page:

```astro
---
import Search from '../components/Search.astro';
---

<Search />
```

Search is automatically indexed during the build process and works entirely client-side.

## 🎨 Customization

### Update Site Metadata

Edit `src/consts.ts`:

```typescript
export const SITE_TITLE = "Gifts Blog";
export const SITE_DESCRIPTION = "Thoughtful gift ideas and guides";
```

### Tailwind Configuration

Customize Tailwind in `tailwind.config.mjs` or modify global styles in `src/styles/global.css`

### Update Site URL

Change the `site` property in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## 🚢 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Connect your repository in Cloudflare Pages
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Other Hosts

The static output in `dist/` can be deployed to any static host:
- Netlify
- Vercel
- GitHub Pages
- Any web server

## 📊 Performance

- 100/100 Lighthouse score
- Zero JavaScript by default (Astro island architecture)
- Static HTML generation
- SEO optimized with canonical URLs, Open Graph, and sitemaps

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Pagefind Documentation](https://pagefind.app)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

## 📝 License

MIT - Feel free to use this template for your own projects!
````

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
