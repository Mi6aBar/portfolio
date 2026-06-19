import { useCallback, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/translations";

const LOCALES: Locale[] = ["ru", "en"];

function localeFromCenter(centerX: number, midpoint: number): Locale {
  return centerX < midpoint ? "ru" : "en";
}

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [thumbLeft, setThumbLeft] = useState<number | null>(null);

  const activeIndex = locale === "ru" ? 0 : 1;

  const getMetrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;

    const thumbWidth = (track.offsetWidth - 4) / 2;
    const minLeft = 2;
    const maxLeft = minLeft + thumbWidth;

    return {
      thumbWidth,
      minLeft,
      maxLeft,
      midpoint: track.offsetWidth / 2,
    };
  }, []);

  const clampThumbLeft = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      const metrics = getMetrics();
      if (!track || !metrics) return metrics?.minLeft ?? 2;

      const rect = track.getBoundingClientRect();
      return Math.max(
        metrics.minLeft,
        Math.min(clientX - rect.left - metrics.thumbWidth / 2, metrics.maxLeft),
      );
    },
    [getMetrics],
  );

  const applyDrag = useCallback(
    (clientX: number) => {
      const metrics = getMetrics();
      if (!metrics) return;

      const nextLeft = clampThumbLeft(clientX);
      setThumbLeft(nextLeft);

      const center = nextLeft + metrics.thumbWidth / 2;
      const nextLocale = localeFromCenter(center, metrics.midpoint);
      if (nextLocale !== locale) {
        setLocale(nextLocale);
      }
    },
    [clampThumbLeft, getMetrics, locale, setLocale],
  );

  const finishDrag = useCallback(() => {
    draggingRef.current = false;
    setDragging(false);
    setThumbLeft(null);
  }, []);

  const onTrackPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    setDragging(true);
    applyDrag(event.clientX);
  };

  const onTrackPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    applyDrag(event.clientX);
  };

  const onTrackPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    finishDrag();
  };

  const metrics = getMetrics();
  const thumbWidth = metrics?.thumbWidth;
  const restingLeft =
    activeIndex === 0 ? "2px" : metrics ? `${metrics.maxLeft}px` : "calc(50% + 2px)";

  return (
    <div
      ref={trackRef}
      onPointerDown={onTrackPointerDown}
      onPointerMove={onTrackPointerMove}
      onPointerUp={onTrackPointerUp}
      onPointerCancel={onTrackPointerUp}
      className="relative flex items-center rounded-full glass-toggle-track p-0.5 shrink-0 select-none touch-none cursor-grab active:cursor-grabbing"
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden="true"
        className={`language-toggle__thumb pointer-events-none absolute top-0.5 bottom-0.5 z-[1] rounded-full ${
          dragging ? "" : "transition-all duration-300 ease-out"
        }`}
        style={{
          width: thumbWidth ? `${thumbWidth}px` : "calc(50% - 4px)",
          left: dragging && thumbLeft !== null ? `${thumbLeft}px` : restingLeft,
        }}
      />

      {LOCALES.map((code) => {
        const active = locale === code;

        return (
          <button
            key={code}
            type="button"
            tabIndex={-1}
            aria-pressed={active}
            className={`language-toggle__label pointer-events-none relative z-10 min-w-[2rem] px-2 py-1 text-[10px] uppercase tracking-widest transition-colors ${
              active ? "language-toggle__label--active" : "text-white/45"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
