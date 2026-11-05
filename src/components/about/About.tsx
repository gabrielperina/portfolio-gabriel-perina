import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="sobre" className="section section-muted">
      <div className="section-shell about-grid">
        <div className="about-copy">
          <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="about-text" data-reveal>{t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <ul className="tag-list" aria-label={t.about.tagsLabel} data-reveal>{t.about.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
