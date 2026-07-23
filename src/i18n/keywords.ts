import type { Locale } from './routing';

type PageSeoKey =
    | 'home'
    | 'damper'
    | 'yariRomork'
    | 'karlaMucadele'
    | 'ekEkipmanlar'
    | 'afterSales'
    | 'contact'
    | 'legalKvkk'
    | 'legalPrivacy'
    | 'legalCookie';

export const pageKeywords: Record<Locale, Record<PageSeoKey, string>> = {
    tr: {
        home: 'Özünlü Damper, damper üreticisi, Hardox damper, damperli yarı römork, dorse üreticisi, üst yapı imalatı, ağır ticari araç, onaylı üst yapı, karoser, İstanbul damper, kamyon damper, since 1977',
        damper: 'damper, Hardox damper, kamyon damperi, havuz damper, küvet damper, half-pipe damper, hafriyat damperi, hidrolik damper, şantiye damperi, maden damperi, damper üst yapı, damper fiyat, damper teklif',
        yariRomork: 'yarı römork, damperli dorse, küvet damper treyler, Hardox dorse, havuz dorse, hafriyat dorsesi, hafif dorse, BPW dingil, Özkoç dingil, EBS fren, ağır yük taşımacılığı, yarı römork üreticisi, dorse fiyat',
        karlaMucadele: 'karla mücadele, kar küreme aracı, ön kar bıçağı, yan bıçak, tuz serici, kış bakım aracı, Özünlü',
        ekEkipmanlar: 'dorse yedek parça, hidrolik sistem, dingil, fren sistemi, EBS, LED aydınlatma, BPW, Özkoç, orijinal parça',
        afterSales: 'satış sonrası hizmet, yetkili servis, yedek parça, teknik destek, Özünlü servis, 7/24 destek',
        contact: 'Özünlü iletişim, damper teklif, satış, ihracat, İstanbul, Sultangazi',
        legalKvkk: 'KVKK, kişisel verilerin korunması, Özünlü Damper, veri sorumlusu',
        legalPrivacy: 'aydınlatma metni, kişisel veri, KVKK, gizlilik',
        legalCookie: 'çerez politikası, cookie, web sitesi, Özünlü',
    },
    en: {
        home: 'Özünlü Damper, tipper manufacturer Turkey, Hardox tipper, tipping semi-trailer, dump trailer manufacturer, tipper body, body builder, heavy commercial vehicle superstructure, truck body manufacturer, since 1977',
        damper: 'tipper, Hardox tipper, tipper body, dump truck body, half-pipe tipper, box type tipper, hydraulic tipper, construction tipper, mining tipper, tipper manufacturer Turkey, quote',
        yariRomork: 'tipping semi-trailer, tipper semi-trailer, dump trailer, Hardox semi-trailer, half-pipe trailer, BPW axle, Özkoç axle, EBS brake, heavy haulage, semi-trailer manufacturer Turkey, tipper trailer price',
        karlaMucadele: 'snow fighting, snow removal, winter equipment, Özünlü',
        ekEkipmanlar: 'trailer spare parts, hydraulic system, axle, brake system, EBS, LED lighting, BPW, original parts',
        afterSales: 'after-sales service, authorized service, spare parts, technical support, Özünlü service, 24/7 support',
        contact: 'Özünlü contact, tipper quote, sales, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, personal data protection, Özünlü Damper, data controller',
        legalPrivacy: 'privacy notice, personal data, KVKK, clarification',
        legalCookie: 'cookie policy, cookies, website, Özünlü',
    },
    de: {
        home: 'Özünlü Damper, Kipper Hersteller Türkei, Hardox Kipper, Kippsattelanhänger, Kipperaufbau, Aufbauhersteller, Schwerlastfahrzeug, Muldenkipper, seit 1977',
        damper: 'Kipper, Hardox Kipper, Kipperaufbau, Muldenkipper, Halfpipe Kipper, Hydraulikkipper, Baustellenkipper, Bergbaukipper, Kipper Hersteller, Angebot',
        yariRomork: 'Kippsattelanhänger, Sattelkipper, Kippauflieger, Sattelanhänger, Hardox Auflieger, BPW Achse, Özkoç Achse, EBS Bremse, Schwertransport, Auflieger Hersteller Türkei',
        karlaMucadele: 'Winterdienst, Schneeräumung, Winterausrüstung, Özünlü',
        ekEkipmanlar: 'Anhänger Ersatzteile, Hydrauliksystem, Achse, Bremssystem, EBS, LED Beleuchtung, BPW, Originalteile',
        afterSales: 'Kundendienst, autorisierte Werkstatt, Ersatzteile, technischer Support, Özünlü Service, 24/7 Support',
        contact: 'Özünlü Kontakt, Kipper Angebot, Vertrieb, Export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, Datenschutz, Özünlü Damper, DSGVO',
        legalPrivacy: 'Datenschutzhinweis, personenbezogene Daten',
        legalCookie: 'Cookie-Richtlinie, Cookies, Website',
    },
    bg: {
        home: 'Özünlü Damper, производител на самосвали, Hardox самосвал, самосвално полуремарке, надстройка, производител Турция, тежкотоварно превозно средство, от 1977',
        damper: 'самосвал, Hardox самосвал, самосвален кош, half-pipe самосвал, хидравличен самосвал, строителен самосвал, минен самосвал, производител на самосвали, оферта',
        yariRomork: 'самосвално полуремарке, полуремарке, Hardox ремарке, BPW ос, Özkoç ос, EBS спирачки, тежък транспорт, производител на полуремаркета Турция',
        karlaMucadele: 'борба със снега, снегопочистване, Özünlü',
        ekEkipmanlar: 'резервни части за ремарке, хидравлична система, ос, спирачна система, EBS, LED осветление, BPW, оригинални части',
        afterSales: 'следпродажно обслужване, оторизиран сервиз, резервни части, техническа поддръжка, Özünlü сервиз',
        contact: 'Özünlü контакт, оферта за самосвал, продажби, експорт, Истанбул, Султангази',
        legalKvkk: 'KVKK, защита на личните данни, Özünlü Damper',
        legalPrivacy: 'известие за поверителност, лични данни',
        legalCookie: 'политика за бисквитки, cookies',
    },
    ro: {
        home: 'Özünlü Damper, producător bene basculante, Hardox basculantă, semiremorcă basculantă, suprastructură, producător Turcia, vehicul comercial greu, din 1977',
        damper: 'basculantă, Hardox basculantă, benă basculantă, half-pipe, basculantă hidraulică, basculantă construcții, basculantă minieră, producător bene, ofertă',
        yariRomork: 'semiremorcă basculantă, benă, Hardox remorcă, osie BPW, osie Özkoç, frâne EBS, transport greu, producător semiremorci Turcia',
        karlaMucadele: 'deszăpezire, echipamente iarnă, Özünlü',
        ekEkipmanlar: 'piese de schimb remorcă, sistem hidraulic, osie, sistem frânare, EBS, iluminare LED, BPW, piese originale',
        afterSales: 'service post-vânzare, service autorizat, piese de schimb, suport tehnic, service Özünlü, suport 24/7',
        contact: 'contact Özünlü, ofertă basculantă, vânzări, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protecția datelor, Özünlü Damper, GDPR',
        legalPrivacy: 'notificare confidențialitate, date personale',
        legalCookie: 'politică cookie, cookies',
    },
    ar: {
        home: 'Özünlü Damper, مصنع قلابات, Hardox قلاب, نصف مقطورة قلابة, هيكل علوي, مصنع تركيا, مركبة تجارية ثقيلة, منذ 1977',
        damper: 'قلاب, Hardox قلاب, هيكل قلاب, قلاب نصف أنبوبي, قلاب هيدروليكي, قلاب بناء, قلاب تعدين, مصنع قلابات تركيا, عرض سعر',
        yariRomork: 'نصف مقطورة قلابة, مقطورة قلابة, Hardox مقطورة, محور BPW, محور Özkoç, فرامل EBS, نقل ثقيل, مصنع نصف مقطورات تركيا',
        karlaMucadele: 'مكافحة الثلوج, معدات الشتاء, Özünlü',
        ekEkipmanlar: 'قطع غيار مقطورة, نظام هيدروليكي, محور, نظام فرامل, EBS, إضاءة LED, BPW, قطع أصلية',
        afterSales: 'خدمة ما بعد البيع, مركز خدمة معتمد, قطع غيار, دعم فني, خدمة Özünlü, دعم 24/7',
        contact: 'اتصال Özünlü, عرض سعر قلاب, مبيعات, تصدير, إسطنبول, سلطان غازي',
        legalKvkk: 'KVKK, حماية البيانات, Özünlü Damper',
        legalPrivacy: 'إشعار الخصوصية, بيانات شخصية',
        legalCookie: 'سياسة ملفات تعريف الارتباط, cookies',
    },
    fr: {
        home: 'Özünlü Damper, fabricant de bennes, benne Hardox, semi-remorque benne, benne TP, carrossier, superstructure, fabricant Turquie, véhicule utilitaire lourd, depuis 1977',
        damper: 'benne, benne Hardox, benne camion, benne demi-ronde, half-pipe, benne hydraulique, benne chantier, benne minière, fabricant bennes Turquie, devis',
        yariRomork: 'semi-remorque benne, benne TP, remorque Hardox, essieu BPW, essieu Özkoç, freins EBS, transport lourd, fabricant semi-remorque Turquie',
        karlaMucadele: 'déneigement, équipements hiver, Özünlü',
        ekEkipmanlar: 'pièces détachées remorque, système hydraulique, essieu, freinage, EBS, éclairage LED, BPW, pièces d\'origine',
        afterSales: 'service après-vente, garage agréé, pièces détachées, support technique, service Özünlü, support 24/7',
        contact: 'contact Özünlü, devis benne, ventes, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protection des données, Özünlü Damper, RGPD',
        legalPrivacy: 'notice confidentialité, données personnelles',
        legalCookie: 'politique cookies, cookies',
    },
    es: {
        home: 'Özünlü Damper, fabricante de volquetes, volquete Hardox, semirremolque basculante, bañera, carrocero, superestructura, fabricante Turquía, vehículo comercial pesado, desde 1977',
        damper: 'volquete, volquete Hardox, caja volquete, bañera half-pipe, volquete hidráulico, volquete construcción, volquete minero, fabricante volquetes Turquía, presupuesto',
        yariRomork: 'semirremolque basculante, bañera, remolque Hardox, eje BPW, eje Özkoç, frenos EBS, transporte pesado, fabricante semirremolques Turquía',
        karlaMucadele: 'quitanieves, equipos invierno, Özünlü',
        ekEkipmanlar: 'repuestos remolque, sistema hidráulico, eje, frenos, EBS, iluminación LED, BPW, piezas originales',
        afterSales: 'servicio posventa, taller autorizado, repuestos, soporte técnico, servicio Özünlü, soporte 24/7',
        contact: 'contacto Özünlü, presupuesto volquete, ventas, exportación, Estambul, Sultangazi',
        legalKvkk: 'KVKK, protección de datos, Özünlü Damper, RGPD',
        legalPrivacy: 'aviso privacidad, datos personales',
        legalCookie: 'política cookies, cookies',
    },
    it: {
        home: 'Özünlü Damper, produttore ribaltabili, ribaltabile Hardox, semirimorchio ribaltabile, vasca, allestitore, sovrastruttura, produttore Turchia, veicolo commerciale pesante, dal 1977',
        damper: 'ribaltabile, ribaltabile Hardox, cassone ribaltabile, vasca half-pipe, ribaltabile idraulico, ribaltabile cantiere, ribaltabile minerario, produttore ribaltabili Turchia, preventivo',
        yariRomork: 'semirimorchio ribaltabile, vasca, rimorchio Hardox, asse BPW, asse Özkoç, freni EBS, trasporto pesante, produttore semirimorchi Turchia',
        karlaMucadele: 'antineve, attrezzature invernali, Özünlü',
        ekEkipmanlar: 'ricambi rimorchio, sistema idraulico, asse, freni, EBS, illuminazione LED, BPW, ricambi originali',
        afterSales: 'servizio post-vendita, officina autorizzata, ricambi, supporto tecnico, servizio Özünlü, supporto 24/7',
        contact: 'contatti Özünlü, preventivo ribaltabile, vendite, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protezione dati, Özünlü Damper, GDPR',
        legalPrivacy: 'informativa privacy, dati personali',
        legalCookie: 'politica cookie, cookies',
    },
    ru: {
        home: 'Özünlü Damper, производитель самосвалов, Hardox самосвал, самосвальный полуприцеп, самосвальный кузов, надстройка, производитель Турция, тяжёлый коммерческий автомобиль, с 1977 года',
        damper: 'самосвал, Hardox самосвал, самосвальный кузов, полукруглый кузов, half-pipe, гидравлический самосвал, строительный самосвал, горный самосвал, производитель самосвалов Турция, предложение',
        yariRomork: 'самосвальный полуприцеп, полуприцеп, Hardox полуприцеп, ось BPW, ось Özkoç, тормоза EBS, тяжёлые перевозки, производитель полуприцепов Турция',
        karlaMucadele: 'борьба со снегом, снегоуборка, Özünlü',
        ekEkipmanlar: 'запчасти для прицепов, гидравлическая система, ось, тормозная система, EBS, LED освещение, BPW, оригинальные запчасти',
        afterSales: 'послепродажное обслуживание, авторизованный сервис, запчасти, техподдержка, сервис Özünlü, поддержка 24/7',
        contact: 'контакты Özünlü, предложение на самосвал, продажи, экспорт, Стамбул, Султангази',
        legalKvkk: 'KVKK, защита персональных данных, Özünlü Damper',
        legalPrivacy: 'уведомление о конфиденциальности, персональные данные',
        legalCookie: 'политика cookie, cookies',
    },
    uk: {
        home: 'Özünlü Damper, виробник самоскидів, Hardox самоскид, самоскидний напівпричіп, самоскидний кузов, надбудова, виробник Туреччина, важкий комерційний автомобіль, з 1977 року',
        damper: 'самоскид, Hardox самоскид, самоскидний кузов, напівкруглий кузов, half-pipe, гідравлічний самоскид, будівельний самоскид, гірничий самоскид, виробник самоскидів Туреччина, пропозиція',
        yariRomork: 'самоскидний напівпричіп, напівпричіп, Hardox напівпричіп, вісь BPW, вісь Özkoç, гальма EBS, важкі перевезення, виробник напівпричепів Туреччина',
        karlaMucadele: 'боротьба зі снігом, снігоочищення, Özünlü',
        ekEkipmanlar: 'запчастини для причепів, гідравлічна система, вісь, гальмівна система, EBS, LED освітлення, BPW, оригінальні запчастини',
        afterSales: 'післяпродажне обслуговування, авторизований сервіс, запчастини, техпідтримка, сервіс Özünlü, підтримка 24/7',
        contact: 'контакти Özünlü, пропозиція на самоскид, продажі, експорт, Стамбул, Султангазі',
        legalKvkk: 'KVKK, захист персональних даних, Özünlü Damper',
        legalPrivacy: 'повідомлення про конфіденційність, персональні дані',
        legalCookie: 'політика cookie, cookies',
    },
};

export function getPageKeywords(locale: Locale, pageKey: PageSeoKey): string {
    return pageKeywords[locale][pageKey];
}

