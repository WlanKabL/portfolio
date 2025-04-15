<template>
    <PageContainer :title="project?.extendedTitle ?? project?.title ?? ''">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <article
                class="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                v-html="project?.extendedText"
            />
            <section v-if="project?.tech?.length">
                <h2 class="text-xl font-semibold text-white mb-4">Tech Stack</h2>
                <div class="flex flex-wrap gap-2">
                    <ItemTag v-for="(item, index) in project.tech" :key="index" :name="item" />
                </div>
            </section>
            <section v-if="project?.github || project?.externalLink">
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
