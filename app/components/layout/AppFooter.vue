<template>
	<footer class="site-footer relative isolate w-full">
		<div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
			<Icon name="my-icon:mainlogo" class="h-8 w-auto object-contain" aria-hidden="true" />

			<nav class="flex items-center gap-1" aria-label="Social links">
				<a
					v-for="link in socialLinks"
					:key="link.name"
					:href="link.url"
					:target="link.url.startsWith('mailto:') ? undefined : '_blank'"
					rel="noopener noreferrer"
					class="focus-ring flex size-9 items-center justify-center rounded-full text-dark/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10 hover:text-accent dark:text-light/60 dark:hover:bg-white/10 dark:hover:text-accent-light"
					:aria-label="link.name"
				>
					<Icon :name="link.icon" class="size-5" aria-hidden="true" />
				</a>
			</nav>
		</div>
	</footer>
</template>

<style scoped>
/*
 * Same idea as the navbar veil, just flipped. A soft gradient on ::before that
 * blends the page content into the footer. The bar fades from opaque to transparent
 * going down, the footer fades from transparent to opaque going up. The veil reaches
 * 2.5rem above the row (top: -2.5rem) so content blends in, with a matching mask on
 * the blur so it fades out toward the top instead of stopping at a hard line. No
 * border and no animation, the footer is static.
 */
.site-footer::before {
	content: '';
	position: absolute;
	inset: 0;
	top: -2.5rem;
	z-index: -1;
	pointer-events: none;

	background-image: linear-gradient(
		to bottom,
		rgb(96 165 250 / 0) 0%,
		rgb(96 165 250 / 0.05) 45%,
		rgb(129 140 248 / 0.1) 75%,
		rgb(129 140 248 / 0.14) 100%
	);

	-webkit-backdrop-filter: blur(12px) saturate(120%);
	backdrop-filter: blur(12px) saturate(120%);

	-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 65%, black 100%);
	mask-image: linear-gradient(to bottom, transparent 0%, black 65%, black 100%);
}
</style>
