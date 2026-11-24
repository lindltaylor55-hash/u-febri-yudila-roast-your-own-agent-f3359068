// Roast Your Own Agent — entry program.
// Copies the agent roast (entry.txt) byte-for-byte to /output/entry.txt,
// where the grader reads it. Node 22 standard library only, no network.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
const bytes = statSync(join(outDir, "entry.txt")).size;
console.log(`wrote ${join(outDir, "entry.txt")} (${bytes} bytes)`);
