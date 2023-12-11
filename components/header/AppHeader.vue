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
    class="fixed top-0 z-50 flex flex-col w-full gap-6 px-6 py-4 transition-all bg-transparent shadow-lg md:px-8 backdrop-blur-lg"
  >
    <nav class="container flex items-center content-between justify-between h-auto gap-4 mx-auto">
      <div class="flex justify-start w-36 lg:w-48">
        <Icon
          name="MainLogo"
          width="258.808"
          height="54.308"
          class="w-full h-full fill-current"
          alt="Main logo of the app"
        />
      </div>
      <div class="flex justify-center">
        <Icon
          name="ph:list-bold"
          class="w-5 h-5 cursor-pointer fill-current md:w-6 md:h-6 hover:text-purple-500"
          :class="{ 'text-purple-700' : menuOpen }"
          role="button"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen.toString()"
          @click="toggleMenuDropdown"
        />
      </div>
      <div class="flex flex-row items-center justify-end gap-3 md:gap-6">
        <HeaderThemeSwitch aria-label="Switch theme" />
        <HeaderLanguageSelector aria-label="Select language" />
      </div>
    </nav>
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
