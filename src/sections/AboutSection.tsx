import profileImage from "@/assets/portfolio/profile.png"
import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface AboutSectionProps {
  content: SiteContent["about"]
}

export const AboutSection = ({ content }: AboutSectionProps) => (
  <section className="about-section section" id="about">
    <div className="shell">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} />
      <div className="about-layout">
        <figure className="profile-frame" data-reveal>
          <div className="profile-frame__number">{content.profileLabel}</div>
          <img alt={content.imageAlt} loading="lazy" src={profileImage} />
          <figcaption>{content.profileCaption}</figcaption>
        </figure>
        <div className="about-copy" data-reveal>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="principle-list">
            {content.principles.map((principle) => (
              <article className="principle-item" key={principle.index}>
                <span>{principle.index}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
