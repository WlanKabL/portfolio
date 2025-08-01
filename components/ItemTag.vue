<template>
    <span
        class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 hover:scale-105"
        :class="
            primary
                ? 'bg-purple-600/20 text-purple-200 border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400/50'
                : 'bg-gray-600/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30 hover:border-gray-400/50'
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
