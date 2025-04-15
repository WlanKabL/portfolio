<template>
    <section class="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
                background-image: url(&quot;https://downloads.crowd-nation.com/Portfolio.png&quot;);
            "
        >
            <div
                class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0D1117]"
            />
        </div>
        <div class="relative z-10 max-w-5xl mx-auto text-center text-white">
            <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
                Hey, I'm WlanKabL
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Passionate Full-Stack Developer, Motorcycle Rider, Music Addict, and Festival
                Enthusiast. Building digital solutions with purpose, personality, and performance.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div>
                    <h2 class="text-2xl font-semibold mb-4 text-indigo-400">
                        🔧 Developer by Passion
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        I'm a Full-Stack Developer focused on Vue.js, Node.js, and C#. From scalable
                        backends to beautiful frontends – I code with clarity and purpose. I love
                        performance, great user experience, and building tools people love to use. I
                        also dive into security, reverse engineering and love exploring complex
                        systems.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-4 text-indigo-400">
                        🎵 Fueled by Music & Adrenaline
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        Whether it's a new DJ set, a spontaneous ride on my motorcycle, or coding
                        late at night, music is always by my side. Festivals like Defqon.1 and
                        Thunderdome inspire my energy and my biggest project:
                        <strong>Crowd-Nation</strong>, a platform to bring music lovers together.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-4 text-indigo-400">
                        💼 Self-Driven and Visionary
                    </h2>
                    <p class="text-gray-300 leading-relaxed">
                        I work full-time as a developer, but I’m also a freelancer with a long-term
                        goal: building my own business around my passions. My projects aren’t just
                        hobbies – they’re part of a bigger vision.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold mb-4 text-indigo-400">⚙️ Tools I Love</h2>
                    <p class="text-gray-300 leading-relaxed">
                        VSCode, Docker, Nuxt, SurrealDB, Swagger, TailwindCSS, PM2, GitLab CI/CD,
                        Portainer, Let's Encrypt, and anything that makes building smoother &
                        cleaner. Also: I'm obsessed with automation.
                    </p>
                </div>
            </div>

            <div class="mt-12">
                <NuxtLink
                    to="/projects"
                    class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                    View My Work
                </NuxtLink>
            </div>

            <p class="mt-16 text-gray-500 text-sm">
                Want to build something together?
                <NuxtLink to="/contact" class="underline hover:text-indigo-400"
                    >Let's connect!</NuxtLink
                >
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "About – </WlanKabL>",
    ogTitle: "About – </WlanKabL>",
    description:
        "Learn more about WlanKabL – a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogDescription:
        "Learn more about WlanKabL – a passionate full-stack developer, builder of Crowd-Nation and creator of digital experiences.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
