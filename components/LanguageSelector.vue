<template>
  <div class="relative" @click="toggle">
    <div class="relative flex items-center p-1 rounded-full cursor-pointer focus:outline-none">
      <!-- Flag -->
      <Icon :name="selectedLang.icon" class="w-4 h-4 md:w-5 md:h-5" />
      <!-- Arrow -->
      <Icon name="uil:angle-down" class="w-4 h-4 ml-1 md:w-5 md:h-5" />
    </div>
    <transition name="dropdown-content">
      <div v-if="showDropdown" class="absolute right-0 mt-2 origin-top-right border-2 border-purple-600 rounded-lg md:w-48 md:py-2 bg-secondary-light dark:bg-secondary-dark">
        <label v-for="(lang, key) in languages" :key="key" class="flex items-center gap-4 p-4 hover:bg-accent-light dark:hover:bg-accent-dark" @click.stop="selectLang(lang)">
          <Icon :name="lang.icon" />
          {{ lang.label }}
        </label>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { langStore } from '~/stores/langStore'
import { Language } from '~/types/types.d'

export default {
  data () {
    return {
      showDropdown: false,
      languages: [
        { value: 'es-ES', label: 'Español', icon: 'circle-flags:es-variant' },
        { value: 'en-EN', label: 'English', icon: 'circle-flags:uk' }
      ] as Language[],
      store: langStore()
    }
  },
  computed: {
    selectedLang (): Language {
      return this.languages.find(lang => lang.value === this.store.language) || this.languages[0]
    }
  },
  methods: {
    toggle () {
      this.showDropdown = !this.showDropdown
    },
    selectLang (lang: Language) {
      this.store.setLanguage(lang.value)
      this.showDropdown = false
    }
  }
}
</script>

<style scoped>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
