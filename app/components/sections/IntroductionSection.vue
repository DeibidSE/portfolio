<script setup lang="ts">
const { t, locale } = useI18n()

/**
 * The role line types itself out on a loop. Only this one string changes, so
 * there's no per-frame work, and it cleans up on unmount and pauses for reduced
 * motion. The full title still sizes the box (see template) so the lines on
 * either side don't jump while letters come and go.
 */
const fullTitle = computed(() => t('job.title'))
const displayText = ref('')

const TYPE_MS = 85
const DELETE_MS = 40
const HOLD_FULL_MS = 1800
const HOLD_EMPTY_MS = 450

let timer: ReturnType<typeof setTimeout> | undefined
let deleting = false
let prefersReduced = false

function tick() {
	const target = fullTitle.value

	if (!deleting) {
		displayText.value = target.slice(0, displayText.value.length + 1)

		if (displayText.value === target) {
			deleting = true
			timer = setTimeout(tick, HOLD_FULL_MS)
		} else {
			timer = setTimeout(tick, TYPE_MS)
		}
	} else {
		displayText.value = target.slice(0, displayText.value.length - 1)

		if (displayText.value === '') {
			deleting = false
			timer = setTimeout(tick, HOLD_EMPTY_MS)
		} else {
			timer = setTimeout(tick, DELETE_MS)
		}
	}
}

function start() {
	clearTimeout(timer)
	displayText.value = ''
	deleting = false
	timer = setTimeout(tick, TYPE_MS)
}

onMounted(() => {
	prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if (prefersReduced) {
		displayText.value = fullTitle.value
	} else {
		start()
	}
})

watch(locale, () => {
	if (prefersReduced) {
		displayText.value = fullTitle.value
	} else {
		start()
	}
})

onBeforeUnmount(() => clearTimeout(timer))

function scrollToSection(id: string) {
	const el = document.getElementById(id)

	if (el) {
		window.scrollTo({
			top: el.offsetTop - 80,
			behavior: 'smooth',
		})
	}
}
</script>

<template>
	<UiSectionWrapper id="introduction">
		<div class="hero relative z-10 flex w-full flex-col items-center gap-7 text-center sm:gap-9">
			<h1
				class="hero-title text-balance py-2 text-5xl font-black leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
				:data-text="$t('introduction.greeting')"
			>
				{{ $t('introduction.greeting') }}
			</h1>

			<div class="flex animate-fade-up items-center gap-4 motion-reduce:animate-none sm:gap-5" style="animation-delay: 180ms">
				<span class="h-px w-10 bg-gradient-to-r from-transparent to-accent/60 sm:w-16" aria-hidden="true" />
				<p
					class="grid justify-items-start font-code text-xs font-medium uppercase tracking-[0.2em] text-accent-secondary-dark dark:text-accent-secondary sm:text-sm"
				>
					<span class="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">{{ fullTitle }}</span>
					<span class="col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
						{{ displayText }}<span class="caret" />
					</span>
					<span class="sr-only">{{ fullTitle }}</span>
				</p>
				<span class="h-px w-10 bg-gradient-to-l from-transparent to-accent/60 sm:w-16" aria-hidden="true" />
			</div>
		</div>

		<button
			type="button"
			aria-label="Scroll to content"
			class="focus-ring absolute inset-x-0 bottom-8 z-10 mx-auto w-fit animate-bounce rounded-full p-2 text-dark/50 transition-colors hover:text-accent motion-reduce:animate-none dark:text-light/50 dark:hover:text-accent-light"
			@click="scrollToSection('about')"
		>
			<Icon name="tabler:chevron-down" class="text-3xl" aria-hidden="true" />
		</button>
	</UiSectionWrapper>
</template>

<style scoped>
/*
 * As the first screen scrolls away the hero shrinks, fades and blurs a little, so
 * attention moves to the content below. Pure CSS scroll animation, same idea as
 * the navbar, running over the first ~85vh. The base state is the normal hero, so
 * browsers without scroll-driven animations (and reduced motion) just leave it.
 */
.hero {
	transform-origin: center 30%;
}

/*
 * Cyberpunk neon-sign title. Letters filled with a saturated violet -> cyan
 * gradient (the Blade Runner duotone) that slowly drifts so the sign
 * "breathes". A tight neon glow + faint chromatic edge, a power-on flicker on
 * load, and two offset cyan/magenta ghost copies (::before / ::after) that
 * fire a quick RGB-split glitch (horizontal slices) every few seconds. Light
 * mode stays a clean, glow-free version so it remains legible.
 */
