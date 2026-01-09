<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const selectedLocale = computed(() => locales.value.find((l) => l.code === locale.value) ?? locales.value[0]!)

const toggleDropdown = () => {
	isOpen.value = !isOpen.value
}

watch(locale, () => {
	isOpen.value = false
	useHead({ htmlAttrs: { lang: locale.value } })
})

const handleClickOutside = (e: MouseEvent) => {
	if (dropdown.value && !dropdown.value.contains(e.target as Node)) {
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

<template>
	<div ref="dropdown" class="relative flex items-center">
		<button
			type="button"
			class="gap-2 px-3 py-2 text-sm font-medium text-dark hover:bg-gray-300/70 dark:text-light dark:hover:bg-slate-700/70 flex items-center rounded-full transition-all focus:outline-none"
			aria-haspopup="menu"
			:aria-expanded="isOpen"
			aria-label="Select language"
			@click="toggleDropdown"
		>
			<Icon :name="`circle-flags:${selectedLocale.code}`" class="size-5" aria-hidden="true" />
			<Icon name="tabler:chevron-down" class="text-base transition-transform duration-300" :class="{ 'rotate-180': isOpen }" aria-hidden="true" />
		</button>

		<transition name="lang-dropdown">
			<ul
				v-if="isOpen"
				role="menu"
				class="right-0 mt-2 rounded-xl border-accent/50 bg-secondary-light shadow-xl dark:bg-slate-900 absolute top-full overflow-hidden border"
			>
				<li v-for="lang in locales" :key="lang.code" role="none">
					<button
						type="button"
						role="menuitem"
						class="gap-3 px-4 py-3 text-sm hover:bg-gray-300/70 dark:hover:bg-slate-700/70 flex w-full items-center text-left transition-colors"
						@click.prevent.stop="setLocale(lang.code)"
					>
						<Icon :name="`circle-flags:${lang.code}`" class="size-5" aria-hidden="true" />
						<span class="font-medium">
							{{ lang.name }}
						</span>
					</button>
				</li>
			</ul>
		</transition>
	</div>
</template>

<style scoped>
.lang-dropdown-enter-active,
.lang-dropdown-leave-active {
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.lang-dropdown-enter-from {
	opacity: 0;
	transform: translateY(-4px);
}

.lang-dropdown-leave-to {
	opacity: 0;
	transform: translateY(-2px);
}
</style>
