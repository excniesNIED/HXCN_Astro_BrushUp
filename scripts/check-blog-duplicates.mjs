import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const BLOG_ROOT = path.join(ROOT, "src", "data", "blog");

const walk = async dir => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".")) continue;
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
};

const getFrontmatterBlock = content => {
  const lines = content.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") return null;
  const endIndex = lines.slice(1).findIndex(l => l.trim() === "---");
  if (endIndex === -1) return null;
  return lines.slice(1, endIndex + 1).join("\n");
};

const getSlug = async filePath => {
  const content = await fs.readFile(filePath, "utf8");
  const frontmatter = getFrontmatterBlock(content);
  if (!frontmatter) return null;

  const match = frontmatter.match(/^\s*slug:\s*(?<value>.+?)\s*$/m);
  if (!match?.groups?.value) return null;

  const raw = match.groups.value.trim();
  if (!raw) return null;
  return raw.replace(/^["']|["']$/g, "");
};

const main = async () => {
  const files = await walk(BLOG_ROOT);
  const map = new Map();

  for (const filePath of files) {
    const base = path.basename(filePath, path.extname(filePath));
    const slug = (await getSlug(filePath)) ?? base;
    map.set(slug, [...(map.get(slug) ?? []), filePath]);
  }

  const duplicates = [...map.entries()].filter(([, list]) => list.length > 1);
  if (duplicates.length === 0) return;

  // eslint-disable-next-line no-console
  console.log("[blog] duplicate slug/id candidates detected:");
  for (const [slug, list] of duplicates.sort(([a], [b]) => a.localeCompare(b))) {
    // eslint-disable-next-line no-console
    console.log(`- ${slug}`);
    for (const filePath of list) {
      // eslint-disable-next-line no-console
      console.log(`  - ${path.relative(ROOT, filePath)}`);
    }
  }

  process.exitCode = 1;
};

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

