<template>
  <div class="flex items-center cursor-pointer" aria-label="Change color theme" @click="setTheme">
    <nuxt-icon v-if="themeStore.isLightMode" name="sun" class="text-2xl hover:text-yellow-500" />
    <nuxt-icon v-else name="moon" class="text-2xl hover:text-purple-500" />
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()

const setTheme = () => {
  themeStore.setTheme(!themeStore.isLightMode ? 'light' : 'dark')
}

onMounted(() => {
  themeStore.initTheme()
})
</script>
