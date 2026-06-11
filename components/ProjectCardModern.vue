<template>
    <article
        class="group flex flex-col bg-surface border border-line rounded-xl overflow-hidden transition-all duration-400 hover:border-[var(--brand)] hover:shadow-[0_20px_50px_-30px_var(--brand)]"
        :style="{ '--brand': brand?.color ?? '#6d28d9' }"
    >
        <NuxtLink
            :to="link"
            class="relative block border-b border-line bg-white p-8 h-48 flex items-center justify-center"
        >
            <img
                :src="image"
                :alt="title"
                loading="lazy"
                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span
                class="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-md bg-bg border border-line text-muted opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
            >
                <IconArrowUpRight class="w-4 h-4" />
            </span>
        </NuxtLink>

        <div class="flex flex-col flex-1 gap-3 p-6">
            <NuxtLink :to="link" class="w-fit">
                <h3
                    class="font-display font-bold text-xl text-ink group-hover:text-[var(--brand)] transition-colors duration-400 leading-snug"
                >
                    {{ title }}
                </h3>
            </NuxtLink>
            <p class="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                {{ description }}
            </p>
            <p class="font-mono text-[11px] text-faint leading-relaxed">
                {{ tech.slice(0, 4).join(" · ") }}<span v-if="tech.length > 4"> · &hellip;</span>
            </p>

            <div class="flex items-center justify-between border-t border-line pt-4 mt-2">
                <NuxtLink
                    :to="link"
                    class="link-underline font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors"
                >
                    {{ $t("sections.view_project") }} &rarr;
                </NuxtLink>
                <a
                    v-if="github"
                    :href="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-faint hover:text-[var(--brand)] transition-colors"
                    aria-label="GitHub repository"
                >
                    <IconGithub class="w-4 h-4" />
                </a>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ArrowUpRight as IconArrowUpRight, Github as IconGithub } from "lucide-vue-next";
import type { ProjectBrand } from "~/types/projects";

defineProps<{
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string[];
    brand?: ProjectBrand;
}>();
</script>
