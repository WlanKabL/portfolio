<template>
    <nav class="w-full px-5 sm:px-8">
        <div class="max-w-6xl mx-auto flex justify-between items-center h-16">
            <NuxtLink to="/" class="group flex items-baseline gap-2.5">
                <span
                    class="font-mono text-sm font-medium tracking-tight text-ink group-hover:text-accent transition-colors duration-300"
                >
                    <span class="text-faint group-hover:text-accent/50 transition-colors"
                        >&lt;/</span
                    >WlanKabL<span class="text-faint group-hover:text-accent/50 transition-colors"
                        >&gt;</span
                    >
                </span>
                <span
                    class="hidden sm:inline font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink bg-highlight px-1.5 py-0.5 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300"
                >
                    Digital
                </span>
            </NuxtLink>

            <div class="hidden md:flex items-center gap-7">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.to"
                    :to="item.to"
                    class="nav-link font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-300"
                    active-class="nav-link-active"
                >
                    {{ $t(item.label) }}
                </NuxtLink>
                <LanguageSwitcher class="ml-2" />
            </div>

            <button
                class="md:hidden p-2 -mr-2 text-muted hover:text-ink transition-colors"
                :aria-expanded="menuOpen"
                aria-label="Toggle navigation"
                @click="menuOpen = !menuOpen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-300"
                    :class="{ 'rotate-90': menuOpen }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        v-if="!menuOpen"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M4 7h16M4 12h16M4 17h10"
                    />
                    <path
                        v-else
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-3"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-3"
        >
            <div
                v-if="menuOpen"
                class="md:hidden bg-surface border border-line rounded-xl shadow-lg mt-1 mb-4 p-2 flex flex-col"
            >
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.to"
                    :to="item.to"
                    class="px-4 py-3 rounded-lg font-mono text-sm uppercase tracking-[0.15em] text-muted hover:text-ink hover:bg-sunken transition-colors duration-200"
                    active-class="text-accent"
                    @click="menuOpen = false"
                >
                    {{ $t(item.label) }}
                </NuxtLink>
                <div class="px-4 pt-3 pb-2 border-t border-line mt-1">
                    <LanguageSwitcher />
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const navItems = [
    { to: "/projects", label: "nav.projects" },
    { to: "/resume", label: "nav.resume" },
    { to: "/about", label: "nav.about" },
    { to: "/contact", label: "nav.contact" },
];
</script>

<style scoped>
.nav-link {
    position: relative;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.35s var(--ease-out-quart);
}

.nav-link:hover::after,
.nav-link-active::after {
    transform: scaleX(1);
    transform-origin: left;
}

.nav-link-active {
    color: var(--color-ink);
}
</style>
