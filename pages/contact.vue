<template>
    <section class="relative min-h-screen overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-black" />
        <div class="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div class="relative py-32 px-4">
            <div class="max-w-3xl mx-auto text-center">
                <div class="mb-12 animate-[fade-in-up_0.8s_ease-out]">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        {{ $t("pages.contact.title") }}
                    </h1>
                    <div
                        class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"
                    />
                    <p class="text-white/60 text-lg">
                        {{ $t("pages.contact.subtitle") }}
                    </p>
                </div>

                <ContactForm :title="$t('contact.form_title')" />

                <div
                    class="flex flex-col sm:flex-row justify-center gap-6 text-white text-lg mt-16 animate-[fade-in_1s_ease-out_0.3s_both]"
                >
                    <a
                        href="https://www.linkedin.com/in/philipp-stecher-aab167258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300"
                    >
                        <IconLinkedin
                            class="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform"
                        />
                        <span class="group-hover:text-indigo-400 transition-colors">
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href="https://github.com/WlanKabL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                    >
                        <IconGithub
                            class="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform"
                        />
                        <span class="group-hover:text-purple-400 transition-colors"> GitHub </span>
                    </a>

                    <div
                        class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                        <img
                            src="/discord.svg"
                            alt="Discord"
                            class="w-5 h-5 group-hover:scale-110 transition-transform"
                        />
                        <span class="group-hover:text-pink-400 transition-colors"> wlankabl </span>
                    </div>
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
