# Portfólio — Gabriel Perina Sant'Anna

Portfólio profissional de Gabriel Perina Sant'Anna, Desenvolvedor Front-End (React.js, TypeScript, JavaScript, APIs REST). Apresenta perfil, experiência, habilidades, formação e projetos em uma interface responsiva com temas claro e escuro.

## Tecnologias

- React 19 + TypeScript
- Vite
- TanStack Router (roteamento por arquivos)
- Tailwind CSS v4 + CSS autoral
- Lucide React (ícones)

## Instalação e execução

Requer Node.js e npm. No diretório do projeto:

```sh
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # versão de produção
npm run preview  # pré-visualização da versão de produção
```

## Estrutura

```
src/
  assets/       imagens do projeto
  components/   about, contact, education, experience, hero, layout, projects, skills, ui
  data/         projects.ts, experience.ts, skills.ts, education.ts
  hooks/        use-theme.ts, use-reveal.ts
  pages/        Home, Projects, ProjectDetails, NotFound
  routes/       /, /projetos, /projetos/$slug
  types/        project.ts, experience.ts, skill.ts
  styles.css    design system (tema claro/escuro) e estilos autorais
```

## Como adicionar um projeto

O portfólio começa sem projetos publicados e exibe “Projetos em desenvolvimento”. Para adicionar um projeto, insira um objeto no array de `src/data/projects.ts`. A apresentação na página inicial, a listagem em `/projetos` e os detalhes em `/projetos/<slug>` são gerados automaticamente. Use um `slug` único e, se informar uma imagem, forneça a URL ou um asset do projeto.

```ts
{
  slug: "meu-projeto",
  title: "Meu Projeto",
  description: "Resumo curto do projeto.",
  technologies: ["React", "TypeScript"],
  // opcionais: image, githubUrl, liveUrl, featured,
  // context, problem, solution, features, challenges, learnings
}
```

## Acessibilidade e performance

- HTML semântico, link "pular para o conteúdo", foco visível e `aria-label` nos controles.
- Tema escuro inicial, alternância para tema claro com persistência em `localStorage` e transição suave.
- Animações de entrada durante a rolagem, menu mobile animado e suporte a `prefers-reduced-motion`.
- Imagens com `loading="lazy"` (exceto o retrato principal) e metadados de SEO por página.

O retrato aparece apenas na abertura; a seção de contato leva ao LinkedIn, sem formulário de envio.

A formação em Análise e Desenvolvimento de Sistemas (2021–2023) e os temas de certificação Front-End ficam em `src/data/education.ts`. O LinkedIn solicita login para consultar os detalhes; não foram inventados nomes de instituições, cursos ou emissores. Para incluir títulos exatos e links individuais, confirme esses dados antes de publicá-los.

## Contato

[LinkedIn](https://www.linkedin.com/in/gabrielperina/)
