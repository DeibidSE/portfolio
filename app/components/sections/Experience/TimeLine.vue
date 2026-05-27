<script setup lang="ts">
import type { WorkExperience } from '~/lib/types.d'

const { tm } = useI18n()

const workExperience = computed<WorkExperience[]>(() => tm('work_experience_list') as WorkExperience[])
</script>

<template>
	<ol role="list" class="relative flex flex-col gap-9 self-start border-l-2 border-accent/30 pl-1">
		<li v-for="(info, index) in workExperience" :key="index" role="listitem" class="group relative flex flex-col gap-1.5 pl-7 pt-1 sm:pl-8">
			<span
				aria-hidden="true"
				class="absolute left-[-12px] top-1.5 size-3.5 rounded-full border-2 border-accent-dark bg-accent-secondary ring-4 ring-accent/10 transition-transform duration-300 group-hover:scale-125"
			/>

			<time class="text-sm font-medium text-accent dark:text-accent-light"> {{ $rt(info.startDate) }} – {{ $rt(info.endDate) }} </time>

			<h3 class="flex items-center gap-1.5 text-lg font-semibold text-accent-dark dark:text-accent-light sm:text-xl">
				<a
					v-if="info.website"
					:href="$rt(info.website)"
					target="_blank"
					rel="noopener noreferrer"
					class="group/link inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-accent-secondary dark:hover:text-accent-secondary-light"
				>
					{{ $rt(info.title) }}
					<Icon
						name="tabler:external-link"
						class="hidden opacity-70 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 sm:inline"
					/>
				</a>
				<span v-else>
					{{ $rt(info.title) }}
				</span>
			</h3>

			<div class="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-400">
				<Icon name="tabler:map-pin" class="opacity-80" />
				<span>{{ $rt(info.location) }}</span>
			</div>

			<p class="text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
				{{ $rt(info.description) }}
			</p>

			<ul
				v-if="info.details"
				role="list"
				class="flex list-disc flex-col gap-1 pl-4 text-xs leading-relaxed text-gray-600 marker:text-accent/60 dark:text-gray-400 sm:text-sm"
			>
				<li v-for="(detail, key) in info.details" :key="key" role="listitem">
					{{ $rt(detail) }}
				</li>
			</ul>
		</li>
	</ol>
</template>
