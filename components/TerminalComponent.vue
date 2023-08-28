<template>
  <div class="flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg">
    <div class="bg-primary-light dark:bg-primary-dark flex items-center min-h-[30px] px-2 py-0">
      <div class="flex">
        <div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#ff5f57]" />
        <div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#ffbd2e]" />
        <div class="w-2.5 h-2.5 mr-1.5 rounded-[50%] bg-[#28c940]" />
      </div>
    </div>
    <div class="flex flex-col flex-grow max-h-full p-4 overflow-y-auto text-normal md:text-xl bg-secondary-light dark:bg-secondary-dark">
      <slot />
    </div>
  </div>
</template>
