/**
 * Syncs copy changes from tr.json session across locale message files.
 * Run: node scripts/sync-locale-copy-updates.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const LOCALES = ['en', 'de', 'fr', 'es', 'it', 'ro', 'bg', 'ru', 'uk', 'ar'];

/** @type {Record<string, Record<string, string>>} */
const COPY = {
  en: {
    'home.damperHero.description':
      'Our <strong>tipper</strong> systems developed for tough field conditions deliver uninterrupted field performance with <hardox></hardox> body durability, high tipping stability and fast unloading capacity.',
    'home.equipmentHero.titleLine1': 'Integrated',
    'home.equipmentHero.titleLine2': 'Equipment Solutions',
    'home.whyChooseUs.title': 'A Brand Trusted with Confidence',
    'home.whyChooseUs.features.5':
      'Structural design that preserves high <strong>resale</strong> value',
    'home.whyChooseUs.features.6':
      'Export to more than 50 countries — globally proven quality',
    'home.partners.description': '',
    'damper.products.title': 'Tipper',
    'damper.products.subtitle': 'Explore and request a quote now.',
    'damper.configurator.badge': 'TIPPER',
    'damper.configurator.title': 'Request a Quote',
    'damper.configurator.subtitle':
      'Specify technical details for a high-performance tipper tailored to your needs. Our expert team will prepare your custom quote shortly.',
    'damper.items.d21.description':
      'Balanced weight and efficient operating performance in compact use scenarios.',
    'yariRomork.products.title': 'Semi-Trailer',
    'yariRomork.products.subtitle': 'Explore and request a quote now.',
    'yariRomork.configurator.badge': 'Semi-trailer',
    'yariRomork.configurator.title': 'Semi-trailer',
    'yariRomork.configurator.subtitle':
      'Share details to design the best high-performance semi-trailer for your fleet. Our engineering team will prepare a custom technical quote.',
    'ekEkipmanlar.hero.titleLine1': 'Integrated',
    'ekEkipmanlar.hero.titleLine2': 'Equipment Solutions',
    'ekEkipmanlar.cta.description':
      'Contact our expert team and let us determine the best solution for your needs together.',
    'ekEkipmanlar.performance.description':
      'We deliver original certified products from globally proven brands in the shortest time with our extensive stock advantage.',
    'afterSales.services.teknikDestek.title': 'Fast technical support',
    'afterSales.services.teknikDestek.description':
      'Our expert technical support team provides a solution to your request as quickly as possible.',
    'afterSales.documents.eyebrow': 'Resources',
  },
  de: {
    'home.damperHero.description':
      'Unsere für raue Feldbedingungen entwickelten <strong>Kipper</strong>-Systeme arbeiten mit <hardox></hardox>-Kastenfestigkeit, hoher Kippstabilität und schneller Entladekapazität zuverlässig im Einsatz.',
    'home.equipmentHero.titleLine1': 'Integriert',
    'home.equipmentHero.titleLine2': 'Ausrüstungslösungen',
    'home.whyChooseUs.title': 'Eine mit Vertrauen gewählte Marke',
    'home.whyChooseUs.features.5':
      'Strukturelles Design, das einen hohen <strong>Wiederverkaufs</strong>wert sichert',
    'home.whyChooseUs.features.6':
      'Export in mehr als 50 Länder — weltweit bewährte Qualität',
    'home.partners.description': '',
    'damper.products.title': 'Kipper',
    'damper.products.subtitle': 'Ansehen und sofort ein Angebot anfordern.',
    'damper.configurator.badge': 'KIPPER',
    'damper.configurator.title': 'Angebot anfordern',
    'damper.configurator.subtitle':
      'Geben Sie technische Details für einen leistungsstarken Kipper nach Maß an. Unser Expertenteam erstellt Ihr individuelles Angebot.',
    'damper.items.d21.description':
      'Ausgewogenes Gewicht und effiziente Betriebsleistung in kompakten Einsatzszenarien.',
    'yariRomork.products.title': 'Sattelanhänger',
    'yariRomork.products.subtitle': 'Ansehen und sofort ein Angebot anfordern.',
    'yariRomork.configurator.badge': 'Sattelanhänger',
    'yariRomork.configurator.title': 'Sattelanhänger',
    'yariRomork.configurator.subtitle':
      'Teilen Sie Details für den besten leistungsstarken Sattelanhänger für Ihre Flotte. Unser Ingenieurteam erstellt ein individuelles technisches Angebot.',
    'ekEkipmanlar.hero.titleLine1': 'Integriert',
    'ekEkipmanlar.hero.titleLine2': 'Ausrüstungslösungen',
    'ekEkipmanlar.cta.description':
      'Kontaktieren Sie unser Expertenteam — wir finden gemeinsam die passende Lösung für Ihren Bedarf.',
    'ekEkipmanlar.performance.description':
      'Original zertifizierte Produkte weltweit bewährter Marken liefern wir dank großem Lagerbestand in kürzester Zeit.',
    'afterSales.services.teknikDestek.title': 'Schneller technischer Support',
    'afterSales.services.teknikDestek.description':
      'Unser technisches Expertenteam findet so schnell wie möglich eine Lösung für Ihre Anfrage.',
    'afterSales.documents.eyebrow': 'Ressourcen',
  },
  fr: {
    'home.damperHero.description':
      'Nos systèmes de <strong>benne</strong> conçus pour des conditions de chantier exigeantes assurent une performance continue grâce à la résistance <hardox></hardox>, une grande stabilité au basculement et une décharge rapide.',
    'home.equipmentHero.titleLine1': 'Intégré',
    'home.equipmentHero.titleLine2': 'Solutions d’équipement',
    'home.whyChooseUs.title': 'Une marque choisie en toute confiance',
    'home.whyChooseUs.features.5':
      'Conception structurelle préservant une forte valeur de <strong>revente</strong>',
    'home.whyChooseUs.features.6':
      'Export vers plus de 50 pays — qualité éprouvée à l’échelle mondiale',
    'home.partners.description': '',
    'damper.products.title': 'Benne',
    'damper.products.subtitle': 'Découvrez et demandez un devis immédiatement.',
    'damper.configurator.badge': 'BENNE',
    'damper.configurator.title': 'Demander un devis',
    'damper.configurator.subtitle':
      'Précisez les détails techniques pour une benne haute performance adaptée à vos besoins. Notre équipe prépare votre devis personnalisé.',
    'damper.items.d21.description':
      'Poids équilibré et performance d’exploitation efficace dans les scénarios d’usage compacts.',
    'yariRomork.products.title': 'Semi-remorque',
    'yariRomork.products.subtitle': 'Découvrez et demandez un devis immédiatement.',
    'yariRomork.configurator.badge': 'Semi-remorque',
    'yariRomork.configurator.title': 'Semi-remorque',
    'yariRomork.configurator.subtitle':
      'Partagez les détails pour concevoir la meilleure semi-remorque haute performance pour votre flotte. Notre équipe d’ingénieurs prépare un devis technique sur mesure.',
    'ekEkipmanlar.hero.titleLine1': 'Intégré',
    'ekEkipmanlar.hero.titleLine2': 'Solutions d’équipement',
    'ekEkipmanlar.cta.description':
      'Contactez notre équipe d’experts ; définissons ensemble la solution la plus adaptée à vos besoins.',
    'ekEkipmanlar.performance.description':
      'Nous livrons des produits originaux certifiés de marques reconnues mondialement, dans les meilleurs délais grâce à notre large stock.',
    'afterSales.services.teknikDestek.title': 'Support technique rapide',
    'afterSales.services.teknikDestek.description':
      'Notre équipe de support technique trouve une solution à votre demande dans les plus brefs délais.',
    'afterSales.documents.eyebrow': 'Ressources',
  },
  es: {
    'home.damperHero.description':
      'Nuestros sistemas de <strong>volquete</strong> desarrollados para condiciones de obra exigentes ofrecen rendimiento continuo con resistencia <hardox></hardox>, alta estabilidad de volcado y capacidad de descarga rápida.',
    'home.equipmentHero.titleLine1': 'Integrado',
    'home.equipmentHero.titleLine2': 'Soluciones de equipamiento',
    'home.whyChooseUs.title': 'Una marca elegida con confianza',
    'home.whyChooseUs.features.5':
      'Diseño estructural que preserva un alto valor de <strong>reventa</strong>',
    'home.whyChooseUs.features.6':
      'Exportación a más de 50 países — calidad probada a escala global',
    'home.partners.description': '',
    'damper.products.title': 'Volquete',
    'damper.products.subtitle': 'Explore y solicite presupuesto ahora.',
    'damper.configurator.badge': 'VOLQUETE',
    'damper.configurator.title': 'Solicitar presupuesto',
    'damper.configurator.subtitle':
      'Indique los detalles técnicos para un volquete de alto rendimiento a su medida. Nuestro equipo preparará su presupuesto personalizado.',
    'damper.items.d21.description':
      'Peso equilibrado y rendimiento operativo eficiente en escenarios de uso compacto.',
    'yariRomork.products.title': 'Semirremolque',
    'yariRomork.products.subtitle': 'Explore y solicite presupuesto ahora.',
    'yariRomork.configurator.badge': 'Semirremolque',
    'yariRomork.configurator.title': 'Semirremolque',
    'yariRomork.configurator.subtitle':
      'Comparta los detalles para diseñar el mejor semirremolque de alto rendimiento para su flota. Nuestro equipo de ingeniería preparará un presupuesto técnico a medida.',
    'ekEkipmanlar.hero.titleLine1': 'Integrado',
    'ekEkipmanlar.hero.titleLine2': 'Soluciones de equipamiento',
    'ekEkipmanlar.cta.description':
      'Contacte con nuestro equipo experto y definamos juntos la solución más adecuada a sus necesidades.',
    'ekEkipmanlar.performance.description':
      'Entregamos productos originales certificados de marcas reconocidas mundialmente en el menor tiempo gracias a nuestro amplio stock.',
    'afterSales.services.teknikDestek.title': 'Soporte técnico rápido',
    'afterSales.services.teknikDestek.description':
      'Nuestro equipo de soporte técnico ofrece una solución a su solicitud lo antes posible.',
    'afterSales.documents.eyebrow': 'Recursos',
  },
  it: {
    'home.damperHero.description':
      'I nostri sistemi <strong>ribaltabili</strong> sviluppati per condizioni di cantiere difficili garantiscono prestazioni continue con resistenza <hardox></hardox>, alta stabilità di ribaltamento e scarico rapido.',
    'home.equipmentHero.titleLine1': 'Integrato',
    'home.equipmentHero.titleLine2': 'Soluzioni di equipaggiamento',
    'home.whyChooseUs.title': 'Un marchio scelto con fiducia',
    'home.whyChooseUs.features.5':
      'Design strutturale che preserva un elevato valore di <strong>rivendita</strong>',
    'home.whyChooseUs.features.6':
      'Export in più di 50 paesi — qualità comprovata a livello globale',
    'home.partners.description': '',
    'damper.products.title': 'Ribaltabile',
    'damper.products.subtitle': 'Scopri e richiedi subito un preventivo.',
    'damper.configurator.badge': 'RIBALTABILE',
    'damper.configurator.title': 'Richiedi preventivo',
    'damper.configurator.subtitle':
      'Indica i dettagli tecnici per un ribaltabile ad alte prestazioni su misura. Il nostro team preparerà il preventivo personalizzato.',
    'damper.items.d21.description':
      'Peso equilibrato e prestazioni operative efficienti negli scenari d’uso compatti.',
    'yariRomork.products.title': 'Semirimorchio',
    'yariRomork.products.subtitle': 'Scopri e richiedi subito un preventivo.',
    'yariRomork.configurator.badge': 'Semirimorchio',
    'yariRomork.configurator.title': 'Semirimorchio',
    'yariRomork.configurator.subtitle':
      'Condividi i dettagli per progettare il miglior semirimorchio ad alte prestazioni per la tua flotta. Il nostro team tecnico preparerà un preventivo su misura.',
    'ekEkipmanlar.hero.titleLine1': 'Integrato',
    'ekEkipmanlar.hero.titleLine2': 'Soluzioni di equipaggiamento',
    'ekEkipmanlar.cta.description':
      'Contatta il nostro team di esperti e definiamo insieme la soluzione più adatta alle tue esigenze.',
    'ekEkipmanlar.performance.description':
      'Consegniamo prodotti originali certificati di marchi riconosciuti a livello mondiale nel minor tempo possibile grazie al nostro ampio stock.',
    'afterSales.services.teknikDestek.title': 'Supporto tecnico rapido',
    'afterSales.services.teknikDestek.description':
      'Il nostro team di supporto tecnico trova una soluzione alla tua richiesta nel minor tempo possibile.',
    'afterSales.documents.eyebrow': 'Risorse',
  },
  ro: {
    'home.damperHero.description':
      'Sistemele noastre de <strong>basculantă</strong> dezvoltate pentru condiții de șantier dificile asigură performanță continuă cu rezistență <hardox></hardox>, stabilitate ridicată la basculare și descărcare rapidă.',
    'home.equipmentHero.titleLine1': 'Integrat',
    'home.equipmentHero.titleLine2': 'Soluții de echipamente',
    'home.whyChooseUs.title': 'Un brand ales cu încredere',
    'home.whyChooseUs.features.5':
      'Design structural care păstrează o valoare ridicată de <strong>revânzare</strong>',
    'home.whyChooseUs.features.6':
      'Export în peste 50 de țări — calitate dovedită la nivel global',
    'home.partners.description': '',
    'damper.products.title': 'Basculantă',
    'damper.products.subtitle': 'Explorați și solicitați ofertă acum.',
    'damper.configurator.badge': 'BASCULANTĂ',
    'damper.configurator.title': 'Solicitați ofertă',
    'damper.configurator.subtitle':
      'Specificați detaliile tehnice pentru o basculantă performantă adaptată nevoilor dvs. Echipa noastră pregătește oferta personalizată.',
    'damper.items.d21.description':
      'Greutate echilibrată și performanță operațională eficientă în scenarii de utilizare compactă.',
    'yariRomork.products.title': 'Semiremorcă',
    'yariRomork.products.subtitle': 'Explorați și solicitați ofertă acum.',
    'yariRomork.configurator.badge': 'Semiremorcă',
    'yariRomork.configurator.title': 'Semiremorcă',
    'yariRomork.configurator.subtitle':
      'Împărtășiți detaliile pentru cea mai bună semiremorcă performantă pentru flota dvs. Echipa noastră de ingineri pregătește o ofertă tehnică personalizată.',
    'ekEkipmanlar.hero.titleLine1': 'Integrat',
    'ekEkipmanlar.hero.titleLine2': 'Soluții de echipamente',
    'ekEkipmanlar.cta.description':
      'Contactați echipa noastră de experți și stabilim împreună cea mai potrivită soluție pentru nevoile dvs.',
    'ekEkipmanlar.performance.description':
      'Livrăm produse originale certificate de mărci recunoscute la nivel mondial în cel mai scurt timp, datorită stocului nostru extins.',
    'afterSales.services.teknikDestek.title': 'Suport tehnic rapid',
    'afterSales.services.teknikDestek.description':
      'Echipa noastră de suport tehnic oferă o soluție pentru solicitarea dvs. cât mai rapid posibil.',
    'afterSales.documents.eyebrow': 'Resurse',
  },
  bg: {
    'home.damperHero.description':
      'Нашите <strong>самосвални</strong> системи, разработени за тежки полеви условия, осигуряват непрекъсната работа с издръжливост <hardox></hardox>, висока устойчивост при разтоварване и бързо разтоварване.',
    'home.equipmentHero.titleLine1': 'Интегрирани',
    'home.equipmentHero.titleLine2': 'Решения за оборудване',
    'home.whyChooseUs.title': 'Марка, избрана с доверие',
    'home.whyChooseUs.features.5':
      'Конструктивен дизайн, запазващ висока <strong>препродажна</strong> стойност',
    'home.whyChooseUs.features.6':
      'Експорт в над 50 държави — доказано качество в световен мащаб',
    'home.partners.description': '',
    'damper.products.title': 'Самосвал',
    'damper.products.subtitle': 'Разгледайте и поискайте оферта сега.',
    'damper.configurator.badge': 'САМОСВАЛ',
    'damper.configurator.title': 'Поискайте оферта',
    'damper.configurator.subtitle':
      'Посочете технически детайли за високопроизводителен самосвал по вашите нужди. Нашият екип ще подготви персонализирана оферта.',
    'damper.items.d21.description':
      'Балансирано тегло и ефективна експлоатационна производителност при компактни сценарии на употреба.',
    'yariRomork.products.title': 'Полуремарке',
    'yariRomork.products.subtitle': 'Разгледайте и поискайте оферта сега.',
    'yariRomork.configurator.badge': 'Полуремарке',
    'yariRomork.configurator.title': 'Полуремарке',
    'yariRomork.configurator.subtitle':
      'Споделете детайли за най-доброто високопроизводително полуремарке за вашия автопарк. Нашият инженерен екип ще подготви персонализирана техническа оферта.',
    'ekEkipmanlar.hero.titleLine1': 'Интегрирани',
    'ekEkipmanlar.hero.titleLine2': 'Решения за оборудване',
    'ekEkipmanlar.cta.description':
      'Свържете се с нашия експертен екип и заедно да определим най-подходящото решение за вашите нужди.',
    'ekEkipmanlar.performance.description':
      'Доставяме оригинални сертифицирани продукти на световно признати марки в най-кратък срок благодарение на широкия ни склад.',
    'afterSales.services.teknikDestek.title': 'Бърза техническа поддръжка',
    'afterSales.services.teknikDestek.description':
      'Нашият експертен технически екип предлага решение на вашата заявка възможно най-бързо.',
    'afterSales.documents.eyebrow': 'Ресурси',
  },
  ru: {
    'home.damperHero.description':
      'Наши <strong>самосвальные</strong> системы для суровых полевых условий обеспечивают бесперебойную работу благодаря прочности кузова <hardox></hardox>, высокой устойчивости при опрокидывании и быстрой разгрузке.',
    'home.equipmentHero.titleLine1': 'Интегрированные',
    'home.equipmentHero.titleLine2': 'решения по оборудованию',
    'home.whyChooseUs.title': 'Бренд, которому доверяют',
    'home.whyChooseUs.features.5':
      'Конструкция, сохраняющая высокую <strong>остаточную</strong> стоимость',
    'home.whyChooseUs.features.6':
      'Экспорт более чем в 50 стран — качество, проверенное во всём мире',
    'home.partners.description': '',
    'damper.products.title': 'Самосвал',
    'damper.products.subtitle': 'Изучите модели и запросите предложение сейчас.',
    'damper.configurator.badge': 'САМОСВАЛ',
    'damper.configurator.title': 'Запросить предложение',
    'damper.configurator.subtitle':
      'Укажите технические детали для высокопроизводительного самосвала под ваши задачи. Наша команда подготовит индивидуальное предложение.',
    'damper.items.d21.description':
      'Сбалансированная масса и эффективная эксплуатационная производительность в компактных сценариях использования.',
    'yariRomork.products.title': 'Полуприцеп',
    'yariRomork.products.subtitle': 'Изучите модели и запросите предложение сейчас.',
    'yariRomork.configurator.badge': 'Полуприцеп',
    'yariRomork.configurator.title': 'Полуприцеп',
    'yariRomork.configurator.subtitle':
      'Укажите детали для лучшего высокопроизводительного полуприцепа для вашего автопарка. Наша инженерная команда подготовит техническое предложение.',
    'ekEkipmanlar.hero.titleLine1': 'Интегрированные',
    'ekEkipmanlar.hero.titleLine2': 'решения по оборудованию',
    'ekEkipmanlar.cta.description':
      'Свяжитесь с нашей командой экспертов — вместе подберём оптимальное решение для ваших задач.',
    'ekEkipmanlar.performance.description':
      'Поставляем оригинальную сертифицированную продукцию всемирно признанных брендов в кратчайшие сроки благодаря широкому складу.',
    'afterSales.services.teknikDestek.title': 'Быстрая техническая поддержка',
    'afterSales.services.teknikDestek.description':
      'Наша команда технической поддержки максимально быстро находит решение по вашему запросу.',
    'afterSales.documents.eyebrow': 'Ресурсы',
  },
  uk: {
    'home.damperHero.description':
      'Наші <strong>самоскидні</strong> системи для суворих польових умов забезпечують безперервну роботу завдяки міцності кузова <hardox></hardox>, високій стійкості при перевантаженні та швидкому розвантаженню.',
    'home.equipmentHero.titleLine1': 'Інтегровані',
    'home.equipmentHero.titleLine2': 'рішення з обладнання',
    'home.whyChooseUs.title': 'Бренд, якому довіряють',
    'home.whyChooseUs.features.5':
      'Конструкція, що зберігає високу <strong>залишкову</strong> вартість',
    'home.whyChooseUs.features.6':
      'Експорт у понад 50 країн — якість, перевірена у всьому світі',
    'home.partners.description': '',
    'damper.products.title': 'Самоскид',
    'damper.products.subtitle': 'Ознайомтеся та замовте пропозицію зараз.',
    'damper.configurator.badge': 'САМОСКИД',
    'damper.configurator.title': 'Замовити пропозицію',
    'damper.configurator.subtitle':
      'Вкажіть технічні деталі для високопродуктивного самоскида під ваші потреби. Наша команда підготує індивідуальну пропозицію.',
    'damper.items.d21.description':
      'Збалансована вага та ефективна експлуатаційна продуктивність у компактних сценаріях використання.',
    'yariRomork.products.title': 'Напівпричіп',
    'yariRomork.products.subtitle': 'Ознайомтеся та замовте пропозицію зараз.',
    'yariRomork.configurator.badge': 'Напівпричіп',
    'yariRomork.configurator.title': 'Напівпричіп',
    'yariRomork.configurator.subtitle':
      'Поділіться деталями для найкращого високопродуктивного напівпричепа для вашого автопарку. Наша інженерна команда підготує технічну пропозицію.',
    'ekEkipmanlar.hero.titleLine1': 'Інтегровані',
    'ekEkipmanlar.hero.titleLine2': 'рішення з обладнання',
    'ekEkipmanlar.cta.description':
      'Зв’яжіться з нашою командою експертів — разом визначимо найкраще рішення для ваших потреб.',
    'ekEkipmanlar.performance.description':
      'Постачаємо оригінальну сертифіковану продукцію світових брендів у найкоротші терміни завдяки широкому складу.',
    'afterSales.services.teknikDestek.title': 'Швидка технічна підтримка',
    'afterSales.services.teknikDestek.description':
      'Наша команда технічної підтримки якомога швидше знаходить рішення для вашого запиту.',
    'afterSales.documents.eyebrow': 'Ресурси',
  },
  ar: {
    'home.damperHero.description':
      'أنظمة <strong>القلاب</strong> لدينا المطوّرة لظروف المواقع القاسية تعمل باستمرار بفضل متانة هيكل <hardox></hardox> واستقرار عالٍ عند الرفع وقدرة تفريغ سريعة.',
    'home.equipmentHero.titleLine1': 'متكامل',
    'home.equipmentHero.titleLine2': 'حلول المعدات',
    'home.whyChooseUs.title': 'علامة يُوثق بها',
    'home.whyChooseUs.features.5':
      'تصميم هيكلي يحافظ على قيمة <strong>إعادة البيع</strong> العالية',
    'home.whyChooseUs.features.6':
      'تصدير إلى أكثر من 50 دولة — جودة مثبتة عالمياً',
    'home.partners.description': '',
    'damper.products.title': 'قلاب',
    'damper.products.subtitle': 'استكشف واطلب عرض سعر الآن.',
    'damper.configurator.badge': 'قلاب',
    'damper.configurator.title': 'اطلب عرض سعر',
    'damper.configurator.subtitle':
      'حدد التفاصيل الفنية لحل قلاب عالي الأداء وفق احتياجاتك. يعد فريقنا عرضاً مخصصاً لك.',
    'damper.items.d21.description':
      'وزن متوازن وأداء تشغيلي فعّال في سيناريوهات الاستخدام المدمجة.',
    'yariRomork.products.title': 'نصف مقطورة',
    'yariRomork.products.subtitle': 'استكشف واطلب عرض سعر الآن.',
    'yariRomork.configurator.badge': 'نصف مقطورة',
    'yariRomork.configurator.title': 'نصف مقطورة',
    'yariRomork.configurator.subtitle':
      'شارك التفاصيل لتصميم أفضل نصف مقطورة عالية الأداء لأسطولك. يعد فريقنا الفني عرضاً تقنياً مخصصاً.',
    'ekEkipmanlar.hero.titleLine1': 'متكامل',
    'ekEkipmanlar.hero.titleLine2': 'حلول المعدات',
    'ekEkipmanlar.cta.description':
      'تواصل مع فريق خبرائنا لنحدد معاً الحل الأنسب لاحتياجاتك.',
    'ekEkipmanlar.performance.description':
      'نوصل منتجات أصلية معتمدة من علامات عالمية في أقصر وقت بفضل مخزوننا الواسع.',
    'afterSales.services.teknikDestek.title': 'دعم فني سريع',
    'afterSales.services.teknikDestek.description':
      'يقدّم فريق الدعم الفني لدينا حلاً لطلبك في أسرع وقت ممكن.',
    'afterSales.documents.eyebrow': 'موارد',
  },
};

function setByPath(obj, dotPath, value) {
  const keys = dotPath.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (cur[k] === undefined || typeof cur[k] !== 'object') {
      cur[k] = {};
    }
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

for (const locale of LOCALES) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const patch = COPY[locale];
  if (!patch) {
    console.warn(`No patch for ${locale}`);
    continue;
  }
  for (const [dotPath, value] of Object.entries(patch)) {
    setByPath(data, dotPath, value);
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${locale}.json`);
}

console.log('Done.');
