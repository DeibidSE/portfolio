<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-screen gap-8 p-6 bg-primary-light dark:bg-primary-dark lg:p-16"
    :aria-label="sectionId"
  >
    <header class="flex items-center w-full gap-4">
      <nuxt-icon name="folder" filled class="text-3xl" alt="Folder Icon" />
      <h2 class="text-4xl text-purple-500 uppercase md:font-bold font-terminal">
        {{ sectionTitle || '' }}
      </h2>
    </header>
    <div class="flex flex-col gap-8 lg:gap-12 xl:grid xl:grid-cols-2">
      <ProjectsProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :project-name="index.toString()"
        :project-data="project"
      />
    </div>
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
