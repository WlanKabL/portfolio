<template>
    <NuxtLink
        :to="to"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        class="group inline-flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.15em] border border-line-strong text-muted hover:text-ink hover:border-accent px-4 py-3 transition-colors duration-300"
    >
        <span class="inline-flex items-center gap-2">
            <ExternalLink v-if="external" class="w-3.5 h-3.5" />
            <Link2 v-else class="w-3.5 h-3.5" />
            <slot />
        </span>
        <span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
    </NuxtLink>
</template>

<script setup lang="ts">
import { Link2, ExternalLink } from "lucide-vue-next";

defineProps<{
    to: string;
    external?: boolean;
}>();
</script>
