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
    class="fixed top-0 right-0 z-50 flex flex-col w-full transition-all shadow-lg h-min bg-primary-light dark:bg-primary-dark"
  >
    <div class="flex items-center justify-between w-full gap-6 px-6 py-4 md:px-8">
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
        <HeaderThemeSwitch />
        <HeaderLanguageSelector />
      </div>
    </div>
    <!-- Progess bar -->
    <hr class="right-0 w-full border border-purple-500/80 scroll-reduce">
  </header>
</template>

<script setup lang="ts">
defineProps<{ sectionList: string[] }>()

const menuOpen = ref(false)

const toggleMenuDropdown = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
@keyframes reduce {
  to {
    width: 1px;
  }
}

.scroll-reduce {
  animation: linear reduce both;
  animation-range: 0 100%;
  animation-timeline: scroll(root);
}

</style>
