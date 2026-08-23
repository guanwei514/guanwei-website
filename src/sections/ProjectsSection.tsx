import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface ProjectsSectionProps {
  content: SiteContent["work"]
}

export const ProjectsSection = ({ content }: ProjectsSectionProps) => (
  <section className="projects-section section" id="work">
    <div className="shell">
      <SectionHeading eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="project-list">
        {content.projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className={`project-card__media ${project.image ? "has-image" : "is-graphic"}`}>
              {project.image ? (
                <img alt={project.imageAlt ?? ""} loading="lazy" src={project.image} />
              ) : (
                <div className="project-graphic" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                  <i />
                  <i />
                </div>
              )}
              <span className="project-card__number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.category}</span>
                <time>{project.date}</time>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)
