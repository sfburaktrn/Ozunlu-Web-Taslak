import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'messages');
const locales = ['tr', 'en', 'de', 'bg', 'ro', 'ar', 'fr', 'es'];

const extensions = {
  tr: {
    home: {
      mapPreview: {
        citiesLabel: 'Servis bulunan şehir',
        pointsLabel: 'Toplam servis noktası',
        topCities: 'Öne çıkan iller',
        serviceCount: '{count} servis noktası',
        tapHint: 'Haritaya dokun',
        mapInstruction: 'Şehir seç, servis bilgisi açılır.',
        modalEyebrow: 'Servis detayları',
        plateCode: 'Plaka kodu: {code}',
        closeAria: 'Kapat',
        noService: 'Bu il için kayıtlı servis bulunamadı.',
      },
      gallery: { slogan: 'En İyilerin Tercihi' },
      stats: {
        exportCountries: 'İhracat Ülkesi',
        steelProcessing: 'Yıllık Çelik İşleme (Ton)',
        experience: 'Yıllık Tecrübe',
      },
      whyChooseUs: { cardLabel: 'Özünlü Güvencesi' },
      products: {
        viewDetails: 'Detaylı İncele',
        items: {
          damper: { title: 'DAMPER', description: '<hardox></hardox> çelik gövde, hidrolik sistem, 20-40m³ kapasite', features: ['Hardox 450 Çelik', 'Hidrolik Sistem', 'Hafif Yapı'] },
          dorse: { title: 'DORSE', description: 'Yüksek mukavemet, uzun ömür, özel tasarım seçenekleri', features: ['Özel Tasarım', 'Yüksek Dayanım', 'Kolay Bakım'] },
          kar: { title: 'KAR KÜREME', description: 'Müşteri ihtiyaçlarına özel damper çözümleri', features: ['Kişiye Özel', 'Ar-Ge Desteği', 'Hızlı Üretim'] },
        },
      },
    },
    ekEkipmanlar: {
      stats: {
        original: { value: '%100', label: 'Orijinal Ürün Garantisi' },
        delivery: { value: 'Hızlı', label: 'Stoktan Teslimat' },
        support: { value: 'Destek', label: 'Satış Öncesi & Sonrası' },
      },
      categories: {
        hidrolik: { title: 'Hidrolik Sistemler', desc: 'Yüksek basınç kapasiteli pompalar, silindirler ve vana sistemleri. Zorlu saha koşullarına karşı kanıtlanmış güç ve dayanıklılık.' },
        dingil: { title: 'Dingil & Süspansiyon', desc: 'BPW ve Özkoç başta olmak üzere premium marka dingil ve süspansiyon sistemleri.' },
        fren: { title: 'Fren Sistemleri', desc: 'EBS ve ABS uyumlu fren kitleri. Avrupa güvenlik standartlarına uygun maksimum frenleme performansı.' },
        elektrik: { title: 'Elektrik & Aydınlatma', desc: 'Yüksek görünürlüklü LED aydınlatma sistemleri. ECE R48 uyumu.' },
        aksesuar: { title: 'Dorse Aksesuarları', desc: 'Takım dolabı, yakıt tankı, destek ayağı ve özel konfigürasyon aksesuarları.' },
        yedekParca: { title: 'Yedek Parça', desc: 'Orijinal ve garantili yedek parça. Aynı gün kargo seçeneğiyle minimum araç duruş süresi.' },
      },
      performance: {
        bullets: { '0': 'Orijinal ve sertifikalı ürün garantisi', '1': 'Geniş marka ve model uyum yelpazesi', '2': 'Rekabetçi fiyat ve esnek ödeme seçenekleri', '3': 'Uzman teknik danışmanlık desteği' },
      },
    },
    afterSales: {
      services: {
        servisAgi: { title: 'Yetkili Servis Ağı', description: "Türkiye'nin 50 ilinde konumlanan 87 yetkili servis noktasıyla filonuzu fabrika standartlarında donanımlı teknisyenlere emanet edin." },
        yedekParca: { title: 'Orijinal Yedek Parça', description: '%100 orijinal Özünlü parçaları ile minimum araç duruş süresi.' },
        garanti: { title: 'Garanti Kapsamı', description: 'Tüm ürünlerimiz kapsamlı üretici garantisi kapsamındadır.' },
        teknikDestek: { title: '7/24 Teknik Destek', description: 'Uzman teknik destek ekibimiz gün ve gece ulaşılabilir.' },
      },
      documents: {
        damperManual: { title: 'Damper Kullanım Kılavuzu', desc: 'Damper ürün grubu için temel kullanım ve güvenlik talimatları.' },
        dorseManual: { title: 'Dorse ve Yarı Römork Kılavuzu', desc: 'Genel yarı römork ürünleri için standart kullanım kılavuzu.' },
        generalManual: { title: 'Genel Ürün & Bakım El Kitabı (TR/EN)', desc: 'Tüm dorse modelleri için kapsamlı bakım ve teknik detaylar.' },
        damperSpec: { title: 'Damper Teknik Şartnamesi (TR/EN)', desc: 'Damperli araçlar için özel teknik spesifikasyonlar.' },
      },
    },
    contact: {
      tabs: { sales: 'SATIŞ & PAZARLAMA', service: 'SATIŞ SONRASI HİZMETLER', export: 'İHRACAT', hr: 'İNSAN KAYNAKLARI' },
      form: {
        address: 'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul',
        hours: 'Çalışma Saatleri',
        hoursValue: 'Hafta içi & Cmt: 09:00 - 18:30',
        name: 'AD SOYAD',
        namePlaceholder: 'Adınız Soyadınız',
        company: 'FİRMA',
        companyPlaceholder: 'Firma Ünvanı',
        email: 'E-POSTA',
        emailPlaceholder: 'ornek@sirket.com',
        phone: 'TELEFON',
        phonePlaceholder: '05XX XXX XX XX',
        message: 'MESAJ',
        messagePlaceholder: 'Mesajınızı buraya yazınız...',
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
      payment: { cashTitle: 'Peşin / Havale', cashDesc: 'Nakit ödemelerde özel indirim fırsatı', creditTitle: 'Vadeli / Çek', creditDesc: 'Vade ve taksitlendirme seçenekleri' },
      fields: {
        quantity: 'İstenen Adet', brand: 'Araç Markası', brandPh: 'Örn: Mercedes, Ford', model: 'Araç Modeli', modelPh: 'Örn: 4140, Cargo',
        volume: 'İstenen Hacim (m³)', volumePh: 'Örn: 30', axle: 'Dingil Seçeneği', domestic: 'Yerli', foreign: 'Yabancı',
        cargo: 'Taşınacak Yük', cargoPh: 'Örn: Hafriyat, Kum, Asfalt', thickness: 'Taban/Yan Kalınlık (mm)', thicknessPh: 'Örn: 5mm / 4mm',
        company: 'Firma Adı', companyPh: 'Firma Ünvanı', contact: 'Yetkili Kişi', contactPh: 'Ad Soyad',
        phone: 'Telefon', phonePh: '05XX...', email: 'E-posta', emailPh: 'mail@sirket.com',
        heardFrom: 'Bizi Nereden Duydunuz?', heardFromPh: 'Google, Sosyal Medya, Referans...',
      },
    },
    damper: {
      items: {
        d24: {
          name: 'ÖZ-D24 Damper', description: 'Şantiye ve inşaat sektörünün ağır koşullarına karşı mühendislik odaklı tasarım. <hardox></hardox> gövde opsiyonu, güçlendirilmiş şasi ve hızlı boşaltım kapasitesiyle maksimum operasyonel verimlilik.',
          features: ['Hardox Gövde Opsiyonu', 'Yüksek Devrilme Stabilitesi', 'Hızlı Boşaltım', 'Güçlendirilmiş Şasi', 'Kolay Bakım'],
          details: { hardox: { title: 'Hardox® Gövde', content: 'Aşınma ve darbe direncinde uzun ömür, düşük bakım maliyeti.' }, sasi: { title: 'Şasi', content: 'Güçlendirilmiş şasi ile ağır hizmet kullanımına uygun yapı.' }, bosaltim: { title: 'Boşaltım', content: 'Optimize hidrolik sistem ile hızlı ve kontrollü boşaltım.' }, verimlilik: { title: 'Verimlilik', content: 'Operasyonel sürekliliği artıran mühendislik detayları.' } },
        },
        d30: {
          name: 'ÖZ-D30 Damper', description: 'Yüksek tonajlı yüklerde sektörün en güçlü gövde-şasi kombinasyonu.',
          features: ['Ağır Hizmet Kullanımı', 'Optimize Hacim', 'Dayanımlı Yan Duvarlar', 'Servis Kolaylığı', 'Opsiyonel Ekipman'],
          details: { kapasite: { title: 'Kapasite', content: 'Yüksek tonaj operasyonları için optimize edilmiş hacim.' }, dayanim: { title: 'Dayanım', content: 'Ağır hizmet kullanımında darbe ve aşınmaya dayanıklı yapı.' }, donanim: { title: 'Donanım', content: 'Branda, kapak, aydınlatma ve diğer opsiyonlar.' }, uyumluluk: { title: 'Uyumluluk', content: 'Farklı şasi ihtiyaçlarına uygun montaj alternatifleri.' } },
        },
        d21: {
          name: 'ÖZ-D21 Damper', description: 'Kompakt kullanım senaryolarında dengeli ağırlık ve ekonomik işletme maliyeti.',
          features: ['Kompakt Tasarım', 'Ekonomik İşletme', 'Dengeli Ağırlık', 'Kolay Manevra', 'Uzun Ömür'],
          details: { kullanim: { title: 'Kullanım', content: 'Kompakt saha operasyonlarında çevik çalışma.' }, agirlik: { title: 'Ağırlık', content: 'Yasal sınırlar içinde maksimum kapasite.' }, maliyet: { title: 'Maliyet', content: 'Ekonomik işletme maliyeti ve bakım kolaylığı.' }, performans: { title: 'Performans', content: 'Günlük yoğun kullanımda stabil çalışma.' } },
        },
      },
    },
    yariRomork: {
      items: {
        g22: { name: 'ÖZ-G22 Yarı Römork', description: '22m³ yüksek hacimli yapısı, Hardox 450 çelik gövdesi ve BPW dingil sistemiyle uzun mesafe ağır hizmet taşımacılığının güvenilir çözümü.', features: ['22m³ Hacim', 'Hardox 450 Gövde', '5/6mm Sac Kalınlığı', 'BPW Dingil (Yabancı)', 'Katlanır Tampon'] },
        l500: { name: 'ÖZ-L500 Yarı Römork', description: 'Hardox 500 şasi teknolojisi ve hidrolik rampa sistemiyle yüksek performanslı dorse.', features: ['Özkoç Dingil (Yerli)', 'Hardox 500 Şasi', 'Sabit Tampon', 'Hidrolik Rampa', 'Genişletilebilir Yanlar'] },
        m21: { name: 'ÖZ-M21 Yarı Römork', description: '21m³ hacim, hafifletilmiş gövde yapısı ve otomatik branda sistemiyle verimli taşımacılık.', features: ['21m³ Hacim', 'Özkoç Dingil', '3/4mm Sac (Hafif)', 'Otomatik Branda', 'Manşonlu Kapak'] },
      },
    },
  },
  en: {
    home: {
      mapPreview: {
        citiesLabel: 'Cities with service', pointsLabel: 'Total service points', topCities: 'Featured cities',
        serviceCount: '{count} service points', tapHint: 'Tap the map', mapInstruction: 'Select a city to view service details.',
        modalEyebrow: 'Service details', plateCode: 'Plate code: {code}', closeAria: 'Close', noService: 'No registered service found for this province.',
      },
      gallery: { slogan: 'The Choice of the Best' },
      stats: { exportCountries: 'Export Countries', steelProcessing: 'Annual Steel Processing (Tons)', experience: 'Years of Experience' },
      whyChooseUs: { cardLabel: 'Özünlü Guarantee' },
      products: {
        viewDetails: 'View Details',
        items: {
          damper: { title: 'TIPPER', description: '<hardox></hardox> steel body, hydraulic system, 20-40m³ capacity', features: ['Hardox 450 Steel', 'Hydraulic System', 'Lightweight Design'] },
          dorse: { title: 'TRAILER', description: 'High strength, long life, custom design options', features: ['Custom Design', 'High Durability', 'Easy Maintenance'] },
          kar: { title: 'SNOW PLOW', description: 'Custom tipper solutions for customer needs', features: ['Custom Built', 'R&D Support', 'Fast Production'] },
        },
      },
    },
    ekEkipmanlar: {
      stats: { original: { value: '100%', label: 'Original Product Guarantee' }, delivery: { value: 'Fast', label: 'Stock Delivery' }, support: { value: 'Support', label: 'Pre & After Sales' } },
      categories: {
        hidrolik: { title: 'Hydraulic Systems', desc: 'High-pressure pumps, cylinders and valve systems for tough field conditions.' },
        dingil: { title: 'Axle & Suspension', desc: 'Premium axle and suspension systems including BPW and Özkoç.' },
        fren: { title: 'Brake Systems', desc: 'EBS and ABS compatible brake kits meeting European safety standards.' },
        elektrik: { title: 'Electrical & Lighting', desc: 'High-visibility LED lighting systems. ECE R48 compliant.' },
        aksesuar: { title: 'Trailer Accessories', desc: 'Tool boxes, fuel tanks, landing legs and custom accessories.' },
        yedekParca: { title: 'Spare Parts', desc: 'Original guaranteed spare parts with same-day shipping option.' },
      },
      performance: { bullets: { '0': 'Original certified product guarantee', '1': 'Wide brand and model compatibility', '2': 'Competitive pricing and flexible payment', '3': 'Expert technical consulting support' } },
    },
    afterSales: {
      services: {
        servisAgi: { title: 'Authorized Service Network', description: '87 authorized service points in 50 provinces across Turkey with certified technicians.' },
        yedekParca: { title: 'Original Spare Parts', description: '100% original Özünlü parts for minimum vehicle downtime.' },
        garanti: { title: 'Warranty Coverage', description: 'All products covered by comprehensive manufacturer warranty.' },
        teknikDestek: { title: '24/7 Technical Support', description: 'Expert support team available day and night.' },
      },
      documents: {
        damperManual: { title: 'Tipper User Manual', desc: 'Basic usage and safety instructions for tipper products.' },
        dorseManual: { title: 'Trailer User Manual', desc: 'Standard user manual for semi-trailer products.' },
        generalManual: { title: 'General Product & Maintenance Handbook (TR/EN)', desc: 'Comprehensive maintenance and technical details for all trailer models.' },
        damperSpec: { title: 'Tipper Technical Specification (TR/EN)', desc: 'Special technical specifications for tipper vehicles.' },
      },
    },
    contact: {
      tabs: { sales: 'SALES & MARKETING', service: 'AFTER-SALES SERVICES', export: 'EXPORT', hr: 'HUMAN RESOURCES' },
      form: {
        address: 'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / Istanbul',
        hours: 'Working Hours', hoursValue: 'Weekdays & Sat: 09:00 - 18:30',
        name: 'FULL NAME', namePlaceholder: 'Your Full Name', company: 'COMPANY', companyPlaceholder: 'Company Name',
        email: 'EMAIL', emailPlaceholder: 'example@company.com', phone: 'PHONE', phonePlaceholder: '+90 5XX XXX XX XX',
        message: 'MESSAGE', messagePlaceholder: 'Write your message here...',
      },
    },
    proposal: {
      configurator: 'Configurator', selectedProduct: 'Selected Product', selectedSubtitle: 'Fill out the quote form for your selected product.',
      defaultSubtitle: 'Specify details for a custom solution.', clearSelection: 'Select a different product or use the configurator',
      stepQuantity: 'Set Quantity', stepPayment: 'Payment Method', stepContact: 'Contact Information',
      vehicleInfo: 'Vehicle Information', trailerSpecs: 'Trailer Specifications', cargoType: 'Cargo Type', dimensions: 'Dimensions & Quantity',
      submit: 'REQUEST QUOTE', submitting: 'Sending...', successTitle: 'Request Received!', successMessage: 'Your quote form has been submitted. Our sales team will contact you shortly.',
      newForm: 'Create New Form', kvkkNotice: 'Your personal data is protected under GDPR.',
      payment: { cashTitle: 'Cash / Wire Transfer', cashDesc: 'Special discount for cash payments', creditTitle: 'Credit / Check', creditDesc: 'Flexible payment terms available' },
      fields: {
        quantity: 'Quantity', brand: 'Vehicle Brand', brandPh: 'e.g. Mercedes, Ford', model: 'Vehicle Model', modelPh: 'e.g. 4140, Cargo',
        volume: 'Desired Volume (m³)', volumePh: 'e.g. 30', axle: 'Axle Option', domestic: 'Domestic', foreign: 'Foreign',
        cargo: 'Cargo Type', cargoPh: 'e.g. Earth, Sand, Asphalt', thickness: 'Floor/Side Thickness (mm)', thicknessPh: 'e.g. 5mm / 4mm',
        company: 'Company Name', companyPh: 'Company Title', contact: 'Contact Person', contactPh: 'Full Name',
        phone: 'Phone', phonePh: '+90 5XX...', email: 'Email', emailPh: 'mail@company.com',
        heardFrom: 'How did you hear about us?', heardFromPh: 'Google, Social Media, Referral...',
      },
    },
    damper: {
      items: {
        d24: { name: 'ÖZ-D24 Tipper', description: 'Engineering-focused design for harsh construction conditions. <hardox></hardox> body option, reinforced chassis and fast unloading.', features: ['Hardox Body Option', 'High Tipping Stability', 'Fast Unloading', 'Reinforced Chassis', 'Easy Maintenance'], details: { hardox: { title: 'Hardox® Body', content: 'Long life and low maintenance in wear and impact resistance.' }, sasi: { title: 'Chassis', content: 'Reinforced chassis for heavy-duty use.' }, bosaltim: { title: 'Unloading', content: 'Fast and controlled unloading with optimized hydraulics.' }, verimlilik: { title: 'Efficiency', content: 'Engineering details that boost operational continuity.' } } },
        d30: { name: 'ÖZ-D30 Tipper', description: 'The strongest body-chassis combination for high-tonnage loads.', features: ['Heavy Duty Use', 'Optimized Volume', 'Durable Side Walls', 'Service Ease', 'Optional Equipment'], details: { kapasite: { title: 'Capacity', content: 'Optimized volume for high-tonnage operations.' }, dayanim: { title: 'Durability', content: 'Impact and wear resistant structure.' }, donanim: { title: 'Equipment', content: 'Tarpaulin, cover, lighting and other options.' }, uyumluluk: { title: 'Compatibility', content: 'Mounting alternatives for different chassis needs.' } } },
        d21: { name: 'ÖZ-D21 Tipper', description: 'Balanced weight and economical operation for compact scenarios.', features: ['Compact Design', 'Economical Operation', 'Balanced Weight', 'Easy Maneuver', 'Long Life'], details: { kullanim: { title: 'Usage', content: 'Agile operation in compact sites.' }, agirlik: { title: 'Weight', content: 'Maximum capacity within legal limits.' }, maliyet: { title: 'Cost', content: 'Economical operation and easy maintenance.' }, performans: { title: 'Performance', content: 'Stable performance in daily intensive use.' } } },
      },
    },
    yariRomork: {
      items: {
        g22: { name: 'ÖZ-G22 Semi-Trailer', description: '22m³ volume with Hardox 450 body and BPW axle for long-distance heavy transport.', features: ['22m³ Volume', 'Hardox 450 Body', '5/6mm Plate', 'BPW Axle (Foreign)', 'Folding Bumper'] },
        l500: { name: 'ÖZ-L500 Semi-Trailer', description: 'Hardox 500 chassis and hydraulic ramp for high-performance operations.', features: ['Özkoç Axle (Domestic)', 'Hardox 500 Chassis', 'Fixed Bumper', 'Hydraulic Ramp', 'Extendable Sides'] },
        m21: { name: 'ÖZ-M21 Semi-Trailer', description: '21m³ volume with lightweight body and automatic tarpaulin system.', features: ['21m³ Volume', 'Özkoç Axle', '3/4mm Plate (Light)', 'Automatic Tarpaulin', 'Sleeve Cover'] },
      },
    },
  },
};

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

for (const locale of locales) {
  const path = join(dir, `${locale}.json`);
  const data = JSON.parse(readFileSync(path, 'utf8'));
  const ext = extensions[locale] || extensions.en;
  deepMerge(data, ext);
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Extended ${locale}.json`);
}
