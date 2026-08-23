import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface SkillsSectionProps {
  content: SiteContent["skills"]
}

export const SkillsSection = ({ content }: SkillsSectionProps) => (
  <section className="skills-section section" id="skills">
    <div className="shell">
      <SectionHeading align="right" eyebrow={content.eyebrow} title={content.title} />

      <div className="skill-groups">
        {content.groups.map((group) => (
          <article className="skill-group" data-reveal key={group.index}>
            <div className="skill-group__head">
              <span>{group.index}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="credentials-layout">
        <div className="credentials-title" data-reveal>
          <span>FIELD NOTES</span>
          <h3>{content.credentialsTitle}</h3>
        </div>
        <div className="credentials-list" data-reveal>
          {content.credentials.map((credential) => (
            <article className="credential-item" key={`${credential.date}-${credential.title}`}>
              <time>{credential.date}</time>
              <div>
                <h4>{credential.title}</h4>
                <p>{credential.issuer}</p>
              </div>
            </article>
          ))}
          <article className="credential-item credential-item--patent">
            <time>{content.patent.label}</time>
            <div>
              <h4>{content.patent.title}</h4>
              <p>{content.patent.date}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
)
