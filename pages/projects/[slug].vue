<template>
    <PageContainer :title="project?.extendedTitle ?? project?.title ?? ''">
        <div v-if="project" class="max-w-4xl mx-auto space-y-12">
            <article
                class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                v-html="project.extendedText"
            />
            <section v-if="project.tech?.length">
                <h2 class="text-xl font-semibold text-white mb-4">{{ $t('pages.projects.tech_stack') }}</h2>
                <div class="flex flex-wrap gap-2">
                    <ItemTag v-for="(item, index) in project.tech" :key="index" :name="item" />
                </div>
            </section>
            <section v-if="project.github || project.externalLink">
                <h2 class="text-xl font-semibold text-white mb-4">{{ $t('pages.projects.project_links') }}</h2>
                <div class="flex flex-col sm:flex-row gap-4">
                    <LinkItem v-if="project.github" :to="project.github" external>
                        {{ $t('pages.projects.github_repository') }}
                    </LinkItem>
                    <LinkItem v-if="project.externalLink" :to="project.externalLink" external>
                        {{ $t('pages.projects.live_version') }}
                    </LinkItem>
                </div>
            </section>
        </div>
        <div v-else class="text-center py-32 space-y-6">
            <h1 class="text-4xl font-bold text-white">{{ $t('pages.projects.not_found_title') }}</h1>
            <p class="text-gray-400">
                {{ $t('pages.projects.not_found_description') }}
            </p>
            <NuxtLink
                to="/projects"
                class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                {{ $t('pages.projects.back_to_projects') }}
            </NuxtLink>
        </div>
    </PageContainer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Project } from "~/types/projects";

const route = useRoute();
const slug = route.params.slug as string;

// Use reactive projects composable for immediate locale switching
const { activeProjects } = useProjects();
const project = computed(() => 
    activeProjects.value.find((p) => p.link.endsWith(slug)) as Project | undefined
);

// Watch for locale changes and update SEO meta
watchEffect(() => {
    if (project.value) {
        useSeoMeta({
            title: `${project.value.title} – WlanKabL`,
            ogTitle: `${project.value.title} – WlanKabL`,
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
