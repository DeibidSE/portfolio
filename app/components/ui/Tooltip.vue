<script setup lang="ts">
defineProps<{ tooltipText: string; position?: string }>()
</script>

<template>
	<span
		class="after:max-w-xs after:shadow-sm after:text-black after:dark:text-white after:p-2 after:rounded-md after:dark:bg-zinc-900 after:dark:border-white after:bg-zinc-100 after:border-black relative content-center before:z-[1001] before:border-[5px] before:border-solid before:border-transparent before:content-[''] after:z-[1000] after:min-w-[3em] after:overflow-hidden after:border after:text-center after:text-ellipsis after:whitespace-nowrap after:opacity-30 after:content-[attr(tooltipText)]"
		:tooltipText="tooltipText"
		:position="position ?? 'top'"
		role="tooltip"
		:aria-label="tooltipText"
		aria-live="polite"
		aria-atomic="true"
	>
		<slot />
	</span>
</template>

<style scoped>
span {
	& > * {
		@apply inline-flex h-full items-center;
	}

	&::before,
	&::after {
		@apply text-sm ease-out pointer-events-none absolute hidden leading-none opacity-0 transition-opacity duration-200 select-none;
	}

	&:hover::before,
	&:hover::after {
		@apply block opacity-90;
	}

	/* Position: TOP */
	&:not([position])::after,
	&[position^='top']::after {
		@apply bottom-[calc(100%_+_5px)];
	}
	&:not([position])::before,
	&:not([position])::after,
	&[position^='top']::before,
	&[position^='top']::after {
		@apply left-2/4 -translate-x-2/4 translate-y-[-0.5em];
	}

	/* Position: BOTTOM */
	&[position^='bottom']::after {
		@apply top-[calc(100%_+_5px)];
	}
	&[position^='bottom']::before,
	&[position^='bottom']::after {
		@apply left-2/4 -translate-x-2/4 translate-y-[0.5em];
	}

	/* Position: LEFT */
	&[position^='left']::after {
		@apply top-2/4 right-[calc(100%_+_5px)] translate-x-[-0.5em] -translate-y-2/4;
	}

	/* Position: RIGHT */
	&[position^='right']::after {
		@apply top-2/4 left-[calc(100%_+_5px)] translate-x-[0.5em] -translate-y-2/4;
	}

	&:not([position]):hover::before,
	&:not([position]):hover::after,
	&[position^='top']:hover::before,
	&[position^='top']:hover::after,
	&[position^='bottom']:hover::before,
	&[position^='bottom']:hover::after {
		@apply animate-[tooltip-y_300ms_ease-out_forwards];
	}
	&[position^='left']:hover::before,
	&[position^='left']:hover::after,
	&[position^='right']:hover::before,
	&[position^='right']:hover::after {
		@apply animate-[tooltip-x_300ms_ease-out_forwards];
	}
}

[tooltipText='']::before,
[tooltipText='']::after {
	@apply hidden;
}

@keyframes tooltip-y {
	to {
		@apply translate-y-0 -translate-x-2/4 opacity-90;
	}
}
@keyframes tooltip-x {
	to {
		@apply translate-x-0 -translate-y-2/4 opacity-90;
	}
}
</style>
