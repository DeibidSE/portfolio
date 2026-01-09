<script setup lang="ts">
const { t } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

const sectionList = computed(() => ({
	about: t('about.title'),
	projects: t('projects.title'),
	experience: t('work_experience.title'),
	skills: t('skills.title'),
}))

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
	<header
		class="top-4 rounded-2xl border-accent/50 bg-secondary-light/50 shadow-xl backdrop-blur-xl dark:bg-slate-900/50 lg:w-fit fixed left-1/2 z-50 w-[95%] -translate-x-1/2 border transition-all duration-300"
	>
		<nav class="gap-6 px-6 py-3 flex items-center justify-between" aria-label="Main navigation">
			<a
				:href="`${$config.public.BASE_URL}`"
				class="gap-2 flex items-center transition-transform duration-300 hover:scale-105"
				aria-label="Main website logo"
			>
				<Icon name="my-icon:main" class="size-12" aria-hidden="true" />
			</a>

			<ul class="gap-8 lg:flex relative hidden items-center">
				<li v-for="(section, key) in sectionList" :key="key" class="group relative">
					<button
						type="button"
						class="px-2 py-1 text-sm font-medium text-dark group-hover:text-accent dark:text-light truncate transition-all duration-300"
						@click="scrollToSection(key)"
					>
						{{ section }}
					</button>

					<span
						class="left-0 -bottom-1 h-0.5 from-accent to-accent-secondary absolute w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"
						aria-hidden="true"
					/>
				</li>
			</ul>

			<div class="gap-4 lg:flex hidden items-center">
				<HeaderThemeSwitch />
				<HeaderLanguageSelector />
			</div>

			<button
				type="button"
				class="gap-1.5 lg:hidden relative z-50 flex flex-col"
				aria-label="Toggle menu"
				:aria-expanded="isMenuOpen"
				@click="toggleMenu"
			>
				<span class="h-0.5 w-6 bg-current transition-all duration-300" :class="isMenuOpen ? 'translate-y-2 rotate-45' : ''" aria-hidden="true" />
				<span class="h-0.5 w-6 bg-current transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''" aria-hidden="true" />
				<span class="h-0.5 w-6 bg-current transition-all duration-300" :class="isMenuOpen ? '-translate-y-2 -rotate-45' : ''" aria-hidden="true" />
			</button>
		</nav>

		<transition name="mobile-menu">
			<div v-if="isMenuOpen" class="left-0 lg:hidden absolute w-full">
				<div class="mt-4 gap-6 rounded-2xl border-accent/50 bg-secondary-light p-6 shadow-2xl dark:bg-slate-900 flex flex-col border">
					<ul class="gap-4 flex flex-col">
						<li v-for="(section, key, i) in sectionList" :key="key" class="animate-slide-in opacity-0" :style="{ animationDelay: `${i * 70}ms` }">
							<button
								type="button"
								class="text-lg font-semibold text-dark hover:translate-x-2 hover:text-accent dark:text-light w-full text-left transition-all"
								@click="scrollToSection(key)"
							>
								{{ section }}
							</button>
						</li>
					</ul>

					<div class="via-accent/50 h-px bg-gradient-to-r from-transparent to-transparent" aria-hidden="true" />

					<div class="gap-4 flex items-center justify-between">
						<HeaderThemeSwitch />
						<HeaderLanguageSelector />
					</div>
				</div>
			</div>
		</transition>
	</header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
	opacity: 0;
	transform: translateY(-6px);
}

.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-4px);
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
