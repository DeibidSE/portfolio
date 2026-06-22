<template>
	<div
		id="app"
		class="relative min-h-screen w-full bg-primary-light font-ui tracking-tighter text-dark dark:bg-primary-dark dark:text-light"
		style="timeline-scope: --sec-about, --sec-projects, --sec-experience, --sec-skills"
	>
		<UiBackground />

		<LayoutAppHeader />
		<main>
			<SectionsIntroductionSection />
			<SectionsAboutSection />
			<SectionsProjectsSection />
			<SectionsExperienceSection />
			<SectionsSkillsSection />
		</main>
		<LayoutScrollToTopButton />
		<LayoutAppFooter />
	</div>
</template>
