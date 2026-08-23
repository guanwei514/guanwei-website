import { useEffect, useState } from "react"
import { Icon } from "@/components/Icon"
import type { Language, SectionId, SiteContent } from "@/types/site"

interface SiteHeaderProps {
  activeSection: SectionId
  content: SiteContent
  language: Language
  onLanguageChange: (language: Language) => void
}

export const SiteHeader = ({
  activeSection,
  content,
  language,
  onLanguageChange,
}: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen)
    return () => document.body.classList.remove("menu-open")
  }, [menuOpen])

  const nextLanguage = language === "zh-TW" ? "en" : "zh-TW"

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a aria-label="Guan Wei — Home" className="brand" href="#home">
          <span className="brand__mark">GW</span>
          <span className="brand__text">Guan Wei Su</span>
        </a>

        <nav aria-label="Primary navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <div className="site-nav__panel">
            <div className="site-nav__mobile-head">
              <span>Navigation</span>
              <button
                aria-label={content.accessibility.closeMenu}
                className="icon-button"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                <Icon name="close" />
              </button>
            </div>
            <ol className="site-nav__list">
              {content.nav.map((item, index) => (
                <li key={item.id}>
                  <a
                    aria-current={activeSection === item.id ? "page" : undefined}
                    className={activeSection === item.id ? "is-active" : ""}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="site-header__actions">
          <button
            aria-label={content.accessibility.language}
            className="language-button"
            onClick={() => onLanguageChange(nextLanguage)}
            type="button"
          >
            <span className={language === "zh-TW" ? "is-active" : ""}>中</span>
            <span aria-hidden="true">/</span>
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label={content.accessibility.menu}
            className="icon-button menu-button"
            onClick={() => setMenuOpen(true)}
            type="button"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}
