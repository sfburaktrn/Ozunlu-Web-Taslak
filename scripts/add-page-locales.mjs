import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'messages');
const locales = ['tr', 'en', 'de', 'bg', 'ro', 'ar', 'fr', 'es'];

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const pageContent = {
  tr: {
    corporate: {
      hero: {
        badge: "1977'den Beri",
        titleLine1: 'HIZIN VE GÜVENİN',
        titleLine2: 'İMZASI',
        description:
          'Yarım asra yaklaşan tecrübemizle, ağır ticari araç üst yapı sektöründe standartları belirliyor, geleceği sağlam temeller üzerine inşa ediyoruz.',
      },
      values: {
        trust: {
          title: 'GÜVEN',
          desc: '45 yılı aşkın süredir müşterilerimize, iş ortaklarımıza ve çalışanlarımıza verdiğimiz her sözün arkasındayız.',
        },
        quality: {
          title: 'KALİTE',
          desc: '<hardox></hardox> çelikten en ince işçiliğe kadar, üretimimizin her aşamasında mükemmelliği hedefliyoruz.',
        },
        innovation: {
          title: 'İNOVASYON',
          desc: 'Sektörün ihtiyaçlarını analiz ediyor, AR-GE çalışmalarımızla geleceğin teknolojilerini bugüne taşıyoruz.',
        },
        speed: {
          title: 'HIZ',
          desc: 'Optimize edilmiş üretim süreçlerimizle, kaliteden ödün vermeden en kısa sürede teslimat sağlıyor; işinize hız katıyoruz.',
        },
      },
      philosophy: {
        watermark: 'ÖZÜNLÜ',
        titleLine1: 'SADECE ÇELİK DEĞİL,',
        titleLine2: 'GÜVEN İŞLİYORUZ.',
        p1: "<strong>1977'den bugüne,</strong> üretim bandımızdan çıkan sadece bir damper değil; yarım asırlık bir tecrübenin, mühendislik tutkusunun ve inovasyonun somut halidir. Bizim için kalite, bir kontrol aşaması değil, üretim kültürümüzün ta kendisidir.",
        p2: 'Zorlu coğrafyalar ve ağır yükler altında test edilen ürünlerimiz, en ince detayına kadar <durability>dayanıklılık</durability> ve <performance>performans</performance> odaklı tasarlanır. <hardox></hardox> çeliğinin sağlamlığını, Türk mühendisliğinin kıvrak zekasıyla birleştiriyor; sektöre yön veren standartları belirliyoruz.',
        quote:
          'Her kaynak dikişinde, her montajda ve her teslimatta tek bir amacımız var: İş ortağımızın gücüne güç katmak.',
      },
      leader: {
        eyebrow: 'Liderin Mesajı',
        quote:
          'Özünlü olarak, sadece ürün üretmiyoruz; güven inşa ediyoruz. Her damper ve her dorse, yarım asırlık tecrübemizin ve mühendislik tutkumuzun bir yansımasıdır.',
        name: 'UFUK ÖZÜNLÜ',
        role: 'Yönetim Kurulu Başkanı',
        bio: '1977 yılında kurulan Özünlü Damper, bugün 40\'tan fazla ülkeye ihracat yapan, sektörün öncü üreticilerinden biridir. Qualified Body Builder unvanıyla dünya standartlarında üretim gerçekleştiriyoruz.',
        imageAlt: 'Ufuk Özünlü',
      },
      timeline: {
        title: 'ZAMANIN',
        titleHighlight: 'ÖTESİNDE',
        m1977: { title: 'Temellerin Atılması', desc: "İstanbul Okmeydanı'nda 30 metrekarelik bir atölyede, büyük hayallerle başlayan üretim yolculuğu." },
        m1985: { title: 'İlk Büyüme', desc: "Üretim tesislerinin günümüzde de bulunduğu İstanbul Habipler'e taşınması." },
        m1991: { title: 'Geleceğe Yatırım', desc: 'Mevcut fabrika arazisinin satın alınması ve lider üstyapı üreticisi olma yolunda ilk büyük yatırım.' },
        m2005: { title: 'Yetkili Üst Yapıcı', desc: 'Dünyanın önde gelen kamyon üreticilerinin sektördeki ilk "Qualified Body Builder" unvanı.' },
        m2009: { title: 'Kapasite Artışı', desc: 'Yeni Kalite Yönetimi anlayışı ve makine yatırımları ile üretim kapasitesinin iki katına çıkarılması.' },
        mToday: { title: 'Küresel Güç', desc: '3 ayrı tesiste toplam 30.000 m² üretim alanı, 81 ilde satış ve 40\'tan fazla ülkeye ihracat.' },
        yearToday: 'Günümüz',
      },
      facilities: {
        title: 'ÜRETİM GÜCÜ VE',
        titleHighlight: 'KÜRESEL ETKİ',
        description: 'Yerli mühendislik gücümüzü küresel standartlarla birleştiriyor, dünyanın dört bir yanına değer taşıyoruz.',
        production: { title: 'ÜRETİM ÜSSÜ', value: '30.000 m²', desc: '3 ayrı tesiste, 7.000m² kapalı ve 23.000m² açık alanda yüksek kapasiteli üretim.' },
        global: { title: 'KÜRESEL ERİŞİM', value: '40+ Ülke', desc: "Türkiye'nin 81 iline ve dünyada 40'tan fazla ülkeye uzanan geniş ihracat ağı." },
        quality: { title: 'KALİTE STANDARDI', value: 'QBB Belgesi', desc: 'Sektörde ilk "Qualified Body Builder" (Yetkili Üst Yapıcı) unvanına sahip marka.' },
      },
    },
    career: {
      hero: {
        title: 'YETENEK',
        titleHighlight: 'YÖNETİMİ',
        description: 'Büyük hayaller kuran, tutkulu ve yetenekli profesyoneller için eşsiz bir kariyer yolculuğu sunuyoruz.',
      },
      life: {
        watermark: 'ÖZÜNLÜ',
        titleLine1: 'BİZDE',
        titleLine2: 'HAYAT',
        description:
          'Özünlü ailesi olarak, sadece en iyi damperleri üretmekle kalmıyor, en mutlu çalışanlara sahip olmayı da hedefliyoruz. İnovasyon, sürekli gelişim ve takım ruhu DNA\'mızda var.',
        imageAlt: 'Özünlü Kariyer {n}',
      },
      jobs: {
        title: 'SENİ',
        titleHighlight: 'BEKLİYORUZ',
        subtitle: 'Geleceği şekillendiren ekibin bir parçası ol.',
        apply: 'Başvur',
        noJobsTitle: 'Şu anda açık pozisyonumuz bulunmamaktadır',
        noJobsDesc:
          "Ancak yetenekli profesyonellerle tanışmak için her zaman heyecanlıyız. Genel başvuru yapmak için CV'nizi bize gönderebilir veya sosyal medya hesaplarımızı takip edebilirsiniz.",
      },
    },
    mediaPage: {
      hero: {
        title: 'MEDYA',
        titleHighlight: 'MERKEZİ',
        description: 'Sektörel haberler, teknolojik gelişmeler ve Özünlü dünyasından en son güncellemeler.',
      },
      gallery: {
        title: 'ÜRÜN',
        titleHighlight: 'GALERİSİ',
        description: 'Üstün mühendislik ve kusursuz işçiliğin detaylarını inceleyin.',
        imageAlt: 'Özünlü Damper Galeri {n}',
        detailAlt: 'Galeri detayı',
      },
      insights: {
        title: 'SEKTÖREL',
        titleHighlight: 'İÇGÖRÜLER',
        description: 'Ağır ticari araç sektörü, üretim teknolojileri ve lojistik dünyasına dair uzman analizleri.',
        readMore: 'Devamını Oku',
        articles: {
          a1: {
            category: 'AKADEMİ',
            title: 'Damper Üretiminde Çelik Kalitesi: Hardox ve Ötesi',
            excerpt: 'Yüksek mukavemetli çelik kullanımı, damper ömrünü nasıl uzatır? Hardox 450 ve 500 karşılaştırması ve yatırım getirisi analizi.',
            date: '12 Ocak 2025',
            readTime: '6 dk okuma',
          },
          a2: {
            category: 'SEKTÖREL',
            title: '2026 Lojistik ve Taşımacılık Trendleri',
            excerpt: 'Küresel tedarik zincirindeki değişimler, yakıt verimliliği düzenlemeleri ve Türk taşımacılık sektörünü bekleyen fırsatlar.',
            date: '08 Ocak 2025',
            readTime: '8 dk okuma',
          },
          a3: {
            category: 'SÜRDÜRÜLEBİLİRLİK',
            title: 'Yeşil Lojistik: Hafif Damperlerin Çevresel Etkisi',
            excerpt: 'Daha hafif şasi tasarımı ile yakıt tasarrufu sağlamak ve karbon ayak izini azaltmak mümkün. Özünlü AR-GE verileriyle inceledik.',
            date: '03 Ocak 2025',
            readTime: '5 dk okuma',
          },
        },
      },
    },
    productsPage: {
      title: 'İNTERAKTİF',
      titleHighlight: 'DENEYİM',
      description:
        "Klasik katalogların ötesine geçin. Özünlü Damper'in mühendislik harikası ürünlerini 360 derece inceleyin ve projenize en uygun konfigürasyonu kendiniz oluşturun.",
      view360: {
        dragHint: 'Çevirmek için Sürükleyin',
        bodyLabel: 'GÖVDE MODELİ',
        disclaimer: '*Temsili 3D Görsel Mockup',
      },
      configurator: {
        title: 'KONFİGÜRATÖR',
        bodyColor: 'Gövde Rengi',
        capacity: 'Hacim Kapasitesi',
        tires: 'Lastik Tipi',
        summary: 'Özet',
        colors: { blue: 'Özünlü Mavisi', gray: 'Kuvars Gri', navy: 'Gece Mavisi', red: 'Alev Kırmızısı' },
        tireTypes: { standard: 'Standart', offRoad: 'Off-Road', heavyDuty: 'Heavy Duty' },
      },
      techSpecs: {
        unload: { title: '2 Dakikada Boşaltım', desc: 'Optimize edilmiş hidrolik sistem ile rekor sürede tahliye.' },
        weight: { title: '%15 Daha Hafif', desc: 'Özel alaşımlı tasarım sayesinde daha fazla yük taşıma kapasitesi.' },
        hardox: { title: 'Hardox 450 Gövde', desc: 'Aşınmaya ve darbeye karşı maksimum dirençli İsveç çeliği.' },
        balance: { title: 'Akıllı Denge Sistemi', desc: 'Zorlu arazilerde devrilmeyi önleyen aktif sensör teknolojisi.' },
      },
    },
    contact: {
      tabs: {
        sales: 'SATIŞ & PAZARLAMA',
        service: 'SATIŞ SONRASI HİZMETLER',
        export: 'İHRACAT',
        hr: 'İNSAN KAYNAKLARI',
      },
    },
    proposal: {
      configurator: 'Konfigüratör',
      selectedProduct: 'Seçili Ürün',
      selectedSubtitle: 'Seçtiğiniz ürün için teklif formunu doldurun.',
      defaultSubtitle: 'İhtiyaçlarınıza özel çözümler için detayları belirleyin.',
      clearSelection: 'Farklı bir ürün seçin veya konfigüretörü kullanın',
      stepQuantity: 'Adet Belirleyin',
      stepPayment: 'Ödeme Yöntemi',
      stepContact: 'İletişim Bilgileri',
      vehicleInfo: 'Araç Bilgisi',
      trailerSpecs: 'Dorse Özellikleri',
      cargoType: 'Yük Tipi',
      dimensions: 'Ölçüler & Adet',
      submit: 'TEKLİF İSTE',
      submitting: 'Gönderiliyor...',
      successTitle: 'Talebiniz Alındı!',
      successMessage: 'Teklif formunuz başarıyla bize ulaştı. Satış temsilcimiz en kısa sürede sizinle iletişime geçecektir.',
      newForm: 'Yeni Form Oluştur',
      kvkkNotice: 'Kişisel verileriniz KVKK kapsamında korunmaktadır.',
      payment: {
        cashTitle: 'Peşin / Havale',
        cashDesc: 'Nakit ödemelerde özel indirim fırsatı',
        creditTitle: 'Vadeli / Çek',
        creditDesc: 'Vade ve taksitlendirme seçenekleri',
      },
      fields: {
        quantity: 'İstenen Adet',
        brand: 'Araç Markası',
        brandPh: 'Örn: Mercedes, Ford',
        model: 'Araç Modeli',
        modelPh: 'Örn: 4140, Cargo',
        volume: 'İstenen Hacim (m³)',
        volumePh: 'Örn: 30',
        axle: 'Dingil Seçeneği',
        domestic: 'Yerli',
        foreign: 'Yabancı',
        cargo: 'Taşınacak Yük',
        cargoPh: 'Örn: Hafriyat, Kum, Asfalt',
        thickness: 'Taban/Yan Kalınlık (mm)',
        thicknessPh: 'Örn: 5mm / 4mm',
        company: 'Firma Adı',
        companyPh: 'Firma Ünvanı',
        contact: 'Yetkili Kişi',
        contactPh: 'Ad Soyad',
        phone: 'Telefon',
        phonePh: '05XX...',
        email: 'E-posta',
        emailPh: 'mail@sirket.com',
        heardFrom: 'Bizi Nereden Duydunuz?',
        heardFromPh: 'Google, Sosyal Medya, Referans...',
      },
    },
  },
  en: {
    corporate: {
      hero: {
        badge: 'Since 1977',
        titleLine1: 'SPEED AND TRUST',
        titleLine2: 'OUR SIGNATURE',
        description:
          'With nearly half a century of experience, we set standards in the heavy commercial vehicle body-building sector and build the future on solid foundations.',
      },
      values: {
        trust: { title: 'TRUST', desc: 'For over 45 years, we stand behind every promise made to our customers, partners and employees.' },
        quality: { title: 'QUALITY', desc: 'From <hardox></hardox> steel to the finest craftsmanship, we pursue excellence at every stage of production.' },
        innovation: { title: 'INNOVATION', desc: 'We analyse industry needs and bring tomorrow\'s technologies to today through R&D.' },
        speed: { title: 'SPEED', desc: 'With optimised production processes, we deliver quickly without compromising quality — accelerating your business.' },
      },
      philosophy: {
        watermark: 'ÖZÜNLÜ',
        titleLine1: 'NOT JUST STEEL,',
        titleLine2: 'WE CRAFT TRUST.',
        p1: '<strong>Since 1977,</strong> what leaves our production line is not just a tipper — it is half a century of experience, engineering passion and innovation made tangible. For us, quality is not a checkpoint; it is our production culture itself.',
        p2: 'Tested in harsh terrains and under heavy loads, our products are designed down to the finest detail for <durability>durability</durability> and <performance>performance</performance>. We combine the strength of <hardox></hardox> steel with Turkish engineering ingenuity to set industry-leading standards.',
        quote: 'In every weld, every assembly and every delivery, we have one goal: to add strength to our partners\' success.',
      },
      leader: {
        eyebrow: "Leader's Message",
        quote: 'At Özünlü, we do not just manufacture products — we build trust. Every tipper and every trailer reflects half a century of experience and engineering passion.',
        name: 'UFUK ÖZÜNLÜ',
        role: 'Chairman of the Board',
        bio: 'Founded in 1977, Özünlü Damper is today a leading manufacturer exporting to more than 40 countries, producing to world standards as a Qualified Body Builder.',
        imageAlt: 'Ufuk Özünlü',
      },
      timeline: {
        title: 'BEYOND',
        titleHighlight: 'TIME',
        m1977: { title: 'Laying the Foundations', desc: 'A production journey beginning in a 30 m² workshop in Istanbul Okmeydanı with big dreams.' },
        m1985: { title: 'First Expansion', desc: 'Relocation of production facilities to Istanbul Habipler, where they remain today.' },
        m1991: { title: 'Investing in the Future', desc: 'Purchase of the current factory site and the first major investment toward becoming a leading body builder.' },
        m2005: { title: 'Qualified Body Builder', desc: 'The sector\'s first "Qualified Body Builder" title from leading global truck manufacturers.' },
        m2009: { title: 'Capacity Increase', desc: 'Production capacity doubled through new quality management and machinery investments.' },
        mToday: { title: 'Global Power', desc: '30,000 m² total production area across 3 facilities, sales in 81 provinces and exports to 40+ countries.' },
        yearToday: 'Today',
      },
      facilities: {
        title: 'PRODUCTION POWER AND',
        titleHighlight: 'GLOBAL IMPACT',
        description: 'We combine local engineering strength with global standards, delivering value worldwide.',
        production: { title: 'PRODUCTION HUB', value: '30,000 m²', desc: 'High-capacity production across 3 facilities with 7,000 m² enclosed and 23,000 m² open area.' },
        global: { title: 'GLOBAL REACH', value: '40+ Countries', desc: 'An extensive export network spanning all 81 provinces of Turkey and more than 40 countries worldwide.' },
        quality: { title: 'QUALITY STANDARD', value: 'QBB Certificate', desc: 'The first brand in the sector to hold the "Qualified Body Builder" title.' },
      },
    },
    career: {
      hero: { title: 'TALENT', titleHighlight: 'MANAGEMENT', description: 'We offer a unique career journey for passionate, talented professionals with big dreams.' },
      life: {
        watermark: 'ÖZÜNLÜ',
        titleLine1: 'LIFE',
        titleLine2: 'AT ÖZÜNLÜ',
        description: 'As the Özünlü family, we aim not only to build the best tippers but also to have the happiest employees. Innovation, continuous development and team spirit are in our DNA.',
        imageAlt: 'Özünlü Career {n}',
      },
      jobs: {
        title: 'WE ARE',
        titleHighlight: 'WAITING FOR YOU',
        subtitle: 'Be part of the team shaping the future.',
        apply: 'Apply',
        noJobsTitle: 'We currently have no open positions',
        noJobsDesc: 'However, we are always excited to meet talented professionals. Send us your CV for a general application or follow us on social media.',
      },
    },
    mediaPage: {
      hero: { title: 'MEDIA', titleHighlight: 'CENTRE', description: 'Industry news, technological developments and the latest updates from the world of Özünlü.' },
      gallery: { title: 'PRODUCT', titleHighlight: 'GALLERY', description: 'Explore the details of superior engineering and flawless craftsmanship.', imageAlt: 'Özünlü Damper Gallery {n}', detailAlt: 'Gallery detail' },
      insights: {
        title: 'INDUSTRY',
        titleHighlight: 'INSIGHTS',
        description: 'Expert analysis on the heavy commercial vehicle sector, production technologies and logistics.',
        readMore: 'Read More',
        articles: {
          a1: { category: 'ACADEMY', title: 'Steel Quality in Tipper Production: Hardox and Beyond', excerpt: 'How does high-strength steel extend tipper life? Hardox 450 vs 500 comparison and ROI analysis.', date: '12 January 2025', readTime: '6 min read' },
          a2: { category: 'INDUSTRY', title: '2026 Logistics and Transport Trends', excerpt: 'Changes in global supply chains, fuel efficiency regulations and opportunities for Turkish transport.', date: '8 January 2025', readTime: '8 min read' },
          a3: { category: 'SUSTAINABILITY', title: 'Green Logistics: Environmental Impact of Lightweight Tippers', excerpt: 'Fuel savings and reduced carbon footprint through lighter chassis design. Özünlü R&D insights.', date: '3 January 2025', readTime: '5 min read' },
        },
      },
    },
    productsPage: {
      title: 'INTERACTIVE',
      titleHighlight: 'EXPERIENCE',
      description: 'Go beyond traditional catalogues. Explore Özünlü Damper\'s engineering marvels in 360° and build the ideal configuration for your project.',
      view360: { dragHint: 'Drag to Rotate', bodyLabel: 'BODY MODEL', disclaimer: '*Representative 3D visual mockup' },
      configurator: {
        title: 'CONFIGURATOR', bodyColor: 'Body Colour', capacity: 'Volume Capacity', tires: 'Tyre Type', summary: 'Summary',
        colors: { blue: 'Özünlü Blue', gray: 'Quartz Grey', navy: 'Midnight Blue', red: 'Flame Red' },
        tireTypes: { standard: 'Standard', offRoad: 'Off-Road', heavyDuty: 'Heavy Duty' },
      },
      techSpecs: {
        unload: { title: '2-Minute Unload', desc: 'Record discharge time with optimised hydraulics.' },
        weight: { title: '15% Lighter', desc: 'Special alloy design for greater payload capacity.' },
        hardox: { title: 'Hardox 450 Body', desc: 'Maximum wear and impact resistance with Swedish steel.' },
        balance: { title: 'Smart Balance System', desc: 'Active sensor technology preventing rollover on rough terrain.' },
      },
    },
  },
  de: {
    corporate: {
      hero: { badge: 'Seit 1977', titleLine1: 'GESCHWINDIGKEIT UND VERTRAUEN', titleLine2: 'UNSERE SIGNATUR', description: 'Mit fast einem halben Jahrhundert Erfahrung setzen wir Maßstäbe im Aufbau schwerer Nutzfahrzeuge und bauen die Zukunft auf soliden Grundlagen.' },
      values: {
        trust: { title: 'VERTRAUEN', desc: 'Seit über 45 Jahren stehen wir hinter jedem Versprechen an Kunden, Partner und Mitarbeiter.' },
        quality: { title: 'QUALITÄT', desc: 'Von <hardox></hardox>-Stahl bis zur feinsten Handarbeit streben wir in jeder Produktionsphase nach Perfektion.' },
        innovation: { title: 'INNOVATION', desc: 'Wir analysieren Branchenbedürfnisse und bringen die Technologien von morgen durch F&E in die Gegenwart.' },
        speed: { title: 'GESCHWINDIGKEIT', desc: 'Mit optimierten Produktionsprozessen liefern wir schnell ohne Qualitätskompromisse.' },
      },
      philosophy: {
        watermark: 'ÖZÜNLÜ', titleLine1: 'NICHT NUR STAHL,', titleLine2: 'WIR SCHAFFEN VERTRAUEN.',
        p1: '<strong>Seit 1977</strong> verlässt unser Band nicht nur ein Kipper — sondern ein halbes Jahrhundert Erfahrung, Ingenieursleidenschaft und Innovation.',
        p2: 'Unter harten Bedingungen getestet, sind unsere Produkte auf <durability>Haltbarkeit</durability> und <performance>Leistung</performance> ausgelegt. <hardox></hardox>-Stahl trifft auf türkisches Ingenieurwesen.',
        quote: 'Bei jedem Schweißnaht, jeder Montage und jeder Lieferung: dem Erfolg unserer Partner Stärke verleihen.',
      },
      leader: { eyebrow: 'Botschaft des Vorstands', quote: 'Bei Özünlü produzieren wir nicht nur — wir bauen Vertrauen.', name: 'UFUK ÖZÜNLÜ', role: 'Vorstandsvorsitzender', bio: 'Gegründet 1977, exportiert Özünlü Damper heute in über 40 Länder als Qualified Body Builder.', imageAlt: 'Ufuk Özünlü' },
      timeline: {
        title: 'JENSEITS', titleHighlight: 'DER ZEIT',
        m1977: { title: 'Gründung', desc: 'Produktionsreise in einer 30 m²-Werkstatt in Istanbul Okmeydanı.' },
        m1985: { title: 'Erstes Wachstum', desc: 'Verlagerung der Produktion nach Istanbul Habipler.' },
        m1991: { title: 'Zukunftsinvestition', desc: 'Kauf des heutigen Werksgeländes.' },
        m2005: { title: 'Qualified Body Builder', desc: 'Erster QBB-Titel der Branche.' },
        m2009: { title: 'Kapazitätserhöhung', desc: 'Verdopplung der Produktionskapazität.' },
        mToday: { title: 'Globale Stärke', desc: '30.000 m² Produktionsfläche, 81 Provinzen, Export in 40+ Länder.' },
        yearToday: 'Heute',
      },
      facilities: {
        title: 'PRODUKTIONSKRAFT UND', titleHighlight: 'GLOBALE WIRKUNG', description: 'Lokale Ingenieurskraft trifft auf globale Standards.',
        production: { title: 'PRODUKTIONSSTANDORT', value: '30.000 m²', desc: '3 Standorte mit 7.000 m² Hallen- und 23.000 m² Freifläche.' },
        global: { title: 'GLOBALE REICHWEITE', value: '40+ Länder', desc: 'Exportnetz in alle 81 Provinzen und über 40 Länder.' },
        quality: { title: 'QUALITÄTSSTANDARD', value: 'QBB-Zertifikat', desc: 'Erste Marke mit Qualified Body Builder-Titel.' },
      },
    },
    career: {
      hero: { title: 'TALENT', titleHighlight: 'MANAGEMENT', description: 'Eine einzigartige Karriere für leidenschaftliche Fachkräfte mit großen Träumen.' },
      life: { watermark: 'ÖZÜNLÜ', titleLine1: 'LEBEN', titleLine2: 'BEI ÖZÜNLÜ', description: 'Wir produzieren nicht nur die besten Kipper — wir wollen auch die zufriedensten Mitarbeiter haben.', imageAlt: 'Özünlü Karriere {n}' },
      jobs: { title: 'WIR', titleHighlight: 'WARTEN AUF DICH', subtitle: 'Werde Teil des Teams, das die Zukunft gestaltet.', apply: 'Bewerben', noJobsTitle: 'Derzeit keine offenen Stellen', noJobsDesc: 'Wir freuen uns jedoch immer, talentierte Fachkräfte kennenzulernen. Senden Sie uns Ihren Lebenslauf.' },
    },
    mediaPage: {
      hero: { title: 'MEDIEN', titleHighlight: 'ZENTRUM', description: 'Branchennews, Technologie und Updates aus der Welt von Özünlü.' },
      gallery: { title: 'PRODUKT', titleHighlight: 'GALERIE', description: 'Details überlegener Technik und Handwerkskunst.', imageAlt: 'Özünlü Galerie {n}', detailAlt: 'Galeriedetail' },
      insights: { title: 'BRANCHEN', titleHighlight: 'EINBLICKE', description: 'Expertenanalysen zu Nutzfahrzeugen, Produktion und Logistik.', readMore: 'Weiterlesen',
        articles: {
          a1: { category: 'AKADEMIE', title: 'Stahlqualität im Kipperbau: Hardox und mehr', excerpt: 'Wie verlängert Hochfeststahl die Lebensdauer? Hardox 450 vs 500.', date: '12. Januar 2025', readTime: '6 Min. Lesezeit' },
          a2: { category: 'BRANCHE', title: 'Logistik-Trends 2026', excerpt: 'Lieferketten, Effizienzregeln und Chancen für die Türkei.', date: '8. Januar 2025', readTime: '8 Min. Lesezeit' },
          a3: { category: 'NACHHALTIGKEIT', title: 'Grüne Logistik: Leichte Kipper', excerpt: 'Kraftstoffeinsparung durch leichtere Chassis.', date: '3. Januar 2025', readTime: '5 Min. Lesezeit' },
        },
      },
    },
    productsPage: {
      title: 'INTERAKTIVES', titleHighlight: 'ERLEBNIS', description: 'Über klassische Kataloge hinaus: 360°-Ansicht und Konfigurator für Ihr Projekt.',
      view360: { dragHint: 'Zum Drehen ziehen', bodyLabel: 'AUFBAU-MODELL', disclaimer: '*Repräsentatives 3D-Mockup' },
      configurator: { title: 'KONFIGURATOR', bodyColor: 'Aufbaufarbe', capacity: 'Volumenkapazität', tires: 'Reifentyp', summary: 'Zusammenfassung', colors: { blue: 'Özünlü Blau', gray: 'Quarzgrau', navy: 'Mitternachtsblau', red: 'Flammenrot' }, tireTypes: { standard: 'Standard', offRoad: 'Off-Road', heavyDuty: 'Heavy Duty' } },
      techSpecs: { unload: { title: 'Entladung in 2 Min.', desc: 'Rekord-Entladezeit mit optimierter Hydraulik.' }, weight: { title: '15% leichter', desc: 'Speziallegierung für mehr Nutzlast.' }, hardox: { title: 'Hardox 450 Aufbau', desc: 'Maximaler Verschleiß- und Stoßschutz.' }, balance: { title: 'Smart-Balance-System', desc: 'Aktive Sensoren gegen Kippen im Gelände.' } },
    },
  },
  ar: {
    corporate: {
      hero: { badge: 'منذ 1977', titleLine1: 'السرعة والثقة', titleLine2: 'هما توقيعنا', description: 'بخبرة تقترب من نصف قرن، نضع المعايير في قطاع الهياكل العلوية للمركبات التجارية الثقيلة ونبني المستقبل على أسس متينة.' },
      values: {
        trust: { title: 'الثقة', desc: 'منذ أكثر من 45 عاماً، نقف خلف كل وعد نقدمه لعملائنا وشركائنا وموظفينا.' },
        quality: { title: 'الجودة', desc: 'من فولاذ <hardox></hardox> إلى أدق تفاصيل الحرفية، نسعى للتميز في كل مرحلة إنتاج.' },
        innovation: { title: 'الابتكار', desc: 'نحلل احتياجات القطاع وننقل تقنيات المستقبل إلى اليوم عبر البحث والتطوير.' },
        speed: { title: 'السرعة', desc: 'بعمليات إنتاج محسّنة، نسلّم بسرعة دون المساس بالجودة — لنضيف سرعةً لأعمالكم.' },
      },
      philosophy: {
        watermark: 'ÖZÜNLÜ', titleLine1: 'ليس فولاذاً فحسب،', titleLine2: 'نصنع الثقة.',
        p1: '<strong>منذ 1977،</strong> ما يخرج من خط الإنتاج ليس مجرد قلاب — بل نصف قرن من الخبرة والشغف الهندسي والابتكار.',
        p2: 'تُختبر منتجاتنا في ظروف قاسية وتُصمَّم لـ<durability>المتانة</durability> و<performance>الأداء</performance>. نجمع قوة فولاذ <hardox></hardox> مع الهندسة التركية.',
        quote: 'في كل لحام وكل تركيب وكل تسليم، هدفنا واحد: إضافة قوة لنجاح شركائنا.',
      },
      leader: { eyebrow: 'رسالة الرئيس', quote: 'في Özünlü لا نصنع منتجات فحسب — نبني الثقة. كل قلاب وكل مقطورة تعكس خبرة نصف قرن.', name: 'UFUK ÖZÜNLÜ', role: 'رئيس مجلس الإدارة', bio: 'تأسست عام 1977، وتصدّر Özünlü Damper اليوم إلى أكثر من 40 دولة كباني هياكل معتمد (QBB).', imageAlt: 'أوفوق أوزونلو' },
      timeline: {
        title: 'ما وراء', titleHighlight: 'الزمن',
        m1977: { title: 'وضع الأسس', desc: 'رحلة إنتاج بدأت في ورشة 30 م² في إسطنبول أوقميداني.' },
        m1985: { title: 'أول توسع', desc: 'نقل المنشآت إلى حبيبلر في إسطنبول.' },
        m1991: { title: 'استثمار المستقبل', desc: 'شراء موقع المصنع الحالي.' },
        m2005: { title: 'باني هياكل معتمد', desc: 'أول لقب Qualified Body Builder في القطاع.' },
        m2009: { title: 'زيادة الطاقة', desc: 'مضاعفة طاقة الإنتاج.' },
        mToday: { title: 'قوة عالمية', desc: '30,000 م² إنتاج، 81 محافظة، تصدير لأكثر من 40 دولة.' },
        yearToday: 'اليوم',
      },
      facilities: {
        title: 'قوة الإنتاج و', titleHighlight: 'التأثير العالمي', description: 'نجمع الهندسة المحلية بالمعايير العالمية.',
        production: { title: 'مركز الإنتاج', value: '30,000 م²', desc: '3 منشآت بمساحة مغلقة 7,000 م² ومفتوحة 23,000 م².' },
        global: { title: 'الوصول العالمي', value: '+40 دولة', desc: 'شبكة تصدير في 81 محافظة وأكثر من 40 دولة.' },
        quality: { title: 'معيار الجودة', value: 'شهادة QBB', desc: 'أول علامة تحمل لقب Qualified Body Builder.' },
      },
    },
    career: {
      hero: { title: 'إدارة', titleHighlight: 'المواهب', description: 'نقدم رحلة مهنية فريدة للمحترفين الشغوفين أصحاب الطموح الكبير.' },
      life: { watermark: 'ÖZÜNLÜ', titleLine1: 'الحياة', titleLine2: 'في Özünlü', description: 'ننتج أفضل القلابات ونسعى لأن يكون لدينا أسعد الموظفين. الابتكار والتطوير المستمر وروح الفريق في حمضنا النووي.', imageAlt: 'مسيرة Özünlü {n}' },
      jobs: { title: 'ننتظر', titleHighlight: 'انضمامك', subtitle: 'كن جزءاً من الفريق الذي يشكّل المستقبل.', apply: 'تقدّم', noJobsTitle: 'لا توجد وظائف شاغرة حالياً', noJobsDesc: 'لكننا متحمسون دائماً للتعرف على المحترفين الموهوبين. أرسل سيرتك الذاتية أو تابعنا على وسائل التواصل.' },
    },
    mediaPage: {
      hero: { title: 'مركز', titleHighlight: 'الإعلام', description: 'أخبار القطاع والتطورات التقنية وآخر المستجدات من عالم Özünlü.' },
      gallery: { title: 'معرض', titleHighlight: 'المنتجات', description: 'استكشف تفاصيل الهندسة المتفوقة والحرفية المتقنة.', imageAlt: 'معرض Özünlü {n}', detailAlt: 'تفاصيل المعرض' },
      insights: { title: 'رؤى', titleHighlight: 'قطاعية', description: 'تحليلات خبراء حول المركبات التجارية الثقيلة والتقنيات واللوجستيات.', readMore: 'اقرأ المزيد',
        articles: {
          a1: { category: 'أكاديمي', title: 'جودة الفولاذ في إنتاج القلاب: Hardox وما بعده', excerpt: 'كيف يطيل الفولاذ عالي المقاومة عمر القلاب؟ مقارنة Hardox 450 و500.', date: '12 يناير 2025', readTime: '6 دقائق قراءة' },
          a2: { category: 'قطاعي', title: 'اتجاهات اللوجستيات 2026', excerpt: 'سلاسل التوريد وكفاءة الوقود وفرص النقل التركي.', date: '8 يناير 2025', readTime: '8 دقائق قراءة' },
          a3: { category: 'استدامة', title: 'اللوجستيات الخضراء: تأثير القلابات الخفيفة', excerpt: 'توفير الوقود وتقليل البصمة الكربونية بتصميم هيكل أخف.', date: '3 يناير 2025', readTime: '5 دقائق قراءة' },
        },
      },
    },
    productsPage: {
      title: 'تجربة', titleHighlight: 'تفاعلية', description: 'تجاوز الكتالوجات التقليدية. استكشف منتجات Özünlü بزاوية 360° وابنِ التكوين المناسب لمشروعك.',
      view360: { dragHint: 'اسحب للتدوير', bodyLabel: 'نموذج الهيكل', disclaimer: '*نموذج ثلاثي الأبعاد توضيحي' },
      configurator: { title: 'المُكوِّن', bodyColor: 'لون الهيكل', capacity: 'سعة الحجم', tires: 'نوع الإطارات', summary: 'الملخص', colors: { blue: 'أزرق Özünlü', gray: 'رمادي كوارتز', navy: 'أزرق داكن', red: 'أحمر لهبي' }, tireTypes: { standard: 'قياسي', offRoad: 'طرق وعرة', heavyDuty: 'خدمة شاقة' } },
      techSpecs: { unload: { title: 'تفريغ في دقيقتين', desc: 'تفريغ سريع بنظام هيدروليكي محسّن.' }, weight: { title: 'أخف بنسبة 15%', desc: 'تصميم سبيكة خاص لحمولة أكبر.' }, hardox: { title: 'هيكل Hardox 450', desc: 'مقاومة قصوى للتآكل والصدمات.' }, balance: { title: 'نظام توازن ذكي', desc: 'حساسات نشطة تمنع الانقلاب في التضاريس الوعرة.' } },
    },
    contact: {
      tabs: { sales: 'المبيعات والتسويق', service: 'خدمات ما بعد البيع', export: 'التصدير', hr: 'الموارد البشرية' },
    },
    proposal: {
      configurator: 'المُكوِّن',
      selectedProduct: 'المنتج المحدد',
      selectedSubtitle: 'املأ نموذج عرض السعر للمنتج المحدد.',
      defaultSubtitle: 'حدد التفاصيل لحل مخصص لاحتياجاتك.',
      clearSelection: 'اختر منتجاً آخر أو استخدم المُكوِّن',
      stepQuantity: 'حدد الكمية',
      stepPayment: 'طريقة الدفع',
      stepContact: 'معلومات الاتصال',
      vehicleInfo: 'معلومات المركبة',
      trailerSpecs: 'مواصفات المقطورة',
      cargoType: 'نوع الحمولة',
      dimensions: 'الأبعاد والكمية',
      submit: 'اطلب عرض سعر',
      submitting: 'جارٍ الإرسال...',
      successTitle: 'تم استلام طلبك!',
      successMessage: 'وصل نموذج عرض السعر إلينا. سيتواصل معك مندوب المبيعات قريباً.',
      newForm: 'إنشاء نموذج جديد',
      kvkkNotice: 'بياناتك الشخصية محمية وفق KVKK.',
      payment: { cashTitle: 'نقداً / تحويل', cashDesc: 'خصم خاص للدفع النقدي', creditTitle: 'آجل / شيك', creditDesc: 'خيارات دفع مرنة' },
      fields: {
        quantity: 'الكمية المطلوبة', brand: 'ماركة المركبة', brandPh: 'مثال: Mercedes, Ford', model: 'موديل المركبة', modelPh: 'مثال: 4140, Cargo',
        volume: 'الحجم المطلوب (م³)', volumePh: 'مثال: 30', axle: 'خيار المحور', domestic: 'محلي', foreign: 'أجنبي',
        cargo: 'نوع الحمولة', cargoPh: 'مثال: حفر، رمل، أسفلت', thickness: 'سماكة القاعدة/الجانب (مم)', thicknessPh: 'مثال: 5مم / 4مم',
        company: 'اسم الشركة', companyPh: 'الاسم التجاري', contact: 'الشخص المسؤول', contactPh: 'الاسم الكامل',
        phone: 'الهاتف', phonePh: '05XX...', email: 'البريد الإلكتروني', emailPh: 'mail@company.com',
        heardFrom: 'كيف سمعت عنا؟', heardFromPh: 'Google، وسائل التواصل، إحالة...',
      },
    },
  },
};

