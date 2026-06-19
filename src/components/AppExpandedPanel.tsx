import { ArrowUpRight } from "lucide-react";
import { Project, RUSTORE_ICON } from "../data";
import { useLanguage, useProjectDescription } from "../i18n/LanguageContext";
import { ImageMarquee } from "./ImageMarquee";

interface AppExpandedPanelProps {
  project: Project;
  index: number;
}

const linkHoverColors = [
  "hover:text-orange-500",
  "hover:text-blue-400",
  "hover:text-rose-500",
  "hover:text-emerald-500",
  "hover:text-purple-500",
  "hover:text-amber-400",
];

export function AppExpandedPanel({ project, index }: AppExpandedPanelProps) {
  const { t } = useLanguage();
  const description = useProjectDescription(project.id);
  const direction = index % 2 === 0 ? "left" : "right";
  const linkHover = linkHoverColors[index % linkHoverColors.length];
  const iconSrc = project.iconUrl ?? project.images[0];

  return (
    <div className="mt-3 pt-1 lg:pt-2">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
        <div className="flex gap-4 items-start shrink-0 lg:w-[220px] lg:flex-col lg:gap-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 md:border-white/10 shrink-0">
            <img
              src={iconSrc}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg tracking-tighter mb-2 text-white">
              {project.title.toUpperCase()}
            </h3>
            <p className="text-sm text-white/65 leading-snug mb-3">{description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/70 ${linkHover} transition-colors w-fit border-b border-white/20 pb-0.5 hover:border-current`}
            >
              <img
                src={RUSTORE_ICON}
                alt=""
                className="w-5 h-5 shrink-0 object-contain rounded-[6px]"
              />
              <span>{t.apps.openRustore}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full">
          <ImageMarquee
            images={project.images}
            direction={direction}
            index={index}
            title={project.title}
            aspect={project.imageAspect ?? "portrait"}
          />
        </div>
      </div>
    </div>
  );
}
