<script setup lang="ts">
defineProps<{ id: string; icon?: string; title?: string }>()
</script>

<template>
	<section
		:id="id"
		:aria-labelledby="title ? `${id}-title` : undefined"
		class="relative mx-auto flex h-full min-h-dvh w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-24 [content-visibility:auto] sm:gap-12 sm:px-8"
	>
		<header v-if="icon || title" class="flex w-full flex-col gap-3">
			<div class="flex w-full items-center gap-3 sm:gap-4">
				<Icon
					v-if="icon"
					:name="icon"
					class="shrink-0 text-3xl text-accent sm:text-4xl lg:text-5xl"
					role="img"
					:aria-label="`Icon for the section: ${title}`"
				/>
				<h2
					v-if="title"
					:id="`${id}-title`"
					class="text-balance bg-gradient-to-r from-accent to-accent-secondary bg-clip-text py-1 text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
				>
					{{ title }}
				</h2>
			</div>

			<div class="h-0.5 w-full rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent" aria-hidden="true" />
		</header>
		<slot />
	</section>
</template>
