<script setup lang="ts">
const themeStore = useThemeStore()

const setTheme = () => {
	themeStore.setTheme(themeStore.isLightMode ? 'dark' : 'light')
}

const toggleTheme = () => {
	if (!document.startViewTransition) {
		setTheme()
		return
	}
	document.startViewTransition(setTheme)
}

onMounted(() => {
	themeStore.initTheme()
})
</script>

<template>
	<button
		class="size-10 hover:text-yellow-500 dark:hover:text-accent flex items-center justify-center transition-colors focus:outline-none"
		aria-label="Toggle theme"
		@click="toggleTheme"
	>
		<Icon :name="themeStore.isLightMode ? 'tabler:sun' : 'tabler:moon'" class="text-xl transition-all duration-300" />
	</button>
</template>

<style>
@supports (view-transition-name: root) {
	::view-transition-group(root) {
		animation-timing-function: var(--expo-in);
	}

	::view-transition-new(root),
	::view-transition-old(root),
	.dark::view-transition-old(root) {
		animation: mask-scale 2.5s both;
	}

	::view-transition-new(root) {
		mask: url('~/assets/gifs/dance-girl-transition.gif') center / 0 no-repeat;
	}

	@keyframes mask-scale {
		0% {
			mask-size: 0;
		}
		15% {
			mask-size: 50vmax;
		}
		85% {
			mask-size: 50vmax;
		}
		100% {
			mask-size: 2000vmax;
		}
	}
}
</style>
