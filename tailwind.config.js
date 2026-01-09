/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.vue'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Coolvetica',
				code: 'CascadiaCode',
			},
			boxShadow: {
				inside: 'inset 0 0 10px rgba(0,0,0,0.5)',
				top: '0px -10px 20px 0px rgba(0,0,0,0.2)',
				bottom: '0px 10px 20px 0px rgba(0,0,0,0.2)',
				'no-offset': '0px 0px 20px 0px rgba(0,0,0,0.1)',
			},
			backgroundColor: {
				'primary-dark': '#0d1117',
				'primary-light': '#f5f5f5',
				'secondary-dark': '#161b22',
				'secondary-light': '#e8eaf6',
			},
			colors: {
				dark: '#0d1117',
				light: '#f5f5f5',
				accent: '#9333ea',
				'accent-light': '#b966f5',
				'accent-dark': '#6b1f9b',
				'accent-secondary': '#fb3182',
				'accent-secondary-light': '#fd66a1',
				'accent-secondary-dark': '#d7176b',
			},
			keyframes: {
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				blink: {
					'0%, 50%, 100%': { opacity: '1' },
					'25%, 75%': { opacity: '0' },
				},
			},
			animation: {
				gradient: 'gradient 6s ease infinite',
				'blinking-cursor': 'blink 1.1s infinite',
			},
		},
	},
	plugins: [],
}
