<template>
	<div
		class="rounded-3xl border-accent/50 bg-secondary-light/50 shadow-lg backdrop-blur-sm hover:border-primary-500/30 hover:shadow-xl dark:bg-slate-900/50 md:text-lg flex h-full w-full flex-col overflow-hidden border-2 transition-all duration-300"
		role="region"
		aria-label="Terminal component"
	>
		<div class="border-accent/50 bg-gray-100/80 px-4 py-3 dark:bg-gray-900/60 flex w-full items-center justify-between border-b-2">
			<div class="gap-2 flex items-center" aria-hidden="true">
				<span class="size-3 shadow-md rounded-full bg-[#ff5f57]" />
				<span class="size-3 shadow-md rounded-full bg-[#ffbd2e]" />
				<span class="size-3 shadow-md rounded-full bg-[#28c940]" />
			</div>
		</div>

		<div
			class="gap-8 px-6 py-6 font-code text-xs leading-relaxed text-gray-800 dark:text-gray-200 sm:text-sm flex flex-col overflow-y-auto bg-transparent"
		>
			<slot name="header" />
			<slot name="content" />
			<slot name="secondary-content" />
			<slot name="footer" />

			<div class="gap-2 flex items-start">
				<span class="font-semibold text-accent-secondary dark:text-accent-secondary"> user@localhost:~$ </span>
				<span class="animate-blinking-cursor" aria-hidden="true">_</span>
			</div>
		</div>
	</div>
</template>
