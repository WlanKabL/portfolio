<template>
    <div class="min-h-screen flex items-center bg-bg text-ink px-5 sm:px-8">
        <div class="max-w-2xl mx-auto w-full">
            <!-- Terminal trace -->
            <div
                class="border border-line bg-surface font-mono text-xs sm:text-sm p-5 sm:p-6 mb-10 animate-[fade-in_0.6s_ease-out_both]"
            >
                <p class="text-faint mb-2">
                    <span class="text-accent">$</span> curl https://wlankabl.com{{ route.path }}
                </p>
                <p class="text-red-600">HTTP/1.1 404 Not Found</p>
            </div>

            <h1
                class="font-display font-bold tracking-tight text-[clamp(4rem,15vw,9rem)] leading-none text-ink mb-6 animate-[fade-in_0.8s_ease-out_0.2s_both]"
            >
                404<span class="text-accent">.</span>
            </h1>
            <p
                class="text-muted text-lg leading-relaxed mb-12 animate-[fade-in_0.8s_ease-out_0.35s_both]"
            >
                {{ $t("pages.not_found.description") }}
            </p>

            <NuxtLink to="/" class="btn-primary group animate-[fade-in_0.8s_ease-out_0.5s_both]">
                {{ $t("pages.not_found.back_home") }}
                <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                    >&rarr;</span
                >
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});

const route = useRoute();

useSeoMeta({
    title: "404 | Page Not Found",
    ogTitle: "404 | Page Not Found",
    description:
        "Oops! This page doesn't exist or might have been moved. Head back to explore more about WlanKabL.",
    ogDescription:
        "Oops! This page doesn't exist or might have been moved. Head back to explore more about WlanKabL.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
