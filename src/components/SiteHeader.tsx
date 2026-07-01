import { useEffect, useState } from "react";
import { Instagram, Mail } from "lucide-react";
import { EMAIL_LINK, INSTAGRAM_LINK, TELEGRAM_LINK } from "../data";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const navClass =
  "text-[10px] uppercase tracking-widest text-white/45 hover:text-white transition-colors shrink-0 whitespace-nowrap";

const contactBaseClass =
  "inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/45 transition-colors shrink-0";

export function SiteHeader() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`site-header-bar hidden md:block fixed top-0 inset-x-0 z-40 glass-bar transition-transform duration-300 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="h-11 flex items-center justify-between gap-2 sm:gap-4">
          <a
            href="#top"
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/80 hover:text-orange-400 transition-colors shrink-0"
          >
            {t.header.home}
          </a>

          <nav className="flex items-center gap-3 lg:gap-4 min-w-0" aria-label="Sections">
            <a href="#telegram" className={navClass}>
              {t.header.nav.telegram}
            </a>
            <a href="#apps" className={navClass}>
              {t.header.nav.apps}
            </a>
            <a href="#programs" className={navClass}>
              {t.header.nav.programs}
            </a>
            <a href="#music" className={navClass}>
              {t.header.nav.music}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactBaseClass} hover:text-sky-400`}
              >
                <TelegramIcon className="w-3.5 h-3.5" />
                <span>{t.hero.telegram}</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactBaseClass} hover:text-pink-500`}
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{t.hero.instagram}</span>
              </a>
              <a href={EMAIL_LINK} className={`${contactBaseClass} hover:text-emerald-400`}>
                <Mail className="w-3.5 h-3.5" />
                <span>mail</span>
              </a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
