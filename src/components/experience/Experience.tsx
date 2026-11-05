import { experience } from "@/data/experience";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  const { language, t } = useLanguage();
  return (
    <section id="experiencia" className="section"><div className="section-shell experience-grid">
      <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} description={t.experience.description} />
      <ol className="timeline">{experience[language].map((item, index) => <li key={item.id} data-reveal className={index === 0 ? "current" : ""}>
        <div className="timeline-marker" aria-hidden="true" /><div className="timeline-meta"><span>{item.status ?? item.duration}</span>{item.status ? <small>{item.duration}</small> : null}</div>
        <div className="timeline-content"><h3>{item.company}</h3><h4>{item.role}</h4>{item.description ? <p>{item.description}</p> : null}</div>
      </li>)}</ol>
    </div></section>
  );
}