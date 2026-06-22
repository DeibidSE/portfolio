<script setup lang="ts">
import type { WorkExperience } from '~/types'

const { tm } = useI18n()

const workExperience = computed<WorkExperience[]>(() => tm('work_experience_list') as WorkExperience[])

// Fake but stable 7-char hash so each row reads like a git log line.
const shortHash = (seed: string) => {
	let h = 0
	for (let i = 0; i < seed.length; i++) {
		h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
	}
	return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7)
}
</script>

<template>
	<UiSectionWrapper id="experience" icon="tabler:briefcase" :title="$t('work_experience.title')">
		<div class="w-full">
			<ol role="list" class="relative flex flex-col gap-9 self-start border-l-2 border-accent/30 pl-1">
				<li
					v-for="(info, index) in workExperience"
					:key="index"
					role="listitem"
					class="group relative flex flex-col gap-1.5 pt-1"
					:class="info.branch ? 'pl-11 sm:pl-12' : 'pl-7 sm:pl-8'"
				>
					<span
						v-if="!info.branch"
						aria-hidden="true"
						class="absolute left-[-12px] top-1.5 size-3.5 rounded-full border-2 border-accent-dark bg-accent-secondary ring-4 ring-accent/10 transition-transform duration-300 group-hover:scale-125"
					/>

					<template v-else>
						<svg
							aria-hidden="true"
							class="absolute left-[-5px] top-0 overflow-visible text-accent-secondary/40"
							width="31"
							height="22"
							viewBox="0 0 31 22"
							fill="none"
						>
							<path d="M0 0 C0 11 30 11 30 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						</svg>
						<span aria-hidden="true" class="absolute bottom-[22px] left-[24px] top-[22px] border-l-2 border-accent-secondary/40" />
						<svg
							aria-hidden="true"
							class="absolute bottom-0 left-[-5px] overflow-visible text-accent-secondary/40"
							width="31"
							height="22"
							viewBox="0 0 31 22"
							fill="none"
						>
							<path d="M30 0 C30 11 0 11 0 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						</svg>
						<span
							aria-hidden="true"
							class="absolute left-[18px] top-7 size-3.5 rounded-full border-2 border-accent-dark bg-accent-secondary ring-4 ring-accent/10 transition-transform duration-300 group-hover:scale-125"
						/>
					</template>

					<div class="flex flex-wrap items-center gap-x-2 gap-y-1 font-code text-xs">
						<span class="text-accent-secondary-dark dark:text-accent-secondary-light">{{ shortHash($rt(info.title) + $rt(info.startDate)) }}</span>
						<span v-if="index === 0" class="text-gray-400 dark:text-gray-500">
							(
							<span class="font-semibold text-accent-secondary-dark dark:text-accent-secondary-light">HEAD</span>
							<span class="px-1 opacity-70">→</span>
							<span class="font-semibold text-accent dark:text-accent-light">main</span>
							)
						</span>
						<span v-else-if="info.tag" class="inline-flex items-center gap-1 text-accent-secondary-dark dark:text-accent-secondary-light">
							<Icon name="tabler:git-branch" />
							{{ $rt(info.tag) }}
						</span>
					</div>

					<h3 class="flex items-center gap-1.5 text-lg font-semibold text-accent-dark dark:text-accent-light sm:text-xl">
						<a
							v-if="info.website"
							:href="$rt(info.website)"
							target="_blank"
							rel="noopener noreferrer"
							class="group/link inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-accent-secondary-dark dark:hover:text-accent-secondary-light"
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

					<div class="flex flex-wrap items-center gap-x-2 gap-y-1 font-code text-xs text-gray-500 dark:text-gray-400">
						<time class="inline-flex items-center gap-1.5">
							<span class="text-accent/70 dark:text-accent-light/70">Date:</span>
							{{ $rt(info.startDate) }} – {{ $rt(info.endDate) }}
						</time>
						<span class="opacity-40">·</span>
						<span class="inline-flex items-center gap-1">
							<Icon name="tabler:map-pin" class="opacity-80" />
							{{ $rt(info.location) }}
						</span>
					</div>

					<p class="text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
						{{ $rt(info.description) }}
					</p>

					<ul v-if="info.details" role="list" class="flex flex-col gap-1 text-xs leading-relaxed sm:text-sm">
						<li v-for="(detail, key) in info.details" :key="key" role="listitem" class="flex gap-2">
							<span aria-hidden="true" class="select-none font-code text-syntax-day-green dark:text-syntax-green">+</span>
							<span class="text-gray-600 dark:text-gray-300">{{ $rt(detail) }}</span>
						</li>
					</ul>
				</li>
			</ol>
		</div>
	</UiSectionWrapper>
</template>
