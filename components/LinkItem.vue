<template>
    <NuxtLink
        :to="to"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        :class="[
            'group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border',
            external
                ? 'text-white/70 hover:text-white bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                : 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent hover:from-indigo-500 hover:to-purple-500 hover:scale-105 shadow-lg hover:shadow-indigo-500/50',
        ]"
    >
        <ExternalLink v-if="external" class="w-4 h-4 group-hover:scale-110 transition-transform" />
        <Link2 v-else class="w-4 h-4 group-hover:scale-110 transition-transform" />
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
