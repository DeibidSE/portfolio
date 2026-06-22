<script setup lang="ts">
import { FRONTEND_TYPE, BACKEND_TYPE, TOOLS_TYPE } from '~/types'
import type { Skill, SkillType } from '~/types'

const groups: { key: SkillType; skills: Skill[] }[] = [
	{ key: FRONTEND_TYPE, skills: skillList.filter((s) => s.type === FRONTEND_TYPE) },
	{ key: BACKEND_TYPE, skills: skillList.filter((s) => s.type === BACKEND_TYPE) },
	{ key: TOOLS_TYPE, skills: skillList.filter((s) => s.type === TOOLS_TYPE) },
]

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
	<UiSectionWrapper id="skills" icon="tabler:message-2-code" :title="$t('skills.title')">
		<div class="flex w-full flex-col gap-8 sm:gap-10">
			<section v-for="group in groups" :key="group.key" class="flex flex-col gap-4" :aria-label="$t(group.key)">
				<div class="flex items-center gap-3 font-code text-sm">
					<span class="flex shrink-0 items-center gap-2 font-semibold text-accent dark:text-accent-light">
						<span class="size-2 rounded-full bg-accent dark:bg-accent-light" aria-hidden="true" />
						{{ group.key }}
					</span>
					<span class="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" aria-hidden="true" />
				</div>

				<ul role="list" class="flex flex-wrap gap-2.5 sm:gap-3">
					<li
						v-for="skill in group.skills"
						:key="skill.name"
						class="group flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-black/[0.02] px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-accent/10"
					>
						<Icon :name="skill.image" class="size-6 shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
						<span
							class="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100"
						>
							{{ skill.name }}
						</span>
					</li>
				</ul>
			</section>
		</div>
	</UiSectionWrapper>
</template>
