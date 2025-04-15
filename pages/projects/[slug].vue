<template>
    <PageContainer :title="project?.extendedTitle ?? project?.title ?? ''">
        <div v-if="project" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <article
                class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                v-html="project.extendedText"
            />
            <section v-if="project.tech?.length">
                <h2 class="text-xl font-semibold text-white mb-4">Tech Stack</h2>
                <div class="flex flex-wrap gap-2">
                    <ItemTag v-for="(item, index) in project.tech" :key="index" :name="item" />
                </div>
            </section>
            <section v-if="project.github || project.externalLink">
                <h2 class="text-xl font-semibold text-white mb-4">Project Links</h2>
                <div class="flex flex-col sm:flex-row gap-4">
                    <LinkItem v-if="project.github" :to="project.github" external>
                        GitHub Repository
                    </LinkItem>
                    <LinkItem v-if="project.externalLink" :to="project.externalLink" external>
                        Live Version
                    </LinkItem>
                </div>
            </section>
        </div>
        <div v-else class="text-center py-32 space-y-6">
            <h1 class="text-4xl font-bold text-white">🚫 Projekt nicht gefunden</h1>
            <p class="text-gray-400">
                Das angeforderte Projekt existiert nicht, wurde verschoben oder ist nicht mehr
                verfügbar.
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
                Zur Projektübersicht
            </NuxtLink>
        </div>
    </PageContainer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "~/data/projects";
import type { Project } from "~/types/projects";

const route = useRoute();
const slug = route.params.slug as string;

const project = projects.filter((p) => p.active).find((p) => p.link.endsWith(slug)) as
    | Project
    | undefined;
</script>
