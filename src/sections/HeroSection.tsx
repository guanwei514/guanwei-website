import { Icon } from "@/components/Icon"
import type { SiteContent } from "@/types/site"

interface HeroSectionProps {
  content: SiteContent["hero"]
}

export const HeroSection = ({ content }: HeroSectionProps) => (
  <section className="hero-section" id="home">
    <div className="hero-section__grid shell">
      <div className="hero-copy" data-reveal>
        <div className="hero-copy__topline">
          <p className="eyebrow">{content.eyebrow}</p>
          <span>{content.availability}</span>
        </div>
        <p className="hero-copy__greeting">
          {content.greeting} <strong>{content.name}</strong>
        </p>
        <h1>{content.title}</h1>
        <p className="hero-copy__summary">{content.summary}</p>
        <div className="hero-copy__actions">
          <a className="button button--primary" href="#work">
            {content.primaryAction}
            <Icon name="arrow-right" />
          </a>
          <a className="button button--text" href="#contact">
            {content.contactAction}
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>

      <div aria-label={content.ontology.ariaLabel} className="system-visual" data-reveal>
        <div className="system-visual__status">
          <span />
          {content.ontology.status}
        </div>

        <div className="ontology-graph">
          <svg
            aria-hidden="true"
            className="ontology-graph__links"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line className="ontology-link ontology-link--relation" x1="21" x2="79" y1="22" y2="22" />
            <line className="ontology-link ontology-link--relation" x1="79" x2="79" y1="22" y2="78" />
            <line className="ontology-link ontology-link--relation" x1="79" x2="21" y1="78" y2="78" />
            <line className="ontology-link ontology-link--relation" x1="21" x2="21" y1="78" y2="22" />
            <line className="ontology-link" x1="21" x2="50" y1="22" y2="50" />
            <line className="ontology-link" x1="79" x2="50" y1="22" y2="50" />
            <line className="ontology-link" x1="21" x2="50" y1="78" y2="50" />
            <line className="ontology-link" x1="79" x2="50" y1="78" y2="50" />
            <circle className="ontology-link__point" cx="50" cy="50" r="1.2" />
          </svg>

          {content.ontology.nodes.slice(0, 2).map((node) => (
            <div className={`ontology-node ontology-node--${node.id}`} key={node.id}>
              <small>{node.index}</small>
              <strong>{node.title}</strong>
              <span>{node.detail}</span>
            </div>
          ))}

          <div className="ontology-core">
            <small>{content.ontology.coreEyebrow}</small>
            <strong>{content.ontology.coreTitle}</strong>
            <span>{content.ontology.coreDescription}</span>
          </div>

          {content.ontology.nodes.slice(2).map((node) => (
            <div className={`ontology-node ontology-node--${node.id}`} key={node.id}>
              <small>{node.index}</small>
              <strong>{node.title}</strong>
              <span>{node.detail}</span>
            </div>
          ))}
        </div>

        <div className="ontology-legend">
          {content.ontology.legend.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="hero-facts shell" data-reveal>
      {content.facts.map((fact, index) => (
        <div className="hero-fact" key={fact.label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{fact.value}</strong>
            <small>{fact.label}</small>
          </div>
        </div>
      ))}
    </div>
  </section>
)
