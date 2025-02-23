// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  eslint: { lintOnStart: false },
  ssr: false,
  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Portfolio - David Simón',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            "Welcome to my portfolio! I'm David, a full stack web developer. Explore my work and projects here."
        },
        {
          name: 'author',
          content: 'David Simón - @DeibidSE'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  },
  runtimeConfig: {
    public: {
      BASE_URL: '/portfolio'
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-icons',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'es'
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/index.css'],
  compatibilityDate: '2024-08-10'
})
