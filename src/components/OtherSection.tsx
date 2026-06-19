import { motion } from "motion/react";
import { ArrowUpRight, Music2 } from "lucide-react";
import { MUSIC } from "../data";
import { useLanguage } from "../i18n/LanguageContext";
import { MobileSectionSpoiler } from "./MobileSectionSpoiler";

export function OtherSection() {
  const { t } = useLanguage();

  return (
    <section
      id="music"
      className="max-md:py-0 md:py-8 px-4 sm:px-6 w-full bg-[#0F0F0F] md:border-t md:border-white/5 md:bg-gradient-to-b md:from-transparent md:to-white/[0.02] scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <MobileSectionSpoiler
          title={t.music.title}
          sectionId="music"
          preview={
            <span className="flex items-center gap-3 w-full">
              <img
                src={MUSIC.coverUrl}
                alt=""
                loading="lazy"
                className="w-11 h-11 rounded-lg object-cover border border-white/10 shrink-0"
              />
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-sm truncate text-white/90">{MUSIC.albumTitle}</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/40 truncate">
                  {MUSIC.artist}
                </span>
              </span>
              <span className="flex items-center gap-1 shrink-0">
                {MUSIC.platforms.slice(0, 4).map((platform) => (
                  <img
                    key={platform.id}
                    src={platform.iconUrl}
                    alt=""
                    loading="lazy"
                    className="w-5 h-5 object-contain opacity-80"
                  />
                ))}
              </span>
            </span>
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-3 sm:gap-4 lg:gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl glass-card glass-card-hover p-4 sm:p-5 flex flex-col gap-4 w-full min-w-0 max-md:items-center"
            >
              <a
                href={MUSIC.albumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full max-w-[240px] mx-auto"
              >
                <div className="rounded-xl overflow-hidden bg-[#0F0F0F] p-2.5 border border-white/[0.06]">
                  <img
                    src={MUSIC.coverUrl}
                    alt={MUSIC.albumTitle}
                    loading="lazy"
                    className="w-full max-h-[200px] sm:max-h-[260px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </a>

              <div className="flex flex-col gap-3 w-full max-md:items-center max-md:text-center max-md:max-w-[320px] max-md:mx-auto">
                <div className="max-md:w-full">
                  <a
                    href={MUSIC.artistLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 hover:text-amber-400 transition-colors w-fit max-md:mx-auto inline-block"
                  >
                    {MUSIC.artist}
                  </a>
                  <h3 className="text-lg sm:text-xl tracking-tight mb-0.5">{MUSIC.albumTitle}</h3>
                  <p className="text-xs text-white/50">{t.music.albumType}</p>
                </div>

                <a
                  href={MUSIC.bandlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rounded-xl glass-inset border border-amber-400/30 text-[11px] uppercase tracking-widest text-amber-400 hover:border-amber-400/50 transition-colors"
                >
                  {t.music.listenAll}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="w-full">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 max-md:text-center">
                    {t.music.alsoOn}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {MUSIC.platforms.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl glass-inset text-[11px] text-white/75 hover:border-amber-400/40 hover:text-amber-400 transition-colors"
                      >
                        <img
                          src={platform.iconUrl}
                          alt=""
                          loading="lazy"
                          className="w-5 h-5 shrink-0 object-contain"
                        />
                        <span>
                          {t.music.platforms[platform.id as keyof typeof t.music.platforms]}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={MUSIC.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/70 hover:text-amber-400 transition-colors w-fit border-b border-white/20 hover:border-current pb-0.5 max-md:mx-auto"
                >
                  {t.music.artistProfile}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            <div className="hidden md:flex flex-col gap-3 min-w-0">
              {MUSIC.tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                  className="music-track-card rounded-2xl glass-card glass-card-hover overflow-hidden"
                >
                  <div className="flex flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-4 sm:py-2 border-b border-white/5">
                    <div className="flex items-center gap-2 min-w-0">
                      <Music2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm truncate">{track.title}</p>
                        <a
                          href={MUSIC.artistLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-widest text-white/40 hover:text-amber-400 transition-colors"
                        >
                          {MUSIC.artist}
                        </a>
                      </div>
                    </div>
                    <a
                      href={track.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/60 hover:text-amber-400 transition-colors"
                    >
                      {t.music.listen}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="music-player-embed bg-[#0F0F0F] overflow-hidden">
                    <iframe
                      title={`${track.title} — ${MUSIC.artist}`}
                      frameBorder="0"
                      allow="autoplay"
                      src={`https://music.yandex.ru/iframe/#track/${track.id}/${MUSIC.yandexAlbumId}/black`}
                      className="w-full h-[116px] block border-0 bg-[#0F0F0F]"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MobileSectionSpoiler>
      </div>
    </section>
  );
}
