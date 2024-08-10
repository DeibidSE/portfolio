<template>
  <div ref="dropdown" class="relative" role="button" aria-label="Select language">
    <div class="flex items-center rounded-full cursor-pointer hover:text-purple-500">
      <nuxt-icon name="language" class="text-xl" alt="Language selector icon" />
      <nuxt-icon name="angle-down" class="text-xl" alt="Down arrow icon" />
    </div>
    <transition name="dropdown-content">
      <label
        v-if="showDropdown"
        for="languageSelector"
        class="absolute right-0 inline-flex items-center p-1 mt-3 origin-top-right border rounded-md cursor-pointer dark:border-light border-dark bg-secondary-light dark:bg-secondary-dark"
      >
        <input id="languageSelector" type="checkbox" class="hidden peer">
        <span
          v-for="lang in languages"
          :key="lang.value"
          class="px-4 py-2 uppercase"
          :class="{
            'bg-purple-500': lang.value === languageStore.language,
            'hover:bg-purple-500/50': lang.value !== languageStore.language
          }"
          @click="selectLang(lang)"
        >
          {{ lang.value }}
        </span>
      </label>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { type Language } from '~/lib/types.d'

const showDropdown = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const languages: Language[] = [
  { value: 'es' },
  { value: 'en' }
]

const languageStore = langStore()

const selectLang = (lang: Language) => {
  languageStore.setLanguage(lang.value)
  showDropdown.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    showDropdown.value = false
  } else {
    showDropdown.value = !showDropdown.value
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
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
