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
  imageAspects?: ImageAspect[];
}

function frameForAspect(aspect: ImageAspect) {
  if (aspect === "square") {
    return {
      frame: "w-[104px] sm:w-[136px] md:w-[168px] aspect-square",
      image: "w-full h-full object-contain rounded-lg md:rounded-xl bg-black/25 p-1.5 sm:p-2",
    };
  }

  if (aspect === "landscape") {
    return {
      frame: "w-[210px] sm:w-[290px] md:w-[360px] aspect-[5/4]",
      image: "w-full h-full object-contain object-top rounded-md sm:rounded-lg bg-black/25",
    };
  }

  return {
    frame: "w-[108px] sm:w-[160px] md:w-[200px] h-[190px] sm:h-[250px] md:h-[280px]",
    image: "w-full h-full object-contain rounded-lg md:rounded-xl",
  };
}

export function ImageMarquee({
  images,
  direction,
  index = 0,
  title,
  aspect = "portrait",
  imageAspects,
}: ImageMarqueeProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isPaused = hovered || pressed;

  const resolvedAspects = images.map((_, imageIndex) => imageAspects?.[imageIndex] ?? aspect);
  const isMixed = imageAspects !== undefined && imageAspects.length > 0;
  const isLandscapeTrack = resolvedAspects.some((item) => item === "landscape");

  const marqueeImages = [...images, ...images, ...images, ...images, ...images, ...images];
  const rotations = ["rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1"];

  const containerHeight = isMixed
    ? "h-[220px] sm:h-[270px] md:h-[300px]"
    : aspect === "landscape"
      ? "h-[110px] sm:h-[160px] md:h-[190px]"
      : "h-[200px] sm:h-[260px] md:h-[290px]";

  const trackClass = [
    "marquee-track flex items-center gap-3 sm:gap-4 md:gap-5 absolute left-0",
    direction === "left" ? "marquee-track-left" : "marquee-track-right",
    isLandscapeTrack ? "marquee-track-landscape" : "",
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
            const itemAspect = resolvedAspects[imageIndex];
            const { frame, image } = frameForAspect(itemAspect);

            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  openLightbox(imageIndex);
                }}
                className={`${frame} shrink-0 overflow-hidden border border-white/10 ${rotationClass} flex flex-col transition-transform hover:z-20 hover:scale-[1.02] hover:rotate-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30`}
                aria-label={`Открыть скриншот ${imageIndex + 1}`}
              >
                <img
                  src={src}
                  alt={title ? `${title} screenshot` : "Project screenshot"}
                  loading="lazy"
                  className={`${image} transition-all duration-300 pointer-events-none`}
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
            aspect={resolvedAspects[lightboxIndex] ?? aspect}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
