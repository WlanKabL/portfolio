<template>
    <section class="py-24 md:py-32 border-t border-line">
        <div class="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHeading
                index="02"
                :label="$t('services.label')"
                :title="$t('services.title')"
            />

            <!-- Staggered columns — each card sits a step lower than the last -->
            <div class="grid md:grid-cols-3 gap-5">
                <div
                    v-for="(service, index) in services"
                    :key="service.title"
                    v-reveal="index * 100"
                    class="hairline-hover group bg-surface border border-line rounded-xl p-7 md:p-8 flex flex-col gap-4 hover:border-accent-bright/50 hover:-translate-y-1 hover:shadow-[0_20px_45px_-28px_rgba(109,40,217,0.5)] transition-all duration-400"
                    :class="{ 'md:mt-10': index === 1, 'md:mt-20': index === 2 }"
                >
                    <p
                        class="font-mono text-xs text-faint group-hover:text-accent transition-colors duration-300"
                    >
                        {{ String(index + 1).padStart(2, "0") }}
                    </p>
                    <h3 class="font-display font-bold text-xl md:text-2xl text-ink leading-snug">
                        {{ service.title }}
                    </h3>
                    <p class="text-muted text-sm leading-relaxed">
                        {{ service.text }}
                    </p>
                </div>
            </div>

            <div
                v-reveal
                class="flex flex-wrap items-center justify-between gap-6 border-t border-line mt-12 pt-10"
            >
                <p class="text-muted max-w-xl leading-relaxed">
                    {{ $t("services.note") }}
                </p>
                <NuxtLink to="/contact" class="btn-primary group shrink-0">
                    {{ $t("services.cta") }}
                    <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                        >&rarr;</span
                    >
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n();

const services = computed(() => [
    { title: t("services.s1_title"), text: t("services.s1_text") },
    { title: t("services.s2_title"), text: t("services.s2_text") },
    { title: t("services.s3_title"), text: t("services.s3_text") },
]);
</script>
