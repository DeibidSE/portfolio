<template>
  <section
    :id="sectionId"
    class="flex flex-col min-h-screen gap-4 p-6 lg:flex-row lg:gap-10 lg:p-16"
    role="region"
    :aria-label="sectionId"
  >
    <div class="flex-grow lg:w-2/3 scroll-transition">
      <PresentationTerminalFrame>
        <PresentationTerminalContent :terminal-data="section" />
      </PresentationTerminalFrame>
    </div>
    <div class="self-center lg:w-1/3 scroll-transition">
      <PresentationProfileCard :profile-info="section.profileCard" />
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
