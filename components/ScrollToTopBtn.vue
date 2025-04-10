<template>
	<button
		v-if="showScrollToTop"
		:class="`fixed bottom-4 right-4 group z-40 p-1 w-12 h-12 text-dark dark:text-light bg-purple-600 font-semibold flex items-center justify-center justify-items-center shadow-lg cursor-pointer duration-300 overflow-hidden rounded-[50%] border-2 dark:border-light border-dark hover:w-36 hover:duration-300 hover:rounded-[50px] before:absolute before:content-[attr(data-label)] before:text-[0px] hover:before:text-sm hover:before:duration-300`"
		aria-label="Scroll to top of the page"
		:data-label="$t('backToTop')"
		@click="scrollToTop"
	>
		<Icon
			name="tabler:chevron-up"
			class="text-3xl dark:text-white text-dark duration-300 group-hover:duration-300 group-hover:translate-y-[-200%]"
		/>
	</button>
</template>

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
