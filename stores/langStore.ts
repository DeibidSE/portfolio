import { defineStore } from 'pinia'

type Lang = 'es' | 'en'

export const useLangStore = defineStore('lang', {
  state: () => ({
    language: 'es' as Lang
  }),
  actions: {
    initLanguage () {
      const savedLang = this.language
      if (savedLang) {
        this.setLanguage(savedLang)
      }
    },
    setLanguage (newLang: Lang) {
      if (this.language !== newLang) {
        this.language = newLang
      }
    }
  },
  persist: true
})
