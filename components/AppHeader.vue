<template>
  <header id="header" class="fixed top-0 z-50 w-full px-6 py-4 shadow-lg md:px-8 backdrop-blur-lg">
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
          :class="{'text-purple-700' : open }"
          role="button"
          aria-label="Open menu"
          @click="toggleMenuDropdown"
        />
      </div>
      <div class="flex flex-row items-center justify-end gap-3 md:gap-6">
        <ThemeSwitch aria-label="Switch theme" />
        <LanguageSelector aria-label="Select language" />
      </div>
    </nav>
  </header>

  <MenuDropdown
    :section-list="sectionList"
    :open="open"
    @close="toggleMenuDropdown"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  />
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
      open: false
    }
  },
  methods: {
    /**
     * Toogles the menu state between open (true) or close (false)
     */
    toggleMenuDropdown () {
      this.open = !this.open
    }
  }
}
</script>
