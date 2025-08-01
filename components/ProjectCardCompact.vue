<template>
    <div
        class="flex flex-col justify-between rounded-2xl overflow-hidden glass hover:scale-105 hover:rotate-1 transition-all duration-500 group relative border border-purple-500/20"
    >
        <!-- Glow Effect -->
        <div
            class="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        ></div>

        <div class="relative">
            <!-- Image Container -->
            <div class="relative overflow-hidden">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                ></div>

                <!-- Overlay Content -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-end p-6"
                >
                    <div class="apple-button text-sm">
                        <NuxtLink :to="link" class="flex items-center gap-2">
                            <span>View Project</span>
                            <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
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

                <!-- Floating Tech Badge -->
                <div
                    class="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white"
                >
                    {{ tech[0] }}
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-grow relative z-10">
            <NuxtLink :to="link">
                <h3
                    class="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors duration-300 group-hover:text-purple-200"
                >
                    {{ title }}
                </h3>
            </NuxtLink>

            <p class="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                {{ description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-6">
                <ItemTag
                    v-for="(item, index) in tech.slice(0, 4)"
                    :key="index"
                    :name="item"
                    class="transform hover:scale-105 transition-transform duration-200"
                />
                <span
                    v-if="tech.length > 4"
                    class="text-xs text-purple-400 font-medium self-center"
                >
                    +{{ tech.length - 4 }} more
                </span>
            </div>

            <!-- Mobile CTA -->
            <div class="mt-auto md:hidden">
                <NuxtLink :to="link" class="apple-button w-full text-center block">
                    <span>View Project</span>
                </NuxtLink>
            </div>
        </div>

        <!-- Subtle corner decoration -->
        <div
            class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl"
        ></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string[];
}>();
</script>
