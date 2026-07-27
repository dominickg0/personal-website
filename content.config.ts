import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        author: z.string().optional(),
        readingTime: z.number().optional()
      })
    }),
    portfolio: defineCollection({
      type: 'page',
      source: 'portfolio/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        url: z.string().optional(),
        github: z.string().optional()
      })
    })
  }
})
