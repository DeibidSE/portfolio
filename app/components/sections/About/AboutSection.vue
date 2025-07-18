<template>
	<LayoutsSectionWrapper
		id="about"
		icon="tabler:user"
		:title="$t('about.title')"
	>
		<UiTerminal>
			<template #header>
				<div class="flex items-start gap-2">
					<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
					<span>npm run user-info --details</span>
				</div>
			</template>

			<template #content>
				<div class="grid items-start gap-8 xl:grid-cols-3">
					<div class="space-y-4 xl:col-span-2">
						<p
							v-for="(content, index) in $tm('terminal_content')"
							:key="index"
							class="leading-relaxed text-gray-700 dark:text-gray-300"
						>
							<span class="text-accent">&gt;</span>
							{{ $rt(content) }}
						</p>
					</div>

					<div class="flex flex-col items-center justify-center gap-6">
						<div class="[perspective:1000px] group">
							<div class="relative w-40 h-40 md:w-56 md:h-56 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
								<div class="absolute inset-0 overflow-hidden border-2 rounded-full border-accent/50 [backface-visibility:hidden]">
									<img
										:src="`${$config.public.BASE_URL}/images/david.webp`"
										alt="David's profile photo"
										class="object-cover w-full h-full"
										loading="lazy"
									>
								</div>
								<div class="absolute inset-0 flex items-center justify-center border-2 rounded-full border-accent/50 dark:bg-primary-dark bg-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
									<Icon
										name="my-icon:main"
										class="w-full h-full"
									/>
								</div>
							</div>
						</div>

						<div class="flex flex-col items-center gap-2 text-sm">
							<span class="font-bold text-gray-600 dark:text-gray-300">
								{{ $t('availability.label') }}
							</span>
							<UiBadge
								tag="span"
								color="red"
								size="small"
							>
								{{ $t('availability.status') }}
							</UiBadge>
						</div>
					</div>
				</div>
			</template>

			<template #secondary-content>
				<div class="flex flex-col gap-6">
					<div class="flex items-start gap-2">
						<span class="font-semibold text-accent-secondary dark:text-accent-secondary">user@localhost:~$</span>
						<span>npm run social --links</span>
					</div>
					<div class="flex flex-wrap items-center gap-4">
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

<script setup lang="ts">
import { socialLinks } from '~/lib/data'
</script>
