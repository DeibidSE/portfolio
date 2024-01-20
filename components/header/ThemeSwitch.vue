<template>
  <div class="flex items-center" role="switch" aria-label="Change color theme" :aria-checked="themeStore.lightmode">
    <label for="lightmodeToggle" class="relative inline-flex items-center cursor-pointer">
      <input
        id="lightmodeToggle"
        v-model="themeStore.lightmode"
        type="checkbox"
        class="hidden sr-only peer"
        aria-hidden="true"
      >
      <div
        class="w-12 h-6 text-xs duration-300 rounded-full shadow outline-none dark:shadow-gray-300/60 shadow-dark/50 sm:w-14 sm:h-7 bg-secondary-dark group peer ring-0 after:duration-300 after:rounded-full after:absolute after:bg-gray-300 after:justify-center after:items-center after:outline-none after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:top-1 after:left-1 after:flex peer-checked:bg-sky-400 peer-checked:after:bg-yellow-300 sm:peer-checked:after:translate-x-7 peer-checked:after:translate-x-6 peer-focus:outline-none scroll-fade-opacity"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themeStore'

const themeStore = useThemeStore()

watch(() => themeStore.lightmode, (selected) => {
  themeStore.setTheme(selected ? 'light' : 'dark')
})

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
@keyframes fadeOutBackground {
  to {
    background: transparent;
  }

}

.scroll-fade-opacity {
  animation: linear fadeOutBackground both;
  animation-range: 0 150vh;
  animation-timeline: scroll(root);
}
</style>
