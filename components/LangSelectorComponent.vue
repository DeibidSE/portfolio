<template>
  <div class="relative" @click="toggle">
    <div class="relative flex items-center font-semibold rounded-lg cursor-pointer focus:outline-none">
      <!-- Flag -->
      <Icon :name="selectedLang.icon" />
      <!-- Arrow -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        aria-hidden="true"
        class="w-5 h-5 ml-1 fill-current"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z" />
      </svg>
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

interface Language {
  value: string
  label: string;
  icon: string;
}

export default {
  data () {
    return {
      showDropdown: false,
      languages: [
        { value: 'es', label: 'Español', icon: 'FlagESP' },
        { value: 'en', label: 'English', icon: 'FlagENG' }
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
