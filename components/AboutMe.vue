<template>
    <section class="py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
            <div class="relative group w-fit mx-auto md:mx-0">
                <div
                    class="absolute inset-0 bg-indigo-600 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl"
                />
                <img
                    src="https://downloads.crowd-nation.com/Portfolio.png"
                    alt="Portrait"
                    class="relative w-48 h-48 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-4 text-white">{{ $t("about.title") }}</h2>
                <p class="text-gray-300 mb-6 leading-relaxed">
                    {{
                        $t("about.description", {
                            wlankabl: "WlanKabL",
                            technologies: "Vue, Node.js & C#",
                        })
                    }}
                </p>
                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        {{ $t("about.engineering") }}
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        {{ $t("about.passion_projects", { crowdnation: "Crowd-Nation" }) }}
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        {{ $t("about.scalable_apps") }}
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        {{ $t("about.creative_coding") }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from "lucide-vue-next";
</script>
