<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-screen gap-8 p-6 bg-primary-light dark:bg-primary-dark lg:p-16"
    :aria-label="sectionId"
  >
    <header class="flex items-center gap-4">
      <Icon name="FolderIcon" class="w-9 h-9" alt="Folder Icon" />
      <h2 class="text-4xl text-purple-500 uppercase md:font-bold font-terminal">
        {{ sectionTitle }}
      </h2>
    </header>
    <ProjectsProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project-name="index.toString()"
      :project-data="project"
    />
  </section>
</template>

<script setup lang="ts">
import { type ProjectData } from '~/types/types.d'

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({})
  }
})

const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))
const projects = computed<ProjectData>(() => props.sectionData[sectionTitle.value] || {})
</script>
