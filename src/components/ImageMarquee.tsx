import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { ImageAspect } from "../data";
import { ScreenshotLightbox } from "./ScreenshotLightbox";

interface ImageMarqueeProps {
  images: string[];
  direction: "left" | "right";
  index?: number;
  title?: string;
  aspect?: ImageAspect;
}

export function ImageMarquee({
  images,
  direction,
  index = 0,
  title,
  aspect = "portrait",
}: ImageMarqueeProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isPaused = hovered || pressed;

  const marqueeImages = [...images, ...images, ...images, ...images, ...images, ...images];
  const rotations = ["rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1"];
  const isLandscape = aspect === "landscape";

  const frameClass = isLandscape
    ? "w-[200px] sm:w-[240px] md:w-[300px] aspect-video"
    : "w-[130px] sm:w-[160px] md:w-[200px] h-[220px] sm:h-[250px] md:h-[280px]";

  const imageClass = isLandscape
    ? "w-full h-full object-cover rounded-md sm:rounded-lg"
    : "w-full h-full object-contain rounded-lg md:rounded-xl";

  const containerHeight = isLandscape
    ? "h-[130px] sm:h-[160px] md:h-[190px]"
    : "h-[230px] sm:h-[260px] md:h-[290px]";

  const trackClass = [
    "marquee-track flex gap-3 sm:gap-4 md:gap-5 absolute left-0",
    direction === "left" ? "marquee-track-left" : "marquee-track-right",
    isLandscape ? "marquee-track-landscape" : "",
    isPaused ? "marquee-track-paused" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex);
  };

  return (
    <>
      <div
        className={`marquee-container relative w-full ${containerHeight} flex items-center overflow-hidden touch-pan-y`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerCancel={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        onTouchCancel={() => setPressed(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10" />

        <div className={trackClass}>
          {marqueeImages.map((src, idx) => {
            const rotationClass = rotations[(idx + index) % rotations.length];
            const imageIndex = idx % images.length;

            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  openLightbox(imageIndex);
                }}
                className={`${frameClass} shrink-0 overflow-hidden ${rotationClass} flex flex-col transition-transform hover:z-20 hover:scale-[1.02] hover:rotate-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30`}
                aria-label={`Открыть скриншот ${imageIndex + 1}`}
              >
                <img
                  src={src}
                  alt={title ? `${title} screenshot` : "Project screenshot"}
                  loading="lazy"
                  className={`${imageClass} transition-all duration-300 pointer-events-none`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ScreenshotLightbox
            images={images}
            initialIndex={lightboxIndex}
            title={title}
            aspect={aspect}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
