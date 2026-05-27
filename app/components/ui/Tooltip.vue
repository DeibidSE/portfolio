<script setup lang="ts">
defineProps<{ tooltipText: string; position?: string }>()
</script>

<template>
	<span
		class="relative content-center before:z-[1001] before:border-[5px] before:border-solid before:border-transparent before:content-[''] after:z-[1000] after:min-w-[3em] after:max-w-xs after:overflow-hidden after:text-ellipsis after:whitespace-nowrap after:rounded-md after:border after:border-black after:bg-zinc-100 after:p-2 after:text-center after:text-black after:opacity-30 after:shadow-sm after:content-[attr(tooltipText)] after:dark:border-white after:dark:bg-zinc-900 after:dark:text-white"
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
		@apply pointer-events-none absolute hidden select-none text-sm leading-none opacity-0 transition-opacity duration-200 ease-out;
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
		@apply right-[calc(100%_+_5px)] top-2/4 -translate-y-2/4 translate-x-[-0.5em];
	}

	/* Position: RIGHT */
	&[position^='right']::after {
		@apply left-[calc(100%_+_5px)] top-2/4 -translate-y-2/4 translate-x-[0.5em];
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
		@apply -translate-x-2/4 translate-y-0 opacity-90;
	}
}
@keyframes tooltip-x {
	to {
		@apply -translate-y-2/4 translate-x-0 opacity-90;
	}
}
</style>
