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
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20">
        <LanguageToggle />
      </div>
      <div className="relative flex min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
        <div className="absolute inset-y-0 left-0 w-[58%] sm:w-[46%] md:w-[42%] lg:w-[38%] max-w-[560px]">
          <img
            src="./avatar.png"
            alt="mishabar"
            className="h-full w-full object-cover object-left hero-photo-fade"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 ml-[42%] sm:ml-[38%] md:ml-[36%] flex flex-1 flex-col justify-center py-8 sm:py-10 pr-4 sm:pr-8 md:pr-12 pl-3 sm:pl-6 text-left"
        >
          <h1 className="hero-nickname text-3xl sm:text-4xl md:text-5xl font-sans tracking-[0.35em] lowercase not-italic mb-2 w-fit">
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
          <p className="text-[11px] text-white/45 uppercase tracking-widest mb-3">
            {t.hero.role}
          </p>
          <p className="text-sm sm:text-base text-white/60 mb-5 leading-relaxed max-w-lg">
            {t.hero.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn hero-social-btn--telegram text-[11px] uppercase tracking-[0.2em]"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner">
                <TelegramIcon className="w-3.5 h-3.5" />
                <span>{t.hero.telegram}</span>
              </span>
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn hero-social-btn--instagram text-[11px] uppercase tracking-[0.2em]"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner">
                <Instagram className="w-3.5 h-3.5" />
                <span>{t.hero.instagram}</span>
              </span>
            </a>
            <a
              href={EMAIL_LINK}
              className="hero-social-btn hero-social-btn--email text-[11px] tracking-normal normal-case"
            >
              <span className="hero-social-btn__glow" aria-hidden="true" />
              <span className="hero-social-btn__inner">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>mishabar1997@gmail.com</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="hero-bottom-feather pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-36 z-[1]"
        aria-hidden="true"
      />
    </section>
  );
}
