<template>
    <div
        class="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0D1117] text-zinc-100"
    >
        <h1 class="text-7xl font-bold text-indigo-500 mb-4">404</h1>
        <p class="text-xl mb-6">Oops. Die Seite gibt’s nicht (mehr)...</p>
        <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-all"
        >
            Zurück zur Startseite
            <span class="animate-bounce">🏠</span>
        </NuxtLink>
        <p class="mt-10 text-xs text-zinc-600/60">Fehlercode: {{ error?.statusCode || 404 }}</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});

defineProps<{
    error: {
        statusCode?: number;
        statusMessage?: string;
        message?: string;
    };
}>();
</script>
