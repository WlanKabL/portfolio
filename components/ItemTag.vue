<template>
    <span
        class="inline-block font-mono text-[11px] px-2.5 py-1 border transition-colors duration-300"
        :class="
            primary
                ? 'text-ink border-line-strong hover:border-accent hover:text-accent'
                : 'text-faint border-line hover:border-line-strong hover:text-muted'
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
