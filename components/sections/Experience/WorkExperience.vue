<template>
	<LayoutsSectionWrapper
		id="experience"
		icon="tabler:briefcase"
		:title="$t('work_experience.title')"
	>
		<UiTerminal>
			<template #header>
				<div class="flex items-start gap-2 w-max">
					<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
					<span>npm run experience --timeline</span>
				</div>
			</template>
			<template #content>
				<SectionsExperienceTimeLine />
			</template>
		</UiTerminal>
	</LayoutsSectionWrapper>
</template>
