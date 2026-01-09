<script setup lang="ts">
defineProps<{ id: string; icon?: string; title?: string }>()
</script>

<template>
	<section
		:id="id"
		:aria-labelledby="title ? `${id}-title` : undefined"
		class="max-w-7xl sm:px-8 gap-8 px-8 py-20 relative mx-auto flex h-full min-h-dvh w-full flex-col items-center justify-center [content-visibility:auto]"
	>
		<header v-if="icon || title" class="gap-4 flex w-full flex-col items-center">
			<div class="gap-4 flex w-full items-center">
				<Icon v-if="icon" :name="icon" class="text-3xl md:text-4xl lg:text-5xl text-accent" role="img" :aria-label="`Icon for the section: ${title}`" />
				<h2
					v-if="title"
					:id="`${id}-title`"
					class="py-1 text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl from-accent to-accent-secondary bg-gradient-to-r bg-clip-text text-transparent"
				>
					{{ title }}
				</h2>
			</div>

			<div class="h-1 shadow-lg from-accent w-full bg-gradient-to-r to-transparent" aria-hidden="true" />
		</header>
		<slot />
	</section>
</template>
