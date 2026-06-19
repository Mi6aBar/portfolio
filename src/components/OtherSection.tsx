import { motion } from "motion/react";
import { ArrowUpRight, Music2 } from "lucide-react";
import { MUSIC } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export function OtherSection() {
  const { t } = useLanguage();

  return (
    <section
      id="music"
      className="py-6 sm:py-8 px-4 sm:px-6 w-full border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] scroll-mt-11"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 sm:mb-6"
        >
          <span className="text-[10px] uppercase tracking-widest text-amber-400">
            {t.music.sectionLabel}
          </span>
          <h2 className="text-xl sm:text-2xl tracking-tighter mt-1">{t.music.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,260px)_1fr] gap-4 lg:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-xl glass-card overflow-hidden"
          >
            <a
              href={MUSIC.albumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-2 sm:p-3 glass-inset border-b border-white/5"
            >
              <div className="rounded-lg overflow-hidden bg-[#111] flex items-center justify-center">
                <img
                  src={MUSIC.coverUrl}
                  alt={MUSIC.albumTitle}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </a>

            <div className="p-3 sm:p-4 flex flex-col">
              <a
                href={MUSIC.artistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 hover:text-amber-400 transition-colors w-fit"
              >
                {MUSIC.artist}
              </a>
              <h3 className="text-lg sm:text-xl tracking-tight mb-0.5">{MUSIC.albumTitle}</h3>
              <p className="text-xs text-white/50 mb-4">{t.music.albumType}</p>

              <a
                href={MUSIC.bandlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2.5 mb-4 rounded-lg glass-card border-amber-400/30 text-[11px] uppercase tracking-widest text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                {t.music.listenAll}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                {t.music.alsoOn}
              </p>
              <div className="flex flex-col gap-1.5 mb-4">
                {MUSIC.platforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg glass-inset text-[11px] text-white/75 hover:border-amber-400/40 hover:text-amber-400 transition-colors"
                  >
                    <img
                      src={platform.iconUrl}
                      alt=""
                      loading="lazy"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <span>{t.music.platforms[platform.id as keyof typeof t.music.platforms]}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={MUSIC.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/70 hover:text-amber-400 transition-colors w-fit border-b border-white/20 hover:border-current pb-0.5"
                >
                  {t.music.artistProfile}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {MUSIC.tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-xl glass-card overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 border-b border-white/5">
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
                <iframe
                  title={`${track.title} — ${MUSIC.artist}`}
                  frameBorder="0"
                  allow="autoplay"
                  src={`https://music.yandex.ru/iframe/#track/${track.id}/${MUSIC.yandexAlbumId}/black`}
                  className="w-full h-[104px] sm:h-[120px] bg-[#0F0F0F]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
