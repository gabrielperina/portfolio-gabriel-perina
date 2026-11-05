import type { Language } from "@/i18n/translations";

export type Education = {
  degree: string;
  period: string;
  duration: string;
};

export const education: Record<Language, Education> = {
  pt: { degree: "Análise e Desenvolvimento de Sistemas", period: "2021 — 2023", duration: "2 anos e 6 meses" },
  en: { degree: "Systems Analysis and Development", period: "2021 — 2023", duration: "2 years and 6 months" },
};

// Temas informados por Gabriel; títulos, emissores e datas dos certificados não foram confirmados.
export const certificationTopics = ["React", "TypeScript", "JavaScript"] as const;
