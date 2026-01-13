export const SITE = {

  website: "https://bu.cnies.org/", // replace this with your deployed domain
  author: "Churnie HXCN",
  profile: "https://hxcn.cnies.org/",
  desc: "萑澈的错题本",
  title: "BrushUP",
  ogImage: "https://gastigado.cnies.org/d/elements/hxcn_transparent_240.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,

  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/excniesNIED/HXCN_Astro_BrushUp/edit/main/src/content/blog",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
