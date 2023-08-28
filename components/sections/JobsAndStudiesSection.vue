<template>
  <section class="flex flex-col min-h-screen gap-6 p-6 md:grid md:p-8 md:grid-cols-3">
    <div v-for="(sectionData, sectionName) in info" :key="sectionName" class="flex flex-col gap-8 p-8 border-2 bg-primary-light dark:bg-primary-dark rounded-xl dark:border-light border-dark scroll-transition">
      <TimelineComponent :section-data="sectionData" :title="sectionName" />
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
