<script setup lang="ts">
const txt = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)

const { t } = useI18n()

const tick = () => {
	const fullTxt = t('job.title')

	if (!fullTxt) return

	if (isDeleting.value) {
		txt.value = fullTxt.substring(0, txt.value.length - 1)
	} else {
		txt.value = fullTxt.substring(0, txt.value.length + 1)
	}

	let delay = isDeleting.value ? 50 : 90

	if (!isDeleting.value && txt.value === fullTxt) {
		delay = 3600
		isDeleting.value = true
	} else if (isDeleting.value && txt.value === '') {
		isDeleting.value = false
		loopNum.value++
		delay = 600
	}

	setTimeout(tick, delay)
}

onMounted(tick)
</script>

<template>
	<LayoutsSectionWrapper id="introduction">
		<header class="gap-6 sm:gap-8 flex h-full flex-col items-center text-center">
			<h1
				class="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl from-accent via-accent-secondary to-accent animate-gradient py-3 bg-gradient-to-r bg-[length:200%_200%] bg-clip-text text-transparent"
			>
				{{ $t('introduction.greeting') }}
			</h1>

			<p
				class="gap-1 px-6 py-4 text-xl font-semibold bg-yellow-400 sm:text-2xl md:text-3xl lg:text-4xl text-dark shadow-bottom before:top-0 before:right-0 before:w-4 before:h-4 before:bg-yellow-300 before:shadow-md rounded-tr-xl relative flex -rotate-1 items-center justify-center before:absolute before:rounded-tr-full"
				:style="{ width: $t('job.title').length + 3 + 'ch' }"
			>
				{{ txt }}
				<span class="animate-blinking-cursor text-dark/70" aria-hidden="true">|</span>
			</p>
		</header>
	</LayoutsSectionWrapper>
</template>
