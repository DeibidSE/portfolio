<template>
  <aside
    class="fixed top-0 z-40 w-full h-full transition-transform duration-500 transform shadow-lg backdrop-blur-xl"
    :class="{ 'translate-y-0': open, '-translate-y-full': !open }"
  >
    <ul class="flex flex-col justify-center flex-1 h-full gap-8 p-16">
      <li v-for="(section, key) in sectionList" :key="key">
        <span class="text-2xl opacity-100 cursor-pointer md:text-4xl hover:text-purple-600" @click="scrollToSection(section)">
          {{ section }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    sectionList: {
      type: Array as () => string[],
      default: () => []
    }
  },
  emits: ['close'],
  methods: {
    /**
     * Closes the menu emiting the event to the parent component
     */
    closeMenuDropdown () {
      this.$emit('close')
    },
    /**
     * Scrolls to the selected section
     * @param section id of the section selected
     */
    scrollToSection (section: string) {
      // Close the menu
      this.closeMenuDropdown()
      // Seach the section selected by id
      const sectionSelected = document.getElementById(`${section}`) as HTMLElement
      const headerElement = document.getElementById('header')
      const headerHeight = headerElement ? headerElement.offsetHeight : 0

      if (sectionSelected) {
        const { top } = sectionSelected.getBoundingClientRect()
        // Scrolls to the section selected
        window.scrollTo({
          top: (top + window.scrollY) - headerHeight,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
