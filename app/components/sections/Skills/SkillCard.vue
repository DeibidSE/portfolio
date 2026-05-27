<script setup lang="ts">
import type { Skill } from '~/lib/types.d'

defineProps<{ category: string; skills: Skill[] }>()
</script>

<template>
	<ul role="list" class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4">
		<li
			v-for="skill in skills"
			:key="skill.name"
			class="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-900/5 bg-black/[0.02] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-accent/10 sm:p-6"
		>
			<Icon :name="skill.image" class="size-12 transition-transform duration-300 group-hover:scale-110 sm:size-14" />

			<span
				class="text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100 sm:text-sm"
			>
				{{ skill.name }}
			</span>
		</li>
	</ul>
</template>
