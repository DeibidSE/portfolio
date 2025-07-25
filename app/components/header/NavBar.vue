<template>
	<header
		id="header"
		class="fixed top-0 left-0 right-0 z-50 mx-auto transition-all shadow-bottom backdrop-blur-lg"
	>
		<nav
			id="nav"
			class="flex items-center justify-between w-full px-6 py-1 mx-auto"
		>
			<div class="flex items-center justify-start flex-1">
				<a
					:href="`${$config.public.BASE_URL}`"
					aria-label="Go to homepage"
					class="transition-transform duration-300 hover:scale-110"
				>
					<Icon
						name="my-icon:main"
						class="w-16 h-16"
					/>
				</a>
			</div>

			<ul class="justify-center flex-1 hidden gap-6 lg:flex lg:flex-1">
				<li
					v-for="(section, key) in sectionList"
					:key="key"
					class="relative cursor-pointer group"
				>
					<span
						class="block px-3 py-2 transition-all duration-200 text-nowrap text-md text-dark dark:text-light group-hover:text-accent group-hover:scale-110"
						aria-label="Navigate to section"
						@click.stop="scrollToSection(key)"
					>
						{{ section }}
					</span>
					<span
						class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
					/>
				</li>
			</ul>

			<div class="items-center justify-end hidden gap-3 lg:flex lg:flex-1">
				<HeaderThemeSwitch />
				<HeaderLanguageSelector />
			</div>

			<div class="flex items-center gap-6 lg:hidden">
				<HeaderThemeSwitch />
				<button
					class="text-dark dark:text-light focus:outline-none"
					@click="isMenuOpen = !isMenuOpen"
				>
					<Icon
						name="tabler:menu-deep"
						class="text-3xl cursor-pointer fill-current hover:text-accent"
						:class="{ 'text-accent-dark': isMenuOpen }"
						role="button"
						aria-label="Toggle menu"
					/>
				</button>
			</div>
		</nav>

		<div
			v-if="isMenuOpen"
			class="p-4 lg:hidden"
		>
			<ul class="flex flex-col items-end gap-3">
				<li
					v-for="(section, key) in sectionList"
					:key="key"
					class="relative rounded-md cursor-pointer group"
				>
					<span
						class="block px-3 py-2 text-sm font-semibold transition-all duration-200 text-dark dark:text-light group-hover:text-accent group-hover:translate-x-2"
						aria-label="Navigate to section"
						@click.stop="scrollToSection(key)"
					>
						{{ section }}
					</span>
				</li>
				<hr class="w-full border border-accent/50">
				<HeaderLanguageSelector />
			</ul>
		</div>

		<div class="h-1 shadow-lg scroll-progress-bar bg-gradient-to-r from-accent via-accent-secondary to-accent" />
	</header>
</template>

<script setup lang="ts">
const { t } = useI18n()
const isMenuOpen = ref(false)

// Sections for the navbar
const sectionList = computed(() => ({
	about: t('about.title'),
	projects: t('projects.title'),
	experience: t('work_experience.title'),
	skills: t('skills.title'),
}))

// Smooth scroll to section function
const scrollToSection = (section: string) => {
	if (section) {
		isMenuOpen.value = false
		const sectionSelected = document.getElementById(section.replace(/\s+/g, '-')) as HTMLElement
		const headerHeight = document.getElementById('nav')?.offsetHeight || 0

		if (sectionSelected) {
			const { top } = sectionSelected.getBoundingClientRect()
			window.scrollTo({
				top: top + window.scrollY - headerHeight,
				behavior: 'smooth',
			})
		} else {
			console.log(`Section ${section} not found`)
		}
	}
}
</script>

<style scoped>
@supports (animation-timeline: scroll()) {
  @keyframes grow {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .scroll-progress-bar {
    transform-origin: center;
    animation: grow auto linear;
    animation-timeline: scroll(root);
  }
}
</style>
