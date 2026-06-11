<template>
    <section class="py-24 md:py-32">
        <div class="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHeading
                index="01"
                :label="$t('sections.work_label')"
                :title="$t('sections.work_title')"
                link-to="/projects"
                :link-label="$t('sections.all_projects')"
            />

            <p v-reveal class="text-muted leading-relaxed max-w-2xl -mt-6 mb-14">
                {{ $t("sections.work_intro") }}
            </p>

            <!-- Each product keeps its own brand world -->
            <div class="flex flex-col gap-6 md:gap-8">
                <article
                    v-for="(project, index) in projects.slice(0, 3)"
                    :key="project.link"
                    v-reveal
                    class="brand-panel group relative overflow-hidden rounded-2xl"
                    :style="{
                        '--brand': project.brand?.color ?? '#8b5cf6',
                        '--panel': project.brand?.panel ?? '#181317',
                    }"
                >
                    <div class="grid md:grid-cols-12 gap-10 md:gap-8 p-8 md:p-12 items-center">
                        <!-- Content -->
                        <div
                            class="md:col-span-7 flex flex-col gap-5"
                            :class="{ 'md:order-2': index % 2 === 1 }"
                        >
                            <p
                                class="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-panel-muted"
                            >
                                <span class="text-[var(--brand)]">
                                    {{ $t("sections.work_product") }}
                                    {{ String(index + 1).padStart(2, "0") }}
                                </span>
                                <span
                                    v-if="project.featured"
                                    class="inline-block bg-highlight text-ink font-semibold px-2 py-0.5 rotate-[-2deg]"
                                >
                                    {{ $t("sections.work_featured") }}
                                </span>
                            </p>
                            <NuxtLink :to="project.link" class="w-fit">
                                <h3
                                    class="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-panel-ink group-hover:text-[var(--brand)] transition-colors duration-500 leading-tight"
                                >
                                    {{ project.title }}
                                </h3>
                            </NuxtLink>
                            <p class="text-panel-muted leading-relaxed max-w-xl">
                                {{ project.shortDescription }}
                            </p>
                            <p class="font-mono text-xs text-panel-muted/70 leading-relaxed">
                                {{ project.tech.slice(0, 5).join(" · ") }}
                            </p>

                            <div class="flex flex-wrap items-center gap-6 pt-3">
                                <NuxtLink
                                    :to="project.link"
                                    class="inline-flex items-center gap-3 bg-[var(--brand)] text-white font-mono text-xs font-medium uppercase tracking-[0.12em] px-5 py-3 rounded-md hover:opacity-90 transition-opacity duration-300"
                                >
                                    {{ $t("sections.view_project") }}
                                    <span
                                        class="transition-transform duration-300 group-hover:translate-x-1"
                                        >&rarr;</span
                                    >
                                </NuxtLink>
                                <a
                                    v-if="project.externalLink"
                                    :href="project.externalLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="font-mono text-xs uppercase tracking-[0.15em] text-panel-muted hover:text-panel-ink transition-colors"
                                >
                                    {{ $t("sections.visit_live") }} &nearr;
                                </a>
                            </div>
                        </div>

                        <!-- Logo plate -->
                        <NuxtLink
                            :to="project.link"
                            class="md:col-span-5"
                            :class="{ 'md:order-1': index % 2 === 1 }"
                        >
                            <div
                                class="bg-white rounded-xl p-8 md:p-10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-0 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)]"
                                :class="index % 2 === 1 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]'"
                            >
                                <img
                                    :src="project.image"
                                    :alt="`${project.title} logo`"
                                    loading="lazy"
                                    class="w-full max-h-44 object-contain"
                                />
                            </div>
                        </NuxtLink>
                    </div>

                    <!-- Brand glow -->
                    <div
                        class="pointer-events-none absolute -top-24 h-48 w-2/3 rounded-full blur-3xl opacity-[0.16] bg-[var(--brand)] transition-opacity duration-700 group-hover:opacity-[0.28]"
                        :class="index % 2 === 1 ? 'right-0' : 'left-0'"
                    />
                </article>
            </div>

            <NuxtLink
                to="/projects"
                class="sm:hidden link-underline inline-block mt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted"
            >
                {{ $t("sections.all_projects") }} &rarr;
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { LocalizedProject } from "~/types/projects";

defineProps<{
    projects: Readonly<LocalizedProject[]>;
}>();
</script>

<style scoped>
.brand-panel {
    background: var(--panel);
}
</style>
