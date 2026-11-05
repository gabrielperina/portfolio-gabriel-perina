import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-primary text-primary-foreground border-primary hover:-translate-y-0.5 hover:shadow-button",
  secondary: "bg-background text-foreground border-border hover:bg-muted",
  quiet: "bg-transparent text-foreground border-transparent hover:text-primary",
};

export function Button({ children, href, variant = "primary", external, className }: ButtonProps) {
  const styles = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    variants[variant],
    className,
  );

  if (external) {
    return <a className={styles} href={href} target="_blank" rel="noreferrer">{children}</a>;
  }
  if (href.startsWith("#")) return <a className={styles} href={href}>{children}</a>;
  return <Link className={styles} to={href}>{children}</Link>;
}