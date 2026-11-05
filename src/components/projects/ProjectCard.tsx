import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  return (
    <article className="project-card" data-reveal>
      {project.image ? <img src={project.image} alt={t.projects.imageAlt(project.title)} loading="lazy" /> : <div className="project-image-fallback" aria-hidden="true" />}
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label={t.projects.technologiesLabel}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <Link to="/projetos/$slug" params={{ slug: project.slug }} className="project-link">
          {t.projects.viewProject} <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}