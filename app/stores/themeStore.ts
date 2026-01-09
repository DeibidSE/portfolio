import { defineStore } from 'pinia'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
	state: () => ({
		lightmode: false,
	}),
	actions: {
		initTheme() {
			// Detects system preference when loading
			const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
			const defaultTheme: Theme = isDarkModePreferred ? 'dark' : 'light'

			// Initializes the theme with the persisted value or system preference.
			const currentTheme = this.lightmode ? 'light' : 'dark'
			this.setTheme(currentTheme || defaultTheme)
		},
		setTheme(newTheme: Theme) {
			document.documentElement.classList.remove('light', 'dark')
			document.documentElement.classList.add(newTheme)
			this.lightmode = newTheme === 'light'
		},
	},
	getters: {
		isLightMode: (state) => state.lightmode,
	},
	persist: true,
})
