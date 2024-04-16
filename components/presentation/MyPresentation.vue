<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-screen gap-4 p-6 lg:flex-row lg:gap-10 lg:px-32 lg:py-16"
    role="region"
    :aria-label="sectionId"
  >
    <div class="flex self-center justify-center w-full h-full scroll-transition">
      <PresentationTerminalFrame :buttons-clickable="true">
        <PresentationTerminalContent :terminal-data="section" />
      </PresentationTerminalFrame>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type PresentationInfo } from '~/types/types.d'

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({})
  }
})

const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))
const section = computed<PresentationInfo>(() => props.sectionData[sectionTitle.value] || {})
</script>
