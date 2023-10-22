<template>
  <main>
    <SectionsMyIntroduction :section-info="sectionInfo[0]" />
    <SectionsMyPresentation :section-info="sectionInfo[1]" />
    <SectionsMyProjects :section-info="sectionInfo[2]" />
    <SectionsMyJobsAndStudies :section-info="sectionInfo[3]" />
    <SectionsMyTechnicalSkills :section-info="sectionInfo[4]" />
    <ScrollToTopBtn />
  </main>
</template>

<script lang="ts">
export default {
  props: {
    sectionInfo: {
      type: Array as () => Record<string, any>[],
      default: () => []
    }
  }
}
</script>
