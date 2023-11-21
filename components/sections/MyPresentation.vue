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
    section () {
      return this.sectionInfo[this.title] || []
    }
  }
}
</script>
