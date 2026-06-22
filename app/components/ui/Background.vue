<script setup lang="ts">
/**
 * Decorative starfield on a <canvas>. The stars don't move: we draw them once on
 * mount and only redraw on resize or theme change. No animation loop, so it's
 * cheap to leave running behind the whole page.
 */
const themeStore = useThemeStore()

const canvasRef = ref<HTMLCanvasElement>()

const STAR_COUNT = 120

// Star data packed flat, 3 slots each: [x, y, size].
const stars = new Float32Array(STAR_COUNT * 3)

let ctx: CanvasRenderingContext2D | null = null
let dpr = 1
let width = 0
let height = 0

let resizeScheduled = false

function resize() {
	width = innerWidth
	height = innerHeight

	const canvas = canvasRef.value
	if (!canvas || !ctx) return

	canvas.width = width * dpr
	canvas.height = height * dpr

	ctx.setTransform(1, 0, 0, 1, 0, 0)
	ctx.scale(dpr, dpr)
}

function render() {
	if (!ctx) return

	ctx.clearRect(0, 0, width, height)

	ctx.fillStyle = themeStore.isLightMode ? 'rgba(80,60,140,0.45)' : 'rgba(199,191,247,0.85)'

	for (let i = 0; i < STAR_COUNT; i++) {
		const o = i * 3

		ctx.fillRect(stars[o]!, stars[o + 1]!, stars[o + 2]!, stars[o + 2]!)
	}
}

function onResize() {
	if (resizeScheduled) return

	resizeScheduled = true

	requestAnimationFrame(() => {
		resizeScheduled = false
		resize()
		render()
	})
}

onMounted(() => {
	const canvas = canvasRef.value
	if (!canvas) return

	ctx = canvas.getContext('2d', {
		desynchronized: true,
	})

	if (!ctx) return

	// Cap the pixel ratio at 1.5. Past that the extra pixels just cost fill time and you can't tell the difference on dots this small.
	dpr = Math.min(devicePixelRatio || 1, 1.5)

	resize()

	for (let i = 0; i < STAR_COUNT; i++) {
		const o = i * 3

		stars[o] = Math.random() * width
		stars[o + 1] = Math.random() * height
		stars[o + 2] = Math.random() * 1.5 + 0.2
	}

	render()

	window.addEventListener('resize', onResize)

	watch(
		() => themeStore.isLightMode,
		() => render(),
	)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>

<template>
	<div
		aria-hidden="true"
		class="fixed inset-0 overflow-hidden transition-colors duration-700"
		:class="themeStore.isLightMode ? 'bg-[linear-gradient(to_bottom,#f7f8fc,#eef0f8)]' : 'bg-[linear-gradient(to_bottom,#0b0b10,#08080c)]'"
	>
		<canvas ref="canvasRef" class="absolute inset-0 h-full w-full [transform:translateZ(0)]" />
	</div>
</template>
