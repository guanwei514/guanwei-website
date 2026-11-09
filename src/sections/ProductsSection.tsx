import { SectionHeading } from "@/components/SectionHeading"
import type { SiteContent } from "@/types/site"

interface ProductsSectionProps {
  content: SiteContent["products"]
}

export const ProductsSection = ({ content }: ProductsSectionProps) => (
  <section className="products-section section" id="products">
    <div className="shell">
      <SectionHeading eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="product-list">
        {content.items.map((product) => (
          <article aria-labelledby={`${product.id}-title`} className="product-feature" key={product.id}>
            <div className="product-feature__body" data-reveal>
              <div className="product-feature__meta">
                <span>{product.category}</span>
                <span>{product.version}</span>
              </div>
              <h3 id={`${product.id}-title`}>{product.name}</h3>
              <p>{product.description}</p>
              <ul className="product-feature__features">
                {product.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>

            <figure className="product-feature__film">
              <video
                aria-describedby={`${product.id}-video-description`}
                aria-label={product.videoLabel}
                controls
                playsInline
                poster={product.poster}
                preload="none"
              >
                <source src={product.videoSrc} type="video/mp4" />
                <a href={product.videoSrc}>{content.videoFallback}</a>
              </video>
              <figcaption id={`${product.id}-video-description`}>
                <span>{product.videoLabel}</span>
                <span>{product.videoDescription}</span>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </div>
  </section>
)
