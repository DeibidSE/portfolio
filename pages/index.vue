<template>
  <main>
    <HeaderComponent />

    <SectionsWelcomeSection :info="getSectionInfo('welcome')" />

    <SectionsPresentationSection :info="getSectionInfo('presentation')" />

    <SectionsProjectsSection :info="getSectionInfo('projects')" />

    <SectionsJobsAndStudiesSection :info="getSectionInfo('jobsAndStudies')" />

    <SectionsSkillsSection :info="getSectionInfo('skills')" />

    <ScrollToTopBtn />
  </main>
</template>

<script setup lang="ts">
import { langStore } from '~/stores/langStore'
import jsonInfo from '~/src/info.json'

interface InfoInterface {
  [section: string]: {
    [language: string]: {}
  };
}

const store = langStore()
const info = jsonInfo as InfoInterface

/**
 * Access a specific section of the json data depending on
 * the name received and the language selected
 * @param section The name of the section to access
 */
const getSectionInfo = (section: string) => {
  return info[section]?.[store.language]
}
</script>
