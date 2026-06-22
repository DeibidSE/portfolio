/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.vue'],
	theme: {
		extend: {
			fontFamily: {
				ui: ['Geist', 'system-ui', 'sans-serif'],
				code: ['Cascadia Code', 'monospace'],
			},
			boxShadow: {
				panel: '0 18px 50px -12px rgba(2,6,23,0.25)',
				'panel-dark': '0 22px 60px -12px rgba(0,0,0,0.6)',
			},
			backgroundColor: {
				'primary-dark': '#16161e',
				'primary-light': '#f4f5fa',
				'secondary-dark': '#1f2335',
				panel: '#1d2026',
				'panel-chrome': '#16181d',
			},
			colors: {
				dark: '#16161e',
				light: '#c0caf5',
				accent: '#7c3aed',
				'accent-light': '#b05bff',
				'accent-dark': '#6d28d9',
				'accent-secondary': '#ffb02e',
				'accent-secondary-light': '#ffd24d',
				'accent-secondary-dark': '#8a5e00',
				syntax: {
					blue: '#6cb6ff',
					cyan: '#56e1e6',
					green: '#7ee787',
					orange: '#ffa657',
					yellow: '#ffd866',
					red: '#ff7b72',
				},
				'syntax-day': {
					blue: '#0550ae',
					cyan: '#036a8a',
					green: '#1a7f37',
					orange: '#9a4f00',
				},
			},
			keyframes: {
				blink: {
					'0%, 50%, 100%': { opacity: '1' },
					'25%, 75%': { opacity: '0' },
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(14px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'blinking-cursor': 'blink 1.1s infinite',
				'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
			},
		},
	},
	plugins: [],
}
