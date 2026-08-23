interface SectionHeadingProps {
  align?: "left" | "right"
  eyebrow: string
  intro?: string
  title: string
}

export const SectionHeading = ({
  align = "left",
  eyebrow,
  intro,
  title,
}: SectionHeadingProps) => (
  <header className={`section-heading section-heading--${align}`} data-reveal>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {intro && <p className="section-heading__intro">{intro}</p>}
  </header>
)
