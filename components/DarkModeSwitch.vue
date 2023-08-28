<template>
  <label for="lightmodeToggle" class="relative inline-flex items-center cursor-pointer">
    <input id="lightmodeToggle" v-model="themeStore.lightmode" type="checkbox" class="sr-only peer">
    <div class="w-9 h-5 rounded-full peer dark:bg-accent-dark bg-accent-light peer-checked:after:translate-x-full peer-checked:after:border-[#E6812C] after:content-[''] after:absolute after:top-[4px] after:left-[2px] peer-checked:after:bg-yellow-300 after:bg-light after:border-[#9D6FB6] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400 shadow-inside" />
    <span class="ml-1">{{ themeStore.isLightMode ? '🌞' : '🌚' }}</span>
  </label>
</template>

<script lang="ts">
import { useThemeStore } from '~/stores/themeStore'

export default {
  data () {
    return {
      themeStore: useThemeStore()
    }
  },
  watch: {
    'themeStore.lightmode' (selected) {
      this.themeStore.setTheme(selected ? 'light' : 'dark')
    }
  },
  mounted () {
    this.themeStore.initTheme()
  }
}
</script>
