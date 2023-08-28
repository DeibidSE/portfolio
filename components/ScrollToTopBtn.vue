<template>
  <button
    v-if="showScrollToTop"
    class="fixed z-40 p-2 bg-purple-600 rounded-full shadow-lg bottom-4 right-4"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      class="text-4xl text-white"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M12.71 8.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
    </svg>
  </button>
</template>

<script lang="ts">
export default {
  data () {
    return {
      showScrollToTop: false,
      y: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const { top } = aboutSection.getBoundingClientRect()
        this.y = top + window.scrollY
      } else {
        this.y = 500
      }
      this.showScrollToTop = window.scrollY > this.y
    },
    scrollToTop () {
      window.scrollTo({
        top: this.y,
        behavior: 'smooth'
      })
    }
  }
}
</script>
