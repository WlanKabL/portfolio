<template>
    <div
        class="group flex flex-col md:flex-row glass border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all hover:border-white/10 hover:-translate-y-1 duration-500 h-full"
    >
        <NuxtLink :to="link" class="w-full md:w-1/2 relative overflow-hidden">
            <div class="w-full h-full max-h-64 md:max-h-full overflow-hidden relative">
                <img
                    :src="image"
                    :alt="title"
                    class="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
                />
                <!-- Overlay gradient on hover -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
            </div>
        </NuxtLink>

        <div class="p-8 flex flex-col justify-between w-full md:w-1/2 gap-6">
            <div class="space-y-4">
                <h3
                    class="text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                >
                    {{ title }}
                </h3>
                <p class="text-white/70 leading-relaxed text-base">
                    {{ description }}
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                    <ItemTag
                        v-for="(item, index) in tech"
                        :key="index"
                        :name="item"
                        class="animate-[fade-in_0.4s_ease-out_both]"
                        :style="{ animationDelay: `${index * 0.05}s` }"
                    />
                </div>
            </div>
            <div class="flex gap-3 flex-wrap">
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
