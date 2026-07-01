import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Project, RUSTORE_ICON } from "../data";
import { useLanguage, useProjectDescription } from "../i18n/LanguageContext";
import { ImageMarquee } from "./ImageMarquee";

interface AppExpandedPanelProps {
  project: Project;
  index: number;
  onCollapse?: () => void;
  linkIcon?: string;
  linkLabel?: string;
}

const linkHoverColors = [
  "hover:text-orange-500",
  "hover:text-blue-400",
  "hover:text-rose-500",
  "hover:text-emerald-500",
  "hover:text-purple-500",
  "hover:text-amber-400",
];

export function AppExpandedPanel({
  project,
  index,
  onCollapse,
  linkIcon = RUSTORE_ICON,
  linkLabel,
}: AppExpandedPanelProps) {
  const { t } = useLanguage();
  const description = useProjectDescription(project.id);
  const direction = index % 2 === 0 ? "left" : "right";
  const linkHover = linkHoverColors[index % linkHoverColors.length];
  const iconSrc = project.iconUrl ?? project.images[0];
  const actionLabel = linkLabel ?? t.apps.openRustore;

  return (
    <div className="rounded-2xl glass-card glass-card-hover p-4 sm:p-6 w-full">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
        <div className="flex gap-4 items-start shrink-0 lg:w-[240px] lg:flex-col lg:gap-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0">
            <img
              src={iconSrc}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl tracking-tighter mb-2 text-white">
              {project.title.toUpperCase()}
            </h3>
            <p className="text-xs sm:text-sm text-white/65 leading-snug mb-4">{description}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/70 ${linkHover} transition-colors border-b border-white/20 pb-0.5 hover:border-current`}
              >
                <img
                  src={linkIcon}
                  alt=""
                  className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 object-contain rounded-[5px]"
                />
                <span>{actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {onCollapse && (
                <button
                  type="button"
                  onClick={onCollapse}
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
                >
                  {t.apps.collapse}
                  <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full">
          <ImageMarquee
            images={project.images}
            direction={direction}
            index={index}
            title={project.title}
            aspect={project.imageAspect ?? "portrait"}
            imageAspects={project.imageAspects}
          />
        </div>
      </div>
    </div>
  );
}
