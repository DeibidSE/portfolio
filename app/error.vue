<template>
	<main
		class="grid min-h-dvh place-items-center bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(120,119,198,0.3),transparent)] px-6 py-24 sm:py-32 lg:px-8"
	>
		<div
			class="w-full max-w-xl rounded-3xl border border-white/10 bg-secondary-dark/60 p-8 text-center shadow-[0_18px_50px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-12 md:p-16"
		>
			<p class="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl md:text-9xl">Oops!</p>
			<h1 class="mt-6 text-3xl font-bold tracking-tight text-accent-secondary sm:text-4xl md:text-5xl">Page not found</h1>
			<p class="mx-auto mt-4 max-w-md text-base leading-relaxed text-light/80 sm:text-lg">
				Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or did not exist in the first place.
			</p>
			<div class="mt-10 flex justify-center">
				<a
					:href="`${$config.public.BASE_URL}`"
					class="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
				>
					<Icon name="tabler:arrow-bar-to-left" />
					<span>Return to main page</span>
				</a>
			</div>
		</div>
	</main>
</template>
