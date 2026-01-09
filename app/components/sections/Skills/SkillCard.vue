<script setup lang="ts">
import type { Skill } from '~/lib/types.d'

defineProps<{ category: string; skills: Skill[] }>()
</script>

<template>
	<ul role="list" class="gap-6 sm:grid-cols-3 md:grid-cols-4 grid grid-cols-2">
		<li
			v-for="skill in skills"
			:key="skill.name"
			class="group gap-3 rounded-2xl border-accent/20 bg-gray-100/40 p-6 hover:-translate-y-0.5 hover:bg-gray-100/60 hover:shadow-md dark:bg-slate-800/40 dark:hover:bg-slate-800/60 flex flex-col items-center justify-center border text-center transition-all duration-300"
		>
			<Icon :name="skill.image" class="size-14 group-hover:scale-105" />

			<span class="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100 transition-colors">
				{{ skill.name }}
			</span>
		</li>
	</ul>
</template>
