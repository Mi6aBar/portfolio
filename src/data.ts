export type ImageAspect = "portrait" | "landscape" | "square";

export type ProjectPlatform = "channel" | "bot" | "android" | "windows";

export type ProjectSocialLink = {
  name: "Instagram" | "TikTok" | "Chat";
  link: string;
};

export type Project = {
  id: string;
  title: string;
  platform: ProjectPlatform;
  link: string;
  iconUrl?: string;
  images: string[];
  imageAspect?: ImageAspect;
  imageAspects?: ImageAspect[];
  socialLinks?: ProjectSocialLink[];
};

export type MusicTrack = {
  id: string;
  title: string;
  link: string;
};

export const INSTAGRAM_LINK = "https://instagram.com/mishabar_";
export const TELEGRAM_LINK = "https://t.me/mishabar";
export const EMAIL_LINK = "mailto:mishabar1997@gmail.com";
export const SEA_APKS_CHAT_LINK = "https://t.me/sea_apks_chat";
export const RUSTORE_ICON = "./icons/rustore-icon.svg";
export const GITHUB_ICON = "./icons/github-icon.svg";

export const TELEGRAM_PROJECTS: Project[] = [
  {
    id: "sea_apks",
    title: "SEA APPS",
    platform: "channel",
    link: "https://t.me/sea_apks",
    socialLinks: [
      {
        name: "Chat",
        link: SEA_APKS_CHAT_LINK,
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/sea_apks?igsh=ZWJqYXY5NzlvNWl3",
      },
      {
        name: "TikTok",
        link: "https://www.tiktok.com/@sea_apps?_r=1&_t=ZS-97KEXF3Co0Q",
      },
    ],
    images: ["./images/telegram/sea_apks-2026.jpg"],
  },
  {
    id: "sea_apps_other",
    title: "SEA APPS OTHER",
    platform: "channel",
    link: "https://t.me/sea_apps_other",
    images: ["./images/telegram/sea_apps_other.jpg"],
  },
  {
    id: "sudovodgmu",
    title: "СУДОВОД ГМУ",
    platform: "channel",
    link: "https://t.me/sudovodgmu",
    images: ["./images/telegram/sudovodgmu.jpg"],
  },
  {
    id: "navassist",
    title: "NAV ASSISTANT",
    platform: "bot",
    link: "https://t.me/navasist_bot",
    images: ["./images/telegram/navassist.jpg"],
  },
  {
    id: "impafinder_bot",
    title: "IMPA FINDER",
    platform: "bot",
    link: "https://t.me/impafinder_bot",
    images: ["./images/telegram/impafinder_bot.jpg"],
  },
  {
    id: "usd_rub",
    title: "CB RATE",
    platform: "bot",
    link: "https://t.me/cbusdrub_bot",
    images: ["./images/telegram/cb_rate.jpg"],
  },
];

