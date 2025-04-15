<template>
    <NuxtLink
        :to="to"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        :class="[
            'inline-flex items-center gap-2 text-sm font-medium transition-colors',
            external
                ? 'text-zinc-400 hover:text-indigo-300'
                : 'text-indigo-400 hover:text-indigo-300',
        ]"
    >
        <ExternalLink v-if="external" class="w-4 h-4" />
        <Link2 v-else class="w-4 h-4" />
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
import { Link2, ExternalLink } from "lucide-vue-next";

defineProps<{
    to: string;
    external?: boolean;
}>();
</script>
