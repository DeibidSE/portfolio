<template>
	<div
		class="flex flex-col w-full h-full overflow-hidden transition-all duration-300 border-2 shadow-no-offset rounded-3xl border-accent/50 backdrop-blur-lg md:text-lg bg-secondary-light/50 dark:bg-secondary-dark/50"
		role="region"
		aria-label="Terminal component"
	>
		<div class="flex items-center justify-between w-full px-4 py-3 border-b bg-gray-100/80 dark:bg-gray-900/60 border-accent/50">
			<div class="flex gap-2">
				<span class="w-3 h-3 bg-[#ff5f57] rounded-full shadow-md" />
				<span class="w-3 h-3 bg-[#ffbd2e] rounded-full shadow-md" />
				<span class="w-3 h-3 bg-[#28c940] rounded-full shadow-md" />
			</div>
		</div>

		<div class="flex flex-col gap-6 px-6 py-6 overflow-y-auto text-xs leading-relaxed text-gray-800 bg-transparent sm:text-sm font-code dark:text-gray-200">
			<div class="flex items-start gap-2">
				<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
				<span>./about_me.sh</span>
			</div>
			<div class="grid gap-6 xl:grid-cols-3">
				<div class="space-y-4 xl:col-span-2">
					<p
						v-for="(content, index) in $tm('terminalContent')"
						:key="index"
					>
						{{ $rt(content) }}
					</p>
				</div>

				<div class="flex flex-col items-center justify-center gap-6">
					<div class="group [perspective:1000px]">
						<div
							class="relative w-40 h-40 md:w-56 md:h-56 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]"
						>
							<div class="absolute inset-0 overflow-hidden border-2 rounded-full shadow-lg border-dark dark:border-light">
								<img
									:src="`${$config.public.BASE_URL}/images/david.webp`"
									alt="Profile photo"
									class="object-cover w-full h-full"
									loading="lazy"
								>
							</div>
							<div
								class="absolute inset-0 flex items-center justify-center border-2 border-dark dark:border-light dark:bg-primary-dark bg-gray-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]"
							>
								<Icon
									name="my-icon:main"
									class="w-full h-full"
								/>
							</div>
						</div>
					</div>

					<div class="flex flex-col items-center gap-2">
						<span class="text-sm font-bold text-gray-600 dark:text-gray-300">Status:</span>
						<BadgeComponent
							tag="span"
							color="red"
							size="small"
						>
							{{ $t('availability') }}
						</BadgeComponent>
					</div>
				</div>
			</div>

			<hr class="border-accent/50">

			<div class="flex flex-col gap-6 w-fit">
				<div class="flex items-start gap-2">
					<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
					<span>npx run social</span>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<BadgeComponent
						v-for="(info, key) in socialLinks"
						:key="key"
						tag="a"
						:href="info.url"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="`Contact me via ${info.name}`"
						:prepend-icon="info.icon"
						append-icon="tabler:external-link"
						:color="info.color"
						size="medium"
						hover
					>
						{{ info.name || '' }}
					</BadgeComponent>
				</div>
			</div>

			<hr class="border-accent/50">

			<div class="flex flex-col gap-2 w-max">
				<div class="flex items-start gap-2">
					<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
					<span class="animate-blinking-cursor">_</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>
