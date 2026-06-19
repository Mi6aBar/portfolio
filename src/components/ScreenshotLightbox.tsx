import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ImageAspect } from "../data";

interface ScreenshotLightboxProps {
  images: string[];
  initialIndex: number;
  title?: string;
  aspect?: ImageAspect;
  onClose: () => void;
}

export function ScreenshotLightbox({
  images,
  initialIndex,
  title,
  aspect = "portrait",
  onClose,
}: ScreenshotLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const isLandscape = aspect === "landscape";

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, onClose]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta > 0) goPrev();
      else goNext();
    }

    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col bg-[#050505]/96 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Скриншоты ${title}` : "Скриншоты"}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="min-w-0">
          {title && (
            <p className="text-[10px] uppercase tracking-widest text-white/40 truncate">
              {title}
            </p>
          )}
          <p className="text-sm text-white/70">
            {index + 1} / {images.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/25 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div
        className="relative flex-1 flex items-center justify-center px-3 sm:px-10 pb-6 min-h-0"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(event) => event.stopPropagation()}
      >
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 sm:left-4 z-10 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-black/40 text-white/80 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Предыдущий скриншот"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 sm:right-4 z-10 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-black/40 text-white/80 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Следующий скриншот"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={title ? `${title} screenshot ${index + 1}` : `Screenshot ${index + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`max-h-[calc(100vh-8rem)] w-auto max-w-full select-none ${
              isLandscape ? "object-contain" : "object-contain"
            }`}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div
          className="flex items-center justify-center gap-2 px-4 pb-5"
          onClick={(event) => event.stopPropagation()}
        >
          {images.map((src, dotIndex) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-1.5 rounded-full transition-all ${
                dotIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Скриншот ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
