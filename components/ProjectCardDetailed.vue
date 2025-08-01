<template>
    <div
        class="flex flex-col md:flex-row glass rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] h-full group"
    >
        <NuxtLink :to="link" class="w-full md:w-1/2">
            <div class="w-full h-full max-h-64 md:max-h-full overflow-hidden relative">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
            </div>
        </NuxtLink>

        <div class="p-6 flex flex-col justify-between w-full md:w-1/2 gap-4">
            <div>
                <h3
                    class="text-2xl font-bold text-white mb-2 hover:text-purple-400 transition-colors duration-300"
                >
                    {{ title }}
                </h3>
                <p class="text-gray-300 leading-relaxed">
                    {{ description }}
                </p>
                <div class="flex flex-wrap gap-2 mt-4">
                    <ItemTag v-for="(item, index) in tech" :key="index" :name="item" />
                </div>
            </div>
            <div class="mt-4 flex gap-4 flex-wrap text-sm font-medium">
                <LinkItem :to="link"> View Project </LinkItem>
                <LinkItem v-if="github" :to="github" :external="true"> GitHub </LinkItem>
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
    github?: string;
    tech: string[];
}>();
</script>
