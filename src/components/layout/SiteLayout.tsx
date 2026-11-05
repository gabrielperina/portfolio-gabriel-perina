import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return <><a className="skip-link" href="#conteudo">{t.skipLink}</a><Navbar /><main id="conteudo">{children}</main><Footer /></>;
}
