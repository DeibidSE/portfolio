<script setup lang="ts">
import type { Project } from '~/lib/types.d'

defineProps<{ projectName: string; projectData: Project }>()
</script>

<template>
	<article
		class="gap-10 rounded-3xl border-accent/50 bg-secondary-light/50 p-6 backdrop-blur-xl dark:bg-slate-900/60 sm:p-8 md:grid-cols-2 lg:p-10 relative grid overflow-hidden border-2"
	>
		<div class="gap-6 flex flex-col justify-center">
			<h3
				class="gap-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-left sm:text-4xl inline-flex items-center text-center"
			>
				<span class="size-10 rounded-xl bg-accent/20 text-xl text-accent flex shrink-0 items-center justify-center" aria-hidden="true"> &gt; </span>
				<span>{{ projectName }}</span>
			</h3>

			<p v-if="projectData.description" class="max-w-prose font-code text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
				{{ $rt(projectData.description) }}<span class="animate-blinking-cursor" aria-hidden="true">_</span>
			</p>

			<div v-if="projectData.tags?.length" class="gap-3 flex flex-wrap">
				<UiBadge
					v-for="(tag, index) in projectData.tags"
					:key="index"
					v-bind="{
						tag: tag.url ? 'a' : 'span',
						href: tag.url && $rt(tag.url),
						target: tag.url && '_blank',
						rel: tag.url && 'noopener noreferrer',
						hover: Boolean(tag.url),
						color: tag.color && $rt(tag.color),
						prependIcon: tag.icon && $rt(tag.icon),
					}"
				>
					{{ $rt(tag.text) }}
				</UiBadge>
			</div>

			<div v-if="projectData.technologies" class="gap-6 border-accent/50 pt-6 sm:justify-start flex flex-wrap justify-center border-t">
				<UiTooltip v-for="(technology, key) in projectData.technologies" :key="key" :tooltip-text="$rt(technology.name)" position="top">
					<a
						:href="$rt(technology.url)"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-transform duration-300 hover:scale-110"
						:aria-label="`${$rt(technology.name)} website`"
					>
						<Icon
							v-if="technology.icon"
							:name="$rt(technology.icon)"
							class="size-6 text-slate-600 hover:text-primary-500 dark:text-slate-300 md:size-7 transition-colors"
							aria-hidden="true"
						/>
					</a>
				</UiTooltip>
			</div>
		</div>

		<div class="flex items-center justify-center">
			<div class="aspect-video max-h-96 rounded-2xl bg-slate-200 dark:bg-slate-800 relative w-full overflow-hidden">
				<template v-if="projectData.image">
					<img
						:src="`${$config.public.BASE_URL}/${$rt(projectData.image)}`"
						:alt="`Image of project: ${projectName}`"
						class="ease-out h-full w-full object-cover transition-transform duration-700 hover:scale-105"
						loading="lazy"
					/>

					<div class="inset-0 from-black/40 via-black/10 pointer-events-none absolute bg-gradient-to-t to-transparent" aria-hidden="true" />
				</template>

				<div
					v-else
					class="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(-45deg,_#facc15,_#facc15_40px,_#000_40px,_#000_80px)]"
				>
					<span class="border-black bg-orange-600 py-3 text-xl font-semibold text-black md:text-2xl w-full border-y-2 text-center">
						Work in Progress
					</span>
				</div>
			</div>
		</div>
	</article>
</template>
