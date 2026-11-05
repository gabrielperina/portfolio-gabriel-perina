import { ExternalLink, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

const sectionIds = ["inicio", "sobre", "experiencia", "habilidades", "certificacoes", "projetos", "contato"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const sections = sectionIds.map((id) => [t.nav.sections[id], `#${id}`] as const);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isHome = pathname === "/";
  const [active, setActive] = useActiveSection([...sectionIds], isHome);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      document.documentElement.classList.add("menu-open");
      const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);
      const onEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") setOpen(false);
      };
      const onDesktop = (event: MediaQueryListEvent) => {
        if (event.matches) setOpen(false);
      };
      const desktop = window.matchMedia("(min-width: 1001px)");
      window.addEventListener("keydown", onEscape);
      desktop.addEventListener("change", onDesktop);
      return () => {
        window.clearTimeout(focusTimer);
        document.documentElement.classList.remove("menu-open");
        window.removeEventListener("keydown", onEscape);
        desktop.removeEventListener("change", onDesktop);
      };
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      toggleRef.current?.focus({ preventScroll: true });
    }
    return undefined;
  }, [open]);

  const homeHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const onSelect = (anchor: string) => {
    if (isHome) setActive(anchor.slice(1));
    setOpen(false);
  };
  const linkProps = (anchor: string) => {
    const current = isHome && active === anchor.slice(1);
    return {
      href: homeHref(anchor),
      className: current ? "is-active" : undefined,
      "aria-current": current ? ("location" as const) : undefined,
      onClick: () => onSelect(anchor),
    };
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label={t.nav.mainLabel}>
        <div className="desktop-nav">
          <div className="nav-links">
            {sections.map(([label, anchor]) => <a key={anchor} {...linkProps(anchor)}><span>{label}</span></a>)}
          </div>
          <span className="nav-divider" aria-hidden="true" />
          <a className="nav-external" href="https://www.linkedin.com/in/gabrielperina/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} aria-hidden="true" /></a>
          <LanguageSwitcher /><ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
        <div className="mobile-actions">
          <span className="mobile-brand">Gabriel Perina</span>
          <div className="mobile-actions-buttons">
            <LanguageSwitcher /><ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button ref={toggleRef} variant="ghost" size="icon" className={`icon-button menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.nav.closeMenu : t.nav.openMenu}>
              <span className="menu-toggle-lines" aria-hidden="true"><i /><i /><i /></span>
            </Button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu-backdrop ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label={t.nav.menuDialog} aria-hidden={!open} inert={!open}>
        <div className="mobile-menu-header">
          <span className="eyebrow">{t.nav.menu}</span>
          <div className="mobile-actions-buttons">
            <LanguageSwitcher /><ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button ref={closeRef} variant="ghost" size="icon" className="icon-button" onClick={() => setOpen(false)} aria-label={t.nav.closeMenu}><X size={17} aria-hidden="true" /></Button>
          </div>
        </div>
        <div className="mobile-menu-links">
          {sections.map(([label, anchor], index) => (
            <a key={anchor} {...linkProps(anchor)} style={{ "--i": index } as CSSProperties}>
              <small>{String(index + 1).padStart(2, "0")}</small>{label}
            </a>
          ))}
        </div>
        <a className="mobile-menu-external" style={{ "--i": sections.length } as CSSProperties} href="https://www.linkedin.com/in/gabrielperina/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} aria-hidden="true" /></a>
      </div>
    </header>
  );
}
