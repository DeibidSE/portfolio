<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>

<template>
	<LayoutsSectionWrapper id="about" icon="tabler:user" :title="$t('about.title')">
		<UiTerminal>
			<template #header>
				<div class="gap-2 flex items-start">
					<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
					<span>npm run user-info --details</span>
				</div>
			</template>

			<template #content>
				<div class="gap-8 xl:grid-cols-3 grid items-start">
					<div class="space-y-4 xl:col-span-2">
						<p v-for="(content, index) in $tm('terminal_content')" :key="index" class="leading-relaxed text-gray-700 dark:text-gray-300">
							<span class="text-accent">&gt;</span>
							{{ $rt(content) }}
						</p>
					</div>

					<div class="gap-6 flex flex-col items-center justify-center">
						<div class="group [perspective:1000px]">
							<div class="w-40 h-40 md:w-56 md:h-56 relative duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
								<div class="inset-0 border-accent/50 absolute overflow-hidden rounded-full border-2 [backface-visibility:hidden]">
									<img :src="`${$config.public.BASE_URL}/images/david.webp`" alt="David's profile photo" class="h-full w-full object-cover" loading="lazy" />
								</div>
								<div
									class="inset-0 border-accent/50 dark:bg-primary-dark bg-gray-100 absolute flex [transform:rotateY(180deg)] items-center justify-center rounded-full border-2 [backface-visibility:hidden]"
								>
									<Icon name="my-icon:main" class="h-full w-full" />
								</div>
							</div>
						</div>

						<div class="gap-2 text-sm flex flex-col items-center">
							<span class="font-bold text-gray-600 dark:text-gray-300">
								{{ $t('availability.label') }}
							</span>
							<UiBadge tag="span" color="red" size="small">
								{{ $t('availability.status') }}
							</UiBadge>
						</div>
					</div>
				</div>
			</template>

			<template #secondary-content>
				<div class="gap-6 flex flex-col">
					<div class="gap-2 flex items-start">
						<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
						<span>npm run social --links</span>
					</div>
					<div class="gap-4 flex flex-wrap items-center">
						<UiBadge
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
						</UiBadge>
					</div>
				</div>
			</template>
		</UiTerminal>
	</LayoutsSectionWrapper>
</template>