// bg, ro, fr, es fall back to en structure with translated key fields
const bg = JSON.parse(JSON.stringify(pageContent.en));
bg.corporate.hero = { badge: 'От 1977', titleLine1: 'СКОРОСТ И ДОВЕРИЕ', titleLine2: 'НАШ ПОДПИС', description: 'С почти половин век опит задаваме стандарти в сектора на надстройките за тежкотоварни превозни средства.' };
pageContent.bg = bg;

const ro = JSON.parse(JSON.stringify(pageContent.en));
ro.corporate.hero = { badge: 'Din 1977', titleLine1: 'VITEZĂ ȘI ÎNCREDERE', titleLine2: 'SEMNAȚURA NOASTRĂ', description: 'Cu aproape un secol de experiență, stabilim standarde în sectorul suprastructurilor pentru vehicule comerciale grele.' };
pageContent.ro = ro;

const fr = JSON.parse(JSON.stringify(pageContent.en));
fr.corporate.hero = { badge: 'Depuis 1977', titleLine1: 'VITESSE ET CONFIANCE', titleLine2: 'NOTRE SIGNATURE', description: 'Avec près d\'un demi-siècle d\'expérience, nous définissons les standards du secteur des superstructures poids lourds.' };
pageContent.fr = fr;

const es = JSON.parse(JSON.stringify(pageContent.en));
es.corporate.hero = { badge: 'Desde 1977', titleLine1: 'VELOCIDAD Y CONFIANZA', titleLine2: 'NUESTRA FIRMA', description: 'Con casi medio siglo de experiencia, establecemos estándares en el sector de superstructures para vehículos comerciales pesados.' };
pageContent.es = es;

