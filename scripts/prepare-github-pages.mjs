import { readFile, writeFile, mkdir } from "node:fs/promises";
const stories = JSON.parse(
  await readFile(new URL("../src/data/stories.json", import.meta.url), "utf8"),
);
const output = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", output), "utf8");
if (!html.includes("/SGAI/assets/"))
  throw new Error("Expected a GitHub Pages build with /SGAI/ assets.");
// GitHub Pages has no SPA rewrite support. Real directory entrypoints let every
// published route, including all graduate stories, open or refresh with HTTP 200.
const routes = [
  "challenge",
  "our-work",
  "stories",
  "about",
  "partner-with-us",
  "contact",
  "privacy",
  ...stories.map((story) => `stories/${story.slug}`),
];
for (const route of routes) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}
await writeFile(new URL("404.html", output), html);
await writeFile(new URL(".nojekyll", output), "");
console.log(
  `Prepared GitHub Pages homepage, ${routes.length} direct-route entrypoints, and 404 recovery.`,
);
