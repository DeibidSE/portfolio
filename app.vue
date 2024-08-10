<template>
  <div id="app" class="bg-gradient-to-r from-purple-500 to-pink-500 text-dark dark:text-light">
    <HeaderAppHeader :section-list="sectionList" />
    <NuxtPage :selected-language-data="selectedLanguageData" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { spanishData, englishData } from '~/lib/data'
import { type LanguageData } from '~/lib/types.d'

const EXCLUDED_SECTIONS = new Set<string>(['others']) // Use Set for faster lookups
const languageStore = langStore()

// Use readonly to ensure languageData is immutable
const languageData = readonly<LanguageData>({
  es: spanishData,
  en: englishData
})

// Compute selected language data based on the current language
const selectedLanguageData = computed(() => languageData[languageStore.getLanguage])

// Compute the list of section names, excluding specific sections
const sectionList = computed<string[]>(() =>
  selectedLanguageData.value
    .flatMap((section: Record<string, any>) => Object.keys(section))
    .filter((sectionTitle: string) => !EXCLUDED_SECTIONS.has(sectionTitle))
)
</script>
