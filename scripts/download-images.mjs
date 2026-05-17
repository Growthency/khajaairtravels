import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const outDir = join(process.cwd(), "public", "images");

const items = [
  // Blog covers — width 1600
  { name: "blog/hajj-2026.webp",          url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=85", w: 1600 },
  { name: "blog/umrah-ramadan.webp",      url: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1600&q=85", w: 1600 },
  { name: "blog/uae-visa.webp",           url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85", w: 1600 },
  { name: "blog/kashmir-winter.webp",     url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85", w: 1600 },
  { name: "blog/turkey-cappadocia.webp",  url: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1600&q=85", w: 1600 },
  { name: "blog/saudi-work-visa.webp",    url: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1600&q=85", w: 1600 },

  // Gallery — width 1400
  { name: "gallery/haram-night.webp",       url: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/madinah-roza.webp",      url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/mina-tent.webp",         url: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/umrah-group.webp",       url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/kashmir-shikara.webp",   url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/turkey-cappadocia.webp", url: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/bali-temple.webp",       url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/office-team.webp",       url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=82", w: 1400 },
  { name: "gallery/office-counter.webp",    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=82", w: 1400 },

  // Hero feature image for Hajj feature section
  { name: "hero/hajj-feature.webp", url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=85", w: 1200 },

  // About page founder photo
  { name: "about/team.webp", url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=85", w: 1100 }
];

const fallbackBuffer = (label) => {
  return sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: { r: 31, g: 114, b: 227 }
    }
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="1600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f72e3"/><stop offset="0.5" stop-color="#059669"/><stop offset="1" stop-color="#f96e09"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" font-family="sans-serif" font-size="64" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
        ),
        top: 0,
        left: 0
      }
    ])
    .webp({ quality: 85 })
    .toBuffer();
};

async function main() {
  let ok = 0;
  let fail = 0;
  for (const item of items) {
    const out = join(outDir, item.name);
    await mkdir(dirname(out), { recursive: true });
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.byteLength < 5000) throw new Error(`tiny ${buf.byteLength}b`);
      const webp = await sharp(buf)
        .resize({ width: item.w, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toBuffer();
      await writeFile(out, webp);
      console.log(`✓ ${item.name} (${(webp.byteLength / 1024).toFixed(1)} KB)`);
      ok++;
    } catch (err) {
      console.warn(`! ${item.name} — ${err.message} — using fallback`);
      const fb = await fallbackBuffer(item.name.split("/").pop().replace(".webp", ""));
      await writeFile(out, fb);
      fail++;
    }
  }
  console.log(`\n${ok} ok, ${fail} fallback`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
