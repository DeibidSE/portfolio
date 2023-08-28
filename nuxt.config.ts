// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/MyPortfolio/',
    buildAssetsDir: 'assets',
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
          content: '¡Bienvenido a mi portfolio! Soy David, un desarrollador web full stack. Explora mi trabajo y proyectos aquí.'
        },
        {
          name: 'author',
          content: 'David Simón - DeibidSE'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/MyPortfolio/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ],
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/index.scss'
  ],
  eslint: {
    lintOnStart: false
  },
  nitro: {
    compressPublicAssets: true
  }
})
