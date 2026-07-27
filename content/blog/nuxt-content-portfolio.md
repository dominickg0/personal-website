---
title: "Building a Personal Portfolio with Nuxt Content"
description: "How I built this portfolio site using Nuxt Content v3 for static content management"
date: 2025-01-25
tags: ["portfolio", "nuxt", "content", "static-site"]
image: "/images/blog/nuxt-content-portfolio.svg"
---

# Building a Personal Portfolio with Nuxt Content

When rebuilding my personal website, I wanted a solution that was simple, fast, and didn't require a headless CMS. Enter Nuxt Content v3.

## Why Nuxt Content?

Nuxt Content v3 is a file-based headless CMS that:
- Stores content as Markdown/YAML files in your repo
- Provides a powerful query API (`queryContent()`)
- Supports MDC (Markdown Components) for interactive content
- Generates TypeScript types from your content
- Works seamlessly with Nuxt's static generation

## Project Structure

```
content/
├── blog/
│   ├── welcome.md
│   └── nuxt-4-nuxt-ui.md
└── portfolio/
    ├── project-a.yml
    └── project-b.yml
```

## Querying Content

```ts
// Get all blog posts
const posts = await queryContent('blog')
  .where({ _partial: false })
  .sort({ date: -1 })
  .find()

// Get single post
const post = await queryContent('blog')
  .where({ _path: '/blog/my-post' })
  .findOne()
```

## Rendering with UProse

Nuxt UI's `UProse` component renders MDC content beautifully:

```vue
<template>
  <UProse :value="post.body" />
</template>
```

## Static Generation

With `routeRules` in `nuxt.config.ts`, all content routes are pre-rendered:

```ts
routeRules: {
  '/blog/**': { prerender: true },
  '/portfolio/**': { prerender: true }
}
```

This gives you a fully static site perfect for GitHub Pages or any static host.

## Benefits

- **Zero infrastructure** - just files in Git
- **Type-safe** - auto-generated TypeScript types
- **Fast** - pre-rendered static HTML
- **Flexible** - markdown with Vue components
- **Version controlled** - content lives with code

Perfect for personal sites, blogs, and documentation!