.hero-title {
	position: relative;
	background-image: linear-gradient(110deg, #7c1fe0 0%, #a81ec4 100%);
	background-size: 100% auto;
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	-webkit-text-fill-color: transparent;
	animation:
		neon-power-on 1.3s linear both,
		glitch-jump 5s steps(1, end) 2.5s infinite;
}

.hero-title::before,
.hero-title::after {
	content: attr(data-text);
	position: absolute;
	inset: 0;
	z-index: -1;
	pointer-events: none;
	opacity: 0;
	background: none;
}

.hero-title::before {
	color: #c0006a;
	-webkit-text-fill-color: #c0006a;
	animation: glitch-a 5s steps(1, end) 2.5s infinite;
}

.hero-title::after {
	color: #0091b3;
	-webkit-text-fill-color: #0091b3;
	animation: glitch-b 5s steps(1, end) 2.5s infinite;
}

.dark .hero-title {
	background-image: linear-gradient(110deg, #b05bff 0%, #d633ff 100%);
	filter: drop-shadow(0 0 8px rgba(176, 60, 255, 0.5));
}

.dark .hero-title::before {
	color: #ff2d95;
	-webkit-text-fill-color: #ff2d95;
}

.dark .hero-title::after {
	color: #00e5ff;
	-webkit-text-fill-color: #00e5ff;
}

@keyframes neon-power-on {
	0% {
		opacity: 0;
	}
	8% {
		opacity: 0.25;
	}
	10% {
		opacity: 1;
	}
	13% {
		opacity: 0.35;
	}
	16% {
		opacity: 1;
	}
	19% {
		opacity: 0.6;
	}
	22%,
	100% {
		opacity: 1;
	}
}

/*
 * The two ghost copies tear the word into horizontal slices that jump to
 * different horizontal offsets each frame (steps timing, no interpolation), so
 * the letters look shattered rather than swept. glitch-jump shoves and slices
 * the real text in sync. Short burst, then idle.
 */
@keyframes glitch-a {
	0%,
	7%,
	100% {
		opacity: 0;
		transform: translate(0);
		clip-path: inset(0 0 100% 0);
	}
	0.8% {
		opacity: 0.95;
		transform: translate(-9px, 0);
		clip-path: inset(8% 0 78% 0);
	}
	1.8% {
		opacity: 0.95;
		transform: translate(11px, 0);
		clip-path: inset(44% 0 34% 0);
	}
	2.8% {
		opacity: 0.95;
		transform: translate(-7px, 0);
		clip-path: inset(68% 0 14% 0);
	}
	3.8% {
		opacity: 0.95;
		transform: translate(13px, 0);
		clip-path: inset(24% 0 58% 0);
	}
	4.8% {
		opacity: 0.95;
		transform: translate(-11px, 0);
		clip-path: inset(82% 0 4% 0);
	}
	5.8% {
		opacity: 0.95;
		transform: translate(6px, 0);
		clip-path: inset(34% 0 46% 0);
	}
}

@keyframes glitch-b {
	0%,
	7%,
	100% {
		opacity: 0;
		transform: translate(0);
		clip-path: inset(0 0 100% 0);
	}
	0.8% {
		opacity: 0.9;
		transform: translate(10px, 0);
		clip-path: inset(60% 0 22% 0);
	}
	1.8% {
		opacity: 0.9;
		transform: translate(-12px, 0);
		clip-path: inset(16% 0 64% 0);
	}
	2.8% {
		opacity: 0.9;
		transform: translate(8px, 0);
		clip-path: inset(38% 0 44% 0);
	}
	3.8% {
		opacity: 0.9;
		transform: translate(-9px, 0);
		clip-path: inset(74% 0 8% 0);
	}
	4.8% {
		opacity: 0.9;
		transform: translate(12px, 0);
		clip-path: inset(6% 0 80% 0);
	}
	5.8% {
		opacity: 0.9;
		transform: translate(-6px, 0);
		clip-path: inset(50% 0 30% 0);
	}
}

@keyframes glitch-jump {
	0%,
	6.5%,
	100% {
		transform: translate(0, 0);
		clip-path: inset(0 0 0 0);
	}
	0.8% {
		transform: translate(5px, 0);
		clip-path: inset(38% 0 0 0);
	}
	1.8% {
		transform: translate(-4px, 0);
		clip-path: inset(0 0 52% 0);
	}
	2.8% {
		transform: translate(4px, 0);
		clip-path: inset(0 0 0 0);
	}
	3.8% {
		transform: translate(-5px, 0);
		clip-path: inset(58% 0 0 0);
	}
	4.8% {
		transform: translate(3px, 0);
		clip-path: inset(0 0 44% 0);
	}
}

@media (prefers-reduced-motion: reduce) {
	.hero-title,
	.hero-title::before,
	.hero-title::after {
		animation: none;
	}
}

/*
 * Keep the hero sharp for the first bit of scroll before it recedes, so it feels
 * like a handoff instead of bailing the second you scroll. Finishes just before a
 * full screen (75vh) so the next section comes in clean.
 */
@keyframes hero-recede {
	0% {
		opacity: 1;
		transform: scale(1) translateY(0);
		filter: blur(0);
	}
	25% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: scale(0.92) translateY(-2rem);
		filter: blur(4px);
	}
}

@supports (animation-timeline: scroll()) {
	.hero {
		animation: hero-recede linear both;
		animation-timeline: scroll(root block);
		animation-range: 0 75vh;
	}
}

@media (prefers-reduced-motion: reduce) {
	.hero {
		animation: none;
	}
}

.caret {
	display: inline-block;
	width: 1px;
	height: 1em;
	vertical-align: text-bottom;
	background-color: theme('colors.accent');
	animation: caret-blink 1s step-end infinite;
}

@keyframes caret-blink {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}

@media (prefers-reduced-motion: reduce) {
	.caret {
		display: none;
	}
}
</style>
