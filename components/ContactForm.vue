<template>
    <section class="py-32 px-4 sm:px-6 lg:px-8 relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 tech-dots opacity-20"></div>
        
        <div class="max-w-2xl mx-auto relative z-10">
            <div class="glass-strong p-10 rounded-3xl shadow-2xl border border-purple-500/30">
                <h2 class="text-4xl md:text-5xl font-bold text-center text-gradient mb-4 scroll-hidden" ref="titleRef">
                    {{ title }}
                </h2>
                
                <p class="text-lg text-gray-300 text-center mb-10 scroll-hidden" ref="subtitleRef">
                    Let's build something amazing together. Drop me a message!
                </p>

                <form class="space-y-6 scroll-hidden" @submit.prevent="sendMessage" ref="formRef">
                    <div class="relative">
                        <input
                            v-model="email"
                            type="email"
                            required
                            :placeholder="$t('contact.email_placeholder')"
                            class="w-full p-4 rounded-xl glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 border border-purple-500/20"
                        />
                        <div class="absolute inset-0 rounded-xl bg-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div class="relative">
                        <textarea
                            v-model="message"
                            required
                            :placeholder="$t('contact.message_placeholder')"
                            rows="6"
                            class="w-full p-4 rounded-xl glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 border border-purple-500/20 resize-none"
                        />
                        <div class="absolute inset-0 rounded-xl bg-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <button
                        type="submit"
                        :disabled="loading"
                        class="apple-button w-full text-lg py-4 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span class="relative z-10 flex items-center justify-center gap-3">
                            <svg v-if="loading" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"/>
                                <path fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75"/>
                            </svg>
                            <span>{{ loading ? $t("contact.sending") : $t("contact.send_button") }}</span>
                            <svg v-if="!loading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                            </svg>
                        </span>
                    </button>
                </form>

                <!-- Success Message -->
                <Transition
                    enter-active-class="transition-all duration-500 ease-out"
                    leave-active-class="transition-all duration-300 ease-in"
                    enter-from-class="opacity-0 transform translate-y-4"
                    leave-to-class="opacity-0 transform -translate-y-4"
                >
                    <div v-if="success" class="mt-6 p-4 glass rounded-xl border border-green-500/30">
                        <div class="flex items-center gap-3 text-green-300">
                            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span class="font-medium">{{ $t("contact.success") }}</span>
                        </div>
                    </div>
                </Transition>

                <!-- Error Message -->
                <Transition
                    enter-active-class="transition-all duration-500 ease-out"
                    leave-active-class="transition-all duration-300 ease-in"
                    enter-from-class="opacity-0 transform translate-y-4"
                    leave-to-class="opacity-0 transform -translate-y-4"
                >
                    <div v-if="error" class="mt-6 p-4 glass rounded-xl border border-red-500/30">
                        <div class="flex items-center gap-3 text-red-300">
                            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span class="font-medium">{{ $t("contact.error") }}</span>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

defineProps({
    title: {
        type: String,
        default: "Get in Touch",
    },
});

const email = ref("");
const message = ref("");
const loading = ref(false);
const success = ref(false);
const error = ref(false);

const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const formRef = ref<HTMLElement>()

const sendMessage = async () => {
    loading.value = true;
    success.value = false;
    error.value = false;

    try {
        await $fetch("/api/contact", {
            method: "POST",
            body: { email: email.value, message: message.value },
        });
        success.value = true;
        email.value = "";
        message.value = "";
    } catch {
        error.value = true;
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('scroll-hidden')
                    entry.target.classList.add('scroll-visible')
                }
            })
        },
        { threshold: 0.1 }
    )

    if (titleRef.value) observer.observe(titleRef.value)
    if (subtitleRef.value) observer.observe(subtitleRef.value)
    if (formRef.value) observer.observe(formRef.value)
})
</script>
