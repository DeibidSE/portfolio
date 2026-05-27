<script setup lang="ts">
import { FRONTEND_TYPE, BACKEND_TYPE, TOOLS_TYPE } from '~/lib/types.d'
import { skillList } from '~/lib/data'
import type { Skill, SkillType } from '~/lib/types.d'

const activeCategory = ref<SkillType>(FRONTEND_TYPE)

const categorizedSkills: Record<SkillType, Skill[]> = {
	[FRONTEND_TYPE]: skillList.filter((s) => s.type === FRONTEND_TYPE),
	[BACKEND_TYPE]: skillList.filter((s) => s.type === BACKEND_TYPE),
	[TOOLS_TYPE]: skillList.filter((s) => s.type === TOOLS_TYPE),
}

const categories = computed(() => Object.keys(categorizedSkills) as SkillType[])
const visibleSkills = computed(() => categorizedSkills[activeCategory.value])

function moveCategory(direction: -1 | 1) {
	const list = categories.value
	if (!list.length) return

	const index = list.indexOf(activeCategory.value)
	const safeIndex = index === -1 ? 0 : index

	const next = (safeIndex + direction + list.length) % list.length
	activeCategory.value = list[next]!
}

// Easter egg displayed in the console when the component is mounted
onMounted(() => {
	console.log(
		`%c                                             
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
		'font-weight: 700;',
	)
})
</script>

<template>
	<LayoutsSectionWrapper id="skills" icon="tabler:message-2-code" :title="$t('skills.title')">
		<UiBrowser @back="moveCategory(-1)" @forward="moveCategory(1)" @home="activeCategory = categories[0]!">
			<template #address> https://deibidse.github.io{{ $config.public.BASE_URL }}/skills?type={{ activeCategory }} </template>

			<section
				class="flex items-end justify-between gap-1 border-b border-slate-900/10 px-3 pt-3 dark:border-white/10 sm:justify-start sm:gap-2 sm:px-6"
			>
				<button
					v-for="category in categories"
					:key="category"
					type="button"
					class="focus-ring relative -mb-px rounded-t-lg border-b-2 px-3 py-2 text-sm font-medium transition-colors sm:px-4"
					:class="
						activeCategory === category
							? 'border-accent text-gray-900 dark:text-gray-100'
							: 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
					"
					@click="activeCategory = category"
				>
					{{ $t(category) }}
				</button>
			</section>

			<main class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
				<Transition name="page" mode="out-in">
					<SectionsSkillsSkillCard :key="activeCategory" :category="activeCategory" :skills="visibleSkills" />
				</Transition>
			</main>
		</UiBrowser>
	</LayoutsSectionWrapper>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
	transition: all 0.25s ease;
}
.page-enter-from {
	opacity: 0;
	transform: translateX(12px);
}
.page-leave-to {
	opacity: 0;
	transform: translateX(-12px);
}
</style>
