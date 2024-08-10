<template>
  <div
    v-if="data"
    :class="[
      'flex items-center p-3 sm:p-4 bg-transparent backdrop-blur-xl gap-3 rounded-lg shadow-md',
      'border-2',
      {
        'border-red-600 text-red-600 dark:border-red-500 dark:text-red-500': type === 'error',
        'border-yellow-600 text-yellow-600 dark:border-yellow-400 dark:text-yellow-400': type === 'warning',
        'border-purple-500 text-purple-500 dark:border-purple-400 dark:text-purple-400': type === 'info'
      },
      { 'entrance-anim': animateEntry }
    ]"
    role="alert"
    aria-live="assertive"
  >
    <!-- Type of alert Icon -->
    <nuxt-icon :name="type ?? 'warning'" class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />

    <!-- Alert text -->
    <div class="flex-1 text-sm sm:text-base">
      <p class="font-medium">
        {{ data.message || '' }}
        <br>
        <a
          v-if="data.link"
          class="font-semibold underline hover:no-underline"
          :href="data.link.url"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
        >
          {{ data.link.label || '' }}
        </a>
      </p>
    </div>

    <!-- Close button -->
    <button
      v-if="enableClose"
      type="button"
      class="flex-shrink-0 w-4 h-4 hover:text-red-500"
      aria-label="Close alert"
      @click="$emit('close')"
    >
      <nuxt-icon name="x" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { type Alert } from '~/lib/types.d'

defineProps<{ data: Alert, enableClose?: boolean, animateEntry?: boolean, type: string }>()

defineEmits(['close'])

</script>

<style scoped>
.entrance-anim {
  animation: bounce 1s linear 0s 1 normal none;
}

@keyframes bounce {
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
