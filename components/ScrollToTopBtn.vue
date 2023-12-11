<template>
  <button
    v-if="showScrollToTop"
    class="fixed z-40 p-2 bg-purple-500 rounded-full shadow-lg bottom-4 right-4"
    aria-label="Scroll to top of the page"
    @click="scrollToTop"
  >
    <Icon name="uil:arrow-circle-up" class="text-4xl text-white" />
  </button>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const showScrollToTop = ref(false)

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 0
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
