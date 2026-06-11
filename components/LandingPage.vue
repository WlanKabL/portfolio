<template>
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <!-- Soft violet bloom, off-center on purpose -->
        <div
            class="pointer-events-none absolute -top-32 right-[-10%] w-[42rem] h-[42rem] rounded-full bg-accent-bright/10 blur-3xl"
            aria-hidden="true"
        />

        <div
            class="relative max-w-6xl mx-auto w-full px-5 sm:px-8 pt-32 pb-16 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center"
        >
            <!-- ── Left: the core message (F-pattern scan edge) ── -->
            <div class="lg:col-span-7">
                <p
                    class="font-mono text-xs sm:text-sm text-muted mb-8 animate-[fade-in_0.8s_ease-out_both]"
                >
                    <span class="text-accent font-semibold">WlanKabL Digital</span>
                    <span class="mx-3 text-faint">/</span>
                    <span class="inline-flex items-baseline gap-2">
                        <span class="relative inline-flex h-2 w-2 self-center">
                            <span
                                class="absolute inline-flex h-full w-full rounded-full bg-accent-bright opacity-50 animate-ping"
                            />
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                        </span>
                        {{ $t("landing.availability") }}
                    </span>
                </p>

                <h1
                    class="font-display font-bold text-ink leading-[1.06] tracking-tight mb-8 sm:mb-10"
                >
                    <span class="block overflow-hidden">
                        <span
                            class="block text-[clamp(2.25rem,5.5vw,4.5rem)] animate-[rise-up_0.9s_var(--ease-out-quart)_0.15s_both]"
                        >
                            {{ $t("landing.hero_line1_pre") }}
                            <span class="marker">{{ $t("landing.hero_line1_mark") }}</span>
                        </span>
                    </span>
                    <span class="block overflow-hidden">
                        <span
                            class="block text-[clamp(2.25rem,5.5vw,4.5rem)] text-accent animate-[rise-up_0.9s_var(--ease-out-quart)_0.3s_both]"
                        >
                            {{ $t("landing.hero_line2") }}
                        </span>
                    </span>
                </h1>

                <p
                    class="max-w-xl text-base sm:text-lg text-muted leading-relaxed mb-10 animate-[fade-in_1s_ease-out_0.7s_both]"
                >
                    {{ $t("landing.hero_subtitle") }}
                </p>

                <div
                    class="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 animate-[fade-in_1s_ease-out_0.9s_both]"
                >
                    <NuxtLink to="/projects" class="btn-primary group">
                        {{ $t("landing.view_products") }}
                        <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                            >&rarr;</span
                        >
                    </NuxtLink>
                    <NuxtLink to="/contact" class="btn-secondary">
                        {{ $t("landing.start_project") }}
                    </NuxtLink>
                </div>

                <!-- Metrics — left-aligned row, deliberately not a tidy grid -->
                <dl
                    class="flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-7 animate-[fade-in_1s_ease-out_1.1s_both]"
                >
                    <div v-for="stat in stats" :key="stat.label">
                        <dd class="font-display font-bold text-2xl text-accent">
                            {{ stat.value }}
                        </dd>
                        <dt class="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                            {{ $t(stat.label) }}
                        </dt>
                    </div>
                </dl>
            </div>

            <!-- ── Right: polaroid + sticker collage — the person behind the studio ── -->
            <div
                class="lg:col-span-5 relative flex justify-center lg:justify-end animate-[fade-in_1s_ease-out_0.6s_both]"
            >
                <div class="relative w-64 sm:w-72">
                    <!-- Polaroid -->
                    <div
                        class="polaroid relative bg-white border border-line rounded-sm p-3 pb-12 rotate-[-3deg] shadow-[0_30px_60px_-25px_rgba(24,19,23,0.45)]"
                    >
                        <img
                            src="https://downloads.crowd-nation.com/Portfolio2.jpeg"
                            alt="Philipp aka WlanKabL"
                            class="w-full aspect-square object-cover"
                        />
                        <p
                            class="absolute bottom-3.5 left-0 right-0 text-center font-mono text-xs text-muted"
                        >
                            Philipp &middot; aka WlanKabL
                        </p>
                        <!-- Tape -->
                        <span
                            class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-highlight/85 rotate-[-5deg] shadow-sm"
                            aria-hidden="true"
                        />
                    </div>

                    <!-- Round yellow badge, overlapping the corner -->
                    <span
                        class="float-chip absolute -bottom-7 -left-9 w-21 h-21 rounded-full bg-highlight border border-ink/80 flex items-center justify-center text-center font-mono text-[10px] font-semibold uppercase tracking-wide text-ink rotate-[10deg] shadow-[3px_3px_0_var(--color-ink)]"
                        :style="{ '--float-rotate': '10deg' }"
                    >
                        {{ $t("landing.badge_since") }}
                    </span>

                    <!-- Personality stickers -->
                    <span
                        v-for="(chip, index) in chips"
                        :key="chip.label"
                        class="float-chip sticker absolute"
                        :class="chip.position"
                        :style="{
                            '--float-rotate': chip.rotate,
                            animationDelay: `${index * 0.7}s`,
                        }"
                    >
                        <span class="text-accent">&plus;</span>
                        {{ $t(chip.label) }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    { value: "6+", label: "landing.stat_products" },
    { value: "3.000+", label: "landing.stat_tests" },
    { value: "1", label: "landing.stat_solo" },
];

// Scattered around the polaroid — rotation and offsets are deliberately uneven
const chips = [
    {
        label: "landing.chip_code",
        position: "top-12 -left-8 sm:-top-5 sm:-left-16",
        rotate: "-4deg",
    },
    {
        label: "landing.chip_festivals",
        position: "-top-4 -right-2 sm:top-14 sm:-right-24",
        rotate: "3deg",
    },
    { label: "landing.chip_bikes", position: "bottom-24 -right-6 sm:-right-12", rotate: "-2deg" },
];
</script>

<style scoped>
.float-chip {
    animation: float-soft 6s ease-in-out infinite;
    transform: rotate(var(--float-rotate, 0deg));
}

@media (prefers-reduced-motion: reduce) {
    .float-chip {
        animation: none;
    }
}
</style>
