<template>
	<LayoutsSectionWrapper
		id="projects"
		icon="tabler:code"
		:title="$t('projects.title')"
	>
		<ul
			id="cards"
			class="flex flex-col gap-24"
		>
			<li
				v-for="(project, projectName, i) in $tm('projects_list')"
				:id="`card_${i + 1}`"
				:key="projectName"
				class="sticky top-0 lg:top-36 card"
			>
				<SectionsProjectsProjectCard
					:project-name="projectName"
					:project-data="project"
					class="card__content"
				/>
			</li>
		</ul>
	</LayoutsSectionWrapper>
</template>

<style scoped>
@supports (animation-timeline: view()) {
  #card_1 {
    --index: 1;
  }
  #card_2 {
    --index: 2;
  }

  .card {
    --index0: calc(var(--index) - 1);
    --reverse-index: calc(var(--numcards) - var(--index0));
    --reverse-index0: calc(var(--reverse-index) - 1);
  }

  @keyframes scale {
    to {
      transform: scale(calc(1.1 - (0.1 * var(--reverse-index))));
    }
  }

  #cards {
    --numcards: 2;
    view-timeline-name: --cards-element-scrolls-in-body;
  }

  .card__content {
    --start-range: calc(var(--index0) / var(--numcards) * 100%);
    --end-range: calc(var(--index) / var(--numcards) * 100%);

    animation: scale 0.5s ease-in-out forwards;
    animation-timeline: --cards-element-scrolls-in-body;
    animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
  }
}
</style>
