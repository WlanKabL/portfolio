<template>
    <PageContainer
        :title="$t('pages.resume.title')"
        :subtitle="$t('pages.resume.subtitle')"
        :hide-back-button="true"
    >
        <div class="space-y-12">
            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">
                    {{ $t("pages.resume.experience") }}
                </h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>mediaBEAM GmbH</span>
                            <span> {{ $t("pages.resume.job1_period") }}</span>
                        </div>
                        <p class="text-white font-medium">
                            {{ $t("pages.resume.job1_title") }}
                        </p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Smake IT GmbH</span>
                            <span> {{ $t("pages.resume.job2_period") }}</span>
                        </div>
                        <p class="text-white font-medium">{{ $t("pages.resume.job2_title") }}</p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Lindner Group -> tibe.io</span>
                            <span> {{ $t("pages.resume.job3_period") }}</span>
                        </div>
                        <p class="text-white font-medium">{{ $t("pages.resume.job3_title") }}</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">
                    {{ $t("pages.resume.education") }}
                </h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Anne-Frank Realschule Ahaus</span>
                            <span>2019</span>
                        </div>
                        <p class="text-white font-medium">{{ $t("pages.resume.edu1_degree") }}</p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Berufskolleg für Technik Ahaus</span>
                            <span>2021</span>
                        </div>
                        <p class="text-white font-medium">
                            {{ $t("pages.resume.edu2_degree") }}
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">
                    {{ $t("pages.resume.skills") }}
                </h2>
                <div class="flex flex-wrap gap-2 text-sm">
                    <ItemTag
                        v-for="(skill, index) in skills"
                        :key="index"
                        :name="skill.name"
                        :primary="skill.primary"
                    />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">
                    {{ $t("pages.resume.languages") }}
                </h2>
                <ul class="text-sm space-y-1 text-gray-300">
                    <li>{{ $t("pages.resume.lang_german") }}</li>
                    <li>{{ $t("pages.resume.lang_english") }}</li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">
                    {{ $t("pages.resume.hobbies") }}
                </h2>
                <ul class="text-sm text-gray-300 space-y-1">
                    <li>{{ $t("pages.resume.hobby_programming") }}</li>
                    <li>{{ $t("pages.resume.hobby_motorcycles") }}</li>
                    <li>{{ $t("pages.resume.hobby_music") }}</li>
                    <li>{{ $t("pages.resume.hobby_cars") }}</li>
                </ul>
            </div>
        </div>
    </PageContainer>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Résumé",
    description: "Overview of my skills, work experience and education.",
});

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
</script>
