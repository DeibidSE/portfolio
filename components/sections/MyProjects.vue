<template>
  <section :id="title" class="flex flex-col min-h-screen gap-8 p-6 bg-primary-light dark:bg-primary-dark lg:p-16" :aria-label="title">
    <header class="flex items-center gap-4">
      <Icon name="FolderIcon" class="w-9 h-9" alt="Folder Icon" />
      <h2 class="text-4xl text-purple-600 uppercase md:font-bold font-terminal">
        {{ title }}
      </h2>
    </header>
    <ProjectCard
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
  sectionInfo: {
    type: Object,
    default: () => ({})
  }
})

const title = computed<string>(() => Object.keys(props.sectionInfo).toString() || '')
const projects = computed<ProjectData>(() => props.sectionInfo[title.value] || {})
</script>
