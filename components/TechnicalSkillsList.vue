<template>
  <div v-if="data && data.image && data.progress" class="flex flex-row gap-8 py-4 rounded-lg">
    <TooltipComponent :tooltip-text="data.name" position="bottom">
      <img
        :src="data.image"
        :alt="`An image of the official logo of ${data.name}`"
        class="w-10 h-10 hover:scale-125"
        width="40"
        height="40"
        role="img"
        :aria-label="`Logo of ${data.name}`"
      >
    </TooltipComponent>
    <div class="w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900 mt-4">
      <div class="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full" :style="`width: ${data.progress}%`" />
      <span
        :class="{
          'flex justify-end text-xs': data.progress,
          'text-green-600': data.progress >= 70,
          'text-yellow-400': data.progress >= 30 && data.progress < 70,
          'text-red-600': data.progress < 30
        }"
        :style="`width: ${data.progress}%`"
      >
        {{ data.progress }} %
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
