<script setup lang="ts">
const props = defineProps<{
	tag: keyof HTMLElementTagNameMap
	color?: string
	prependIcon?: string
	appendIcon?: string
	hover?: boolean
	size?: 'small' | 'medium' | 'large'
}>()

const colorsMap = {
	blue: 'bg-blue-100 dark:bg-blue-800/30 text-blue-900 dark:text-blue-100 border-blue-400/30',
	red: 'bg-red-100 dark:bg-red-800/30 text-red-900 dark:text-red-300 border-red-400/30',
	green: 'bg-green-100 dark:bg-green-800/30 text-green-900 dark:text-green-300 border-green-400/30',
	yellow: 'bg-yellow-100 dark:bg-yellow-700/30 text-yellow-900 dark:text-yellow-300 border-yellow-400/30',
	purple: 'bg-purple-100 dark:bg-purple-800/30 text-purple-900 dark:text-purple-300 border-purple-400/30',
	orange: 'bg-orange-100 dark:bg-orange-800/30 text-orange-900 dark:text-orange-300 border-orange-400/30',
	pink: 'bg-pink-100 dark:bg-pink-800/30 text-pink-900 dark:text-pink-300 border-pink-400/30',
	default: 'bg-primary-light dark:bg-secondary-dark text-dark dark:text-light border-dark/30 dark:border-light/40',
}

const sizeMap = {
	small: 'text-xs px-3 py-1',
	medium: 'text-sm px-4 py-1.5',
	large: 'text-base px-5 py-2',
}

const sizeClasses = computed(() => sizeMap[props.size ?? 'medium'])
const colorClasses = computed(() => colorsMap[(props.color as 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange' | 'pink') ?? 'default'])
</script>

<template>
	<component
		:is="tag"
		v-bind="$attrs"
		class="gap-2 shadow-sm inline-flex w-fit items-center justify-center rounded-full border-2 transition-all duration-200"
		:class="[colorClasses, sizeClasses, hover ? 'hover:shadow-md hover:scale-105' : '']"
	>
		<Icon v-if="prependIcon" :name="prependIcon" class="text-xl opacity-80" />
		<slot />
		<Icon v-if="appendIcon" :name="appendIcon" class="text-lg opacity-80" />
	</component>
</template>
