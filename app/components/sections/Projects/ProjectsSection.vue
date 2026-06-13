<script setup lang="ts">
import type { Project } from '~/lib/types.d'

const { tm } = useI18n()

const projects = computed(() => tm('projects_list') as Record<string, Project>)
</script>

<template>
	<LayoutsSectionWrapper id="projects" icon="tabler:code" :title="$t('projects.title')">
		<ul id="cards-stack" class="flex w-full flex-col gap-12">
			<li v-for="(project, projectName, i) in projects" :key="projectName" class="card sticky top-24" :style="{ '--i': i }">
				<SectionsProjectsProjectCard :project-name="projectName" :project-data="project" />
			</li>
		</ul>
	</LayoutsSectionWrapper>
</template>

<style scoped>
.card {
	top: calc(7rem + (var(--i) * 2rem));
	transform-origin: center top;
}
</style>
