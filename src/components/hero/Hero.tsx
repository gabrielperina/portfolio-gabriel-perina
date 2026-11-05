import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/images/gabriel-perina-santanna.png";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/PortfolioButton";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-enter delay-1">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-enter delay-2">Gabriel Perina<br />Sant'Anna</h1>
          <p className="hero-description hero-enter delay-4">{t.hero.description}</p>
          <ul className="hero-stack hero-enter delay-4" aria-label={t.hero.stackLabel}>{t.hero.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="hero-actions hero-enter delay-5"><Button href="https://www.linkedin.com/in/gabrielperina/" external>LinkedIn <ArrowUpRight size={16} /></Button><Button href="#experiencia" variant="secondary">{t.hero.experience} <ArrowDownRight size={16} /></Button></div>
        </div>
        <div className="portrait-stage">
          <div className="portrait-frame"><img src={portrait} alt={t.hero.portraitAlt} fetchPriority="high" /></div>
        </div>
      </div>
    </section>
  );
}