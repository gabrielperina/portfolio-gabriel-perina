import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsEmpty } from "@/components/projects/ProjectsEmpty";
import { Button } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProjectsSection() {
  const { t } = useLanguage();
  const visibleProjects = projects.filter((project) => project.featured !== false).slice(0, 3);
  return <section id="projetos" className="section"><div className="section-shell"><div className="section-title-row"><SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} /><Button href="/projetos" variant="secondary">{t.projects.viewAll} <ArrowRight size={16} /></Button></div>{visibleProjects.length ? <div className="projects-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <ProjectsEmpty />}</div></section>;
}