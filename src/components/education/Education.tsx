import { ArrowUpRight, GraduationCap, BookOpen } from "lucide-react";
import { education, certificationTopics } from "@/data/education";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/PortfolioButton";

export function Education() {
  const { language, t } = useLanguage();
  const e = t.education;
  const degree = education[language];
  return (
    <section id="certificacoes" className="section section-muted">
      <div className="section-shell">
        <SectionTitle eyebrow={e.eyebrow} title={e.title} description={e.description} />
        <div className="education-list">
          <article className="education-entry" data-reveal>
            <div className="education-icon" aria-hidden="true"><GraduationCap size={22} strokeWidth={1.6} /></div>
            <div className="education-body">
              <p className="eyebrow">{e.degreeEyebrow}</p>
              <h3>{degree.degree}</h3>
              <p>{e.degreeType}</p>
            </div>
            <div className="education-period"><strong>{degree.period}</strong><span>{degree.duration}</span></div>
          </article>
          <article className="education-entry" data-reveal>
            <div className="education-icon" aria-hidden="true"><BookOpen size={22} strokeWidth={1.6} /></div>
            <div className="education-body">
              <p className="eyebrow">{e.certEyebrow}</p>
              <h3>{e.certTitle}</h3>
              <ul className="education-topics" aria-label={e.topicsLabel}>{certificationTopics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </div>
            <Button href="https://www.linkedin.com/in/gabrielperina/" external variant="secondary" className="education-link">{e.viewOnLinkedIn} <ArrowUpRight size={16} /></Button>
          </article>
        </div>
      </div>
    </section>
  );
}