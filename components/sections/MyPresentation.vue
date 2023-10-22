<template>
  <section :id="title" class="flex flex-col min-h-screen gap-4 p-6 lg:max-h-screen lg:flex-row lg:gap-10 lg:p-16" role="region" :aria-label="title">
    <div class="lg:w-2/3 scroll-transition">
      <TerminalFrame>
        <div class="flex flex-col gap-4 lg:gap-6 font-terminal">
          <div class="flex items-start gap-2">
            <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
            <span class="text-dark dark:text-light">{{ section.command ?? '' }}</span>
          </div>
          <div class="flex flex-col leading-normal tracking-wide text-dark dark:text-light">
            <h2 class="mb-4 text-5xl font-extrabold text-center text-transparent lg:mb-6 bg-clip-text bg-gradient-to-t from-purple-600 to-pink-500">
              {{ section.title ?? '' }}
            </h2>
            <p v-for="(content, index) in section.content" :key="index">
              {{ content ?? '' }}
            </p>
          </div>
          <hr class="border border-gray-600" role="separator">
          <div class="flex flex-col gap-2 w-max">
            <div class="flex items-start gap-2">
              <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
              <span class="text-dark dark:text-light">npm run cv-download</span>
            </div>
            <a
              v-for="(cv, key) in section.cv"
              :key="key"
              :href="cv.url"
              target="_blank"
              aria-label="Download my curriculum vitae"
              :download="cv.fileName"
              :class="{
                'hover:text-blue-800 dark:hover:text-blue-500': true,
                'text-blue-700 dark:text-blue-400' : activeIndex === key
              }"
              role="link"
              @mouseover="changeActiveIndex(key)"
            >
              > {{ cv.label ?? '' }}
            </a>
          </div>
        </div>
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
  data () {
    return {
      activeIndex: 0
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
  },
  methods: {
    /**
     * Sets the index of the line over which the mouse hovers to change class dynamically
     * @param index key of the line selected
     */
    changeActiveIndex (index: number) {
      this.activeIndex = index
    }
  }
}
</script>
