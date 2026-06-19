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

  return (
    <div className="rounded-2xl glass-card overflow-hidden">
      <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-white/5">
        <h2 className="text-xl sm:text-2xl md:text-3xl tracking-tighter mb-2 text-white">
          {project.title.toUpperCase()}
        </h2>
        <p className="text-sm text-white/65 leading-snug max-w-2xl mb-3">{description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest ${linkHover} transition-colors w-fit border-b border-white/20 pb-0.5 hover:border-current`}
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

      <div className="py-2 sm:py-3">
        <ImageMarquee
          images={project.images}
          direction={direction}
          index={index}
          title={project.title}
          aspect={project.imageAspect ?? "portrait"}
        />
      </div>
    </div>
  );
}
