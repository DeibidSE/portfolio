<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>

<template>
	<footer class="relative bottom-4 w-full">
		<div class="glass-surface mx-auto w-[95%] max-w-3xl rounded-2xl">
			<div class="flex items-center justify-between gap-6 px-6 py-3">
				<Icon name="my-icon:mainlogo" class="h-8 w-auto object-contain" aria-hidden="true" />

				<nav class="flex items-center justify-center gap-1" aria-label="Social links">
					<a
						v-for="link in socialLinks"
						:key="link.name"
						:href="link.url"
						target="_blank"
						rel="noopener noreferrer"
						class="focus-ring flex size-9 items-center justify-center rounded-full text-dark/60 transition-all hover:-translate-y-0.5 hover:bg-accent/10 hover:text-accent dark:text-light/60 dark:hover:bg-white/10 dark:hover:text-accent-light"
						:aria-label="link.name"
					>
						<Icon :name="link.icon" class="size-5" aria-hidden="true" />
					</a>
				</nav>
			</div>
		</div>
	</footer>
</template>
