<template>
  <!-- Dropdown menu-->
  <HeaderMenuDropdown
    :section-list="sectionList"
    :menu-open="menuOpen"
    @menu-close="toggleMenuDropdown"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  />
  <!-- Header of the app -->
  <header
    id="header"
    class="fixed top-0 right-0 z-50 flex items-center justify-between w-full gap-6 px-6 py-4 transition-all rounded-b-lg shadow-lg justify-self-center h-min bg-primary-light dark:bg-primary-dark md:px-8 scroll-reduce"
  >
    <nuxt-icon
      name="round-list"
      class="text-3xl cursor-pointer fill-current hover:text-purple-500"
      :class="{ 'text-purple-700' : menuOpen }"
      role="button"
      aria-label="Toggle menu"
      :aria-expanded="menuOpen.toString()"
      @click="toggleMenuDropdown"
    />
    <div class="flex flex-row items-center gap-3 md:gap-6">
      <HeaderThemeSwitch aria-label="Switch theme" />
      <HeaderLanguageSelector aria-label="Select language" />
    </div>
  </header>
</template>

<script setup lang="ts">

defineProps({
  sectionList: {
    type: Array as () => string[],
    default: () => []
  }
})

const menuOpen = ref(false)

const toggleMenuDropdown = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
@keyframes reduce {
  to {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 206px;
  }

}

.scroll-reduce {
  animation: linear reduce both;
  animation-range: 0 100vh;
  animation-timeline: scroll(root);
}

</style>
