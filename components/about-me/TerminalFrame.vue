<template>
	<div
		v-if="!isClosed"
		class="flex flex-col overflow-hidden rounded-lg"
		:class="isMinimized ? 'w-full md:w-2/4 max-h-64 md:max-h-96 text-xs' : 'w-full h-full text-normal md:text-xl'"
		role="region"
		aria-label="Terminal component"
		:aria-expanded="!isMinimized"
	>
		<div class="flex items-center w-full p-3 bg-gray-100 shadow-xl dark:bg-primary-dark">
			<div class="inline-flex gap-2">
				<button
					class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"
					aria-label="Close terminal button"
					@click="handleClose"
				/>
				<button
					class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"
					aria-label="Minimize terminal button"
					@click="toggleMinimize"
				/>
				<button
					class="w-2.5 h-2.5 rounded-full bg-[#28c940]"
					aria-label="Maximize terminal button"
					@click="toggleFullscreen"
				/>
			</div>
		</div>

		<div
			class="flex flex-col p-6 overflow-y-auto bg-secondary-light dark:bg-secondary-dark"
		>
			<slot />
		</div>
	</div>

	<div
		v-else
		class="flex items-center justify-center w-full h-full overflow-hidden rounded-lg"
	>
		<h2
			class="rotate-90 cursor-pointer text-9xl"
			aria-label="Terminal is closed"
			@click="handleReopen"
		>
			:(
		</h2>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ buttonsClickable: boolean }>()

const isClosed = ref(false)
const isMinimized = ref(false)

const handleClose = () => {
	if (!props.buttonsClickable) { return }
	isClosed.value = true
}

const handleReopen = () => {
	isClosed.value = false
}

const toggleMinimize = () => {
	if (!props.buttonsClickable) { return }
	isMinimized.value = !isMinimized.value
}

const toggleFullscreen = () => {
	if (!props.buttonsClickable || !document.fullscreenEnabled) { return }

	const element = document.documentElement
	if (!document.fullscreenElement) {
		element.requestFullscreen()
	} else {
		document.exitFullscreen()
	}
}
</script>
