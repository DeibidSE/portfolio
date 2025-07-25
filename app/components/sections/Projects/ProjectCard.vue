<template>
	<article
		class="relative grid gap-8 p-6 transition-all duration-300 border-2 shadow-lg sm:p-8 rounded-2xl bg-light/50 dark:bg-secondary-dark/50 border-accent/50 backdrop-blur-md md:grid-cols-2"
	>
		<div class="flex flex-col justify-center w-full gap-4">
			<h3 class="inline-flex w-full gap-4 text-3xl font-bold text-center sm:text-4xl sm:text-left">
				<span class="text-accent">&gt;</span>{{ projectName }}
			</h3>

			<p
				v-if="projectData.description"
				class="text-xs sm:text-sm font-code sm:leading-relaxed"
			>
				{{ $rt(projectData.description) }}<span class="animate-blinking-cursor">_</span>
			</p>

			<div
				v-if="projectData.tags?.length"
				class="flex flex-wrap items-center gap-2 pt-2"
			>
				<UiBadge
					v-for="(tag, index) in projectData.tags"
					:key="index"
					v-bind="{
						'tag': tag.url ? 'a' : 'span',
						'href': tag.url ? $rt(tag.url) : undefined,
						'target': tag.url ? '_blank' : undefined,
						'rel': tag.url ? 'noopener noreferrer' : undefined,
						'aria-label': tag.url ? `Link: ${$rt(tag.text)}` : undefined,
						'hover': !!tag.url,
						'color': tag.color ? $rt(tag.color) : undefined,
						'prependIcon': tag.icon ? $rt(tag.icon) : undefined,
					}"
				>
					{{ $rt(tag.text) }}
				</UiBadge>
			</div>

			<div
				v-if="projectData.technologies"
				class="flex flex-wrap gap-6 pt-6 border-t justify-evenly col-span-full border-accent/50"
			>
				<UiTooltip
					v-for="(technology, key) in projectData.technologies"
					:key="key"
					:tooltip-text="$rt(technology.name)"
					position="top"
				>
					<a
						:href="`${$rt(technology.url)}`"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="`Link to ${$rt(technology.name)} website`"
						class="transition-transform hover:scale-110"
					>
						<Icon
							v-if="technology.icon"
							:name="`${$rt(technology.icon)}`"
							class="w-5 h-5 md:w-8 md:h-8"
						/>
					</a>
				</UiTooltip>
			</div>
		</div>

		<div class="flex items-center justify-center w-full">
			<img
				v-if="projectData.image"
				:src="`${$config.public.BASE_URL}/${$rt(projectData.image)}`"
				:alt="`Image of project: ${projectName}`"
				class="object-cover w-full h-auto max-h-96 rounded-xl aspect-video"
				loading="lazy"
			>
			<div
				v-else
				class="flex items-center justify-center w-full h-auto aspect-video max-h-96 rounded-xl bg-[repeating-linear-gradient(-45deg,_yellow,_yellow_40px,_black_40px,_black_80px)] text-center"
			>
				<span class="w-full px-4 py-2 text-xl font-semibold bg-orange-600 border-black text-dark border-y-2 md:text-2xl">
					Work in Progress
				</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import type { Project } from '~/lib/types.d'

defineProps<{ projectName: string, projectData: Project }>()
</script>
