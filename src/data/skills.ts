import type { SkillGroup } from "@/types/skill";
import type { Language } from "@/i18n/translations";

export const skillGroups: Record<Language, SkillGroup[]> = {
  pt: [
    { id: "frontend", label: "Core stack", title: "Front-End", skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
    { id: "apps", label: "Desenvolvimento", title: "Aplicações", skills: ["APIs REST", "CRUD", "Componentização", "Componentes reutilizáveis"] },
    { id: "tools", label: "Workflow", title: "Ferramentas", skills: ["Git"] },
  ],
  en: [
    { id: "frontend", label: "Core stack", title: "Front-End", skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
    { id: "apps", label: "Development", title: "Applications", skills: ["REST APIs", "CRUD", "Componentization", "Reusable components"] },
    { id: "tools", label: "Workflow", title: "Tools", skills: ["Git"] },
  ],
};
