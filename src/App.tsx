import { Hero } from "./components/Hero";
import { AndroidAppsSection } from "./components/AndroidAppsSection";
import { WindowsProgramsSection } from "./components/WindowsProgramsSection";
import { OtherSection } from "./components/OtherSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { TelegramSection } from "./components/TelegramSection";
import { SiteHeader } from "./components/SiteHeader";
import { BackToTop } from "./components/BackToTop";
import { PageViews } from "./components/PageViews";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main
        id="top"
        className="min-h-screen bg-[#0F0F0F] text-white flex flex-col font-sans max-md:overflow-x-hidden md:overflow-x-visible scroll-smooth"
      >
        <Hero />
        <TelegramSection />
        <AndroidAppsSection />
        <WindowsProgramsSection />
        <OtherSection />

        <footer
          id="site-footer"
          className="mt-auto md:mt-0 md:border-t md:border-white/10 px-4 sm:px-6 py-3 flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 text-[10px] text-white/30 tracking-widest uppercase"
        >
          <p className="leading-snug">
            © {new Date().getFullYear()} MishaBar. {t.footer.rights}
          </p>
          <PageViews />
        </footer>
      </main>
      <BackToTop />
    </>
  );
}
