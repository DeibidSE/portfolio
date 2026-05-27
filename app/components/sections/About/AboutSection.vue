<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>

<template>
	<LayoutsSectionWrapper id="about" icon="tabler:user" :title="$t('about.title')">
		<UiTerminal>
			<template #header>
				<div class="flex items-start gap-2">
					<span class="font-semibold text-accent-secondary">user@localhost:~$</span>
					<span>npm run user-info --details</span>
				</div>
			</template>

			<template #content>
				<div class="grid items-center gap-8 xl:grid-cols-3 xl:items-start">
					<div class="space-y-4 xl:col-span-2">
						<p v-for="(content, index) in $tm('terminal_content')" :key="index" class="leading-relaxed text-gray-700 dark:text-gray-300">
							<span class="text-accent">&gt;</span>
							{{ $rt(content) }}
						</p>
					</div>

					<div class="flex flex-col items-center justify-center gap-6">
						<div class="group [perspective:1000px]">
							<div class="relative h-40 w-40 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] md:h-56 md:w-56">
								<div
									class="absolute inset-0 overflow-hidden rounded-full border border-accent/30 shadow-lg shadow-accent/10 ring-1 ring-white/40 [backface-visibility:hidden] dark:ring-white/10"
								>
									<img :src="`${$config.public.BASE_URL}/images/david.webp`" alt="David's profile photo" class="h-full w-full object-cover" loading="lazy" />
								</div>
								<div
									class="absolute inset-0 flex items-center justify-center rounded-full border border-accent/30 bg-gray-100 shadow-lg shadow-accent/10 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-primary-dark"
								>
									<Icon name="my-icon:main" class="h-full w-full" />
								</div>
							</div>
						</div>

						<div class="flex flex-col items-center gap-2 text-sm">
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
				<div class="flex flex-col gap-6">
					<div class="flex items-start gap-2">
						<span class="font-semibold text-accent-secondary">user@localhost:~$</span>
						<span>npm run social --links</span>
					</div>
					<div class="flex flex-wrap items-center gap-3">
						<UiBadge
							v-for="(link, key) in socialLinks"
							:key="key"
							tag="a"
							:href="link.url"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`Contact me via ${link.name}`"
							:prepend-icon="link.icon"
							append-icon="tabler:external-link"
							:color="link.color"
							size="medium"
							hover
						>
							{{ link.name || '' }}
						</UiBadge>
					</div>
				</div>
			</template>
		</UiTerminal>
	</LayoutsSectionWrapper>
</template>
