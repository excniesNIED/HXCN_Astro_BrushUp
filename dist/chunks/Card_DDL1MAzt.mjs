import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, s as spreadAttributes, a as renderTemplate } from './astro/server_1KPYwdtd.mjs';
import { s as slugifyStr } from './slugify_CvQuO4Tx.mjs';
import { $ as $$Datetime } from './Datetime_BUBx9nLG.mjs';

const $$Astro = createAstro("https://bu.cnies.org/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, frontmatter, secHeading = true } = Astro2.props;
  const { title, pubDatetime, modDatetime, description } = frontmatter;
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    class: "text-lg font-medium decoration-dashed hover:underline"
  };
  return renderTemplate`${maybeRenderHead()}<li class="my-6"> <a${addAttribute(href, "href")} class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"> ${secHeading ? renderTemplate`<h2${spreadAttributes(headerProps)}>${title}</h2>` : renderTemplate`<h3${spreadAttributes(headerProps)}>${title}</h3>`} </a> ${renderComponent($$result, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime })} <p>${description}</p> </li>`;
}, "D:/LERNAS/BrushUp/src/components/Card.astro", void 0);

export { $$Card as $ };
