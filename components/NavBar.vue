<template>
    <nav class="w-full px-4 sm:px-6 py-4 text-zinc-100 shadow-sm border-b border-zinc-800">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <NuxtLink
                to="/"
                class="text-2xl font-semibold tracking-tight hover:text-indigo-400 transition-colors pt-serif-regular"
            >
                &lt;/WlanKabL&gt;
            </NuxtLink>
            <div class="hidden md:flex gap-6 items-center text-sm font-medium">
                <NuxtLink
                    to="/projects"
                    class="hover:text-indigo-400 transition-colors"
                    exact-active-class="border-b-2 border-indigo-600 pb-1"
                    >Projects</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="hover:text-indigo-400 transition-colors"
                    exact-active-class="border-b-2 border-indigo-600 pb-1"
                    >About</NuxtLink
                >
                <NuxtLink
                    to="/contact"
                    class="hover:text-indigo-400 transition-colors"
                    exact-active-class="border-b-2 border-indigo-600 pb-1"
                    >Contact</NuxtLink
                >
                <LanguageSwitcher />
            </div>
            <button
                class="md:hidden text-zinc-100 focus:outline-none"
                @click="menuOpen = !menuOpen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
        <div
            v-if="menuOpen"
            class="md:hidden mt-4 space-y-3 text-sm font-medium px-4 flex flex-col"
        >
            <NuxtLink
                to="/projects"
                class="block hover:text-indigo-400 transition-colors"
                exact-active-class="border-b-2 border-indigo-600 pb-1"
                >Projects</NuxtLink
            >
            <NuxtLink
                to="/about"
                class="block hover:text-indigo-400 transition-colors"
                exact-active-class="border-b-2 border-indigo-600 pb-1"
                >About</NuxtLink
            >
            <NuxtLink
                to="/contact"
                class="block hover:text-indigo-400 transition-colors"
                exact-active-class="border-b-2 border-indigo-600 pb-1"
                >Contact</NuxtLink
            >
            <LanguageSwitcher />
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
</script>
