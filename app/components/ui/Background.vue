<script setup lang="ts">
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

	ctx.fillStyle = themeStore.isLightMode ? 'rgba(79,70,229,.75)' : 'rgba(255,255,255,.9)'

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

	dpr = Math.min(devicePixelRatio || 1, 1.5)

	resize()

	for (let i = 0; i < STAR_COUNT; i++) {
		const o = i * 3

		stars[o] = Math.random() * width
		stars[o + 1] = Math.random() * height
		stars[o + 2] = Math.random() * 2 + 0.8
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
	<div aria-hidden="true" class="fixed inset-0 overflow-hidden transition-colors duration-700">
		<div class="absolute inset-0" :class="themeStore.isLightMode ? 'bg-[#f8f9fc]' : 'bg-[#07070b]'" />

		<div
			class="absolute inset-0"
			:class="
				themeStore.isLightMode
					? 'bg-[radial-gradient(circle_at_top,rgba(96,165,250,.16)_0%,rgba(129,140,248,.08)_40%,transparent_78%)]'
					: 'bg-[radial-gradient(circle_at_top,rgba(37,99,235,.30)_0%,rgba(124,31,224,.18)_35%,transparent_80%)]'
			"
		/>

		<div
			class="absolute -top-52 left-1/2 h-1/3 w-2/3 -translate-x-1/2 rounded-full blur-3xl"
			:class="
				themeStore.isLightMode
					? 'via-blue-300/16 to-indigo-300/18 bg-gradient-to-r from-sky-300/20'
					: 'bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20'
			"
		/>

		<canvas ref="canvasRef" class="absolute inset-0 h-full w-full [transform:translateZ(0)]" />
	</div>
</template>
