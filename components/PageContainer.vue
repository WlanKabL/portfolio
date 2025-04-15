<template>
    <div class="container mx-auto px-4 py-8">
        <div class="bg-[#0D1117] p-6">
            <div class="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 v-if="title" class="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {{ title }}
                </h2>
                <p v-if="subtitle" class="text-gray-400">
                    {{ subtitle }}
                </p>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string;
    subtitle?: string;
}>();
</script>
