<template>
    <div>
        <LandingPage />
        <ProjectCompactPreviews title="Featured Projects" :projects />
        <AboutMe />
        <TechStack />
        <ContactForm :title="$t('contact.title')" />
    </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";

definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "</WlanKabL>",
    ogTitle: "</WlanKabL>",
    description: "Welcome to my portfolio! Explore my projects and skills.",
    ogDescription: "Welcome to my portfolio! Explore my projects and skills.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
