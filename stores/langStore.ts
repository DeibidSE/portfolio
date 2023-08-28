import { defineStore } from 'pinia'

export const langStore = defineStore('lang', {
  state: () => ({
    language: 'en'
  }),
  getters: {},
  actions: {
    setLanguage (lang: string) {
      this.language = lang
    }
  },
  persist: true
})
