<template>
  <aside
    class="fixed top-0 z-40 w-full h-full transition-transform duration-500 transform shadow-lg backdrop-blur-xl"
    :class="{ 'translate-y-0': menuOpen, '-translate-y-full': !menuOpen }"
    aria-label="Navigation menu"
  >
    <ul class="flex flex-col justify-center flex-1 h-full gap-8 p-16">
      <li v-for="(section, key) in sectionList" :key="key">
        <span
          class="text-2xl capitalize opacity-100 cursor-pointer md:text-4xl hover:text-purple-600"
          @click.stop="scrollToSection(section)"
        >
          {{ section }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">

defineProps({
  menuOpen: {
    type: Boolean,
    default: false
  },
  sectionList: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['menu-close'])

const closeMenuDropdown = () => {
  emit('menu-close')
}

const scrollToSection = (section: string) => {
  // Cierra el menú
  closeMenuDropdown()

  // Busca la sección seleccionada por id
  const sectionSelected = document.getElementById(`${section}`) as HTMLElement
  const headerElement = document.getElementById('header')
  const headerHeight = headerElement ? headerElement.offsetHeight : 0

  if (sectionSelected) {
    const { top } = sectionSelected.getBoundingClientRect()

    // Desplázate a la sección seleccionada
    window.scrollTo({
      top: top + window.scrollY - headerHeight,
      behavior: 'smooth'
    })
  }
}

</script>
