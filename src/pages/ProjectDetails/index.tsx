import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types/project";
import { Button } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useReveal } from "@/hooks/use-reveal";

export function ProjectDetailsPage({ project }: { project: Project }) {
  useReveal();
  const { t } = useLanguage();
  const p = t.projects;
  const sections = [[p.context, project.context], [p.problem, project.problem], [p.solution, project.solution]] as const;
  return <article className="page-section project-detail"><div className="section-shell"><Button href="/projetos" variant="quiet" className="back-link"><ArrowLeft size={16} /> {p.detailBack}</Button><header className="project-detail-header" data-reveal><p className="eyebrow">{p.detailEyebrow}</p><h1>{project.title}</h1><p>{project.description}</p><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></header>{project.image ? <img className="project-cover" src={project.image} alt={p.coverAlt(project.title)} /> : null}<div className="project-story">{sections.map(([title, content]) => content ? <section key={title} data-reveal><h2>{title}</h2><p>{content}</p></section> : null)}{project.features?.length ? <DetailList title={p.features} items={project.features} /> : null}{project.challenges?.length ? <DetailList title={p.challenges} items={project.challenges} /> : null}{project.learnings?.length ? <DetailList title={p.learnings} items={project.learnings} /> : null}</div><div className="project-actions">{project.githubUrl ? <Button href={project.githubUrl} external variant="secondary"><Github size={16} /> GitHub</Button> : null}{project.liveUrl ? <Button href={project.liveUrl} external>{p.live} <ArrowUpRight size={16} /></Button> : null}</div></div></article>;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return <section data-reveal><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}