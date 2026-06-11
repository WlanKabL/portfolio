<template>
    <footer class="relative bg-ink text-panel-ink">
        <!-- Big closing CTA -->
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
            <p class="font-mono text-xs uppercase tracking-[0.18em] text-panel-muted mb-6">
                {{ $t("footer.cta_label") }}
            </p>
            <NuxtLink to="/contact" class="group inline-block">
                <span
                    class="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-tight group-hover:text-accent-bright transition-colors duration-500"
                >
                    {{ $t("footer.cta") }}
                    <span
                        class="inline-block transition-transform duration-500 group-hover:translate-x-3"
                        >&rarr;</span
                    >
                </span>
            </NuxtLink>
        </div>

        <!-- Meta row -->
        <div class="border-t border-panel-line">
            <div
                class="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
                <div class="font-mono text-xs text-panel-muted">
                    &copy; {{ new Date().getFullYear() }} WlanKabL Digital,
                    {{ $t("footer.made_by") }} {{ $t("footer.with_care") }}
                </div>

                <div class="flex flex-wrap items-center gap-6 font-mono text-xs">
                    <NuxtLink
                        to="/imprint"
                        class="text-panel-muted hover:text-panel-ink transition-colors"
                    >
                        {{ $t("footer.imprint") }}
                    </NuxtLink>
                    <NuxtLink
                        to="/privacy"
                        class="text-panel-muted hover:text-panel-ink transition-colors"
                    >
                        {{ $t("footer.privacy") }}
                    </NuxtLink>
                    <a
                        href="https://github.com/WlanKabL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-panel-muted hover:text-panel-ink transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/philipp-stecher-aab167258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-panel-muted hover:text-panel-ink transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/WlanKabL/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-panel-muted hover:text-panel-ink transition-colors"
                    >
                        {{ $t("footer.github_link") }}
                    </a>
                </div>
            </div>

            <!-- Easter egg for curious devs -->
            <div class="max-w-6xl mx-auto px-5 sm:px-8 pb-6">
                <p
                    class="font-mono text-[11px] text-panel-ink/15 hover:text-panel-muted transition-colors duration-700 select-none cursor-default truncate"
                >
                    {{ $t("footer.easter_egg") }}
                </p>
            </div>
        </div>
    </footer>
</template>
