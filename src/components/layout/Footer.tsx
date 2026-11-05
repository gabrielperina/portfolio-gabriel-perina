import { useLanguage } from "@/i18n/LanguageProvider";

const ids = ["inicio", "sobre", "experiencia", "habilidades", "certificacoes", "projetos", "contato"] as const;

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div><strong>Gabriel Perina Sant'Anna</strong><span>{t.footer.role}</span></div>
        <nav aria-label={t.nav.footerLabel}>{ids.map((id) => <a key={id} href={`/#${id}`}>{t.nav.sections[id]}</a>)}<a href="https://www.linkedin.com/in/gabrielperina/" target="_blank" rel="noreferrer">LinkedIn</a></nav>
        <p>{t.footer.note}</p>
      </div>
    </footer>
  );
}
