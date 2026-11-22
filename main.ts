import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The kettle clicks off at midnight, and the mug you left there is still warm in both hands. Snow settles on the fence, asking nothing of it. The dog sighs in his sleep. The dark beyond the window stays where it is, holding the house the way a hand holds a sleeping bird.";

const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry must be 1-280 code points, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${length} code points)`);
