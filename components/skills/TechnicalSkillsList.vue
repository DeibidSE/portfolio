<template>
  <div v-if="data && data.image && data.progress" class="flex flex-row items-center gap-8 py-4">
    <TooltipComponent :tooltip-text="data.name" position="bottom">
      <nuxt-icon filled :name="`${data.image}`" class="flex w-10 h-10 transition-transform hover:scale-125" role="img" />
    </TooltipComponent>
    <div class="w-full rounded-full">
      <div class="flex h-5 overflow-hidden text-xs rounded-lg bg-primary-light dark:bg-primary-dark">
        <div
          v-for="(color, index) in getColorSections"
          :key="index"
          :class="[color.class, { 'rounded-r-lg': index === getColorSections.length - 1 }]"
          :style="{ width: color.width + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Skill } from '~/lib/types.d'

const props = defineProps<{ data: Skill }>()

const getColorSections = computed(() => {
  const levels = [
    { class: 'bg-red-600', width: 25 },
    { class: 'bg-orange-500', width: 25 },
    { class: 'bg-yellow-400', width: 25 },
    { class: 'bg-green-500', width: 25 }
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
