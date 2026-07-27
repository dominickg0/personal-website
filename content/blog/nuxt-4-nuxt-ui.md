---
title: "Getting Started with Nuxt 4 and Nuxt UI"
description: "A comprehensive guide to building modern web applications with Nuxt 4 and Nuxt UI"
date: 2025-01-20
tags: ["nuxt", "vue", "typescript", "ui"]
---

# Getting Started with Nuxt 4 and Nuxt UI

Nuxt 4 brings significant improvements to the Vue meta-framework, and combined with Nuxt UI, you have a powerful stack for building beautiful, accessible web applications.

## Why Nuxt 4?

Nuxt 4 introduces:
- **Improved performance** with Vite 6 and Nitro 3
- **Better developer experience** with enhanced auto-imports
- **Simplified configuration** with composable modules
- **Native TypeScript support** without extra setup

## Setting Up Nuxt UI

```bash
npx nuxi@latest init my-app
cd my-app
pnpm add @nuxt/ui tailwindcss
```

Then configure in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css']
})
```

## Creating Components

Nuxt UI provides 100+ accessible components. Here's a simple card example:

```vue
<template>
  <UCard class="w-full max-w-md">
    <template #header>
      <UAvatar src="/avatar.png" name="Nuxt UI" size="xl" />
    </template>

    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Getting Started</h3>
      <p class="text-muted">Build beautiful UIs faster than ever.</p>
    </div>

    <template #footer>
      <UButton to="/docs" trailing-icon="i-lucide-arrow-right">
        Read Docs
      </UButton>
    </template>
  </UCard>
</template>
```

## Dark Mode Support

Nuxt UI includes automatic dark mode support via `@nuxt/color-mode`. Just add the toggle:

```vue
<UColorModeButton />
```

## Conclusion

Nuxt 4 + Nuxt UI is a fantastic combination for modern web development. The component library is comprehensive, accessible, and beautifully designed out of the box.

Start building today!