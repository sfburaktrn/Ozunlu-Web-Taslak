import type { Locale } from './routing';

type PageSeoKey =
    | 'home'
    | 'damper'
    | 'yariRomork'
    | 'ekEkipmanlar'
    | 'afterSales'
    | 'contact'
    | 'legalKvkk'
    | 'legalPrivacy'
    | 'legalCookie';

export const pageKeywords: Record<Locale, Record<PageSeoKey, string>> = {
    tr: {
        home: 'Özünlü Damper, damper, Hardox, yarı römork, üst yapı, ağır ticari araç, çelik işleme, hidrolik sistem, satış sonrası, yetkili servis, BPW, Özkoç',
        damper: 'damper, Hardox damper, samosval, hidrolik damper, şantiye damperi, maden damperi, üst yapı, teklif',
        yariRomork: 'yarı römork, dorse, Hardox dorse, BPW dingil, Özkoç dingil, ağır yük taşımacılığı, yarı römork üreticisi',
        ekEkipmanlar: 'dorse yedek parça, hidrolik sistem, dingil, fren sistemi, EBS, LED aydınlatma, BPW, Özkoç, orijinal parça',
        afterSales: 'satış sonrası hizmet, yetkili servis, yedek parça, teknik destek, Özünlü servis, 7/24 destek',
        contact: 'Özünlü iletişim, damper teklif, satış, ihracat, İstanbul, Sultangazi',
        legalKvkk: 'KVKK, kişisel verilerin korunması, Özünlü Damper, veri sorumlusu',
        legalPrivacy: 'aydınlatma metni, kişisel veri, KVKK, gizlilik',
        legalCookie: 'çerez politikası, cookie, web sitesi, Özünlü',
    },
    en: {
        home: 'Özünlü Damper, tipper, Hardox, semi-trailer, superstructure, heavy commercial vehicle, steel processing, hydraulic, after-sales, authorized service, BPW',
        damper: 'tipper, Hardox tipper, dump truck body, hydraulic tipper, construction tipper, mining tipper, superstructure, quote',
        yariRomork: 'semi-trailer, trailer, Hardox trailer, BPW axle, Özkoç axle, heavy haulage, semi-trailer manufacturer',
        ekEkipmanlar: 'trailer spare parts, hydraulic system, axle, brake system, EBS, LED lighting, BPW, original parts',
        afterSales: 'after-sales service, authorized service, spare parts, technical support, Özünlü service, 24/7 support',
        contact: 'Özünlü contact, tipper quote, sales, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, personal data protection, Özünlü Damper, data controller',
        legalPrivacy: 'privacy notice, personal data, KVKK, clarification',
        legalCookie: 'cookie policy, cookies, website, Özünlü',
    },
    de: {
        home: 'Özünlü Damper, Kipper, Hardox, Auflieger, Aufbau, Schwerlastfahrzeug, Stahlverarbeitung, Hydraulik, Kundendienst, BPW',
        damper: 'Kipper, Hardox Kipper, Muldenkipper, Hydraulikkipper, Baustellenkipper, Bergbaukipper, Aufbau, Angebot',
        yariRomork: 'Auflieger, Sattelanhänger, Hardox Auflieger, BPW Achse, Özkoç Achse, Schwertransport, Auflieger Hersteller',
        ekEkipmanlar: 'Anhänger Ersatzteile, Hydrauliksystem, Achse, Bremssystem, EBS, LED Beleuchtung, BPW, Originalteile',
        afterSales: 'Kundendienst, autorisierte Werkstatt, Ersatzteile, technischer Support, Özünlü Service, 24/7 Support',
        contact: 'Özünlü Kontakt, Kipper Angebot, Vertrieb, Export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, Datenschutz, Özünlü Damper, DSGVO',
        legalPrivacy: 'Datenschutzhinweis, personenbezogene Daten',
        legalCookie: 'Cookie-Richtlinie, Cookies, Website',
    },
    bg: {
        home: 'Özünlü Damper, самосвал, Hardox, полуремарке, надстройка, тежкотоварно превозно средство, обработка на стомана, хидравлика, следпродажно обслужване, BPW',
        damper: 'самосвал, Hardox самосвал, хидравличен самосвал, строителен самосвал, минен самосвал, надстройка, оферта',
        yariRomork: 'полуремарке, ремарке, Hardox ремарке, BPW ос, Özkoç ос, тежък транспорт, производител на полуремаркета',
        ekEkipmanlar: 'резервни части за ремарке, хидравлична система, ос, спирачна система, EBS, LED осветление, BPW, оригинални части',
        afterSales: 'следпродажно обслужване, оторизиран сервиз, резервни части, техническа поддръжка, Özünlü сервиз',
        contact: 'Özünlü контакт, оферта за самосвал, продажби, експорт, Истанбул, Султангази',
        legalKvkk: 'KVKK, защита на личните данни, Özünlü Damper',
        legalPrivacy: 'известие за поверителност, лични данни',
        legalCookie: 'политика за бисквитки, cookies',
    },
    ro: {
        home: 'Özünlü Damper, basculantă, Hardox, semiremorcă, suprastructură, vehicul comercial greu, prelucrare oțel, hidraulică, service post-vânzare, BPW',
        damper: 'basculantă, Hardox basculantă, basculantă hidraulică, basculantă construcții, basculantă minieră, suprastructură, ofertă',
        yariRomork: 'semiremorcă, remorcă, Hardox remorcă, osie BPW, osie Özkoç, transport greu, producător semiremorci',
        ekEkipmanlar: 'piese de schimb remorcă, sistem hidraulic, osie, sistem frânare, EBS, iluminare LED, BPW, piese originale',
        afterSales: 'service post-vânzare, service autorizat, piese de schimb, suport tehnic, service Özünlü, suport 24/7',
        contact: 'contact Özünlü, ofertă basculantă, vânzări, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protecția datelor, Özünlü Damper, GDPR',
        legalPrivacy: 'notificare confidențialitate, date personale',
        legalCookie: 'politică cookie, cookies',
    },
    ar: {
        home: 'Özünlü Damper, قلاب, Hardox, نصف مقطورة, هيكل علوي, مركبة تجارية ثقيلة, معالجة الفولاذ, هيدروليك, ما بعد البيع, BPW',
        damper: 'قلاب, Hardox قلاب, قلاب هيدروليكي, قلاب بناء, قلاب تعدين, هيكل علوي, عرض سعر',
        yariRomork: 'نصف مقطورة, مقطورة, Hardox مقطورة, محور BPW, محور Özkoç, نقل ثقيل, مصنع نصف مقطورات',
        ekEkipmanlar: 'قطع غيار مقطورة, نظام هيدروليكي, محور, نظام فرامل, EBS, إضاءة LED, BPW, قطع أصلية',
        afterSales: 'خدمة ما بعد البيع, مركز خدمة معتمد, قطع غيار, دعم فني, خدمة Özünlü, دعم 24/7',
        contact: 'اتصال Özünlü, عرض سعر قلاب, مبيعات, تصدير, إسطنبول, سلطان غازي',
        legalKvkk: 'KVKK, حماية البيانات, Özünlü Damper',
        legalPrivacy: 'إشعار الخصوصية, بيانات شخصية',
        legalCookie: 'سياسة ملفات تعريف الارتباط, cookies',
    },
    fr: {
        home: 'Özünlü Damper, benne, Hardox, semi-remorque, superstructure, véhicule utilitaire lourd, acier, hydraulique, SAV, BPW',
        damper: 'benne, benne Hardox, benne hydraulique, benne chantier, benne minière, superstructure, devis',
        yariRomork: 'semi-remorque, remorque, Hardox remorque, essieu BPW, essieu Özkoç, transport lourd, fabricant semi-remorque',
        ekEkipmanlar: 'pièces détachées remorque, système hydraulique, essieu, freinage, EBS, éclairage LED, BPW, pièces d\'origine',
        afterSales: 'service après-vente, garage agréé, pièces détachées, support technique, service Özünlü, support 24/7',
        contact: 'contact Özünlü, devis benne, ventes, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protection des données, Özünlü Damper, RGPD',
        legalPrivacy: 'notice confidentialité, données personnelles',
        legalCookie: 'politique cookies, cookies',
    },
    es: {
        home: 'Özünlü Damper, volquete, Hardox, semirremolque, superestructura, vehículo comercial pesado, acero, hidráulica, posventa, BPW',
        damper: 'volquete, volquete Hardox, volquete hidráulico, volquete construcción, volquete minero, superestructura, presupuesto',
        yariRomork: 'semirremolque, remolque, Hardox remolque, eje BPW, eje Özkoç, transporte pesado, fabricante semirremolque',
        ekEkipmanlar: 'repuestos remolque, sistema hidráulico, eje, frenos, EBS, iluminación LED, BPW, piezas originales',
        afterSales: 'servicio posventa, taller autorizado, repuestos, soporte técnico, servicio Özünlü, soporte 24/7',
        contact: 'contacto Özünlü, presupuesto volquete, ventas, exportación, Estambul, Sultangazi',
        legalKvkk: 'KVKK, protección de datos, Özünlü Damper, RGPD',
        legalPrivacy: 'aviso privacidad, datos personales',
        legalCookie: 'política cookies, cookies',
    },
    it: {
        home: 'Özünlü Damper, ribaltabile, Hardox, semirimorchio, sovrastruttura, veicolo commerciale pesante, acciaio, idraulica, post-vendita, BPW',
        damper: 'ribaltabile, ribaltabile Hardox, ribaltabile idraulico, ribaltabile cantiere, ribaltabile minerario, sovrastruttura, preventivo',
        yariRomork: 'semirimorchio, rimorchio, Hardox rimorchio, asse BPW, asse Özkoç, trasporto pesante, produttore semirimorchi',
        ekEkipmanlar: 'ricambi rimorchio, sistema idraulico, asse, freni, EBS, illuminazione LED, BPW, ricambi originali',
        afterSales: 'servizio post-vendita, officina autorizzata, ricambi, supporto tecnico, servizio Özünlü, supporto 24/7',
        contact: 'contatti Özünlü, preventivo ribaltabile, vendite, export, Istanbul, Sultangazi',
        legalKvkk: 'KVKK, protezione dati, Özünlü Damper, GDPR',
        legalPrivacy: 'informativa privacy, dati personali',
        legalCookie: 'politica cookie, cookies',
    },
    ru: {
        home: 'Özünlü Damper, самосвал, Hardox, полуприцеп, надстройка, тяжёлый коммерческий автомобиль, обработка стали, гидравлика, сервис, BPW',
        damper: 'самосвал, Hardox самосвал, гидравлический самосвал, строительный самосвал, горный самосвал, надстройка, предложение',
        yariRomork: 'полуприцеп, прицеп, Hardox полуприцеп, ось BPW, ось Özkoç, тяжёлые перевозки, производитель полуприцепов',
        ekEkipmanlar: 'запчасти для прицепов, гидравлическая система, ось, тормозная система, EBS, LED освещение, BPW, оригинальные запчасти',
        afterSales: 'послепродажное обслуживание, авторизованный сервис, запчасти, техподдержка, сервис Özünlü, поддержка 24/7',
        contact: 'контакты Özünlü, предложение на самосвал, продажи, экспорт, Стамбул, Султангази',
        legalKvkk: 'KVKK, защита персональных данных, Özünlü Damper',
        legalPrivacy: 'уведомление о конфиденциальности, персональные данные',
        legalCookie: 'политика cookie, cookies',
    },
    uk: {
        home: 'Özünlü Damper, самоскид, Hardox, напівпричіп, надбудова, важкий комерційний автомобіль, обробка сталі, гідравліка, сервіс, BPW',
        damper: 'самоскид, Hardox самоскид, гідравлічний самоскид, будівельний самоскид, гірничий самоскид, надбудова, пропозиція',
        yariRomork: 'напівпричіп, причіп, Hardox напівпричіп, вісь BPW, вісь Özkoç, важкі перевезення, виробник напівпричепів',
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

