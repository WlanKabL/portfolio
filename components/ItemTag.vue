<template>
    <span
        class="px-3 py-1 rounded-full text-sm"
        :class="primary ? 'bg-indigo-600/20 text-indigo-300' : 'bg-zinc-600/20 text-zinc-300'"
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
