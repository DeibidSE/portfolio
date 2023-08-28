<template>
  <div class="flex flex-col gap-6 p-6 shadow-xl bg-primary-light dark:bg-primary-dark rounded-xl">
    <img :src="image" alt="Photo of the programmer of this portfolio" class="w-full h-auto rounded-xl">
    <div class="flex flex-row items-center gap-12 mx-auto">
      <TooltipComponent tooltip-text="LinkedIn" position="top">
        <a href="https://www.linkedin.com/in/davidsimon98/" target="_blank" rel="noopener noreferrer" aria-label="Link to my LinkedIn" class="flex-grow text-2xl text-gray-400 hover:text-[#0A66C2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            aria-hidden="true"
            class="hover:scale-150"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
          </svg>
        </a>
      </TooltipComponent>
      <TooltipComponent tooltip-text="Github" position="top">
        <a href="https://github.com/DeibidSE" target="_blank" rel="noopener noreferrer" aria-label="Link to my GitHub profile" class="flex-grow text-2xl text-gray-400 dark:hover:text-white hover:text-[#171515]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            aria-hidden="true"
            class="hover:scale-150"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z" />
          </svg>
        </a>
      </TooltipComponent>
      <TooltipComponent tooltip-text="Email" position="top">
        <a href="mailto:davidsimon98@outlook.com" aria-label="Send me an email" class="flex-grow text-2xl text-gray-400 hover:text-[#F84A3D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            aria-hidden="true"
            class="hover:scale-150"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z" />
          </svg>
        </a>
      </TooltipComponent>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      default: '/MyPortfolio/images/undefined.webp'
    }
  }
}
</script>
