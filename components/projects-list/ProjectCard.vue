<template>
	<article class="relative flex flex-col justify-between gap-8 p-6 transition-shadow duration-300 border-2 shadow-2xl rounded-2xl bg-light/50 dark:bg-secondary-dark/50 border-accent/50 backdrop-blur-lg">
		<div class="flex flex-col gap-6 sm:gap-8 xl:flex-row xl:gap-12">
			<div class="flex flex-col items-start justify-center gap-4 sm:gap-6 xl:w-1/2">
				<h3 class="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl md:text-5xl xl:text-left dark:text-gray-100">
					{{ projectName }}
				</h3>
				<p
					v-if="projectData.description"
					class="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg dark:text-gray-300"
				>
					{{ $rt(projectData.description) }}
				</p>
				<BadgeComponent
					v-if="projectData.url"
					tag="a"
					:href="$rt(projectData.url)"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Link to the project on GitHub"
					hover
					prepend-icon="tabler:brand-github"
					color="purple"
				>
					<span>{{ $t('code') }}</span>
				</BadgeComponent>
			</div>

			<div class="flex items-center justify-center w-full xl:w-1/2">
				<img
					v-if="projectData.image"
					:src="`${$config.public.BASE_URL}/${$rt(projectData.image)}`"
					:alt="`Image of my project: ${projectName}`"
					class="object-cover w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] rounded-xl"
					loading="lazy"
				>
				<div
					v-else
					class="flex items-center justify-center text-center w-full aspect-video max-h-[400px] transition-transform rounded-lg bg-[repeating-linear-gradient(-45deg,_yellow,_yellow_50px,_black_50px,_black_100px)] bg-fixed bg-repeat"
				>
					<span class="w-full p-2 text-2xl font-semibold bg-orange-600 border-black border-y-2 md:p-4 text-dark">
						{{ $rt(projectData.text ?? 'Work in Progress') }}
					</span>
				</div>
			</div>
		</div>

		<footer
			v-if="projectData.technologies"
			class="flex flex-wrap justify-around gap-4 pt-4 border-t sm:gap-6 sm:pt-6 border-t-accent"
		>
			<TooltipComponent
				v-for="(technology, key) in projectData.technologies"
				:key="key"
				:tooltip-text="$rt(technology.name)"
				position="top"
			>
				<a
					:href="`${$rt(technology.url)}`"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-transform transform hover:scale-110"
					:aria-label="`Link to ${$rt(technology.name)} website`"
				>
					<Icon
						v-if="technology.icon"
						:name="`${$rt(technology.icon)}`"
						class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
					/>
				</a>
			</TooltipComponent>
		</footer>
	</article>
</template>

<script setup lang="ts">
import type { Project } from '~/lib/types.d'

defineProps<{ projectName: string, projectData: Project }>()
</script>
