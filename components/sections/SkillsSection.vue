<template>
  <section class="flex flex-col min-h-screen">
    <ul class="flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4">
      <li
        v-for="category in categories"
        :key="category"
        :class="[
          'flex-1 md:p-8 p-2 py-8 font-bold tracking-wider text-center cursor-pointer rounded-t-xl text-xs md:text-sm',
          selectedCategory === category
            ? 'border-x-2 border-t-2 border-x-purple-400 border-t-purple-400 bg-primary-light dark:bg-primary-dark'
            : 'bg-accent-light dark:bg-accent-dark'
        ]"
        @click="selectCategory(category)"
      >
        📂 {{ category }}
      </li>
    </ul>

    <div class="min-h-screen bg-primary-light dark:bg-primary-dark">
      <!-- Grid/list toggle -->
      <div class="flex justify-end mt-2 mr-2">
        <div class="inline-flex text-sm leading-none border-2 border-purple-600 rounded-full cursor-pointer bg-accent-light dark:bg-accent-dark text-dark dark:text-light">
          <i
            :class="[
              'inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none',
              !showList ? 'bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full' : ''
            ]"
            @click="showList = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 fill-current"
            ><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </i>
          <i
            :class="[
              'inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none',
              showList ? 'bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full' : ''
            ]"
            @click="showList = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 fill-current"
            ><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </i>
        </div>
      </div>

      <div
        :class="[
          !showList
            ? 'flex-wrap justify-around p-6 md:flex md:gap-8 md:p-16'
            : ''
        ]"
      >
        <ul v-if="showList" class="flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16">
          <li
            v-for="lang in sortedFilteredSkills"
            :key="lang.name"
          >
            <SkillListComponent :data="lang" />
          </li>
        </ul>
        <div
          v-for="lang in filteredSkills"
          v-else
          :key="lang.name"
          class="w-full card md:w-80 scroll-transition"
        >
          <SkillCardComponent :data="lang" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface Skill {
  name: string;
  image: string;
  description?: string;
  progress: number;
}
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return { '': [{ name: '', image: '/MyPortfolio/images/undefined.webp' }] }
      }
    }
  },
  data () {
    return {
      selectedCategory: '/frontend',
      showList: false
    }
  },
  computed: {
    /**
     * Filter the elements of the selected category in the JSON
     */
    filteredSkills (): Skill[] {
      return this.info[this.selectedCategory] || []
    },
    /**
     * Filter and sorts the elements of the selected category in the JSON by progress (from higher to lower)
     */
    sortedFilteredSkills (): Skill[] {
      return this.filteredSkills.slice().sort((a: Skill, b: Skill) => b.progress - a.progress)
    },
    /**
     * Get every category from the JSON
     */
    categories (): string[] {
      return Object.keys(this.info)
    }
  },
  methods: {
    selectCategory (category: string) {
      this.selectedCategory = category
    }
  }
}
</script>
