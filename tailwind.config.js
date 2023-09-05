/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        inside: 'inset 0 0 10px rgba(0,0,0,0.5)',
        top: '0px -10px 20px 0px rgba(0,0,0,0.2)'
      },
      backgroundColor: {
        // Used for backgrounds (darker than secondary)
        'primary-dark': '#1C1B1F',
        'primary-light': '#FFFBFF',
        // Used for surfaces like cards (lighter than primary)
        'secondary-dark': '#26242A',
        'secondary-light': '#F9F0FD',
        // Used for secondary surfaces like unused tabs or hover
        'accent-dark': '#633B48',
        'accent-light': '#FFD9DD'
      },
      colors: {
        // Mainly used for fonts
        dark: '#1C1B1F',
        light: '#E6E1E5'
      }
    }
  },
  plugins: []
}
