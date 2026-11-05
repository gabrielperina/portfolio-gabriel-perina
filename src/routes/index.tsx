import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Perina Sant'Anna | Desenvolvedor Front-End" },
       { name: "description", content: "Conheça a experiência, as habilidades e a formação em Análise e Desenvolvimento de Sistemas de Gabriel Perina Sant'Anna, Desenvolvedor Front-End." },
      { property: "og:title", content: "Gabriel Perina Sant'Anna | Desenvolvedor Front-End" },
       { property: "og:description", content: "Experiência, formação, habilidades e projetos de Gabriel Perina Sant'Anna, Desenvolvedor Front-End." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
