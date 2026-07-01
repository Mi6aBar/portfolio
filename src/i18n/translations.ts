export type Locale = "ru" | "en";

export type LocalizedText = Record<Locale, string>;

export const translations = {
  ru: {
    meta: {
      title: "mishabar — портфолио",
      description:
        "Android-приложения, Telegram-боты и проекты mishabar — от морской сферы до повседневных задач",
    },
    header: {
      home: "mishabar",
      nav: {
        telegram: "Каналы и боты",
        apps: "Приложения",
        programs: "Программы",
        music: "Музыка",
      },
    },
    hero: {
      role: "разработчик-энтузиаст",
      bio: "Android-приложения, Windows-программы, Telegram-боты и скрипты — от морской сферы до повседневных задач",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    telegram: {
      title: "Каналы и боты",
      open: "Открыть",
      platforms: {
        channel: "Канал",
        bot: "Бот",
      },
      social: {
        Instagram: "Instagram",
        TikTok: "TikTok",
        Chat: "Чат",
      },
    },
    apps: {
      title: "Приложения",
      platform: "Android App",
      rustore: "RuStore",
      openRustore: "Открыть в RuStore",
      expand: "Скриншоты",
      collapse: "Свернуть",
    },
    programs: {
      title: "Программы",
      platform: "Windows",
      openGithub: "Скачать на GitHub",
    },
    music: {
      title: "Музыка",
      listenAll: "Слушать на всех площадках",
      alsoOn: "Доступно на:",
      artistProfile: "Профиль исполнителя",
      listen: "Слушать",
      albumType: "2026",
      platforms: {
        yandex: "Яндекс Музыка",
        spotify: "Spotify",
        apple: "Apple Music",
        vk: "VK Музыка",
        kion: "KION Музыка",
        zvuk: "Звук",
        deezer: "Deezer",
      },
    },
    footer: {
      rights: "Все права защищены.",
      pageViews: "Просмотры",
    },
    backToTop: "Наверх",
    projects: {
      sea_apks: {
        description:
          "Канал с собранием полезных ресурсов для моряков и не только.",
      },
      sea_apps_other: {
        description: "Хранилище с другими приложениями, найденными в сети.",
      },
      sudovodgmu: {
        description:
          "Сборник полезных учебных материалов за 5 лет обучения на судоводительском факультете ГМУ Ушакова. Лекции, пособия, курсачи, ответы на зачёты, экзамены и многое другое",
      },
      navassist: {
        description:
          "Бот для получения актуальных навигационных оповещений и обновлений в Telegram и по почте",
      },
      impafinder_bot: {
        description:
          "Бот для поиска товаров по названию или номеру IMPA — быстрый доступ к каталогу прямо в мессенджере",
      },
      usd_rub: {
        description:
          "Бот для получения официальных курсов иностранных валют к рублю РФ от Центрального банка",
      },
      impacatalogue: {
        description:
          "IMPA Finder — приложение для поиска и управления товарами из каталога IMPA. Более 50 000 позиций, умный поиск, корзина заказов и экспорт в Excel",
      },
      sire: {
        description:
          "SIRE 2.0 — это профессиональное мобильное приложение для специалистов морской отрасли. Оно предоставляет полный доступ к структуре SIRE 2.0 (Ship Inspection Report) с удобной навигацией, мощным поиском, системой избранного и заметок.",
      },
      seacalculator: {
        description:
          "Профессиональное мобильное приложение для морских навигационных расчетов, предназначенное для моряков, капитанов и судоводителей.",
      },
      locodefinder: {
        description:
          "LOCODE Finder — мобильное приложение для поиска портов по UN/LOCODE. Поиск по коду, названию порта и стране, работает офлайн",
      },
      converter: {
        description:
          "Быстрый конвертер величин: 22 категории измерений, мгновенный расчёт, русский и английский интерфейс (есть реклама)",
      },
      dreams: {
        description:
          "DreamScape — анализ снов с помощью ИИ, визуализация сновидений, дневник, галерея и музыка для сна (есть реклама и платный контент)",
      },
      tp_chart_master: {
        description:
          "Portable‑программа для Windows: сборка пользовательских ECDIS‑слоев из нотисов ADMIRALTY T&P через ADC. Для Transas, Furuno и JRC.",
      },
    },
  },
  en: {
    meta: {
      title: "mishabar — portfolio",
      description:
        "Android apps, Telegram bots and projects by mishabar — from maritime tools to everyday utilities",
    },
    header: {
      home: "mishabar",
      nav: {
        telegram: "Channels & bots",
        apps: "Apps",
        programs: "Programs",
        music: "Music",
      },
    },
    hero: {
      role: "developer enthusiast",
      bio: "Android apps, Windows programs, Telegram bots and scripts — from maritime tools to everyday tasks",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    telegram: {
      title: "Channels & bots",
      open: "Open",
      platforms: {
        channel: "Channel",
        bot: "Bot",
      },
      social: {
        Instagram: "Instagram",
        TikTok: "TikTok",
        Chat: "Chat",
      },
    },
    apps: {
      title: "Apps",
      platform: "Android App",
      rustore: "RuStore",
      openRustore: "Open in RuStore",
      expand: "Screenshots",
      collapse: "Collapse",
    },
    programs: {
      title: "Programs",
      platform: "Windows",
      openGithub: "Download on GitHub",
    },
    music: {
      title: "Music",
      listenAll: "Listen on all platforms",
      alsoOn: "Also available on",
      artistProfile: "Artist profile",
      listen: "Listen",
      albumType: "2026",
      platforms: {
        yandex: "Yandex Music",
        spotify: "Spotify",
        apple: "Apple Music",
        vk: "VK Music",
        kion: "KION Music",
        zvuk: "Zvuk",
        deezer: "Deezer",
      },
    },
    footer: {
      rights: "All rights reserved.",
      pageViews: "Page views",
    },
    backToTop: "Back to top",
    projects: {
      sea_apks: {
        description:
          "A channel with useful resources for seafarers and beyond.",
      },
      sea_apps_other: {
        description: "A vault of other apps found online.",
      },
      sudovodgmu: {
        description:
          "A collection of useful study materials from 5 years at the GMU Ushakov navigation faculty. Lectures, guides, coursework, exam prep and more",
      },
      navassist: {
        description:
          "Bot for receiving up-to-date navigation notices and updates in Telegram and by email",
      },
      impafinder_bot: {
        description:
          "Bot for searching products by IMPA name or number — quick catalog access right in the messenger",
      },
      usd_rub: {
        description:
          "Bot for official foreign exchange rates against the Russian ruble from the Central Bank",
      },
      impacatalogue: {
        description:
          "IMPA Finder — app for searching and managing products from the IMPA catalog. 50,000+ items, smart search, order cart and Excel export",
      },
      sire: {
        description:
          "SIRE 2.0 is a professional mobile app for maritime industry specialists. Full access to the SIRE 2.0 structure (Ship Inspection Report) with easy navigation, powerful search, favorites and notes.",
      },
      seacalculator: {
        description:
          "Professional mobile app for marine navigation calculations, designed for seafarers, captains and ship handlers.",
      },
      locodefinder: {
        description:
          "LOCODE Finder — mobile app for port search by UN/LOCODE. Search by code, port name and country, works offline",
      },
      converter: {
        description:
          "Fast unit converter: 22 measurement categories, instant calculation, Russian and English interface (contains ads)",
      },
      dreams: {
        description:
          "DreamScape — AI dream analysis, dream visualization, journal, gallery and sleep music (contains ads and paid content)",
      },
      tp_chart_master: {
        description:
          "Portable Windows app for building ECDIS user layers from ADMIRALTY T&P notices via ADC. For Transas, Furuno and JRC.",
      },
    },
  },
} as const;

export type TranslationKey = keyof (typeof translations)["ru"];
