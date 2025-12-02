<template>
    <div
        class="group relative flex flex-col glass border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-white/10 hover:-translate-y-2 duration-500 h-full"
    >
        <!-- Animated glow effect on hover -->
        <div
            class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-3xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100"
        />

        <div class="relative h-full flex flex-col">
            <!-- Image Section - Fixed height for consistency -->
            <NuxtLink :to="link" class="relative overflow-hidden block flex-shrink-0 h-56">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]"
                />
                <!-- Gradient overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />

                <!-- Hover overlay with icon - smooth fade -->
                <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                    <div
                        class="p-4 rounded-full bg-white/20 border border-white/30 backdrop-blur-md transform scale-90 group-hover:scale-100 transition-all duration-500"
                    >
                        <IconArrowUpRight class="w-6 h-6 text-white" />
                    </div>
                </div>
            </NuxtLink>

            <!-- Content Section -->
            <div class="relative flex-1 p-6 flex flex-col justify-between gap-4">
                <div class="space-y-3">
                    <h3
                        class="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2"
                    >
                        {{ title }}
                    </h3>
                    <p class="text-white/60 leading-relaxed text-sm line-clamp-3">
                        {{ description }}
                    </p>

                    <!-- Tech Tags -->
                    <div class="flex flex-wrap gap-1.5 pt-2">
                        <ItemTag
                            v-for="(item, index) in displayTech"
                            :key="index"
                            :name="item"
                            class="text-xs"
                        />
                        <span
                            v-if="tech.length > maxTechDisplay"
                            class="px-2 py-1 text-[10px] rounded-full glass border border-white/5 text-white/40"
                        >
                            +{{ tech.length - maxTechDisplay }}
                        </span>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-2 pt-2">
                    <NuxtLink
                        :to="link"
                        class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-300 group/btn"
                    >
                        <span>View</span>
                        <IconArrowRight
                            class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"
                        />
                    </NuxtLink>
                    <NuxtLink
                        v-if="github"
                        :to="github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white/5"
                    >
                        <IconGithub class="w-4 h-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ArrowUpRight as IconArrowUpRight,
    ArrowRight as IconArrowRight,
    Github as IconGithub,
} from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps<{
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string[];
}>();

// Display max 4 tech tags
const maxTechDisplay = 4;
const displayTech = computed(() => props.tech.slice(0, maxTechDisplay));
</script>
