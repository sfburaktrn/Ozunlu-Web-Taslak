import fs from 'node:fs';
import path from 'node:path';

const labels = {
    de: ['Produkte', 'Karriere'],
    bg: ['Продукти', 'Кариера'],
    ro: ['Produse', 'Cariere'],
    ar: ['المنتجات', 'الوظائف'],
    fr: ['Produits', 'Carrières'],
    es: ['Productos', 'Carreras'],
    ru: ['Продукция', 'Карьера'],
    uk: ["Продукція", "Кар'єра"],
};

for (const [loc, [products, career]] of Object.entries(labels)) {
    const file = path.join('messages', `${loc}.json`);
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('productsLink')) continue;
    content = content.replace(
        '"quickAccess":',
        `"productsLink": "${products}",\n      "careerLink": "${career}",\n      "quickAccess":`,
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${loc}`);
}
