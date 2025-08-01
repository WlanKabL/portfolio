import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const initScrollAnimation = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden')
            entry.target.classList.add('scroll-visible')
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all elements with scroll-hidden class
    const elementsToAnimate = document.querySelectorAll('.scroll-hidden')
    elementsToAnimate.forEach((el) => {
      if (observer) observer.observe(el)
    })
  }

  const addScrollAnimationClass = () => {
    // Add scroll-hidden class to elements that should animate
    const selectors = [
      '.animate-on-scroll',
      '[data-animate="true"]',
      '.project-card',
      '.tech-card',
      '.feature-item'
    ]

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(el => {
        el.classList.add('scroll-hidden')
      })
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      addScrollAnimationClass()
      initScrollAnimation()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimation,
    addScrollAnimationClass
  }
}