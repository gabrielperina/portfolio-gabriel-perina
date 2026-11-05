import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/PortfolioButton";

export function NotFoundPage({ project = false }: { project?: boolean }) {
  const n = useLanguage().t.notFound;
  return <section className="not-found"><div><span>404</span><p className="eyebrow">{n.eyebrow}</p><h1>{project ? n.projectTitle : n.pageTitle}</h1><p>{project ? n.projectText : n.pageText}</p><Button href={project ? "/projetos" : "/"}><ArrowLeft size={16} /> {project ? n.viewProjects : n.backHome}</Button></div></section>;
}