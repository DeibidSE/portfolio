<template>
	<div class="flex justify-center w-full gap-4">
		<div class="relative w-full overflow-hidden text-center">
			<div class="flex w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
				<ul
					v-for="n in 2"
					:key="`list-${n}`"
					class="inline-flex items-center justify-center gap-4 py-1 md:gap-12 animate-infinite-scroll"
					role="list"
				>
					<template
						v-for="(skills, type, typeIndex) in categorizedSkills"
						:key="`category-${typeIndex}-${n}`"
					>
						<li
							v-for="(skill, index) in skills"
							:key="`skill-${type}-${index}-${n}`"
							class="flex flex-col items-center w-32 gap-3 transition-transform duration-300 transform hover:scale-105"
							role="listitem"
						>
							<Icon
								:name="skill.image"
								class="w-12 h-12 md:w-20 md:h-20"
								role="img"
								:aria-label="`Icon representing ${skill.name}`"
								:alt="skill.name"
							/>
							<span
								class="p-4 text-sm text-center md:text-base"
								:aria-hidden="true"
							>
								{{ skill.name }}
							</span>
						</li>

						<div
							class="w-px h-20 mx-4 dark:bg-light/70 bg-dark/70 md:h-28 md:mx-6"
							aria-hidden="true"
						/>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { skillList, FRONTEND_TYPE, BACKEND_TYPE, TOOLS_TYPE } from '~/lib/data'

const categorizedSkills = {
	frontend: skillList.filter(skill => skill.type === FRONTEND_TYPE),
	backend: skillList.filter(skill => skill.type === BACKEND_TYPE),
	tools: skillList.filter(skill => skill.type === TOOLS_TYPE),
}
</script>

<style scoped>
.animate-infinite-scroll {
  animation: infinite-scroll 30s linear infinite;
}

@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
