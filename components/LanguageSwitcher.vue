<template>
    <div
        class="inline-flex items-center font-mono text-xs"
        role="group"
        :aria-label="$t('nav.language')"
    >
        <template v-for="(loc, index) in availableLocales" :key="loc.code">
            <span v-if="index > 0" class="text-faint/50 select-none px-1.5">/</span>
            <!-- $i18n.locale is the exact source $t renders from, so the
                 active state can never drift from the visible language -->
            <button
                class="uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer"
                :class="loc.code === $i18n.locale ? 'text-accent' : 'text-faint hover:text-ink'"
                :aria-pressed="loc.code === $i18n.locale"
                @click="selectLocale(loc.code)"
            >
                {{ loc.code }}
            </button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";

type LocaleCode = "de" | "en" | "nl";

// Work on the global nuxt-i18n instance, but keep the local name distinct:
// destructuring `$i18n` here would shadow the template injection of the same
// name, whose `.locale` string drives the active state in the template.
const nuxtI18n = useNuxtApp().$i18n;

const availableLocales = nuxtI18n.locales.value.filter((l) => typeof l !== "string") as {
    code: LocaleCode;
    name: string;
}[];

const validLocaleCodes = availableLocales.map((l) => l.code);

const isValidLocale = (value: string): value is LocaleCode =>
    (validLocaleCodes as string[]).includes(value);

// Persisted preference, only used to replay an explicit choice on the next visit
const storedLocale = useLocalStorage<LocaleCode>("portfolio_language", "en", {
    writeDefaults: false,
    serializer: {
        read: (value: string | null) => {
            try {
                const parsed: unknown = value ? JSON.parse(value) : null;
                return typeof parsed === "string" && isValidLocale(parsed) ? parsed : "en";
            } catch {
                return "en";
            }
        },
        write: (value: string) => JSON.stringify(value),
    },
});

const selectLocale = (code: LocaleCode) => {
    storedLocale.value = code;
    void nuxtI18n.setLocale(code);
};

onMounted(() => {
    // Only replay a stored preference if the visitor actually made one,
    // otherwise the domain/browser-based default (plugins/locale-domain.ts) wins
    const hasStoredPreference = localStorage.getItem("portfolio_language") !== null;

    if (hasStoredPreference && storedLocale.value !== nuxtI18n.locale.value) {
        void nuxtI18n.setLocale(storedLocale.value);
    }
});
</script>
