export type CategoryMapping = {
  path?: string;
  name?: string;
};

// Key can be the folder name (recommended) or the current category path segment.
// If no key matches, we also try matching by `path` value.
export const CATEGORY_MAP: Record<string, CategoryMapping> = {
  "蓝桥杯": { path: "lanqiao", name: "蓝桥杯" },
  "大唐杯": { path: "dtcup", name: "大唐杯" }, // 不写 name 就展示文件夹名
  "示例": { path: "example", name: "示例" },
  "Astro Paper": { path: "astro-paper", name: "AstroPaper" },
  "软件工程": { path: "se", name: "软件工程" },
  "机器人学": { path: "robot", name: "机器人学" },
  "中学信息技术教学论": { path: "it-teaching-theory", name: "中学信息技术教学论" },
  "睿抗CAIP大数据应用开发赛项": { path: "ra-caip-data", name: "睿抗CAIP大数据应用开发赛项" },
};
