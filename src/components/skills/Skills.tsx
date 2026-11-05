import type { CSSProperties } from "react";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Blocks, Code2, GitBranch } from "lucide-react";

const icons = [Code2, Blocks, GitBranch];

export function Skills() {
  const { language, t } = useLanguage();
  return (
    <section id="habilidades" className="section section-muted">
      <div className="section-shell">
        <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} />
        <div className="skills-grid">
          {skillGroups[language].map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <article key={group.id} className="skill-card" data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
                <header className="skill-card-top">
                  <span className="skill-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="skill-number" aria-hidden="true">0{index + 1}</span>
                </header>
                <div className="skill-card-heading">
                  <span>{group.label}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul aria-label={t.skills.groupLabel(group.title)}>
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skill} style={{ "--i": skillIndex } as CSSProperties}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
