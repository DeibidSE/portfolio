<template>
  <main>
    <HeaderComponent />
    <SectionsMyIntroduction :info="sectionInfo.INTRODUCTION" />
    <SectionsMyPresentation :info="sectionInfo.PRESENTATION" />
    <SectionsMyProjects :info="sectionInfo.PROJECTS" />
    <SectionsMyJobsAndStudies :info="sectionInfo.JOBS_AND_STUDIES" />
    <SectionsMyTechnicalSkills :info="sectionInfo.TECHNICAL_SKILLS" />
    <ScrollToTopBtn />
  </main>
</template>

<script lang="ts">
import { langStore } from '~/stores/langStore'
import { LangData } from '~/types/types.d'
import espJsonData from '~/locales/es-ES.json'
import engJsonData from '~/locales/en-GB.json'

export default {
  data () {
    return {
      langStore: langStore(),
      langData: {
        'es-ES': espJsonData,
        'en-GB': engJsonData
      } as LangData
    }
  },
  computed: {
    sectionInfo () {
      return this.langData[this.langStore.getLanguage]
    }
  }
}
</script>
