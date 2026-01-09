<script setup lang="ts">
defineEmits<{ (e: 'back' | 'forward' | 'refresh' | 'home'): void }>()
</script>

<template>
	<section
		class="rounded-3xl border-accent/50 bg-secondary-light/50 shadow-lg backdrop-blur-sm dark:bg-slate-900/50 flex h-full w-full flex-1 flex-col overflow-hidden border-2 transition-all duration-300"
		role="region"
		aria-label="Browser mock"
	>
		<header class="border-accent/50 bg-gray-100/80 px-3 py-2 dark:bg-gray-900/60 sm:px-4 sm:py-3 flex items-center border-b-2">
			<div class="gap-2 flex items-center" aria-hidden="true">
				<span class="size-3 shadow-md rounded-full bg-[#ff5f57]" />
				<span class="size-3 shadow-md rounded-full bg-[#ffbd2e]" />
				<span class="size-3 shadow-md rounded-full bg-[#28c940]" />
			</div>
		</header>

		<nav
			class="gap-2 border-accent/30 bg-gray-100/60 px-2 py-2 text-gray-700 dark:bg-slate-800/50 dark:text-gray-300 sm:flex-row sm:items-center sm:gap-3 sm:px-3 flex flex-col border-b-2"
			aria-label="Browser navigation"
		>
			<div class="gap-1 flex items-center">
				<button
					type="button"
					class="size-7 hover:bg-gray-200/70 dark:hover:bg-slate-700/70 sm:size-8 flex items-center justify-center rounded-full transition"
					aria-label="Go back"
					@click="$emit('back')"
				>
					<Icon name="tabler:arrow-left" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="size-7 hover:bg-gray-200/70 dark:hover:bg-slate-700/70 sm:size-8 flex items-center justify-center rounded-full transition"
					aria-label="Go forward"
					@click="$emit('forward')"
				>
					<Icon name="tabler:arrow-right" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="size-7 hover:bg-gray-200/70 dark:hover:bg-slate-700/70 sm:size-8 flex items-center justify-center rounded-full transition active:[&>svg]:animate-[spin_0.6s_ease-in-out]"
					aria-label="Refresh"
					@click="$emit('refresh')"
				>
					<Icon name="tabler:refresh" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="size-7 hover:bg-gray-200/70 dark:hover:bg-slate-700/70 sm:size-8 flex items-center justify-center rounded-full transition"
					aria-label="Go to home"
					@click="$emit('home')"
				>
					<Icon name="tabler:home" class="size-4" aria-hidden="true" />
				</button>
			</div>

			<div class="gap-2 bg-gray-200/70 px-3 py-1 text-xs dark:bg-slate-800/60 sm:flex-1 sm:px-4 sm:text-sm flex w-full items-center rounded-full">
				<Icon name="tabler:lock" class="text-green-600 dark:text-green-400" aria-hidden="true" />
				<span class="truncate">
					<slot name="address" />
				</span>
			</div>

			<button
				type="button"
				class="size-8 hover:bg-gray-200/70 dark:hover:bg-slate-700/70 sm:flex hidden items-center justify-center rounded-full transition"
				aria-label="Open menu"
			>
				<Icon name="tabler:dots-vertical" aria-hidden="true" />
			</button>
		</nav>

		<div class="flex flex-1 flex-col overflow-hidden">
			<slot />
		</div>
	</section>
</template>
