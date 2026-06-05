import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = join(__dirname, '..', 'messages');

const translations = {
  en: {
    seo: {
      home: { title: 'Özünlü Damper | Fast Production, Hardox Steel Superstructure Solutions – Since 1977', description: 'Since 1977, Turkey\'s trusted manufacturer of heavy commercial vehicle superstructures with Hardox-certified steel processing, advanced engineering and comprehensive after-sales service network.' },
      damper: { title: 'Özünlü Tipper | High-Performance Hardox Tipper Solutions – Since 1977', description: 'Özünlü tipper models designed with Hardox steel bodies, advanced engineering and over 45 years of production experience — essential for construction, mining and infrastructure. Request a quote today.' },
      yariRomork: { title: 'Özünlü Semi-Trailer | Hardox Steel Tipper Trailer – Heavy-Duty Transport Solutions', description: 'Semi-trailer models with BPW and Özkoç axles and Hardox 450/500 bodies for safe, efficient heavy-load transport. Engineered by Özünlü.' },
      ekEkipmanlar: { title: 'Trailer Spare Parts & Equipment | Original Hydraulic, Axle, Brake Systems – Özünlü', description: 'Original trailer equipment and spare parts supply with Özünlü guarantee. Hydraulic systems, BPW-Özkoç axles, EBS brake kits and LED lighting — wide stock, fast delivery.' },
      afterSales: { title: 'Özünlü After-Sales Services | 24/7 Technical Support, Spare Parts, Authorized Service Network', description: '87 authorized service points across Turkey, 24/7 technical support and original spare parts guarantee — Özünlü after-sales keeps your fleet running.' },
      contact: { title: 'Contact | Özünlü Damper – Quotes & Support', description: 'Contact Özünlü Damper for sales, after-sales, export and HR. Head office: Sultangazi, Istanbul.' },
      corporate: { title: 'Corporate | Özünlü Damper – Since 1977', description: 'Since 1977, Özünlü Damper has been the address of trust and quality in heavy commercial vehicle superstructures.' },
      products: { title: 'Products | Özünlü Damper', description: 'Tipper, semi-trailer and equipment solutions.' },
      media: { title: 'Media | Özünlü Damper', description: 'Özünlü Damper news, blog and industry insights.' },
      career: { title: 'Careers | Özünlü Damper', description: 'Career opportunities at Özünlü Damper.' }
    },
    common: {
      nav: { damper: 'Tipper', yariRomork: 'Semi-Trailer', ekEkipmanlar: 'Equipment', satisSonrasi: 'After-Sales', iletisim: 'Contact', mobileContactQuote: 'Contact & Get Quote' },
      footer: { logoAlt: 'Özünlü Damper Logo', about: 'Since 1977, {hardox} certified steel processing, advanced engineering and comprehensive after-sales network — Turkey\'s trusted heavy commercial vehicle superstructure manufacturer.', quickAccess: 'Quick Links', contact: 'Contact', address: 'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / Istanbul', copyright: '© {year} Özünlü Damper. All rights reserved.', kvkk: 'GDPR', aydinlatmaMetni: 'Privacy Notice', cerezPolitikasi: 'Cookie Policy' },
      cta: { teklifAl: 'Get Quote', teklifAlin: 'Request Quote', hemenTeklifAl: 'Get Quote Now', incele: 'View', bizeUlasin: 'Contact Us', bilgiAl: 'Learn More', iletisimeGecin: 'Get in Touch', detayliIncele: 'View Details', tumUrunler: 'ALL PRODUCTS', kesfet: 'Explore', kaydir: 'Scroll' },
      labels: { modellerimiz: 'Our Models', oneCikanlar: 'Highlights', ozunluWatermark: 'ÖZÜNLÜ', logoAlt: 'Özünlü Damper', hardoxAlt: 'Hardox In My Body certified wear-resistant steel logo' }
    },
    home: {
      hero: { titleLine1: 'SPEED IN PRODUCTION', titleLine2: 'DURABILITY IN THE FIELD', subtitle: 'Fast production, long-lasting superstructure solutions and field-proven performance', ctaDamper: 'Tipper Quote', ctaYariRomork: 'Semi-Trailer Quote', scroll: 'Scroll' },
      about: { eyebrow: 'About Us', title: 'Defining Strength Through Fast Production', paragraph1: 'Since 1977, we have delivered reliable, long-lasting superstructure solutions to diverse industries with production power extending from Turkey to the world.', paragraph2: 'We combine advanced engineering and design with the superior durability of {hardox} steel, developing each product not just as a superstructure but as a solution that drives operational efficiency.', cards: { arge: 'R&D & ENGINEERING', ozelTasarim: 'CUSTOM DESIGN SOLUTIONS', uretimTeknolojisi: 'ADVANCED PRODUCTION TECHNOLOGY', sertifikaliUretim: 'CERTIFIED PRODUCTION' } },
      damperHero: { category: 'TIPPER', imageAlt: 'Özünlü Tipper Performance and Durability', titleLine1: 'Engineering Answer', titleLine2: 'for Tough Sites', description: 'Our tipper systems built for harsh construction, mining and infrastructure conditions deliver uninterrupted field performance with {hardox} body durability, high tipping stability and fast unloading capacity.' },
      trailerHero: { category: 'SEMI-TRAILER', imageAlt: 'Özünlü Semi-Trailer and Trailer Systems', titleLine1: 'Lightweight Design', titleLine2: 'Strong Performance', description: 'Delivers transport efficiency, strong resale value and long-lasting performance.' },
      equipmentHero: { category: 'Equipment', imageAlt: 'Özünlü Equipment and Spare Parts Solutions', titleLine1: 'Complete Equipment', titleLine2: 'Solutions for Your Fleet', description: 'From hydraulic systems to EBS brake kits, premium axle brands to LED lighting — all trailer equipment is original certified and delivered fast from wide stock with Özünlü guarantee.' },
      whyChooseUs: { eyebrow: 'WHY ÖZÜNLÜ?', title: 'Why Özünlü?', features: { '0': 'OEM-approved superstructure design — production compatible with different chassis and tractor configurations', '1': '{hardox} certified steel processing and robotic welding technology', '2': 'Full compliance with all regulations and European safety standards (ECE/ADR)', '3': 'Comprehensive warranty and uninterrupted after-sales service', '4': '87 authorized service points in 50 provinces across Turkey', '5': 'Structural design that preserves high resale value', '6': 'Export to over 50 countries — globally proven quality' } },
      mapPreview: { eyebrow: 'Service Map', title: 'Nationwide Authorized Service Network', description: 'Wherever your vehicle is, Özünlü is with you. Our 87 authorized service points in 50 provinces ensure uninterrupted fleet operations with original spare parts and certified technicians.' },
      partners: { title: 'Preferred by Industry Leaders', description: 'Our heavy commercial vehicle superstructure solutions work reliably on the toughest routes in construction, mining and long-distance transport.', footer: 'Approved Superstructure Supplier' },
      products: { eyebrow: 'Our Products', title: 'SUPERSTRUCTURE', titleHighlight: 'SOLUTIONS', subtitle: 'Superstructure solutions in {hardox} steel quality for every need' }
    },
    damper: {
      hero: { imageAlt: 'Özünlü Tipper Solutions', titleLine1: 'TIPPER', titleLine2: 'SOLUTIONS', description: 'The engineering answer for tough sites. {hardox} body, high tipping stability and optimized load capacity — superior performance in every condition.' },
      products: { title: 'Ready Tipper Solutions', subtitle: 'We prepared the most preferred configurations for you. Explore or request a quote now.' },
      features: { titleLine1: 'Perfect Harmony of', titleLine2: 'Power and Design', item01Title: 'Hardox® Body', item01Content: 'Body structure made with Swedish {hardox} steel redefines industry standards in wear and impact resistance. Long life, low maintenance cost.', item02Title: 'Aerodynamic Engineering', item02Content: 'Wind tunnel optimized aerodynamic lines reduce fuel consumption and total operating cost.', item03Title: 'High Payload Capacity', item03Content: 'Lightweight high-strength chassis design delivers maximum transport capacity within legal load limits.', imageAlt: 'Özünlü Tipper Features' },
      configurator: { title: 'Tipper Configurator', subtitle: 'Specify technical details for a high-performance tipper tailored to your needs. Our expert team will prepare your custom quote shortly.' }
    },
    yariRomork: {
      hero: { imageAlt: 'Özünlü Semi-Trailer Solutions', titleLine1: 'SEMI-TRAILER', titleLine2: 'SOLUTIONS', description: 'Lighten heavy transport with engineering. {hardox} steel structure, advanced brake technology and optimized load distribution — superior performance and safety on every route.' },
      products: { title: 'Ready Semi-Trailer Solutions', subtitle: 'We prepared the industry\'s most preferred configurations. Request a quote or design your own vehicle.' },
      features: { titleLine1: 'Master Every', titleLine2: 'Moment on the Road', item01Title: 'Advanced Chassis Technology', item01Content: 'High-strength chassis produced with robotic welding; maximum resistance to flex, minimized weight, maximized payload.', item02Title: 'Active Safety Systems', item02Content: 'EBS electronic braking and RSS roll stability support for driving safety at European standards.', item03Title: 'Versatile Adaptation', item03Content: 'Full flexibility from lowbed transport to container logistics, bulk cargo to custom load configurations.', imageAlt: 'Semi-Trailer Features' },
      configurator: { title: 'Semi-Trailer Configurator', subtitle: 'Share details to design the best high-performance semi-trailer for your fleet. Our engineering team will prepare a custom technical quote.' }
    },
    ekEkipmanlar: {
      hero: { badge: 'EQUIPMENT', imageAlt: 'Equipment and Spare Parts Solutions', titleLine1: 'Complete Equipment', titleLine2: 'Solutions for Your Fleet', description: 'From hydraulic systems to EBS brake kits, premium axle brands to LED lighting — all trailer equipment is original certified with Özünlü guarantee and fast stock delivery.' },
      categories: { title: 'Product Groups', subtitle: 'Original certified equipment, wide stock and fast delivery advantage in one place.' },
      cta: { title: 'Couldn\'t Find the Part?', description: 'Contact our expert team and we will source the product you need.' },
      performance: { imageAlt: 'Trailer Equipment', titleLine1: 'Right Part,', titleLine2: 'Maximum Performance', description: 'Vehicle performance depends directly on equipment quality. At Özünlü, we deliver original certified products from globally proven brands instantly from our wide stock.' }
    },
    afterSales: {
      hero: { imageAlt: 'After-Sales Services', badge: 'ÖZÜNLÜ GUARANTEE', titleLine1: 'WITH YOU', titleLine2: 'EVERY', titleLine3: 'MOMENT', description: 'True partnership begins after purchase. We protect your vehicle\'s operational continuity with 87 authorized service points nationwide, 24/7 technical support and original spare parts guarantee.' },
      services: { title: 'OUR SERVICES', subtitle: 'Professional solutions that protect your vehicle\'s value and increase operational efficiency.' },
      documents: { eyebrow: 'Knowledge Base', title: 'TECHNICAL', titleHighlight: 'DOCUMENTS', description: 'User manuals, maintenance procedures and technical specifications prepared for maximum product efficiency — available in Turkish and English.', searchPlaceholder: 'Search documents...', download: 'DOWNLOAD', noResults: 'No documents found matching your criteria.' },
      map: { title: 'Nationwide Authorized Service Network', description: '87 authorized service points in 50 provinces. Select your city on the map for instant service and contact details.' }
    },
    contact: { form: { title: 'CONTACT', subtitle: 'Get in touch for your questions and projects.', headOffice: 'HEAD OFFICE', submit: 'Send' } }
  },
  de: {
    seo: {
      home: { title: 'Özünlü Kipper | Schnelle Produktion, Hardox-Stahl-Aufbauten – Seit 1977', description: 'Seit 1977: Türkeis vertrauenswürdiger Hersteller von Aufbauten für schwere Nutzfahrzeuge mit Hardox-zertifizierter Stahlverarbeitung, Ingenieurskunst und umfassendem Kundendienst.' },
      damper: { title: 'Özünlü Kipper | Hochleistungs-Hardox-Kipperlösungen – Seit 1977', description: 'Özünlü Kipper mit Hardox-Stahlmulden, fortschrittlicher Technik und über 45 Jahren Erfahrung — unverzichtbar für Bau, Bergbau und Infrastruktur. Jetzt Angebot anfordern.' },
      yariRomork: { title: 'Özünlü Sattelanhänger | Hardox-Stahl-Kipperanhänger – Schwerlasttransport', description: 'Sattelanhänger mit BPW- und Özkoç-Achsen und Hardox 450/500-Mulden für sicheren, effizienten Schwerlasttransport. Entwickelt von Özünlü.' },
      ekEkipmanlar: { title: 'Anhänger-Ersatzteile & Ausrüstung | Original Hydraulik, Achsen, Bremsen – Özünlü', description: 'Original-Anhängerausrüstung und Ersatzteile mit Özünlü-Garantie. Hydraulik, BPW-Özkoç-Achsen, EBS-Bremsen und LED-Beleuchtung — großer Lagerbestand, schnelle Lieferung.' },
      afterSales: { title: 'Özünlü Kundendienst | 24/7 Technischer Support, Ersatzteile, Servicenetz', description: '87 autorisierte Servicestellen in der Türkei, 24/7 technischer Support und Original-Ersatzteile — Özünlü Kundendienst hält Ihre Flotte am Laufen.' },
      contact: { title: 'Kontakt | Özünlü Damper – Angebote & Support', description: 'Kontaktieren Sie Özünlü für Vertrieb, Kundendienst, Export und Personal. Hauptsitz: Sultangazi, Istanbul.' },
      corporate: { title: 'Unternehmen | Özünlü Damper – Seit 1977', description: 'Seit 1977 ist Özünlü Damper die Adresse für Vertrauen und Qualität bei Aufbauten für schwere Nutzfahrzeuge.' },
      products: { title: 'Produkte | Özünlü Damper', description: 'Kipper-, Sattelanhänger- und Ausrüstungslösungen.' },
      media: { title: 'Medien | Özünlü Damper', description: 'Özünlü Damper Nachrichten, Blog und Brancheneinblicke.' },
      career: { title: 'Karriere | Özünlü Damper', description: 'Karrieremöglichkeiten bei Özünlü Damper.' }
    },
    common: {
      nav: { damper: 'Kipper', yariRomork: 'Sattelanhänger', ekEkipmanlar: 'Ausrüstung', satisSonrasi: 'Kundendienst', iletisim: 'Kontakt', mobileContactQuote: 'Kontakt & Angebot' },
      footer: { logoAlt: 'Özünlü Damper Logo', about: 'Seit 1977: {hardox}-zertifizierte Stahlverarbeitung, Ingenieurskunst und umfassendes Kundendienstnetz — Türkeis vertrauenswürdiger Hersteller von Aufbauten für schwere Nutzfahrzeuge.', quickAccess: 'Schnellzugriff', contact: 'Kontakt', address: 'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / Istanbul', copyright: '© {year} Özünlü Damper. Alle Rechte vorbehalten.', kvkk: 'DSGVO', aydinlatmaMetni: 'Datenschutzhinweis', cerezPolitikasi: 'Cookie-Richtlinie' },
      cta: { teklifAl: 'Angebot', teklifAlin: 'Angebot anfordern', hemenTeklifAl: 'Jetzt Angebot', incele: 'Ansehen', bizeUlasin: 'Kontaktieren Sie uns', bilgiAl: 'Mehr erfahren', iletisimeGecin: 'Kontakt aufnehmen', detayliIncele: 'Details ansehen', tumUrunler: 'ALLE PRODUKTE', kesfet: 'Entdecken', kaydir: 'Scrollen' },
      labels: { modellerimiz: 'Unsere Modelle', oneCikanlar: 'Highlights', ozunluWatermark: 'ÖZÜNLÜ', logoAlt: 'Özünlü Damper', hardoxAlt: 'Hardox In My Body zertifiziertes verschleißfestes Stahl-Logo' }
    },
    home: {
      hero: { titleLine1: 'GESCHWINDIGKEIT IN DER PRODUKTION', titleLine2: 'BESTÄNDIGKEIT IM EINSATZ', subtitle: 'Schnelle Produktion, langlebige Aufbauten und bewährte Leistung im Einsatz', ctaDamper: 'Kipper-Angebot', ctaYariRomork: 'Sattelanhänger-Angebot', scroll: 'Scrollen' },
      about: { eyebrow: 'Über uns', title: 'Stärke durch schnelle Produktion definieren', paragraph1: 'Seit 1977 liefern wir mit Produktionskraft von der Türkei in die Welt zuverlässige, langlebige Aufbauten für verschiedene Branchen.', paragraph2: 'Wir verbinden fortschrittliche Technik und Design mit der überlegenen Beständigkeit von {hardox}-Stahl und entwickeln jedes Produkt als Lösung für operative Effizienz.', cards: { arge: 'F&E & INGENIEURWESEN', ozelTasarim: 'INDIVIDUELLE DESIGNLÖSUNGEN', uretimTeknolojisi: 'FORTSCHRITTLICHE PRODUKTIONSTECHNOLOGIE', sertifikaliUretim: 'ZERTIFIZIERTE PRODUKTION' } },
      damperHero: { category: 'KIPPER', imageAlt: 'Özünlü Kipper Leistung und Beständigkeit', titleLine1: 'Ingenieursantwort', titleLine2: 'für harte Einsätze', description: 'Unsere Kippersysteme für harte Bau-, Bergbau- und Infrastrukturbedingungen arbeiten unterbrechungsfrei mit {hardox}-Muldenbeständigkeit, hoher Kippstabilität und schneller Entladekapazität.' },
      trailerHero: { category: 'SATTELANHÄNGER', imageAlt: 'Özünlü Sattelanhänger und Anhängersysteme', titleLine1: 'Leichtes Design', titleLine2: 'Starke Leistung', description: 'Bietet Transporteffizienz, hohen Wiederverkaufswert und langlebige Leistung.' },
      equipmentHero: { category: 'Ausrüstung', imageAlt: 'Özünlü Ausrüstung und Ersatzteile', titleLine1: 'Komplette Ausrüstung', titleLine2: 'für Ihre Flotte', description: 'Von Hydraulik bis EBS-Bremsen, Premium-Achsen bis LED-Beleuchtung — alle Anhängerausrüstung ist original zertifiziert und schnell aus großem Lager mit Özünlü-Garantie lieferbar.' },
      whyChooseUs: { eyebrow: 'WARUM ÖZÜNLÜ?', title: 'Warum Özünlü?', features: { '0': 'OEM-genehmigtes Aufbaudesign — kompatibel mit verschiedenen Fahrgestell- und Zugmaschinenkonfigurationen', '1': '{hardox}-zertifizierte Stahlverarbeitung und Roboterschweißtechnologie', '2': 'Volle Einhaltung aller Vorschriften und europäischer Sicherheitsstandards (ECE/ADR)', '3': 'Umfassende Garantie und unterbrechungsfreier Kundendienst', '4': '87 autorisierte Servicestellen in 50 Provinzen in der Türkei', '5': 'Strukturdesign, das hohen Wiederverkaufswert bewahrt', '6': 'Export in über 50 Länder — weltweit bewährte Qualität' } },
      mapPreview: { eyebrow: 'Servicelandkarte', title: 'Landesweites autorisiertes Servicenetz', description: 'Wo auch immer Ihr Fahrzeug ist — Özünlü ist bei Ihnen. 87 autorisierte Servicestellen in 50 Provinzen mit Original-Ersatzteilen und zertifizierten Technikern.' },
      partners: { title: 'Bevorzugt von Branchenführern', description: 'Unsere Aufbauten für schwere Nutzfahrzeuge arbeiten zuverlässig auf den härtesten Strecken in Bau, Bergbau und Fernverkehr.', footer: 'Zugelassener Aufbau-Lieferant' },
      products: { eyebrow: 'Unsere Produkte', title: 'AUFBAU', titleHighlight: 'LÖSUNGEN', subtitle: 'Aufbaulösungen in {hardox}-Stahlqualität für jeden Bedarf' }
    },
    damper: {
      hero: { imageAlt: 'Özünlü Kipperlösungen', titleLine1: 'KIPPER', titleLine2: 'LÖSUNGEN', description: 'Die Ingenieursantwort für harte Einsätze. {hardox}-Mulde, hohe Kippstabilität und optimierte Nutzlast — überlegene Leistung unter allen Bedingungen.' },
      products: { title: 'Fertige Kipperlösungen', subtitle: 'Die beliebtesten Konfigurationen für Sie vorbereitet. Ansehen oder sofort Angebot anfordern.' },
      features: { titleLine1: 'Perfekte Harmonie von', titleLine2: 'Kraft und Design', item01Title: 'Hardox® Mulde', item01Content: 'Muldenstruktur aus schwedischem {hardox}-Stahl definiert Industriestandards bei Verschleiß- und Stoßfestigkeit neu. Lange Lebensdauer, niedrige Wartungskosten.', item02Title: 'Aerodynamisches Engineering', item02Content: 'Im Windkanal optimierte Linien senken Kraftstoffverbrauch und Gesamtbetriebskosten.', item03Title: 'Hohe Nutzlastkapazität', item03Content: 'Leichtes Hochfestigkeits-Fahrgestell für maximale Transportkapazität innerhalb gesetzlicher Grenzen.', imageAlt: 'Özünlü Kipper Merkmale' },
      configurator: { title: 'Kipper-Konfigurator', subtitle: 'Geben Sie technische Details für einen leistungsstarken Kipper nach Maß an. Unser Expertenteam erstellt Ihr individuelles Angebot.' }
    },
    yariRomork: {
      hero: { imageAlt: 'Özünlü Sattelanhänger-Lösungen', titleLine1: 'SATTELANHÄNGER', titleLine2: 'LÖSUNGEN', description: 'Erleichtern Sie Schwerlasttransport mit Ingenieurskunst. {hardox}-Stahlstruktur, fortschrittliche Bremsentechnik und optimierte Lastverteilung — überlegene Leistung und Sicherheit auf jeder Strecke.' },
      products: { title: 'Fertige Sattelanhänger-Lösungen', subtitle: 'Die beliebtesten Branchenkonfigurationen für Sie vorbereitet. Angebot anfordern oder eigenes Fahrzeug gestalten.' },
      features: { titleLine1: 'Beherrschen Sie', titleLine2: 'jeden Moment auf der Straße', item01Title: 'Fortschrittliche Fahrgestelltechnik', item01Content: 'Hochfestes Fahrgestell mit Roboterschweißung; maximale Biegefestigkeit, minimiertes Gewicht, maximierte Nutzlast.', item02Title: 'Aktive Sicherheitssysteme', item02Content: 'EBS-Elektronikbremse und RSS-Kippschutz für Fahrsicherheit nach europäischen Standards.', item03Title: 'Vielseitige Anpassung', item03Content: 'Volle Flexibilität von Tieflader bis Containerlogistik, Schüttgut bis Speziallasten.', imageAlt: 'Sattelanhänger Merkmale' },
      configurator: { title: 'Sattelanhänger-Konfigurator', subtitle: 'Teilen Sie Details für den besten leistungsstarken Sattelanhänger für Ihre Flotte. Unser Ingenieurteam erstellt ein individuelles technisches Angebot.' }
    },
    ekEkipmanlar: {
      hero: { badge: 'AUSRÜSTUNG', imageAlt: 'Ausrüstungs- und Ersatzteillösungen', titleLine1: 'Komplette Ausrüstung', titleLine2: 'für Ihre Flotte', description: 'Von Hydraulik bis EBS-Bremsen, Premium-Achsen bis LED-Beleuchtung — alle Anhängerausrüstung original zertifiziert mit Özünlü-Garantie und schneller Lagerlieferung.' },
      categories: { title: 'Produktgruppen', subtitle: 'Original zertifizierte Ausrüstung, großer Lagerbestand und schnelle Lieferung an einem Ort.' },
      cta: { title: 'Teil nicht gefunden?', description: 'Kontaktieren Sie unser Expertenteam — wir beschaffen das benötigte Produkt für Sie.' },
      performance: { imageAlt: 'Anhängerausrüstung', titleLine1: 'Das richtige Teil,', titleLine2: 'maximale Leistung', description: 'Fahrzeugleistung hängt direkt von der Ausrüstungsqualität ab. Bei Özünlü liefern wir original zertifizierte Produkte weltweit bewährter Marken sofort aus großem Lager.' }
    },
    afterSales: {
      hero: { imageAlt: 'Kundendienst', badge: 'ÖZÜNLÜ GARANTIE', titleLine1: 'AN IHRER SEITE', titleLine2: 'IN JEDEM', titleLine3: 'MOMENT', description: 'Echte Partnerschaft beginnt nach dem Kauf. Wir schützen die Betriebskontinuität Ihres Fahrzeugs mit 87 autorisierten Servicestellen, 24/7 Support und Original-Ersatzteilen.' },
      services: { title: 'UNSERE DIENSTLEISTUNGEN', subtitle: 'Professionelle Lösungen, die den Fahrzeugwert schützen und die operative Effizienz steigern.' },
      documents: { eyebrow: 'Wissensdatenbank', title: 'TECHNISCHE', titleHighlight: 'DOKUMENTE', description: 'Bedienungsanleitungen, Wartungsverfahren und technische Spezifikationen für maximale Produkteffizienz — auf Türkisch und Englisch verfügbar.', searchPlaceholder: 'Dokumente suchen...', download: 'HERUNTERLADEN', noResults: 'Keine Dokumente gefunden.' },
      map: { title: 'Landesweites autorisiertes Servicenetz', description: '87 autorisierte Servicestellen in 50 Provinzen. Wählen Sie Ihre Stadt auf der Karte für sofortige Service- und Kontaktdaten.' }
    },
    contact: { form: { title: 'KONTAKT', subtitle: 'Kontaktieren Sie uns für Fragen und Projekte.', headOffice: 'HAUPTSITZ', submit: 'Senden' } }
  }
};

// Write en and de
for (const [locale, data] of Object.entries(translations)) {
  writeFileSync(join(messagesDir, `${locale}.json`), JSON.stringify(data, null, 2), 'utf8');
  console.log(`Written ${locale}.json`);
}
