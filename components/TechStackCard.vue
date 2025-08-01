<template>
    <div
        class="p-8 rounded-2xl glass group hover:scale-105 hover:-rotate-1 transition-all duration-500 text-center relative overflow-hidden border border-purple-500/20"
    >
        <!-- Glow Effect -->
        <div
            class="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        ></div>

        <!-- Background Pattern -->
        <div
            class="absolute inset-0 tech-dots opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        ></div>

        <div class="relative z-10">
            <!-- Icon Section -->
            <div class="flex flex-col items-center mb-6">
                <div
                    class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4"
                >
                    <component :is="icon" class="w-8 h-8 text-white" />
                </div>
                <span
                    class="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300"
                    >{{ title }}</span
                >
            </div>

            <!-- Skills Section -->
            <div class="flex flex-wrap justify-center gap-2">
                <ItemTag
                    v-for="(item, index) in skills"
                    :key="index"
                    :name="item"
                    class="transform group-hover:scale-105 transition-transform duration-200"
                    :style="{ transitionDelay: index * 50 + 'ms' }"
                />
            </div>
        </div>

        <!-- Subtle corner decoration -->
        <div
            class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-2xl"
        ></div>
        <div
            class="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-600/15 to-transparent rounded-2xl"
        ></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    skills: string[];
}>();
</script>
