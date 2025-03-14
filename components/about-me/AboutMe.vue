<template>
	<SectionWrapper
		id="about-me"
		icon="me"
		:title="$t('aboutMe')"
	>
		<AboutMeTerminalFrame :buttons-clickable="true">
			<AboutMeTerminalContent />
		</AboutMeTerminalFrame>
	</SectionWrapper>
</template>
