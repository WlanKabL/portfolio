<template>
    <section class="py-32 max-w-7xl mx-auto px-4 relative">
        <!-- Background Elements -->
        <div class="absolute inset-0 tech-grid opacity-20"></div>

        <div class="relative z-10">
            <h2
                v-if="title"
                class="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient scroll-hidden"
                ref="titleRef"
            >
                {{ title }}
            </h2>

            <p
                class="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto scroll-hidden"
                ref="subtitleRef"
            >
                Explore my latest creations and technical innovations
            </p>

            <div
                class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0"
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
                    :class="`min-w-[80%] min-h-[300px] snap-center md:min-w-0 md:h-auto mb-2 project-card scroll-hidden`"
                    :style="{ animationDelay: index * 0.2 + 's' }"
                />
                <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
            </div>

            <!-- View All Projects CTA -->
            <div class="text-center mt-16 scroll-hidden" ref="ctaRef">
                <NuxtLink
                    to="/projects"
                    class="apple-button inline-flex items-center gap-3 text-lg"
                >
                    <span>View All Projects</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { LocalizedProject } from "~/types/projects";
import { ref, onMounted } from "vue";

defineProps<{
    title?: string;
    projects: Readonly<LocalizedProject[]>;
}>();

const titleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();
const ctaRef = ref<HTMLElement>();

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("scroll-hidden");
                    entry.target.classList.add("scroll-visible");
                }
            });
        },
        { threshold: 0.1 },
    );

    if (titleRef.value) observer.observe(titleRef.value);
    if (subtitleRef.value) observer.observe(subtitleRef.value);
    if (ctaRef.value) observer.observe(ctaRef.value);

    // Observe project cards
    document.querySelectorAll(".project-card").forEach((card) => {
        observer.observe(card);
    });
});
</script>
