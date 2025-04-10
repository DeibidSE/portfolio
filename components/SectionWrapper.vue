<template>
	<section
		:id="id"
		:aria-labelledby="title ? `${id}-title` : undefined"
		class="container flex flex-col items-center justify-center h-full gap-8 px-8 py-20 mx-auto content-visibility-auto"
	>
		<header
			v-if="icon || title"
			class="flex flex-col items-center w-full gap-4"
		>
			<div class="flex items-center w-full gap-4">
				<Icon
					v-if="icon"
					:name="icon"
					class="text-3xl md:text-4xl lg:text-5xl text-accent"
					role="img"
					:aria-label="`Icon for the section: ${title}`"
				/>
				<h2
					v-if="title"
					:id="`${id}-title`"
					class="py-1 text-3xl font-bold tracking-wide text-transparent md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-accent to-accent-secondary"
				>
					{{ title }}
				</h2>
			</div>

			<div
				class="w-full h-1 shadow-lg bg-gradient-to-r from-accent to-transparent"
				aria-hidden="true"
			/>
		</header>
		<slot />
	</section>
</template>

<script setup lang="ts">
defineProps<{ id: string, icon?: string, title?: string }>()
</script>
