title: "Building a Modern Personal Website with Nuxt 4 and Nuxt UI"
description: "Learn how to create a professional personal website using the latest Nuxt 4, Nuxt UI, and Tailwind CSS v4"
date: 2024-12-15
tags: ["Nuxt", "Vue", "Tailwind CSS", "Nuxt UI", "Web Development"]
author: "Dominick Gianino"
image: "/images/blog/nuxt-personal-website.png"
---
# Building a Modern Personal Website with Nuxt 4 and Nuxt UI

After years of maintaining a static HTML site, I decided it was time for a complete rebuild using modern tools. Here's how I built this site with Nuxt 4, Nuxt UI, and Nuxt Content.

## Why Nuxt 4?

Nuxt 4 brings significant improvements:
- **Improved performance** with Vite 6 and Rolldown
- **Better TypeScript support** with enhanced auto-imports
- **Simplified configuration** with better defaults
- **Enhanced developer experience** with faster HMR

## The Stack

- **Nuxt 4** - The intuitive Vue framework
- **Nuxt UI v4** - Beautiful, accessible components
- **Nuxt Content v3** - File-based CMS for blog/portfolio
- **Tailwind CSS v4** - Utility-first styling with CSS-first config
- **TypeScript** - End-to-end type safety

## Project Structure

```
personal-website/
├── app/
│   ├── components/       # Reusable components
│   ├── pages/            # File-based routing
│   ├── layouts/          # Page layouts
│   └── app.vue           # Root component
├── content/
│   ├── blog/             # Blog posts (markdown)
│   └── portfolio/        # Portfolio projects (YAML + markdown)
├── public/               # Static assets
└── nuxt.config.ts        # Configuration
```

## Key Features Implemented

### 1. Static Site Generation

```typescript
// nuxt.config.ts
routeRules: {
  '/': { prerender: true },
  '/blog/**': { prerender: true },
  '/portfolio/**': { prerender: true },
}
```

### 2. Dark Mode Support

Nuxt UI includes `@nuxt/color-mode` out of the box. Just add the button:

```vue
<UColorModeButton />
```

### 3. Content-Driven Pages

Blog posts are just markdown files with frontmatter:

```markdown
---
title: "My Post"
date: 2024-12-15
tags: ["Nuxt", "Vue"]
---

Content here...
```

### 4. Component Auto-imports

No manual imports needed - Nuxt UI components are auto-imported:

```vue
<template>
  <UButton color="primary">Click me</UButton>
  <UCard>Content</UCard>
</template>
```

## Styling with Tailwind CSS v4

The new `@theme` directive makes customization clean:

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme static {
  --font-sans: 'Inter', system-ui, sans-serif;
  --color-primary-500: #3b82f6;
  /* ... more tokens */
}
```

## Deployment

Deploy anywhere static hosting works:
- **GitHub Pages** (free, this site)
- **Vercel** / **Netlify** / **Cloudflare Pages**
- **AWS S3 + CloudFront** (production)

## What's Next

- Add blog search with Nuxt Content
- Implement portfolio filtering
- Add RSS feed for blog
- Set up analytics

---

*This post was written in Markdown and rendered with Nuxt Content's Prose components.*