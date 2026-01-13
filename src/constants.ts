import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";

import { SITE } from "@/config";
import IconBrandQq from "@/assets/icons/IconBrandQq.svg";
import IconBrandBilibili from "@/assets/icons/IconBrandBilibili.svg";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Github",
    href: "https://github.com/excniesNIED",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "QQ",
    href: "https://qm.qq.com/cgi-bin/qm/qr?k=L_5nTaWr9hCupgFlntG9dJvVOYryFvv_&jump_from=webapi&authKey=dMK7Hy64j/qHufvU/SiTkzq1BCI2rAFXvNqNV57WFiQ/9nQUF5OP/ZSNQlSQuura",
    linkTitle: `${SITE.title} on QQ`,
    icon: IconBrandQq,
  },
  {
    name: "Bilibili",
    href: "https://space.bilibili.com/3494377156511978",
    linkTitle: `${SITE.title} on Bilibili`,
    icon: IconBrandBilibili,
  },
  {
    name: "Mail",
    href: "mailto:hxcn@cnies.org",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
