<template>
	<SectionWrapper id="introduction">
		<div class="flex flex-col items-center justify-center w-full gap-6 h-dvh">
			<div class="flex items-end justify-center w-full h-full overflow-hidden">
				<h1 class="w-full py-6 font-bold text-center text-transparent text-7xl md:text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
					{{ $t('whoAmI') }}
				</h1>
			</div>
			<div class="flex items-start justify-center w-full h-full overflow-hidden">
				<h2
					ref="typingtext"
					class="inline-block text-2xl font-bold text-center text-purple-600 cursor-default text-nowrap sm:text-4xl md:text-5xl xl:text-6xl animate-blinking-caret"
				>
					{{ txt }}
				</h2>
			</div>
		</div>
	</SectionWrapper>
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
	const fullTxt = t('fullJobTitle')

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
