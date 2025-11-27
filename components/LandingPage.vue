<template>
    <section
        class="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
    >
        <!-- Fade mask at bottom -->
        <div
            class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"
        />

        <!-- Animated Background -->
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
                background-image: url(&quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&quot;);
            "
        >
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black" />
            <!-- Animated gradient overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 animate-gradient"
            />
        </div>

        <!-- Subtle grid pattern -->
        <div
            class="absolute inset-0 z-0 opacity-[0.02]"
            style="
                background-image: radial-gradient(circle, white 1px, transparent 1px);
                background-size: 50px 50px;
            "
        />

        <!-- Content with staggered animations -->
        <div class="relative z-10 max-w-4xl mx-auto">
            <!-- Badge -->
            <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-[fade-in-up_0.6s_ease-out]"
            >
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"
                    />
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span class="text-sm text-white/70">{{ $t("landing.availability") }}</span>
            </div>

            <!-- Main heading with gradient -->
            <h1
                class="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 animate-[fade-in-up_0.8s_ease-out_0.1s_both]"
            >
                <span
                    class="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                >
                    {{ $t("landing.hero_title_part1") }}
                </span>
                <br />
                <span
                    class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    {{ $t("landing.hero_title_part2") }}
                </span>
            </h1>

            <!-- Subtitle -->
            <p
                class="text-xl sm:text-2xl text-white/60 mb-12 max-w-2xl mx-auto animate-[fade-in-up_1s_ease-out_0.2s_both]"
            >
                {{ $t("landing.hero_subtitle") }}
            </p>

            <!-- CTA Buttons -->
            <div
                class="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in-up_1.2s_ease-out_0.3s_both]"
            >
                <NuxtLink
                    to="/projects"
                    class="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                >
                    <span class="relative z-10">{{ $t("landing.view_projects") }}</span>
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span
                        class="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold"
                    >
                        {{ $t("landing.view_projects") }}
                    </span>
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="px-8 py-4 glass border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                    {{ $t("landing.contact_me") }}
                </NuxtLink>
            </div>
        </div>

        <!-- Scroll indicator - outside content container, relative to section -->
        <div
            class="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-[fade-in_1.5s_ease-out_0.5s_both]"
        >
            <div class="flex flex-col items-center gap-2 text-white/40">
                <span class="text-xs uppercase tracking-wider">{{
                    $t("landing.scroll_down")
                }}</span>
                <svg
                    class="w-5 h-5 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
    </section>
</template>
