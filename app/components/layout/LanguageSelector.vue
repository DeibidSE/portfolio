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
			class="focus-ring flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium text-dark transition-colors hover:bg-accent/10 dark:text-light dark:hover:bg-white/10"
			aria-haspopup="menu"
			:aria-expanded="isOpen"
			aria-label="Select language"
			@click="toggleDropdown"
		>
			<Icon :name="`circle-flags:${selectedLocale.code}`" class="size-5" aria-hidden="true" />
			<Icon name="tabler:chevron-down" class="text-base transition-transform duration-300" :class="{ 'rotate-180': isOpen }" aria-hidden="true" />
		</button>

		<transition name="lang-dropdown">
			<ul v-if="isOpen" role="menu" class="glass-surface absolute right-0 top-full mt-2 min-w-[10rem] overflow-hidden rounded-xl p-1">
				<li v-for="lang in locales" :key="lang.code" role="none">
					<button
						type="button"
						role="menuitem"
						class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/10 dark:hover:bg-white/10"
						:class="lang.code === locale ? 'text-accent dark:text-accent-light' : ''"
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
