import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"
import { siteContent } from "@/content/siteContent"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useLanguage } from "@/hooks/useLanguage"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"
import { ExperienceSection } from "@/sections/ExperienceSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProjectsSection } from "@/sections/ProjectsSection"
import { ResearchSection } from "@/sections/ResearchSection"
import { SkillsSection } from "@/sections/SkillsSection"

export const App = () => {
  const activeSection = useActiveSection()
  const { language, setLanguage } = useLanguage()
  const content = siteContent[language]

  useRevealOnScroll(language)

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>
      <SiteHeader
        activeSection={activeSection}
        content={content}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main id="main-content">
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <ExperienceSection content={content.experience} />
        <SkillsSection content={content.skills} />
        <ResearchSection content={content.research} />
        <ProjectsSection content={content.work} />
        <ContactSection content={content.contact} />
      </main>
      <SiteFooter content={content.footer} />
    </>
  )
}
