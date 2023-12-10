<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-screen gap-6 p-6 lg:grid lg:p-16 lg:grid-cols-3"
    :aria-label="sectionTitle"
  >
    <div
      v-for="(section, sectionName) in sections"
      :key="sectionName"
      class="flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition"
      :aria-label="String(sectionName)"
    >
      <header class="flex w-full gap-4">
        <Icon name="FolderIcon" class="w-9 h-9" alt="Folder Icon" />
        <h2 class="text-4xl font-bold text-purple-600 uppercase font-terminal">
          {{ sectionName }}
        </h2>
      </header>
      <!-- Timeline -->
      <TrajectoryTimeLine :data="section" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type JobsAndStudiesData } from '~/types/types.d'

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({})
  }
})

const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))
const sections = computed<JobsAndStudiesData>(() => props.sectionData[sectionTitle.value] || {})

</script>
