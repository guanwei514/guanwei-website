import { useEffect, useState } from "react"
import { sectionIds, type SectionId } from "@/types/site"

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home")

  useEffect(() => {
    const sections = sectionIds.flatMap((id) => {
      const element = document.getElementById(id)
      return element ? [{ element, id }] : []
    })
    let animationFrame = 0

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.34
      let currentSection: SectionId = "home"

      sections.forEach(({ element, id }) => {
        if (element.offsetTop <= marker) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
      animationFrame = 0
    }

    const handleViewportChange = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", handleViewportChange, { passive: true })
    window.addEventListener("resize", handleViewportChange)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", handleViewportChange)
      window.removeEventListener("resize", handleViewportChange)
    }
  }, [])

  return activeSection
}
