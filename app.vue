<template>
  <div id="app" class="bg-gradient-to-r from-purple-500 to-pink-500 text-dark dark:text-light">
    <HeaderAppHeader :section-list="sectionList" />
    <NuxtPage :selected-language-data="selectedLanguageData" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { langStore } from '~/stores/langStore'
import { type LanguageData } from '~/types/types.d'
import espJsonData from '~/locales/es-ES.json'
import engJsonData from '~/locales/en-GB.json'

const EXCLUDED_SECTIONS = ['others']
const languageStore = langStore()
const languageData = ref<LanguageData>({
  'es-ES': espJsonData,
  'en-GB': engJsonData
})

const selectedLanguageData = computed(() => languageData.value[languageStore.getLanguage])

// Gets an array with all section names
const sectionList = computed(() => {
  // Filter sections to exclude some
  const filteredSections = selectedLanguageData.value.filter((section: any) => {
    const [sectionTitle] = Object.keys(section)
    return !EXCLUDED_SECTIONS.includes(sectionTitle)
  })

  // Map to get section names
  return filteredSections.map((section: any) => Object.keys(section)[0])
})
</script>
