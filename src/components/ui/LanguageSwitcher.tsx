import { languages } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-switcher" role="group" aria-label={t.nav.languageLabel}>
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          lang={item.htmlLang}
          className={language === item.code ? "is-active" : undefined}
          aria-pressed={language === item.code}
          title={item.name}
          onClick={() => setLanguage(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
