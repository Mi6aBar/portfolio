import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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

function AppCard({
  project,
  index,
  onExpand,
}: {
  project: Project;
  index: number;
  onExpand: () => void;
}) {
  const { t } = useLanguage();
  const description = useProjectDescription(project.id);
  const linkHover = linkHoverColors[index % linkHoverColors.length];
  const iconSrc = project.iconUrl ?? project.images[0];

  return (
    <motion.button
      type="button"
      onClick={onExpand}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut", delay: index * 0.05 },
        y: { duration: 0.5, ease: "easeOut", delay: index * 0.05 },
        scale: { type: "spring", stiffness: 380, damping: 22 },
      }}
      aria-expanded={false}
      className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl glass-card glass-card-hover hover:border-white/25 transition-colors w-full h-full will-change-transform cursor-pointer"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-colors shadow-xl mb-4 shrink-0">
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

      <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-4 flex-1 line-clamp-3">
        {description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/70 ${linkHover} transition-colors border-b border-white/20 pb-1 hover:border-current mb-3`}
      >
        <img
          src={RUSTORE_ICON}
          alt=""
          className="w-4 h-4 shrink-0 object-contain rounded-[5px]"
        />
        {t.apps.rustore}
        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
      </a>

      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/35 group-hover:text-white/55 transition-colors">
        {t.apps.expand}
        <ChevronDown className="w-3.5 h-3.5" />
      </span>
    </motion.button>
  );
}

export function AndroidAppsSection() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevExpandedIdRef = useRef<string | null>(null);

  useEffect(() => {
    const wasExpanded = prevExpandedIdRef.current;
    prevExpandedIdRef.current = expandedId;

    if (expandedId) {
      const timeout = window.setTimeout(() => {
        panelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 180);

      return () => window.clearTimeout(timeout);
    }

    if (wasExpanded) {
      const timeout = window.setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);

      return () => window.clearTimeout(timeout);
    }
  }, [expandedId]);

  return (
    <section
      ref={sectionRef}
      id="apps"
      className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 w-full bg-[#0F0F0F] md:border-b md:border-white/5 md:bg-gradient-to-b md:from-white/[0.02] md:to-transparent scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <MobileSectionSpoiler
          title={t.apps.title}
          sectionId="apps"
          contentClassName="flex flex-col gap-3 sm:gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {ANDROID_APPS.map((project, index) => {
              const isExpanded = expandedId === project.id;

              return (
                <div
                  key={project.id}
                  className={
                    isExpanded ? "col-span-1 sm:col-span-2 lg:col-span-3" : undefined
                  }
                >
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.div
                        key={`${project.id}-card`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AppCard
                          project={project}
                          index={index}
                          onExpand={() => setExpandedId(project.id)}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        ref={panelRef}
                        key={`${project.id}-panel`}
                        className="app-expanded-panel"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <AppExpandedPanel
                          project={project}
                          index={index}
                          onCollapse={() => setExpandedId(null)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </MobileSectionSpoiler>
      </div>
    </section>
  );
}
