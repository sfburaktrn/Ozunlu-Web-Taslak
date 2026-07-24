import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'images', 'karla-mucadele');
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
    { in: 'Kar küreme ön_.png', out: 'ozunlu-karla-mucadele-on-kureme.webp', w: 2000, q: 92 },
    { in: 'Kar küreme arka.png', out: 'ozunlu-karla-mucadele-arka-serici.webp', w: 2000, q: 92 },
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
