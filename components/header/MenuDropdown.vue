<template>
  <aside
    class="fixed left-0 z-40 w-full h-full transition-transform duration-500 transform shadow-lg bg-secondary-light dark:bg-secondary-dark"
    :class="{ 'translate-x-0': menuOpen, '-translate-x-full': !menuOpen }"
    aria-label="Navigation menu"
  >
    <ul class="flex flex-col justify-center flex-1 h-full gap-8 p-16">
      <li v-for="(section, key) in sectionList" :key="key">
        <span
          class="text-2xl capitalize opacity-100 cursor-pointer md:text-4xl hover:text-purple-500"
          @click.stop="scrollToSection(section)"
        >
          {{ section || '' }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">

defineProps<{ menuOpen: Boolean, sectionList: string[] }>()

const emit = defineEmits(['menu-close'])

const closeMenuDropdown = () => emit('menu-close')

const scrollToSection = (section: string) => {
  // Closes the menu
  closeMenuDropdown()

  if (section) {
    // Search the section by id
    const sectionSelected = document.getElementById(section.replace(/\s+/g, '-')) as HTMLElement
    const headerHeight = document.getElementById('header')?.offsetHeight || 0

    if (sectionSelected) {
      const { top } = sectionSelected.getBoundingClientRect()

      // Scrolls to the selected section
      window.scrollTo({
        top: top + window.scrollY - headerHeight,
        behavior: 'smooth'
      })
    }
  } else {
    console.log(`Section ${section} not found`)
  }
}
</script>
