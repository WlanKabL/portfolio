<template>
    <footer class="w-full py-8 px-4 text-center text-sm text-zinc-500">
        <div class="flex flex-col items-center gap-2">
            <div class="flex items-center gap-2">
                <span>{{ $t('footer.made_by') }}</span>
                <span class="animate-pulse">🖤</span>
                <span>{{ $t('footer.with_care') }}</span>
            </div>

            <div class="text-zinc-600 hover:text-indigo-400 transition-colors">
                <a href="https://github.com/WlanKabL/portfolio" target="_blank" rel="noopener">
                    {{ $t('footer.github_link') }}
                </a>
            </div>

            <div class="mt-1 text-xs text-[#161B22] opacity-40 select-none">
                {{ $t('footer.easter_egg') }}
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>
