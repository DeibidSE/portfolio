<template>
  <section :id="title" class="flex flex-col min-h-screen gap-6 p-6 lg:grid lg:p-16 lg:grid-cols-3" :aria-label="title">
    <div
      v-for="(sectionData, sectionName) in section"
      :key="sectionName"
      class="flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition"
      :aria-label="String(sectionName)"
    >
      <header class="flex w-full gap-4">
        <Icon name="fluent-emoji-flat:open-file-folder" class="w-9 h-9" alt="Folder Icon" />
        <h2 class="text-4xl font-bold text-purple-600 uppercase font-terminal">
          {{ sectionName }}
        </h2>
      </header>
      <!-- Timeline -->
      <TimeLine :section-data="sectionData" />
    </div>
  </section>
</template>

<script lang="ts">
import { type JobsAndStudiesData } from '~/types/types.d'

export default {
  props: {
    sectionInfo: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    /**
     * Returns the title of the section
     */
    title () {
      return Object.keys(this.sectionInfo).toString()
    },
    /**
     * Return an array with the info of the section
     */
    section (): JobsAndStudiesData {
      return this.sectionInfo[this.title] || []
    }
  }
}
</script>
