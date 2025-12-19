<template>
	<div
		class="flex items-center justify-center p-2 rounded-full cursor-pointer hover:scale-110 hover:text-yellow-500 dark:hover:text-accent"
		@click="toggleTheme"
	>
		<div
			class="transition-transform duration-500"
			:class="{
				'rotate-180': themeStore.isLightMode,
			}"
		>
			<Icon
				v-if="themeStore.isLightMode"
				name="tabler:sun"
				class="text-2xl transition-all duration-500 ease-in-out transform"
			/>
			<Icon
				v-else
				name="tabler:moon"
				class="text-2xl transition-all duration-500 ease-in-out transform"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()

const setTheme = () => {
	themeStore.setTheme(!themeStore.isLightMode ? 'light' : 'dark')
}

const toggleTheme = () => {
	if (!document.startViewTransition) setTheme()
	document.startViewTransition(setTheme)
}

onMounted(() => {
	themeStore.initTheme()
})
</script>

<style lang="css">
::view-transition-new(root) {
  mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="white"/></svg>')
    center / 0 no-repeat;
  animation: scale 1s;
  animation-fill-mode: both;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: none;
  animation-fill-mode: both;
  z-index: -1;
}
.dark::view-transition-new(root) {
  animation: scale 1s;
  animation-fill-mode: both;
}

@keyframes scale {
  to {
    mask-size: 200vmax;
  }
}
</style>
