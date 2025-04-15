<template>
    <div
        class="flex flex-col md:flex-row bg-zinc-800/80 border border-zinc-700 backdrop-blur-xl rounded-xl overflow-hidden shadow-md transition hover:shadow-xl hover:scale-[1.01] duration-300 h-full"
    >
        <NuxtLink :to="link" class="w-full md:w-1/2">
            <div class="w-full h-full max-h-64 md:max-h-full overflow-hidden relative">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full h-full object-cover absolute inset-0"
                />
            </div>
        </NuxtLink>

        <div class="p-6 flex flex-col justify-between w-full md:w-1/2 gap-4">
            <div>
                <h3
                    class="text-2xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors"
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
