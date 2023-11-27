<template>
  <section :id="title" class="min-h-screen bg-primary-light dark:bg-primary-dark" :aria-label="title">
    <div class="flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto">
      <div class="flex items-end justify-center w-full h-full p-5 overflow-hidden sm:p-6">
        <h1 class="w-full text-4xl font-bold text-center sm:text-5xl md:text-7xl">
          {{ section.whoAmI }}
        </h1>
      </div>
      <div class="flex items-start justify-center w-full h-full p-5 overflow-hidden sm:p-6">
        <h2 ref="typewriter" class="inline-block text-2xl font-bold text-center text-purple-600 cursor-default sm:text-4xl md:text-5xl animate-blinking-caret">
          {{ txt }}
        </h2>
      </div>
    </div>
    <div class="absolute bottom-0 w-full py-4 text-center">
      <div class="flex flex-col animate-bounce text-dark dark:text-light">
        <span class="w-full text-xs sm:text-sm">{{ section.scrollDown || '' }}</span>
        <Icon
          name="uil:angle-double-down"
          class="self-center text-4xl cursor-pointer hover:text-purple-600"
          role="button"
          aria-label="Scroll down"
          @click="scrollDown"
        />
      </div>
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
      txt: '',
      isDeleting: false,
      loopNum: 0
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
  mounted () {
    this.tick()
  },
  methods: {
    /**
     * Generates the effect of typing in the text
     */
    tick () {
      const htmlElement = this.$refs.typewriter as HTMLElement
      const fullTxt = this.section.job

      if (htmlElement && fullTxt.length > 0) {
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        htmlElement.textContent = this.txt

        // Delay between the end of typing and the start of deleting
        let pause = 200 - Math.random() * 100

        if (this.isDeleting) {
          pause /= 2
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          pause = 2000
          this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false
          this.loopNum++
          pause = 500
        }

        setTimeout(this.tick, pause)
      } else {
        this.txt = this.section.job
      }
    },
    /**
     * Scolls to the second section element
     */
    scrollDown () {
      // Gets all sections of the body
      const bodySections = document.querySelectorAll('section')
      const headerElement = document.getElementById('header')
      const headerHeight = headerElement ? headerElement.offsetHeight : 0

      if (bodySections && bodySections.length >= 2) {
        // Gets the second section (presentation section)
        const secondSection = bodySections[1]
        const { top } = secondSection.getBoundingClientRect()
        window.scrollTo({
          top: (top + window.scrollY) - headerHeight,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
