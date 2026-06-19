import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const DEFAULT_BOTTOM = 20;
const FOOTER_GAP = 12;

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(DEFAULT_BOTTOM);

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 480);

      const footer = document.getElementById("site-footer");
      if (!footer) {
        setBottom(DEFAULT_BOTTOM);
        return;
      }

      const footerTop = footer.getBoundingClientRect().top;
      if (footerTop < window.innerHeight) {
        setBottom(window.innerHeight - footerTop + FOOTER_GAP);
      } else {
        setBottom(DEFAULT_BOTTOM);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.backToTop}
      style={{ bottom: `${bottom}px` }}
      className="fixed right-4 sm:right-6 z-40 inline-flex items-center gap-1.5 rounded-full glass-pill px-3 py-2 text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-[color,bottom] duration-200"
    >
      <ArrowUp className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{t.backToTop}</span>
    </button>
  );
}
