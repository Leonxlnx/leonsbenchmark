import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [page, prompt] = await Promise.all([
  readFile(new URL("index.html", import.meta.url), "utf8"),
  readFile(new URL("prompts/premium-real-estate-3d-agent-prompt-v2.md", import.meta.url), "utf8"),
]);

assert.match(page, /kimik3realestatebenchmark\.vercel\.app/);
assert.match(page, /x\.com\/LexnLin\/status\/2080080211178115074/);
assert.match(page, /assets\/og-image\.png/);
assert.match(page, /\/_vercel\/insights\/script\.js/);
assert.match(page, /data-copy-prompt/);
assert.match(page, /data-prompt-toggle/);
assert.doesNotMatch(page, /updated as models ship|benchmark-number|release-count/);
assert.match(prompt, /^# Premium Real Estate 3D Website/m);
console.log("Static benchmark checks passed.");
