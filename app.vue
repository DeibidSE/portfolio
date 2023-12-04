<template>
  <div id="app" class="bg-gradient-to-r from-purple-600 to-pink-500 text-dark dark:text-light">
    <AppHeader :section-list="sectionList" />
    <NuxtPage :section-info="sectionInfo" />
  </div>
</template>

<script setup lang="ts">
import { langStore } from '~/stores/langStore'
import { type LanguageData } from '~/types/types.d'
import espJsonData from '~/locales/es-ES.json'
import engJsonData from '~/locales/en-GB.json'

const languageStore = langStore()

const langData = ref<LanguageData>({
  'es-ES': espJsonData,
  'en-GB': engJsonData
})

const sectionInfo = computed(() => {
  return langData.value[languageStore.getLanguage].filter((item: any) => Object.keys(item)[0].toLowerCase() !== 'others')
})

const sectionList = computed(() => {
  return sectionInfo.value.map((item: string[]) => Object.keys(item)[0])
})
</script>
