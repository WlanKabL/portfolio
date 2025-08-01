<template>
    <section class="relative min-h-screen flex items-center justify-center text-center px-4">
        <!-- Professional Background -->
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
                background-image: url(&quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&quot;);
            "
        >
            <!-- Professional gradient overlay with proper purple integration -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/50 to-black/90" />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
            
            <!-- Subtle technical pattern -->
            <div class="absolute inset-0 tech-dots opacity-10"></div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-5xl mx-auto">
            <!-- Professional Hero Section -->
            <div class="mb-12">
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 scroll-hidden" 
                    ref="heroTitle"
                    style="animation-delay: 0.2s">
                    <span class="block mb-2">
                        {{ $t("landing.hero_title_part1") }}
                    </span>
                    <span class="text-gradient block">
                        {{ $t("landing.hero_title_part2") }}
                    </span>
                </h1>
            </div>

            <!-- Professional Subtitle -->
            <div class="mb-16 scroll-hidden" ref="subtitle" style="animation-delay: 0.4s">
                <p class="text-xl sm:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    {{ $t("landing.hero_subtitle") }}
                </p>
                
                <!-- Key Skills Highlight -->
                <div class="flex flex-wrap justify-center gap-3 mt-8">
                    <span class="px-4 py-2 glass rounded-full text-sm font-medium text-purple-200 border border-purple-500/30">
                        Full-Stack Development
                    </span>
                    <span class="px-4 py-2 glass rounded-full text-sm font-medium text-purple-200 border border-purple-500/30">
                        Vue.js & Node.js
                    </span>
                    <span class="px-4 py-2 glass rounded-full text-sm font-medium text-purple-200 border border-purple-500/30">
                        System Architecture
                    </span>
                </div>
            </div>

            <!-- Professional CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-hidden"
                 ref="ctaButtons"
                 style="animation-delay: 0.6s">
                <NuxtLink
                    to="/projects"
                    class="apple-button group relative overflow-hidden px-10 py-4 text-lg font-semibold min-w-[200px]"
                >
                    <span class="relative z-10 flex items-center justify-center gap-3">
                        {{ $t("landing.view_projects") }}
                        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </span>
                </NuxtLink>

                <NuxtLink
                    to="/contact"
                    class="glass group relative overflow-hidden px-10 py-4 text-lg font-semibold text-white hover:text-purple-200 transition-all duration-300 rounded-xl border border-purple-500/30 min-w-[200px]"
                >
                    <span class="relative z-10 flex items-center justify-center gap-3">
                        {{ $t("landing.contact_me") }}
                        <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </span>
                </NuxtLink>
            </div>

            <!-- Professional status indicator -->
            <div class="mt-16 scroll-hidden" style="animation-delay: 0.8s">
                <div class="flex items-center justify-center gap-3 text-purple-300">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-sm font-medium">Available for opportunities</span>
                </div>
            </div>

            <!-- Minimal scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-hidden"
                 style="animation-delay: 1s">
                <div class="animate-bounce opacity-60">
                    <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const heroTitle = ref<HTMLElement>();
const subtitle = ref<HTMLElement>();
const ctaButtons = ref<HTMLElement>();

// Intersection Observer for animations
const observeElements = () => {
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

    // Observe elements
    if (heroTitle.value) observer.observe(heroTitle.value);
    if (subtitle.value) observer.observe(subtitle.value);
    if (ctaButtons.value) observer.observe(ctaButtons.value);
};

onMounted(() => {
    observeElements();
});
</script>
