<template>
    <div
        class="flex flex-col justify-between rounded-xl overflow-hidden bg-zinc-800 backdrop-blur-sm shadow-lg hover:scale-[1.02] transition-all duration-300 group"
    >
        <div class="relative">
            <img
                :src="image"
                :alt="title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end p-4"
            >
                <LinkItem :to="link"> View Project </LinkItem>
            </div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
            <NuxtLink :to="link">
                <h3
                    class="text-xl font-semibold text-white mb-2 hover:text-indigo-400 transition-colors"
                >
                    {{ title }}
                </h3>
            </NuxtLink>
            <p class="text-zinc-400 text-sm mb-4 flex-grow">
                {{ description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
                <ItemTag v-for="(item, index) in tech" :key="index" :name="item" />
            </div>
            <div class="mt-auto md:hidden">
                <LinkItem :to="link"> View Project </LinkItem>
            </div>
        </div>
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
