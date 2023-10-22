<template>
  <button
    v-if="showScrollToTop"
    class="fixed z-40 p-2 bg-purple-600 rounded-full shadow-lg bottom-4 right-4"
    aria-label="Scroll to top of the page"
    @click="scrollToTop"
  >
    <Icon name="uil:arrow-circle-up" class="text-4xl text-white" />
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
      this.showScrollToTop = window.scrollY > 0
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
