<template>
    <div class="min-h-screen flex flex-col bg-black text-white">
        <NavBar
            class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            :class="[
                scrolled ? 'glass' : 'bg-transparent',
                hideOnMobile ? '-translate-y-full md:translate-y-0' : 'translate-y-0',
            ]"
        />
        <main class="flex-1 bg-black">
            <div class="animate-[fade-in_0.6s_ease-out]">
                <NuxtPage />
            </div>
        </main>
        <PageFooter class="bg-zinc-950 border-t border-white/5" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const hideOnMobile = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Glass effect when scrolled
    scrolled.value = currentScrollY > 50;

    // Hide on mobile when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        hideOnMobile.value = true;
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        hideOnMobile.value = false;
    }

    lastScrollY = currentScrollY;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
