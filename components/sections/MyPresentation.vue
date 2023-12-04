<template>
  <section :id="title" class="flex flex-col min-h-screen gap-4 p-6 lg:flex-row lg:gap-10 lg:p-16" role="region" :aria-label="title">
    <div class="flex-grow lg:w-2/3 scroll-transition">
      <TerminalFrame>
        <TerminalContent :terminal-data="section" />
      </TerminalFrame>
    </div>
    <div class="self-center lg:w-1/3 scroll-transition">
      <ProfileCard :profile-info="section.profileCard" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type PresentationInfo } from '~/types/types.d'

const props = defineProps({
  sectionInfo: {
    type: Object,
    default: () => ({})
  }
})

const title = computed<string>(() => Object.keys(props.sectionInfo).toString() || '')
const section = computed<PresentationInfo>(() => props.sectionInfo[title.value] || {})
</script>
