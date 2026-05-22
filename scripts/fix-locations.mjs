import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "lib/data/faqs.ts", "lib/data/faqs.bn.ts",
  "lib/data/branches.ts", "lib/data/branches.bn.ts",
  "lib/data/services.ts", "lib/data/services.bn.ts",
  "lib/data/posts.ts", "lib/data/posts.bn.ts",
  "lib/data/testimonials.ts", "lib/data/testimonials.bn.ts",
  "lib/data/gallery.ts", "lib/data/gallery.bn.ts",
  "lib/i18n/translations.ts",
  "app/contact/page.tsx", "app/about/page.tsx",
  "app/layout.tsx", "app/gallery/layout.tsx", "app/opengraph-image.tsx"
];

// Ordered: compound phrases first, catch-all last.
const repl = [
  ["Uttara, Dhaka 1230", "Dhaka 1000"],
  ["Uttara, Dhaka", "Dhaka"],
  ["Uttara Sector 7", "Dhaka"],
  ["Uttara", "Dhaka"],
  ["উত্তরা, ঢাকা ১২৩০", "ঢাকা ১০০০"],
  ["উত্তরা, ঢাকা", "ঢাকা"],
  ["উত্তরা সেক্টর ৭", "ঢাকা"],
  ["উত্তরায়", "ঢাকায়"],
  ["উত্তরা", "ঢাকা"]
];

let total = 0;
for (const rel of files) {
  const path = join(process.cwd(), rel);
  let text;
  try {
    text = await readFile(path, "utf8");
  } catch {
    continue;
  }
  let count = 0;
  for (const [from, to] of repl) {
    const parts = text.split(from);
    if (parts.length > 1) {
      count += parts.length - 1;
      text = parts.join(to);
    }
  }
  if (count > 0) {
    await writeFile(path, text, "utf8");
    console.log(`✓ ${rel} — ${count} replaced`);
    total += count;
  }
}
console.log(`\nTotal: ${total} replacements`);
