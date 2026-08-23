import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface ExperienceSectionProps {
  content: SiteContent["experience"]
}

export const ExperienceSection = ({ content }: ExperienceSectionProps) => (
  <section className="experience-section section" id="experience">
    <div className="shell">
      <SectionHeading eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="experience-layout">
        <div className="career-column">
          <p className="career-column__label">{content.rolesTitle}</p>
          <div className="career-list">
            {content.roles.map((item, index) => (
              <article className="career-item" data-reveal key={item.id}>
                <span className="career-item__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="career-item__content">
                  <div className="career-item__meta">
                    <strong>{item.company}</strong>
                    <time>{item.period}</time>
                  </div>
                  <div className="career-item__heading">
                    <h3>{item.role}</h3>
                    {item.current && <span>{content.currentLabel}</span>}
                  </div>
                  <p className="career-item__department">{item.department}</p>
                  <p className="career-item__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="education-panel" data-reveal>
          <p className="education-panel__label">{content.educationTitle}</p>
          <div className="education-list">
            {content.education.map((item) => (
              <article className="education-item" key={item.id}>
                <time>{item.period}</time>
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
                {item.detail && <small>{item.detail}</small>}
              </article>
            ))}
          </div>
        </aside>
      </div>
    </div>
  </section>
)
