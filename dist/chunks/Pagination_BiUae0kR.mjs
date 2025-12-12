import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
import { I as IconArrowRight } from './IconArrowRight_BQw5WWBj.mjs';
import { b as $$LinkButton } from './Footer_BZhWCztc.mjs';

const IconArrowLeft = new Proxy({"src":"/_astro/IconArrowLeft.7rKuNJsZ.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/LERNAS/BrushUp/src/assets/icons/IconArrowLeft.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/LERNAS/BrushUp/src/assets/icons/IconArrowLeft.svg");
							return target[name];
						}
					});

const $$Astro = createAstro("https://bu.cnies.org/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${page.lastPage > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-auto mb-8 flex justify-center" aria-label="Pagination">${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.prev, "href": page.url.prev, "class:list": ["mr-4 select-none", { "opacity-50": !page.url.prev }], "ariaLabel": "Previous" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconArrowLeft", IconArrowLeft, { "class": "inline-block" })}
上一个
` })}${page.currentPage} / ${page.lastPage}${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.next, "href": page.url.next, "class:list": ["ml-4 select-none", { "opacity-50": !page.url.next }], "ariaLabel": "Next" }, { "default": ($$result2) => renderTemplate`
下一个
${renderComponent($$result2, "IconArrowRight", IconArrowRight, { "class": "inline-block" })}` })}</nav>`}`;
}, "D:/LERNAS/BrushUp/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
