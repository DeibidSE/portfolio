<script setup lang="ts">
import type { Project } from '~/lib/types.d'

const projects = $tm('projects_list') as Record<string, Project>
</script>

<template>
	<LayoutsSectionWrapper id="projects" icon="tabler:code" :title="$t('projects.title')">
		<ul id="cards-stack" class="gap-12 flex w-full flex-col">
			<li v-for="(project, projectName, i) in projects" :key="projectName" class="card top-24 sticky" :style="{ '--i': i }">
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
