<template>
    <span
        class="group/tag relative px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105"
        :class="
            primary
                ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-500/40 hover:from-indigo-500/20 hover:to-purple-500/20'
                : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:bg-white/10'
        "
    >
        {{ name }}
    </span>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        name: string;
        primary?: boolean;
    }>(),
    {
        primary: true,
    },
);
</script>
