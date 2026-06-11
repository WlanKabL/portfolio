/**
 * Domain-based default locale: wlankabl.de greets visitors in German,
 * the .com domain stays English. Only applies when the visitor has no
 * stored language preference yet — explicit choices always win.
 */
export default defineNuxtPlugin(() => {
    const { $i18n } = useNuxtApp();
    const localeCookie = useCookie("i18n_locale");

    if (localeCookie.value) {
        return;
    }

    const host = useRequestURL().hostname;
    if (host.endsWith(".de") && $i18n.locale.value !== "de") {
        void $i18n.setLocale("de");
    }
});
