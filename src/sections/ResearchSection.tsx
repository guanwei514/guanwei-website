import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface ResearchSectionProps {
  content: SiteContent["research"]
}

export const ResearchSection = ({ content }: ResearchSectionProps) => (
  <>
    <section className="side-project-section section" id="side-project">
      <div className="shell">
        <article className="research-card research-card--project">
          <figure className="research-card__media" data-reveal>
            <img alt={content.imageAlt} loading="lazy" src={content.image} />
          </figure>

          <div className="research-card__body" data-reveal>
            <div className="research-card__meta">
              <span>{content.projectLabel}</span>
              <span>{content.currentTitle}</span>
            </div>
            <h3>{content.projectTitle}</h3>
            <p>{content.projectDescription}</p>
            <p className="research-card__detail">{content.currentDescription}</p>
            <ul className="research-card__tags">
              {content.currentItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="side-project-compact" data-reveal>
          <div className="side-project-compact__heading">
            <span>{content.secondaryProject.label}</span>
            <h3>{content.secondaryProject.title}</h3>
          </div>
          <div className="side-project-compact__content">
            <p>{content.secondaryProject.description}</p>
            <ul>
              {content.secondaryProject.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section className="research-section section" id="research">
      <div className="shell">
        <SectionHeading eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

        <article className="research-card research-card--ongoing">
          <div className="research-domain-board" data-reveal>
            <div className="research-domain-board__heading">
              <span>RESEARCH CONTINUUM</span>
              <strong>AI × FACTORY SYSTEMS</strong>
            </div>
            <ul>
              {content.horizonItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="research-card__body" data-reveal>
            <div className="research-card__meta">
              <span>ONGOING RESEARCH</span>
              <span>CONTINUOUS R&amp;D</span>
            </div>
            <h3>{content.horizonTitle}</h3>
            <p>{content.horizonDescription}</p>
            <p className="research-card__statement">{content.statement}</p>
          </div>
        </article>
      </div>
    </section>
  </>
)
