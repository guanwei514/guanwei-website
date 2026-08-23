import { useEffect } from "react"

export const useRevealOnScroll = (refreshKey: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [refreshKey])
}
