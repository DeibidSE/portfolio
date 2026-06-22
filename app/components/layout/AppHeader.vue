<script setup lang="ts">
const { t } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const sections = computed(() => [
	{ key: 'about', label: t('nav.about') },
	{ key: 'projects', label: t('nav.projects') },
	{ key: 'experience', label: t('nav.experience') },
	{ key: 'skills', label: t('nav.skills') },
])

const scrollToSection = (section: string) => {
	isMenuOpen.value = false
	const el = document.getElementById(section)
	const offset = 80

	if (el) {
		window.scrollTo({
			top: el.offsetTop - offset,
			behavior: 'smooth',
		})
	}
}
</script>

<template>
	<header class="nav-header fixed inset-x-0 top-0 z-50 w-full transition-all duration-300" :class="{ 'menu-open': isMenuOpen }">
		<nav class="nav-inner mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8" aria-label="Main navigation">
			<a
				:href="`${$config.public.BASE_URL}`"
				class="focus-ring flex items-center rounded-xl transition-transform duration-300 hover:scale-105"
				aria-label="Main website logo"
			>
				<Icon name="my-icon:main" class="size-10 sm:size-11" aria-hidden="true" />
			</a>

			<ul class="hidden items-center gap-1 lg:flex">
				<li v-for="section in sections" :key="section.key">
					<button
						type="button"
						class="nav-link focus-ring relative isolate rounded-full px-3 py-1.5 text-sm font-medium text-dark/70 transition-colors duration-300 hover:bg-black/[0.04] hover:text-accent dark:text-light/70 dark:hover:bg-white/[0.06] dark:hover:text-accent-light"
						:data-section="section.key"
						:aria-label="section.label"
						@click="scrollToSection(section.key)"
					>
						{{ section.label }}
					</button>
				</li>
			</ul>

			<div class="hidden items-center gap-2 lg:flex">
				<LayoutThemeSwitch />
				<LayoutLanguageSelector />
			</div>

			<button
				type="button"
				class="focus-ring relative z-50 flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl lg:hidden"
				aria-label="Toggle menu"
				:aria-expanded="isMenuOpen"
				@click="toggleMenu"
			>
				<span
					class="h-0.5 w-6 rounded-full bg-current transition-all duration-300"
					:class="isMenuOpen ? 'translate-y-2 rotate-45' : ''"
					aria-hidden="true"
				/>
				<span class="h-0.5 w-6 rounded-full bg-current transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''" aria-hidden="true" />
				<span
					class="h-0.5 w-6 rounded-full bg-current transition-all duration-300"
					:class="isMenuOpen ? '-translate-y-2 -rotate-45' : ''"
					aria-hidden="true"
				/>
			</button>
		</nav>

		<transition name="mobile-menu">
			<div v-if="isMenuOpen" class="grid grid-rows-[1fr] lg:hidden">
				<div class="menu-clip min-h-0">
					<div class="mx-auto flex w-full max-w-7xl flex-col gap-5 border-t border-slate-900/10 px-5 pb-6 pt-4 dark:border-white/10 sm:px-8">
						<ul class="flex flex-col gap-1">
							<li v-for="(section, i) in sections" :key="section.key" class="animate-slide-in opacity-0" :style="{ animationDelay: `${i * 70}ms` }">
								<button
									type="button"
									class="focus-ring flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg font-semibold text-dark transition-colors hover:bg-accent/10 hover:text-accent dark:text-light dark:hover:text-accent-light"
									@click="scrollToSection(section.key)"
								>
									{{ section.label }}
									<span class="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary" aria-hidden="true" />
								</button>
							</li>
						</ul>

						<div class="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />

						<div class="flex items-center justify-between gap-4 px-3">
							<LayoutThemeSwitch />
							<LayoutLanguageSelector />
						</div>
					</div>
				</div>
			</div>
		</transition>
	</header>
</template>

<style scoped>
/*
 * Active section indicator: a pill highlight that matches the hover state, driven
 * by each section's view() timeline (hoisted with timeline-scope on #app). All CSS,
 * no scroll listener, and it just does nothing on browsers without scroll-driven
 * animations. The pill sits on ::before (z-index -1, behind the label) and the
 * accent text colour animates on the link itself, so neither one fights the hover
 * styles outside the active range.
 */
