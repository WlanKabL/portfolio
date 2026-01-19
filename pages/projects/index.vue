<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- Animated Background Effects -->
        <div class="fixed inset-0 -z-10">
            <div class="absolute inset-0 bg-black" />
            <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
            />
            <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]"
            />
            <!-- Animated grid pattern -->
            <div
                class="absolute inset-0 opacity-[0.03]"
                style="
                    background-image:
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 100px 100px;
                    animation: grid-flow 20s linear infinite;
                "
            />
        </div>

        <!-- Top Fade Mask -->
        <div
            class="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none"
        />

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <!-- Hero Header Section -->
            <div class="text-center mb-16 space-y-6 animate-[fade-in-up_0.6s_ease-out]">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4"
                >
                    <IconCode class="w-4 h-4 text-indigo-400" />
                    <span class="text-sm text-white/70">{{ activeProjects.length }} Projects</span>
                </div>

                <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold">
                    <span
                        class="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                    >
                        {{ $t("pages.projects.title") }}
                    </span>
                </h1>
                <p class="text-xl text-white/60 max-w-2xl mx-auto">
                    {{ $t("pages.projects.subtitle") }}
                </p>

                <!-- Filter Pills (for future enhancement) -->
                <div
                    class="flex flex-wrap gap-3 justify-center pt-6 animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
                >
                    <button
                        class="px-6 py-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:border-indigo-500/50 hover:bg-white/5 transition-all duration-300 group"
                    >
                        <span class="flex items-center gap-2">
                            <IconSparkles
                                class="w-4 h-4 group-hover:text-indigo-400 transition-colors"
                            />
                            All Projects
                        </span>
                    </button>
                </div>
            </div>

            <!-- Featured Project Hero - Bento Style -->
            <div v-if="featuredProject" class="mb-12 animate-[scale-in_0.8s_ease-out_0.4s_both]">
                <div class="relative group">
                    <!-- Animated gradient border effect -->
                    <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700 animate-gradient"
                    />

                    <div
                        class="relative glass border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                        <div class="grid md:grid-cols-5 gap-0">
                            <!-- Image side - larger -->
                            <NuxtLink
                                :to="featuredProject.link"
                                class="md:col-span-3 relative overflow-hidden group/img h-80 md:h-[500px]"
                            >
                                <img
                                    :src="featuredProject.image"
                                    :alt="featuredProject.title"
                                    class="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-[1200ms]"
                                />
                                <!-- Overlay with gradient -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity duration-500"
                                />
                                <!-- "Featured" badge -->
                                <div class="absolute top-6 left-6">
                                    <div
                                        class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                                    >
                                        <IconStar class="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span class="text-sm font-semibold text-white"
                                            >Featured</span
                                        >
                                    </div>
                                </div>
                            </NuxtLink>

                            <!-- Content side -->
                            <div
                                class="md:col-span-2 p-8 md:p-12 flex flex-col justify-between gap-6"
                            >
                                <div class="space-y-6">
                                    <h2
                                        class="text-4xl md:text-5xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                                    >
                                        {{ featuredProject.title }}
                                    </h2>
                                    <p class="text-white/70 text-lg leading-relaxed">
                                        {{ featuredProject.description }}
                                    </p>

                                    <!-- Tech stack with icons -->
                                    <div class="flex flex-wrap gap-2 pt-2">
                                        <ItemTag
                                            v-for="(tech, index) in featuredProject.tech.slice(
                                                0,
                                                6,
                                            )"
                                            :key="index"
                                            :name="tech"
                                            class="animate-[fade-in_0.4s_ease-out_both]"
                                            :style="{ animationDelay: `${index * 0.05}s` }"
                                        />
                                        <span
                                            v-if="featuredProject.tech.length > 6"
                                            class="px-3 py-1 text-xs rounded-full glass border border-white/10 text-white/50"
                                        >
                                            +{{ featuredProject.tech.length - 6 }} more
                                        </span>
                                    </div>
                                </div>

                                <!-- CTA Buttons -->
                                <div class="flex flex-wrap gap-3">
                                    <LinkItem
                                        :to="featuredProject.link"
                                        class="flex-1 justify-center"
                                    >
                                        View Project
                                        <IconArrowRight class="w-4 h-4 ml-2" />
                                    </LinkItem>
                                    <LinkItem
                                        v-if="featuredProject.github"
                                        :to="featuredProject.github"
                                        :external="true"
                                        class="flex-1 justify-center"
                                    >
                                        <IconGithub class="w-4 h-4 mr-2" />
                                        GitHub
                                    </LinkItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modern Grid Layout - Clean & Consistent -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCardModern
                    v-for="(project, index) in remainingProjects"
                    :key="index"
                    :title="project.title"
                    :description="project.description"
                    :link="project.link"
                    :github="project.github"
                    :tech="project.tech"
                    :image="project.image"
                    class="animate-[scale-in_0.6s_ease-out_both]"
                    :style="{ animationDelay: `${0.6 + index * 0.08}s` }"
                />
            </div>

            <!-- Bottom CTA Section -->
            <div class="mt-24 text-center space-y-8 animate-[fade-in-up_0.8s_ease-out_1.2s_both]">
                <div class="space-y-4">
                    <h3 class="text-3xl md:text-4xl font-bold text-white">
                        {{ $t("pages.projects.bottom_cta_heading") }}
                    </h3>
                    <p class="text-white/60 text-lg max-w-xl mx-auto">
                        {{ $t("pages.projects.bottom_cta") }}
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink
                        to="/contact"
                        class="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
                    >
                        <span class="relative z-10 flex items-center justify-center gap-2">
                            <IconMail class="w-5 h-5" />
                            {{ $t("pages.projects.lets_work_together") }}
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span
                            class="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
                        >
                            <IconMail class="w-5 h-5" />
                            {{ $t("pages.projects.lets_work_together") }}
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        to="/resume"
                        class="px-8 py-4 glass border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <IconFileText class="w-5 h-5" />
                        {{ $t("pages.projects.view_resume") }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Code as IconCode,
    Sparkles as IconSparkles,
    Star as IconStar,
    ArrowRight as IconArrowRight,
    Github as IconGithub,
    Mail as IconMail,
    FileText as IconFileText,
} from "lucide-vue-next";
import { computed } from "vue";

definePageMeta({
    title: "Projects",
});

// Use reactive projects composable for immediate locale switching
const { activeProjects, featuredProject } = useProjects();

// Remaining projects sorted by lastChangedAt (newest first), excluding the featured project
const remainingProjects = computed(() =>
    activeProjects.value.filter((project) => project !== featuredProject.value),
);

useSeoMeta({
    title: "Projects - </WlanKabL>",
    ogTitle: "Projects - </WlanKabL>",
    description:
        "Explore a curated selection of my work - from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogDescription:
        "Explore a curated selection of my work - from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>

<style scoped>
@keyframes grid-flow {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100px);
    }
}
</style>
