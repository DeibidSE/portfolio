import { defineStore } from 'pinia'

export const langStore = defineStore('lang', {
  state: () => ({
    language: 'es'
  }),
  getters: {
    getLanguage: state => state.language
  },
  actions: {
    setLanguage (lang: 'es'|'en') {
      this.language = lang
    }
  },
  persist: true
})
