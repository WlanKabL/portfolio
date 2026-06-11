import type { DirectiveBinding } from "vue";

/**
 * v-reveal — scroll-triggered reveal animation.
 *
 * Usage: `v-reveal` or `v-reveal="120"` (stagger delay in ms).
 * Elements render hidden (see [data-reveal] in tailwind.css) and receive
 * `.revealed` once they enter the viewport. Respects prefers-reduced-motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
    let observer: IntersectionObserver | undefined;

    const getObserver = () => {
        observer ??= new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer?.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );
        return observer;
    };

    nuxtApp.vueApp.directive("reveal", {
        getSSRProps(binding: DirectiveBinding<number | undefined>) {
            return {
                "data-reveal": "",
                style: binding.value ? { "--reveal-delay": `${binding.value}ms` } : undefined,
            };
        },
        mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
            el.setAttribute("data-reveal", "");
            if (binding.value) {
                el.style.setProperty("--reveal-delay", `${binding.value}ms`);
            }

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                el.classList.add("revealed");
                return;
            }

            getObserver().observe(el);
        },
        unmounted(el: HTMLElement) {
            observer?.unobserve(el);
        },
    });
});
