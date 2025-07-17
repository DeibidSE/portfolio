<template>
	<div
		class="flex flex-col w-full h-full overflow-hidden transition-shadow duration-300 border-2 shadow-no-offset rounded-3xl border-accent/50 backdrop-blur-lg md:text-lg bg-secondary-light/50 dark:bg-secondary-dark/50"
		role="region"
		aria-label="Terminal component"
	>
		<div class="flex items-center justify-between w-full px-4 py-3 border-b-2 border-accent/50 bg-gray-100/80 dark:bg-gray-900/60">
			<div class="flex gap-2">
				<span class="w-3 h-3 bg-[#ff5f57] rounded-full shadow-md" />
				<span class="w-3 h-3 bg-[#ffbd2e] rounded-full shadow-md" />
				<span class="w-3 h-3 bg-[#28c940] rounded-full shadow-md" />
			</div>
		</div>

		<div class="flex flex-col gap-6 px-6 py-6 overflow-y-auto text-xs leading-relaxed text-gray-800 bg-transparent sm:text-sm font-code dark:text-gray-200">
			<slot name="header" />
			<slot name="content" />
			<slot name="secondary-content" />
			<slot name="footer" />

			<div class="flex items-start gap-2 w-max">
				<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
				<span class="animate-blinking-cursor">_</span>
			</div>
		</div>
	</div>
</template>
