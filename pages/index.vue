<template>
  <main>
    <IntroductionMyIntroduction :section-data="selectedLanguageData[0]" />
    <PageDivider />
    <PresentationMyPresentation :section-data="selectedLanguageData[1]" />
    <PageDivider :top="true" />
    <ProjectsMyProjects :section-data="selectedLanguageData[2]" />
    <PageDivider />
    <TrajectoryMyJobsAndStudies :section-data="selectedLanguageData[3]" />
    <PageDivider :top="true" />
    <SkillsMyTechnicalSkills
      :section-data="selectedLanguageData[4]"
      :alert="otherData('alertSkills')"
    />
    <ScrollToTopBtn :btn-data="otherData('backToTopButton')" />
    <div v-if="!hideAlert" class="fixed right-0 z-20 flex w-full p-2 mx-auto top-20 place-content-center lg:w-1/2">
      <AlertComponent
        :data="otherData('alertCompatibility')"
        type="warning"
        @close="closeAlert"
      />
    </div>
  </main>
</template>

<script setup lang="ts">

const props = defineProps({
  selectedLanguageData: {
    type: Array as () => Record<string, any>[],
    default: () => []
  }
})

const hideAlert = ref(isBrowserCompatible())

function otherData (alert: string) {
  return props.selectedLanguageData[5]?.others[alert] || {}
}

function isBrowserCompatible (): boolean {
  return CSS.supports('animation-timeline: view()')
}

function closeAlert () {
  hideAlert.value = true
}
</script>
