<template>
  <div class="flex flex-col gap-6 font-terminal">
    <div class="flex items-start gap-2">
      <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
      <span class="text-dark dark:text-light">{{ terminalData.command || '' }}</span>
    </div>
    <div class="flex flex-col gap-4 xl:grid xl:grid-cols-3">
      <div class="flex flex-col h-full gap-4 lg:col-span-2">
        <h2 class="text-5xl font-extrabold text-center text-purple-500 uppercase">
          {{ terminalData.title || '' }}
        </h2>
        <div class="flex flex-col justify-center h-full gap-3 leading-normal tracking-wide text-dark dark:text-light">
          <p v-for="(content, index) in terminalData.content" :key="index">
            {{ content || '' }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center self-center gap-8 w-fit h-fit justify-self-center">
        <div class="group [perspective:1000px]" aria-label="Profile Card">
          <div class="relative w-full h-full transition-all duration-500 rounded-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)] shadow-xl shadow-black/40">
            <div class="inset-0 p-4 border-4 rounded-full md:p-6 dark:bg-primary-dark bg-primary-light border-dark dark:border-light">
              <img
                :src="`${$config.public.BASE_URL}/${terminalData?.profileCard?.imagePath}`"
                alt="Photo of the programmer of this portfolio"
                class="inset-0 object-cover object-top border-4 rounded-full border-dark dark:border-light aspect-square"
                loading="lazy"
                role="img"
                aria-label="Photo of the programmer"
                width="300px"
                height="300px"
              >
            </div>
            <div class="absolute inset-0 w-full h-full p-8 text-center border-4 rounded-full dark:bg-primary-dark bg-primary-light border-dark dark:border-light [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex flex-col items-center justify-center min-h-full">
                <nuxt-icon name="main" filled class="w-full h-auto text-3xl" role="img" aria-label="Profile Icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          Status:
          <BadgeComponent color="red">
            {{ terminalData.availability }}
          </BadgeComponent>
        </div>
      </div>
    </div>

    <hr class="border-2 border-gray-400 dark:border-gray-600" role="separator">

    <div class="flex flex-wrap items-center justify-around w-full gap-4">
      <a
        v-for="(info, key) in terminalData?.profileCard?.socialLinks"
        :key="key"
        :href="info.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Contact me via ${info.name}`"
        class="flex items-center justify-center px-3 py-1 transition border rounded-full shadow-xl dark:border-light border-dark gap-x-2 hover:scale-125 dark:bg-primary-dark bg-primary-light"
      >
        <nuxt-icon :name="info.icon" class="text-2xl" />
        {{ info.name || '' }}
      </a>
    </div>

    <hr class="border-2 border-gray-400 dark:border-gray-600" role="separator">

    <div class="flex flex-col gap-2 w-max">
      <div class="flex items-start gap-2">
        <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
        <span class="text-dark dark:text-light">npx run cv-download</span>
      </div>
      <a
        v-for="(cv, key) in terminalData.cv"
        :key="key"
        :href="`${$config.public.BASE_URL}/${cv.url}`"
        target="_blank"
        aria-label="Download my curriculum vitae"
        :download="cv.fileName"
        :class="{
          'hover:text-purple-700 dark:hover:text-purple-500': true,
          'text-purple-600 dark:text-purple-400' : activeIndex === key
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

defineProps<{ terminalData: PresentationInfo }>()

const activeIndex = ref(0)

const changeActiveIndex = (index: number) => {
  activeIndex.value = index
}
</script>
