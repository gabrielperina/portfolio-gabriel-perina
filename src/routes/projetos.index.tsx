import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/pages/Projects";

export const Route = createFileRoute("/projetos/")({
  head: () => ({ meta: [
    { title: "Projetos | Gabriel Perina Sant'Anna" },
    { name: "description", content: "Projetos Front-End de Gabriel Perina Sant'Anna, desenvolvidos com React, TypeScript e atenção à experiência do usuário." },
    { property: "og:title", content: "Projetos | Gabriel Perina Sant'Anna" },
    { property: "og:description", content: "Projetos Front-End, decisões técnicas e detalhes de implementação." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/projetos" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/projetos" }] }),
  component: ProjectsPage,
});
