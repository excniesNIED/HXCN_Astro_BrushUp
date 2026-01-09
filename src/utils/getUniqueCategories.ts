import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import { getCategoryFromFilePath } from "./getPostPath";

export type Category = {
  cata: string;
  cataName: string;
};

const getUniqueCategories = (posts: CollectionEntry<"blog">[]) => {
  const categories: Category[] = posts
    .filter(postFilter)
    .map(post => {
      const { slug, name } = getCategoryFromFilePath(post.filePath);
      return { cata: slug, cataName: name };
    })
    .filter(
      (value, index, self) =>
        self.findIndex(c => c.cata === value.cata) === index
    )
    .sort((a, b) => a.cata.localeCompare(b.cata));

  return categories;
};

export default getUniqueCategories;

