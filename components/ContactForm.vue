<template>
    <section class="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"
        />

        <div
            class="relative max-w-xl mx-auto glass border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl animate-[scale-in_0.8s_ease-out]"
        >
            <!-- Title with gradient -->
            <h2
                class="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
            >
                {{ title }}
            </h2>
            <div
                class="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"
            />

            <form class="space-y-6" @submit.prevent="sendMessage">
                <!-- Email Input -->
                <div class="relative group">
                    <input
                        v-model="email"
                        type="email"
                        required
                        :placeholder="$t('contact.email_placeholder')"
                        class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300"
                    />
                    <div
                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    />
                </div>

                <!-- Message Textarea -->
                <div class="relative group">
                    <textarea
                        v-model="message"
                        required
                        :placeholder="$t('contact.message_placeholder')"
                        rows="6"
                        class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    />
                    <div
                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    />
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    :disabled="loading"
                    class="group relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-indigo-500/50"
                >
                    <span class="relative z-10">
                        {{ loading ? $t("contact.sending") : $t("contact.send_button") }}
                    </span>
                    <div
                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    />
                </button>
            </form>

            <!-- Success Message -->
            <Transition
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <p
                    v-if="success"
                    class="flex items-center justify-center gap-2 text-green-400 text-sm mt-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                >
                    <span class="text-lg">✓</span>
                    {{ $t("contact.success") }}
                </p>
            </Transition>

            <!-- Error Message -->
            <Transition
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <p
                    v-if="error"
                    class="flex items-center justify-center gap-2 text-red-400 text-sm mt-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                >
                    <span class="text-lg">✕</span>
                    {{ $t("contact.error") }}
                </p>
            </Transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
</script>
