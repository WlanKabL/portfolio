<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <!-- Header -->
        <header class="mb-16 md:mb-24">
            <p v-reveal class="section-label mb-6">
                <span class="index">&#47;&#47;</span>
                <span class="px-2 text-faint/60">/</span>
                {{ $t("nav.contact") }}
            </p>
            <h1
                v-reveal="80"
                class="font-display font-bold tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.05] text-ink max-w-4xl mb-6"
            >
                {{ $t("pages.contact.title") }}
            </h1>
            <p v-reveal="160" class="text-muted text-lg leading-relaxed max-w-2xl">
                {{ $t("pages.contact.subtitle") }}
            </p>
        </header>

        <div class="grid lg:grid-cols-12 gap-14 lg:gap-20">
            <!-- Direct channels -->
            <div v-reveal class="lg:col-span-5">
                <h2 class="section-label mb-6">{{ $t("pages.contact.channels") }}</h2>
                <ul class="flex flex-col">
                    <li class="border-t border-line">
                        <a
                            href="https://www.linkedin.com/in/philipp-stecher-aab167258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center justify-between py-5 text-muted hover:text-ink transition-colors"
                        >
                            <span class="inline-flex items-center gap-4">
                                <IconLinkedin
                                    class="w-4 h-4 text-faint group-hover:text-accent transition-colors"
                                />
                                LinkedIn
                            </span>
                            <span
                                class="font-mono text-xs text-faint transition-transform duration-300 group-hover:translate-x-1"
                                >&rarr;</span
                            >
                        </a>
                    </li>
                    <li class="border-t border-line">
                        <a
                            href="https://github.com/WlanKabL"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center justify-between py-5 text-muted hover:text-ink transition-colors"
                        >
                            <span class="inline-flex items-center gap-4">
                                <IconGithub
                                    class="w-4 h-4 text-faint group-hover:text-accent transition-colors"
                                />
                                GitHub
                            </span>
                            <span
                                class="font-mono text-xs text-faint transition-transform duration-300 group-hover:translate-x-1"
                                >&rarr;</span
                            >
                        </a>
                    </li>
                    <li class="border-t border-b border-line">
                        <div class="flex items-center justify-between py-5 text-muted">
                            <span class="inline-flex items-center gap-4">
                                <IconMessageCircle class="w-4 h-4 text-faint" />
                                Discord
                            </span>
                            <span class="font-mono text-xs text-faint">wlankabl</span>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Form -->
            <div v-reveal="120" class="lg:col-span-7">
                <h2 class="section-label mb-6">{{ $t("contact.form_title") }}</h2>
                <ContactForm />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Github as IconGithub,
    Linkedin as IconLinkedin,
    MessageCircle as IconMessageCircle,
} from "lucide-vue-next";

definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "Contact | </WlanKabL>",
    ogTitle: "Contact | </WlanKabL>",
    description:
        "Reach out to WlanKabL, whether it's for a project, collaboration, or just to connect.",
    ogDescription:
        "Reach out to WlanKabL, whether it's for a project, collaboration, or just to connect.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
