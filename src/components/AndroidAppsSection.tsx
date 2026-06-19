import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ANDROID_APPS, Project, RUSTORE_ICON } from "../data";
import { useLanguage, useProjectDescription } from "../i18n/LanguageContext";
import { AppExpandedPanel } from "./AppExpandedPanel";
import { MobileSectionSpoiler } from "./MobileSectionSpoiler";

const linkHoverColors = [
  "hover:text-orange-500",
  "hover:text-blue-400",
  "hover:text-rose-500",
  "hover:text-emerald-500",
  "hover:text-purple-500",
  "hover:text-amber-400",
];

function AppCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const description = useProjectDescription(project.id);
  const linkHover = linkHoverColors[index % linkHoverColors.length];
  const iconSrc = project.iconUrl ?? project.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut", delay: index * 0.05 },
        y: { duration: 0.5, ease: "easeOut", delay: index * 0.05 },
      }}
      className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl glass-card glass-card-hover w-full h-full"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl mb-4 shrink-0">
        <img
          src={iconSrc}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg sm:text-xl tracking-tighter mb-2 text-white">
        {project.title.toUpperCase()}
      </h3>

      <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-4 flex-1">
        {description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/70 ${linkHover} transition-colors border-b border-white/20 pb-1 hover:border-current`}
      >
        <img
          src={RUSTORE_ICON}
          alt=""
          className="w-4 h-4 shrink-0 object-contain rounded-[5px]"
        />
        {t.apps.rustore}
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
      </a>
    </motion.div>
  );
}

export function AndroidAppsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="apps"
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 w-full bg-[#0F0F0F] md:border-b md:border-white/5 md:bg-gradient-to-b md:from-white/[0.02] md:to-transparent scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <MobileSectionSpoiler
          title={t.apps.title}
          sectionId="apps"
          contentClassName="flex flex-col gap-3 md:gap-5"
        >
          <div className="md:hidden grid grid-cols-1 gap-3">
            {ANDROID_APPS.map((project, index) => (
              <AppCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-5">
            {ANDROID_APPS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
              >
                <AppExpandedPanel project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </MobileSectionSpoiler>
      </div>
    </section>
  );
}
