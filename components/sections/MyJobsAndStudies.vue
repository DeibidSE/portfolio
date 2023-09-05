<template>
  <section class="flex flex-col min-h-screen gap-6 p-6 md:grid md:p-16 md:grid-cols-3">
    <!-- Card -->
    <div v-for="(sectionData, sectionName) in info" :key="sectionName" class="flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition">
      <!-- Title -->
      <div class="flex w-full gap-4">
        <Icon name="fluent-emoji-flat:open-file-folder" class="w-9 h-9" />
        <h2 class="text-4xl font-bold text-purple-600 uppercase terminal-font">
          {{ sectionName }}
        </h2>
      </div>
      <!-- Timeline -->
      <TimeLine :section-data="sectionData" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          '/jobs': [],
          '/studies': [],
          '/others': []
        }
      }
    }
  }
}
</script>
