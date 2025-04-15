<template>
    <PageContainer title="Résumé" subtitle="Overview of my skills, work experience and education." :hide-back-button="true">
        <div class="space-y-12">
            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Experience</h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>mediaBEAM GmbH</span>
                            <span>2021 – June 2024</span>
                        </div>
                        <p class="text-white font-medium">
                            Apprenticeship – Application Development
                        </p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Smake IT GmbH</span>
                            <span>Since July 2024</span>
                        </div>
                        <p class="text-white font-medium">Full-Stack Developer</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Education</h2>
                <ul class="space-y-4">
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Anne-Frank Realschule Ahaus</span>
                            <span>2019</span>
                        </div>
                        <p class="text-white font-medium">Secondary School Certificate</p>
                    </li>
                    <li>
                        <div class="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Berufskolleg für Technik Ahaus</span>
                            <span>2021</span>
                        </div>
                        <p class="text-white font-medium">
                            Technical College Entrance Qualification – IT & Communication
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Skills & Tools</h2>
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
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Languages</h2>
                <ul class="text-sm space-y-1 text-gray-300">
                    <li>🇩🇪 German – C2 (native)</li>
                    <li>🇬🇧 English – B2 (fluent)</li>
                </ul>
            </div>

            <div>
                <h2 class="text-2xl font-semibold text-indigo-400 mb-4">Hobbies</h2>
                <ul class="text-sm text-gray-300 space-y-1">
                    <li>💻 Programming</li>
                    <li>🏍️ Riding motorcycles</li>
                    <li>🎶 Music & festivals</li>
                    <li>🚗 Car projects</li>
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
