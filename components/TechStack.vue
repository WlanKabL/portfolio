<template>
    <section class="py-24 md:py-32 border-t border-line">
        <div class="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHeading
                index="04"
                :label="$t('sections.stack_label')"
                :title="$t('tech_stack.title')"
            />

            <dl class="flex flex-col">
                <div
                    v-for="(stack, index) in techStacks"
                    :key="stack.key"
                    v-reveal="index * 60"
                    class="group grid sm:grid-cols-12 gap-2 sm:gap-8 border-t border-line py-6 last:border-b"
                >
                    <dt class="sm:col-span-4 flex items-baseline gap-4">
                        <span
                            class="font-mono text-xs text-faint group-hover:text-accent transition-colors duration-300"
                        >
                            {{ String(index + 1).padStart(2, "0") }}
                        </span>
                        <span class="font-mono text-sm uppercase tracking-[0.12em] text-ink">
                            {{ $t(`tech_stack.${stack.key}`) }}
                        </span>
                    </dt>
                    <dd class="sm:col-span-8 text-muted leading-relaxed pl-8 sm:pl-0">
                        {{ stack.skills.join(" · ") }}
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>

<script setup lang="ts">
import { techStacks } from "~/data/techStacks";
</script>
