<script setup lang="ts">
const themeStore = useThemeStore()

const canvasRef = ref<HTMLCanvasElement>()

const STAR_COUNT = 120

// Stars packed as [x, y, size, speed] to keep the render loop allocation-free.
const stars = new Float32Array(STAR_COUNT * 4)

let ctx: CanvasRenderingContext2D | null = null
let dpr = 1
let width = 0
let height = 0

let raf = 0
let lastTime = 0
let resizeScheduled = false

function resize() {
	width = innerWidth
	height = innerHeight

	const canvas = canvasRef.value
	if (!canvas || !ctx) return

	// Setting the bitmap size resets the transform, so re-apply the DPR scale.
	canvas.width = width * dpr
	canvas.height = height * dpr
	ctx.scale(dpr, dpr)
}

// dtFrames: elapsed time expressed in 60fps frames, so motion is refresh-rate independent.
function render(dtFrames: number) {
	if (!ctx) return

	ctx.clearRect(0, 0, width, height)
	ctx.fillStyle = themeStore.isLightMode ? 'rgba(15,23,42,0.8)' : '#ffffff'

	for (let i = 0; i < STAR_COUNT; i++) {
		const o = i * 4

		const x = stars[o]!
		let y = stars[o + 1]! + stars[o + 3]! * dtFrames
		const size = stars[o + 2]!

		if (y > height) {
			stars[o] = Math.random() * width
			y = -2
		}

		stars[o + 1] = y

		ctx.fillRect(x, y, size, size)
	}
}

function loop(now: number) {
	raf = requestAnimationFrame(loop)

	// Clamp so a backgrounded tab doesn't make stars jump on return.
	const dtFrames = lastTime ? Math.min((now - lastTime) / 16.667, 4) : 1
	lastTime = now

	render(dtFrames)
}

function onResize() {
	if (resizeScheduled) return
	resizeScheduled = true

	requestAnimationFrame(() => {
		resizeScheduled = false
		resize()
		if (!raf) render(0) // Static mode: repaint the frame the resize just cleared.
	})
}

onMounted(() => {
	const canvas = canvasRef.value
	if (!canvas) return

	ctx = canvas.getContext('2d', { desynchronized: true })
	if (!ctx) return

	dpr = Math.min(devicePixelRatio || 1, 1.5)
	resize()

	for (let i = 0; i < STAR_COUNT; i++) {
		const o = i * 4

		stars[o] = Math.random() * width
		stars[o + 1] = Math.random() * height
		stars[o + 2] = Math.random() * 1.5 + 0.2
		stars[o + 3] = Math.random() * 0.05 + 0.015
	}

	window.addEventListener('resize', onResize)

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		render(0)
		// Keep the static frame in sync with theme changes.
		watch(
			() => themeStore.isLightMode,
			() => render(0),
		)
	} else {
		raf = requestAnimationFrame(loop)
	}
})

onBeforeUnmount(() => {
	cancelAnimationFrame(raf)
	window.removeEventListener('resize', onResize)
})
</script>

<template>
	<div
		aria-hidden="true"
		class="fixed inset-0 overflow-hidden transition-colors duration-700"
		:class="themeStore.isLightMode ? 'bg-[linear-gradient(to_bottom,#f8fafc,#dbeafe)]' : 'bg-[linear-gradient(to_bottom,#020617,#000814)]'"
	>
		<div
			class="absolute inset-0 transition-opacity duration-700 [background-size:72px_72px]"
			:class="
				themeStore.isLightMode
					? 'opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)]'
					: 'opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]'
			"
		/>

		<div
			class="absolute left-[-10%] top-[-10%] size-[38rem] rounded-full blur-[100px] transition-colors duration-700"
			:class="themeStore.isLightMode ? 'bg-pink-400/20' : 'bg-fuchsia-700/10'"
		/>

		<div
			class="absolute bottom-[-20%] right-[-10%] size-[42rem] rounded-full blur-[100px] transition-colors duration-700"
			:class="themeStore.isLightMode ? 'bg-cyan-300/30' : 'bg-cyan-700/10'"
		/>

		<canvas ref="canvasRef" class="absolute inset-0 h-full w-full [transform:translateZ(0)]" />

		<div
			class="absolute inset-0 transition-colors duration-700"
			:class="
				themeStore.isLightMode
					? 'bg-[radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,0.65))]'
					: 'bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.78))]'
			"
		/>
	</div>
</template>
