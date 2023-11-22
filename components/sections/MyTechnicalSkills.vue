<template>
  <section :id="title" class="flex flex-col min-h-screen bg-primary-light dark:bg-primary-dark" :aria-label="title">
    <header class="flex w-full gap-4 px-6 py-8 md:px-16">
      <Icon name="FolderIcon" class="w-9 h-9" alt="Folder Icon" />
      <h2 class="text-4xl text-purple-600 uppercase md:font-bold font-terminal">
        {{ title }}
      </h2>
    </header>
    <!-- Tabs with different categories -->
    <ul class="flex flex-row justify-center gap-1 px-1 md:gap-2 md:px-4" role="tablist">
      <li
        v-for="category in categories"
        :key="category"
        :class="[
          'flex-1 md:p-8 p-2 py-8 text-center cursor-pointer rounded-t-xl',
          selectedCategory === category
            ? 'border-x-2 border-t-2 border-x-purple-400 border-t-purple-400 bg-secondary-light dark:bg-secondary-dark shadow-top'
            : 'bg-accent-light dark:bg-accent-dark'
        ]"
        role="tab"
        :aria-selected="selectedCategory === category"
        tabindex="0"
        @click="selectCategory(category)"
      >
        <div class="flex items-center justify-center gap-2">
          <Icon name="FolderIcon" class="w-3 h-3 md:w-5 md:h-5" />
          <span class="text-xs uppercase md:text-xl font-terminal">{{ category }}</span>
        </div>
      </li>
    </ul>

    <div class="min-h-screen rounded-lg bg-secondary-light dark:bg-secondary-dark" :aria-label="selectedCategory">
      <!-- Grid/list toggle -->
      <div class="flex justify-end mt-2 mr-2" aria-label="View Toggle">
        <div class="inline-flex text-sm leading-none border-2 border-purple-600 rounded-full cursor-pointer bg-accent-light dark:bg-accent-dark text-dark dark:text-light">
          <i
            :class="{
              'inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-l-full rounded-r-none focus:outline-none' : true,
              'bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full' : !showList
            }"
            role="button"
            tabindex="0"
            aria-label="Grid View"
            @click="showList = false"
          >
            <Icon name="uil:th" class="w-3 h-3 md:w-4 md:h-4" />
          </i>
          <i
            :class="{
              'inline-flex items-center px-2 py-1 md:px-4 md:py-2 transition-colors duration-300 ease-in rounded-r-full rounded-l-none focus:outline-none' : true,
              'bg-secondary-light dark:bg-secondary-dark text-purple-600 rounded-full': showList
            }"
            role="button"
            tabindex="0"
            aria-label="List View"
            @click="showList = true"
          >
            <Icon name="uil:list-ul" class="w-3 h-3 md:w-4 md:h-4" />
          </i>
        </div>
      </div>

      <div :class="{'flex-wrap justify-around p-6 md:flex md:gap-8 md:p-8 lg:p-16': !showList}" aria-label="Skills Container">
        <!-- List view -->
        <ul v-if="showList" class="flex flex-col justify-between flex-1 h-full gap-8 px-8 py-8 md:px-16" role="list">
          <li
            v-for="lang in sortedFilteredSkills"
            :key="lang.name"
            role="listitem"
          >
            <TechnicalSkillsList :data="lang" />
          </li>
        </ul>
        <!-- Grid view -->
        <div
          v-for="lang in filteredSkills"
          v-else
          :key="lang.name"
          class="w-full card md:w-80 scroll-transition"
        >
          <TechnicalSkillCard :data="lang" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { type Skill } from '~/types/types.d'

export default {
  props: {
    sectionInfo: {
      type: Object,
      default: () => {}
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
     * Returns the title of the section
     */
    title () {
      return Object.keys(this.sectionInfo).toString()
    },
    /**
     * Filter the elements of the selected category in the JSON
     */
    filteredSkills (): Skill[] {
      return this.sectionInfo[this.title][this.selectedCategory] || []
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
      return Object.keys(this.sectionInfo[this.title])
    }
  },
  /**
   * Little easter egg in console.
   *  - Q: Why is it here?
   *  - A: Br0, trust me. This is 100% a skill.
   */
  mounted () {
    console.log(`%c                                             
       ___________________________________   
      |                                   |  
      |  Sneaky peeky!                    |  
      |  You're not supposed to see this  |  
      |_________ _________________________|  
                V                            
       *******                               
      *  o O  *                              
      *   ∆   *                              
      *   3   *                              
       *******                               
                                             `,
    'font-weight: 700;')
  },
  methods: {
    /**
     * Sets the category selected on the tab
     * @param category
     */
    selectCategory (category: string) {
      this.selectedCategory = category
    }
  }
}
</script>
