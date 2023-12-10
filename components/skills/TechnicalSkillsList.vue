<template>
  <div v-if="data && data.image && data.progress" class="flex flex-row items-center gap-8 py-4 rounded-lg">
    <TooltipComponent :tooltip-text="data.name" position="bottom">
      <img
        :src="$config.public.BASE_URL + data.image"
        :alt="`An image of the official logo of ${data.name}`"
        class="w-10 h-10 transition-transform hover:scale-125"
        loading="lazy"
        width="40"
        height="40"
        role="img"
        :aria-label="`Logo of ${data.name}`"
      >
    </TooltipComponent>
    <div class="w-full rounded-full">
      <div class="flex h-5 overflow-hidden text-xs rounded bg-accent-light dark:bg-accent-dark">
        <div
          v-for="(color, index) in getColorSections"
          :key="index"
          :class="color.class"
          :style="{ width: color.width + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Skill } from '~/types/types.d'

const props = defineProps({
  data: {
    type: Object as () => Skill,
    default: () => ({})
  }
})

const getColorSections = computed(() => {
  const levels = [
    { class: 'bg-purple-700', width: 25 },
    { class: 'bg-purple-600', width: 25 },
    { class: 'bg-purple-500', width: 25 },
    { class: 'bg-purple-400', width: 25 }
  ]

  const filledSections = Math.floor(props.data.progress / 25)
  const remainderWidth = props.data.progress % 25

  return levels.map((level, index) => {
    if (index < filledSections) {
      return {
        ...level,
        width: 25
      }
    } else if (index === filledSections) {
      return {
        ...level,
        width: remainderWidth
      }
    } else {
      return {
        ...level,
        width: 0
      }
    }
  }).filter(color => color.width > 0)
})
</script>
