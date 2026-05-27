<script setup lang="ts">
import type { Project } from '~/lib/types.d'

defineProps<{ projectName: string; projectData: Project }>()
</script>

<template>
	<article
		class="relative grid gap-8 overflow-hidden rounded-3xl border border-slate-900/5 bg-white/90 p-6 shadow-[0_10px_40px_-12px_rgba(2,6,23,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-slate-900/85 dark:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.55)] sm:gap-10 sm:p-8 md:grid-cols-2 md:items-center lg:p-10"
	>
		<div class="flex flex-col justify-center gap-6">
			<h3
				class="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:gap-4 sm:text-3xl lg:text-4xl"
			>
				<span
					class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-lg font-bold text-accent sm:size-10 sm:text-xl"
					aria-hidden="true"
				>
					&gt;
				</span>
				<span>{{ projectName }}</span>
			</h3>

			<p v-if="projectData.description" class="max-w-prose font-code text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm">
				{{ $rt(projectData.description) }}<span class="animate-blinking-cursor" aria-hidden="true">_</span>
			</p>

			<div v-if="projectData.tags?.length" class="flex flex-wrap gap-3">
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

			<div
				v-if="projectData.technologies"
				class="flex flex-wrap justify-center gap-5 border-t border-slate-900/10 pt-6 dark:border-white/10 sm:justify-start"
			>
				<UiTooltip v-for="(technology, key) in projectData.technologies" :key="key" :tooltip-text="$rt(technology.name)" position="top">
					<a
						:href="$rt(technology.url)"
						target="_blank"
						rel="noopener noreferrer"
						class="block transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110"
						:aria-label="`${$rt(technology.name)} website`"
					>
						<Icon
							v-if="technology.icon"
							:name="$rt(technology.icon)"
							class="size-6 text-slate-600 transition-colors hover:text-accent dark:text-slate-300 md:size-7"
							aria-hidden="true"
						/>
					</a>
				</UiTooltip>
			</div>
		</div>

		<div class="flex items-center justify-center">
			<div
				class="group/img relative aspect-video max-h-96 w-full overflow-hidden rounded-2xl border border-slate-900/5 bg-slate-200 ring-1 ring-white/40 dark:border-white/10 dark:bg-slate-800 dark:ring-white/5"
			>
				<template v-if="projectData.image">
					<img
						:src="`${$config.public.BASE_URL}/${$rt(projectData.image)}`"
						:alt="`Image of project: ${projectName}`"
						class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
						loading="lazy"
					/>

					<div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
				</template>

				<div
					v-else
					class="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(-45deg,_#facc15,_#facc15_40px,_#000_40px,_#000_80px)]"
				>
					<span class="w-full border-y-2 border-black bg-orange-600 py-3 text-center text-xl font-semibold text-black md:text-2xl">
						Work in Progress
					</span>
				</div>
			</div>
		</div>
	</article>
</template>
