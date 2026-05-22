import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const pub = join(process.cwd(), "public");
const outDir = join(pub, "images", "team");
await mkdir(outDir, { recursive: true });

const jobs = [
  { in: "ceo.jpeg", out: "ceo.webp" },
  { in: "md.jpeg", out: "md.webp" },
  { in: "manager.jpeg", out: "manager.webp" }
];

for (const job of jobs) {
  const buf = await readFile(join(pub, job.in));
  const webp = await sharp(buf)
    .resize({ width: 640, height: 800, fit: "cover", position: "top" })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();
  await writeFile(join(outDir, job.out), webp);
  console.log(`✓ ${job.out} (${(webp.byteLength / 1024).toFixed(1)} KB)`);
}
