<template>
  <div class="relative z-10 flex items-center justify-center p-16 duration-500 translate-y-24 face face1 bg-secondary-light dark:bg-secondary-dark rounded-t-xl">
    <div class="flex flex-col items-center justify-center duration-500 opacity-50 dark:opacity-20">
      <img
        :src="data.image"
        :alt="'An image of the official logo of ' + data.name"
        class="w-24 h-24"
        width="96"
        height="96"
      >
    </div>
  </div>
  <div class="flex flex-col justify-center w-full p-6 overflow-x-hidden overflow-y-auto duration-500 -translate-y-24 shadow-xl opacity-0 face face2 rounded-b-xl bg-primary-light dark:bg-primary-dark">
    <h3 class="self-center p-4 text-4xl font-bold text-center text-purple-600">
      {{ data.name }}
    </h3>
    <div v-if="data.progress" class="flex flex-row items-center gap-1 p-4 shadow-inside rounded-xl">
      <span class="text-sm">🤔</span>
      <div class="w-full rounded-full h-2.5 bg-gray-700 dark:bg-gray-900">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full" :style="'width: ' + data.progress + '%'" />
      </div>
      <span class="text-sm">🤓</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return { name: '', image: '/MyPortfolio/images/undefined.webp' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    .face.face1 {
      @apply translate-y-0 bg-primary-light dark:bg-primary-dark shadow-xl;
      div {
        @apply opacity-100;
      }
    }
    .face.face2 {
      @apply translate-y-0 opacity-100;
    }
  }
}
</style>
