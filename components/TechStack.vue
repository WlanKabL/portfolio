<template>
    <section class="py-32 max-w-7xl mx-auto px-4 relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 tech-grid opacity-20"></div>
        
        <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient scroll-hidden" ref="titleRef">
                {{ $t("tech_stack.title") }}
            </h2>
            
            <p class="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto scroll-hidden" ref="subtitleRef">
                A comprehensive arsenal of modern technologies and tools that power my development workflow
            </p>
            
            <div
                class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 md:scroll-px-0"
            >
                <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
                <TechStackCard
                    v-for="(stack, index) in techStacks"
                    :key="index"
                    :title="$t(`tech_stack.${stack.key}`)"
                    :icon="stack.icon"
                    :skills="stack.skills"
                    :class="`min-w-[80%] min-h-[300px] h-full snap-center md:min-w-0 md:h-auto scroll-smooth tech-card scroll-hidden`"
                    :style="{ animationDelay: (index * 0.1) + 's' }"
                />
                <div class="block md:hidden shrink-0 w-[10vw]" aria-hidden="true" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TechStackCard from "~/components/TechStackCard.vue";
import { techStacks } from "~/data/techStacks";
import { ref, onMounted } from 'vue'

const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('scroll-hidden')
                    entry.target.classList.add('scroll-visible')
                }
            })
        },
        { threshold: 0.1 }
    )

    if (titleRef.value) observer.observe(titleRef.value)
    if (subtitleRef.value) observer.observe(subtitleRef.value)
    
    // Observe tech cards
    document.querySelectorAll('.tech-card').forEach(card => {
        observer.observe(card)
    })
})
</script>
