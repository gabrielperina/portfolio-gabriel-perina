import { Braces, Code2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/PortfolioButton";

export function ProjectsEmpty({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className={compact ? "projects-empty compact" : "projects-empty"} data-reveal>
      <div className="project-blueprint" aria-hidden="true">
        <div className="blueprint-window"><Code2 size={25} /><span /></div>
        <div className="blueprint-window muted"><Braces size={25} /><span /></div>
      </div>
      <div className="projects-empty-copy">
        <span className="status-line"><i /> {t.projects.emptyStatus}</span>
        <h3>{t.projects.emptyTitle}</h3>
        <p>{t.projects.emptyText}</p>
        <Button href="https://www.linkedin.com/in/gabrielperina/" external variant="secondary">{t.projects.followOnLinkedIn}</Button>
      </div>
    </div>
  );
}