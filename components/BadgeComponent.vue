<template>
  <span
    class="text-xs md:text-sm font-medium px-2.5 py-0.5 rounded-full border-2"
    :class="badgeClasses"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ color: 'blue' | 'red' | 'green' | 'yellow'; }>()

const colorsMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-500',
  red: 'dark:bg-red-800 bg-red-700 text-red-100 border-red-500',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-500',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-500'
}

const badgeClasses = computed(() => colorsMap[props.color])
</script>
