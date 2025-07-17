<template>
	<LayoutsSectionWrapper id="introduction">
		<div
			class="flex flex-col items-center justify-center w-full gap-6 text-center min-h-[calc(100dvh-10rem)]"
		>
			<h1 class="w-full py-6 font-bold text-center text-transparent text-7xl md:text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
				{{ $t('introduction.greeting') }}
			</h1>

			<div class="flex items-center justify-center w-full min-h-8 sm:min-h-10 md:min-h-12 xl:min-h-16">
				<h2
					ref="typingtext"
					class="text-2xl font-bold transition-all duration-300 ease-out text-accent-light sm:text-4xl md:text-5xl xl:text-6xl"
				>
					{{ txt }}
					<span
						class="dark:text-white/70 text-dark/50 animate-blinking-cursor"
						aria-hidden="true"
					>|</span>
				</h2>
			</div>
		</div>
	</LayoutsSectionWrapper>
</template>

<script setup lang="ts">
const txt = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingtextElement = ref()

const { t } = useI18n()

onMounted(() => {
	typingtextElement.value = typingtextElement
	tick()
})

const tick = () => {
	const htmlElement = typingtextElement.value
	const fullTxt = t('job.title')

	if (htmlElement && fullTxt.length > 0) {
		if (isDeleting.value) {
			txt.value = fullTxt.substring(0, txt.value.length - 1)
		} else {
			txt.value = fullTxt.substring(0, txt.value.length + 1)
		}

		htmlElement.textContent = txt.value

		let pause = 200 - Math.random() * 100

		if (isDeleting.value) {
			pause /= 2
		}

		if (!isDeleting.value && txt.value === fullTxt) {
			pause = 2000
			isDeleting.value = true
		} else if (isDeleting.value && txt.value === '') {
			isDeleting.value = false
			loopNum.value++
			pause = 500
		}

		setTimeout(tick, pause)
	} else {
		txt.value = fullTxt
	}
}
</script>
