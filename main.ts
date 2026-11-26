import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The horoscope lives next to this entrypoint so the program resolves its
// sources from its own directory, never from process.cwd().
const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "horoscope.txt"), "utf8").trimEnd();

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
