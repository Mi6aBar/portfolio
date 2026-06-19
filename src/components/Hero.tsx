import type { CSSProperties } from "react";
import { motion } from "motion/react";
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

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative z-0 overflow-x-hidden bg-[#0F0F0F]">
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20 hidden md:block">
        <LanguageToggle />
      </div>

      <div className="relative flex flex-col md:flex-row md:min-h-[400px]">
        <div className="relative h-48 sm:h-56 md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-[46%] lg:w-[38%] md:max-w-[560px] shrink-0">
          <picture>
            <source srcSet="./avatar.webp" type="image/webp" />
            <img
              src="./avatar.jpg"
              alt="mishabar"
              className="h-full w-full object-cover object-[center_18%] md:object-left hero-photo-fade"
            />
          </picture>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full md:ml-[38%] lg:ml-[36%] flex flex-1 flex-col justify-center px-4 sm:px-6 md:pr-12 md:pl-6 py-6 sm:py-8 md:py-10 text-left"
        >
          <h1 className="hero-nickname text-[1.65rem] leading-none sm:text-4xl md:text-5xl font-sans tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.35em] lowercase not-italic mb-2 max-w-full">
            {"mishabar".split("").map((letter, index, letters) => {
              const progress = letters.length <= 1 ? 0 : index / (letters.length - 1);

              return (
                <span
                  key={`${letter}-${index}`}
                  className="hero-nickname-letter inline-block"
                  style={{ "--letter-progress": progress } as CSSProperties}
                >
                  {letter}
                </span>
              );
            })}
          </h1>
          <p className="text-[10px] sm:text-[11px] text-white/45 uppercase tracking-[0.18em] sm:tracking-widest mb-2 sm:mb-3">
            {t.hero.role}
          </p>
          <p className="text-[13px] sm:text-base text-white/60 mb-4 sm:mb-5 leading-relaxed max-w-lg">
            {t.hero.bio}
          </p>
          <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 w-full max-w-xl">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.telegram}
              className="hero-social-btn hero-social-btn--telegram text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em]"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner hero-social-btn__inner--icon">
                <TelegramIcon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{t.hero.telegram}</span>
              </span>
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.instagram}
              className="hero-social-btn hero-social-btn--instagram text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em]"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner hero-social-btn__inner--icon">
                <Instagram className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{t.hero.instagram}</span>
              </span>
            </a>
            <a
              href={EMAIL_LINK}
              aria-label="Email"
              className="hero-social-btn hero-social-btn--email text-[10px] sm:text-[11px] tracking-normal normal-case"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner hero-social-btn__inner--icon">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">mishabar1997@gmail.com</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="hero-bottom-feather pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-36 z-[1]"
        aria-hidden="true"
      />
    </section>
  );
}
