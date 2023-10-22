<template>
  <ol class="relative border-l-4 border-dark dark:border-light" role="list">
    <li v-for="(info, index) in sectionData" :key="index" class="mb-10 ml-4" role="listitem">
      <div class="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-2 border-2 border-dark dark:border-white" />
      <time class="mb-1 text-sm font-normal leading-none text-purple-400">{{ info.startDate }} - {{ info.endDate }}</time>
      <h3 class="text-xl">
        <a v-if="info.website" :href="info.website" rel="noopener noreferrer" class="text-xl hover:text-purple-600 hover:cursor-pointer" role="link">
          {{ info.title }}
        </a>
        <span v-else>{{ info.title }}</span>
      </h3>
      <h4 class="mb-2 text-base text-gray-800 dark:text-gray-600">
        {{ info.location }}
      </h4>
      <p class="mb-4 text-xs text-gray-600 dark:text-gray-400">
        {{ info.details }}
      </p>
    </li>
  </ol>
</template>

<script lang="ts">
export default {
  props: {
    sectionData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
