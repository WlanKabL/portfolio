<template>
    <nav class="w-full px-4 sm:px-6 py-4 text-white">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <NuxtLink
                to="/"
                class="text-2xl tracking-tight text-gradient hover:scale-105 transition-transform duration-300 ease-apple"
            >
                <code> &lt;/WlanKabL&gt; </code>
            </NuxtLink>
            <div class="hidden md:flex gap-8 items-center text-sm font-medium">
                <NuxtLink
                    to="/projects"
                    class="apple-hover relative px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    >{{ $t("nav.projects") }}</NuxtLink
                >
                <NuxtLink
                    to="/resume"
                    class="apple-hover relative px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    >{{ $t("nav.resume") }}</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="apple-hover relative px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    >{{ $t("nav.about") }}</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="apple-hover relative px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    >{{ $t("nav.contact") }}</NuxtLink
                >
                <LanguageSwitcher />
            </div>
            <button
                class="md:hidden text-white focus:outline-none apple-hover"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 transform -translate-y-2"
            leave-to-class="opacity-0 transform -translate-y-2"
        >
            <div
                v-if="menuOpen"
                class="md:hidden mt-4 space-y-3 text-sm font-medium px-4 flex flex-col glass rounded-lg p-4"
            >
                <NuxtLink
                    to="/projects"
                    class="block apple-hover px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    @click="menuOpen = false"
                    >{{ $t("nav.projects") }}</NuxtLink
                >
                <NuxtLink
                    to="/resume"
                    class="apple-hover px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    @click="menuOpen = false"
                    >{{ $t("nav.resume") }}</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="block apple-hover px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    @click="menuOpen = false"
                    >{{ $t("nav.about") }}</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="block apple-hover px-3 py-2 rounded-lg hover:text-purple-300 transition-all duration-300"
                    exact-active-class="text-purple-300 bg-purple-500/10"
                    @click="menuOpen = false"
                    >{{ $t("nav.contact") }}</NuxtLink
                >
                <LanguageSwitcher />
            </div>
        </Transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
</script>
