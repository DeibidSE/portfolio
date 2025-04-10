<template>
	<component
		:is="tag"
		v-bind="$attrs"
		class="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 border-2 rounded-full shadow-sm w-fit"
		:class="[colorClasses, sizeClasses, hover ? 'hover:scale-[1.05] hover:shadow-md' : '']"
	>
		<Icon
			v-if="prependIcon"
			:name="prependIcon"
			class="text-xl opacity-80"
		/>
		<slot />
		<Icon
			v-if="appendIcon"
			:name="appendIcon"
			class="text-lg opacity-80"
		/>
	</component>
</template>

<script setup lang="ts">
const props = defineProps<{
	tag: keyof HTMLElementTagNameMap
	color?: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange' | 'pink' | 'accent' | 'accent-secondary'
	prependIcon?: string
	appendIcon?: string
	hover?: boolean
	size?: 'small' | 'medium' | 'large'
}>()

const colorsMap = {
	'blue': 'bg-blue-100 text-blue-900 dark:bg-blue-800/30 dark:text-blue-100 border-blue-400/30',
	'red': 'bg-red-100 text-red-900 dark:bg-red-800/30 dark:text-red-300 border-red-400/30',
	'green': 'bg-green-100 text-green-900 dark:bg-green-800/30 dark:text-green-300 border-green-400/30',
	'yellow': 'bg-yellow-100 text-yellow-900 dark:bg-yellow-700/30 dark:text-yellow-300 border-yellow-400/30',
	'purple': 'bg-purple-100 text-purple-900 dark:bg-purple-800/30 dark:text-purple-300 border-purple-400/30',
	'orange': 'bg-orange-100 text-orange-900 dark:bg-orange-800/30 dark:text-orange-300 border-orange-400/30',
	'pink': 'bg-pink-100 text-pink-900 dark:bg-pink-800/30 dark:text-pink-300 border-pink-400/30',
	'accent': 'bg-[#f2e6fc] text-[#7927b2] dark:bg-[#7927b2]/10 dark:text-[#c79cf1] border-[#7927b2]/40',
	'accent-secondary': 'bg-[#ffe5f2] text-[#FB3182] dark:bg-[#FB3182]/10 dark:text-[#ff88ba] border-[#FB3182]/40',
	'default': 'bg-primary-light text-dark dark:bg-secondary-dark dark:text-light border-gray-400/20',
}

const sizeMap = {
	small: 'text-xs px-3 py-1',
	medium: 'text-sm px-4 py-1.5',
	large: 'text-base px-5 py-2',
}

const sizeClasses = computed(() => sizeMap[props.size ?? 'medium'])
const colorClasses = computed(() => colorsMap[props.color ?? 'default'])
</script>
