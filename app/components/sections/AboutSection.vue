<template>
	<UiSectionWrapper id="about" icon="tabler:user" :title="$t('about.title')">
		<div class="mx-auto w-full">
			<UiTerminal user="david" host="portfolio" command="neofetch">
				<div class="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
					<div class="w-28 shrink-0 sm:w-40">
						<img
							:src="`${$config.public.BASE_URL}/images/david.webp`"
							:alt="$t('about.name')"
							width="160"
							height="160"
							loading="lazy"
							class="size-28 rounded-xl object-cover ring-1 ring-slate-900/10 dark:ring-white/10 sm:size-full"
						/>
					</div>

					<dl class="min-w-0 flex-1">
						<div class="font-semibold text-syntax-day-green dark:text-syntax-green">david@portfolio</div>
						<div class="select-none text-slate-300 dark:text-slate-600" aria-hidden="true">───────────────</div>

						<div class="flex gap-2 pt-1">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Name</dt>
							<dd class="min-w-0 text-slate-700 dark:text-slate-200">{{ $t('about.name') }}</dd>
						</div>
						<div class="flex gap-2">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Role</dt>
							<dd class="min-w-0 text-slate-700 dark:text-slate-200">{{ $t('job.title') }}</dd>
						</div>
						<div class="flex gap-2">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Status</dt>
							<dd class="inline-flex min-w-0 items-center gap-1.5 text-emerald-500">
								<span class="relative flex size-2" aria-hidden="true">
									<span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
									<span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
								</span>
								{{ $t('availability.status') }}
							</dd>
						</div>
						<div class="flex gap-2">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Exp</dt>
							<dd class="min-w-0 text-slate-700 dark:text-slate-200">{{ $t('about.experience') }}</dd>
						</div>
						<div class="flex gap-2">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Stack</dt>
							<dd class="min-w-0 text-slate-700 dark:text-slate-200">{{ $t('about.tag_fullstack') }}</dd>
						</div>
						<div class="flex gap-2">
							<dt class="w-16 shrink-0 font-semibold text-syntax-day-blue dark:text-syntax-blue sm:w-20">Social</dt>
							<dd class="flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1">
								<template v-for="(link, i) in socialLinks" :key="link.name">
									<a
										:href="link.url"
										:target="link.url.startsWith('mailto:') ? undefined : '_blank'"
										rel="noopener noreferrer"
										class="focus-ring group inline-flex items-center gap-1 rounded text-slate-700 transition-colors hover:text-syntax-day-blue dark:text-slate-200 dark:hover:text-syntax-blue"
										:aria-label="link.name"
									>
										<Icon :name="link.icon" class="size-4 shrink-0" aria-hidden="true" />
										<span class="underline-offset-2 group-hover:underline">{{ link.name }}</span>
									</a>
									<span v-if="i < socialLinks.length - 1" class="select-none text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
								</template>
							</dd>
						</div>
					</dl>
				</div>

				<div class="flex items-start gap-2">
					<span class="shrink-0 select-none">
						<span class="font-semibold text-syntax-day-green dark:text-syntax-green">david@portfolio</span>
						<span class="text-slate-400 dark:text-slate-500">:</span>
						<span class="font-semibold text-syntax-day-blue dark:text-syntax-blue">~</span>
						<span class="text-slate-400 dark:text-slate-500">$</span>
					</span>
					<span class="shrink-0">cat about.txt</span>
				</div>

				<p v-for="(content, index) in $tm('terminal_content')" :key="index" class="text-pretty leading-relaxed text-slate-700 dark:text-slate-300">
					{{ $rt(content) }}
				</p>
			</UiTerminal>
		</div>
	</UiSectionWrapper>
</template>
