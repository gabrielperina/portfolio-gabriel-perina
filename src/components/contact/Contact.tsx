import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  return <section id="contato" className="contact-section"><div className="section-shell contact-grid" data-reveal><p className="eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.text}</p><Button href="https://www.linkedin.com/in/gabrielperina/" external>{t.contact.cta} <ArrowUpRight size={17} /></Button></div></section>;
}
