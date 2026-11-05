import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsEmpty } from "@/components/projects/ProjectsEmpty";
import { Button } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

export function ProjectsPage() {
  useReveal();
  const { t } = useLanguage();
  return <section className="page-section"><div className="section-shell"><Button href="/" variant="quiet" className="back-link"><ArrowLeft size={16} /> {t.projects.pageBack}</Button><header className="page-header" data-reveal><p className="eyebrow">{t.projects.pageEyebrow}</p><h1>{t.projects.pageTitle}</h1><p>{t.projects.pageText}</p></header>{projects.length ? <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <ProjectsEmpty />}</div></section>;
}