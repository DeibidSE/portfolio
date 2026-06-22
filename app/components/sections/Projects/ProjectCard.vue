<script setup lang="ts">
import type { Project } from '~/types'

const props = defineProps<{ projectName: string; projectData: Project; folder?: string }>()

const resolve = useI18nResolve()

const links = computed(() => {
	const url = resolve(props.projectData.url)
	if (!url) return []
	return [{ url, key: url.includes('github') ? 'repository' : 'website' }]
})

const imageName = computed(() => {
	const path = resolve(props.projectData.image)
	return path.split('/').pop() || 'preview.webp'
})
</script>

<template>
	<div class="flex min-h-[26rem] flex-col md:flex-row lg:min-h-[30rem]">
		<aside
			class="flex shrink-0 flex-col border-b border-slate-900/10 bg-slate-50 dark:border-white/10 dark:bg-panel-chrome/40 md:w-52 md:border-b-0 md:border-r"
		>
			<p class="hidden select-none px-4 pt-4 font-code text-[0.65rem] uppercase tracking-widest text-slate-400 dark:text-slate-500 md:block">Explorer</p>

			<div class="hidden items-center gap-1.5 px-3 pb-1 pt-3 font-code text-xs font-semibold text-slate-600 dark:text-slate-300 md:flex">
				<Icon name="tabler:chevron-down" class="size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
				<Icon name="tabler:code" class="size-4 shrink-0 text-accent dark:text-accent-light" aria-hidden="true" />
				<span class="truncate">{{ folder ?? 'project' }}</span>
			</div>

			<ul
				class="flex flex-wrap gap-2 p-3 md:flex-col md:flex-nowrap md:gap-0.5 md:border-l md:border-slate-900/10 md:p-2 md:py-1 md:pl-4 dark:md:border-white/10"
			>
				<li v-for="(technology, index) in projectData.technologies" :key="index" class="shrink-0">
					<a
						:href="$rt(technology.url)"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-md border border-slate-900/10 bg-white/60 px-2.5 py-1.5 font-code text-xs text-slate-600 transition-colors hover:bg-accent/10 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white md:border-0 md:bg-transparent md:px-2 md:py-1 dark:md:bg-transparent"
						:aria-label="`${$rt(technology.name)} — website`"
					>
						<Icon v-if="technology.icon" :name="$rt(technology.icon)" class="size-4 shrink-0" aria-hidden="true" />
						<span class="whitespace-nowrap">{{ $rt(technology.name) }}</span>
					</a>
				</li>
			</ul>
		</aside>

		<div class="relative flex min-w-0 flex-1 flex-col">
			<div class="relative flex flex-1 flex-col justify-start gap-6 pb-6 pl-3 pr-6 pt-3 sm:gap-8 sm:pb-8 sm:pr-8 sm:pt-4 lg:pb-10 lg:pr-10">
				<span
					class="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent"
					aria-hidden="true"
				/>

				<nav aria-label="Breadcrumb" class="flex items-center gap-1.5 font-code text-[0.7rem] text-slate-400 dark:text-slate-500">
					<span>src</span>
					<span class="text-slate-300 dark:text-slate-600" aria-hidden="true">/</span>
					<span>projects</span>
					<span class="text-slate-300 dark:text-slate-600" aria-hidden="true">/</span>
					<span class="text-slate-600 dark:text-slate-300">{{ folder ?? 'project' }}</span>
				</nav>

				<div v-if="projectData.description" class="font-code text-xs leading-relaxed sm:text-sm">
					<div
						class="[counter-reset:line] [&>*>span]:min-w-0 [&>*>span]:flex-1 [&>*]:flex [&>*]:items-start [&>*]:before:mr-3.5 [&>*]:before:w-7 [&>*]:before:shrink-0 [&>*]:before:select-none [&>*]:before:border-r [&>*]:before:border-slate-400/25 [&>*]:before:pr-2.5 [&>*]:before:text-right [&>*]:before:text-slate-400/70 [&>*]:before:[content:counter(line)] [&>*]:before:[counter-increment:line]"
					>
						<h3 class="code-line">
							<span class="font-code text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl lg:text-4xl">
								<span class="text-accent dark:text-accent-light" aria-hidden="true">#</span>
								{{ projectName }}
							</span>
						</h3>

						<div class="code-line" aria-hidden="true"><span>&nbsp;</span></div>

						<div class="code-line">
							<span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">![</span>
								<span class="text-syntax-day-cyan dark:text-syntax-cyan">preview</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">](</span>
								<span class="text-syntax-day-orange dark:text-syntax-orange">{{ imageName }}</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">)</span>

								<span v-if="projectData.image" class="mt-2 block w-full max-w-md overflow-hidden rounded-md ring-1 ring-slate-900/10 dark:ring-white/10">
									<span class="relative block aspect-video bg-slate-200 dark:bg-slate-300">
										<img
											:src="`${$config.public.BASE_URL}/${$rt(projectData.image)}`"
											:alt="`Image of project: ${projectName}`"
											class="absolute inset-0 h-full w-full object-cover"
											loading="lazy"
										/>
									</span>
								</span>

								<span v-else class="mt-2 block w-full max-w-md overflow-hidden rounded-md ring-1 ring-slate-900/10 dark:ring-white/10">
									<span class="relative block aspect-video bg-[repeating-linear-gradient(-45deg,_#ffd866,_#ffd866_40px,_#16181d_40px,_#16181d_80px)]">
										<span
											class="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y border-black bg-syntax-orange py-1 text-center text-xs font-semibold text-black"
										>
											WIP
										</span>
									</span>
								</span>
							</span>
						</div>

						<div class="code-line" aria-hidden="true"><span>&nbsp;</span></div>

						<div class="code-line">
							<span class="flex gap-1">
								<span class="text-accent dark:text-accent-light" aria-hidden="true">&gt;</span>
								<span class="italic text-slate-600 dark:text-slate-300">{{ $rt(projectData.description) }}</span>
							</span>
						</div>

						<div class="code-line" aria-hidden="true"><span>&nbsp;</span></div>

						<div v-if="projectData.year" class="code-line">
							<span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">**</span>
								<span class="font-semibold text-syntax-day-cyan dark:text-syntax-cyan">Year</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">**</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">{{ ': ' }}</span>
								<span class="text-slate-700 dark:text-slate-200">{{ $rt(projectData.year) }}</span>
							</span>
						</div>

						<div v-if="projectData.role" class="code-line">
							<span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">**</span>
								<span class="font-semibold text-syntax-day-cyan dark:text-syntax-cyan">Role</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">**</span>
								<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">{{ ': ' }}</span>
								<span class="text-slate-700 dark:text-slate-200">{{ $rt(projectData.role) }}</span>
							</span>
						</div>

						<template v-if="projectData.highlights?.length">
							<div class="code-line" aria-hidden="true"><span>&nbsp;</span></div>

							<div class="code-line">
								<span class="flex gap-1">
									<span class="text-accent dark:text-accent-light" aria-hidden="true">##</span>
									<span class="font-semibold text-slate-900 dark:text-slate-100">Highlights</span>
								</span>
							</div>

							<div v-for="(highlight, index) in projectData.highlights" :key="index" class="code-line">
								<span class="flex gap-1">
									<span class="text-accent dark:text-accent-light" aria-hidden="true">-</span>
									<span class="text-slate-700 dark:text-slate-200">{{ $rt(highlight) }}</span>
								</span>
							</div>
						</template>

						<template v-if="links.length">
							<div class="code-line" aria-hidden="true"><span>&nbsp;</span></div>

							<div class="code-line">
								<span class="flex gap-1">
									<span class="text-accent dark:text-accent-light" aria-hidden="true">##</span>
									<span class="font-semibold text-slate-900 dark:text-slate-100">Links</span>
								</span>
							</div>

							<div v-for="(link, index) in links" :key="`link-${index}`" class="code-line">
								<span>
									<span class="text-accent dark:text-accent-light" aria-hidden="true">-</span>
									<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">[</span>
									<span class="text-syntax-day-cyan dark:text-syntax-cyan">{{ link.key }}</span>
									<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">](</span>
									<a
										:href="link.url"
										target="_blank"
										rel="noopener noreferrer"
										class="break-all text-syntax-day-orange underline-offset-2 hover:underline dark:text-syntax-orange"
									>
										{{ link.url }}
									</a>
									<span class="text-slate-400 dark:text-slate-500" aria-hidden="true">)</span>
								</span>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
