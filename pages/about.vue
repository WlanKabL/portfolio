<template>
    <section class="relative min-h-screen flex items-center justify-center px-4 py-20">
        <!-- Professional Background with Purple Theme -->
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
                background-image: url(&quot;https://downloads.crowd-nation.com/Portfolio.png&quot;);
            "
        >
            <div
                class="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/50 to-black/90"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent"
            />

            <!-- Subtle technical pattern -->
            <div class="absolute inset-0 tech-dots opacity-10"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto text-center text-white">
            <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-gradient">
                {{ $t("pages.about.title") }}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {{ $t("pages.about.subtitle") }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div
                    class="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                    <h2 class="text-2xl font-semibold mb-4 text-purple-400">
                        {{ $t("pages.about.developer_title") }}
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ $t("pages.about.developer_text") }}
                    </p>
                </div>

                <div
                    class="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                    <h2 class="text-2xl font-semibold mb-4 text-purple-400">
                        {{ $t("pages.about.music_title") }}
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        <span
                            v-html="
                                $t('pages.about.music_text', {
                                    crowdnation: '<strong>Crowd-Nation</strong>',
                                })
                            "
                        ></span>
                    </p>
                </div>

                <div
                    class="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                    <h2 class="text-2xl font-semibold mb-4 text-purple-400">
                        {{ $t("pages.about.vision_title") }}
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ $t("pages.about.vision_text") }}
                    </p>
                </div>

                <div
                    class="glass rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                    <h2 class="text-2xl font-semibold mb-4 text-purple-400">
                        {{ $t("pages.about.tools_title") }}
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        {{ $t("pages.about.tools_text") }}
                    </p>
                </div>
            </div>

            <div class="mt-12">
                <NuxtLink
                    to="/projects"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                    {{ $t("pages.about.view_work") }}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                    </svg>
                </NuxtLink>
            </div>

            <p class="mt-16 text-gray-500 text-sm">
                {{ $t("pages.about.connect_text") }}
                <NuxtLink to="/contact" class="underline hover:text-purple-400 transition-colors">{{
                    $t("pages.about.connect_link")
                }}</NuxtLink>
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "About – </WlanKabL>",
    ogTitle: "About – </WlanKabL>",
    description:
        "Learn more about WlanKabL – a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogDescription:
        "Learn more about WlanKabL – a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
