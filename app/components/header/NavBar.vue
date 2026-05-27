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
	<header class="glass-surface fixed left-1/2 top-4 z-50 w-[95%] -translate-x-1/2 rounded-2xl transition-all duration-300 lg:w-fit">
		<nav class="flex items-center justify-between gap-4 px-4 py-2.5 sm:gap-6 sm:px-6 sm:py-3" aria-label="Main navigation">
			<a
				:href="`${$config.public.BASE_URL}`"
				class="focus-ring flex items-center rounded-xl transition-transform duration-300 hover:scale-105"
				aria-label="Main website logo"
			>
				<Icon name="my-icon:main" class="size-10 sm:size-11" aria-hidden="true" />
			</a>

			<ul class="relative hidden items-center gap-6 lg:flex xl:gap-8">
				<li v-for="(section, key) in sectionList" :key="key" class="group relative">
					<button
						type="button"
						class="focus-ring rounded-md px-2 py-1 text-sm font-medium text-dark/80 transition-colors duration-300 group-hover:text-accent dark:text-light/80 dark:group-hover:text-accent-light"
						@click="scrollToSection(key)"
					>
						{{ section }}
					</button>

					<span
						class="absolute -bottom-0.5 left-2 h-0.5 w-[calc(100%-1rem)] origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-transform duration-300 group-hover:scale-x-100"
						aria-hidden="true"
					/>
				</li>
			</ul>

			<div class="hidden items-center gap-2 lg:flex">
				<HeaderThemeSwitch />
				<HeaderLanguageSelector />
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
			<div v-if="isMenuOpen" class="absolute left-0 w-full lg:hidden">
				<div class="glass-surface mt-3 flex flex-col gap-5 rounded-2xl p-5">
					<ul class="flex flex-col gap-1">
						<li v-for="(section, key, i) in sectionList" :key="key" class="animate-slide-in opacity-0" :style="{ animationDelay: `${i * 70}ms` }">
							<button
								type="button"
								class="focus-ring w-full rounded-lg px-3 py-2 text-left text-lg font-semibold text-dark transition-colors hover:bg-accent/10 hover:text-accent dark:text-light dark:hover:text-accent-light"
								@click="scrollToSection(key)"
							>
								{{ section }}
							</button>
						</li>
					</ul>

					<div class="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />

					<div class="flex items-center justify-between gap-4 px-3">
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
