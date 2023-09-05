<template>
  <section id="about" class="flex flex-col min-h-screen gap-4 p-6 lg:max-h-screen lg:flex-row lg:gap-10 lg:p-16">
    <div class="lg:w-2/3 scroll-transition">
      <TerminalFrame>
        <div class="flex flex-col gap-4 lg:gap-6 terminal-font">
          <div class="flex items-start gap-2">
            <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
            <span class="text-dark dark:text-light">{{ info.command }}</span>
          </div>
          <div class="flex flex-col leading-normal tracking-wide text-dark dark:text-light">
            <h2 class="mb-4 text-5xl font-extrabold text-center text-transparent lg:mb-6 bg-clip-text bg-gradient-to-t from-purple-600 to-pink-500">
              {{ info.title }}
            </h2>
            <p v-for="(content, index) in info.content" :key="index">
              {{ content }}
            </p>
          </div>
          <hr class="border border-gray-600">
          <div class="flex flex-col gap-2 w-max">
            <div class="flex items-start gap-2">
              <span class="font-semibold tracking-wider dark:text-lime-600 text-lime-800">user@localhost:~$</span>
              <span class="text-dark dark:text-light">npm run cv-download</span>
            </div>
            <a
              v-for="(cv, key) in info.cv"
              :key="key"
              :href="cv.url"
              target="_blank"
              aria-label="Download my curriculum vitae"
              :download="cv.fileName"
              :class="{
                'hover:text-blue-800 dark:hover:text-blue-500': true,
                'text-blue-700 dark:text-blue-400' : activeIndex === key
              }"
              @mouseover="changeActiveIndex(key)"
            >
              > {{ cv.label }}
            </a>
          </div>
        </div>
      </TerminalFrame>
    </div>
    <div class="self-center lg:w-1/3 scroll-transition">
      <ProfileCard :profile-info="info.profileCard" />
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
          command: '',
          title: '',
          content: [''],
          imagePath: '/MyPortfolio/images/undefined.webp',
          downloadBtn: {
            command: '',
            url: '',
            fileName: '',
            label: ''
          }
        }
      }
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeActiveIndex (index: any) {
      this.activeIndex = index
    }
  }
}
</script>
