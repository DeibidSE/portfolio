<template>
	<LayoutsSectionWrapper
		id="skills"
		icon="tabler:message-2-code"
		:title="$t('skills.title')"
	>
		<SectionsSkillsBannerLogos />
	</LayoutsSectionWrapper>
</template>

<script setup lang="ts">
// Easter egg displayed in the console when the component is mounted
onMounted(() => {
	console.log(`%c                                             
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
	'font-weight: 700;')
})
</script>
