<template>
    <NuxtLink
        :to="to"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        :class="[
            'inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105',
            external
                ? 'text-gray-400 hover:text-purple-300'
                : 'text-purple-400 hover:text-purple-300',
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
