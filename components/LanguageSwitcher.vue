<template>
    <div class="relative inline-block text-left group">
        <select
            v-model="currentLocale"
            class="appearance-none glass border border-white/10 text-white font-medium rounded-lg px-4 py-2 pr-10 shadow-lg focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            @change="setLocale"
        >
            <option
                v-for="loc in availableLocales"
                :key="loc.code"
                :value="loc.code"
                class="bg-zinc-900 text-white"
            >
                {{ loc.name }}
            </option>
        </select>
        <svg
            class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none group-focus-within:text-indigo-400 transition-colors"
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
import { useLocalStorage } from "@vueuse/core";

const { locale, locales, setLocale: setI18nLocale } = useI18n();

const availableLocales = locales.value.filter((l) => typeof l !== "string") as {
    code: string;
    name: string;
}[];

// Get valid locale codes for validation
const validLocaleCodes = availableLocales.map((l) => l.code);

// Use @vueuse/core useLocalStorage with validation
const currentLocale = useLocalStorage("portfolio_language", "en", {
    writeDefaults: false,
    serializer: {
        read: (value: string | null) => {
            try {
                const parsed = value ? JSON.parse(value) : null;
                // Validate stored value - if invalid, return default 'en'
                return validLocaleCodes.includes(parsed) ? parsed : "en";
            } catch {
                return "en";
            }
        },
        write: (value: string) => JSON.stringify(value),
    },
});

const setLocale = () => {
    // Ensure we only set valid locales
    if (validLocaleCodes.includes(currentLocale.value)) {
        setI18nLocale(currentLocale.value as "de" | "en" | "nl");
    } else {
        // Fallback to English if invalid
        currentLocale.value = "en";
        setI18nLocale("en");
    }
};

// Watch for locale changes from other sources and sync with localStorage
watch(locale, (newLocale) => {
    currentLocale.value = newLocale;
});

// Set the locale from localStorage on component mount
onMounted(() => {
    // Always ensure we have a valid locale
    if (!validLocaleCodes.includes(currentLocale.value)) {
        currentLocale.value = "en";
    }

    if (currentLocale.value && currentLocale.value !== locale.value) {
        setI18nLocale(currentLocale.value as "de" | "en" | "nl");
    }
});
</script>
