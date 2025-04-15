<template>
    <div>
        <LandingPage />
        <ProjectCompactPreviews title="Featured Projects" :projects />
        <AboutMe />
        <TechStack />
        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>
