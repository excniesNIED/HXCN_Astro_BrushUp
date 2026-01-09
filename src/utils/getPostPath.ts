import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";
import { CATEGORY_MAP } from "@/config/categoryMap";
import type { CategoryMapping } from "@/config/categoryMap";

export type CategoryInfo = {
  slug: string;
  name: string;
};

const fallbackSlug = (input: string) => {
  const trimmed = input.trim();
  if (!trimmed) return "";
  return trimmed.replace(/\s+/g, "-");
};

const normalizeSegmentSlug = (segment: string) => {
  return slugifyStr(segment) || fallbackSlug(segment);
};

const normalizeCategoryPath = (input: string) => {
  const trimmed = input.trim().replace(/^\/+|\/+$/g, "");
  const first = trimmed.split("/").filter(Boolean)[0] ?? "";
  return normalizeSegmentSlug(first);
};

const CATEGORY_MAP_BY_PATH: Map<string, CategoryMapping> = (() => {
  const map = new Map<string, CategoryMapping>();
  for (const mapping of Object.values(CATEGORY_MAP)) {
    const normalized = mapping.path ? normalizeCategoryPath(mapping.path) : "";
    if (!normalized) continue;
    map.set(normalized, mapping);
  }
  return map;
})();

const getCategoryMapping = (dir: string) => {
  const direct = CATEGORY_MAP[dir] ?? CATEGORY_MAP[normalizeSegmentSlug(dir)];
  if (direct) return direct;

  return CATEGORY_MAP_BY_PATH.get(normalizeSegmentSlug(dir));
};

const resolveCategoryFromDir = (
  dir: string,
  fallback: CategoryInfo
): CategoryInfo => {
  const entry = getCategoryMapping(dir);
  const mappedSlug = entry?.path ? normalizeCategoryPath(entry.path) : "";

  return {
    slug: mappedSlug || normalizeSegmentSlug(dir) || fallback.slug,
    name: entry?.name?.trim() || dir,
  };
};

const getDirSegments = (filePath: string | undefined) => {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "")
    .filter(path => !path.startsWith("_"))
    .slice(0, -1);

  return pathSegments ?? [];
};

export const getCategoryFromFilePath = (
  filePath: string | undefined,
  fallback: CategoryInfo = { slug: "others", name: "其他" }
): CategoryInfo => {
  const [firstDir] = getDirSegments(filePath);
  if (!firstDir) return fallback;

  return resolveCategoryFromDir(firstDir, fallback);
};

export const getPostRouteParams = (id: string, filePath: string | undefined) => {
  const blogId = id.split("/");
  const filenameSlug = blogId.length > 0 ? blogId.slice(-1)[0] : id;

  const dirSegments = getDirSegments(filePath);
  const [firstDir, ...restDirs] = dirSegments;
  const fallback: CategoryInfo = { slug: "others", name: "其他" };
  const cata = firstDir ? resolveCategoryFromDir(firstDir, fallback).slug : "others";

  const rest = restDirs.map(normalizeSegmentSlug).filter(Boolean);
  const slug = [...rest, filenameSlug].join("/");

  return { cata, slug };
};

/**
 * Get full path of a blog post, categorized by its first-level directory.
 * Example:
 * - src/data/blog/math/example.md -> /post/math/example
 * - src/data/blog/docs/astro/how-to.md -> /post/docs/astro/how-to
 */
export const getPostPath = (
  id: string,
  filePath: string | undefined,
  includeBase = true
) => {
  const { cata, slug } = getPostRouteParams(id, filePath);
  const basePath = includeBase ? "/post" : "";
  return [basePath, cata, slug].join("/");
};
