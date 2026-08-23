import { Icon } from "@/components/Icon"
import type { SiteContent } from "@/types/site"

interface SiteFooterProps {
  content: SiteContent["footer"]
}

export const SiteFooter = ({ content }: SiteFooterProps) => (
  <footer className="site-footer">
    <div className="shell site-footer__inner">
      <div>
        <a className="brand brand--footer" href="#home">
          <span className="brand__mark">GW</span>
          <span className="brand__text">Guan Wei Su</span>
        </a>
        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} Guan Wei Su</p>
          <time dateTime={content.lastUpdatedIso}>{content.lastUpdated}</time>
        </div>
      </div>
      <a className="back-to-top" href="#home">
        {content.backToTop}
        <Icon name="arrow-up" size={18} />
      </a>
    </div>
  </footer>
)
