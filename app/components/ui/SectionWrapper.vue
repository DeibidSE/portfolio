<script setup lang="ts">
// viewTimelineName gives each section its own timeline so the navbar can follow
// it. It gets hoisted up to #app with timeline-scope over in app.vue.
defineProps<{ id: string; icon?: string; title?: string }>()
</script>

<template>
	<section
		:id="id"
		:aria-labelledby="title ? `${id}-title` : undefined"
		:style="{ viewTimelineName: `--sec-${id}` }"
		class="relative mx-auto flex h-full min-h-dvh w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-24 [content-visibility:auto] sm:gap-12 sm:px-8"
	>
		<div
			v-if="id !== 'introduction'"
			class="absolute inset-x-0 top-0 mx-auto h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-accent/30 to-transparent"
			aria-hidden="true"
		/>

		<header v-if="icon || title" class="flex w-full flex-col gap-3">
			<div class="flex w-full items-center gap-3 sm:gap-4">
				<Icon
					v-if="icon"
					:name="icon"
					class="text-glow-accent shrink-0 text-3xl text-accent dark:text-accent-light sm:text-4xl lg:text-5xl"
					role="img"
					:aria-label="`Icon for the section: ${title}`"
				/>
				<h2
					v-if="title"
					:id="`${id}-title`"
					class="text-glow-accent text-balance py-1 text-3xl font-bold tracking-tight text-accent dark:text-accent-light sm:text-4xl lg:text-5xl"
				>
					{{ title }}
				</h2>
			</div>

			<div class="h-0.5 w-full rounded-full bg-gradient-to-r from-accent via-accent/40 to-transparent" aria-hidden="true" />
		</header>
		<slot />
	</section>
</template>
