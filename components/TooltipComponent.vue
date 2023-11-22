<template>
  <span
    class="relative before:content-[''] before:z-[1001] before:border-[5px] before:border-solid before:border-transparent after:content-[attr(tooltipText)] after:text-center after:whitespace-nowrap after:min-w-[3em] after:max-w-xs after:overflow-hidden after:text-ellipsis after:shadow-sm after:opacity-30 after:text-white after:z-[1000] after:p-2 after:rounded-md"
    :tooltipText="tooltipText"
    :position="position"
    role="tooltip"
    aria-live="polite"
    aria-atomic="true"
  >
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  props: {
    tooltipText: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style scoped lang="scss">
  span {
    & > * {
      @apply inline-block;
    }

    &::before,
    &::after {
      @apply text-[0.9em] leading-none select-none pointer-events-none absolute hidden opacity-0;
    }
    &::after {
      @apply bg-black;
    }
    &:hover::before,
    &:hover::after {
      @apply block;
    }

    /* Position: TOP */
    &:not([position])::before,
    &[position^="top"]::before {
      @apply border-t-black border-b-0 bottom-full;
    }
    &:not([position])::after,
    &[position^="top"]::after {
      @apply bottom-[calc(100%_+_5px)];
    }
    &:not([position])::before,
    &:not([position])::after,
    &[position^="top"]::before,
    &[position^="top"]::after {
      @apply -translate-x-2/4 translate-y-[-0.5em] left-2/4;
    }

    /* Position: BOTTOM */
    &[position^="bottom"]::before {
      @apply border-t-0 border-b-black top-[105%];
    }
    &[position^="bottom"]::after {
      @apply top-[calc(105%_+_5px)];
    }
    &[position^="bottom"]::before,
    &[position^="bottom"]::after {
      @apply -translate-x-2/4 translate-y-[0.5em] left-2/4;
    }

    /* Position: LEFT */
    &[position^="left"]::before {
      @apply left-[calc(0em_-_5px)] translate-x-[-0.5em] -translate-y-2/4 border-l-black border-r-0 top-2/4;
    }
    &[position^="left"]::after {
      @apply translate-x-[-0.5em] -translate-y-2/4 right-[calc(100%_+_5px)] top-2/4;
    }

    /* Position: RIGHT */
    &[position^="right"]::before {
      @apply right-[calc(0em_-_5px)] translate-x-[0.5em] -translate-y-2/4 border-l-0 border-r-black top-2/4;
    }
    &[position^="right"]::after {
      @apply translate-x-[0.5em] -translate-y-2/4 left-[calc(100%_+_5px)] top-2/4;
    }

    &:not([position]):hover::before,
    &:not([position]):hover::after,
    &[position^="top"]:hover::before,
    &[position^="top"]:hover::after,
    &[position^="bottom"]:hover::before,
    &[position^="bottom"]:hover::after {
      @apply animate-[tooltip-y_300ms_ease-out_forwards];
    }
    &[position^="left"]:hover::before,
    &[position^="left"]:hover::after,
    &[position^="right"]:hover::before,
    &[position^="right"]:hover::after {
      @apply animate-[tooltip-x_300ms_ease-out_forwards];
    }
  }

  [tooltipText=""]::before,
  [tooltipText=""]::after {
    @apply hidden;
  }

  @keyframes tooltip-y {
    to {
      @apply opacity-90 -translate-x-2/4 translate-y-0;
    }
  }
  @keyframes tooltip-x {
    to {
      @apply opacity-90 translate-x-0 -translate-y-2/4;
    }
  }
</style>
