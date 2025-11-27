<template>
    <nav class="w-full px-6 py-4 text-white/90">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <NuxtLink
                to="/"
                class="text-2xl font-semibold tracking-tight hover:text-white transition-all duration-300 hover:scale-105"
            >
                <code
                    class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                >
                    &lt;/WlanKabL&gt;
                </code>
            </NuxtLink>
            <div class="hidden md:flex gap-1 items-center text-sm font-medium">
                <NuxtLink
                    to="/projects"
                    class="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    >{{ $t("nav.projects") }}</NuxtLink
                >
                <NuxtLink
                    to="/resume"
                    class="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    >{{ $t("nav.resume") }}</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    >{{ $t("nav.about") }}</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    >{{ $t("nav.contact") }}</NuxtLink
                >
                <div class="ml-2">
                    <LanguageSwitcher />
                </div>
            </div>
            <button
                class="md:hidden text-white/90 focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                @click="menuOpen = !menuOpen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transition-transform duration-300"
                    :class="{ 'rotate-90': menuOpen }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        v-if="!menuOpen"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                        v-else
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div
                v-if="menuOpen"
                class="md:hidden mt-4 space-y-1 text-sm font-medium px-2 flex flex-col glass rounded-lg p-2"
            >
                <NuxtLink
                    to="/projects"
                    class="block px-4 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    @click="menuOpen = false"
                    >{{ $t("nav.projects") }}</NuxtLink
                >
                <NuxtLink
                    to="/resume"
                    class="block px-4 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    @click="menuOpen = false"
                    >{{ $t("nav.resume") }}</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="block px-4 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    @click="menuOpen = false"
                    >{{ $t("nav.about") }}</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="block px-4 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                    exact-active-class="bg-white/10 text-white"
                    @click="menuOpen = false"
                    >{{ $t("nav.contact") }}</NuxtLink
                >
                <div class="pt-2 border-t border-white/10">
                    <LanguageSwitcher />
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
</script>
