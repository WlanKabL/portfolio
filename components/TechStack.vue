<template>
    <section class="py-20 max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center text-white">Tech Stack</h2>
        <div
            class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0"
        >
            <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
            <TechStackCard
                v-for="(stack, index) in techStacks"
                :key="index"
                :title="stack.title"
                :icon="stack.icon"
                :skills="stack.skills"
                class="min-w-[80%] min-h-[250px] h-full snap-center md:min-w-0 md:h-auto scroll-smooth"
            />
            <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
        </div>
    </section>
</template>

<script setup lang="ts">
import TechStackCard from "~/components/TechStackCard.vue";
import { techStacks } from "~/data/techStacks";
</script>
