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

      if (themeFromLocalStorage) {
        this.setTheme(themeFromLocalStorage)
      } else {
        this.setTheme(isDarkModePreferred ? 'dark' : 'light')
      }
    },
    setTheme (newTheme: Theme) {
      localStorage.setItem('theme', newTheme)
      this.lightmode = newTheme === 'light'
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  },
  getters: {
    isLightMode: state => state.lightmode
  },
  persist: true
})
