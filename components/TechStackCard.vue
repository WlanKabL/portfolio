<template>
    <div
        class="p-6 rounded-xl bg-zinc-800/60 backdrop-blur-sm shadow-lg group hover:bg-indigo-600/15 transition-colors duration-300 text-center"
    >
        <div class="flex flex-col items-center mb-4">
            <component :is="icon" class="w-8 h-8 text-indigo-400" />
            <span class="mt-2 font-semibold text-white">{{ title }}</span>
        </div>
        <div class="flex flex-wrap justify-center gap-2">
            <ItemTag v-for="(item, index) in skills" :key="index" :name="item" />
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
