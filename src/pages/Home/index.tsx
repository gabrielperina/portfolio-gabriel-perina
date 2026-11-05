import { useReveal } from "@/hooks/use-reveal";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Experience } from "@/components/experience/Experience";
import { Education } from "@/components/education/Education";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Skills } from "@/components/skills/Skills";

export function HomePage() {
  useReveal();
  return <><Hero /><About /><Experience /><Skills /><Education /><ProjectsSection /><Contact /></>;
}