<template>
    <div>
        <LandingPage />
        <ProjectCompactPreviews title="Featured Projects" :projects="translatedProjects" />
        <AboutMe />
        <TechStack />
        <ContactForm :title="$t('contact.title')" />
    </div>
</template>

<script setup lang="ts">
import { getProjects } from "~/data/projects";

definePageMeta({
    layout: "default",
});

const { t } = useI18n();
const translatedProjects = getProjects(t);

useSeoMeta({
    title: "</WlanKabL>",
    ogTitle: "</WlanKabL>",
    description: "Welcome to my portfolio! Explore my projects and skills.",
    ogDescription: "Welcome to my portfolio! Explore my projects and skills.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
