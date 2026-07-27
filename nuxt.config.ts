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
    buildAssetsDir: '/personal-website/_nuxt/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/personal-website/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/personal-website/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/personal-website/favicon-16x16.png' },
        { rel: 'apple-touch-icon', href: '/personal-website/apple-touch-icon.png' },
        { rel: 'manifest', href: '/personal-website/site.webmanifest' }
      ]
    }
  },

  // Static site generation
  nitro: {
    preset: 'static',
    static: true,
    prerender: {
      routes: [
        '/',
        '/blog',
        '/portfolio',
        '/styleguide',
        '/blog/building-modern-personal-website',
        '/blog/nuxt-4-nuxt-ui',
        '/blog/nuxt-content-portfolio',
        '/blog/typesafe-api-development',
        '/blog/welcome',
        '/blog/building-professional-github-dev-environment',
        '/portfolio/nuxt-3-typescript-boilerplate',
        '/portfolio/analytics-dashboard',
        '/portfolio/ecommerce-api'
      ],
      crawlLinks: true
    }
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
    routes: [
      '/',
      '/blog',
      '/portfolio',
      '/styleguide',
      '/blog/building-modern-personal-website',
      '/blog/nuxt-4-nuxt-ui',
      '/blog/nuxt-content-portfolio',
      '/blog/typesafe-api-development',
      '/blog/welcome',
      '/blog/building-professional-github-dev-environment',
      '/portfolio/nuxt-3-typescript-boilerplate',
      '/portfolio/analytics-dashboard',
      '/portfolio/ecommerce-api'
    ]
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
