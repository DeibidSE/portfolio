<template>
  <div class="relative" role="button" @click="toggle">
    <div class="relative flex items-center p-1 rounded-full cursor-pointer focus:outline-none">
      <!-- Flag -->
      <Icon :name="selectedLang.icon" class="w-4 h-4 md:w-5 md:h-5" alt="Flag of the selected language" />
      <!-- Arrow -->
      <Icon name="uil:angle-down" class="w-4 h-4 ml-1 md:w-5 md:h-5" alt="Down arrow icon" />
    </div>
    <transition name="dropdown-content">
      <div v-if="showDropdown" class="absolute right-0 mt-2 origin-top-right border-2 border-purple-600 rounded-lg md:w-48 md:py-2 bg-secondary-light dark:bg-secondary-dark">
        <label
          v-for="lang in languages"
          :key="lang.value"
          class="flex items-center gap-4 p-4 hover:bg-accent-light dark:hover:bg-accent-dark"
          @click.stop="selectLang(lang)"
        >
          <Icon :name="lang.icon" alt="Language flag" />
          {{ lang.label || '' }}
        </label>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { langStore } from '~/stores/langStore'
import { type Language } from '~/types/types.d'

const showDropdown = ref(false)

const languages = ref<Language[]>([
  { value: 'es-ES', label: 'Español', icon: 'circle-flags:es-variant' },
  { value: 'en-GB', label: 'English', icon: 'circle-flags:uk' }
])

const languageStore = langStore()

const selectedLang = computed(() => {
  return languages.value.find(lang => lang.value === languageStore.language) || languages.value[0]
})

const toggle = () => {
  showDropdown.value = !showDropdown.value
}

const selectLang = (lang: Language) => {
  languageStore.setLanguage(lang.value)
  showDropdown.value = false
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
