import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectDetailsPage } from "@/pages/ProjectDetails";
import { NotFoundPage } from "@/pages/NotFound";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} | Gabriel Perina Sant'Anna` : "Projeto não encontrado" },
    { name: "description", content: loaderData?.description ?? "Projeto não encontrado no portfólio de Gabriel Perina Sant'Anna." },
    { property: "og:title", content: loaderData?.title ?? "Projeto não encontrado" },
    { property: "og:description", content: loaderData?.description ?? "Projeto não encontrado." },
    { property: "og:type", content: "article" }, { property: "og:url", content: `/projetos/${params.slug}` },
    { name: "twitter:card", content: "summary_large_image" },
    ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
  ], links: [{ rel: "canonical", href: `/projetos/${params.slug}` }] }),
  component: () => <ProjectDetailsPage project={Route.useLoaderData()} />,
  notFoundComponent: () => <NotFoundPage project />,
  errorComponent: () => <NotFoundPage project />,
});