export const ANDROID_APPS: Project[] = [
  {
    id: "impacatalogue",
    title: "IMPA Finder",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.andstud.impacatalogue",
    iconUrl: "./icons/apps/impacatalogue.png",
    images: [
      "./images/screenshots/impacatalogue/01.jpg",
      "./images/screenshots/impacatalogue/02.jpg",
      "./images/screenshots/impacatalogue/03.jpg",
      "./images/screenshots/impacatalogue/04.jpg",
    ],
  },
  {
    id: "sire",
    title: "SIRE 2.0",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.sire",
    iconUrl: "./icons/apps/sire.png",
    images: [
      "./images/screenshots/sire/01.jpg",
      "./images/screenshots/sire/02.jpg",
      "./images/screenshots/sire/03.jpg",
      "./images/screenshots/sire/04.jpg",
    ],
  },
  {
    id: "seacalculator",
    title: "SEA Calculator",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.seacalculator",
    iconUrl: "./icons/apps/seacalculator.png",
    images: [
      "./images/screenshots/seacalculator/01.jpg",
      "./images/screenshots/seacalculator/02.jpg",
      "./images/screenshots/seacalculator/03.jpg",
      "./images/screenshots/seacalculator/04.jpg",
    ],
  },
  {
    id: "locodefinder",
    title: "LOCODE Finder",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.locodefinder",
    iconUrl: "./icons/apps/locodefinder.png",
    images: [
      "./images/screenshots/locodefinder/01.jpg",
      "./images/screenshots/locodefinder/02.jpg",
      "./images/screenshots/locodefinder/03.jpg",
      "./images/screenshots/locodefinder/04.jpg",
    ],
  },
  {
    id: "converter",
    title: "Конвертер",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.andstud.converter",
    iconUrl: "./icons/apps/converter.jpg",
    images: [
      "./images/screenshots/converter/01.jpg",
      "./images/screenshots/converter/02.jpg",
      "./images/screenshots/converter/03.jpg",
      "./images/screenshots/converter/04.jpg",
    ],
  },
  {
    id: "dreams",
    title: "DreamScape",
    platform: "android",
    link: "https://www.rustore.ru/catalog/app/com.mishabar.dreams",
    iconUrl: "./icons/apps/dreams.png",
    imageAspect: "landscape",
    images: [
      "./images/screenshots/dreams/01.png",
      "./images/screenshots/dreams/02.png",
      "./images/screenshots/dreams/03.png",
      "./images/screenshots/dreams/04.png",
    ],
  },
];

export const WINDOWS_PROGRAMS: Project[] = [
  {
    id: "tp_chart_master",
    title: "T&P Chart Master",
    platform: "windows",
    link: "https://github.com/Mi6aBar/tp-transas-user-chart/releases",
    iconUrl: "./icons/programs/tp-chart-master.png",
    imageAspects: ["square", "landscape"],
    images: [
      "./icons/programs/tp-chart-master.png",
      "./images/screenshots/tp-chart-master/01.jpg",
    ],
  },
];

export type MusicPlatform = {
  id: string;
  link: string;
  iconUrl: string;
};

export const MUSIC = {
  artist: "BaraBus",
  artistLink: "https://music.yandex.ru/artist/26154814",
  albumTitle: "Bass inside",
  albumLink: "https://music.yandex.ru/album/42625982",
  yandexAlbumId: "42625982",
  bandlink: "https://band.link/Yt6Eb",
  coverUrl: "./images/music/bass-inside-cover.jpg",
  platforms: [
    {
      id: "yandex",
      link: "https://music.yandex.ru/album/42625982",
      iconUrl: "./icons/music/yandex.svg",
    },
    {
      id: "spotify",
      link: "https://open.spotify.com/album/7fRPHZTJpDZ5pA1748iFGC",
      iconUrl: "./icons/music/spotify.svg",
    },
    {
      id: "apple",
      link: "https://music.apple.com/us/album/6781270850",
      iconUrl: "./icons/music/apple.svg",
    },
    {
      id: "vk",
      link: "https://music.vk.com/link/lAgHd",
      iconUrl: "./icons/music/vk.svg",
    },
    {
      id: "kion",
      link: "https://music.mts.ru/album/42625982",
      iconUrl: "./icons/music/kion.svg",
    },
    {
      id: "zvuk",
      link: "https://zvuk.com/release/51076323",
      iconUrl: "./icons/music/zvuk.svg",
    },
    {
      id: "deezer",
      link: "https://www.deezer.com/album/1007497561",
      iconUrl: "./icons/music/deezer.svg",
    },
  ] satisfies MusicPlatform[],
  tracks: [
    {
      id: "152637233",
      title: "Bass Inside",
      link: "https://music.yandex.ru/album/42625982/track/152637233",
    },
    {
      id: "152637236",
      title: "Collapse",
      link: "https://music.yandex.ru/album/42625982/track/152637236",
    },
    {
      id: "152637238",
      title: "System Failure",
      link: "https://music.yandex.ru/album/42625982/track/152637238",
    },
  ] satisfies MusicTrack[],
};
