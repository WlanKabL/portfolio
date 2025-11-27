<template>
    <div class="container mx-auto px-4 py-8">
        <div v-if="!hideBackButton" class="mb-8">
            <button
                class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/10 text-sm transition-all duration-300"
                @click="goBack"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back
            </button>
        </div>
        <div class="bg-black p-6 rounded-2xl">
            <div class="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 v-if="title" class="text-4xl sm:text-5xl font-bold text-white mb-4">
                    {{ title }}
                </h2>
                <div
                    v-if="title"
                    class="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"
                />
                <p v-if="subtitle" class="text-white/60 text-lg">
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
    hideBackButton?: boolean;
}>();

const route = useRoute();
const router = useRouter();

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // fallback: geh einen Pfad höher, z.B. /projects/slug → /projects
        const segments = route.fullPath.split("/");
        segments.pop(); // letzten Teil (slug) entfernen
        router.push(segments.join("/") || "/");
    }
}
</script>
