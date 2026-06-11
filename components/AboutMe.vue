<template>
    <section class="py-24 md:py-32 border-t border-line">
        <div class="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHeading
                index="03"
                :label="$t('sections.about_label')"
                :title="$t('about.title')"
                link-to="/about"
                :link-label="$t('sections.about_link')"
            />

            <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                <!-- Photo, slightly off-axis like everything personal here -->
                <div v-reveal class="md:col-span-5 relative w-full max-w-sm">
                    <div
                        class="relative bg-white border border-line rounded-sm p-3 rotate-[2deg] hover:rotate-0 transition-transform duration-500 shadow-[0_24px_60px_-30px_rgba(24,19,23,0.5)]"
                    >
                        <img
                            src="https://downloads.crowd-nation.com/Portfolio2.png"
                            alt="Philipp aka WlanKabL"
                            loading="lazy"
                            class="w-full aspect-square object-cover object-top"
                        />
                        <span
                            class="absolute -top-3 right-8 w-20 h-5 bg-highlight/85 rotate-[4deg] shadow-sm"
                            aria-hidden="true"
                        />
                    </div>
                    <p class="font-mono text-[11px] text-faint mt-5 ml-2">
                        <span class="text-accent">&plus;</span> Philipp &middot; online: WlanKabL
                    </p>
                </div>

                <!-- Text -->
                <div class="md:col-span-7 flex flex-col gap-8">
                    <p v-reveal class="text-lg sm:text-xl text-muted leading-relaxed">
                        {{
                            $t("about.description", {
                                wlankabl: "WlanKabL",
                                technologies: "Vue, Node.js & C#",
                            })
                        }}
                    </p>

                    <ul class="flex flex-col">
                        <li
                            v-for="(item, index) in features"
                            :key="item"
                            v-reveal="index * 90"
                            class="flex items-baseline gap-4 border-t border-line py-4 last:border-b"
                        >
                            <span class="font-mono text-xs text-accent shrink-0">
                                {{ String(index + 1).padStart(2, "0") }}
                            </span>
                            <span class="text-ink/85">{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n();

const features = computed(() => [
    t("about.founder"),
    t("about.engineering"),
    t("about.passion_projects", { crowdnation: "Crowd-Nation" }),
    t("about.creative_coding"),
]);
</script>
