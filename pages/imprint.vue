<template>
    <div class="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <header class="mb-12">
            <p v-reveal class="section-label mb-6">
                <span class="index">&sect;</span>
                <span class="px-2 text-faint/60">/</span>
                Impressum
            </p>
            <h1
                v-reveal="80"
                class="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink"
            >
                Impressum
            </h1>
        </header>

        <div v-reveal class="legal flex flex-col gap-10">
            <section>
                <h2>Angaben gem&auml;&szlig; &sect; 5 DDG</h2>
                <p>
                    Philipp Stecher<br />
                    WlanKabL Digital (Einzelunternehmen)<br />
                    Krummer Weg 26<br />
                    48607 Ochtrup<br />
                    Deutschland
                </p>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>
                    E-Mail:
                    <a href="mailto:contact@wlankabl.com" class="link-underline text-accent">
                        contact@wlankabl.com
                    </a>
                </p>
            </section>

            <section>
                <h2>Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV</h2>
                <p>Philipp Stecher, Anschrift wie oben.</p>
            </section>

            <section>
                <h2>Haftung f&uuml;r Links</h2>
                <p>
                    Diese Website enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte
                    ich keinen Einfluss habe. F&uuml;r diese fremden Inhalte ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung
                    waren keine rechtswidrigen Inhalte erkennbar.
                </p>
            </section>

            <section>
                <h2>Urheberrecht</h2>
                <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Der Quellcode dieser Website ist als
                    Open Source verf&uuml;gbar, die jeweilige Lizenz findest du im
                    <a
                        href="https://github.com/WlanKabL/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link-underline text-accent"
                        >GitHub-Repository</a
                    >.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

useSeoMeta({
    title: "Impressum | WlanKabL Digital",
    robots: "noindex, follow",
});
</script>

<style scoped>
.legal h2 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-ink);
    margin-bottom: 0.75rem;
}

.legal p {
    color: var(--color-muted);
    line-height: 1.8;
}
</style>
