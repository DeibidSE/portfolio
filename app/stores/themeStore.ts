import { defineStore } from 'pinia'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
	state: () => ({
		lightmode: false,
	}),
	actions: {
		initTheme() {
			this.setTheme(this.lightmode ? 'light' : 'dark')
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
