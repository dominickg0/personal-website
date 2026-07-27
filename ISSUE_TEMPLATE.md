## Overview

Build a modern, professional personal website with:
- **Home page**: Hero, about, skills, featured projects, latest blog posts
- **Blog section**: Markdown-based blog with Nuxt Content, pagination, tags, reading time, prev/next navigation
- **Portfolio section**: Filterable project cards with detail pages (tech stack, GitHub/demo links)
- **Styleguide**: Comprehensive design system documentation (colors, typography, spacing, shadows, border radius, component gallery)
- **GitHub & LinkedIn links** in header/footer

## Tech Stack

- **Nuxt 4** (static site generation)
- **Nuxt UI v4.10+** (free tier components)
- **Nuxt Content v3** (blog posts & portfolio projects as markdown/YAML)
- **Tailwind CSS v4** with `@theme` directive for design tokens
- **TypeScript** throughout

## Design System

Custom theme in `app/assets/css/main.css`:
- **Font**: Inter (sans) + JetBrains Mono (mono) via `@nuxt/fonts`
- **Primary color**: Blue palette (full 50-950 scale)
- **Brand color**: Custom indigo/purple brand palette
- **Neutral**: Slate

## Content Structure

```
content/
├── blog/
│   ├── welcome-to-my-blog.md
│   ├── nuxt-4-and-nuxt-ui.md
│   ├── building-with-nuxt-content.md
│   ├── modern-personal-website-guide.md
│   └── type-safe-api-development.md
└── portfolio/
    ├── ecommerce-platform.yml
    ├── task-management-api.yml
    └── realtime-chat-application.yml
```

## Pages Implemented

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about, skills, featured projects, latest posts |
| `/blog` | Blog index with pagination (6 posts/page) |
| `/blog/[slug]` | Individual blog post with Prose, meta, prev/next |
| `/portfolio` | Filterable portfolio grid with category tabs |
| `/portfolio/[slug]` | Project detail with tech stack badges, links |
| `/styleguide` | Full design system documentation |

## Deployment

- **Primary**: GitHub Pages (via GitHub Actions)
- **Future**: AWS Route53 + S3 + CloudFront

## Next Steps

- [ ] Add GitHub Actions workflow for GitHub Pages deployment
- [ ] Add placeholder images for blog posts & portfolio projects
- [ ] Configure custom domain (dominickgianino.com) for GitHub Pages
- [ ] Add sitemap generation (@nuxtjs/sitemap)
- [ ] Add robots.txt
- [ ] Test dark mode thoroughly
- [ ] Verify responsive design on mobile breakpoints

## Links

- **GitHub**: https://github.com/dominickg0
- **LinkedIn**: https://linkedin.com/in/dominick-gianino-48a652414/