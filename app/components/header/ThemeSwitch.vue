<script setup lang="ts">
const themeStore = useThemeStore()

const setTheme = () => {
	themeStore.setTheme(themeStore.isLightMode ? 'dark' : 'light')
}

const toggleTheme = async () => {
	if (!document.startViewTransition) {
		setTheme()
		return
	}

	await document.startViewTransition(() => {
		setTheme()
	}).ready
}

onMounted(() => {
	themeStore.initTheme()
})
</script>

<template>
	<button
		class="focus-ring flex size-10 items-center justify-center rounded-full transition-colors hover:bg-accent/10 hover:text-yellow-500 dark:hover:bg-white/10 dark:hover:text-accent-light"
		aria-label="Toggle theme"
		@click="toggleTheme"
	>
		<Icon :name="themeStore.isLightMode ? 'tabler:sun' : 'tabler:moon'" class="text-xl transition-transform duration-300 hover:scale-110" />
	</button>
</template>

<style>
@supports (view-transition-name: root) {
	:root {
		view-transition-name: root;
	}

	::view-transition-group(root) {
		animation-duration: 2.5s;
		animation-timing-function: ease-in-out;
	}

	::view-transition-old(root),
	::view-transition-new(root) {
		mix-blend-mode: normal;
		animation: none;
	}

	::view-transition-new(root) {
		animation: mask-scale 2.5s both;

		mask: url('~/assets/gifs/dance-girl-transition.gif') center / 0 no-repeat;
		-webkit-mask: url('~/assets/gifs/dance-girl-transition.gif') center / 0 no-repeat;
	}

	@keyframes mask-scale {
		0% {
			mask-size: 0;
			-webkit-mask-size: 0;
		}

		15% {
			mask-size: 40vmax;
			-webkit-mask-size: 40vmax;
		}

		85% {
			mask-size: 40vmax;
			-webkit-mask-size: 40vmax;
		}

		100% {
			mask-size: 220vmax;
			-webkit-mask-size: 220vmax;
		}
	}
}
</style>
