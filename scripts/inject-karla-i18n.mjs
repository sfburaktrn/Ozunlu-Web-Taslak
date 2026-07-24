/**
 * Injects full karlaMucadele translations into all locale message files.
 * Run: node scripts/inject-karla-i18n.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

/** @type {Record<string, { seo: { title: string; description: string }; page: object }>} */
const data = {
    en: {
        seo: {
            title: 'Snow Fighting Vehicles | Front Blade, Side Blade, Spreader – Özünlü',
            description:
                'Özünlü snow-fighting bodies: front snow blade, side blade and salt/sand spreader systems. Durable, field-ready solutions for municipalities, highways and heavy winter operations. Request a quote.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Snow Fighting',
                subtitle:
                    'Superstructure solutions that keep winter roads open with front blade, side blade and spreader. Field-ready, operational, with Özünlü reliability.',
                comingSoon: 'Content coming soon.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Snow builds up.',
                line2: 'We clear it.',
                title: 'Snow builds up. We clear it.',
                subtitle:
                    'Front blade, side blade and spreader for municipal and highway fleets — field-ready, precise engineering.',
                pillars: ['Front blade', 'Side blade', 'Salt / sand spreader'],
                cta: 'Contact us',
                truckAlt: 'Özünlü snow fighting vehicle — front blade, side blade and spreader',
            },
            sections: {
                front: {
                    eyebrow: 'Front blade',
                    title: 'Strong front clearing, clear line of sight',
                    body: 'Open the main lane quickly with a wide front snow blade. Hydraulic lift and angle control enable precise plowing in different snow densities — safer, more efficient winter operations.',
                    imageAlt: 'Özünlü orange snow fighting vehicle side view — front and side blades',
                    points: [
                        'Hydraulic lift and angle control',
                        'Wide clearing path',
                        'Operational visibility and safety',
                    ],
                },
                spreader: {
                    eyebrow: 'Salt / sand spreader',
                    title: 'Complete road safety with spreading',
                    body: 'Prevent icing after plowing with salt or sand spreading. Enclosed bunker, even distribution and a heavy-duty body — uninterrupted winter maintenance for fleet operations.',
                    imageAlt: 'Özünlü snow fighting vehicle rear salt spreader unit',
                    points: [
                        'Enclosed bunker protection',
                        'Even spreading distribution',
                        'Heavy-duty body strength',
                    ],
                },
                fleet: {
                    eyebrow: 'Fleet & field',
                    title: 'For municipal and highway operations',
                    body: 'Visibility, durability and serviceability that highway and municipal fleets expect. We bring our tipper heritage to snow-fighting bodies — field-ready engineering in every step of production.',
                    imageAlt: 'Özünlü snow fighting fleet — front blade detail',
                    points: [
                        'High-visibility orange body',
                        'Easy service and maintenance',
                        'Fleet-scale production',
                    ],
                },
            },
            poster: {
                eyebrow: 'Quote',
                title: "Let's plan your winter fleet together",
                description:
                    'Contact the Özünlü team for a front blade, side blade and spreader configuration tailored to your needs.',
            },
        },
    },
    de: {
        seo: {
            title: 'Winterdienst-Fahrzeuge | Frontschild, Seitenschild, Streuer – Özünlü',
            description:
                'Özünlü Winterdienst-Aufbauten: Frontschneeschild, Seitenschild und Salz-/Sandstreusysteme. Robuste, einsatzbereite Lösungen für Kommunen, Straßenbetriebe und schwere Wintereinsätze. Angebot anfordern.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Winterdienst',
                subtitle:
                    'Aufbauten, die Winterstraßen mit Frontschild, Seitenschild und Streuer offen halten. Einsatzbereit, betriebsstark — mit Özünlü-Zuverlässigkeit.',
                comingSoon: 'Inhalt folgt in Kürze.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Schnee sammelt sich.',
                line2: 'Wir räumen.',
                title: 'Schnee sammelt sich. Wir räumen.',
                subtitle:
                    'Frontschild, Seitenschild und Streuer für kommunale und Straßenflotten — einsatzbereit, präzise Technik.',
                pillars: ['Frontschild', 'Seitenschild', 'Salz- / Sandstreuer'],
                cta: 'Kontakt aufnehmen',
                truckAlt: 'Özünlü Winterdienstfahrzeug — Frontschild, Seitenschild und Streuer',
            },
            sections: {
                front: {
                    eyebrow: 'Frontschild',
                    title: 'Starke Fronträumung, klare Sichtlinie',
                    body: 'Öffnen Sie die Hauptspur schnell mit einem breiten Frontschneeschild. Hydraulisches Heben und Winkelverstellung ermöglichen kontrolliertes Räumen bei unterschiedlicher Schneedichte — sicherer und effizienter Winterbetrieb.',
                    imageAlt: 'Özünlü orangefarbenes Winterdienstfahrzeug Seitenansicht — Front- und Seitenschild',
                    points: [
                        'Hydraulisches Heben und Winkelsteuerung',
                        'Breite Räumbahn',
                        'Betriebliche Sicht und Sicherheit',
                    ],
                },
                spreader: {
                    eyebrow: 'Salz- / Sandstreuer',
                    title: 'Straßensicherheit mit Streuen vervollständigen',
                    body: 'Verhindern Sie Vereisung nach dem Räumen durch Salz- oder Sandstreuung. Geschlossener Bunker, gleichmäßige Verteilung und Schwerlastgehäuse — unterbrechungsfreier Winterdienst für Flotten.',
                    imageAlt: 'Özünlü Winterdienstfahrzeug hintere Salzstreueinheit',
                    points: [
                        'Geschützter Bunker',
                        'Gleichmäßige Streuverteilung',
                        'Schwerlast-Gehäusefestigkeit',
                    ],
                },
                fleet: {
                    eyebrow: 'Flotte & Einsatz',
                    title: 'Für Kommunen und Straßenbetriebe',
                    body: 'Sichtbarkeit, Robustheit und Servicefreundlichkeit, die Autobahn- und Kommunalfahrzeuge brauchen. Wir übertragen unsere Kipper-Tradition auf Winterdienst-Aufbauten — einsatzgerechte Technik in jedem Produktionsschritt.',
                    imageAlt: 'Özünlü Winterdienstflotte — Frontschild-Detail',
                    points: [
                        'Hochsichtbares orangefarbenes Gehäuse',
                        'Einfache Wartung und Service',
                        'Produktion im Flottenmaßstab',
                    ],
                },
            },
            poster: {
                eyebrow: 'Angebot',
                title: 'Planen wir Ihre Winterflotte gemeinsam',
                description:
                    'Kontaktieren Sie das Özünlü-Team für eine Frontschild-, Seitenschild- und Streuer-Konfiguration nach Ihren Anforderungen.',
            },
        },
    },
    fr: {
        seo: {
            title: 'Véhicules de déneigement | Lame avant, lame latérale, épandeur – Özünlü',
            description:
                'Superstructures Özünlü de déneigement : lame à neige avant, lame latérale et systèmes d’épandage sel/sable. Solutions durables et prêtes pour le terrain, pour collectivités, routes et opérations hivernales lourdes. Demandez un devis.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Déneigement',
                subtitle:
                    'Des superstructures qui maintiennent les routes d’hiver ouvertes grâce à la lame avant, la lame latérale et l’épandeur. Prêtes pour le terrain, opérationnelles, avec la fiabilité Özünlü.',
                comingSoon: 'Contenu bientôt disponible.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'La neige s’accumule.',
                line2: 'Nous déblayons.',
                title: 'La neige s’accumule. Nous déblayons.',
                subtitle:
                    'Lame avant, lame latérale et épandeur pour flottes municipales et routières — ingénierie précise, prête pour le terrain.',
                pillars: ['Lame avant', 'Lame latérale', 'Épandeur sel / sable'],
                cta: 'Nous contacter',
                truckAlt: 'Véhicule de déneigement Özünlü — lame avant, lame latérale et épandeur',
            },
            sections: {
                front: {
                    eyebrow: 'Lame avant',
                    title: 'Déblaiement avant puissant, ligne de vue claire',
                    body: 'Ouvrez rapidement la voie principale avec une large lame à neige avant. Levage hydraulique et réglage d’angle pour un déblaiement contrôlé selon la densité de neige — opérations d’hiver plus sûres et efficaces.',
                    imageAlt: 'Véhicule de déneigement orange Özünlü vue de côté — lames avant et latérale',
                    points: [
                        'Levage hydraulique et contrôle d’angle',
                        'Large bande de déblaiement',
                        'Visibilité et sécurité opérationnelles',
                    ],
                },
                spreader: {
                    eyebrow: 'Épandeur sel / sable',
                    title: 'Complétez la sécurité routière par l’épandage',
                    body: 'Prévenez le verglas après déblaiement par épandage de sel ou de sable. Trémie fermée, répartition homogène et carrosserie pour usage intensif — entretien hivernal continu pour les flottes.',
                    imageAlt: 'Unité d’épandeur de sel arrière du véhicule de déneigement Özünlü',
                    points: [
                        'Protection par trémie fermée',
                        'Répartition d’épandage homogène',
                        'Résistance de carrosserie intensif',
                    ],
                },
                fleet: {
                    eyebrow: 'Flotte & terrain',
                    title: 'Pour collectivités et routes',
                    body: 'Visibilité, robustesse et facilité d’entretien attendues par les flottes routières et municipales. Nous transposons notre héritage benne aux superstructures de déneigement — ingénierie adaptée au terrain à chaque étape.',
                    imageAlt: 'Flotte de déneigement Özünlü — détail lame avant',
                    points: [
                        'Carrosserie orange haute visibilité',
                        'Entretien et service facilités',
                        'Production à l’échelle flotte',
                    ],
                },
            },
            poster: {
                eyebrow: 'Devis',
                title: 'Planifions ensemble votre flotte d’hiver',
                description:
                    'Contactez l’équipe Özünlü pour une configuration lame avant, lame latérale et épandeur adaptée à vos besoins.',
            },
        },
    },
    es: {
        seo: {
            title: 'Vehículos quitanieves | Cuchilla frontal, lateral y esparcidor – Özünlü',
            description:
                'Superestructuras Özünlü para lucha contra la nieve: cuchilla frontal, cuchilla lateral y sistemas esparcidores de sal/arena. Soluciones durables y listas para el terreno para municipios, carreteras y operaciones invernales intensivas. Solicite presupuesto.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Quitanieves',
                subtitle:
                    'Superestructuras que mantienen abiertas las carreteras en invierno con cuchilla frontal, lateral y esparcidor. Listas para el terreno, operativas, con la fiabilidad Özünlü.',
                comingSoon: 'Contenido próximamente.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'La nieve se acumula.',
                line2: 'Nosotros la retiramos.',
                title: 'La nieve se acumula. Nosotros la retiramos.',
                subtitle:
                    'Cuchilla frontal, lateral y esparcidor para flotas municipales y de carreteras — ingeniería precisa, lista para el terreno.',
                pillars: ['Cuchilla frontal', 'Cuchilla lateral', 'Esparcidor sal / arena'],
                cta: 'Contactar',
                truckAlt: 'Vehículo quitanieves Özünlü — cuchilla frontal, lateral y esparcidor',
            },
            sections: {
                front: {
                    eyebrow: 'Cuchilla frontal',
                    title: 'Despeje frontal potente, línea de visión clara',
                    body: 'Abra el carril principal rápidamente con una amplia cuchilla frontal. Elevación hidráulica y ajuste de ángulo permiten un despeje controlado según la densidad de nieve — operaciones invernales más seguras y eficientes.',
                    imageAlt: 'Vehículo quitanieves naranja Özünlü vista lateral — cuchillas frontal y lateral',
                    points: [
                        'Elevación hidráulica y control de ángulo',
                        'Amplia franja de despeje',
                        'Visibilidad y seguridad operativa',
                    ],
                },
                spreader: {
                    eyebrow: 'Esparcidor sal / arena',
                    title: 'Complete la seguridad vial con el esparcido',
                    body: 'Prevenga el hielo tras el despeje con esparcido de sal o arena. Tolva cerrada, distribución homogénea y carrocería de servicio pesado — mantenimiento invernal continuo para flotas.',
                    imageAlt: 'Unidad esparcidora de sal trasera del vehículo quitanieves Özünlü',
                    points: [
                        'Protección de tolva cerrada',
                        'Distribución homogénea',
                        'Resistencia de carrocería pesada',
                    ],
                },
                fleet: {
                    eyebrow: 'Flota y campo',
                    title: 'Para operaciones municipales y de carreteras',
                    body: 'Visibilidad, resistencia y facilidad de servicio que esperan las flotas de carreteras y municipios. Llevamos nuestra herencia de volquete a las superestructuras quitanieves — ingeniería lista para el terreno en cada paso.',
                    imageAlt: 'Flota quitanieves Özünlü — detalle de cuchilla frontal',
                    points: [
                        'Carrocería naranja de alta visibilidad',
                        'Servicio y mantenimiento fáciles',
                        'Producción a escala de flota',
                    ],
                },
            },
            poster: {
                eyebrow: 'Presupuesto',
                title: 'Planifiquemos juntos su flota de invierno',
                description:
                    'Contacte al equipo Özünlü para una configuración de cuchilla frontal, lateral y esparcidor según sus necesidades.',
            },
        },
    },
    it: {
        seo: {
            title: 'Veicoli antineve | Lama anteriore, laterale, spargisale – Özünlü',
            description:
                'Allestimenti Özünlü per la lotta alla neve: lama anteriore, lama laterale e sistemi spargisale/sabbia. Soluzioni durevoli e pronte per il campo per comuni, strade e operazioni invernali intense. Richiedi un preventivo.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Antineve',
                subtitle:
                    'Allestimenti che tengono aperte le strade invernali con lama anteriore, laterale e spargisale. Pronti per il campo, operativi, con l’affidabilità Özünlü.',
                comingSoon: 'Contenuti in arrivo.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'La neve si accumula.',
                line2: 'Noi la rimuoviamo.',
                title: 'La neve si accumula. Noi la rimuoviamo.',
                subtitle:
                    'Lama anteriore, laterale e spargisale per flotte comunali e stradali — ingegneria precisa, pronta per il campo.',
                pillars: ['Lama anteriore', 'Lama laterale', 'Spargisale / sabbia'],
                cta: 'Contattaci',
                truckAlt: 'Veicolo antineve Özünlü — lama anteriore, laterale e spargisale',
            },
            sections: {
                front: {
                    eyebrow: 'Lama anteriore',
                    title: 'Sgombero anteriore potente, linea di vista chiara',
                    body: 'Apri rapidamente la corsia principale con un’ampia lama anteriore. Sollevamento idraulico e regolazione dell’angolo per uno sgombero controllato a diverse densità di neve — operazioni invernali più sicure ed efficienti.',
                    imageAlt: 'Veicolo antineve arancione Özünlü vista laterale — lame anteriore e laterale',
                    points: [
                        'Sollevamento idraulico e controllo angolo',
                        'Ampia fascia di sgombero',
                        'Visibilità e sicurezza operativa',
                    ],
                },
                spreader: {
                    eyebrow: 'Spargisale / sabbia',
                    title: 'Completa la sicurezza stradale con lo spargimento',
                    body: 'Previeni il ghiaccio dopo lo sgombero con spargimento di sale o sabbia. Cassone chiuso, distribuzione omogenea e struttura heavy-duty — manutenzione invernale continua per le flotte.',
                    imageAlt: 'Unità spargisale posteriore del veicolo antineve Özünlü',
                    points: [
                        'Protezione cassone chiuso',
                        'Distribuzione omogenea',
                        'Resistenza struttura heavy-duty',
                    ],
                },
                fleet: {
                    eyebrow: 'Flotta e campo',
                    title: 'Per operazioni comunali e stradali',
                    body: 'Visibilità, robustezza e facilità di servizio attese dalle flotte stradali e comunali. Portiamo la nostra tradizione ribaltabile agli allestimenti antineve — ingegneria pronta per il campo in ogni fase.',
                    imageAlt: 'Flotta antineve Özünlü — dettaglio lama anteriore',
                    points: [
                        'Carrozzeria arancione ad alta visibilità',
                        'Manutenzione e servizio facilitati',
                        'Produzione su scala flotta',
                    ],
                },
            },
            poster: {
                eyebrow: 'Preventivo',
                title: 'Pianifichiamo insieme la tua flotta invernale',
                description:
                    'Contatta il team Özünlü per una configurazione lama anteriore, laterale e spargisale su misura.',
            },
        },
    },
    ro: {
        seo: {
            title: 'Vehicule de deszăpezire | Lamă față, lamă laterală, împrăștiător – Özünlü',
            description:
                'Suprastructuri Özünlü pentru deszăpezire: lamă de zăpadă față, lamă laterală și sisteme de împrăștiere sare/nisip. Soluții durabile, gata de teren pentru municipalități, drumuri și operațiuni grele de iarnă. Cereți ofertă.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Deszăpezire',
                subtitle:
                    'Suprastructuri care mențin drumurile de iarnă deschise cu lamă față, lamă laterală și împrăștiător. Gata de teren, operaționale, cu fiabilitatea Özünlü.',
                comingSoon: 'Conținut în curând.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Zăpada se adună.',
                line2: 'Noi o curățăm.',
                title: 'Zăpada se adună. Noi o curățăm.',
                subtitle:
                    'Lamă față, lamă laterală și împrăștiător pentru flote municipale și rutiere — inginerie precisă, gata de teren.',
                pillars: ['Lamă față', 'Lamă laterală', 'Împrăștiător sare / nisip'],
                cta: 'Contactați-ne',
                truckAlt: 'Vehicul de deszăpezire Özünlü — lamă față, lamă laterală și împrăștiător',
            },
            sections: {
                front: {
                    eyebrow: 'Lamă față',
                    title: 'Curățare frontală puternică, vizibilitate clară',
                    body: 'Deschideți rapid banda principală cu o lamă frontală lată. Ridicare hidraulică și reglaj unghi pentru curățare controlată la densități diferite de zăpadă — operațiuni de iarnă mai sigure și eficiente.',
                    imageAlt: 'Vehicul de deszăpezire portocaliu Özünlü vedere laterală — lame față și laterală',
                    points: [
                        'Ridicare hidraulică și control unghi',
                        'Bandă largă de curățare',
                        'Vizibilitate și siguranță operațională',
                    ],
                },
                spreader: {
                    eyebrow: 'Împrăștiător sare / nisip',
                    title: 'Completați siguranța rutieră cu împrăștierea',
                    body: 'Preveniți ghețușul după curățare prin împrăștiere de sare sau nisip. Buncăr închis, distribuție omogenă și caroserie pentru uz greu — întreținere de iarnă neîntreruptă pentru flote.',
                    imageAlt: 'Unitate împrăștiător sare spate vehicul deszăpezire Özünlü',
                    points: [
                        'Protecție buncăr închis',
                        'Distribuție omogenă',
                        'Rezistență caroserie uz greu',
                    ],
                },
                fleet: {
                    eyebrow: 'Flotă & teren',
                    title: 'Pentru operațiuni municipale și rutiere',
                    body: 'Vizibilitate, rezistență și ușurință în service pe care le așteaptă flotele rutiere și municipale. Aducem tradiția noastră de basculante în suprastructurile de deszăpezire — inginerie adaptată terenului la fiecare pas.',
                    imageAlt: 'Flotă deszăpezire Özünlü — detaliu lamă față',
                    points: [
                        'Caroserie portocalie vizibilitate ridicată',
                        'Service și întreținere ușoare',
                        'Producție la scară de flotă',
                    ],
                },
            },
            poster: {
                eyebrow: 'Ofertă',
                title: 'Să planificăm împreună flota de iarnă',
                description:
                    'Contactați echipa Özünlü pentru o configurație lamă față, lamă laterală și împrăștiător pe măsura nevoilor dvs.',
            },
        },
    },
    bg: {
        seo: {
            title: 'Снегопочистващи превозни средства | Преден нож, страничен нож, разпръсквач – Özünlü',
            description:
                'Надстройки Özünlü за борба със снега: преден снегорин, страничен нож и системи за разпръскване на сол/пясък. Издръжливи, готови за терен решения за общини, пътища и тежки зимни операции. Поискайте оферта.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Борба със снега',
                subtitle:
                    'Надстройки, които държат зимните пътища отворени с преден нож, страничен нож и разпръсквач. Готови за терен, оперативни, с надеждността на Özünlü.',
                comingSoon: 'Съдържанието предстои.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Снегът се натрупва.',
                line2: 'Ние го чистим.',
                title: 'Снегът се натрупва. Ние го чистим.',
                subtitle:
                    'Преден нож, страничен нож и разпръсквач за общински и пътни автопаркове — прецизно инженерство, готово за терен.',
                pillars: ['Преден нож', 'Страничен нож', 'Разпръсквач сол / пясък'],
                cta: 'Свържете се с нас',
                truckAlt: 'Снегопочистващо превозно средство Özünlü — преден нож, страничен нож и разпръсквач',
            },
            sections: {
                front: {
                    eyebrow: 'Преден нож',
                    title: 'Силно предно почистване, ясна видимост',
                    body: 'Отворете бързо основната лента с широк преден снегорин. Хидравлично повдигане и регулиране на ъгъла за контролирано почистване при различна плътност на снега — по-безопасни и ефективни зимни операции.',
                    imageAlt: 'Оранжево снегопочистващо превозно средство Özünlü страничен изглед — преден и страничен нож',
                    points: [
                        'Хидравлично повдигане и контрол на ъгъла',
                        'Широка лента на почистване',
                        'Оперативна видимост и безопасност',
                    ],
                },
                spreader: {
                    eyebrow: 'Разпръсквач сол / пясък',
                    title: 'Допълнете пътната безопасност с разпръскване',
                    body: 'Предотвратете заледяването след почистване с разпръскване на сол или пясък. Затворен бункер, равномерно разпределение и корпус за тежка експлоатация — непрекъсната зимна поддръжка за автопаркове.',
                    imageAlt: 'Заден разпръсквач сол на снегопочистващо превозно средство Özünlü',
                    points: [
                        'Защита със затворен бункер',
                        'Равномерно разпределение',
                        'Здравина на корпуса за тежка работа',
                    ],
                },
                fleet: {
                    eyebrow: 'Автопарк и терен',
                    title: 'За общински и пътни операции',
                    body: 'Видимост, издръжливост и лесна поддръжка, които очакват пътните и общинските автопаркове. Пренасяме наследството си от самосвали към надстройките за сняг — инженеринг за терена на всяка стъпка.',
                    imageAlt: 'Автопарк за сняг Özünlü — детайл преден нож',
                    points: [
                        'Оранжев корпус с висока видимост',
                        'Лесен сервиз и поддръжка',
                        'Производство в мащаб на автопарк',
                    ],
                },
            },
            poster: {
                eyebrow: 'Оферта',
                title: 'Нека заедно планираме зимния ви автопарк',
                description:
                    'Свържете се с екипа на Özünlü за конфигурация преден нож, страничен нож и разпръсквач според нуждите ви.',
            },
        },
    },
    ru: {
        seo: {
            title: 'Снегоуборочная техника | Передний отвал, боковой отвал, разбрасыватель – Özünlü',
            description:
                'Надстройки Özünlü для борьбы со снегом: передний отвал, боковой отвал и системы разбрасывания соли/песка. Надёжные, готовые к работе решения для муниципалитетов, дорог и тяжёлых зимних операций. Запросите предложение.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Борьба со снегом',
                subtitle:
                    'Надстройки, которые держат зимние дороги открытыми благодаря переднему отвалу, боковому отвалу и разбрасывателю. Готовы к работе, надёжны — с гарантией Özünlü.',
                comingSoon: 'Контент скоро появится.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Снег накапливается.',
                line2: 'Мы очищаем.',
                title: 'Снег накапливается. Мы очищаем.',
                subtitle:
                    'Передний отвал, боковой отвал и разбрасыватель для муниципальных и дорожных парков — точная инженерия, готовая к работе.',
                pillars: ['Передний отвал', 'Боковой отвал', 'Разбрасыватель соли / песка'],
                cta: 'Связаться с нами',
                truckAlt: 'Снегоуборочная машина Özünlü — передний отвал, боковой отвал и разбрасыватель',
            },
            sections: {
                front: {
                    eyebrow: 'Передний отвал',
                    title: 'Мощная фронтальная очистка, чёткая видимость',
                    body: 'Быстро откройте основную полосу широким передним отвалом. Гидравлический подъём и регулировка угла обеспечивают контролируемую уборку при разной плотности снега — более безопасные и эффективные зимние работы.',
                    imageAlt: 'Оранжевая снегоуборочная машина Özünlü вид сбоку — передний и боковой отвалы',
                    points: [
                        'Гидравлический подъём и контроль угла',
                        'Широкая полоса очистки',
                        'Оперативная видимость и безопасность',
                    ],
                },
                spreader: {
                    eyebrow: 'Разбрасыватель соли / песка',
                    title: 'Дополните безопасность дорог разбрасыванием',
                    body: 'Предотвратите гололёд после уборки разбрасыванием соли или песка. Закрытый бункер, равномерное распределение и усиленный кузов — непрерывное зимнее обслуживание для автопарков.',
                    imageAlt: 'Задний разбрасыватель соли снегоуборочной машины Özünlü',
                    points: [
                        'Защита закрытым бункером',
                        'Равномерное распределение',
                        'Прочность усиленного кузова',
                    ],
                },
                fleet: {
                    eyebrow: 'Парк и поле',
                    title: 'Для муниципальных и дорожных операций',
                    body: 'Видимость, прочность и удобство обслуживания, которые ждут дорожные и муниципальные парки. Мы переносим наследие самосвалов на снегоуборочные надстройки — инженерия для поля на каждом этапе.',
                    imageAlt: 'Снегоуборочный парк Özünlü — деталь переднего отвала',
                    points: [
                        'Оранжевый кузов высокой видимости',
                        'Простое обслуживание и сервис',
                        'Производство в масштабе парка',
                    ],
                },
            },
            poster: {
                eyebrow: 'Предложение',
                title: 'Давайте вместе спланируем ваш зимний парк',
                description:
                    'Свяжитесь с командой Özünlü для конфигурации переднего отвала, бокового отвала и разбрасывателя под ваши задачи.',
            },
        },
    },
    uk: {
        seo: {
            title: 'Снігоочисні транспортні засоби | Передній відвал, бічний відвал, розкидач – Özünlü',
            description:
                'Надбудови Özünlü для боротьби зі снігом: передній відвал, бічний відвал і системи розкидання солі/піску. Міцні, готові до роботи рішення для муніципалітетів, доріг і важких зимових операцій. Запросіть пропозицію.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'Боротьба зі снігом',
                subtitle:
                    'Надбудови, що тримають зимові дороги відкритими завдяки передньому відвалу, бічному відвалу та розкидачу. Готові до роботи, надійні — з гарантією Özünlü.',
                comingSoon: 'Контент незабаром.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'Сніг накопичується.',
                line2: 'Ми очищаємо.',
                title: 'Сніг накопичується. Ми очищаємо.',
                subtitle:
                    'Передній відвал, бічний відвал і розкидач для муніципальних і дорожніх парків — точна інженерія, готова до роботи.',
                pillars: ['Передній відвал', 'Бічний відвал', 'Розкидач солі / піску'],
                cta: "Зв'язатися з нами",
                truckAlt: 'Снігоочисна машина Özünlü — передній відвал, бічний відвал і розкидач',
            },
            sections: {
                front: {
                    eyebrow: 'Передній відвал',
                    title: 'Потужне фронтальне очищення, чітка видимість',
                    body: 'Швидко відкрийте основну смугу широким переднім відвалом. Гідравлічний підйом і регулювання кута забезпечують контрольоване очищення за різної щільності снігу — безпечніші й ефективніші зимові роботи.',
                    imageAlt: 'Помаранчева снігоочисна машина Özünlü вигляд збоку — передній і бічний відвали',
                    points: [
                        'Гідравлічний підйом і контроль кута',
                        'Широка смуга очищення',
                        'Оперативна видимість і безпека',
                    ],
                },
                spreader: {
                    eyebrow: 'Розкидач солі / піску',
                    title: 'Доповніть безпеку доріг розкиданням',
                    body: 'Запобігайте ожеледиці після очищення розкиданням солі або піску. Закритий бункер, рівномірний розподіл і посилений кузов — безперервне зимове обслуговування для автопарків.',
                    imageAlt: 'Задній розкидач солі снігоочисної машини Özünlü',
                    points: [
                        'Захист закритим бункером',
                        'Рівномірний розподіл',
                        'Міцність посиленого кузова',
                    ],
                },
                fleet: {
                    eyebrow: 'Парк і поле',
                    title: 'Для муніципальних і дорожніх операцій',
                    body: 'Видимість, міцність і зручність обслуговування, яких очікують дорожні та муніципальні парки. Ми переносимо спадщину самоскидів на снігоочисні надбудови — інженерія для поля на кожному етапі.',
                    imageAlt: 'Снігоочисний парк Özünlü — деталь переднього відвалу',
                    points: [
                        'Помаранчевий кузов високої видимості',
                        'Просте обслуговування та сервіс',
                        'Виробництво в масштабі парку',
                    ],
                },
            },
            poster: {
                eyebrow: 'Пропозиція',
                title: 'Давайте разом сплануємо ваш зимовий парк',
                description:
                    "Зв'яжіться з командою Özünlü для конфігурації переднього відвалу, бічного відвалу та розкидача під ваші потреби.",
            },
        },
    },
    ar: {
        seo: {
            title: 'مركبات مكافحة الثلوج | شفرة أمامية، جانبية، ناثر – Özünlü',
            description:
                'هياكل Özünlü لمكافحة الثلوج: شفرة ثلج أمامية وشفرة جانبية وأنظمة نثر الملح/الرمل. حلول متينة جاهزة للميدان للبلديات والطرق والعمليات الشتوية الثقيلة. اطلب عرض سعر.',
        },
        page: {
            hero: {
                eyebrow: 'Özünlü Damper',
                title: 'مكافحة الثلوج',
                subtitle:
                    'هياكل علوية تُبقي طرق الشتاء مفتوحة عبر الشفرة الأمامية والجانبية والناثر. جاهزة للميدان، تشغيلية، بموثوقية Özünlü.',
                comingSoon: 'المحتوى قريباً.',
            },
            finale: {
                eyebrow: 'Özünlü Damper',
                line1: 'الثلج يتراكم.',
                line2: 'نحن نُزيله.',
                title: 'الثلج يتراكم. نحن نُزيله.',
                subtitle:
                    'شفرة أمامية وجانبية وناثر لأساطيل البلديات والطرق — هندسة دقيقة جاهزة للميدان.',
                pillars: ['شفرة أمامية', 'شفرة جانبية', 'ناثر ملح / رمل'],
                cta: 'تواصل معنا',
                truckAlt: 'مركبة مكافحة ثلوج Özünlü — شفرة أمامية وجانبية وناثر',
            },
            sections: {
                front: {
                    eyebrow: 'شفرة أمامية',
                    title: 'إزالة أمامية قوية ورؤية واضحة',
                    body: 'افتح المسار الرئيسي بسرعة بشفرة ثلج أمامية عريضة. الرفع الهيدروليكي وضبط الزاوية يتيحان إزالة محكمة بكثافات ثلج مختلفة — عمليات شتوية أكثر أماناً وكفاءة.',
                    imageAlt: 'مركبة مكافحة ثلوج برتقالية Özünlü منظر جانبي — شفرات أمامية وجانبية',
                    points: [
                        'رفع هيدروليكي وتحكم بالزاوية',
                        'مسار إزالة عريض',
                        'رؤية وسلامة تشغيلية',
                    ],
                },
                spreader: {
                    eyebrow: 'ناثر ملح / رمل',
                    title: 'أكمل سلامة الطريق بالنثر',
                    body: 'امنع التجلد بعد الإزالة بنثر الملح أو الرمل. صومعة مغلقة وتوزيع متجانس وهيكل للاستخدام الثقيل — صيانة شتوية متواصلة للأساطيل.',
                    imageAlt: 'وحدة ناثر الملح الخلفية لمركبة مكافحة الثلوج Özünlü',
                    points: [
                        'حماية بصومعة مغلقة',
                        'توزيع نثر متجانس',
                        'متانة هيكل للاستخدام الثقيل',
                    ],
                },
                fleet: {
                    eyebrow: 'الأسطول والميدان',
                    title: 'لعمليات البلديات والطرق',
                    body: 'الرؤية والمتانة وسهولة الخدمة التي تتوقعها أساطيل الطرق والبلديات. ننقل إرثنا في القلابات إلى هياكل مكافحة الثلوج — هندسة جاهزة للميدان في كل خطوة.',
                    imageAlt: 'أسطول مكافحة ثلوج Özünlü — تفصيل الشفرة الأمامية',
                    points: [
                        'هيكل برتقالي عالي الرؤية',
                        'خدمة وصيانة سهلة',
                        'إنتاج بمقياس الأسطول',
                    ],
                },
            },
            poster: {
                eyebrow: 'عرض سعر',
                title: 'لنخطّط معاً لأسطول الشتاء',
                description:
                    'تواصل مع فريق Özünlü لتكوين شفرة أمامية وجانبية وناثر وفق احتياجك.',
            },
        },
    },
};

for (const [locale, payload] of Object.entries(data)) {
    const file = path.join(root, 'messages', `${locale}.json`);
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    json.seo = json.seo || {};
    json.seo.karlaMucadele = payload.seo;
    json.karlaMucadele = payload.page;
    fs.writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
    console.log('updated', locale);
}

console.log('done');
