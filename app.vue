<template>
  <div id="app" class="bg-gradient-to-r from-purple-600 to-pink-500 text-dark dark:text-light">
    <AppHeader :section-list="sectionList" />
    <NuxtPage :section-info="sectionInfo" />
  </div>
</template>

<script lang="ts">
import { langStore } from '~/stores/langStore'
import { type LanguageData } from '~/types/types.d'
import espJsonData from '~/locales/es-ES.json'
import engJsonData from '~/locales/en-GB.json'

export default {
  data () {
    return {
      langStore: langStore(),
      langData: {
        'es-ES': espJsonData,
        'en-GB': engJsonData
      } as LanguageData
    }
  },
  computed: {
    sectionInfo () {
      return this.langData[this.langStore.getLanguage].filter((item: any) => Object.keys(item)[0].toLowerCase() !== 'others')
    },
    sectionList (): string[] {
      return this.sectionInfo.map((item: string[]) => Object.keys(item)[0])
    }
  }
}
</script>
