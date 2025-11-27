<template>
    <div
        class="group flex flex-col justify-between rounded-2xl overflow-hidden glass border border-white/5 hover:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
    >
        <div class="relative overflow-hidden">
            <img
                :src="image"
                :alt="title"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <!-- Gradient overlay on hover -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6"
            >
                <div
                    class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                    <LinkItem :to="link" class="text-white hover:text-indigo-400">
                        View Project →
                    </LinkItem>
                </div>
            </div>

            <!-- Shine effect on hover -->
            <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
            />
        </div>

        <div class="p-6 flex flex-col flex-grow bg-gradient-to-b from-zinc-900/50 to-zinc-950/50">
            <NuxtLink :to="link">
                <h3
                    class="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                >
                    {{ title }}
                </h3>
            </NuxtLink>

            <p class="text-white/60 text-sm mb-5 flex-grow line-clamp-3">
                {{ description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
                <ItemTag
                    v-for="(item, index) in tech"
                    :key="index"
                    :name="item"
                    class="transform group-hover:scale-105 transition-transform duration-300"
                    :style="{ transitionDelay: `${index * 30}ms` }"
                />
            </div>

            <div class="mt-auto md:hidden pt-4 border-t border-white/5">
                <LinkItem :to="link" class="text-white/70 hover:text-white">
                    View Project →
                </LinkItem>
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
