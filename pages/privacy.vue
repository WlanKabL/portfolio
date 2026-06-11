<template>
    <div class="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <header class="mb-12">
            <p v-reveal class="section-label mb-6">
                <span class="index">&sect;</span>
                <span class="px-2 text-faint/60">/</span>
                Datenschutz
            </p>
            <h1
                v-reveal="80"
                class="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink"
            >
                Datenschutzerkl&auml;rung
            </h1>
        </header>

        <div v-reveal class="legal flex flex-col gap-10">
            <section>
                <h2>1. Verantwortlicher</h2>
                <p>
                    Philipp Stecher, WlanKabL Digital, Krummer Weg 26, 48607 Ochtrup,
                    Deutschland.<br />
                    E-Mail:
                    <a href="mailto:contact@wlankabl.com" class="link-underline text-accent">
                        contact@wlankabl.com
                    </a>
                </p>
            </section>

            <section>
                <h2>2. Hosting und Server-Logs</h2>
                <p>
                    Beim Aufruf dieser Website verarbeitet der Webserver automatisch technische
                    Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
                    Browser-Typ und Betriebssystem. Diese Daten sind f&uuml;r den sicheren Betrieb
                    der Website technisch erforderlich (Art. 6 Abs. 1 lit. f DSGVO) und werden nicht
                    mit anderen Datenquellen zusammengef&uuml;hrt.
                </p>
            </section>

            <section>
                <h2>3. Kontaktformular</h2>
                <p>
                    Wenn du das Kontaktformular nutzt, werden deine E-Mail-Adresse und deine
                    Nachricht zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO).
                    Die Zustellung erfolgt technisch &uuml;ber einen Webhook des Dienstes Discord
                    (Discord Inc., 444 De Haro Street, San Francisco, CA 94107, USA). Dabei
                    k&ouml;nnen Daten in die USA &uuml;bermittelt werden. Discord ist nach dem EU-US
                    Data Privacy Framework zertifiziert. Deine Angaben werden gel&ouml;scht, sobald
                    sie f&uuml;r die Bearbeitung nicht mehr erforderlich sind.
                </p>
            </section>

            <section>
                <h2>4. Spracheinstellung (Cookie und Local Storage)</h2>
                <p>
                    Diese Website speichert deine Sprachauswahl in einem Cookie
                    (<code>i18n_locale</code>) und im Local Storage deines Browsers
                    (<code>portfolio_language</code>). Diese Speicherung ist technisch erforderlich,
                    um die Website in deiner gew&auml;hlten Sprache anzuzeigen (&sect; 25 Abs. 2 Nr.
                    2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO). Es findet kein Tracking statt.
                </p>
            </section>

            <section>
                <h2>5. Externe Inhalte</h2>
                <p>
                    Schriftarten werden lokal von diesem Server ausgeliefert, es findet keine
                    Verbindung zu Google Fonts statt. Einzelne Bilder werden von
                    <code>downloads.crowd-nation.com</code> geladen, einer eigenen Infrastruktur des
                    Verantwortlichen.
                </p>
            </section>

            <section>
                <h2>6. Keine Analyse-Tools</h2>
                <p>
                    Diese Website verwendet keine Analyse-, Tracking- oder Werbedienste und setzt
                    keine Cookies zu Marketingzwecken.
                </p>
            </section>

            <section>
                <h2>7. Deine Rechte</h2>
                <p>
                    Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
                    L&ouml;schung (Art. 17), Einschr&auml;nkung der Verarbeitung (Art. 18),
                    Daten&uuml;bertragbarkeit (Art. 20) und Widerspruch (Art. 21). Au&szlig;erdem
                    kannst du dich bei einer Datenschutz-Aufsichtsbeh&ouml;rde beschweren,
                    zust&auml;ndig ist die Landesbeauftragte f&uuml;r Datenschutz und
                    Informationsfreiheit Nordrhein-Westfalen.
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
    title: "Datenschutz | WlanKabL Digital",
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

.legal code {
    font-family: var(--font-mono);
    font-size: 0.875em;
    color: var(--color-accent);
}
</style>
