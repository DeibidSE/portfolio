import type { Skill } from './types.d'
import { FRONTEND_TYPE, BACKEND_TYPE, TOOLS_TYPE } from './types.d'

export const socialLinks = [
	{
		name: 'LinkedIn',
		icon: 'tabler:brand-linkedin',
		color: 'blue',
		url: 'https://www.linkedin.com/in/davidsimon98/',
	},
	{
		name: 'GitHub',
		icon: 'tabler:brand-github',
		color: 'default',
		url: 'https://github.com/DeibidSE',
	},
	{
		name: 'Email',
		icon: 'tabler:mail',
		color: 'orange',
		url: 'mailto:davidsimon98@outlook.com',
	},
]

export const skillList: Skill[] = [
	{
		name: 'JavaScript',
		image: 'logos:javascript',
		type: FRONTEND_TYPE,
	},
	{
		name: 'TypeScript',
		image: 'logos:typescript-icon',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Vue.js',
		image: 'logos:vue',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Nuxt',
		image: 'logos:nuxt-icon',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Pinia',
		image: 'logos:pinia',
		type: FRONTEND_TYPE,
	},
	{
		name: 'HTML5',
		image: 'logos:html-5',
		type: FRONTEND_TYPE,
	},
	{
		name: 'CSS',
		image: 'vscode-icons:file-type-css',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Tailwind CSS',
		image: 'logos:tailwindcss-icon',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Vuetify',
		image: 'logos:vuetifyjs',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Vite',
		image: 'logos:vitejs',
		type: FRONTEND_TYPE,
	},
	{
		name: 'Laravel',
		image: 'logos:laravel',
		type: BACKEND_TYPE,
	},
	{
		name: 'PHP',
		image: 'logos:php',
		type: BACKEND_TYPE,
	},
	{
		name: 'PostgreSQL',
		image: 'logos:postgresql',
		type: BACKEND_TYPE,
	},
	{
		name: 'MySQL',
		image: 'logos:mysql',
		type: BACKEND_TYPE,
	},
	{
		name: 'REST APIs',
		image: 'tabler:api',
		type: BACKEND_TYPE,
	},
	{
		name: 'Git',
		image: 'vscode-icons:file-type-git',
		type: TOOLS_TYPE,
	},
	{
		name: 'Docker',
		image: 'logos:docker-icon',
		type: TOOLS_TYPE,
	},
	{
		name: 'Postman',
		image: 'vscode-icons:file-type-postman',
		type: TOOLS_TYPE,
	},
	{
		name: 'Swagger / OpenAPI',
		image: 'logos:swagger',
		type: TOOLS_TYPE,
	},
	{
		name: 'Jira',
		image: 'logos:jira',
		type: TOOLS_TYPE,
	},
]
