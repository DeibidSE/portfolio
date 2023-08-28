<template>
  <section class="min-h-screen bg-primary-light dark:bg-primary-dark">
    <div v-for="(project, index) in info" :key="index" class="flex flex-col gap-6 p-6 md:p-16">
      <ProjectCardComponent :title="index" :data="project" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return { projects: [{ name: '', description: '', image: '/MyPortfolio/images/undefined.webp' }] }
      }
    }
  }
}
</script>
