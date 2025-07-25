<template>
    <div>
        <LandingPage />
        <ProjectCompactPreviews title="Featured Projects" :projects="featuredProjects" />
        <AboutMe />
        <TechStack />
        <ContactForm :title="$t('contact.title')" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

// Use reactive projects composable for immediate locale switching
const { featuredProjects } = useProjects();

useSeoMeta({
    title: "</WlanKabL>",
    ogTitle: "</WlanKabL>",
    description: "Welcome to my portfolio! Explore my projects and skills.",
    ogDescription: "Welcome to my portfolio! Explore my projects and skills.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
