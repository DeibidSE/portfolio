<template>
  <section :id="title" class="flex flex-col gap-8 p-6 bg-primary-light dark:bg-primary-dark md:p-16">
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
    sectionInfo: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    /**
     * Returns the title of the section
     */
    title () {
      return Object.keys(this.sectionInfo).toString()
    },
    /**
     * Return an array with the info of the section
     */
    projects () {
      return this.sectionInfo[this.title]
    }
  }
}
</script>
