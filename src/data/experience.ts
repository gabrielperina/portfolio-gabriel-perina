import type { Experience } from "@/types/experience";
import type { Language } from "@/i18n/translations";

export const experience: Record<Language, Experience[]> = {
  pt: [
    {
      id: "hub",
      company: "Hub Tecnológico",
      role: "Desenvolvedor Front-end",
      duration: "Aproximadamente 1 ano",
      status: "Atual",
      description:
        "Atuação no desenvolvimento e manutenção de aplicações web, implementação de novas funcionalidades, criação de CRUDs, menus e componentes reutilizáveis, melhorias em funcionalidades existentes e correção/manutenção de bugs.",
    },
    { id: "datasmart", company: "Data Smart", role: "Desenvolvedor Trainee", duration: "2 meses" },
    { id: "lightsystem", company: "Light System Software", role: "Suporte Técnico", duration: "1 ano e 4 meses" },
  ],
  en: [
    {
      id: "hub",
      company: "Hub Tecnológico",
      role: "Front-end Developer",
      duration: "About 1 year",
      status: "Current",
      description:
        "Developing and maintaining web applications, implementing new features, building CRUDs, menus and reusable components, improving existing features, and fixing and maintaining bugs.",
    },
    { id: "datasmart", company: "Data Smart", role: "Trainee Developer", duration: "2 months" },
    { id: "lightsystem", company: "Light System Software", role: "Technical Support", duration: "1 year and 4 months" },
  ],
};
