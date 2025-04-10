/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				// Overwrite tailwind's default font (sans) with 'Coolvetica'
				sans: 'Coolvetica',
				// Other custom fonts:
				code: 'CascadiaCode',
			},
			boxShadow: {
				'inside': 'inset 0 0 10px rgba(0,0,0,0.5)',
				'top': '0px -10px 20px 0px rgba(0,0,0,0.2)',
				'bottom': '0px 10px 20px 0px rgba(0,0,0,0.2)',
				'no-offset': '0px 0px 20px 0px rgba(0,0,0,0.1)',
			},
			backgroundColor: {
				'primary-dark': '#0D1117',
				'primary-light': '#F5F5F5',
				'secondary-dark': '#161B22',
				'secondary-light': '#E8EAF6',
			},
			colors: {
				'dark': '#0D1117',
				'light': '#F5F5F5',
				'accent': '#7927b2',
				'accent-secondary': '#FB3182',
			},
			// Custom animations
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			},
			animation: {
				'blinking-cursor': 'blink 1s steps(2, start) infinite',
			},
		},
	},
	plugins: [],
}
