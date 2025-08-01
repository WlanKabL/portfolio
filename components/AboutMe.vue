<template>
    <section class="py-32 relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 tech-dots opacity-30"></div>

        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 relative z-10"
        >
            <!-- Portrait Section -->
            <div class="relative group mx-auto lg:mx-0 scroll-hidden" ref="portrait">
                <!-- Glow Effect -->
                <div
                    class="absolute inset-0 bg-purple-600 blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-3xl animate-glow-pulse"
                />

                <!-- Image Container -->
                <div class="relative">
                    <img
                        src="https://downloads.crowd-nation.com/Portfolio.png"
                        alt="Portrait"
                        class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-2xl group-hover:scale-105 transition-all duration-500 border-2 border-purple-500/20"
                    />

                    <!-- Floating Tech Icons -->
                    <div
                        class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float"
                        style="animation-delay: 0.5s"
                    >
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 2z"
                            />
                        </svg>
                    </div>

                    <div
                        class="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-700 rounded-xl flex items-center justify-center shadow-lg animate-float"
                        style="animation-delay: 1s"
                    >
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Content Section -->
            <div class="scroll-hidden" ref="content">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                    {{ $t("about.title") }}
                </h2>

                <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                    {{
                        $t("about.description", {
                            wlankabl: "WlanKabL",
                            technologies: "Vue, Node.js & C#",
                        })
                    }}
                </p>

                <!-- Feature List -->
                <div class="space-y-6">
                    <div
                        v-for="(item, index) in features"
                        :key="index"
                        class="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 transition-all duration-300 scroll-hidden"
                        :style="{ animationDelay: index * 0.1 + 0.2 + 's' }"
                        ref="featureItems"
                    >
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg"
                        >
                            <IconZap class="w-6 h-6 text-white" />
                        </div>
                        <span class="text-lg text-gray-200 font-medium">{{ item }}</span>
                    </div>
                </div>

                <!-- CTA -->
                <div class="mt-12 scroll-hidden" ref="cta">
                    <NuxtLink
                        to="/projects"
                        class="apple-button inline-flex items-center gap-3 text-lg"
                    >
                        <span>Explore My Work</span>
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
        </div>
    </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from "lucide-vue-next";
import { ref, onMounted } from "vue";

const portrait = ref<HTMLElement>();
const content = ref<HTMLElement>();
const featureItems = ref<HTMLElement[]>([]);
const cta = ref<HTMLElement>();

const features = [
    "Full-Stack Engineering & Architecture",
    "Passion Projects like Crowd-Nation",
    "Fast, Scalable Web Apps",
    "Hacking, Hardware & Creative Coding",
];

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

    // Observe all animated elements
    if (portrait.value) observer.observe(portrait.value);
    if (content.value) observer.observe(content.value);
    if (cta.value) observer.observe(cta.value);

    featureItems.value.forEach((item) => {
        if (item) observer.observe(item);
    });
});
</script>
