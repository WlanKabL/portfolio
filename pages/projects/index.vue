<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <!-- Header -->
        <header class="mb-16 md:mb-20">
            <p v-reveal class="section-label mb-6">
                <span class="index">{{ String(activeProjects.length).padStart(2, "0") }}</span>
                <span class="px-2 text-faint/60">/</span>
                {{ $t("pages.projects.label") }}
            </p>
            <h1
                v-reveal="80"
                class="font-display font-bold tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.05] text-ink max-w-4xl mb-6"
            >
                {{ $t("pages.projects.title") }}
            </h1>
            <p v-reveal="160" class="text-muted text-lg leading-relaxed max-w-2xl">
                {{ $t("pages.projects.subtitle") }}
            </p>
        </header>

        <!-- Gallery: every project keeps its own brand accent -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCardModern
                v-for="(project, index) in galleryProjects"
                :key="project.link"
                v-reveal="(index % 3) * 100"
                :title="project.title"
                :description="project.description"
                :link="project.link"
                :github="project.github"
                :tech="project.tech"
                :image="project.image"
                :brand="project.brand"
            />
        </div>

        <!-- Bottom CTA -->
        <div v-reveal class="border-t border-line mt-24 pt-16 md:pt-20">
            <p class="section-label mb-6">{{ $t("pages.projects.bottom_cta_label") }}</p>
            <h3
                class="font-display font-bold tracking-tight text-3xl sm:text-5xl text-ink mb-4 max-w-2xl"
            >
                {{ $t("pages.projects.bottom_cta_heading") }}
            </h3>
            <p class="text-muted leading-relaxed max-w-xl mb-10">
                {{ $t("pages.projects.bottom_cta") }}
            </p>
            <div class="flex flex-wrap items-center gap-6 sm:gap-8">
                <NuxtLink to="/contact" class="btn-primary group">
                    {{ $t("pages.projects.lets_work_together") }}
                    <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                        >&rarr;</span
                    >
                </NuxtLink>
                <NuxtLink
                    to="/resume"
                    class="link-underline font-mono text-sm uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors py-4"
                >
                    {{ $t("pages.projects.view_resume") }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Projects",
});

const { activeProjects } = useProjects();

// Featured product leads the gallery, the rest stays newest first
const galleryProjects = computed(() =>
    [...activeProjects.value].sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
    ),
);

useSeoMeta({
    title: "Projects - WlanKabL Digital",
    ogTitle: "Projects - WlanKabL Digital",
    description:
        "Explore a curated selection of my work - from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogDescription:
        "Explore a curated selection of my work - from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
