<script setup lang="ts">
defineEmits<{ (e: 'back' | 'forward' | 'refresh' | 'home'): void }>()
</script>

<template>
	<section class="glass-surface flex h-full w-full flex-1 flex-col overflow-hidden rounded-3xl" role="region" aria-label="Browser mock">
		<header class="flex items-center border-b border-slate-900/5 bg-black/[0.03] px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03] sm:px-4 sm:py-3">
			<div class="flex items-center gap-2" aria-hidden="true">
				<span class="size-3 rounded-full bg-[#ff5f57]" />
				<span class="size-3 rounded-full bg-[#ffbd2e]" />
				<span class="size-3 rounded-full bg-[#28c940]" />
			</div>
		</header>

		<nav
			class="flex flex-col gap-2 border-b border-slate-900/5 bg-black/[0.02] px-2 py-2 text-gray-700 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-300 sm:flex-row sm:items-center sm:gap-3 sm:px-3"
			aria-label="Browser navigation"
		>
			<div class="flex items-center gap-1">
				<button
					type="button"
					class="focus-ring flex size-8 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10"
					aria-label="Go back"
					@click="$emit('back')"
				>
					<Icon name="tabler:arrow-left" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="focus-ring flex size-8 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10"
					aria-label="Go forward"
					@click="$emit('forward')"
				>
					<Icon name="tabler:arrow-right" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="focus-ring flex size-8 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10 active:[&>svg]:animate-[spin_0.6s_ease-in-out]"
					aria-label="Refresh"
					@click="$emit('refresh')"
				>
					<Icon name="tabler:refresh" class="size-4" aria-hidden="true" />
				</button>

				<button
					type="button"
					class="focus-ring flex size-8 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10"
					aria-label="Go to home"
					@click="$emit('home')"
				>
					<Icon name="tabler:home" class="size-4" aria-hidden="true" />
				</button>
			</div>

			<div class="flex w-full items-center gap-2 rounded-full bg-black/5 px-3 py-1.5 text-xs dark:bg-white/5 sm:flex-1 sm:px-4 sm:text-sm">
				<Icon name="tabler:lock" class="shrink-0 text-green-600 dark:text-green-400" aria-hidden="true" />
				<span class="truncate">
					<slot name="address" />
				</span>
			</div>

			<button
				type="button"
				class="focus-ring hidden size-8 items-center justify-center rounded-full transition hover:bg-black/5 dark:hover:bg-white/10 sm:flex"
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
