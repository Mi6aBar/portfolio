import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function ScrollProgress() {
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, {
    stiffness: 140,
    damping: 28,
    mass: 0.15,
  });

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.set(scrollable > 0 ? scrollTop / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [progress]);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[100] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-white/[0.06]" />
      <motion.div
        className="scroll-progress-bar relative h-full origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
