<template>
  <h2 class="text-4xl font-bold text-purple-600">
    📂 {{ title }}
  </h2>

  <div v-for="(project, index) in data" :key="index" class="flex flex-col items-center gap-2 p-4 rounded-lg shadow-xl md:grid md:grid-cols-2 md:gap-8 md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition">
    <img
      :src="project.image"
      :alt="project.name"
      class="w-auto max-h-[400px] m-auto rounded-lg hover:scale-105"
    >
    <div class="flex flex-col gap-6 m-auto items-left">
      <span class="text-4xl font-bold text-center text-purple-600">{{ project.name }}</span>
      <p class="text-sm md:text-lg">
        {{ project.description }}
      </p>
      <div v-if="project.langs" class="inline-flex justify-between w-full p-4 mx-auto rounded-lg md:p-6 shadow-inside">
        <TooltipComponent v-for="(lang, key) in project.langs" :key="key" :tooltip-text="lang" position="top">
          <img
            :src="'/MyPortfolio/svg/' + lang + '-icon.svg'"
            :alt="'The logo of ' + lang"
            class="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125"
            width="40"
            height="40"
          >
        </TooltipComponent>
      </div>
      <a v-if="project.url" class="p-2 text-sm font-bold bg-purple-600 border rounded-md md:text-base md:px-4 dark:border-light border-dark w-fit text-dark dark:text-light" :href="project.url">
        {{ project.txtBtn }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {
        return { name: '', image: '/MyPortfolio/images/undefined.webp' }
      }
    }
  }
}
</script>
