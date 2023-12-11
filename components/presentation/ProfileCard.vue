<template>
  <div class="group [perspective:1000px]" aria-label="Profile Card">
    <div class="relative w-full h-full transition-all duration-500 shadow-xl rounded-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="inset-0 gap-4 p-4 shadow-xl md:p-6 dark:bg-primary-dark bg-primary-light rounded-xl shadow-black/40">
        <img
          :src="$config.public.BASE_URL + profileInfo.imagePath"
          alt="Photo of the programmer of this portfolio"
          class="object-cover rounded-xl aspect-[4/5] max-h-[75vh] w-auto"
          loading="lazy"
          role="img"
          aria-label="Photo of the programmer"
          width="530px"
          height="662px"
        >
      </div>
      <div class="absolute inset-0 w-full h-full p-8 text-center rounded-xl dark:bg-primary-dark bg-primary-light [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex flex-col items-center justify-center min-h-full">
          <Icon name="MainIcon" class="w-full h-auto" role="img" aria-label="Profile Icon" />
          <div class="flex flex-row items-center gap-12 mx-auto">
            <TooltipComponent v-for="(info, key) in profileInfo.socialLinks" :key="key" :tooltip-text="info.name" position="top">
              <a
                :href="info.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Link to my ${info.name}`"
                class="flex-grow text-2xl text-gray-400 hover:text-purple-500"
              >
                <Icon :name="info.icon" class="transition-transform w-7 h-7 hover:scale-150" role="link" />
              </a>
            </TooltipComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type UserProfileCard } from '~/types/types.d'

defineProps({
  profileInfo: {
    type: Object as () => UserProfileCard,
    default: () => ({})
  }
})
</script>
