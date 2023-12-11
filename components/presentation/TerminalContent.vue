<template>
  <div class="flex flex-col gap-4 lg:gap-6 font-terminal">
    <div class="flex items-start gap-2">
      <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
      <span class="text-dark dark:text-light">{{ terminalData.command || '' }}</span>
    </div>
    <div class="flex flex-col leading-normal tracking-wide text-dark dark:text-light">
      <h2 class="mb-4 text-5xl font-extrabold text-center text-purple-500 lg:mb-6">
        {{ terminalData.title || '' }}
      </h2>
      <p v-for="(content, index) in terminalData.content" :key="index">
        {{ content || '' }}
      </p>
    </div>
    <hr class="border border-gray-600" role="separator">
    <div class="flex flex-col gap-2 w-max">
      <div class="flex items-start gap-2">
        <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
        <span class="text-dark dark:text-light">npm run cv-download</span>
      </div>
      <a
        v-for="(cv, key) in terminalData.cv"
        :key="key"
        :href="$config.public.BASE_URL + cv.url"
        target="_blank"
        aria-label="Download my curriculum vitae"
        :download="cv.fileName"
        :class="{
          'hover:text-blue-800 dark:hover:text-blue-500': true,
          'text-blue-700 dark:text-blue-400' : activeIndex === key
        }"
        role="link"
        @mouseover="changeActiveIndex(key)"
      >
        > {{ cv.label || '' }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PresentationInfo } from '~/types/types.d'

defineProps({
  terminalData: {
    type: Object as () => PresentationInfo,
    default: () => ({})
  }
})

const activeIndex = ref(0)

const changeActiveIndex = (index: number) => {
  activeIndex.value = index
}
</script>
