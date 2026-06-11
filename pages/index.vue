<template>
    <div>
        <LandingPage />
        <ProductShowcase :projects="previewProjects" />
        <ServicesSection />
        <AboutMe />
        <TechStack />

        <!-- 05 — Contact -->
        <section class="py-24 md:py-32 border-t border-line">
            <div class="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading
                    index="05"
                    :label="$t('sections.contact_label')"
                    :title="$t('contact.title')"
                />
                <div class="grid md:grid-cols-12 gap-10 md:gap-16">
                    <p v-reveal class="md:col-span-5 text-muted leading-relaxed">
                        {{ $t("contact.invitation") }}
                    </p>
                    <div v-reveal="120" class="md:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

const { previewProjects } = useProjects();

useSeoMeta({
    title: "WlanKabL Digital: Products & Web Development",
    ogTitle: "WlanKabL Digital: Products & Web Development",
    description:
        "I build digital products. My own and yours. SaaS platforms, web apps and automation, end to end.",
    ogDescription:
        "I build digital products. My own and yours. SaaS platforms, web apps and automation, end to end.",
    ogImage: "/Crowd-Nation-Logo-BETTER.png",
    twitterCard: "summary_large_image",
});
</script>
