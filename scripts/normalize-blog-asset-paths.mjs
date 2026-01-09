import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const BLOG_ROOT = path.join(ROOT, "src", "data", "blog");
const ASSETS_DIR = path.join(ROOT, "src", "assets");

const toPosix = p => p.split(path.sep).join("/");

const isCodeFence = line => {
  const trimmed = line.trimStart();
  return trimmed.startsWith("```") || trimmed.startsWith("~~~");
};

const getRelAssetsDir = fileDir => {
  const rel = path.relative(fileDir, ASSETS_DIR) || ".";
  return toPosix(rel);
};

const normalizeAssetImageUrl = (fileDir, url) => {
  const match = url.match(/^(?:\.\.?\/)+assets\/images\/(.+)$/);
  if (!match) return url;

  const rest = match[1];
  const relAssetsDir = getRelAssetsDir(fileDir);
  return `${relAssetsDir}/images/${rest}`.replaceAll("\\", "/");
};

const normalizeLineImages = (fileDir, line) => {
  let next = line;

  // Markdown image syntax: ![alt](url)
  next = next.replaceAll(
    /!\[[^\]]*]\((?<url>(?:\.\.?\/)+assets\/images\/[^)\s]+)\)/g,
    (full, ...args) => {
      const groups = args.at(-1);
      const url = groups?.url;
      if (!url) return full;
      const normalized = normalizeAssetImageUrl(fileDir, url);
      return full.replace(url, normalized);
    }
  );

  // HTML img tag: <img src="url" ...>
  next = next.replaceAll(
    /(<img\b[^>]*\bsrc=["'])(?<url>(?:\.\.?\/)+assets\/images\/[^"']+)(["'])/gi,
    (full, prefix, url, suffix) => {
      const normalized = normalizeAssetImageUrl(fileDir, url);
      return `${prefix}${normalized}${suffix}`;
    }
  );

  return next;
};

const normalizeFrontmatterLine = (fileDir, line) => {
  const match = line.match(
    /^(?<indent>\s*)ogImage:\s*(?<quote>["']?)(?<url>[^"']+)\k<quote>\s*$/
  );
  if (!match?.groups) return line;

  const { indent, quote, url } = match.groups;
  const normalizedUrl = normalizeAssetImageUrl(fileDir, url.trim());
  if (normalizedUrl === url.trim()) return line;

  const q = quote ?? "";
  return `${indent}ogImage: ${q}${normalizedUrl}${q}`;
};

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

const normalizeFile = async filePath => {
  const fileDir = path.dirname(filePath);
  const raw = await fs.readFile(filePath, "utf8");
  const lines = raw.split(/\r?\n/);

  let changed = false;
  let inFrontmatter = false;
  let frontmatterDone = false;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i === 0 && line.trim() === "---") {
      inFrontmatter = true;
      continue;
    }

    if (inFrontmatter && line.trim() === "---") {
      inFrontmatter = false;
      frontmatterDone = true;
      continue;
    }

    if (inFrontmatter) {
      const normalized = normalizeFrontmatterLine(fileDir, line);
      if (normalized !== line) {
        lines[i] = normalized;
        changed = true;
      }
      continue;
    }

    // Only normalize body after frontmatter (if any)
    if (!frontmatterDone && i < 30) {
      // Heuristic: if no frontmatter, treat file as body immediately.
      // Still safe since we only rewrite specific image syntaxes.
      frontmatterDone = true;
    }

    if (frontmatterDone) {
      if (isCodeFence(line)) {
        inCode = !inCode;
        continue;
      }

      if (!inCode) {
        const normalized = normalizeLineImages(fileDir, line);
        if (normalized !== line) {
          lines[i] = normalized;
          changed = true;
        }
      }
    }
  }

  if (!changed) return false;
  await fs.writeFile(filePath, lines.join("\n"), "utf8");
  return true;
};

const main = async () => {
  let normalizedCount = 0;
  const files = await walk(BLOG_ROOT);

  for (const filePath of files) {
    const did = await normalizeFile(filePath);
    if (did) normalizedCount++;
  }

  if (normalizedCount > 0) {
    // eslint-disable-next-line no-console
    console.log(
      `[blog] normalized asset image paths in ${normalizedCount} markdown file(s)`
    );
  }
};

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

