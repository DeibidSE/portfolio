<template>
  <div class="flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg" role="region" aria-label="Terminal component">
    <div class="flex items-center p-3 bg-primary-light dark:bg-primary-dark">
      <div class="flex gap-[6px]">
        <div class="w-2.5 h-2.5 rounded-[50%] bg-[#ff5f57]" role="button" aria-label="Close terminal button" />
        <div class="w-2.5 h-2.5 rounded-[50%] bg-[#ffbd2e]" role="button" aria-label="Minimize terminal button" />
        <div class="w-2.5 h-2.5 rounded-[50%] bg-[#28c940]" role="button" aria-label="Maximize terminal button" />
      </div>
    </div>
    <div class="flex flex-col flex-grow max-h-full p-4 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark">
      <slot />
    </div>
  </div>
</template>
