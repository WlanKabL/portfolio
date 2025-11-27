<template>
    <section class="py-32 relative overflow-hidden">
        <!-- Fade masks for smooth transitions -->
        <div
            class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"
        />
        <div
            class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"
        />

        <!-- Background -->
        <div
            class="hidden sm:block absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"
        />
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"
        />

        <div class="relative max-w-7xl mx-auto px-4">
            <div v-if="title" class="text-center mb-16 animate-[fade-in-up_0.8s_ease-out]">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    {{ title }}
                </h2>
                <div
                    class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                />
            </div>

            <div class="relative">
                <!-- Scroll gradient overlays (mobile only) -->
                <div
                    class="md:hidden absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"
                />
                <div
                    class="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"
                />

                <div
                    class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0 scrollbar-hide"
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
                        class="min-w-[80%] min-h-[250px] snap-center md:min-w-0 md:h-auto mb-2 animate-[scale-in_0.6s_ease-out_both]"
                        :style="{ animationDelay: `${index * 0.15}s` }"
                    />
                    <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { LocalizedProject } from "~/types/projects";

defineProps<{
    title?: string;
    projects: Readonly<LocalizedProject[]>;
}>();
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
