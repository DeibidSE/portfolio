<template>
	<div
		ref="dropdown"
		class="relative flex items-center justify-center"
	>
		<button
			class="flex items-center justify-between w-full h-10 gap-2 px-4 rounded-full cursor-pointer lg:pl-4 lg:pr-10 text-md focus:outline-none"
			aria-label="Select language"
			:aria-expanded="isOpen"
			@click="toggleDropdown"
		>
			<span>{{ selectedLocale.name }}</span>
			<Icon
				name="tabler:chevron-down"
				class="text-xl transition-transform duration-300 pointer-events-none right-4"
				:class="{ 'rotate-180': isOpen }"
			/>
		</button>

		<transition name="fade">
			<ul
				v-if="isOpen"
				role="menu"
				class="absolute z-10 w-full overflow-hidden transition-all duration-300 ease-in-out bg-gray-100 border-2 rounded-lg border-accent/70 top-12 dark:bg-gray-900"
			>
				<li
					v-for="lang in locales"
					:key="lang.code"
					class="px-4 py-2 transition-colors duration-200 ease-in-out cursor-pointer hover:bg-accent-light dark:hover:bg-accent-dark"
					@click.prevent.stop="setLocale(lang.code)"
				>
					{{ lang.name }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)
const dropdown = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

const selectedLocale = computed(() =>
	locales.value.find(i => i.code === locale.value) || locales.value[0],
)

watch(locale, () => {
	isOpen.value = false
	useHead({
		htmlAttrs: {
			lang: locale.value,
		},
	})
})

const toggleDropdown = () => (isOpen.value = !isOpen.value)

const handleClickOutside = (event: MouseEvent) => {
	if (
		dropdown.value
		&& !dropdown.value.contains(event.target as Node)
		&& !button.value?.contains(event.target as Node)
	) {
		isOpen.value = false
	}
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
	document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
