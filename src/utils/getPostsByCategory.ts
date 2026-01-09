import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import { getCategoryFromFilePath } from "./getPostPath";

const getPostsByCategory = (posts: CollectionEntry<"blog">[], cata: string) => {
  return posts.filter(post => {
    if (!postFilter(post)) return false;
    return getCategoryFromFilePath(post.filePath).slug === cata;
  });
};

export default getPostsByCategory;

