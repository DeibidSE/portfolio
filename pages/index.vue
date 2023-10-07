<template>
  <main>
    <HeaderComponent :section-list="sectionList" />
    <SectionsMyIntroduction :section-info="sectionInfo[0]" />
    <SectionsMyPresentation :section-info="sectionInfo[1]" />
    <SectionsMyProjects :section-info="sectionInfo[2]" />
    <SectionsMyJobsAndStudies :section-info="sectionInfo[3]" />
    <SectionsMyTechnicalSkills :section-info="sectionInfo[4]" />
    <ScrollToTopBtn />
  </main>
</template>

<script lang="ts">
import { langStore } from '~/stores/langStore'
import { LanguageData } from '~/types/types.d'
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
      return this.langData[this.langStore.getLanguage]
    },
    sectionList () {
      return this.sectionInfo.map((item: string[]) => Object.keys(item)[0])
    }
  }
}
</script>
