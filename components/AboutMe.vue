<template>
    <section class="py-32 relative overflow-hidden">
        <!-- Fade masks for smooth transitions -->
        <div
            class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"
        />
        <div
            class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"
        />

        <!-- Background elements -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]"
        />

        <div
            class="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4"
        >
            <!-- Image with animated border -->
            <div class="relative group w-fit mx-auto md:mx-0 animate-[fade-in-up_0.8s_ease-out]">
                <!-- Animated gradient border -->
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-gradient"
                />

                <!-- Glow effect -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                />

                <img
                    src="https://downloads.crowd-nation.com/Portfolio.png"
                    alt="Portrait"
                    class="relative w-64 h-64 rounded-3xl object-cover shadow-2xl group-hover:scale-105 transition-all duration-500 border border-white/10"
                />
            </div>

            <!-- Content -->
            <div class="space-y-6 animate-[fade-in-up_1s_ease-out_0.2s_both]">
                <h2 class="text-4xl md:text-5xl font-bold text-white">
                    {{ $t("about.title") }}
                </h2>

                <p class="text-white/70 text-lg leading-relaxed">
                    {{
                        $t("about.description", {
                            wlankabl: "WlanKabL",
                            technologies: "Vue, Node.js & C#",
                        })
                    }}
                </p>

                <ul class="space-y-4 pt-4">
                    <li
                        v-for="(item, index) in features"
                        :key="index"
                        class="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300 group/item animate-[slide-in-right_0.6s_ease-out_both]"
                        :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
                    >
                        <div
                            class="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover/item:from-indigo-500/30 group-hover/item:to-purple-500/30 transition-all duration-300"
                        >
                            <IconZap
                                class="w-5 h-5 text-indigo-400 group-hover/item:text-indigo-300 transition-colors"
                            />
                        </div>
                        <span
                            class="text-white/80 group-hover/item:text-white transition-colors flex-1"
                        >
                            {{ item }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from "lucide-vue-next";
import { computed } from "vue";

const { t } = useI18n();

const features = computed(() => [
    t("about.engineering"),
    t("about.passion_projects", { crowdnation: "Crowd-Nation" }),
    t("about.scalable_apps"),
    t("about.creative_coding"),
]);
</script>
