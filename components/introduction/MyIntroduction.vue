<template>
  <section
    :id="sectionId"
    class="min-h-screen bg-primary-light dark:bg-primary-dark"
    :aria-label="sectionId"
  >
    <div class="flex flex-col items-center justify-center w-full h-screen max-w-screen-lg mx-auto">
      <div class="flex items-end justify-center w-full h-full p-5 overflow-hidden sm:p-6">
        <h1 class="w-full text-4xl font-bold text-center sm:text-5xl md:text-7xl">
          {{ sectionData.whoAmI || '' }}
        </h1>
      </div>
      <div class="flex items-start justify-center w-full h-full p-5 overflow-hidden sm:p-6">
        <h2 ref="typingtext" class="inline-block text-2xl font-bold text-center text-purple-500 cursor-default sm:text-4xl md:text-5xl animate-blinking-caret">
          {{ txt || '' }}
        </h2>
      </div>
    </div>
    <div class="absolute bottom-0 w-full py-4 text-center">
      <div class="flex flex-col animate-bounce text-dark dark:text-light">
        <span class="w-full text-xs sm:text-sm">{{ sectionData.scrollDown || '' }}</span>
        <Icon
          name="uil:angle-double-down"
          class="self-center text-4xl cursor-pointer hover:text-purple-500"
          role="button"
          aria-label="Scroll down"
          @click="scrollDown"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type PersonalIntroduction } from '~/types/types.d'

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({})
  }
})

const txt = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingtextElement = ref<HTMLElement | null>(null)

const sectionTitle = computed<string>(() => Object.keys(props.sectionData).toString() || '')
const sectionId = computed<string>(() => sectionTitle.value.toLowerCase().replace(/\s+/g, '-'))
const sectionData = computed<PersonalIntroduction>(() => props.sectionData[sectionTitle.value] || {})

onMounted(() => {
  typingtextElement.value = typingtextElement as unknown as HTMLElement
  tick()
})

const tick = () => {
  const htmlElement = typingtextElement.value
  const fullTxt = sectionData.value.job || ''

  if (htmlElement && fullTxt.length > 0) {
    if (isDeleting.value) {
      txt.value = fullTxt.substring(0, txt.value.length - 1)
    } else {
      txt.value = fullTxt.substring(0, txt.value.length + 1)
    }

    htmlElement.textContent = txt.value

    let pause = 200 - Math.random() * 100

    if (isDeleting.value) {
      pause /= 2
    }

    if (!isDeleting.value && txt.value === fullTxt) {
      pause = 2000
      isDeleting.value = true
    } else if (isDeleting.value && txt.value === '') {
      isDeleting.value = false
      loopNum.value++
      pause = 500
    }

    setTimeout(tick, pause)
  } else {
    txt.value = fullTxt
  }
}

const scrollDown = () => {
  const bodySections = document.querySelectorAll('section')
  const headerElement = document.getElementById('header')
  const headerHeight = headerElement ? headerElement.offsetHeight : 0

  if (bodySections && bodySections.length >= 2) {
    const secondSection = bodySections[1] as HTMLElement
    const { top } = secondSection.getBoundingClientRect()
    window.scrollTo({
      top: top + window.scrollY - headerHeight,
      behavior: 'smooth'
    })
  }
}

</script>
