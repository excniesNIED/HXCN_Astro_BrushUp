export type CategoryMapping = {
  path?: string;
  name?: string;
};

// Key can be the folder name (recommended) or the current category path segment.
// If no key matches, we also try matching by `path` value.
export const CATEGORY_MAP: Record<string, CategoryMapping> = {
  "蓝桥杯": { path: "lanqiao", name: "蓝桥杯" },
  "大唐杯": { path: "dtcup", name: "大唐杯" }, // 不写 name 就展示文件夹名
};
