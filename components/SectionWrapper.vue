<template>
	<section
		:id="id"
		:aria-label="id"
		class="flex flex-col items-center justify-center gap-8 pt-20 px-8 container lg:max-w-screen-lg xl:max-w-screen-xl mx-auto [content-visibility:auto] h-full"
	>
		<header
			v-if="icon && title"
			class="flex flex-col items-center w-full gap-4"
		>
			<div class="flex items-center w-full gap-4">
				<nuxt-icon
					v-if="icon"
					:name="icon"
					filled
					class="text-3xl md:text-4xl lg:text-5xl text-accent"
					role="img"
					:aria-label="`Icon representing the section titled ${title}`"
					:alt="`Icon (${icon}) for the title of the section`"
				/>
				<h2
					v-if="title"
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
