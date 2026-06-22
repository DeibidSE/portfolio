<script setup lang="ts">
import type { Project } from '~/types'

const { tm } = useI18n()
const resolve = useI18nResolve()

const projects = computed(() => tm('projects_list') as Record<string, Project>)

const tabs = computed(() =>
	Object.entries(projects.value).map(([name, project]) => ({
		name,
		project,
		folder: slugify(name) || 'project',
	})),
)

const active = ref(0)

// If the list changes (say on a language switch) keep the active tab in range.
watch(tabs, (list) => {
	if (active.value >= list.length) active.value = 0
})

const activeTab = computed(() => tabs.value[active.value])
const primaryTech = computed(() => resolve(activeTab.value?.project.technologies?.[0]?.name))

// Arrow keys move between tabs with roving focus (the usual tablist a11y bit).
const onKeydown = (event: KeyboardEvent) => {
	const tablist = event.currentTarget as HTMLElement
	const tabEls = tablist.querySelectorAll<HTMLElement>('[role="tab"]')
	if (!tabEls.length) return

	let next = active.value
	if (event.key === 'ArrowRight') next = (active.value + 1) % tabEls.length
	else if (event.key === 'ArrowLeft') next = (active.value - 1 + tabEls.length) % tabEls.length
	else return

	event.preventDefault()
	active.value = next
	tabEls[next]?.focus()
}
</script>

<template>
	<UiSectionWrapper id="projects" icon="tabler:code" :title="$t('projects.title')">
		<div
			class="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-panel ring-1 ring-black/5 dark:border-white/10 dark:bg-panel dark:shadow-panel-dark dark:ring-white/5"
		>
			<header class="flex flex-col bg-slate-100/90 dark:bg-panel-chrome">
				<div class="relative flex items-center border-b border-slate-900/10 px-4 py-2.5 dark:border-white/10">
					<div class="flex shrink-0 items-center gap-2" aria-hidden="true">
						<span class="size-3 rounded-full bg-syntax-red/90" />
						<span class="size-3 rounded-full bg-syntax-yellow/90" />
						<span class="size-3 rounded-full bg-syntax-green/90" />
					</div>
					<span class="pointer-events-none absolute inset-x-0 text-center font-code text-xs text-slate-400 dark:text-slate-500">~/projects</span>
				</div>

				<div
					role="tablist"
					:aria-label="$t('projects.title')"
					class="scrollbar-none flex flex-wrap items-stretch gap-x-1 overflow-visible sm:flex-nowrap sm:overflow-x-auto"
					@keydown="onKeydown"
				>
					<button
						v-for="(tab, i) in tabs"
						:id="`project-tab-${i}`"
						:key="tab.name"
						role="tab"
						:aria-selected="active === i"
						:aria-controls="`project-panel-${i}`"
						:tabindex="active === i ? 0 : -1"
						class="flex shrink-0 items-center gap-2 border-b-2 px-3 py-2.5 font-code text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
						:class="
							active === i
								? 'border-accent bg-white text-slate-900 dark:bg-panel dark:text-slate-100'
								: 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
						"
						@click="active = i"
					>
						<Icon
							name="tabler:code"
							class="size-3.5 shrink-0"
							:class="active === i ? 'text-accent dark:text-accent-light' : 'text-slate-400'"
							aria-hidden="true"
						/>
						<span class="whitespace-nowrap">{{ tab.folder }}.md</span>
					</button>
				</div>
			</header>

			<Transition name="tab" mode="out-in">
				<SectionsProjectsProjectCard
					v-if="activeTab"
					:id="`project-panel-${active}`"
					:key="activeTab.name"
					role="tabpanel"
					:aria-labelledby="`project-tab-${active}`"
					:project-name="activeTab.name"
					:project-data="activeTab.project"
					:folder="activeTab.folder"
				/>
			</Transition>

			<footer
				class="flex items-center justify-between gap-4 border-t border-slate-900/10 bg-accent px-4 py-1.5 font-code text-[0.7rem] text-white/95 dark:border-white/10 sm:px-5"
			>
				<span class="inline-flex items-center gap-1.5">
					<Icon name="tabler:git-branch" class="size-3.5" aria-hidden="true" />
					main
				</span>
				<span class="inline-flex items-center gap-3">
					<span v-if="primaryTech" class="hidden sm:inline">{{ primaryTech }}</span>
					<span>UTF-8</span>
					<span>LF</span>
				</span>
			</footer>
		</div>
	</UiSectionWrapper>
</template>

<style scoped>
.scrollbar-none {
	scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
	display: none;
}

.tab-enter-active,
.tab-leave-active {
	transition:
		opacity 0.25s ease,
		transform 0.25s ease;
}

.tab-enter-from {
	opacity: 0;
	transform: translateY(8px);
}

.tab-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}
</style>
