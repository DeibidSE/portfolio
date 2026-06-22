<script setup lang="ts">
withDefaults(
	defineProps<{
		user?: string
		host?: string
		command?: string
	}>(),
	{
		user: 'guest',
		host: 'portfolio',
		command: '',
	},
)
</script>

<template>
	<div
		class="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-panel ring-1 ring-black/5 dark:border-white/10 dark:bg-panel dark:shadow-panel-dark dark:ring-white/5"
		role="region"
		:aria-label="`${user}@${host}`"
	>
		<header class="relative flex items-center border-b border-slate-900/10 bg-slate-100/90 px-4 py-2.5 dark:border-white/10 dark:bg-panel-chrome">
			<div class="flex shrink-0 items-center gap-2" aria-hidden="true">
				<span class="size-3 rounded-full bg-syntax-red/90" />
				<span class="size-3 rounded-full bg-syntax-yellow/90" />
				<span class="size-3 rounded-full bg-syntax-green/90" />
			</div>
			<span class="pointer-events-none absolute inset-x-0 text-center font-code text-xs text-slate-400 dark:text-slate-500">
				{{ user }}@{{ host }}: ~
			</span>
		</header>

		<div
			class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto bg-white px-5 py-6 font-code text-xs leading-relaxed text-slate-700 dark:bg-panel dark:text-slate-300 sm:px-6 sm:text-sm"
		>
			<div class="flex items-start gap-2">
				<span class="shrink-0 select-none">
					<span class="font-semibold text-syntax-day-green dark:text-syntax-green">{{ user }}@{{ host }}</span>
					<span class="text-slate-400 dark:text-slate-500">:</span>
					<span class="font-semibold text-syntax-day-blue dark:text-syntax-blue">~</span>
					<span class="text-slate-400 dark:text-slate-500">$</span>
				</span>
				<span class="shrink-0">{{ command }}</span>
			</div>

			<slot />

			<div class="mt-auto flex items-start gap-2 pt-2">
				<span class="select-none">
					<span class="font-semibold text-syntax-day-green dark:text-syntax-green">{{ user }}@{{ host }}</span>
					<span class="text-slate-400 dark:text-slate-500">:</span>
					<span class="font-semibold text-syntax-day-blue dark:text-syntax-blue">~</span>
					<span class="text-slate-400 dark:text-slate-500">$</span>
				</span>
				<span class="inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] animate-blinking-cursor bg-slate-700 dark:bg-slate-300" aria-hidden="true" />
			</div>
		</div>
	</div>
</template>
