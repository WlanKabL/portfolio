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
                <h2 class="text-3xl font-bold mb-4 text-white">About Me</h2>
                <p class="text-gray-300 mb-6 leading-relaxed">
                    Hey, I'm
                    <span class="text-indigo-400 font-medium">WlanKabL</span> — a passionate
                    Full-Stack Developer driven by curiosity and a deep love for code, music, and
                    motorcycles. I create digital solutions that are fast, secure, and built with
                    modern technologies like
                    <span class="text-indigo-400 font-medium">Vue, Node.js & C#</span>.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        Full-Stack Engineering & Architecture
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        Passion Projects like
                        <span class="text-indigo-400">Crowd-Nation</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        Fast, Scalable Web Apps
                    </li>
                    <li class="flex items-center gap-3 text-gray-200">
                        <IconZap class="w-5 h-5 text-indigo-400" />
                        Hacking, Hardware & Creative Coding
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Zap as IconZap } from "lucide-vue-next";
</script>
