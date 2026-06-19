import { motion } from "motion/react";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { TELEGRAM_PROJECTS, type ProjectPlatform } from "../data";
import { useLanguage, useProjectDescription } from "../i18n/LanguageContext";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.07 6.34 6.34 0 0 0 9.34 21.4a6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 4.91 1.59V7.01a4.85 4.85 0 0 1-1.01-.32z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") return <Instagram className="w-3.5 h-3.5" />;
  if (name === "TikTok") return <TikTokIcon className="w-3.5 h-3.5" />;
  if (name === "Chat") return <MessageCircle className="w-3.5 h-3.5" />;
  return null;
}

function socialLinkClass(name: string) {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[10px] uppercase tracking-wider text-white/60 transition-colors";

  if (name === "Instagram") {
    return `${base} hover:border-pink-500 hover:text-pink-500`;
  }

  if (name === "TikTok") {
    return `${base} hover:border-[#25F4EE] hover:text-[#25F4EE]`;
  }

  if (name === "Chat") {
    return `${base} hover:border-sky-400 hover:text-sky-400`;
  }

  return `${base} hover:text-white hover:border-white/25`;
}

function platformLabel(platform: ProjectPlatform, t: ReturnType<typeof useLanguage>["t"]) {
  return platform === "bot" ? t.telegram.platforms.bot : t.telegram.platforms.channel;
}

function TelegramCard({
  project,
  index,
}: {
  project: (typeof TELEGRAM_PROJECTS)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const description = useProjectDescription(project.id);

  return (
    <motion.div
      role="link"
      tabIndex={0}
      onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.open(project.link, "_blank", "noopener,noreferrer");
        }
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut", delay: index * 0.06 },
        y: { duration: 0.5, ease: "easeOut", delay: index * 0.06 },
        scale: { type: "spring", stiffness: 380, damping: 22 },
      }}
      className="group relative z-0 hover:z-30 flex flex-col items-center text-center p-5 sm:p-6 md:p-7 rounded-2xl glass-card glass-card-hover hover:border-sky-400/40 transition-colors h-full will-change-transform cursor-pointer"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-sky-400/50 transition-colors shadow-xl mb-4 sm:mb-5 shrink-0">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
        {platformLabel(project.platform, t)}
      </span>
      <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter mb-2 sm:mb-3">
        {project.title}
      </h3>
      <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-5 sm:mb-6 flex-1">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-white/70 group-hover:text-sky-400 transition-colors border-b border-white/20 group-hover:border-current pb-1">
        <TelegramIcon className="w-4 h-4 shrink-0" />
        {t.telegram.open}
        <ArrowUpRight className="w-4 h-4 shrink-0" />
      </span>

      {project.socialLinks && project.socialLinks.length > 0 && (
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {project.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass(social.name)}
            >
              <SocialIcon name={social.name} />
              {t.telegram.social[social.name]}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function TelegramSection() {
  return (
    <section
      id="telegram"
      className="relative z-10 overflow-visible py-8 sm:py-10 md:py-12 px-4 sm:px-6 w-full -mt-16 sm:-mt-20 md:-mt-24 pt-16 sm:pt-20 md:pt-24 border-b border-white/5 scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 overflow-visible">
          {TELEGRAM_PROJECTS.map((project, index) => (
            <TelegramCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
