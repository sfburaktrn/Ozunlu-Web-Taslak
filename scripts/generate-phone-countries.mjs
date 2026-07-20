import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const res = await fetch(
    'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json/countries.json'
);
const countries = await res.json();

const items = countries
    .filter((c) => c.iso2 && c.phonecode)
    .map((c) => ({
        code: c.iso2,
        dial: `+${String(c.phonecode).replace(/^\+/, '')}`,
        name: c.name,
        placeholder: 'XXX XXX XXXX',
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));

const outPath = path.join(root, 'src/data/phoneCountryList.ts');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(
    outPath,
    `// Auto-generated country dial codes (${items.length} countries)\nexport const phoneCountryList = ${JSON.stringify(items, null, 4)} as const;\n`
);

console.log(`Wrote ${items.length} countries to ${outPath}`);
