import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_BMFkbJ60.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_CcZGOW-f.mjs';
import { S as SITE } from '../chunks/config_DTyENvc6.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, id }) => ({
      link: `posts/${id}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime)
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
