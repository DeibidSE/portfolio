import { defineStore } from 'pinia'

export const langStore = defineStore('lang', {
  state: () => ({
    language: 'en-EN'
  }),
  getters: {
    getLanguage: state => state.language
  },
  actions: {
    setLanguage (lang: string) {
      this.language = lang
    }
  },
  persist: true
})
