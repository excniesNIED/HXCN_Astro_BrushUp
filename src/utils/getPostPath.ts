import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

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

  const slug = normalizeSegmentSlug(firstDir);
  return { slug: slug || fallback.slug, name: firstDir };
};

export const getPostRouteParams = (id: string, filePath: string | undefined) => {
  const blogId = id.split("/");
  const filenameSlug = blogId.length > 0 ? blogId.slice(-1)[0] : id;

  const dirSegments = getDirSegments(filePath);
  const normalizedDirs = dirSegments.map(normalizeSegmentSlug).filter(Boolean);

  const cata = normalizedDirs[0] ?? "others";
  const rest = normalizedDirs.slice(1);
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
