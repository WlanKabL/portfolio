<template>
    <PageContainer
        title="A glimpse into my work"
        subtitle="Explore a curated selection of my projects – each one
                    crafted with attention to detail, performance, and
                    scalability. From full-stack platforms to sleek UIs."
        :hideBackButton="true"
    >
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-stretch">
            <ProjectCardDetailed
                v-for="(project, index) in projects.filter((p) => p.active)"
                :key="index"
                :title="project.title"
                :description="project.description"
                :image="project.image"
                :link="project.link"
                :github="project.github"
                :tech="project.tech"
                class="flex flex-col h-full"
            />
        </div>
    </PageContainer>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";

definePageMeta({
    title: "Projects",
});

useSeoMeta({
    title: "Projects – </WlanKabL>",
    ogTitle: "Projects – </WlanKabL>",
    description:
        "Explore a curated selection of my work – from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogDescription:
        "Explore a curated selection of my work – from full-stack platforms and smart tools to interactive websites and open-source utilities.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
