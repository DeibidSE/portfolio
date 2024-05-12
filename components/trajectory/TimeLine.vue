<template>
  <ol class="relative border-l-4 border-dark dark:border-light" role="list">
    <li v-for="(info, index) in data" :key="index" class="mb-10 ml-4" role="listitem">
      <div class="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white" />
      <time class="mb-1 text-sm font-normal leading-none text-purple-400">{{ info.startDate || '' }} - {{ info.endDate || '' }}</time>
      <h3 class="text-xl">
        <a v-if="info.website" :href="info.website" rel="noopener noreferrer" class="text-xl hover:text-purple-500 hover:cursor-pointer" role="link">
          {{ info.title || '' }}
        </a>
        <span v-else>{{ info.title || '' }}</span>
      </h3>
      <h4 class="mb-2 text-base text-gray-800 dark:text-gray-600">
        {{ info.location || '' }}
      </h4>
      <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {{ info.description || '' }}
      </p>
      <ul v-if="info.details" class="pl-4 text-sm text-gray-600 list-disc dark:text-gray-400">
        <li v-for="(detail, key) in info.details" :key="key" role="listitem">
          {{ detail }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { type JobOrStudy } from '~/types/types.d'

defineProps<{ data: JobOrStudy[] }>()
</script>
