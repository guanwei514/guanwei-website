import { Icon } from "@/components/Icon"
import type { SiteContent } from "@/types/site"

interface ContactSectionProps {
  content: SiteContent["contact"]
}

export const ContactSection = ({ content }: ContactSectionProps) => (
  <section className="contact-section section" id="contact">
    <div className="contact-section__grid shell">
      <div data-reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="contact-copy" data-reveal>
        <p>{content.description}</p>
        <span className="availability-dot">
          <i />
          {content.availability}
        </span>
        <div className="contact-links">
          <a href="mailto:guanweisu514@gmail.com">
            <span>
              <Icon name="mail" />
              {content.emailLabel}
            </span>
            <strong>guanweisu514@gmail.com</strong>
            <Icon name="arrow-up-right" />
          </a>
          <a href="https://github.com/guanwei514" rel="noreferrer" target="_blank">
            <span>
              <Icon name="code" />
              {content.githubLabel}
            </span>
            <strong>@guanwei514</strong>
            <Icon name="arrow-up-right" />
          </a>
          <a
            href="https://www.linkedin.com/in/guanweisu-15b7112a7/"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <Icon name="linkedin" />
              {content.linkedInLabel}
            </span>
            <strong>Guan Wei Su</strong>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
)
