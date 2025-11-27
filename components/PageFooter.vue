<template>
    <footer class="relative w-full py-16 px-4 text-center overflow-hidden">
        <!-- Subtle gradient border at top -->
        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div class="relative flex flex-col items-center gap-4 animate-[fade-in_0.8s_ease-out]">
            <!-- Main text with heart -->
            <div class="flex items-center gap-2 text-sm text-white/60">
                <span>{{ $t("footer.made_by") }}</span>
                <span class="text-lg animate-pulse text-red-500/80">🖤</span>
                <span>{{ $t("footer.with_care") }}</span>
            </div>

            <!-- GitHub link with hover effect -->
            <div class="group">
                <a
                    href="https://github.com/WlanKabL/portfolio"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-2 text-sm text-white/40 hover:text-indigo-400 transition-all duration-300 group-hover:gap-3"
                >
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                    </span>
                    {{ $t("footer.github_link") }}
                </a>
            </div>

            <!-- Easter egg - even more subtle -->
            <div
                class="mt-2 text-xs text-white/5 hover:text-white/20 transition-colors duration-500 select-none cursor-default"
            >
                {{ $t("footer.easter_egg") }}
            </div>

            <!-- Copyright year -->
            <div class="text-xs text-white/30">© {{ new Date().getFullYear() }}</div>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>
