<template>
	<footer class="flex items-center justify-center w-full gap-2 p-6 mx-auto md:gap-6 backdrop-blur-lg shadow-top">
		<div class="w-full h-1 bg-gradient-to-r from-transparent via-accent-secondary to-accent" />
		<span class="text-2xl md:text-4xl"> &gt; </span>
		<nuxt-icon
			name="mainlogo"
			filled
			alt="Main logo of the app"
			class="w-auto h-8 md:h-10"
		/>
		<span class="text-2xl md:text-4xl"> &lt; </span>
		<div class="w-full h-1 bg-gradient-to-l from-transparent via-accent-secondary to-accent" />
	</footer>
</template>
