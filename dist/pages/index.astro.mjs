import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_1KPYwdtd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BMFkbJ60.mjs';
import { $ as $$Layout, a as $$Header, d as $$Hr, b as $$LinkButton, c as $$Footer } from '../chunks/Footer_BZhWCztc.mjs';
import { $ as $$Card } from '../chunks/Card_DDL1MAzt.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_CcZGOW-f.mjs';
import { I as IconArrowRight } from '../chunks/IconArrowRight_BQw5WWBj.mjs';
import { S as SITE } from '../chunks/config_DTyENvc6.mjs';
export { renderers } from '../renderers.mjs';

const IconRss = new Proxy({"src":"/_astro/IconRss.BYWRoVjV.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/LERNAS/BrushUp/src/assets/icons/IconRss.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/LERNAS/BrushUp/src/assets/icons/IconRss.svg");
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  sortedPosts.filter(({ data }) => data.featured);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" data-layout="index"> <section id="hero" class="pt-8 pb-6"> <h1 class="my-4 inline-block text-4xl font-bold sm:my-8 sm:text-5xl">
萑澈的错题本
</h1> <a target="_blank" href="/rss.xml" class="inline-block" aria-label="rss feed" title="RSS Feed"> ${renderComponent($$result2, "IconRss", IconRss, { "width": 20, "height": 20, "class": "scale-125 stroke-accent stroke-3" })} <span class="sr-only">RSS Feed</span> </a> <p>
欢迎来到「萑澈错题本」的奇妙世界——这里没有“一学就会”的魔法，但有“错了再战”的快乐秘籍！🎮 无论你是被算法题绕成毛线团的懵圈选手，被408四门课连环暴击的头秃预备役，还是和竞赛题相爱相杀的倔强肝帝，这里都能把你的错题变成升级打怪的专属装备库！错题本会自动给题目贴上“这题阴险”“知识点离家出走”等灵魂标签，附赠段子手写的解题脑洞和学霸的摸鱼小抄。每天解锁一道盲盒题（可能是送分天使也可能是脑细胞刺客），在“错题考古墙”围观自己三个月前的迷惑代码笑出鹅叫，还能去评论区捕捉和你一样边挠头边干饭的战友。悄悄说，连续打卡会触发“诶这题我居然会了”的隐藏成就哦～快来把翻车现场变成勋章墙，毕竟，笑着刷题的人运气总不会太差！🚀
</p> </section> ${renderComponent($$result2, "Hr", $$Hr, {})} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="pt-12 pb-6"> <h2 class="text-2xl font-semibold tracking-wide">文章</h2> <ul> ${recentPosts.map(
    ({ data, id }, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": `/posts/${id}/`, "frontmatter": data, "secHeading": false })}`
  )} </ul> </section>`} <div class="my-8 text-center"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/" }, { "default": async ($$result3) => renderTemplate`
全部文章
${renderComponent($$result3, "IconArrowRight", IconArrowRight, { "class": "inline-block" })} ` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/LERNAS/BrushUp/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/LERNAS/BrushUp/src/pages/index.astro", void 0);

const $$file = "D:/LERNAS/BrushUp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
