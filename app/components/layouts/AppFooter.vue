<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>

<template>
	<footer class="bottom-4 relative w-full">
		<div class="max-w-3xl rounded-2xl border-accent/40 bg-secondary-light/50 shadow-xl backdrop-blur-lg dark:bg-slate-900/50 mx-auto w-[95%] border">
			<div class="gap-6 px-6 py-3 flex items-center justify-between">
				<Icon name="my-icon:mainlogo" class="h-8 w-auto object-contain" aria-hidden="true" />

				<nav class="gap-4 flex items-center justify-center" aria-label="Social links">
					<a
						v-for="social in socialLinks"
						:key="social.name"
						:href="social.url"
						target="_blank"
						rel="noopener noreferrer"
						class="text-dark/60 hover:-translate-y-0.5 hover:text-accent dark:text-light/60 transition-all"
						:aria-label="social.name"
					>
						<Icon :name="social.icon" class="size-5" aria-hidden="true" />
					</a>
				</nav>
			</div>
		</div>
	</footer>
</template>
