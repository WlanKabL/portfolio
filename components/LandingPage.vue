<template>
    <section class="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <!-- Enhanced Background with Parallax -->
        <div
            class="absolute inset-0 bg-cover bg-center z-0 scale-110"
            style="
                background-image: url(&quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&quot;);
            "
            :style="{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }"
        >
            <!-- Enhanced gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-black/90" />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
            
            <!-- Animated particles -->
            <ClientOnly>
                <div class="absolute inset-0">
                    <div 
                        v-for="i in 50" 
                        :key="i"
                        class="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
                        :style="{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 3 + 's',
                            animationDuration: (3 + Math.random() * 2) + 's'
                        }"
                    />
                </div>
            </ClientOnly>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 max-w-4xl mx-auto">
            <!-- Hero Title with Staggered Animation -->
            <div class="mb-8">
                <h1 class="text-5xl sm:text-7xl font-black text-white leading-tight mb-4 scroll-hidden" 
                    ref="heroTitle"
                    style="animation-delay: 0.2s">
                    <span class="text-gradient block">
                        {{ $t("landing.hero_title_part1") }}
                    </span>
                    <span class="block mt-2">
                        {{ $t("landing.hero_title_part2") }}
                    </span>
                </h1>
            </div>

            <!-- Subtitle -->
            <p class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed scroll-hidden"
               ref="subtitle"
               style="animation-delay: 0.4s">
                {{ $t("landing.hero_subtitle") }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-hidden"
                 ref="ctaButtons"
                 style="animation-delay: 0.6s">
                <NuxtLink
                    to="/projects"
                    class="apple-button group relative overflow-hidden px-8 py-4 text-lg font-semibold"
                >
                    <span class="relative z-10 flex items-center gap-2">
                        {{ $t("landing.view_projects") }}
                        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </span>
                </NuxtLink>

                <NuxtLink
                    to="/contact"
                    class="glass group relative overflow-hidden px-8 py-4 text-lg font-semibold text-white hover:text-purple-200 transition-all duration-300 rounded-xl"
                >
                    <span class="relative z-10 flex items-center gap-2">
                        {{ $t("landing.contact_me") }}
                        <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                    </span>
                </NuxtLink>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-hidden"
                 style="animation-delay: 1s">
                <div class="animate-bounce">
                    <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const heroTitle = ref<HTMLElement>()
const subtitle = ref<HTMLElement>()
const ctaButtons = ref<HTMLElement>()

// Parallax scroll effect
const handleScroll = () => {
    scrollY.value = window.scrollY
}

// Intersection Observer for animations
const observeElements = () => {
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

    // Observe elements
    if (heroTitle.value) observer.observe(heroTitle.value)
    if (subtitle.value) observer.observe(subtitle.value)
    if (ctaButtons.value) observer.observe(ctaButtons.value)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    observeElements()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
