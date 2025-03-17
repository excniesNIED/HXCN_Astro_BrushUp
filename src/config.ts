export const SITE = {
  website: "https://bu.cnies.org/", // replace this with your deployed domain
  author: "Churnie HXCN",
  profile: "https://hxcn.cnies.org/",
  desc: "萑澈的错题本",
  title: "BrushUP",
  ogImage: "https://gastigado.cnies.org/d/cover/8ff1b88f90de4620f718a.jpg?sign=LybqQcH9n66GJfwEaovM6BYHOEXdcP-cWjWLlxf8xPA=:0",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/excniesNIED/HXCN_Astro_BrushUp/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
