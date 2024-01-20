import { defineStore } from 'pinia'

export const langStore = defineStore('lang', {
  state: () => ({
    language: 'es-ES'
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
