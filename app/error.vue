<template>
	<main
		class="px-6 py-24 sm:py-32 lg:px-8 bg-gray-950 grid min-h-dvh place-items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(120,119,198,0.3),transparent)]"
	>
		<div
			class="max-w-xl p-10 shadow-2xl sm:p-12 md:p-16 border-accent/50 rounded-2xl bg-secondary-dark/50 backdrop-blur-lg w-full border-4 text-center"
		>
			<p class="font-extrabold text-7xl sm:text-8xl md:text-9xl from-accent to-accent-secondary bg-gradient-to-r bg-clip-text text-transparent">Oops!</p>
			<h1 class="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-accent-secondary">Page not found</h1>
			<p class="mt-4 text-base leading-relaxed text-light sm:text-lg">
				Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or did not exist in the first place.
			</p>
			<div class="mt-10 flex justify-center">
				<a
					:href="`${$config.public.BASE_URL}`"
					class="gap-2 px-5 py-3 text-white rounded-md shadow-md bg-accent hover:bg-accent-dark focus:ring-accent inline-flex items-center transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
				>
					<Icon name="tabler:arrow-bar-to-left" />
					<span>Return to main page</span>
				</a>
			</div>
		</div>
	</main>
</template>
