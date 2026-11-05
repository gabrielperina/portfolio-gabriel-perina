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
    {
      id: "lightsystem",
      company: "Light System Software",
      role: "Suporte Técnico",
      duration: "1 ano e 4 meses",
      description:
        "Atendimento e suporte técnico a clientes por chat e telefone, auxiliando na utilização do sistema, esclarecendo dúvidas e solucionando problemas. Suporte a funcionalidades de gestão empresarial, incluindo orientações sobre processos fiscais e emissão de notas fiscais para empresas de diferentes segmentos.",
    },
    {
      id: "datasmart",
      company: "Data Smart",
      role: "Desenvolvedor Trainee",
      duration: "2 meses",
      description:
        "Atuação com análise e visualização de dados utilizando Power BI. Desenvolvimento de gráficos e visualizações a partir de bases de dados fornecidas por empresas clientes, contribuindo para a análise e interpretação de informações.",
    },
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
    {
      id: "lightsystem",
      company: "Light System Software",
      role: "Technical Support",
      duration: "1 year and 4 months",
      description:
        "Provided technical support to customers via chat and phone, assisting with system usage, answering questions, and troubleshooting issues. Supported business management software features, including guidance on tax processes and invoice issuance for companies across different industries.",
    },
    {
      id: "datasmart",
      company: "Data Smart",
      role: "Trainee Developer",
      duration: "2 months",
      description:
        "Worked with data analysis and visualization using Power BI. Created charts and visualizations from datasets provided by client companies, contributing to data analysis and information interpretation.",
    },
  ],
};
