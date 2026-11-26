import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The horoscope lives next to this entrypoint so the program resolves its
// sources from its own directory, never from process.cwd().
const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "horoscope.txt"), "utf8").trimEnd();

// The gate rejects horoscopes outside 1-200 chars, so fail loudly here
// instead of submitting an entry that cannot score.
if (text.length === 0 || text.length > 200) {
  throw new Error(
    `horoscope must be 1-200 chars, got ${text.length}`
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
