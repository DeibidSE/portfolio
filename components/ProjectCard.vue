<template>
  <div class="flex flex-col items-center gap-4 p-4 rounded-lg shadow-xl justify-items-center lg:grid lg:grid-cols-2 lg:gap-8 md:p-8 bg-secondary-light dark:bg-secondary-dark scroll-transition" :aria-label="`Details of the project ${projectName}`">
    <img
      v-if="projectData.image"
      :src="$config.public.BASE_URL + projectData.image"
      :alt="`Image of my project: ${projectName}`"
      class="w-auto max-h-[400px] m-auto rounded-lg transition-transform hover:scale-105 hover:rotate-1"
      loading="lazy"
      width="752px"
      height="400px"
    >
    <div
      v-else
      class="flex items-center justify-center text-center w-full aspect-video max-w-[752px] max-h-[400px] transition-transform rounded-lg hover:scale-105 hover:rotate-1 bg-[repeating-linear-gradient(-45deg,_yellow,_yellow_50px,_black_50px,_black_100px)]"
    >
      <span class="w-full p-2 text-2xl font-semibold bg-orange-600 border-black border-y-2 md:p-4 md:text-5xl text-dark font-terminal">
        {{ projectData.text || 'Work in Progress' }}
      </span>
    </div>
    <div class="flex flex-col w-full gap-6 m-auto items-left">
      <h3 class="text-4xl font-bold tracking-wide text-center text-purple-600">
        {{ projectName }}
      </h3>
      <p class="self-center text-sm lg:text-lg" aria-label="Description of the project">
        {{ projectData.description || '' }}
      </p>
      <div v-if="projectData.technologies" class="inline-flex justify-around w-full p-4 mx-auto rounded-lg lg:p-6 shadow-inside">
        <TooltipComponent v-for="(technology, key) in projectData.technologies" :key="key" :tooltip-text="technology.name" position="top">
          <a :href="technology.url" target="_blank" rel="noreferrer" class="cursor-pointer">
            <img
              :src="`${$config.public.BASE_URL}/svg/${technology.name}.svg`"
              :alt="`The logo of ${technology.name}`"
              class="w-6 h-6 transition-transform md:w-8 lg:w-10 md:h-8 lg:h-10 hover:scale-125"
              loading="lazy"
              width="40"
              height="40"
              role="img"
              :aria-label="`Logo of ${technology.name}`"
            >
          </a>
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
