// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/i18n',
		'@nuxt/icon',
	],
	ssr: false,
	devtools: { enabled: false },
	app: {
		baseURL: '/portfolio/',
		head: {
			title: 'Portfolio - David Simón',
			htmlAttrs: {
				lang: 'es',
			},
			meta: [
				{
					name: 'description',
					content:
						'Welcome to my portfolio! I\'m David, a full stack web developer. Explore my work and projects here.',
				},
				{
					name: 'author',
					content: 'David Simón - @DeibidSE',
				},
			],
			link: [
				{ rel: 'icon', href: '/portfolio/favicon.ico', sizes: 'any' },
				{ rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/portfolio/favicons/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/portfolio/favicons/site.webmanifest' },
			],
		},
	},
	css: ['@/assets/css/tailwind.css', '@/assets/css/index.css'],
	runtimeConfig: {
		public: {
			BASE_URL: '/portfolio',
		},
	},
	compatibilityDate: '2025-03-13',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
	i18n: {
		strategy: 'no_prefix',
		locales: [
			{ code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
			{ code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
		],
		defaultLocale: 'es',
	},
	icon: {
		mode: 'svg',
		customCollections: [
			{
				prefix: 'my-icon',
				dir: './app/assets/icons',
			},
		],
	},
})
