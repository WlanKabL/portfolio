<template>
    <div v-reveal class="flex items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
            <p class="section-label mb-4">
                <span class="index">{{ index }}</span>
                <span class="px-2 text-faint/60">/</span>
                {{ label }}
            </p>
            <h2
                class="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink"
            >
                <slot>{{ title }}</slot>
            </h2>
        </div>
        <NuxtLink
            v-if="linkTo && linkLabel"
            :to="linkTo"
            class="link-underline hidden sm:inline-block shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors pb-2"
        >
            {{ linkLabel }} &rarr;
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    index: string;
    label: string;
    title?: string;
    linkTo?: string;
    linkLabel?: string;
}>();
</script>
