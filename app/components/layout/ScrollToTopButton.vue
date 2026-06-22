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
		class="glass-surface group fixed bottom-4 right-4 z-40 flex h-12 w-12 cursor-pointer items-center justify-center justify-items-center overflow-hidden rounded-[50%] p-1 font-semibold text-accent duration-300 before:absolute before:text-[0px] before:content-[attr(data-label)] hover:w-36 hover:rounded-[50px] hover:duration-300 hover:before:text-sm hover:before:duration-300 dark:text-accent-light"
		aria-label="Scroll to top of the page"
		:data-label="$t('back_to_top')"
		@click="scrollToTop"
	>
		<Icon name="tabler:chevron-up" class="text-3xl duration-300 group-hover:translate-y-[-200%] group-hover:duration-300" />
	</button>
</template>
