<template>
  <!-- Dropdown menu-->
  <MenuDropdown
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
    class="fixed top-0 z-50 w-full px-6 py-4 transition-all bg-transparent shadow-lg md:px-8 backdrop-blur-lg"
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
          class="w-5 h-5 cursor-pointer fill-current md:w-6 md:h-6 hover:text-purple-600"
          :class="{ 'text-purple-700' : menuOpen }"
          role="button"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen.toString()"
          @click="toggleMenuDropdown"
        />
      </div>
      <div class="flex flex-row items-center justify-end gap-3 md:gap-6">
        <ThemeSwitch aria-label="Switch theme" />
        <LanguageSelector aria-label="Select language" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    sectionList: {
      type: Array as () => string[],
      default: () => []
    }
  },
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    /**
     * Toggles the menu state between open (true) or close (false)
     */
    toggleMenuDropdown () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
