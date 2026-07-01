import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GITHUB_ICON, WINDOWS_PROGRAMS, type Project } from "../data";
import { useLanguage, useProjectDescription } from "../i18n/LanguageContext";
import { AppExpandedPanel } from "./AppExpandedPanel";
import { MobileSectionSpoiler } from "./MobileSectionSpoiler";

const linkHoverColors = [
  "hover:text-cyan-400",
  "hover:text-violet-400",
  "hover:text-lime-400",
];

function ProgramCard({ project, index }: { project: Project; index: number }) {
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

      <span className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
        {t.programs.platform}
      </span>

      <h3 className="text-lg sm:text-xl tracking-tighter mb-2 text-white">
        {project.title.toUpperCase()}
      </h3>

      <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-4 flex-1">
        {description}
      </p>

      <div className="w-full mb-4 rounded-xl overflow-hidden border border-white/10 bg-black/20 aspect-[5/4] max-w-md mx-auto">
        <img
          src={project.images[1] ?? project.images[0]}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain object-top"
        />
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/70 ${linkHover} transition-colors border-b border-white/20 pb-1 hover:border-current`}
      >
        <img
          src={GITHUB_ICON}
          alt=""
          className="w-4 h-4 shrink-0 object-contain opacity-70"
        />
        {t.programs.openGithub}
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
      </a>
    </motion.div>
  );
}

export function WindowsProgramsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="programs"
      className="max-md:py-0 md:py-12 px-4 sm:px-6 w-full bg-[#0F0F0F] max-md:border-b max-md:border-white/5 md:border-b md:border-white/5 md:bg-gradient-to-b md:from-transparent md:to-white/[0.02] scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <MobileSectionSpoiler
          title={t.programs.title}
          sectionId="programs"
          contentClassName="flex flex-col gap-3 md:gap-5"
          preview={
            <span className="flex items-center gap-2 flex-wrap">
              {WINDOWS_PROGRAMS.map((project) => (
                <img
                  key={project.id}
                  src={project.iconUrl ?? project.images[0]}
                  alt=""
                  loading="lazy"
                  className="w-9 h-9 rounded-xl object-cover border border-white/10 shrink-0"
                />
              ))}
            </span>
          }
        >
          <div className="md:hidden grid grid-cols-1 gap-3">
            {WINDOWS_PROGRAMS.map((project, index) => (
              <ProgramCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-5">
            {WINDOWS_PROGRAMS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
              >
                <AppExpandedPanel
                  project={project}
                  index={index}
                  linkIcon={GITHUB_ICON}
                  linkLabel={t.programs.openGithub}
                />
              </motion.div>
            ))}
          </div>
        </MobileSectionSpoiler>
      </div>
    </section>
  );
}
