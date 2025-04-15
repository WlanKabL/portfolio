<template>
    <span class="px-3 py-1 rounded-full text-sm bg-indigo-600/10 text-indigo-400">
        {{ name }}
    </span>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
}>();
</script>
