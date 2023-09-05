import { defineStore } from 'pinia'

type Theme = 'light' | 'dark';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    lightmode: false
  }),
  actions: {
    initTheme () {
      const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
      const themeFromLocalStorage = localStorage.getItem('theme') as Theme

      this.setTheme(themeFromLocalStorage || (isDarkModePreferred ? 'dark' : 'light'))
    },
    setTheme (newTheme: Theme) {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)
      this.lightmode = newTheme === 'light'
    }
  },
  getters: {
    isLightMode: state => state.lightmode
  },
  persist: true
})
