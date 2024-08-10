<template>
  <section
    :id="sectionId"
    class="flex flex-col gap-6 p-6 min-h-dvh lg:grid lg:p-16 lg:grid-cols-3"
    :aria-label="sectionTitle"
  >
    <div
      v-for="(section, sectionName) in sections"
      :key="sectionName"
      class="flex flex-col gap-8 p-8 border-4 shadow-xl border-dark dark:border-light bg-primary-light dark:bg-primary-dark rounded-xl scroll-transition"
      :aria-label="String(sectionName)"
    >
      <header class="flex items-center w-full gap-4">
        <nuxt-icon name="folder" filled class="text-3xl" alt="Folder Icon" />
        <h2 class="text-4xl font-bold text-purple-500 uppercase font-terminal">
          {{ sectionName || '' }}
        </h2>
      </header>
      <!-- Timeline -->
      <TrajectoryTimeLine :data="section" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type JobOrStudy } from '~/lib/types.d'

const props = defineProps<{ sectionData: { [title: string]: { [category: string]: JobOrStudy[] } } }>()

const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))
const sections = computed<{ [category: string]: JobOrStudy[] }>(() => props.sectionData[sectionTitle.value] || {})

</script>
