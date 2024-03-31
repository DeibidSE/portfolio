<template>
  <div class="relative z-10 flex items-center justify-center p-16 duration-500 translate-y-24 face face1 bg-secondary-light dark:bg-secondary-dark rounded-t-xl">
    <div class="flex flex-col items-center justify-center duration-500 opacity-50 dark:opacity-20">
      <nuxt-icon filled :name="`${data.image}`" class="flex w-24 h-24" role="img" />
    </div>
  </div>
  <div class="flex flex-col justify-center w-full p-6 overflow-x-hidden overflow-y-auto duration-500 -translate-y-24 shadow-xl opacity-0 face face2 rounded-b-xl bg-primary-light dark:bg-primary-dark" :aria-label="`Details about ${data.name}`">
    <h3 class="self-center p-4 text-4xl font-bold text-center text-purple-500">
      {{ data.name || '' }}
    </h3>
    <div v-if="data.progress" class="flex flex-row items-center gap-1 p-4 shadow-inside rounded-xl">
      <span class="text-sm">🤔</span>
      <div class="w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full" :style="`width: ${data.progress}%`" />
      </div>
      <span class="text-sm">🤓</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Skill } from '~/types/types.d'

defineProps<{ data: Skill }>()
</script>

<style scoped>
.card {
  &:hover {
    .face.face1 {
      @apply translate-y-0 bg-primary-light dark:bg-primary-dark shadow-xl;
      div {
        @apply opacity-100;
      }
    }
    .face.face2 {
      @apply translate-y-0 opacity-100;
    }
  }
}
</style>
