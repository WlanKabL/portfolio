<template>
    <section class="relative py-20 min-h-screen px-4">
        <!-- Professional Background with Purple Theme -->
        <div class="absolute inset-0">
            <div
                class="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/95"
            />
            <div class="absolute inset-0 tech-grid opacity-5"></div>
        </div>

        <div class="relative z-10 max-w-3xl mx-auto text-center">
            <h1 class="text-4xl font-bold text-gradient mb-6">{{ $t("pages.contact.title") }}</h1>
            <p class="text-gray-300 text-lg mb-12">
                {{ $t("pages.contact.subtitle") }}
            </p>

            <ContactForm :title="$t('contact.form_title')" />

            <div class="flex flex-col sm:flex-row justify-center gap-6 text-white text-lg mt-12">
                <a
                    href="https://www.linkedin.com/in/philipp-stecher-aab167258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                >
                    <IconLinkedin class="w-5 h-5" /> LinkedIn
                </a>

                <a
                    href="https://github.com/WlanKabL"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                >
                    <IconGithub class="w-5 h-5" /> GitHub
                </a>

                <div
                    class="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
                >
                    <img src="/discord.svg" alt="Discord" class="w-5 h-5" />
                    wlankabl
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Github as IconGithub, Linkedin as IconLinkedin } from "lucide-vue-next";

definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "Contact – </WlanKabL>",
    ogTitle: "Contact – </WlanKabL>",
    description:
        "Reach out to WlanKabL – whether it’s for a project, collaboration, or just to connect.",
    ogDescription:
        "Reach out to WlanKabL – whether it’s for a project, collaboration, or just to connect.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
