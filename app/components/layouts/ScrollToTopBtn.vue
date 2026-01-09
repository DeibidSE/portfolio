<script setup lang="ts">
const showScrollToTop = ref(false)

const handleScroll = () => {
	showScrollToTop.value = window.scrollY > 0
}

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<button
		v-if="showScrollToTop"
		class="bottom-4 right-4 group p-1 w-12 h-12 text-accent bg-secondary-light/50 dark:bg-slate-900/50 backdrop-blur-lg font-semibold shadow-lg border-accent/70 hover:w-36 hover:before:text-sm fixed z-40 flex cursor-pointer items-center justify-center justify-items-center overflow-hidden rounded-[50%] border-2 duration-300 before:absolute before:text-[0px] before:content-[attr(data-label)] hover:rounded-[50px] hover:duration-300 hover:before:duration-300"
		aria-label="Scroll to top of the page"
		:data-label="$t('back_to_top')"
		@click="scrollToTop"
	>
		<Icon name="tabler:chevron-up" class="text-3xl duration-300 group-hover:translate-y-[-200%] group-hover:duration-300" />
	</button>
</template>
