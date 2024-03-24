<template>
  <article class="flex flex-col justify-around h-full gap-6 p-8 rounded-lg shadow-xl dark:bg-secondary-dark bg-secondary-light">
    <div class="flex flex-col w-full gap-6 xl:flex-row">
      <div class="flex items-center justify-center w-full gap-8 rounded-xl">
        <!-- Image-->
        <img
          v-if="projectData.image"
          :src="`${$config.public.BASE_URL}/${projectData.image}`"
          :alt="`Image of my project: ${projectName}`"
          class="object-cover w-full h-auto rounded-lg aspect-video"
          loading="lazy"
        >
        <!-- WIP BG-->
        <div
          v-else
          class="flex items-center justify-center text-center w-full aspect-video max-h-[400px] transition-transform rounded-lg bg-[repeating-linear-gradient(-45deg,_yellow,_yellow_50px,_black_50px,_black_100px)] bg-fixed bg-repeat"
        >
          <span class="w-full p-2 text-2xl font-semibold bg-orange-600 border-black border-y-2 md:p-4 text-dark font-terminal">
            {{ projectData.text || 'Work in Progress' }}
          </span>
        </div>
      </div>

      <!-- Project name and description -->
      <div class="flex flex-col items-center self-center justify-center w-full gap-4">
        <h3 class="w-full text-2xl font-bold tracking-wide text-center text-purple-500">
          {{ projectName }}
        </h3>
        <p class="flex h-full text-sm xl:text-base" aria-label="Description of the project">
          {{ projectData.description }}
        </p>
        <a
          v-if="projectData.url"
          :href="projectData.url"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to the project on github"
          role="link"
          class="flex items-center justify-center px-3 py-1 transition border rounded-full shadow-xl dark:border-light border-dark gap-x-2 hover:scale-110 dark:bg-primary-dark bg-primary-light"
        >
          <nuxt-icon name="github" class="text-2xl" />
          {{ projectName }}
        </a>
      </div>
    </div>

    <footer v-if="projectData.technologies" class="flex flex-wrap justify-around w-full gap-2 p-3 mx-auto rounded-lg shadow-inside">
      <TooltipComponent v-for="(technology, key) in projectData.technologies" :key="key" :tooltip-text="technology.name" position="top">
        <a :href="technology.url" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
          <img
            :src="`${$config.public.BASE_URL}/logos/${technology.name}.svg`"
            :alt="`The logo of ${technology.name}`"
            class="w-6 h-6 transition-transform md:w-8 xl:w-10 md:h-8 xl:h-10 hover:scale-125"
            loading="lazy"
            width="40"
            height="40"
            role="img"
            :aria-label="`Logo of ${technology.name}`"
          >
        </a>
      </TooltipComponent>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { type Project } from '~/types/types.d'

defineProps({
  projectName: {
    type: String,
    default: ''
  },
  projectData: {
    type: Object as () => Project,
    default: () => ({})
  }
})
</script>
