<template>
	<main class="min-h-dvh grid place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(120,119,198,0.3),transparent)]">
		<div class="w-full max-w-xl p-10 text-center border-4 shadow-2xl sm:p-12 md:p-16 border-accent/50 rounded-2xl bg-secondary-dark/50 backdrop-blur-lg">
			<p class="font-extrabold text-transparent text-7xl sm:text-8xl md:text-9xl bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
				Oops!
			</p>
			<h1 class="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-accent-secondary">
				Page not found
			</h1>
			<p class="mt-4 text-base leading-relaxed text-light sm:text-lg">
				Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or did not exist in the first place.
			</p>
			<div class="flex justify-center mt-10">
				<a
					:href="`${$config.public.BASE_URL}`"
					class="inline-flex items-center gap-2 px-5 py-3 text-white transition rounded-md shadow-md bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
				>
					<Icon name="tabler:arrow-bar-to-left" />
					<span>Return to main page</span>
				</a>
			</div>
		</div>
	</main>
</template>
