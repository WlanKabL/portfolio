<template>
    <section class="py-20 max-w-7xl mx-auto px-4">
        <h2 v-if="title" class="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {{ title }}
        </h2>
        <div
            class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0"
        >
            <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
            <ProjectCardCompact
                v-for="(project, index) in projects
                    .filter((p) => p.active && p.showPreview)
                    .slice(0, 3)"
                :key="index"
                :title="project.title"
                :description="project.shortDescription"
                :image="project.image"
                :link="project.link"
                :tech="project.tech"
                class="min-w-[80%] min-h-[250px] snap-center md:min-w-0 md:h-auto mb-2"
            />
            <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Project } from "~/types/projects";

defineProps<{
    title?: string;
    projects: Project[];
}>();
</script>
