import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const SITE = "mishabar-portfolio";
const PATH = "/";
const API_BASE = "https://page-views-api.ratneshc.com/api/v1";

export function PageViews() {
  const { locale, t } = useLanguage();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams({ site: SITE, path: PATH });

    const load = async () => {
      try {
        await fetch(`${API_BASE}/track?${params}`, { keepalive: true });
        const response = await fetch(`${API_BASE}/views?${params}`);
        if (!response.ok) return;

        const data = (await response.json()) as { views?: number };
        if (typeof data.views === "number") {
          setViews(data.views);
        }
      } catch {
        // Counter is optional — fail silently.
      }
    };

    void load();
  }, []);

  const formatted =
    views === null ? "—" : views.toLocaleString(locale === "ru" ? "ru-RU" : "en-US");

  return (
    <p className="shrink-0 text-[10px] text-white/25 tracking-widest uppercase">
      {t.footer.pageViews}: {formatted}
    </p>
  );
}
