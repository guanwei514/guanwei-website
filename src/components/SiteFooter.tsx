import { Icon } from "@/components/Icon"
import brandSymbol from "@/assets/brand/gw-symbol-white.svg"
import type { SiteContent } from "@/types/site"

interface SiteFooterProps {
  content: SiteContent["footer"]
}

export const SiteFooter = ({ content }: SiteFooterProps) => (
  <footer className="site-footer">
    <div className="shell site-footer__inner">
      <div>
        <a aria-label="Guan Wei — Home" className="brand brand--footer" href="#home">
          <img alt="" className="brand__mark" src={brandSymbol} width="52" height="39" />
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
