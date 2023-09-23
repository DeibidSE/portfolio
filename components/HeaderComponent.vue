<template>
  <header class="fixed top-0 z-50 w-full px-6 py-4 shadow-lg md:px-8 backdrop-blur-lg">
    <nav class="container flex items-center content-between justify-between h-auto gap-4 mx-auto">
      <div class="flex justify-start w-36 lg:w-48">
        <Icon name="MainLogo" width="258.808" height="54.308" class="w-full h-full fill-current" />
      </div>
      <div class="flex justify-center">
        <Icon name="ph:list-bold" class="w-6 h-6 cursor-pointer fill-current hover:text-purple-600" @click="toggleMenuDropdown" />
      </div>
      <div class="flex flex-row items-center justify-end gap-3 md:gap-6">
        <ThemeSwitch />
        <LanguageSelector />
      </div>
    </nav>
  </header>

  <MenuDropdown :section-list="sectionList" :open="open" @close="toggleMenuDropdown" />
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
     * - Toogles the menu state between open (true) or close (false)
     * - Manages the vertical scroll adding or removing the 'overflow-y-hidden' class to the body
     */
    toggleMenuDropdown () {
      this.open = !this.open
      if (this.open) {
        document.body.classList.add('overflow-y-hidden')
      } else {
        document.body.classList.remove('overflow-y-hidden')
      }
    }
  }
}
</script>