.nav-link {
	--nav-accent: theme('colors.accent');
}

.dark .nav-link {
	--nav-accent: theme('colors.accent-light');
}

.nav-link::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	border-radius: 9999px;
	background-color: rgb(0 0 0 / 0.04);
	opacity: 0;
}

.dark .nav-link::before {
	background-color: rgb(255 255 255 / 0.06);
}

@keyframes nav-active-pill {
	0% {
		opacity: 0;
	}
	12%,
	88% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes nav-active-text {
	12%,
	88% {
		color: var(--nav-accent);
	}
}

@supports (animation-timeline: view()) {
	.nav-link {
		animation: nav-active-text linear;
		animation-range: cover 38% cover 62%;
	}

	.nav-link::before {
		animation: nav-active-pill linear both;
		animation-range: cover 38% cover 62%;
	}

	.nav-link[data-section='about'],
	.nav-link[data-section='about']::before {
		animation-timeline: --sec-about;
	}
	.nav-link[data-section='projects'],
	.nav-link[data-section='projects']::before {
		animation-timeline: --sec-projects;
	}
	.nav-link[data-section='experience'],
	.nav-link[data-section='experience']::before {
		animation-timeline: --sec-experience;
	}
	.nav-link[data-section='skills'],
	.nav-link[data-section='skills']::before {
		animation-timeline: --sec-skills;
	}
}

/*
 * Full width bar, frameless over the hero, that fades in a soft gradient veil as
 * you scroll. The veil lives on ::before so it can run past the bottom of the bar
 * (bottom: -2.5rem) and blend into the page: opaque at the top fading to
 * transparent, with a matching mask on the blur so that fades out too instead of
 * stopping at a hard line. The row keeps the same height (no condensing). These
 * base rules are the fallback (veil always on) for browsers without scroll-driven
 * animations. Where they work, the @supports block fades it in over the first
 * 130px. No bottom border, it would break the blend.
 */
.nav-header::before {
	content: '';
	position: absolute;
	inset: 0;
	bottom: -2.5rem;
	z-index: -1;
	pointer-events: none;
	background-image: linear-gradient(to bottom, rgb(244 245 250 / 0.92) 0%, rgb(244 245 250 / 0.8) 30%, rgb(244 245 250 / 0) 100%);
	-webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
	-webkit-mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 100%);
	mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 100%);
}

.dark .nav-header::before {
	background-image: linear-gradient(to bottom, rgb(22 22 30 / 0.72) 0%, rgb(22 22 30 / 0.58) 30%, rgb(22 22 30 / 0) 100%);
}

@supports (animation-timeline: scroll()) {
	.nav-header::before {
		animation: nav-veil linear both;
		animation-timeline: scroll(root block);
		animation-range: 0 130px;
	}

	/* When the mobile menu is open, drop the scroll animation so the veil shows through, otherwise the panel hangs off an invisible bar. */
	.nav-header.menu-open::before {
		animation: none;
	}
}

/*
 * Mobile menu open: the panel runs well below the bar, so swap the fading
 * veil for a solid surface that covers the whole expanded header.
 */
.nav-header.menu-open::before {
	bottom: 0;
	opacity: 1;
	background-image: none;
	background-color: rgb(244 245 250 / 0.92);
	-webkit-mask-image: none;
	mask-image: none;
}

.dark .nav-header.menu-open::before {
	background-color: rgb(22 22 30 / 0.92);
}

@keyframes nav-veil {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition:
		grid-template-rows 0.28s cubic-bezier(0.4, 0, 0.2, 1),
		opacity 0.28s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
	grid-template-rows: 0fr;
	opacity: 0;
}

/*
 * Clip only while expanding/collapsing; at rest let overflow show so the
 * language dropdown inside the menu isn't cut off.
 */
.mobile-menu-enter-active .menu-clip,
.mobile-menu-leave-active .menu-clip {
	overflow: hidden;
}

@keyframes slide-in {
	from {
		opacity: 0;
		transform: translateX(10px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.animate-slide-in {
	animation: slide-in 0.4s ease forwards;
}
</style>
