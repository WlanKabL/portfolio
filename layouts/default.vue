<template>
    <div class="min-h-screen flex flex-col bg-bg text-ink">
        <NavBar
            class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            :class="[
                scrolled ? 'glass' : 'bg-transparent',
                hideOnMobile ? '-translate-y-full md:translate-y-0' : 'translate-y-0',
            ]"
        />
        <main class="flex-1" :class="{ 'pt-24': !noTopPadding }">
            <NuxtPage />
        </main>
        <PageFooter />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const route = useRoute();
const scrolled = ref(false);
const hideOnMobile = ref(false);
let lastScrollY = 0;

// The homepage hero starts at the very top, so it needs no nav offset
const noTopPadding = computed(() => route.path === "/");

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    scrolled.value = currentScrollY > 50;

    // Hide the nav on mobile while scrolling down, show it again when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        hideOnMobile.value = true;
    } else if (currentScrollY < lastScrollY) {
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
