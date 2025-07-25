<template>
    <PageContainer :title="$t('resume.title')" :subtitle="$t('resume.subtitle')" :hide-back-button="true">
        <div class="space-y-12">
            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">{{ $t('resume.experience') }}</h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>mediaBEAM GmbH</span>
                            <span>2021 – June 2024</span>
                        </div>
                        <p class="text-white font-medium">
                            {{ $t('resume.mediabeam_role') }}
                        </p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Smake IT GmbH</span>
                            <span>Since July 2024</span>
                        </div>
                        <p class="text-white font-medium">{{ $t('resume.smake_role') }}</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">{{ $t('resume.education') }}</h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Anne-Frank Realschule Ahaus</span>
                            <span>2019</span>
                        </div>
                        <p class="text-white font-medium">{{ $t('resume.realschule_degree') }}</p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Berufskolleg für Technik Ahaus</span>
                            <span>2021</span>
                        </div>
                        <p class="text-white font-medium">
                            {{ $t('resume.berufskolleg_degree') }}
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">{{ $t('resume.skills') }}</h2>
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
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">{{ $t('resume.languages') }}</h2>
                <ul class="text-sm space-y-1 text-gray-300">
                    <li>{{ $t('resume.german_native') }}</li>
                    <li>{{ $t('resume.english_fluent') }}</li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">{{ $t('resume.hobbies') }}</h2>
                <ul class="text-sm text-gray-300 space-y-1">
                    <li>{{ $t('resume.hobby_programming') }}</li>
                    <li>{{ $t('resume.hobby_motorcycles') }}</li>
                    <li>{{ $t('resume.hobby_music') }}</li>
                    <li>{{ $t('resume.hobby_cars') }}</li>
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
