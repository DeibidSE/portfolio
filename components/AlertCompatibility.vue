<template>
  <div
    v-if="sectionInfo"
    class="flex items-center p-4 text-red-700 border-2 border-red-700 rounded-lg dark:border-red-400 dark:text-red-400 bg-accent-light dark:bg-secondary-dark entrance-anim"
    role="alert"
    aria-live="assertive"
  >
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <div class="text-xs font-medium sm:text-sm ms-3 me-4">
      {{ sectionInfo.message || '' }}
      <a class="font-semibold underline hover:no-underline" href="https://caniuse.com/?search=animation-timeline" target="_blank" rel="noopener noreferrer" role="link">
        {{ sectionInfo.linkText }}
      </a>
    </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 bg-accent-light dark:bg-secondary-dark" aria-label="Close" @click="$emit('close')">
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sectionInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['close']
}
</script>

<style scoped>
.entrance-anim {
  animation: myAnim 1s linear 0s 1 normal none;
}

@keyframes myAnim {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: translateX(250px);
  }

  38% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateX(0);
  }

  55% {
    animation-timing-function: ease-in;
    transform: translateX(68px);
  }

  72% {
    animation-timing-function: ease-out;
    transform: translateX(0);
  }

  81% {
    animation-timing-function: ease-in;
    transform: translateX(32px);
  }

  90% {
    animation-timing-function: ease-out;
    transform: translateX(0);
  }

  95% {
    animation-timing-function: ease-in;
    transform: translateX(8px);
  }

  100% {
    animation-timing-function: ease-out;
    transform: translateX(0);
  }
}
</style>
