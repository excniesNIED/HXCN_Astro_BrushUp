import { b as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, g as createTransitionScope } from '../chunks/astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$Main } from '../chunks/Main_Ds_QtNrR.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_BZhWCztc.mjs';
import { S as SITE } from '../chunks/config_DTyENvc6.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bu.cnies.org/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const backUrl = `${Astro2.url.pathname}` ;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u641C\u7D22 | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "\u641C\u7D22", "pageDesc": "\u641C\u70B9\u4EC0\u4E48\u5427......" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="pagefind-search"${addAttribute(backUrl, "data-backurl")}${addAttribute(createTransitionScope($$result3, "rgzmq3na"), "data-astro-transition-persist")}></div> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/LERNAS/BrushUp/src/pages/search.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/LERNAS/BrushUp/src/pages/search.astro", "self");

const $$file = "D:/LERNAS/BrushUp/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
