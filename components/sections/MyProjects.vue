<template>
  <section class="flex flex-col gap-8 p-6 bg-primary-light dark:bg-primary-dark md:p-16">
    <div class="flex items-center gap-4">
      <Icon name="fluent-emoji-flat:open-file-folder" class="w-9 h-9" />
      <h2 class="text-4xl text-purple-600 uppercase md:font-bold terminal-font">
        {{ title }}
      </h2>
    </div>
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project-name="index.toString()"
      :project-data="project"
    />
  </section>
</template>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return { Projects: { ERROR: { description: '', image: '/MyPortfolio/images/undefined.webp' } } }
      }
    }
  },
  computed: {
    title () {
      return Object.keys(this.info).toString()
    },
    projects () {
      return this.info[this.title]
    }
  }
}
</script>
