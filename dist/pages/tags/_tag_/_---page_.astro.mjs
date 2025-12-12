import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as addAttribute, f as renderTransition, m as maybeRenderHead } from '../../../chunks/astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BMFkbJ60.mjs';
import { $ as $$Main } from '../../../chunks/Main_Ds_QtNrR.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../../chunks/Footer_BZhWCztc.mjs';
import { $ as $$Card } from '../../../chunks/Card_DDL1MAzt.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_BiUae0kR.mjs';
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_ChpyINTs.mjs';
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_CcZGOW-f.mjs';
import { a as slugifyAll } from '../../../chunks/slugify_CvQuO4Tx.mjs';
import { S as SITE } from '../../../chunks/config_DTyENvc6.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://bu.cnies.org/");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data.map(({ data, id }) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": `/posts/${id}`, "frontmatter": data })}`)} </ul> `, "title": async ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "7yucybdb", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "D:/LERNAS/BrushUp/src/pages/tags/[tag]/[...page].astro", "self");

const $$file = "D:/LERNAS/BrushUp/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
