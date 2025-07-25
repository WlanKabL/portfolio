<template>
    <section class="relative min-h-screen flex items-center justify-center text-center px-4">
        <div
            class="absolute inset-0 bg-cover bg-center z-0"
            style="
                background-image: url(&quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&quot;);
            "
        >
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
            <div
                class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0D1117]"
            />
        </div>
        <div class="relative z-10 max-w-3xl mx-auto">
            <h1 class="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                {{ $t('landing.hero_title') }}
            </h1>
            <p class="text-xl text-gray-300 mb-10">{{ $t('landing.hero_subtitle') }}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink
                    to="/projects"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                    {{ $t('landing.view_projects') }}
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                    {{ $t('landing.contact_me') }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