// en gets contact/proposal from tr structure via en already having proposal in file - merge overwrites
pageContent.en.contact = {
  tabs: { sales: 'SALES & MARKETING', service: 'AFTER-SALES SERVICES', export: 'EXPORT', hr: 'HUMAN RESOURCES' },
};
pageContent.en.proposal = pageContent.tr.proposal;
Object.keys(pageContent.en.proposal).forEach((k) => {
  if (typeof pageContent.en.proposal[k] === 'string') {
    // keep en strings from en block above - re-apply from en file content
  }
});
// Fix en proposal with proper English (from en block in tr copy was wrong)
pageContent.en.proposal = {
  configurator: 'Configurator',
  selectedProduct: 'Selected Product',
  selectedSubtitle: 'Fill out the quote form for your selected product.',
  defaultSubtitle: 'Specify details for a custom solution.',
  clearSelection: 'Select a different product or use the configurator',
  stepQuantity: 'Set Quantity',
  stepPayment: 'Payment Method',
  stepContact: 'Contact Information',
  vehicleInfo: 'Vehicle Information',
  trailerSpecs: 'Trailer Specifications',
  cargoType: 'Cargo Type',
  dimensions: 'Dimensions & Quantity',
  submit: 'REQUEST QUOTE',
  submitting: 'Sending...',
  successTitle: 'Request Received!',
  successMessage: 'Your quote form has been submitted. Our sales team will contact you shortly.',
  newForm: 'Create New Form',
  kvkkNotice: 'Your personal data is protected under GDPR.',
  payment: { cashTitle: 'Cash / Wire Transfer', cashDesc: 'Special discount for cash payments', creditTitle: 'Credit / Check', creditDesc: 'Flexible payment terms available' },
  fields: pageContent.en.proposal?.fields || {},
};
pageContent.en.proposal.fields = {
  quantity: 'Quantity', brand: 'Vehicle Brand', brandPh: 'e.g. Mercedes, Ford', model: 'Vehicle Model', modelPh: 'e.g. 4140, Cargo',
  volume: 'Desired Volume (m³)', volumePh: 'e.g. 30', axle: 'Axle Option', domestic: 'Domestic', foreign: 'Foreign',
  cargo: 'Cargo Type', cargoPh: 'e.g. Earth, Sand, Asphalt', thickness: 'Floor/Side Thickness (mm)', thicknessPh: 'e.g. 5mm / 4mm',
  company: 'Company Name', companyPh: 'Company Title', contact: 'Contact Person', contactPh: 'Full Name',
  phone: 'Phone', phonePh: '+90 5XX...', email: 'Email', emailPh: 'mail@company.com',
  heardFrom: 'How did you hear about us?', heardFromPh: 'Google, Social Media, Referral...',
};

for (const locale of locales) {
  const file = join(dir, `${locale}.json`);
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const ext = pageContent[locale] || pageContent.en;
  deepMerge(data, ext);
  writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${locale}.json`);
}
