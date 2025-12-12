import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, f as renderTransition, a as renderTemplate } from './astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
/* empty css                         */

const IconHash = new Proxy({"src":"/_astro/IconHash.D97SZ4jU.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/LERNAS/BrushUp/src/assets/icons/IconHash.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/LERNAS/BrushUp/src/assets/icons/IconHash.svg");
							return target[name];
						}
					});

const $$Astro = createAstro("https://bu.cnies.org/");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, tagName, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute([
    "group inline-block group-hover:cursor-pointer",
    size === "sm" ? "my-1 underline-offset-4" : "mx-1 my-3 underline-offset-8"
  ], "class:list")}> <a${addAttribute(`/tags/${tag}/`, "href")}${addAttribute([
    "relative pr-2 text-lg underline decoration-dashed group-hover:-top-0.5 group-hover:text-accent focus-visible:p-1",
    { "text-sm": size === "sm" }
  ], "class:list")}${addAttribute(renderTransition($$result, "36ssibgs", "", tag), "data-astro-transition-scope")}> ${renderComponent($$result, "IconHash", IconHash, { "class:list": [
    "inline-block opacity-80",
    { "-mr-3.5 size-4": size === "sm" },
    { "-mr-5 size-6": size === "lg" }
  ] })}
&nbsp;<span>${tagName}</span> </a> </li>`;
}, "D:/LERNAS/BrushUp/src/components/Tag.astro", "self");

export { $$Tag as $ };
