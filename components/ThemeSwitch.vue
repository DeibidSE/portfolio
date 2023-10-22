<template>
  <div class="flex items-center" role="switch" aria-label="Change color theme" :aria-checked="themeStore.lightmode" tabindex="0">
    <label for="lightmodeToggle" class="cursor-pointer">
      <input id="lightmodeToggle" v-model="themeStore.lightmode" type="checkbox" class="hidden checkbox peer" aria-hidden="true">
      <div class="flex items-center justify-between w-12 h-6 p-1 rounded-full sm:w-14 sm:h-7 shadow-inside bg-accent-light dark:bg-accent-dark">
        <div
          class="flex items-center justify-center w-4 h-4 text-lg transition-transform transform rounded-full sm:text-xl sm:w-6 sm:h-6"
          :class="{ 'translate-x-6': themeStore.isLightMode, 'translate-x-0': !themeStore.isLightMode }"
        >
          <Icon :name="themeStore.isLightMode ? 'fluent-emoji:new-moon-face' : 'fluent-emoji:sun-with-face'" alt="Change of theme icon" />
        </div>
      </div>
    </label>
  </div>
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
