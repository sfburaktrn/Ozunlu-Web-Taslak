import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "messages");

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const translations = {
  bg: {
    home: {
      whyChooseUs: {
        cardLabel: "Гаранцията на Özünlü"
      },
      mapPreview: {
        citiesLabel: "Градове със сервиз",
        pointsLabel: "Общ брой сервизни точки",
        topCities: "Водещи градове",
        serviceCount: "{count} сервизни точки",
        tapHint: "Докоснете картата",
        mapInstruction: "Изберете град, за да отворите сервизната информация.",
        modalEyebrow: "Детайли за сервиза",
        plateCode: "Код на регистрационен номер: {code}",
        closeAria: "Затвори",
        noService: "Няма регистриран сервиз за тази провинция."
      },
      products: {
        viewDetails: "Разгледайте подробно",
        items: {
          damper: {
            title: "САМОСВАЛ",
            description: "Каросерия от <hardox></hardox> стомана, хидравлична система, капацитет 20-40 m³",
            features: ["Стомана Hardox 450", "Хидравлична система", "Олекотена конструкция"]
          },
          dorse: {
            title: "РЕМАРКЕ",
            description: "Висока якост, дълъг експлоатационен живот и възможности за индивидуален дизайн",
            features: ["Индивидуален дизайн", "Висока издръжливост", "Лесна поддръжка"]
          },
          kar: {
            title: "СНЕГОПОЧИСТВАЩА ТЕХНИКА",
            description: "Индивидуални самосвални решения според конкретните нужди на клиента",
            features: ["Персонализирана изработка", "Подкрепа от НИРД", "Бързо производство"]
          }
        }
      },
      gallery: {
        slogan: "Изборът на най-добрите"
      },
      stats: {
        exportCountries: "Държави на износ",
        steelProcessing: "Годишна обработка на стомана (тона)",
        experience: "Години опит"
      }
    },
    damper: {
      items: {
        d24: {
          name: "ÖZ-D24 Самосвал",
          description:
            "Инженерно ориентиран дизайн за тежките условия в строителството и на обекта. Опция за каросерия от <hardox></hardox>, усилено шаси и бързо разтоварване за максимална оперативна ефективност.",
          features: [
            "Опция за каросерия Hardox",
            "Висока стабилност при повдигане",
            "Бързо разтоварване",
            "Усилено шаси",
            "Лесна поддръжка"
          ],
          details: {
            hardox: {
              title: "Каросерия Hardox®",
              content: "Дълъг експлоатационен живот и ниски разходи за поддръжка при устойчивост на износване и удар."
            },
            sasi: {
              title: "Шаси",
              content: "Усилена конструкция на шасито, подходяща за тежък режим на работа."
            },
            bosaltim: {
              title: "Разтоварване",
              content: "Бързо и контролирано разтоварване с оптимизирана хидравлична система."
            },
            verimlilik: {
              title: "Ефективност",
              content: "Инженерни детайли, които повишават оперативната непрекъснатост."
            }
          }
        },
        d30: {
          name: "ÖZ-D30 Самосвал",
          description: "Най-мощната комбинация от каросерия и шаси за товари с висок тонаж.",
          features: [
            "Тежък режим на експлоатация",
            "Оптимизиран обем",
            "Устойчиви странични стени",
            "Лесно сервизиране",
            "Допълнително оборудване"
          ],
          details: {
            kapasite: {
              title: "Капацитет",
              content: "Оптимизиран обем за операции с висок тонаж."
            },
            dayanim: {
              title: "Издръжливост",
              content: "Конструкция, устойчива на удари и износване при тежка експлоатация."
            },
            donanim: {
              title: "Оборудване",
              content: "Брезент, капак, осветление и други опционални решения."
            },
            uyumluluk: {
              title: "Съвместимост",
              content: "Алтернативи за монтаж според различни изисквания към шасито."
            }
          }
        },
        d21: {
          name: "ÖZ-D21 Самосвал",
          description: "Балансирано тегло и икономични експлоатационни разходи за компактни приложения.",
          features: ["Компактен дизайн", "Икономична експлоатация", "Балансирано тегло", "Лесно маневриране", "Дълъг живот"],
          details: {
            kullanim: {
              title: "Употреба",
              content: "Пъргаво и ефективно действие в компактни работни зони."
            },
            agirlik: {
              title: "Тегло",
              content: "Максимален капацитет в рамките на законовите ограничения."
            },
            maliyet: {
              title: "Разходи",
              content: "Икономична експлоатация и улеснена поддръжка."
            },
            performans: {
              title: "Производителност",
              content: "Стабилна работа при интензивна ежедневна експлоатация."
            }
          }
        }
      }
    },
    yariRomork: {
      items: {
        g22: {
          name: "ÖZ-G22 Полуремарке",
          description:
            "Надеждно решение за дълги разстояния и тежки товари с обем 22 m³, каросерия Hardox 450 и осова система BPW.",
          features: ["Обем 22 m³", "Каросерия Hardox 450", "Ламарина 5/6 мм", "Ос BPW (вносна)", "Сгъваема броня"]
        },
        l500: {
          name: "ÖZ-L500 Полуремарке",
          description: "Високопроизводително ремарке с шаси Hardox 500 и хидравлична рампа за интензивна работа.",
          features: ["Ос Özkoç (местна)", "Шаси Hardox 500", "Неподвижна броня", "Хидравлична рампа", "Разширяеми страни"]
        },
        m21: {
          name: "ÖZ-M21 Полуремарке",
          description: "Ефективен транспорт с обем 21 m³, олекотена каросерия и автоматична брезентова система.",
          features: ["Обем 21 m³", "Ос Özkoç", "Ламарина 3/4 мм (лека)", "Автоматичен брезент", "Капак с маншон"]
        }
      }
    },
    ekEkipmanlar: {
      categories: {
        hidrolik: {
          title: "Хидравлични системи",
          desc: "Помпи, цилиндри и клапанни системи с висок капацитет на налягане. Доказана мощност и издръжливост за тежки условия на работа."
        },
        dingil: {
          title: "Ос и окачване",
          desc: "Премиум оси и системи за окачване, включително BPW и Özkoç, за надеждна работа и дълъг експлоатационен живот."
        },
        fren: {
          title: "Спирачни системи",
          desc: "Спирачни комплекти, съвместими с EBS и ABS. Максимална спирачна ефективност съгласно европейските стандарти за безопасност."
        },
        elektrik: {
          title: "Електрическа система и осветление",
          desc: "LED осветителни системи с висока видимост и съответствие с ECE R48."
        },
        aksesuar: {
          title: "Аксесоари за ремаркета",
          desc: "Кутии за инструменти, резервоари, опорни крака и аксесоари за специални конфигурации."
        },
        yedekParca: {
          title: "Резервни части",
          desc: "Оригинални и гарантирани резервни части с възможност за изпращане в същия ден и минимален престой на автомобила."
        }
      },
      performance: {
        bullets: {
          0: "Гаранция за оригинални и сертифицирани продукти",
          1: "Широка съвместимост с марки и модели",
          2: "Конкурентни цени и гъвкави условия на плащане",
          3: "Експертна техническа консултантска поддръжка"
        }
      },
      stats: {
        original: {
          value: "%100",
          label: "Гаранция за оригинален продукт"
        },
        delivery: {
          value: "Бърза",
          label: "Доставка от наличност"
        },
        support: {
          value: "Подкрепа",
          label: "Преди и след продажбата"
        }
      }
    },
    afterSales: {
      services: {
        servisAgi: {
          title: "Оторизирана сервизна мрежа",
          description:
            "Поверете автопарка си на сертифицирани техници с оборудване по фабричен стандарт в 87 оторизирани сервизни точки в 50 провинции на Турция."
        },
        yedekParca: {
          title: "Оригинални резервни части",
          description: "100% оригинални части Özünlü за минимален престой на превозното средство."
        },
        garanti: {
          title: "Гаранционно покритие",
          description: "Всички наши продукти са обхванати от цялостна гаранция на производителя."
        },
        teknikDestek: {
          title: "24/7 техническа поддръжка",
          description: "Нашият екип от експерти е на разположение денем и нощем."
        }
      },
      documents: {
        damperManual: {
          title: "Ръководство за работа със самосвал",
          desc: "Основни инструкции за експлоатация и безопасност за продуктовата група самосвали."
        },
        dorseManual: {
          title: "Ръководство за ремарке и полуремарке",
          desc: "Стандартно ръководство за експлоатация за общите продукти полуремаркета."
        },
        generalManual: {
          title: "Общо ръководство за продукт и поддръжка (TR/EN)",
          desc: "Подробни указания за поддръжка и технически детайли за всички модели ремаркета."
        },
        damperSpec: {
          title: "Техническа спецификация за самосвал (TR/EN)",
          desc: "Специализирани технически спецификации за самосвални превозни средства."
        }
      }
    },
    contact: {
      form: {
        hours: "Работно време",
        hoursValue: "Делнични дни и съб.: 09:00 - 18:30",
        name: "ИМЕ И ФАМИЛИЯ",
        namePlaceholder: "Вашето име и фамилия",
        company: "КОМПАНИЯ",
        companyPlaceholder: "Име на фирмата",
        email: "ИМЕЙЛ",
        emailPlaceholder: "primer@firma.com",
        phone: "ТЕЛЕФОН",
        phonePlaceholder: "+359 ...",
        message: "СЪОБЩЕНИЕ",
        messagePlaceholder: "Напишете съобщението си тук..."
      },
      tabs: {
        sales: "ПРОДАЖБИ И МАРКЕТИНГ",
        service: "СЛЕДПРОДАЖБЕНО ОБСЛУЖВАНЕ",
        export: "ЕКСПОРТ",
        hr: "ЧОВЕШКИ РЕСУРСИ"
      }
    },
    proposal: {
      configurator: "Конфигуратор",
      selectedProduct: "Избран продукт",
      selectedSubtitle: "Попълнете формата за оферта за избрания от вас продукт.",
      defaultSubtitle: "Опишете детайлите за решение, съобразено с вашите нужди.",
      clearSelection: "Изберете друг продукт или използвайте конфигуратора",
      stepQuantity: "Определете количество",
      stepPayment: "Начин на плащане",
      stepContact: "Данни за контакт",
      vehicleInfo: "Информация за превозното средство",
      trailerSpecs: "Спецификации на ремаркето",
      cargoType: "Тип товар",
      dimensions: "Размери и количество",
      submit: "ПОИСКАЙТЕ ОФЕРТА",
      submitting: "Изпращане...",
      successTitle: "Запитването е получено!",
      successMessage: "Вашата форма за оферта беше изпратена успешно. Наш търговски представител ще се свърже с вас възможно най-скоро.",
      newForm: "Създайте нова форма",
      kvkkNotice: "Вашите лични данни са защитени съгласно приложимото законодателство за защита на данните.",
      payment: {
        cashTitle: "В брой / Банков превод",
        cashDesc: "Специални отстъпки при плащане в брой",
        creditTitle: "Отложено плащане / Чек",
        creditDesc: "Опции за срок и разсрочване"
      },
      fields: {
        quantity: "Желано количество",
        brand: "Марка на превозното средство",
        brandPh: "Напр.: Mercedes, Ford",
        model: "Модел на превозното средство",
        modelPh: "Напр.: 4140, Cargo",
        volume: "Желан обем (m³)",
        volumePh: "Напр.: 30",
        axle: "Опция за ос",
        domestic: "Местна",
        foreign: "Вносна",
        cargo: "Превозван товар",
        cargoPh: "Напр.: изкопни маси, пясък, асфалт",
        thickness: "Дебелина на под/страни (мм)",
        thicknessPh: "Напр.: 5 мм / 4 мм",
        company: "Име на фирмата",
        companyPh: "Фирмено наименование",
        contact: "Лице за контакт",
        contactPh: "Име и фамилия",
        phone: "Телефон",
        phonePh: "+359 ...",
        email: "Имейл",
        emailPh: "mail@firma.com",
        heardFrom: "Откъде научихте за нас?",
        heardFromPh: "Google, социални мрежи, препоръка..."
      }
    },
    corporate: {
      hero: {
        badge: "От 1977 г.",
        titleLine1: "ПОДПИСЪТ НА",
        titleLine2: "СКОРОСТТА И ДОВЕРИЕТО",
        description:
          "С близо половин век опит ние определяме стандартите в сектора на надстройките за тежкотоварни превозни средства и изграждаме бъдещето върху стабилни основи."
      },
      values: {
        trust: {
          title: "ДОВЕРИЕ",
          desc: "Повече от 45 години стоим зад всяко обещание, което даваме на нашите клиенти, партньори и служители."
        },
        quality: {
          title: "КАЧЕСТВО",
          desc: "От стоманата <hardox></hardox> до най-фината изработка, се стремим към съвършенство на всеки етап от производството."
        },
        innovation: {
          title: "ИНОВАЦИЯ",
          desc: "Анализираме нуждите на сектора и чрез нашата развойна дейност пренасяме технологиите на бъдещето в настоящето."
        },
        speed: {
          title: "СКОРОСТ",
          desc: "С оптимизирани производствени процеси доставяме в най-кратки срокове без компромис с качеството и добавяме скорост към вашия бизнес."
        }
      },
      philosophy: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "ОБРАБОТВАМЕ НЕ САМО СТОМАНА,",
        titleLine2: "А И ДОВЕРИЕ.",
        p1: "<strong>От 1977 г. до днес,</strong> това, което напуска нашата производствена линия, не е просто самосвал, а материализираният облик на близо половин век опит, инженерна страст и иновации. За нас качеството не е контролен етап, а самата ни производствена култура.",
        p2: "Тествани в сурови терени и при тежки товари, нашите продукти са проектирани до най-малкия детайл с фокус върху <durability>издръжливостта</durability> и <performance>производителността</performance>. Съчетавайки здравината на стоманата <hardox></hardox> с гъвкавия ум на турското инженерство, ние задаваме стандартите, които насочват сектора.",
        quote: "При всяка заварка, всеки монтаж и всяка доставка имаме една цел: да добавим сила към силата на нашите партньори."
      },
      leader: {
        eyebrow: "Послание от лидера",
        quote:
          "В Özünlü ние не произвеждаме просто продукти; ние изграждаме доверие. Всеки самосвал и всяко ремарке е отражение на почти половин век опит и инженерна страст.",
        name: "UFUK ÖZÜNLÜ",
        role: "Председател на Управителния съвет",
        bio: "Основана през 1977 г., днес Özünlü Damper е един от водещите производители в сектора с износ за над 40 държави. Произвеждаме по световни стандарти с титлата Qualified Body Builder (оторизиран надстройчик).",
        imageAlt: "Ufuk Özünlü"
      },
      timeline: {
        title: "ОТВЪД",
        titleHighlight: "ВРЕМЕТО",
        m1977: {
          title: "Полагане на основите",
          desc: "Производственият път започва в 30 кв.м работилница в Окмейдани, Истанбул, с големи мечти."
        },
        m1985: {
          title: "Първо разрастване",
          desc: "Преместване на производствените мощности в квартал Хабиплер, Истанбул, където се намират и днес."
        },
        m1991: {
          title: "Инвестиция в бъдещето",
          desc: "Закупуване на сегашния фабричен терен и първата голяма инвестиция по пътя към лидерството в надстройките."
        },
        m2005: {
          title: "Qualified Body Builder",
          desc: "Първата в сектора титла \"Qualified Body Builder\" от водещите световни производители на камиони."
        },
        m2009: {
          title: "Увеличаване на капацитета",
          desc: "Удвояване на производствения капацитет чрез нов подход към управлението на качеството и инвестиции в машини."
        },
        mToday: {
          title: "Глобална сила",
          desc: "Общо 30 000 m² производствена площ в 3 отделни обекта, продажби във всички 81 провинции и износ в над 40 държави."
        },
        yearToday: "Днес"
      },
      facilities: {
        title: "ПРОИЗВОДСТВЕНА МОЩ И",
        titleHighlight: "ГЛОБАЛНО ВЪЗДЕЙСТВИЕ",
        description: "Съчетавайки силата на местното инженерство с глобалните стандарти, ние създаваме стойност по целия свят.",
        production: {
          title: "ПРОИЗВОДСТВЕНА БАЗА",
          value: "30 000 m²",
          desc: "Висококапацитетно производство в 3 отделни обекта с 7 000 m² закрита и 23 000 m² открита площ."
        },
        global: {
          title: "ГЛОБАЛЕН ОБХВАТ",
          value: "40+ държави",
          desc: "Широка експортна мрежа, обхващаща всички 81 провинции на Турция и повече от 40 държави по света."
        },
        quality: {
          title: "СТАНДАРТ ЗА КАЧЕСТВО",
          value: "Сертификат QBB",
          desc: "Първата марка в сектора с титлата \"Qualified Body Builder\" (оторизиран надстройчик)."
        }
      }
    },
    career: {
      hero: {
        title: "УПРАВЛЕНИЕ НА",
        titleHighlight: "ТАЛАНТА",
        description: "Предлагаме уникално кариерно пътешествие за страстни и талантливи професионалисти с големи мечти."
      },
      life: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "ЖИВОТЪТ",
        titleLine2: "ПРИ НАС",
        description:
          "Като семейство Özünlü, ние не се стремим само да произвеждаме най-добрите самосвали, а и да имаме най-удовлетворените служители. Иновациите, непрекъснатото развитие и екипният дух са част от нашето ДНК.",
        imageAlt: "Кариера в Özünlü {n}"
      },
      jobs: {
        title: "ОЧАКВАМЕ",
        titleHighlight: "ВАС",
        subtitle: "Станете част от екипа, който оформя бъдещето.",
        apply: "Кандидатствайте",
        noJobsTitle: "В момента нямаме отворени позиции",
        noJobsDesc:
          "Въпреки това винаги се радваме да се запознаем с талантливи професионалисти. Изпратете ни своето CV за обща кандидатура или следете профилите ни в социалните мрежи."
      }
    },
    mediaPage: {
      hero: {
        title: "МЕДИЕН",
        titleHighlight: "ЦЕНТЪР",
        description: "Секторни новини, технологични развития и най-актуалните новини от света на Özünlü."
      },
      gallery: {
        title: "ПРОДУКТОВА",
        titleHighlight: "ГАЛЕРИЯ",
        description: "Разгледайте отблизо детайлите на превъзходното инженерство и безупречната изработка.",
        imageAlt: "Галерия Özünlü Damper {n}",
        detailAlt: "Детайл от галерията"
      },
      insights: {
        title: "СЕКТОРНИ",
        titleHighlight: "АНАЛИЗИ",
        description: "Експертни анализи за сектора на тежкотоварните превозни средства, производствените технологии и логистиката.",
        readMore: "Прочетете повече",
        articles: {
          a1: {
            category: "АКАДЕМИЯ",
            title: "Качеството на стоманата при производството на самосвали: Hardox и отвъд",
            excerpt:
              "Как използването на високоякостна стомана удължава живота на самосвала? Сравнение между Hardox 450 и 500 и анализ на възвръщаемостта на инвестицията.",
            date: "12 януари 2025 г.",
            readTime: "6 мин четене"
          },
          a2: {
            category: "СЕКТОР",
            title: "Тенденции в логистиката и транспорта през 2026 г.",
            excerpt:
              "Промени в глобалните вериги на доставки, регулации за горивна ефективност и възможностите пред турския транспортен сектор.",
            date: "8 януари 2025 г.",
            readTime: "8 мин четене"
          },
          a3: {
            category: "УСТОЙЧИВОСТ",
            title: "Зелена логистика: екологичното въздействие на олекотените самосвали",
            excerpt:
              "По-нисък разход на гориво и намален въглероден отпечатък чрез по-лека конструкция на шасито. Разглеждаме темата с данни от НИРД на Özünlü.",
            date: "3 януари 2025 г.",
            readTime: "5 мин четене"
          }
        }
      }
    },
    productsPage: {
      title: "ИНТЕРАКТИВНО",
      titleHighlight: "ИЗЖИВЯВАНЕ",
      description:
        "Отидете отвъд класическите каталози. Разгледайте инженерните решения на Özünlü Damper в 360° и създайте най-подходящата конфигурация за своя проект.",
      view360: {
        dragHint: "Плъзнете, за да завъртите",
        bodyLabel: "МОДЕЛ НА КАРОСЕРИЯТА",
        disclaimer: "*Представителен 3D визуален макет"
      },
      configurator: {
        title: "КОНФИГУРАТОР",
        bodyColor: "Цвят на каросерията",
        capacity: "Обем на капацитета",
        tires: "Тип гуми",
        summary: "Обобщение",
        colors: {
          blue: "Синьо Özünlü",
          gray: "Кварцово сиво",
          navy: "Тъмносиньо",
          red: "Пламъчно червено"
        },
        tireTypes: {
          standard: "Стандартни",
          offRoad: "За пресечен терен",
          heavyDuty: "Heavy Duty"
        }
      },
      techSpecs: {
        unload: {
          title: "Разтоварване за 2 минути",
          desc: "Рекордно време за разтоварване с оптимизирана хидравлична система."
        },
        weight: {
          title: "15% по-леко",
          desc: "По-висок товарен капацитет благодарение на специалната конструкция от сплав."
        },
        hardox: {
          title: "Каросерия Hardox 450",
          desc: "Максимална устойчивост на износване и удари със шведска стомана."
        },
        balance: {
          title: "Интелигентна система за баланс",
          desc: "Активна сензорна технология, предотвратяваща преобръщане при тежък терен."
        }
      }
    }
  },
  ro: {
    home: {
      whyChooseUs: {
        cardLabel: "Garanția Özünlü"
      },
      mapPreview: {
        citiesLabel: "Orașe cu service",
        pointsLabel: "Număr total de puncte de service",
        topCities: "Orașe principale",
        serviceCount: "{count} puncte de service",
        tapHint: "Atingeți harta",
        mapInstruction: "Selectați un oraș pentru a deschide informațiile de service.",
        modalEyebrow: "Detalii service",
        plateCode: "Cod județean: {code}",
        closeAria: "Închide",
        noService: "Nu a fost găsit niciun service înregistrat pentru această provincie."
      },
      products: {
        viewDetails: "Vezi detalii",
        items: {
          damper: {
            title: "BASCULANTĂ",
            description: "Caroserie din oțel <hardox></hardox>, sistem hidraulic, capacitate 20-40 m³",
            features: ["Oțel Hardox 450", "Sistem hidraulic", "Structură ușoară"]
          },
          dorse: {
            title: "REMORCĂ",
            description: "Rezistență ridicată, durată lungă de viață și opțiuni de design personalizat",
            features: ["Design personalizat", "Durabilitate ridicată", "Întreținere ușoară"]
          },
          kar: {
            title: "ECHIPAMENT DE DESZĂPEZIRE",
            description: "Soluții de basculantă adaptate cerințelor specifice ale clientului",
            features: ["Personalizare completă", "Suport R&D", "Producție rapidă"]
          }
        }
      },
      gallery: {
        slogan: "Alegerea celor mai buni"
      },
      stats: {
        exportCountries: "Țări de export",
        steelProcessing: "Prelucrare anuală a oțelului (tone)",
        experience: "Ani de experiență"
      }
    },
    damper: {
      items: {
        d24: {
          name: "ÖZ-D24 Basculantă",
          description:
            "Design orientat spre inginerie pentru condițiile grele din șantier și construcții. Opțiune de caroserie din <hardox></hardox>, șasiu ranforsat și descărcare rapidă pentru eficiență operațională maximă.",
          features: [
            "Opțiune caroserie Hardox",
            "Stabilitate ridicată la basculare",
            "Descărcare rapidă",
            "Șasiu ranforsat",
            "Întreținere ușoară"
          ],
          details: {
            hardox: {
              title: "Caroserie Hardox®",
              content: "Durată lungă de viață și costuri reduse de întreținere în condiții de uzură și impact."
            },
            sasi: {
              title: "Șasiu",
              content: "Structură de șasiu ranforsată, potrivită pentru utilizare în regim greu."
            },
            bosaltim: {
              title: "Descărcare",
              content: "Descărcare rapidă și controlată cu sistem hidraulic optimizat."
            },
            verimlilik: {
              title: "Eficiență",
              content: "Detalii de inginerie care sporesc continuitatea operațională."
            }
          }
        },
        d30: {
          name: "ÖZ-D30 Basculantă",
          description: "Cea mai puternică combinație caroserie-șasiu pentru încărcături de tonaj ridicat.",
          features: [
            "Utilizare în regim greu",
            "Volum optimizat",
            "Pereți laterali rezistenți",
            "Service facil",
            "Echipamente opționale"
          ],
          details: {
            kapasite: {
              title: "Capacitate",
              content: "Volum optimizat pentru operațiuni cu tonaj ridicat."
            },
            dayanim: {
              title: "Durabilitate",
              content: "Structură rezistentă la șocuri și uzură în exploatare intensivă."
            },
            donanim: {
              title: "Echipare",
              content: "Prelată, oblon, iluminare și alte opțiuni suplimentare."
            },
            uyumluluk: {
              title: "Compatibilitate",
              content: "Alternative de montaj pentru diferite cerințe de șasiu."
            }
          }
        },
        d21: {
          name: "ÖZ-D21 Basculantă",
          description: "Greutate echilibrată și costuri de exploatare economice pentru scenarii compacte de utilizare.",
          features: ["Design compact", "Exploatare economică", "Greutate echilibrată", "Maniabilitate ușoară", "Durată lungă de viață"],
          details: {
            kullanim: {
              title: "Utilizare",
              content: "Funcționare agilă în aplicații compacte de șantier."
            },
            agirlik: {
              title: "Greutate",
              content: "Capacitate maximă în limitele legale."
            },
            maliyet: {
              title: "Cost",
              content: "Cost redus de exploatare și întreținere simplificată."
            },
            performans: {
              title: "Performanță",
              content: "Funcționare stabilă în utilizare zilnică intensivă."
            }
          }
        }
      }
    },
    yariRomork: {
      items: {
        g22: {
          name: "ÖZ-G22 Semiremorcă",
          description:
            "Soluție fiabilă pentru transport greu pe distanțe lungi, cu volum de 22 m³, caroserie Hardox 450 și sistem de osii BPW.",
          features: ["Volum 22 m³", "Caroserie Hardox 450", "Tablă 5/6 mm", "Axă BPW (import)", "Bară spate rabatabilă"]
        },
        l500: {
          name: "ÖZ-L500 Semiremorcă",
          description: "Remorcă de înaltă performanță cu șasiu Hardox 500 și rampă hidraulică pentru operațiuni solicitante.",
          features: ["Axă Özkoç (locală)", "Șasiu Hardox 500", "Bară spate fixă", "Rampă hidraulică", "Laterale extensibile"]
        },
        m21: {
          name: "ÖZ-M21 Semiremorcă",
          description: "Transport eficient cu volum de 21 m³, caroserie ușoară și sistem automat de prelată.",
          features: ["Volum 21 m³", "Axă Özkoç", "Tablă 3/4 mm (ușoară)", "Prelată automată", "Capac cu manșon"]
        }
      }
    },
    ekEkipmanlar: {
      categories: {
        hidrolik: {
          title: "Sisteme hidraulice",
          desc: "Pompe, cilindri și sisteme de supape cu capacitate mare de presiune. Putere și durabilitate dovedite pentru condiții grele de lucru."
        },
        dingil: {
          title: "Osie și suspensie",
          desc: "Sisteme premium de osii și suspensie, inclusiv BPW și Özkoç, pentru fiabilitate și durată lungă de exploatare."
        },
        fren: {
          title: "Sisteme de frânare",
          desc: "Kituri de frânare compatibile EBS și ABS. Performanță maximă de frânare conform standardelor europene de siguranță."
        },
        elektrik: {
          title: "Sisteme electrice și iluminare",
          desc: "Sisteme de iluminare LED cu vizibilitate ridicată și conformitate ECE R48."
        },
        aksesuar: {
          title: "Accesorii pentru remorci",
          desc: "Lăzi de scule, rezervoare, picioare de sprijin și accesorii pentru configurații speciale."
        },
        yedekParca: {
          title: "Piese de schimb",
          desc: "Piese de schimb originale și garantate, cu opțiune de expediere în aceeași zi și timp minim de staționare a vehiculului."
        }
      },
      performance: {
        bullets: {
          0: "Garanție pentru produse originale și certificate",
          1: "Compatibilitate extinsă cu mărci și modele",
          2: "Prețuri competitive și opțiuni flexibile de plată",
          3: "Suport tehnic de consultanță oferit de specialiști"
        }
      },
      stats: {
        original: {
          value: "%100",
          label: "Garanție de produs original"
        },
        delivery: {
          value: "Rapidă",
          label: "Livrare din stoc"
        },
        support: {
          value: "Suport",
          label: "Înainte și după vânzare"
        }
      }
    },
    afterSales: {
      services: {
        servisAgi: {
          title: "Rețea de service autorizat",
          description:
            "Încredințați-vă flota unor tehnicieni certificați, echipați la standarde de fabrică, în 87 de puncte de service autorizat din 50 de provincii ale Turciei."
        },
        yedekParca: {
          title: "Piese de schimb originale",
          description: "Piese Özünlü 100% originale pentru un timp minim de imobilizare a vehiculului."
        },
        garanti: {
          title: "Acoperire în garanție",
          description: "Toate produsele noastre sunt acoperite de o garanție completă a producătorului."
        },
        teknikDestek: {
          title: "Asistență tehnică 24/7",
          description: "Echipa noastră de suport tehnic este disponibilă zi și noapte."
        }
      },
      documents: {
        damperManual: {
          title: "Manual de utilizare pentru basculantă",
          desc: "Instrucțiuni esențiale de utilizare și siguranță pentru gama de produse basculante."
        },
        dorseManual: {
          title: "Manual pentru remorcă și semiremorcă",
          desc: "Manual standard de utilizare pentru produsele generale de semiremorci."
        },
        generalManual: {
          title: "Manual general de produs și întreținere (TR/EN)",
          desc: "Instrucțiuni complete de întreținere și detalii tehnice pentru toate modelele de remorci."
        },
        damperSpec: {
          title: "Specificație tehnică pentru basculantă (TR/EN)",
          desc: "Specificații tehnice dedicate pentru vehicule basculante."
        }
      }
    },
    contact: {
      form: {
        hours: "Program de lucru",
        hoursValue: "Luni-vineri și sâ.: 09:00 - 18:30",
        name: "NUME COMPLET",
        namePlaceholder: "Numele dumneavoastră complet",
        company: "COMPANIE",
        companyPlaceholder: "Numele companiei",
        email: "E-MAIL",
        emailPlaceholder: "exemplu@companie.com",
        phone: "TELEFON",
        phonePlaceholder: "+40 ...",
        message: "MESAJ",
        messagePlaceholder: "Scrieți mesajul dumneavoastră aici..."
      },
      tabs: {
        sales: "VÂNZĂRI ȘI MARKETING",
        service: "SERVICII POST-VÂNZARE",
        export: "EXPORT",
        hr: "RESURSE UMANE"
      }
    },
    proposal: {
      configurator: "Configurator",
      selectedProduct: "Produs selectat",
      selectedSubtitle: "Completați formularul de ofertă pentru produsul selectat.",
      defaultSubtitle: "Specificați detaliile pentru o soluție adaptată nevoilor dumneavoastră.",
      clearSelection: "Selectați un alt produs sau utilizați configuratorul",
      stepQuantity: "Stabiliți cantitatea",
      stepPayment: "Metoda de plată",
      stepContact: "Informații de contact",
      vehicleInfo: "Informații despre vehicul",
      trailerSpecs: "Specificațiile remorcii",
      cargoType: "Tipul încărcăturii",
      dimensions: "Dimensiuni și cantitate",
      submit: "SOLICITAȚI OFERTĂ",
      submitting: "Se trimite...",
      successTitle: "Solicitarea a fost primită!",
      successMessage: "Formularul dumneavoastră de ofertă a fost trimis cu succes. Un reprezentant de vânzări vă va contacta în cel mai scurt timp.",
      newForm: "Creați un formular nou",
      kvkkNotice: "Datele dumneavoastră cu caracter personal sunt protejate conform legislației aplicabile privind protecția datelor.",
      payment: {
        cashTitle: "Numerar / Transfer bancar",
        cashDesc: "Reducere specială pentru plățile în numerar",
        creditTitle: "La termen / CEC",
        creditDesc: "Opțiuni flexibile de termen și rate"
      },
      fields: {
        quantity: "Cantitate dorită",
        brand: "Marca vehiculului",
        brandPh: "Ex.: Mercedes, Ford",
        model: "Modelul vehiculului",
        modelPh: "Ex.: 4140, Cargo",
        volume: "Volum dorit (m³)",
        volumePh: "Ex.: 30",
        axle: "Opțiune de axă",
        domestic: "Locală",
        foreign: "Import",
        cargo: "Încărcătură transportată",
        cargoPh: "Ex.: pământ, nisip, asfalt",
        thickness: "Grosime podea/lateral (mm)",
        thicknessPh: "Ex.: 5 mm / 4 mm",
        company: "Numele companiei",
        companyPh: "Denumirea companiei",
        contact: "Persoană de contact",
        contactPh: "Nume și prenume",
        phone: "Telefon",
        phonePh: "+40 ...",
        email: "E-mail",
        emailPh: "mail@companie.com",
        heardFrom: "De unde ați auzit de noi?",
        heardFromPh: "Google, Social Media, recomandare..."
      }
    },
    corporate: {
      hero: {
        badge: "Din 1977",
        titleLine1: "SEMNĂTURA",
        titleLine2: "VITEZEI ȘI ÎNCREDERII",
        description:
          "Cu aproape jumătate de secol de experiență, stabilim standardele în sectorul suprastructurilor pentru vehicule comerciale grele și construim viitorul pe baze solide."
      },
      values: {
        trust: {
          title: "ÎNCREDERE",
          desc: "De peste 45 de ani, ne respectăm fiecare promisiune făcută clienților, partenerilor și angajaților noștri."
        },
        quality: {
          title: "CALITATE",
          desc: "De la oțelul <hardox></hardox> până la cea mai fină execuție, urmărim excelența în fiecare etapă a producției."
        },
        innovation: {
          title: "INOVAȚIE",
          desc: "Analizăm nevoile industriei și, prin activitatea noastră de cercetare-dezvoltare, aducem tehnologiile viitorului în prezent."
        },
        speed: {
          title: "VITEZĂ",
          desc: "Prin procese de producție optimizate, livrăm rapid fără compromisuri privind calitatea și adăugăm viteză afacerii dumneavoastră."
        }
      },
      philosophy: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "NU PRELUCRĂM DOAR OȚEL,",
        titleLine2: "CI ȘI ÎNCREDERE.",
        p1: "<strong>Din 1977 până astăzi,</strong> ceea ce iese de pe liniile noastre de producție nu este doar o basculantă, ci forma concretă a aproape jumătate de secol de experiență, pasiune inginerească și inovație. Pentru noi, calitatea nu este o simplă etapă de control, ci însăși cultura noastră de producție.",
        p2: "Testate în geografii dificile și sub sarcini grele, produsele noastre sunt proiectate până la cel mai mic detaliu cu accent pe <durability>durabilitate</durability> și <performance>performanță</performance>. Îmbinăm robustețea oțelului <hardox></hardox> cu ingeniozitatea flexibilă a ingineriei turcești și stabilim standardele care ghidează industria.",
        quote: "În fiecare cordon de sudură, în fiecare montaj și la fiecare livrare avem un singur scop: să adăugăm forță puterii partenerilor noștri."
      },
      leader: {
        eyebrow: "Mesajul liderului",
        quote:
          "La Özünlü, nu producem doar echipamente; construim încredere. Fiecare basculantă și fiecare remorcă reflectă aproape jumătate de secol de experiență și pasiune inginerească.",
        name: "UFUK ÖZÜNLÜ",
        role: "Președintele Consiliului de Administrație",
        bio: "Fondată în 1977, Özünlü Damper este astăzi unul dintre producătorii de referință ai sectorului, exportând în peste 40 de țări. Producem la standarde mondiale cu titlul de Qualified Body Builder (constructor de suprastructuri autorizat).",
        imageAlt: "Ufuk Özünlü"
      },
      timeline: {
        title: "DINCOLO DE",
        titleHighlight: "TIMP",
        m1977: {
          title: "Punerea bazelor",
          desc: "Drumul producției a început într-un atelier de 30 m² din Okmeydanı, Istanbul, cu visuri mari."
        },
        m1985: {
          title: "Prima extindere",
          desc: "Mutarea facilităților de producție în Habipler, Istanbul, unde se află și astăzi."
        },
        m1991: {
          title: "Investiție în viitor",
          desc: "Achiziționarea actualului teren al fabricii și prima investiție majoră pe drumul către statutul de lider în suprastructuri."
        },
        m2005: {
          title: "Qualified Body Builder",
          desc: "Primul titlu \"Qualified Body Builder\" din sector, acordat de producătorii mondiali de camioane."
        },
        m2009: {
          title: "Creșterea capacității",
          desc: "Dublarea capacității de producție printr-o nouă abordare a managementului calității și investiții în utilaje."
        },
        mToday: {
          title: "Forță globală",
          desc: "Suprafață totală de producție de 30.000 m² în 3 unități separate, vânzări în toate cele 81 de provincii și export în peste 40 de țări."
        },
        yearToday: "Astăzi"
      },
      facilities: {
        title: "PUTERE DE PRODUCȚIE ȘI",
        titleHighlight: "IMPACT GLOBAL",
        description: "Combinăm forța ingineriei locale cu standardele globale și livrăm valoare în întreaga lume.",
        production: {
          title: "BAZĂ DE PRODUCȚIE",
          value: "30.000 m²",
          desc: "Producție de mare capacitate în 3 unități, cu 7.000 m² spațiu acoperit și 23.000 m² spațiu deschis."
        },
        global: {
          title: "ACOPERIRE GLOBALĂ",
          value: "40+ țări",
          desc: "O rețea extinsă de export care acoperă toate cele 81 de provincii ale Turciei și peste 40 de țări din lume."
        },
        quality: {
          title: "STANDARD DE CALITATE",
          value: "Certificat QBB",
          desc: "Primul brand din sector care deține titlul \"Qualified Body Builder\" (constructor de suprastructuri autorizat)."
        }
      }
    },
    career: {
      hero: {
        title: "MANAGEMENTUL",
        titleHighlight: "TALENTULUI",
        description: "Oferim un parcurs profesional unic pentru profesioniști pasionați și talentați, cu aspirații mari."
      },
      life: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "VIAȚA",
        titleLine2: "LA NOI",
        description:
          "Ca familie Özünlü, nu ne propunem doar să producem cele mai bune basculante, ci și să avem cei mai fericiți angajați. Inovația, dezvoltarea continuă și spiritul de echipă fac parte din ADN-ul nostru.",
        imageAlt: "Carieră la Özünlü {n}"
      },
      jobs: {
        title: "VĂ",
        titleHighlight: "AȘTEPTĂM",
        subtitle: "Faceți parte din echipa care modelează viitorul.",
        apply: "Aplică",
        noJobsTitle: "În prezent nu avem posturi deschise",
        noJobsDesc:
          "Totuși, suntem întotdeauna bucuroși să cunoaștem profesioniști talentați. Ne puteți trimite CV-ul pentru o aplicație generală sau ne puteți urmări pe rețelele sociale."
      }
    },
    mediaPage: {
      hero: {
        title: "CENTRU",
        titleHighlight: "MEDIA",
        description: "Știri din industrie, evoluții tehnologice și cele mai recente actualizări din universul Özünlü."
      },
      gallery: {
        title: "GALERIE",
        titleHighlight: "DE PRODUSE",
        description: "Explorați detaliile unei inginerii superioare și ale unei execuții impecabile.",
        imageAlt: "Galerie Özünlü Damper {n}",
        detailAlt: "Detaliu galerie"
      },
      insights: {
        title: "PERSPECTIVE",
        titleHighlight: "DIN INDUSTRIE",
        description: "Analize de specialitate despre sectorul vehiculelor comerciale grele, tehnologiile de producție și logistică.",
        readMore: "Citește mai mult",
        articles: {
          a1: {
            category: "ACADEMIE",
            title: "Calitatea oțelului în producția de basculante: Hardox și dincolo de acesta",
            excerpt:
              "Cum prelungește utilizarea oțelului de înaltă rezistență durata de viață a unei basculante? Comparație între Hardox 450 și 500 și analiză a rentabilității investiției.",
            date: "12 ianuarie 2025",
            readTime: "6 min de citit"
          },
          a2: {
            category: "INDUSTRIE",
            title: "Tendințele în logistică și transport pentru 2026",
            excerpt:
              "Schimbări în lanțurile globale de aprovizionare, reglementări privind eficiența combustibilului și oportunitățile care așteaptă sectorul transporturilor din Turcia.",
            date: "8 ianuarie 2025",
            readTime: "8 min de citit"
          },
          a3: {
            category: "SUSTENABILITATE",
            title: "Logistică verde: impactul asupra mediului al basculantelor ușoare",
            excerpt:
              "Este posibil să economisiți combustibil și să reduceți amprenta de carbon printr-un design de șasiu mai ușor. Analizăm subiectul cu date din R&D-ul Özünlü.",
            date: "3 ianuarie 2025",
            readTime: "5 min de citit"
          }
        }
      }
    },
    productsPage: {
      title: "EXPERIENȚĂ",
      titleHighlight: "INTERACTIVĂ",
      description:
        "Depășiți limitele cataloagelor clasice. Explorați capodoperele de inginerie Özünlü Damper la 360° și configurați singuri soluția ideală pentru proiectul dumneavoastră.",
      view360: {
        dragHint: "Trageți pentru a roti",
        bodyLabel: "MODELUL CAROSERIEI",
        disclaimer: "*Mockup vizual 3D cu titlu reprezentativ"
      },
      configurator: {
        title: "CONFIGURATOR",
        bodyColor: "Culoarea caroseriei",
        capacity: "Capacitate volumică",
        tires: "Tipul anvelopelor",
        summary: "Rezumat",
        colors: {
          blue: "Albastru Özünlü",
          gray: "Gri Quartz",
          navy: "Albastru nocturn",
          red: "Roșu flacără"
        },
        tireTypes: {
          standard: "Standard",
          offRoad: "Off-Road",
          heavyDuty: "Heavy Duty"
        }
      },
      techSpecs: {
        unload: {
          title: "Descărcare în 2 minute",
          desc: "Timp record de evacuare cu sistem hidraulic optimizat."
        },
        weight: {
          title: "Cu 15% mai ușor",
          desc: "Capacitate mai mare de încărcare datorită designului special din aliaj."
        },
        hardox: {
          title: "Caroserie Hardox 450",
          desc: "Rezistență maximă la uzură și impact datorită oțelului suedez."
        },
        balance: {
          title: "Sistem inteligent de echilibru",
          desc: "Tehnologie cu senzori activi care previne răsturnarea pe teren dificil."
        }
      }
    }
  },
  fr: {
    home: {
      whyChooseUs: {
        cardLabel: "La garantie Özünlü"
      },
      mapPreview: {
        citiesLabel: "Villes avec service",
        pointsLabel: "Nombre total de points de service",
        topCities: "Villes principales",
        serviceCount: "{count} points de service",
        tapHint: "Touchez la carte",
        mapInstruction: "Sélectionnez une ville pour afficher les informations de service.",
        modalEyebrow: "Détails du service",
        plateCode: "Code de plaque : {code}",
        closeAria: "Fermer",
        noService: "Aucun service enregistré n'a été trouvé pour cette province."
      },
      products: {
        viewDetails: "Voir les détails",
        items: {
          damper: {
            title: "BENNE",
            description: "Caisse en acier <hardox></hardox>, système hydraulique, capacité de 20 à 40 m³",
            features: ["Acier Hardox 450", "Système hydraulique", "Structure allégée"]
          },
          dorse: {
            title: "REMORQUE",
            description: "Grande résistance, longue durée de vie et options de conception sur mesure",
            features: ["Conception sur mesure", "Haute durabilité", "Entretien facile"]
          },
          kar: {
            title: "ÉQUIPEMENT DE DÉNEIGEMENT",
            description: "Solutions de benne adaptées aux besoins spécifiques de chaque client",
            features: ["Fabrication sur mesure", "Support R&D", "Production rapide"]
          }
        }
      },
      gallery: {
        slogan: "Le choix des meilleurs"
      },
      stats: {
        exportCountries: "Pays d'exportation",
        steelProcessing: "Traitement annuel de l'acier (tonnes)",
        experience: "Années d'expérience"
      }
    },
    damper: {
      items: {
        d24: {
          name: "ÖZ-D24 Benne",
          description:
            "Une conception axée sur l'ingénierie pour les conditions les plus exigeantes des chantiers et de la construction. Option de caisse en <hardox></hardox>, châssis renforcé et déchargement rapide pour une efficacité opérationnelle maximale.",
          features: [
            "Option caisse Hardox",
            "Grande stabilité au bennage",
            "Déchargement rapide",
            "Châssis renforcé",
            "Entretien facile"
          ],
          details: {
            hardox: {
              title: "Caisse Hardox®",
              content: "Longue durée de vie et faibles coûts d'entretien face à l'usure et aux impacts."
            },
            sasi: {
              title: "Châssis",
              content: "Structure de châssis renforcée, adaptée aux usages intensifs."
            },
            bosaltim: {
              title: "Déchargement",
              content: "Déchargement rapide et maîtrisé grâce à un système hydraulique optimisé."
            },
            verimlilik: {
              title: "Efficacité",
              content: "Des détails d'ingénierie qui renforcent la continuité opérationnelle."
            }
          }
        },
        d30: {
          name: "ÖZ-D30 Benne",
          description: "La combinaison caisse-châssis la plus puissante pour les charges à fort tonnage.",
          features: [
            "Utilisation intensive",
            "Volume optimisé",
            "Parois latérales résistantes",
            "Maintenance facilitée",
            "Équipements en option"
          ],
          details: {
            kapasite: {
              title: "Capacité",
              content: "Volume optimisé pour les opérations à tonnage élevé."
            },
            dayanim: {
              title: "Résistance",
              content: "Une structure résistante aux chocs et à l'usure pour les usages intensifs."
            },
            donanim: {
              title: "Équipement",
              content: "Bâche, ridelle, éclairage et autres options disponibles."
            },
            uyumluluk: {
              title: "Compatibilité",
              content: "Des alternatives de montage adaptées à différents besoins de châssis."
            }
          }
        },
        d21: {
          name: "ÖZ-D21 Benne",
          description: "Un poids équilibré et un coût d'exploitation économique pour les usages compacts.",
          features: ["Design compact", "Exploitation économique", "Poids équilibré", "Maniabilité facile", "Longue durée de vie"],
          details: {
            kullanim: {
              title: "Usage",
              content: "Une grande agilité pour les opérations sur sites compacts."
            },
            agirlik: {
              title: "Poids",
              content: "Capacité maximale dans le respect des limites légales."
            },
            maliyet: {
              title: "Coût",
              content: "Coût d'exploitation réduit et maintenance simplifiée."
            },
            performans: {
              title: "Performance",
              content: "Fonctionnement stable en usage quotidien intensif."
            }
          }
        }
      }
    },
    yariRomork: {
      items: {
        g22: {
          name: "ÖZ-G22 Semi-remorque",
          description:
            "Une solution fiable pour le transport lourd longue distance avec un volume de 22 m³, une caisse Hardox 450 et un système d'essieux BPW.",
          features: ["Volume de 22 m³", "Caisse Hardox 450", "Tôle 5/6 mm", "Essieu BPW (importé)", "Pare-chocs rabattable"]
        },
        l500: {
          name: "ÖZ-L500 Semi-remorque",
          description: "Une remorque haute performance dotée d'un châssis Hardox 500 et d'une rampe hydraulique pour les opérations intensives.",
          features: ["Essieu Özkoç (local)", "Châssis Hardox 500", "Pare-chocs fixe", "Rampe hydraulique", "Côtés extensibles"]
        },
        m21: {
          name: "ÖZ-M21 Semi-remorque",
          description: "Un transport efficace avec un volume de 21 m³, une caisse allégée et un système de bâche automatique.",
          features: ["Volume de 21 m³", "Essieu Özkoç", "Tôle 3/4 mm (légère)", "Bâche automatique", "Couvercle à manchon"]
        }
      }
    },
    ekEkipmanlar: {
      categories: {
        hidrolik: {
          title: "Systèmes hydrauliques",
          desc: "Pompes, vérins et systèmes de vannes à haute capacité de pression. Une puissance et une durabilité éprouvées pour les conditions de terrain les plus exigeantes."
        },
        dingil: {
          title: "Essieux et suspension",
          desc: "Systèmes premium d'essieux et de suspension, notamment BPW et Özkoç, pour une fiabilité durable."
        },
        fren: {
          title: "Systèmes de freinage",
          desc: "Kits de freinage compatibles EBS et ABS. Une performance de freinage maximale conforme aux normes européennes de sécurité."
        },
        elektrik: {
          title: "Électricité et éclairage",
          desc: "Systèmes d'éclairage LED à haute visibilité conformes à la norme ECE R48."
        },
        aksesuar: {
          title: "Accessoires pour remorques",
          desc: "Coffres à outils, réservoirs, béquilles et accessoires dédiés aux configurations spécifiques."
        },
        yedekParca: {
          title: "Pièces détachées",
          desc: "Pièces détachées d'origine garanties, avec expédition le jour même et immobilisation minimale du véhicule."
        }
      },
      performance: {
        bullets: {
          0: "Garantie de produits d'origine et certifiés",
          1: "Large compatibilité avec les marques et les modèles",
          2: "Tarification compétitive et solutions de paiement flexibles",
          3: "Accompagnement technique assuré par des experts"
        }
      },
      stats: {
        original: {
          value: "%100",
          label: "Garantie de produit d'origine"
        },
        delivery: {
          value: "Rapide",
          label: "Livraison sur stock"
        },
        support: {
          value: "Support",
          label: "Avant et après-vente"
        }
      }
    },
    afterSales: {
      services: {
        servisAgi: {
          title: "Réseau de service agréé",
          description:
            "Confiez votre flotte à des techniciens certifiés et équipés selon les standards usine, dans 87 points de service agréés répartis dans 50 provinces de Turquie."
        },
        yedekParca: {
          title: "Pièces détachées d'origine",
          description: "Des pièces Özünlü 100 % d'origine pour réduire au minimum l'immobilisation du véhicule."
        },
        garanti: {
          title: "Couverture de garantie",
          description: "Tous nos produits sont couverts par une garantie constructeur complète."
        },
        teknikDestek: {
          title: "Assistance technique 24/7",
          description: "Notre équipe d'assistance technique est joignable jour et nuit."
        }
      },
      documents: {
        damperManual: {
          title: "Manuel d'utilisation de la benne",
          desc: "Consignes essentielles d'utilisation et de sécurité pour la gamme de bennes."
        },
        dorseManual: {
          title: "Guide remorque et semi-remorque",
          desc: "Manuel standard d'utilisation pour les produits généraux de semi-remorques."
        },
        generalManual: {
          title: "Manuel général produit et maintenance (TR/EN)",
          desc: "Guide complet de maintenance et détails techniques pour l'ensemble des modèles de remorques."
        },
        damperSpec: {
          title: "Spécification technique benne (TR/EN)",
          desc: "Spécifications techniques dédiées aux véhicules bennes."
        }
      }
    },
    contact: {
      form: {
        hours: "Horaires de travail",
        hoursValue: "Lun.-ven. et sam. : 09:00 - 18:30",
        name: "NOM ET PRÉNOM",
        namePlaceholder: "Vos nom et prénom",
        company: "SOCIÉTÉ",
        companyPlaceholder: "Nom de l'entreprise",
        email: "E-MAIL",
        emailPlaceholder: "exemple@entreprise.com",
        phone: "TÉLÉPHONE",
        phonePlaceholder: "+33 ...",
        message: "MESSAGE",
        messagePlaceholder: "Rédigez votre message ici..."
      },
      tabs: {
        sales: "VENTES ET MARKETING",
        service: "SERVICES APRÈS-VENTE",
        export: "EXPORT",
        hr: "RESSOURCES HUMAINES"
      }
    },
    proposal: {
      configurator: "Configurateur",
      selectedProduct: "Produit sélectionné",
      selectedSubtitle: "Remplissez le formulaire de devis pour le produit sélectionné.",
      defaultSubtitle: "Précisez les détails pour une solution adaptée à vos besoins.",
      clearSelection: "Choisissez un autre produit ou utilisez le configurateur",
      stepQuantity: "Définir la quantité",
      stepPayment: "Mode de paiement",
      stepContact: "Coordonnées",
      vehicleInfo: "Informations véhicule",
      trailerSpecs: "Caractéristiques de la remorque",
      cargoType: "Type de chargement",
      dimensions: "Dimensions et quantité",
      submit: "DEMANDER UN DEVIS",
      submitting: "Envoi en cours...",
      successTitle: "Votre demande a bien été reçue !",
      successMessage: "Votre formulaire de devis a bien été transmis. Notre équipe commerciale vous contactera dans les plus brefs délais.",
      newForm: "Créer un nouveau formulaire",
      kvkkNotice: "Vos données personnelles sont protégées conformément à la réglementation applicable en matière de protection des données.",
      payment: {
        cashTitle: "Comptant / Virement bancaire",
        cashDesc: "Remise spéciale pour les paiements comptants",
        creditTitle: "Paiement différé / Chèque",
        creditDesc: "Options de délai et d'échelonnement disponibles"
      },
      fields: {
        quantity: "Quantité souhaitée",
        brand: "Marque du véhicule",
        brandPh: "Ex. : Mercedes, Ford",
        model: "Modèle du véhicule",
        modelPh: "Ex. : 4140, Cargo",
        volume: "Volume souhaité (m³)",
        volumePh: "Ex. : 30",
        axle: "Option d'essieu",
        domestic: "Local",
        foreign: "Importé",
        cargo: "Chargement transporté",
        cargoPh: "Ex. : déblais, sable, asphalte",
        thickness: "Épaisseur fond/côtés (mm)",
        thicknessPh: "Ex. : 5 mm / 4 mm",
        company: "Nom de l'entreprise",
        companyPh: "Raison sociale",
        contact: "Personne de contact",
        contactPh: "Nom et prénom",
        phone: "Téléphone",
        phonePh: "+33 ...",
        email: "E-mail",
        emailPh: "mail@entreprise.com",
        heardFrom: "Comment nous avez-vous connus ?",
        heardFromPh: "Google, réseaux sociaux, recommandation..."
      }
    },
    corporate: {
      hero: {
        badge: "Depuis 1977",
        titleLine1: "LA SIGNATURE DE",
        titleLine2: "LA VITESSE ET DE LA CONFIANCE",
        description:
          "Avec près d'un demi-siècle d'expérience, nous définissons les standards du secteur des superstructures pour véhicules commerciaux lourds et construisons l'avenir sur des bases solides."
      },
      values: {
        trust: {
          title: "CONFIANCE",
          desc: "Depuis plus de 45 ans, nous tenons chaque engagement pris auprès de nos clients, partenaires et collaborateurs."
        },
        quality: {
          title: "QUALITÉ",
          desc: "De l'acier <hardox></hardox> aux finitions les plus soignées, nous visons l'excellence à chaque étape de la production."
        },
        innovation: {
          title: "INNOVATION",
          desc: "Nous analysons les besoins du secteur et, grâce à notre R&D, nous faisons entrer dès aujourd'hui les technologies de demain."
        },
        speed: {
          title: "VITESSE",
          desc: "Grâce à des processus de production optimisés, nous livrons rapidement sans compromettre la qualité et donnons de l'élan à votre activité."
        }
      },
      philosophy: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "NOUS NE FAÇONNONS PAS SEULEMENT L'ACIER,",
        titleLine2: "NOUS FAÇONNONS LA CONFIANCE.",
        p1: "<strong>Depuis 1977 jusqu'à aujourd'hui,</strong> ce qui sort de notre ligne de production n'est pas simplement une benne, mais la concrétisation de près d'un demi-siècle d'expérience, de passion pour l'ingénierie et d'innovation. Pour nous, la qualité n'est pas une simple étape de contrôle ; c'est notre culture de production.",
        p2: "Testés dans des environnements difficiles et sous de lourdes charges, nos produits sont conçus jusque dans les moindres détails avec une attention particulière à la <durability>durabilité</durability> et à la <performance>performance</performance>. Nous associons la robustesse de l'acier <hardox></hardox> à l'ingéniosité de l'ingénierie turque pour définir les standards qui orientent le secteur.",
        quote: "Dans chaque cordon de soudure, chaque assemblage et chaque livraison, nous poursuivons un seul objectif : renforcer la puissance de nos partenaires."
      },
      leader: {
        eyebrow: "Message du dirigeant",
        quote:
          "Chez Özünlü, nous ne fabriquons pas seulement des produits ; nous construisons la confiance. Chaque benne et chaque remorque reflètent près d'un demi-siècle d'expérience et de passion pour l'ingénierie.",
        name: "UFUK ÖZÜNLÜ",
        role: "Président du Conseil d'administration",
        bio: "Fondée en 1977, Özünlü Damper figure aujourd'hui parmi les fabricants de référence du secteur, avec des exportations vers plus de 40 pays. Nous produisons selon des standards mondiaux avec le titre de Qualified Body Builder (carrossier constructeur agréé).",
        imageAlt: "Ufuk Özünlü"
      },
      timeline: {
        title: "AU-DELÀ DU",
        titleHighlight: "TEMPS",
        m1977: {
          title: "Les fondations",
          desc: "Le parcours industriel commence dans un atelier de 30 m² à Okmeydanı, Istanbul, avec de grandes ambitions."
        },
        m1985: {
          title: "Première expansion",
          desc: "Transfert des installations de production à Habipler, Istanbul, où elles se trouvent encore aujourd'hui."
        },
        m1991: {
          title: "Investir dans l'avenir",
          desc: "Acquisition du terrain actuel de l'usine et premier investissement majeur sur la voie du leadership dans les superstructures."
        },
        m2005: {
          title: "Qualified Body Builder",
          desc: "Premier titre \"Qualified Body Builder\" du secteur, décerné par les principaux constructeurs mondiaux de camions."
        },
        m2009: {
          title: "Hausse de capacité",
          desc: "Doublement de la capacité de production grâce à une nouvelle approche qualité et à des investissements machines."
        },
        mToday: {
          title: "Puissance mondiale",
          desc: "30 000 m² de surface de production sur 3 sites, des ventes dans les 81 provinces et des exportations vers plus de 40 pays."
        },
        yearToday: "Aujourd'hui"
      },
      facilities: {
        title: "PUISSANCE DE PRODUCTION ET",
        titleHighlight: "IMPACT MONDIAL",
        description: "Nous allions la force de l'ingénierie locale aux standards internationaux pour créer de la valeur dans le monde entier.",
        production: {
          title: "PÔLE DE PRODUCTION",
          value: "30 000 m²",
          desc: "Production à haute capacité sur 3 sites distincts, avec 7 000 m² couverts et 23 000 m² en plein air."
        },
        global: {
          title: "PORTEE MONDIALE",
          value: "40+ pays",
          desc: "Un réseau d'exportation étendu couvrant les 81 provinces de Turquie et plus de 40 pays à travers le monde."
        },
        quality: {
          title: "STANDARD QUALITÉ",
          value: "Certificat QBB",
          desc: "La première marque du secteur à détenir le titre de \"Qualified Body Builder\" (carrossier constructeur agréé)."
        }
      }
    },
    career: {
      hero: {
        title: "GESTION DES",
        titleHighlight: "TALENTS",
        description: "Nous proposons un parcours professionnel unique aux professionnels passionnés et talentueux qui voient grand."
      },
      life: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "LA VIE",
        titleLine2: "CHEZ NOUS",
        description:
          "Au sein de la famille Özünlü, nous ne visons pas seulement à produire les meilleures bennes, mais aussi à offrir le meilleur environnement à nos collaborateurs. Innovation, développement continu et esprit d'équipe font partie de notre ADN.",
        imageAlt: "Carrière chez Özünlü {n}"
      },
      jobs: {
        title: "NOUS VOUS",
        titleHighlight: "ATTENDONS",
        subtitle: "Rejoignez l'équipe qui façonne l'avenir.",
        apply: "Postuler",
        noJobsTitle: "Nous n'avons actuellement aucun poste ouvert",
        noJobsDesc:
          "Nous sommes toutefois toujours heureux de rencontrer des profils talentueux. Vous pouvez nous envoyer votre CV pour une candidature spontanée ou suivre nos comptes sur les réseaux sociaux."
      }
    },
    mediaPage: {
      hero: {
        title: "CENTRE",
        titleHighlight: "MÉDIA",
        description: "Actualités du secteur, évolutions technologiques et dernières nouvelles de l'univers Özünlü."
      },
      gallery: {
        title: "GALERIE",
        titleHighlight: "PRODUITS",
        description: "Découvrez dans le détail une ingénierie de haut niveau et une finition irréprochable.",
        imageAlt: "Galerie Özünlü Damper {n}",
        detailAlt: "Détail de la galerie"
      },
      insights: {
        title: "ANALYSES",
        titleHighlight: "SECTORIELLES",
        description: "Des analyses d'experts sur le secteur du véhicule industriel lourd, les technologies de production et la logistique.",
        readMore: "Lire la suite",
        articles: {
          a1: {
            category: "ACADÉMIE",
            title: "La qualité de l'acier dans la fabrication des bennes : Hardox et au-delà",
            excerpt:
              "Comment l'utilisation d'un acier à haute résistance prolonge-t-elle la durée de vie d'une benne ? Comparaison entre Hardox 450 et 500 et analyse du retour sur investissement.",
            date: "12 janvier 2025",
            readTime: "6 min de lecture"
          },
          a2: {
            category: "SECTEUR",
            title: "Tendances 2026 de la logistique et du transport",
            excerpt:
              "Évolutions de la chaîne d'approvisionnement mondiale, réglementation sur l'efficacité énergétique et opportunités pour le secteur turc du transport.",
            date: "8 janvier 2025",
            readTime: "8 min de lecture"
          },
          a3: {
            category: "DURABILITÉ",
            title: "Logistique verte : l'impact environnemental des bennes allégées",
            excerpt:
              "Réduire la consommation de carburant et l'empreinte carbone grâce à un châssis plus léger est possible. Nous l'analysons avec les données R&D d'Özünlü.",
            date: "3 janvier 2025",
            readTime: "5 min de lecture"
          }
        }
      }
    },
    productsPage: {
      title: "EXPÉRIENCE",
      titleHighlight: "INTERACTIVE",
      description:
        "Allez au-delà des catalogues classiques. Découvrez les prouesses d'ingénierie d'Özünlü Damper en 360° et composez vous-même la configuration idéale pour votre projet.",
      view360: {
        dragHint: "Faites glisser pour tourner",
        bodyLabel: "MODÈLE DE CAISSE",
        disclaimer: "*Visuel 3D représentatif"
      },
      configurator: {
        title: "CONFIGURATEUR",
        bodyColor: "Couleur de la caisse",
        capacity: "Capacité volumique",
        tires: "Type de pneumatiques",
        summary: "Résumé",
        colors: {
          blue: "Bleu Özünlü",
          gray: "Gris quartz",
          navy: "Bleu nuit",
          red: "Rouge flamme"
        },
        tireTypes: {
          standard: "Standard",
          offRoad: "Tout-terrain",
          heavyDuty: "Heavy Duty"
        }
      },
      techSpecs: {
        unload: {
          title: "Déchargement en 2 minutes",
          desc: "Un temps de vidage record grâce à un système hydraulique optimisé."
        },
        weight: {
          title: "15 % plus léger",
          desc: "Une plus grande capacité de charge grâce à une conception spécifique en alliage."
        },
        hardox: {
          title: "Caisse Hardox 450",
          desc: "Résistance maximale à l'usure et aux impacts grâce à l'acier suédois."
        },
        balance: {
          title: "Système d'équilibre intelligent",
          desc: "Technologie de capteurs actifs qui prévient le renversement sur terrain difficile."
        }
      }
    }
  },
  es: {
    home: {
      whyChooseUs: {
        cardLabel: "La garantía de Özünlü"
      },
      mapPreview: {
        citiesLabel: "Ciudades con servicio",
        pointsLabel: "Total de puntos de servicio",
        topCities: "Ciudades destacadas",
        serviceCount: "{count} puntos de servicio",
        tapHint: "Toque el mapa",
        mapInstruction: "Seleccione una ciudad para abrir la información del servicio.",
        modalEyebrow: "Detalles del servicio",
        plateCode: "Código de matrícula: {code}",
        closeAria: "Cerrar",
        noService: "No se encontró ningún servicio registrado para esta provincia."
      },
      products: {
        viewDetails: "Ver detalles",
        items: {
          damper: {
            title: "VOLQUETE",
            description: "Caja de acero <hardox></hardox>, sistema hidráulico, capacidad de 20-40 m³",
            features: ["Acero Hardox 450", "Sistema hidráulico", "Estructura ligera"]
          },
          dorse: {
            title: "REMOLQUE",
            description: "Alta resistencia, larga vida útil y opciones de diseño personalizado",
            features: ["Diseño personalizado", "Alta durabilidad", "Mantenimiento sencillo"]
          },
          kar: {
            title: "EQUIPO QUITANIEVES",
            description: "Soluciones de volquete adaptadas a las necesidades específicas de cada cliente",
            features: ["Fabricación a medida", "Apoyo de I+D", "Producción rápida"]
          }
        }
      },
      gallery: {
        slogan: "La elección de los mejores"
      },
      stats: {
        exportCountries: "Países de exportación",
        steelProcessing: "Procesamiento anual de acero (toneladas)",
        experience: "Años de experiencia"
      }
    },
    damper: {
      items: {
        d24: {
          name: "ÖZ-D24 Volquete",
          description:
            "Diseño orientado a la ingeniería para las duras condiciones de obra y construcción. Opción de caja de <hardox></hardox>, chasis reforzado y descarga rápida para una máxima eficiencia operativa.",
          features: [
            "Opción de caja Hardox",
            "Alta estabilidad de elevación",
            "Descarga rápida",
            "Chasis reforzado",
            "Mantenimiento sencillo"
          ],
          details: {
            hardox: {
              title: "Caja Hardox®",
              content: "Larga vida útil y bajo coste de mantenimiento frente al desgaste y los impactos."
            },
            sasi: {
              title: "Chasis",
              content: "Estructura de chasis reforzada, apta para trabajo pesado."
            },
            bosaltim: {
              title: "Descarga",
              content: "Descarga rápida y controlada con un sistema hidráulico optimizado."
            },
            verimlilik: {
              title: "Eficiencia",
              content: "Detalles de ingeniería que aumentan la continuidad operativa."
            }
          }
        },
        d30: {
          name: "ÖZ-D30 Volquete",
          description: "La combinación más robusta de caja y chasis para cargas de gran tonelaje.",
          features: [
            "Uso de servicio pesado",
            "Volumen optimizado",
            "Paredes laterales reforzadas",
            "Facilidad de servicio",
            "Equipamiento opcional"
          ],
          details: {
            kapasite: {
              title: "Capacidad",
              content: "Volumen optimizado para operaciones de alto tonelaje."
            },
            dayanim: {
              title: "Resistencia",
              content: "Estructura resistente al desgaste y a los impactos en operaciones intensivas."
            },
            donanim: {
              title: "Equipamiento",
              content: "Lona, tapa, iluminación y otras opciones disponibles."
            },
            uyumluluk: {
              title: "Compatibilidad",
              content: "Alternativas de montaje adecuadas para distintas necesidades de chasis."
            }
          }
        },
        d21: {
          name: "ÖZ-D21 Volquete",
          description: "Peso equilibrado y costes operativos económicos para escenarios compactos de uso.",
          features: ["Diseño compacto", "Operación económica", "Peso equilibrado", "Maniobra sencilla", "Larga vida útil"],
          details: {
            kullanim: {
              title: "Uso",
              content: "Trabajo ágil en operaciones compactas de obra."
            },
            agirlik: {
              title: "Peso",
              content: "Capacidad máxima dentro de los límites legales."
            },
            maliyet: {
              title: "Coste",
              content: "Coste operativo económico y mantenimiento sencillo."
            },
            performans: {
              title: "Rendimiento",
              content: "Funcionamiento estable en un uso diario intensivo."
            }
          }
        }
      }
    },
    yariRomork: {
      items: {
        g22: {
          name: "ÖZ-G22 Semirremolque",
          description:
            "Solución fiable para transporte pesado de larga distancia con volumen de 22 m³, caja Hardox 450 y sistema de ejes BPW.",
          features: ["Volumen de 22 m³", "Caja Hardox 450", "Chapa de 5/6 mm", "Eje BPW (importado)", "Parachoques abatible"]
        },
        l500: {
          name: "ÖZ-L500 Semirremolque",
          description: "Remolque de alto rendimiento con chasis Hardox 500 y rampa hidráulica para operaciones exigentes.",
          features: ["Eje Özkoç (nacional)", "Chasis Hardox 500", "Parachoques fijo", "Rampa hidráulica", "Laterales extensibles"]
        },
        m21: {
          name: "ÖZ-M21 Semirremolque",
          description: "Transporte eficiente con volumen de 21 m³, carrocería aligerada y sistema automático de lona.",
          features: ["Volumen de 21 m³", "Eje Özkoç", "Chapa de 3/4 mm (ligera)", "Lona automática", "Tapa con manguito"]
        }
      }
    },
    ekEkipmanlar: {
      categories: {
        hidrolik: {
          title: "Sistemas hidráulicos",
          desc: "Bombas, cilindros y sistemas de válvulas de alta capacidad de presión. Potencia y durabilidad probadas para las condiciones de trabajo más exigentes."
        },
        dingil: {
          title: "Ejes y suspensión",
          desc: "Sistemas premium de ejes y suspensión, incluidos BPW y Özkoç, para una fiabilidad duradera."
        },
        fren: {
          title: "Sistemas de freno",
          desc: "Kits de freno compatibles con EBS y ABS. Máximo rendimiento de frenado conforme a los estándares europeos de seguridad."
        },
        elektrik: {
          title: "Sistema eléctrico e iluminación",
          desc: "Sistemas de iluminación LED de alta visibilidad con conformidad ECE R48."
        },
        aksesuar: {
          title: "Accesorios para remolques",
          desc: "Cajas de herramientas, depósitos, patas de apoyo y accesorios para configuraciones especiales."
        },
        yedekParca: {
          title: "Repuestos",
          desc: "Repuestos originales y garantizados, con opción de envío el mismo día y tiempo mínimo de inmovilización del vehículo."
        }
      },
      performance: {
        bullets: {
          0: "Garantía de productos originales y certificados",
          1: "Amplia compatibilidad con marcas y modelos",
          2: "Precios competitivos y opciones de pago flexibles",
          3: "Asesoramiento técnico especializado"
        }
      },
      stats: {
        original: {
          value: "%100",
          label: "Garantía de producto original"
        },
        delivery: {
          value: "Rápida",
          label: "Entrega desde stock"
        },
        support: {
          value: "Soporte",
          label: "Antes y después de la venta"
        }
      }
    },
    afterSales: {
      services: {
        servisAgi: {
          title: "Red de servicio autorizada",
          description:
            "Confíe su flota a técnicos certificados con equipamiento conforme a los estándares de fábrica en 87 puntos de servicio autorizados distribuidos en 50 provincias de Turquía."
        },
        yedekParca: {
          title: "Repuestos originales",
          description: "Piezas Özünlü 100 % originales para minimizar el tiempo de inmovilización del vehículo."
        },
        garanti: {
          title: "Cobertura de garantía",
          description: "Todos nuestros productos están cubiertos por una garantía integral del fabricante."
        },
        teknikDestek: {
          title: "Asistencia técnica 24/7",
          description: "Nuestro equipo de soporte técnico está disponible día y noche."
        }
      },
      documents: {
        damperManual: {
          title: "Manual de uso del volquete",
          desc: "Instrucciones básicas de uso y seguridad para la gama de productos volquete."
        },
        dorseManual: {
          title: "Manual de remolque y semirremolque",
          desc: "Manual estándar de uso para los productos generales de semirremolque."
        },
        generalManual: {
          title: "Manual general de producto y mantenimiento (TR/EN)",
          desc: "Guía completa de mantenimiento y detalles técnicos para todos los modelos de remolque."
        },
        damperSpec: {
          title: "Especificación técnica de volquete (TR/EN)",
          desc: "Especificaciones técnicas específicas para vehículos volquete."
        }
      }
    },
    contact: {
      form: {
        hours: "Horario de trabajo",
        hoursValue: "Lun. a vie. y sáb.: 09:00 - 18:30",
        name: "NOMBRE Y APELLIDOS",
        namePlaceholder: "Su nombre completo",
        company: "EMPRESA",
        companyPlaceholder: "Nombre de la empresa",
        email: "CORREO ELECTRÓNICO",
        emailPlaceholder: "ejemplo@empresa.com",
        phone: "TELÉFONO",
        phonePlaceholder: "+34 ...",
        message: "MENSAJE",
        messagePlaceholder: "Escriba aquí su mensaje..."
      },
      tabs: {
        sales: "VENTAS Y MARKETING",
        service: "SERVICIOS POSVENTA",
        export: "EXPORTACIÓN",
        hr: "RECURSOS HUMANOS"
      }
    },
    proposal: {
      configurator: "Configurador",
      selectedProduct: "Producto seleccionado",
      selectedSubtitle: "Complete el formulario de presupuesto para el producto seleccionado.",
      defaultSubtitle: "Defina los detalles para una solución adaptada a sus necesidades.",
      clearSelection: "Seleccione otro producto o utilice el configurador",
      stepQuantity: "Definir cantidad",
      stepPayment: "Método de pago",
      stepContact: "Datos de contacto",
      vehicleInfo: "Información del vehículo",
      trailerSpecs: "Especificaciones del remolque",
      cargoType: "Tipo de carga",
      dimensions: "Dimensiones y cantidad",
      submit: "SOLICITAR PRESUPUESTO",
      submitting: "Enviando...",
      successTitle: "¡Hemos recibido su solicitud!",
      successMessage: "Su formulario de presupuesto se ha enviado correctamente. Un representante comercial se pondrá en contacto con usted lo antes posible.",
      newForm: "Crear un nuevo formulario",
      kvkkNotice: "Sus datos personales están protegidos de acuerdo con la normativa aplicable en materia de protección de datos.",
      payment: {
        cashTitle: "Contado / Transferencia bancaria",
        cashDesc: "Descuento especial para pagos al contado",
        creditTitle: "Pago aplazado / Cheque",
        creditDesc: "Opciones de plazo y financiación flexibles"
      },
      fields: {
        quantity: "Cantidad solicitada",
        brand: "Marca del vehículo",
        brandPh: "Ej.: Mercedes, Ford",
        model: "Modelo del vehículo",
        modelPh: "Ej.: 4140, Cargo",
        volume: "Volumen deseado (m³)",
        volumePh: "Ej.: 30",
        axle: "Opción de eje",
        domestic: "Nacional",
        foreign: "Importado",
        cargo: "Carga a transportar",
        cargoPh: "Ej.: escombros, arena, asfalto",
        thickness: "Espesor de piso/laterales (mm)",
        thicknessPh: "Ej.: 5 mm / 4 mm",
        company: "Nombre de la empresa",
        companyPh: "Razón social",
        contact: "Persona de contacto",
        contactPh: "Nombre y apellidos",
        phone: "Teléfono",
        phonePh: "+34 ...",
        email: "Correo electrónico",
        emailPh: "mail@empresa.com",
        heardFrom: "¿Cómo nos conoció?",
        heardFromPh: "Google, redes sociales, recomendación..."
      }
    },
    corporate: {
      hero: {
        badge: "Desde 1977",
        titleLine1: "LA FIRMA DE",
        titleLine2: "LA VELOCIDAD Y LA CONFIANZA",
        description:
          "Con casi medio siglo de experiencia, marcamos los estándares del sector de las superestructuras para vehículos comerciales pesados y construimos el futuro sobre bases sólidas."
      },
      values: {
        trust: {
          title: "CONFIANZA",
          desc: "Durante más de 45 años hemos respaldado cada promesa hecha a nuestros clientes, socios y empleados."
        },
        quality: {
          title: "CALIDAD",
          desc: "Desde el acero <hardox></hardox> hasta el acabado más minucioso, perseguimos la excelencia en cada etapa de la producción."
        },
        innovation: {
          title: "INNOVACIÓN",
          desc: "Analizamos las necesidades del sector y, a través de nuestra I+D, acercamos al presente las tecnologías del futuro."
        },
        speed: {
          title: "VELOCIDAD",
          desc: "Gracias a procesos de producción optimizados, entregamos con rapidez sin comprometer la calidad y aportamos velocidad a su negocio."
        }
      },
      philosophy: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "NO SOLO TRABAJAMOS EL ACERO,",
        titleLine2: "TAMBIÉN FORJAMOS CONFIANZA.",
        p1: "<strong>Desde 1977 hasta hoy,</strong> lo que sale de nuestra línea de producción no es solo un volquete, sino la forma tangible de casi medio siglo de experiencia, pasión por la ingeniería e innovación. Para nosotros, la calidad no es una etapa de control; es nuestra propia cultura de producción.",
        p2: "Probados en geografías exigentes y bajo cargas pesadas, nuestros productos se diseñan hasta el último detalle con foco en la <durability>durabilidad</durability> y el <performance>rendimiento</performance>. Combinamos la robustez del acero <hardox></hardox> con la agilidad de la ingeniería turca para definir los estándares que marcan el rumbo del sector.",
        quote: "En cada cordón de soldadura, en cada montaje y en cada entrega perseguimos un único objetivo: sumar fuerza a la fortaleza de nuestros socios."
      },
      leader: {
        eyebrow: "Mensaje del líder",
        quote:
          "En Özünlü no solo fabricamos productos; construimos confianza. Cada volquete y cada remolque reflejan casi medio siglo de experiencia y pasión por la ingeniería.",
        name: "UFUK ÖZÜNLÜ",
        role: "Presidente del Consejo de Administración",
        bio: "Fundada en 1977, Özünlü Damper es hoy uno de los fabricantes de referencia del sector, con exportaciones a más de 40 países. Producimos con estándares mundiales bajo el título de Qualified Body Builder (carrocero autorizado).",
        imageAlt: "Ufuk Özünlü"
      },
      timeline: {
        title: "MÁS ALLÁ DEL",
        titleHighlight: "TIEMPO",
        m1977: {
          title: "Sentando las bases",
          desc: "El camino de la producción comenzó en un taller de 30 m² en Okmeydanı, Estambul, con grandes sueños."
        },
        m1985: {
          title: "Primera expansión",
          desc: "Traslado de las instalaciones de producción a Habipler, Estambul, donde siguen ubicadas hoy."
        },
        m1991: {
          title: "Invertir en el futuro",
          desc: "Compra del actual terreno de fábrica y primera gran inversión en el camino para convertirse en un líder de las superestructuras."
        },
        m2005: {
          title: "Qualified Body Builder",
          desc: "El primer título \"Qualified Body Builder\" del sector, otorgado por los principales fabricantes mundiales de camiones."
        },
        m2009: {
          title: "Aumento de capacidad",
          desc: "Duplicación de la capacidad de producción gracias a un nuevo enfoque de gestión de calidad y a inversiones en maquinaria."
        },
        mToday: {
          title: "Potencia global",
          desc: "30.000 m² de superficie total de producción en 3 instalaciones, ventas en las 81 provincias y exportación a más de 40 países."
        },
        yearToday: "Actualidad"
      },
      facilities: {
        title: "POTENCIA PRODUCTIVA E",
        titleHighlight: "IMPACTO GLOBAL",
        description: "Combinamos la fuerza de la ingeniería local con los estándares globales para aportar valor en todo el mundo.",
        production: {
          title: "CENTRO DE PRODUCCIÓN",
          value: "30.000 m²",
          desc: "Producción de alta capacidad en 3 instalaciones con 7.000 m² cubiertos y 23.000 m² de área abierta."
        },
        global: {
          title: "ALCANCE GLOBAL",
          value: "Más de 40 países",
          desc: "Una amplia red de exportación que abarca las 81 provincias de Turquía y más de 40 países en todo el mundo."
        },
        quality: {
          title: "ESTÁNDAR DE CALIDAD",
          value: "Certificado QBB",
          desc: "La primera marca del sector en contar con el título de \"Qualified Body Builder\" (carrocero autorizado)."
        }
      }
    },
    career: {
      hero: {
        title: "GESTIÓN DEL",
        titleHighlight: "TALENTO",
        description: "Ofrecemos una trayectoria profesional única para profesionales talentosos, apasionados y con grandes ambiciones."
      },
      life: {
        watermark: "ÖZÜNLÜ",
        titleLine1: "LA VIDA",
        titleLine2: "CON NOSOTROS",
        description:
          "Como familia Özünlü, no solo aspiramos a fabricar los mejores volquetes, sino también a contar con los empleados más satisfechos. La innovación, el desarrollo continuo y el espíritu de equipo forman parte de nuestro ADN.",
        imageAlt: "Carrera en Özünlü {n}"
      },
      jobs: {
        title: "LE",
        titleHighlight: "ESPERAMOS",
        subtitle: "Forme parte del equipo que está dando forma al futuro.",
        apply: "Postularse",
        noJobsTitle: "Actualmente no tenemos vacantes abiertas",
        noJobsDesc:
          "Aun así, siempre nos entusiasma conocer a profesionales con talento. Puede enviarnos su CV como candidatura general o seguirnos en nuestras redes sociales."
      }
    },
    mediaPage: {
      hero: {
        title: "CENTRO",
        titleHighlight: "DE MEDIOS",
        description: "Noticias del sector, avances tecnológicos y las últimas novedades del mundo de Özünlü."
      },
      gallery: {
        title: "GALERÍA",
        titleHighlight: "DE PRODUCTOS",
        description: "Explore al detalle una ingeniería superior y una ejecución impecable.",
        imageAlt: "Galería Özünlü Damper {n}",
        detailAlt: "Detalle de la galería"
      },
      insights: {
        title: "ANÁLISIS",
        titleHighlight: "DEL SECTOR",
        description: "Análisis especializados sobre el sector de los vehículos comerciales pesados, las tecnologías de producción y la logística.",
        readMore: "Seguir leyendo",
        articles: {
          a1: {
            category: "ACADEMIA",
            title: "La calidad del acero en la fabricación de volquetes: Hardox y más allá",
            excerpt:
              "¿Cómo prolonga la vida útil de un volquete el uso de acero de alta resistencia? Comparativa entre Hardox 450 y 500 y análisis del retorno de la inversión.",
            date: "12 de enero de 2025",
            readTime: "6 min de lectura"
          },
          a2: {
            category: "SECTOR",
            title: "Tendencias de logística y transporte para 2026",
            excerpt:
              "Cambios en la cadena de suministro global, normativas sobre eficiencia de combustible y oportunidades para el sector turco del transporte.",
            date: "8 de enero de 2025",
            readTime: "8 min de lectura"
          },
          a3: {
            category: "SOSTENIBILIDAD",
            title: "Logística verde: el impacto ambiental de los volquetes ligeros",
            excerpt:
              "Es posible ahorrar combustible y reducir la huella de carbono mediante un diseño de chasis más ligero. Lo analizamos con datos de I+D de Özünlü.",
            date: "3 de enero de 2025",
            readTime: "5 min de lectura"
          }
        }
      }
    },
    productsPage: {
      title: "EXPERIENCIA",
      titleHighlight: "INTERACTIVA",
      description:
        "Vaya más allá de los catálogos tradicionales. Explore las soluciones de ingeniería de Özünlü Damper en 360° y configure usted mismo la opción ideal para su proyecto.",
      view360: {
        dragHint: "Arrastre para girar",
        bodyLabel: "MODELO DE CARROCERÍA",
        disclaimer: "*Maqueta visual 3D representativa"
      },
      configurator: {
        title: "CONFIGURADOR",
        bodyColor: "Color de la carrocería",
        capacity: "Capacidad volumétrica",
        tires: "Tipo de neumático",
        summary: "Resumen",
        colors: {
          blue: "Azul Özünlü",
          gray: "Gris cuarzo",
          navy: "Azul noche",
          red: "Rojo llama"
        },
        tireTypes: {
          standard: "Estándar",
          offRoad: "Todoterreno",
          heavyDuty: "Heavy Duty"
        }
      },
      techSpecs: {
        unload: {
          title: "Descarga en 2 minutos",
          desc: "Tiempo récord de vaciado gracias a un sistema hidráulico optimizado."
        },
        weight: {
          title: "15 % más ligero",
          desc: "Mayor capacidad de carga gracias a un diseño especial de aleación."
        },
        hardox: {
          title: "Carrocería Hardox 450",
          desc: "Máxima resistencia al desgaste y a los impactos con acero sueco."
        },
        balance: {
          title: "Sistema inteligente de equilibrio",
          desc: "Tecnología activa de sensores que previene el vuelco en terrenos difíciles."
        }
      }
    }
  }
};

for (const [locale, data] of Object.entries(translations)) {
  const file = join(dir, `${locale}.json`);
  const existing = JSON.parse(readFileSync(file, "utf8"));
  deepMerge(existing, data);
  writeFileSync(file, JSON.stringify(existing, null, 2) + "\n", "utf8");
  console.log(`Completed ${locale}.json`);
}
