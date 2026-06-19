import { useEffect, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type MobileSectionSpoilerProps = {
  title: string;
  sectionId: string;
  children: ReactNode;
  /** Extra classes on the desktop title block */
  titleClassName?: string;
  /** Extra classes on the collapsible content wrapper */
  contentClassName?: string;
};

export function MobileSectionSpoiler({
  title,
  sectionId,
  children,
  titleClassName = "mb-5 sm:mb-6",
  contentClassName = "",
}: MobileSectionSpoilerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === `#${sectionId}`) {
        setOpen(true);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [sectionId]);

  return (
    <>
      <button
        type="button"
        className="md:hidden w-full flex items-center justify-between gap-3 py-2.5 text-left bg-[#0F0F0F] group"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={`${sectionId}-content`}
      >
        <h2 className="text-xl tracking-tighter">{title}</h2>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-white/40 group-hover:text-white/70 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`hidden md:block ${titleClassName}`}
      >
        <h2 className="text-xl sm:text-2xl tracking-tighter">{title}</h2>
      </motion.div>

      <div
        id={`${sectionId}-content`}
        className={`${open ? "block mt-2" : "hidden"} md:block md:mt-0 ${contentClassName}`}
      >
        {children}
      </div>
    </>
  );
}
