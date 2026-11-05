export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  context?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  /** Optional English versions of the descriptive fields. */
  en?: Partial<Pick<Project, "title" | "description" | "context" | "problem" | "solution" | "features" | "challenges" | "learnings">>;
}
