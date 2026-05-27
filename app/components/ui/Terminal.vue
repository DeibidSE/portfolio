<template>
	<div class="glass-surface flex h-full w-full flex-col overflow-hidden rounded-3xl" role="region" aria-label="Terminal component">
		<div
			class="flex w-full items-center justify-between border-b border-slate-900/5 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
		>
			<div class="flex items-center gap-2" aria-hidden="true">
				<span class="size-3 rounded-full bg-[#ff5f57]" />
				<span class="size-3 rounded-full bg-[#ffbd2e]" />
				<span class="size-3 rounded-full bg-[#28c940]" />
			</div>
		</div>

		<div
			class="flex flex-col gap-8 overflow-y-auto bg-transparent px-5 py-6 font-code text-xs leading-relaxed text-gray-800 dark:text-gray-200 sm:px-6 sm:text-sm"
		>
			<slot name="header" />
			<slot name="content" />
			<slot name="secondary-content" />
			<slot name="footer" />

			<div class="flex items-start gap-2">
				<span class="font-semibold text-accent-secondary"> user@localhost:~$ </span>
				<span class="animate-blinking-cursor" aria-hidden="true">_</span>
			</div>
		</div>
	</div>
</template>
