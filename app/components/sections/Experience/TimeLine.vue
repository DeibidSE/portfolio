<template>
	<ol
		class="relative self-start border-l-4 border-accent-dark"
		role="list"
	>
		<li
			v-for="(info, index) in workExperience"
			:key="index"
			class="my-10 ml-8"
			role="listitem"
		>
			<div
				class="absolute w-4 h-4 bg-accent-secondary rounded-full mt-0.5 -left-2.5 border-2 border-accent-dark transform transition-transform duration-300 hover:scale-110"
			/>

			<time class="mb-1 font-normal leading-none text-accent-light text-md">{{ $rt(info.startDate) }} - {{ $rt(info.endDate) }}</time>

			<h3 class="flex items-center gap-2 text-2xl text-accent-dark dark:text-accent-light">
				<a
					v-if="info.website"
					:href="$rt(info.website)"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 transition-colors duration-300 group text-accent-dark hover:text-accent-secondary dark:text-accent-light dark:hover:text-accent-secondary-light"
					role="link"
				>
					{{ $rt(info.title) }}
					<Icon
						name="tabler:external-link"
						class="hidden sm:inline w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-90 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</a>
				<span
					v-else
					class="text-accent-dark dark:text-accent-light"
				>
					{{ $rt(info.title) }}
				</span>
			</h3>

			<h4 class="mb-2 text-lg text-gray-800 dark:text-gray-400">
				{{ $rt(info.location) }}
			</h4>
			<p class="mb-4 text-gray-600 text-md dark:text-gray-300">
				{{ $rt(info.description) }}
			</p>
			<ul
				v-if="info.details"
				class="pl-4 text-gray-600 list-disc text-md dark:text-gray-400"
			>
				<li
					v-for="(detail, key) in info.details"
					:key="key"
					role="listitem"
				>
					{{ $rt(detail) }}
				</li>
			</ul>
		</li>
	</ol>
</template>

<script setup lang="ts">
import type { WorkExperience } from '~/lib/types.d'

const { tm } = useI18n()

const workExperience = computed<WorkExperience[]>(() => tm('work_experience_list') as WorkExperience[])
</script>
