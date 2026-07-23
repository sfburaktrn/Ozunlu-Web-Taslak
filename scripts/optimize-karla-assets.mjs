import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'images', 'karla-mucadele');
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
    { in: 'IMG_8605.JPG', out: 'ozunlu-karla-mucadele-on-bicak.webp', w: 1800, q: 82 },
    { in: 'IMG_8715.JPG', out: 'ozunlu-karla-mucadele-yan-gorunum.webp', w: 1800, q: 82 },
    { in: 'IMG_8724.JPG', out: 'ozunlu-karla-mucadele-tuz-serici.webp', w: 1800, q: 82 },
    { in: 'tmp-karla/hero-poster.jpg', out: 'ozunlu-karla-mucadele-hero-poster.webp', w: 1920, q: 78 },
    { in: 'tmp-karla/cta-poster.jpg', out: 'ozunlu-karla-mucadele-cta-poster.webp', w: 1600, q: 78 },
];

for (const j of jobs) {
    const input = path.join(root, j.in);
    const output = path.join(outDir, j.out);
    const before = fs.statSync(input).size;
    await sharp(input)
        .rotate()
        .resize({ width: j.w, withoutEnlargement: true })
        .webp({ quality: j.q, effort: 6 })
        .toFile(output);
    const after = fs.statSync(output).size;
    console.log(`${j.out}: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(2)}MB`);
}
