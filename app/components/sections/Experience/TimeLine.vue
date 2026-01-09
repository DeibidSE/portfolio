<script setup lang="ts">
import type { WorkExperience } from '~/lib/types.d'

const { tm } = useI18n()

const workExperience = computed<WorkExperience[]>(() => tm('work_experience_list') as WorkExperience[])
</script>

<template>
	<ol role="list" class="border-accent-dark gap-8 relative flex flex-col self-start border-l-4">
		<li v-for="(info, index) in workExperience" :key="index" role="listitem" class="gap-1.5 pl-8 pt-1 relative flex flex-col">
			<span
				aria-hidden="true"
				class="top-1.5 size-3.5 border-accent-dark bg-accent-secondary left absolute left-[-0.55rem] rounded-full border-2 transition-transform duration-300 hover:scale-110"
			/>

			<time class="text-sm text-accent-light"> {{ $rt(info.startDate) }} – {{ $rt(info.endDate) }} </time>

			<h3 class="gap-1.5 text-xl text-accent-dark dark:text-accent-light flex items-center">
				<a
					v-if="info.website"
					:href="$rt(info.website)"
					target="_blank"
					rel="noopener noreferrer"
					class="group gap-1.5 hover:text-accent-secondary dark:hover:text-accent-secondary-light inline-flex items-center transition-colors duration-300"
				>
					{{ $rt(info.title) }}
					<Icon
						name="tabler:external-link"
						class="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:inline hidden opacity-70 transition-transform duration-300"
					/>
				</a>
				<span v-else>
					{{ $rt(info.title) }}
				</span>
			</h3>

			<div class="gap-1.5 text-base text-gray-800 dark:text-gray-400 flex items-center">
				<Icon name="tabler:map-pin" class="opacity-80" />
				<span>{{ $rt(info.location) }}</span>
			</div>

			<p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-snug">
				{{ $rt(info.description) }}
			</p>

			<ul v-if="info.details" role="list" class="gap-1 pl-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex list-disc flex-col">
				<li v-for="(detail, key) in info.details" :key="key" role="listitem">
					{{ $rt(detail) }}
				</li>
			</ul>
		</li>
	</ol>
</template>
