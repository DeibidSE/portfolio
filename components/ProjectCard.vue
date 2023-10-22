<template>
  <div class="flex flex-col items-center gap-4 p-4 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-8 md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition" :aria-label="`Details of the project ${projectName}`">
    <img
      :src="projectData.image"
      :alt="`Image of my project: ${projectName}`"
      class="w-auto max-h-[400px] m-auto rounded-lg hover:scale-105 hover:rotate-1"
    >
    <div class="flex flex-col gap-6 m-auto items-left">
      <h3 class="text-4xl font-bold tracking-wide text-center text-purple-600">
        {{ projectName }}
      </h3>
      <p class="text-sm lg:text-lg" aria-label="Description of the project">
        {{ projectData.description ?? '' }}
      </p>
      <div v-if="projectData.langs" class="inline-flex justify-between w-full p-4 mx-auto rounded-lg lg:p-6 shadow-inside">
        <TooltipComponent v-for="(lang, key) in projectData.langs" :key="key" :tooltip-text="lang" position="top">
          <img
            :src="`/MyPortfolio/svg/${lang}.svg`"
            :alt="`The logo of ${lang}`"
            class="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125"
            width="40"
            height="40"
          >
        </TooltipComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    projectName: {
      type: String,
      default: ''
    },
    projectData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
