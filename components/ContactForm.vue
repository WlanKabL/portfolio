<template>
    <form class="flex flex-col gap-10" @submit.prevent="sendMessage">
        <div>
            <label
                for="contact-email"
                class="block font-mono text-xs uppercase tracking-[0.18em] text-faint mb-1"
            >
                <span class="text-accent">01</span> / {{ $t("contact.email_label") }}
            </label>
            <input
                id="contact-email"
                v-model="email"
                type="email"
                required
                :placeholder="$t('contact.email_placeholder')"
                class="input-line"
            />
        </div>

        <div>
            <label
                for="contact-message"
                class="block font-mono text-xs uppercase tracking-[0.18em] text-faint mb-1"
            >
                <span class="text-accent">02</span> / {{ $t("contact.message_label") }}
            </label>
            <textarea
                id="contact-message"
                v-model="message"
                required
                :placeholder="$t('contact.message_placeholder')"
                rows="5"
                class="input-line resize-none"
            />
        </div>

        <button
            type="submit"
            :disabled="loading"
            class="btn-primary group w-fit disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
            {{ loading ? $t("contact.sending") : $t("contact.send_button") }}
            <span class="transition-transform duration-300 group-hover:translate-x-1.5"
                >&rarr;</span
            >
        </button>

        <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <p
                v-if="success || error"
                class="font-mono text-sm"
                :class="success ? 'text-accent' : 'text-red-600'"
            >
                <span class="mr-2">{{ success ? "[ok]" : "[error]" }}</span>
                {{ success ? $t("contact.success") : $t("contact.error") }}
            </p>
        </Transition>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
