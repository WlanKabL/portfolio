<template>
    <!-- eslint-disable vue/no-v-html -- extendedTitle/extendedText are trusted content from own locale files -->
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-20" :style="accentStyle">
        <template v-if="project">
            <!-- Back link -->
            <NuxtLink
                to="/projects"
                class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint hover:text-ink transition-colors mb-12"
            >
                <span class="transition-transform duration-300 group-hover:-translate-x-1"
                    >&larr;</span
                >
                {{ $t("pages.projects.back_to_projects") }}
            </NuxtLink>

            <!-- Title -->
            <header class="mb-14 md:mb-20 border-b border-line pb-12">
                <p v-reveal class="section-label mb-6">
                    <span class="index">{{ $t("pages.projects.case_label") }}</span>
                </p>
                <h1
                    v-reveal="80"
                    class="font-display font-bold tracking-tight text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.08] text-ink max-w-4xl"
                    v-html="project.extendedTitle"
                />
            </header>

            <div class="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <!-- Article -->
                <article
                    v-reveal
                    class="lg:col-span-8 project-article"
                    v-html="project.extendedText"
                />

                <!-- Meta sidebar -->
                <aside class="lg:col-span-4">
                    <div v-reveal="120" class="lg:sticky lg:top-28 flex flex-col gap-10">
                        <section v-if="project.tech?.length">
                            <h2 class="section-label mb-5">
                                {{ $t("pages.projects.tech_stack") }}
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <ItemTag v-for="item in project.tech" :key="item" :name="item" />
                            </div>
                        </section>

                        <section v-if="project.github || project.externalLink">
                            <h2 class="section-label mb-5">
                                {{ $t("pages.projects.project_links") }}
                            </h2>
                            <div class="flex flex-col gap-3">
                                <LinkItem
                                    v-if="project.externalLink"
                                    :to="project.externalLink"
                                    external
                                >
                                    {{ $t("pages.projects.live_version") }}
                                </LinkItem>
                                <LinkItem v-if="project.github" :to="project.github" external>
                                    {{ $t("pages.projects.github_repository") }}
                                </LinkItem>
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </template>

        <!-- Not found -->
        <div v-else class="py-32 max-w-xl">
            <p class="font-mono text-xs text-faint mb-6">
                <span class="text-accent">$</span> GET /projects/{{ slug }}
                <span class="block mt-1 text-red-600">404 / not found</span>
            </p>
            <h1 class="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink mb-4">
                {{ $t("pages.projects.not_found_title") }}
            </h1>
            <p class="text-muted leading-relaxed mb-10">
                {{ $t("pages.projects.not_found_description") }}
            </p>
            <NuxtLink
                to="/projects"
                class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors"
            >
                <span class="transition-transform duration-300 group-hover:-translate-x-1"
                    >&larr;</span
                >
                {{ $t("pages.projects.back_to_projects") }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug as string;

const { activeProjects } = useProjects();
const project = computed(() => activeProjects.value.find((p) => p.link.endsWith(slug)));

// The article inherits the product's own brand color as accent
const accentStyle = computed(() =>
    project.value?.brand ? { "--project-accent": project.value.brand.color } : undefined,
);

// Keep SEO meta in sync with the active locale
watchEffect(() => {
    if (project.value) {
        useSeoMeta({
            title: `${project.value.title} | WlanKabL`,
            ogTitle: `${project.value.title} | WlanKabL`,
            description: project.value.shortDescription ?? project.value.description,
            ogDescription: project.value.shortDescription ?? project.value.description,
            ogImage: project.value.image.startsWith("http")
                ? project.value.image
                : project.value.image.replace("./", "/"),
            twitterCard: "summary_large_image",
        });
    }
});
</script>
