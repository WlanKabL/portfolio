<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <!-- Header: message left, portrait card right -->
        <header class="grid md:grid-cols-12 gap-12 md:gap-10 items-center mb-16 md:mb-24">
            <div class="md:col-span-7">
                <p v-reveal class="section-label mb-6">
                    <span class="index">&#64;</span>
                    <span class="px-2 text-faint/60">/</span>
                    {{ $t("nav.about") }}
                </p>
                <h1
                    v-reveal="80"
                    class="font-display font-bold tracking-tight text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-ink mb-6"
                >
                    {{ $t("pages.about.title") }}
                </h1>
                <p v-reveal="160" class="text-muted text-lg leading-relaxed max-w-2xl">
                    {{ $t("pages.about.subtitle") }}
                </p>
            </div>

            <div v-reveal="120" class="md:col-span-5 flex justify-center md:justify-end">
                <div class="relative w-64 sm:w-72">
                    <div
                        class="relative bg-white border border-line rounded-sm p-3 pb-12 rotate-[2deg] hover:rotate-0 transition-transform duration-500 shadow-[0_30px_60px_-25px_rgba(24,19,23,0.45)]"
                    >
                        <img
                            src="https://downloads.crowd-nation.com/Portfolio.png"
                            alt="Philipp aka WlanKabL"
                            class="w-full aspect-[3/4] object-cover object-top"
                        />
                        <p
                            class="absolute bottom-3.5 left-0 right-0 text-center font-mono text-xs text-muted"
                        >
                            <span class="text-accent">&plus;</span> Ochtrup, Germany
                        </p>
                        <span
                            class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-highlight/85 rotate-[4deg] shadow-sm"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </header>

        <!-- Story sections -->
        <div class="grid md:grid-cols-2 gap-x-16 gap-y-0 mb-20">
            <section
                v-for="(block, index) in blocks"
                :key="block.title"
                v-reveal="(index % 2) * 100"
                class="border-t border-line py-10"
            >
                <p class="font-mono text-xs text-accent mb-4">
                    {{ String(index + 1).padStart(2, "0") }}
                </p>
                <h2 class="font-display font-bold text-2xl sm:text-3xl text-ink mb-4">
                    {{ block.title }}
                </h2>
                <p class="text-muted leading-relaxed">
                    {{ block.text }}
                </p>
            </section>
        </div>

        <!-- CTA -->
        <div v-reveal class="border-t border-line pt-14 flex flex-wrap items-center gap-6 sm:gap-8">
            <NuxtLink to="/projects" class="btn-primary group">
                {{ $t("pages.about.view_work") }}
                <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                    >&rarr;</span
                >
            </NuxtLink>
            <p class="font-mono text-xs text-faint">
                {{ $t("pages.about.connect_text") }}
                <NuxtLink
                    to="/contact"
                    class="link-underline text-muted hover:text-ink transition-colors ml-1"
                >
                    {{ $t("pages.about.connect_link") }}
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

definePageMeta({
    layout: "default",
});

const { t } = useI18n();

const blocks = computed(() => [
    { title: t("pages.about.developer_title"), text: t("pages.about.developer_text") },
    {
        title: t("pages.about.music_title"),
        text: t("pages.about.music_text", { crowdnation: "Crowd-Nation" }),
    },
    { title: t("pages.about.vision_title"), text: t("pages.about.vision_text") },
    { title: t("pages.about.tools_title"), text: t("pages.about.tools_text") },
]);

useSeoMeta({
    title: "About | </WlanKabL>",
    ogTitle: "About | </WlanKabL>",
    description:
        "Learn more about WlanKabL, a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogDescription:
        "Learn more about WlanKabL, a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
