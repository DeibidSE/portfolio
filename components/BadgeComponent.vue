<template>
	<component
		:is="tag"
		v-bind="$attrs"
		class="flex items-center justify-center px-4 py-1 font-medium border-2 rounded-full gap-x-2"
		:class="[badgeClasses, sizeClasses, hover ? 'transition hover:scale-110' : '']"
	>
		<nuxt-icon
			v-if="icon"
			:name="icon"
			class="text-2xl"
		/>
		<slot />
	</component>
</template>

<script setup lang="ts">
const props = defineProps<{
	tag: keyof HTMLElementTagNameMap
	color?: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange' | 'pink'
	icon?: string
	hover?: boolean
	size?: 'small' | 'medium' | 'large'
}>()

const colorsMap = {
	blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-500',
	red: 'dark:bg-red-800 bg-red-700 text-red-100 border-red-500',
	green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-500',
	yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-500',
	purple: 'bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-500',
	orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-500',
	pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-500',
	default: 'bg-primary-light border-dark text-dark dark:bg-primary-dark dark:border-light dark:text-light',
}

const sizeMap = {
	small: 'text-xs md:text-sm',
	medium: 'text-sm md:text-base',
	large: 'text-base md:text-lg',
}

const sizeClasses = computed(() => sizeMap[props.size ?? 'medium'])
const badgeClasses = computed(() => colorsMap[props.color ?? 'default'])
</script>
