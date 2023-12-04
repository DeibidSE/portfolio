<template>
  <main>
    <SectionsMyIntroduction :section-info="sectionInfo[0]" />
    <SectionsMyPresentation :section-info="sectionInfo[1]" />
    <SectionsMyProjects :section-info="sectionInfo[2]" />
    <SectionsMyJobsAndStudies :section-info="sectionInfo[3]" />
    <SectionsMyTechnicalSkills :section-info="sectionInfo[4]" />
    <ScrollToTopBtn />
    <div v-if="!hideAlert" class="fixed right-0 z-20 flex w-full p-2 mx-auto top-20 place-content-center lg:w-1/2">
      <AlertCompatibility :section-info="sectionInfo[5]['others']['alertCompatibility'] || {}" @close="closeAlert" />
    </div>
  </main>
</template>

<script setup lang="ts">

defineProps({
  sectionInfo: {
    type: Array as () => Record<string, any>[],
    default: () => []
  }
})

const hideAlert = ref(isBrowserCompatible())

function isBrowserCompatible (): boolean {
  return CSS.supports('animation-timeline: view()')
}

function closeAlert () {
  hideAlert.value = true
}
</script>
