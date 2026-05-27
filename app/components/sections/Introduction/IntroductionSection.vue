<script setup lang="ts">
const { t, locale } = useI18n()

const TYPE_SPEED = 90
const DELETE_SPEED = 50
const PAUSE_WHEN_COMPLETE = 3600
const PAUSE_WHEN_EMPTY = 600

const txt = ref('')

let isDeleting = false
let timer: ReturnType<typeof setTimeout> | undefined

function tick() {
	const fullTxt = t('job.title')
	if (!fullTxt) return

	txt.value = fullTxt.slice(0, txt.value.length + (isDeleting ? -1 : 1))

	let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED

	if (!isDeleting && txt.value === fullTxt) {
		isDeleting = true
		delay = PAUSE_WHEN_COMPLETE
	} else if (isDeleting && txt.value === '') {
		isDeleting = false
		delay = PAUSE_WHEN_EMPTY
	}

	timer = setTimeout(tick, delay)
}

function start() {
	// Skip the animation entirely for users who prefer reduced motion.
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		txt.value = t('job.title')
		return
	}

	tick()
}

onMounted(start)

// Restart cleanly when the language changes mid-animation (titles differ in length).
watch(locale, () => {
	clearTimeout(timer)
	isDeleting = false
	txt.value = ''
	start()
})

onBeforeUnmount(() => clearTimeout(timer))

// Mirror the navbar's offset so anchored sections clear the fixed header.
function scrollToSection(id: string) {
	const el = document.getElementById(id)
	if (!el) return
	window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}
</script>

<template>
	<LayoutsSectionWrapper id="introduction">
		<header class="flex flex-col items-center gap-7 text-center sm:gap-9">
			<h1
				class="fade-up animate-gradient text-balance bg-gradient-to-r from-accent via-accent-secondary to-accent bg-[length:200%_200%] bg-clip-text py-2 text-5xl font-extrabold leading-[1.05] tracking-tight text-transparent motion-reduce:animate-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
				style="animation-delay: 0ms"
			>
				{{ $t('introduction.greeting') }}
			</h1>

			<!-- Wrapper owns the entrance animation so the note keeps its hand-pinned tilt. -->
			<div class="fade-up" style="animation-delay: 120ms">
				<p
					class="relative flex max-w-[90vw] -rotate-1 items-center justify-center gap-1 whitespace-nowrap rounded-tr-xl bg-yellow-400 px-6 py-4 text-lg font-semibold text-dark shadow-bottom transition-transform duration-300 ease-out before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-tr-full before:bg-yellow-300 before:shadow-md after:absolute after:-top-3 after:left-1/2 after:h-6 after:w-24 after:-translate-x-1/2 after:rotate-3 after:rounded-[3px] after:bg-gradient-to-b after:from-white/60 after:to-white/30 after:shadow-md after:ring-1 after:ring-white/40 after:content-[''] hover:-translate-y-1 hover:rotate-0 hover:scale-[1.02] sm:text-2xl md:text-3xl lg:text-4xl"
					:style="{ width: $t('job.title').length + 3 + 'ch' }"
				>
					{{ txt }}
					<span class="animate-blinking-cursor text-dark/70 motion-reduce:animate-none" aria-hidden="true">|</span>
				</p>
			</div>
		</header>

		<button
			type="button"
			aria-label="Scroll to content"
			class="focus-ring scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-dark/50 transition-colors hover:text-accent dark:text-light/50 dark:hover:text-accent-light"
			@click="scrollToSection('about')"
		>
			<Icon name="tabler:chevron-down" class="text-3xl" aria-hidden="true" />
		</button>
	</LayoutsSectionWrapper>
</template>

<style scoped>
@keyframes fade-up {
	from {
		opacity: 0;
		transform: translateY(14px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.fade-up {
	animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes scroll-cue {
	0%,
	100% {
		transform: translate(-50%, 0);
		opacity: 0.5;
	}
	50% {
		transform: translate(-50%, 6px);
		opacity: 1;
	}
}

.scroll-cue {
	animation: scroll-cue 1.8s ease-in-out infinite;
}

/* Honour reduced-motion: drop the entrance and looping cue animations. */
@media (prefers-reduced-motion: reduce) {
	.fade-up,
	.scroll-cue {
		animation: none;
	}
}
</style>
