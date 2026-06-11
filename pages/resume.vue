<template>
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <!-- Header -->
        <header class="mb-16 md:mb-24">
            <p v-reveal class="section-label mb-6">
                <span class="index">CV</span>
                <span class="px-2 text-faint/60">/</span>
                {{ $t("pages.resume.title") }}
            </p>
            <h1
                v-reveal="80"
                class="font-display font-bold tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.05] text-ink max-w-4xl mb-6"
            >
                {{ $t("pages.resume.headline") }}
            </h1>
            <p v-reveal="160" class="text-muted text-lg leading-relaxed max-w-2xl">
                {{ $t("pages.resume.subtitle") }}
            </p>
        </header>

        <div class="grid lg:grid-cols-12 gap-14 lg:gap-20">
            <!-- Experience & education -->
            <div class="lg:col-span-7 flex flex-col gap-16">
                <section>
                    <h2 v-reveal class="section-label mb-8">
                        <span class="index">01</span>
                        <span class="px-2 text-faint/60">/</span>
                        {{ $t("pages.resume.experience") }}
                    </h2>
                    <ol class="timeline">
                        <li
                            v-for="(job, index) in jobs"
                            :key="job.company"
                            v-reveal="index * 100"
                            class="timeline-item"
                        >
                            <p class="font-mono text-xs text-faint mb-2">{{ job.period }}</p>
                            <h3 class="font-display font-bold text-xl md:text-2xl text-ink mb-1">
                                {{ job.title }}
                            </h3>
                            <p class="text-muted">{{ job.company }}</p>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 v-reveal class="section-label mb-8">
                        <span class="index">02</span>
                        <span class="px-2 text-faint/60">/</span>
                        {{ $t("pages.resume.education") }}
                    </h2>
                    <ol class="timeline">
                        <li
                            v-for="(entry, index) in education"
                            :key="entry.school"
                            v-reveal="index * 100"
                            class="timeline-item"
                        >
                            <p class="font-mono text-xs text-faint mb-2">{{ entry.year }}</p>
                            <h3 class="font-display font-bold text-xl md:text-2xl text-ink mb-1">
                                {{ entry.degree }}
                            </h3>
                            <p class="text-muted">{{ entry.school }}</p>
                        </li>
                    </ol>
                </section>
            </div>

            <!-- Skills, languages, hobbies -->
            <div class="lg:col-span-5 flex flex-col gap-14">
                <section v-reveal>
                    <h2 class="section-label mb-6">
                        <span class="index">03</span>
                        <span class="px-2 text-faint/60">/</span>
                        {{ $t("pages.resume.skills") }}
                    </h2>
                    <div class="flex flex-wrap gap-2">
                        <ItemTag
                            v-for="skill in skills"
                            :key="skill.name"
                            :name="skill.name"
                            :primary="skill.primary"
                        />
                    </div>
                </section>

                <section v-reveal>
                    <h2 class="section-label mb-6">
                        <span class="index">04</span>
                        <span class="px-2 text-faint/60">/</span>
                        {{ $t("pages.resume.languages") }}
                    </h2>
                    <ul class="flex flex-col">
                        <li
                            v-for="lang in languages"
                            :key="lang"
                            class="border-t border-line py-3 last:border-b text-muted"
                        >
                            <span class="font-mono text-xs text-accent mr-3">&plus;</span>{{ lang }}
                        </li>
                    </ul>
                </section>

                <section v-reveal>
                    <h2 class="section-label mb-6">
                        <span class="index">05</span>
                        <span class="px-2 text-faint/60">/</span>
                        {{ $t("pages.resume.hobbies") }}
                    </h2>
                    <ul class="flex flex-col">
                        <li
                            v-for="hobby in hobbies"
                            :key="hobby"
                            class="border-t border-line py-3 last:border-b text-muted"
                        >
                            <span class="font-mono text-xs text-accent mr-3">&plus;</span
                            >{{ hobby }}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

definePageMeta({
    title: "Résumé",
    description: "Overview of my skills, work experience and education.",
});

const { t } = useI18n();

const jobs = computed(() => [
    {
        company: t("pages.resume.job3_company"),
        period: t("pages.resume.job3_period"),
        title: t("pages.resume.job3_title"),
    },
    {
        company: t("pages.resume.job2_company"),
        period: t("pages.resume.job2_period"),
        title: t("pages.resume.job2_title"),
    },
    {
        company: t("pages.resume.job1_company"),
        period: t("pages.resume.job1_period"),
        title: t("pages.resume.job1_title"),
    },
]);

const education = computed(() => [
    {
        school: t("pages.resume.edu2_school"),
        year: t("pages.resume.edu2_year"),
        degree: t("pages.resume.edu2_degree"),
    },
    {
        school: t("pages.resume.edu1_school"),
        year: t("pages.resume.edu1_year"),
        degree: t("pages.resume.edu1_degree"),
    },
]);

const languages = computed(() => [t("pages.resume.lang_german"), t("pages.resume.lang_english")]);

const hobbies = computed(() => [
    t("pages.resume.hobby_programming"),
    t("pages.resume.hobby_motorcycles"),
    t("pages.resume.hobby_music"),
    t("pages.resume.hobby_cars"),
]);

const skills = [
    { name: "C#", primary: true },
    { name: "JavaScript", primary: true },
    { name: "Node.js", primary: true },
    { name: "Vue.js", primary: true },
    { name: "Docker", primary: true },
    { name: "Git", primary: true },
    { name: "Regex", primary: true },
    { name: "HTML/CSS", primary: true },
    { name: "Python", primary: false },
    { name: "PHP", primary: false },
    { name: "C++", primary: false },
    { name: "C", primary: false },
];

useSeoMeta({
    title: "Résumé | </WlanKabL>",
    ogTitle: "Résumé | </WlanKabL>",
    description: "Overview of my skills, work experience and education.",
    ogDescription: "Overview of my skills, work experience and education.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>

<style scoped>
.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-left: 1.75rem;
    border-left: 1px solid var(--color-line-strong);
}

.timeline-item {
    position: relative;
}

/* Accent node on the timeline */
.timeline-item::before {
    content: "";
    position: absolute;
    left: calc(-1.75rem - 4px);
    top: 0.4rem;
    width: 7px;
    height: 7px;
    background: var(--color-accent);
}
</style>
