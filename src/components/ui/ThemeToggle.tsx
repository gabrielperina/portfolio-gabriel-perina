import { Moon, Sun } from "lucide-react";
import type { Theme } from "@/hooks/use-theme";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const { t } = useLanguage();
  return (
    <Button variant="ghost" size="icon" className={`icon-button theme-toggle ${theme === "light" ? "is-light" : "is-dark"}`} onClick={onToggle} aria-label={theme === "light" ? t.nav.themeToDark : t.nav.themeToLight} title={t.nav.themeTitle}>
      <Sun size={17} className="theme-sun" aria-hidden="true" />
      <Moon size={17} className="theme-moon" aria-hidden="true" />
    </Button>
  );
}