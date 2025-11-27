<template>
    <div class="min-h-screen flex flex-col bg-black text-white">
        <NavBar class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5" />
        <main class="flex-1 bg-black pt-16">
            <div class="animate-[fade-in_0.6s_ease-out]">
                <NuxtPage />
            </div>
        </main>
        <PageFooter class="bg-zinc-950 border-t border-white/5" />
    </div>
</template>
