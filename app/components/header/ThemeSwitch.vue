<template>
	<div
		class="flex items-center justify-center p-2 rounded-full cursor-pointer hover:scale-110 hover:text-yellow-500 dark:hover:text-accent"
		@click="setTheme"
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

onMounted(() => {
	themeStore.initTheme()
})
</script>
