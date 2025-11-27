<template>
    <div
        class="relative p-8 rounded-2xl glass border border-white/5 shadow-2xl group hover:border-white/10 hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden"
    >
        <!-- Shine effect on hover -->
        <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent"
        />

        <!-- Gradient glow on hover -->
        <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10"
        />

        <div class="relative flex flex-col items-center mb-6 space-y-3">
            <!-- Icon with animated background -->
            <div
                class="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 group-hover:scale-110 transition-all duration-500"
            >
                <component
                    :is="icon"
                    class="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300"
                />
            </div>

            <span class="font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                {{ title }}
            </span>
        </div>

        <div class="relative flex flex-wrap justify-center gap-2">
            <ItemTag
                v-for="(item, index) in skills"
                :key="index"
                :name="item"
                class="animate-[fade-in_0.4s_ease-out_both]"
                :style="{ animationDelay: `${index * 0.05}s` }"
            />
        </div>
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
