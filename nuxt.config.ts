// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/portfolio/**': { prerender: true },
    '/styleguide': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          }
        }
      }
    }
  },

  // GitHub Pages deployment
  app: {
    baseURL: '/personal-website/',
    buildAssetsDir: '/personal-website/_nuxt/'
  },

  // Static site generation
  nitro: {
    preset: 'static',
    static: true
  },

  // Sitemap configuration
  site: {
    url: 'https://dominickgianino.com/personal-website',
    name: 'Dominick Gianino - Personal Website'
  },

  sitemap: {
    siteUrl: 'https://dominickgianino.com/personal-website',
    autoLastmod: true,
    exclude: ['/styleguide'],
    routes: async () => {
      const { $content } = await import('#nuxt/server')
      const [blogPosts, portfolioProjects] = await Promise.all([
        $content('blog').only(['slug', 'date']).find(),
        $content('portfolio').only(['slug', 'date']).find()
      ])
      const blogRoutes = blogPosts.map(post => `/blog/${post.slug}`)
      const portfolioRoutes = portfolioProjects.map(project => `/portfolio/${project.slug}`)
      return [...blogRoutes, ...portfolioRoutes]
    }
  },

  robots: {
    robotsTxt: false,
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/styleguide']
      }
    ],
    sitemap: 'https://dominickgianino.com/personal-website/sitemap.xml'
  }
})
