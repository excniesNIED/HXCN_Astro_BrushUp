import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BMFkbJ60.mjs';
import { $ as $$Main } from '../../chunks/Main_Ds_QtNrR.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_BZhWCztc.mjs';
import { $ as $$Card } from '../../chunks/Card_DDL1MAzt.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_BiUae0kR.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_CcZGOW-f.mjs';
import { S as SITE } from '../../chunks/config_DTyENvc6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bu.cnies.org/");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return paginate(getSortedPosts(posts), { pageSize: SITE.postPerPage });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "\u6587\u7AE0", "pageDesc": "\u5168\u90E8\u6587\u7AE0" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map(({ data, id }) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "href": `/posts/${id}`, "frontmatter": data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "D:/LERNAS/BrushUp/src/pages/posts/[...page].astro", void 0);

const $$file = "D:/LERNAS/BrushUp/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
