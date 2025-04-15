<template>
    <div class="relative inline-block text-left">
        <select
            v-model="$i18n.locale"
            class="appearance-none bg-zinc-800 text-white font-medium rounded-lg px-4 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
            <option
                v-for="locale in availableLocales"
                :key="locale.code"
                :value="locale.code"
                class="bg-zinc-900 text-white"
            >
                {{ locale.name }}
            </option>
        </select>
        <svg
            class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
const availableLocales = useI18n().locales.value.filter((l) => typeof l !== "string") as {
    code: string;
    name: string;
}[];
</script>
