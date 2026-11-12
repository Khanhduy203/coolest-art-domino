// Coolest art entry (Node 22, standard library only): the art is the
// entry.png beside this file (a skyscraper-sized domino toppling onto a
// city at dusk), and the program copies it to /output/entry.png. The judge
// sees exactly the bytes copied.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
