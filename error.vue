<template>
  <main class="grid min-h-screen px-6 py-24 bg-gradient-to-r from-purple-600 to-pink-500 place-items-center sm:py-32 lg:px-8">
    <div class="p-12 text-center border-2 rounded-lg md:p-16 border-dark bg-secondary-light">
      <p class="font-semibold tracking-wide text-purple-600 text-9xl">
        Oops!
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-800">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div class="flex items-center justify-center mt-10 gap-x-6">
        <a :href="$config.public.BASE_URL" class="rounded-md bg-purple-600 px-3.5 py-2.5 text-light shadow-xl hover:bg-purple-700" role="button">
          Go back to the main page
        </a>
      </div>
    </div>
  </main>
</template>
