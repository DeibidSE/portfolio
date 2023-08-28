<template>
  <section class="min-h-screen bg-primary-light dark:bg-primary-dark">
    <div class="flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto">
      <div class="flex items-end h-full p-6 overflow-hidden">
        <h1 class="text-5xl font-bold text-center md:text-7xl">
          {{ info.whoAmI }}
        </h1>
      </div>
      <div class="flex items-start h-full p-6 overflow-hidden">
        <h2 ref="typewriter" class="inline-block text-3xl font-bold text-center text-purple-600 cursor-default md:text-5xl blinking-caret">
          {{ txt }}
        </h2>
      </div>
    </div>
    <div class="absolute bottom-0 w-full py-4 text-center">
      <div class="flex flex-col animate-bounce text-dark dark:text-light">
        <span class="text-sm font-bold">{{ info.scrDown }}</span>
        <i class="self-center text-4xl cursor-pointer hover:text-purple-600" @click="scrollDown">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.29 11.46a1 1 0 0 0 1.42 0l3-3A1 1 0 1 0 14.29 7L12 9.34 9.71 7a1 1 0 1 0-1.42 1.46Zm3 1.08L12 14.84l-2.29-2.3A1 1 0 0 0 8.29 14l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0-1.42-1.42Z" />
          </svg>
        </i>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          whoAmI: 'Error Loading Data',
          job: '',
          scrDown: 'Scroll down to see NOTHING'
        }
      }
    }
  },
  data () {
    return {
      txt: '',
      isDeleting: false,
      loopNum: 0
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
      const fullTxt = this.info.job

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
        this.txt = this.info.job
      }
    },
    /**
     * Scolls to 'about' section
     */
    scrollDown () {
      const aboutSection = document.getElementById('about') as HTMLElement
      if (aboutSection) {
        const { top } = aboutSection.getBoundingClientRect()
        window.scrollTo({
          top: top + window.scrollY,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
