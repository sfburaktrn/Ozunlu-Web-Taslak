import type { LegalDocument, LegalPageKey } from './types';

const company =
    'ÖZÜNLÜ DAMPER KAROSER VE ÇELİK KONSTRÜKSİYON SANAYİ VE TİCARET LİMİTED ŞİRKETİ';
const shortName = 'Özünlü Damper';
const address =
    'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul';
const email = 'info@ozunlu.com';
const phone = '(0212) 595 46 46';

export const legalTr: Record<LegalPageKey, LegalDocument> = {
    kvkk: {
        title: 'KVKK Aydınlatma ve Kişisel Verilerin Korunması Politikası',
        lastUpdated: '5 Haziran 2025',
        intro: `${company} (“${shortName}” veya “Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi hukuka ve dürüstlük kurallarına uygun, doğru ve gerektiğinde güncel şekilde; belirli, açık ve meşru amaçlar için işlemekte; amaçla bağlantılı, sınırlı ve ölçülü olmasına özen göstermekte ve gerekli süre kadar muhafaza etmekteyiz.`,
        sections: [
            {
                title: '1. Veri Sorumlusu',
                paragraphs: [
                    `Veri Sorumlusu: ${company}`,
                    `Adres: ${address}`,
                    `Telefon: ${phone}`,
                    `E-posta: ${email}`,
                ],
            },
            {
                title: '2. İşlenen Kişisel Veri Kategorileri',
                items: [
                    'Kimlik bilgileri (ad, soyad, unvan)',
                    'İletişim bilgileri (telefon, e-posta, adres)',
                    'Müşteri işlem bilgileri (teklif, sipariş, fatura, garanti kayıtları)',
                    'Finansal bilgiler (ödeme ve faturalama bilgileri)',
                    'İşlem güvenliği bilgileri (IP adresi, log kayıtları, çerez verileri)',
                    'Pazarlama ve tercih bilgileri (açık rıza halinde)',
                    'İnsan kaynakları başvuru bilgileri (özgeçmiş, eğitim, deneyim)',
                ],
            },
            {
                title: '3. Kişisel Verilerin İşlenme Amaçları',
                items: [
                    'Ürün ve hizmetlerimiz hakkında teklif sunulması, satış ve satış sonrası süreçlerin yürütülmesi',
                    'Müşteri ilişkileri yönetimi, teknik destek ve yetkili servis hizmetlerinin sağlanması',
                    'Sözleşmelerin kurulması ve ifası, faturalandırma ve muhasebe işlemleri',
                    'Yasal yükümlülüklerin yerine getirilmesi (vergi, ticaret ve tüketici mevzuatı)',
                    'İletişim taleplerinin yanıtlanması ve kurumsal yazışmaların yürütülmesi',
                    'İnsan kaynakları süreçlerinin yürütülmesi ve iş başvurularının değerlendirilmesi',
                    'Web sitesi güvenliğinin sağlanması, performans analizi ve kullanıcı deneyiminin iyileştirilmesi',
                    'Açık rızanızın bulunması halinde ticari elektronik ileti ve pazarlama faaliyetleri',
                ],
            },
            {
                title: '4. Kişisel Verilerin Aktarılması',
                paragraphs: [
                    'Kişisel verileriniz; yukarıdaki amaçlarla sınırlı olmak üzere iş ortaklarımıza, tedarikçilerimize, yetkili servis ağımıza, hukuken yetkili kamu kurum ve kuruluşlarına, denetim ve danışmanlık firmalarına KVKK’nın 8. ve 9. maddelerinde öngörülen şartlara uygun olarak aktarılabilir.',
                    'Yurt dışına aktarım söz konusu olduğunda, KVKK’nın 9. maddesi ve Kişisel Verileri Koruma Kurulu kararları çerçevesinde gerekli güvenceler sağlanır.',
                ],
            },
            {
                title: '5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi',
                paragraphs: [
                    'Kişisel verileriniz; web sitemiz, teklif ve iletişim formları, e-posta, telefon, fuar ve etkinlikler, sözleşmeler, yetkili servis kayıtları ve benzeri kanallar aracılığıyla otomatik veya otomatik olmayan yollarla toplanmaktadır.',
                ],
                items: [
                    'Kanunlarda açıkça öngörülmesi',
                    'Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması',
                    'Hukuki yükümlülüğümüzün yerine getirilmesi',
                    'Bir hakkın tesisi, kullanılması veya korunması',
                    'Meşru menfaatlerimiz (temel hak ve özgürlüklerinize zarar vermemek kaydıyla)',
                    'Açık rızanız (pazarlama iletişimi ve zorunlu olmayan çerezler için)',
                ],
            },
            {
                title: '6. Saklama Süreleri',
                paragraphs: [
                    'Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri dikkate alınarak saklanır. Sürenin sona ermesi halinde veriler silinir, yok edilir veya anonim hale getirilir.',
                ],
            },
            {
                title: '7. KVKK Kapsamındaki Haklarınız',
                paragraphs: ['KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:'],
                items: [
                    'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
                    'İşlenmişse buna ilişkin bilgi talep etme',
                    'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
                    'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
                    'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
                    'KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme',
                    'Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme',
                    'Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
                    'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme',
                ],
            },
            {
                title: '8. Başvuru Yöntemi',
                paragraphs: [
                    `Haklarınıza ilişkin taleplerinizi ${email} e-posta adresine veya ${address} adresine yazılı olarak iletebilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarifesindeki ücret uygulanabilir.`,
                    'Başvurularınızın reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi halinde Kişisel Verileri Koruma Kurulu’na şikâyet hakkınız saklıdır.',
                ],
            },
        ],
    },
    privacyNotice: {
        title: 'Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni',
        lastUpdated: '5 Haziran 2025',
        intro: `${company} olarak kişisel verilerinizin güvenliğine önem veriyoruz. İşbu Aydınlatma Metni, KVKK’nın 10. maddesi uyarınca kişisel verilerinizin hangi amaçlarla, hangi yöntemlerle işlendiği ve haklarınız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.`,
        sections: [
            {
                title: '1. Veri Sorumlusu Kimliği',
                paragraphs: [
                    `${company}`,
                    `${address}`,
                    `Tel: ${phone} | E-posta: ${email}`,
                ],
            },
            {
                title: '2. Hangi Verileriniz İşlenmektedir?',
                paragraphs: [
                    'Web sitemizdeki iletişim ve teklif formları, telefon görüşmeleri, e-posta yazışmaları, satış ve servis süreçleri ile iş başvuruları kapsamında kimlik, iletişim, müşteri işlem, finans, güvenlik ve talep/şikâyet verileriniz işlenebilmektedir.',
                ],
            },
            {
                title: '3. Verileriniz Neden İşlenmektedir?',
                items: [
                    'Teklif, satış, teslimat ve satış sonrası hizmet süreçlerinin yürütülmesi',
                    'Müşteri memnuniyeti, teknik destek ve garanti işlemlerinin sağlanması',
                    'Yasal yükümlülüklerin yerine getirilmesi',
                    'İletişim taleplerinizin yanıtlanması',
                    'İş başvurularının değerlendirilmesi',
                    'Web sitesi güvenliği ve hizmet kalitesinin artırılması',
                ],
            },
            {
                title: '4. Verileriniz Kimlere Aktarılabilir?',
                paragraphs: [
                    'Verileriniz; lojistik, IT altyapı, muhasebe, hukuk danışmanlığı hizmeti aldığımız tedarikçiler, yetkili servis iş ortaklarımız ve yasal olarak yetkili kamu kurumlarıyla paylaşılabilir.',
                ],
            },
            {
                title: '5. Veri Toplama Yöntemi',
                paragraphs: [
                    'Verileriniz elektronik formlar, sözleşmeler, çağrı merkezi, e-posta, yüz yüze görüşmeler ve web sitesi çerezleri aracılığıyla toplanmaktadır.',
                ],
            },
            {
                title: '6. Haklarınız',
                paragraphs: [
                    'KVKK madde 11 kapsamındaki haklarınızı kullanmak için info@ozunlu.com adresine başvurabilirsiniz. Detaylı bilgi için KVKK Politikamızı inceleyebilirsiniz.',
                ],
            },
        ],
    },
    cookiePolicy: {
        title: 'Çerez Politikası',
        lastUpdated: '5 Haziran 2025',
        intro: `${shortName} web sitesi (www.ozunlu.com) olarak, ziyaretçilerimize daha iyi bir deneyim sunmak, site performansını ölçmek ve güvenliği sağlamak amacıyla çerezler kullanmaktayız. İşbu Çerez Politikası, hangi çerezlerin kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklar.`,
        sections: [
            {
                title: '1. Çerez Nedir?',
                paragraphs: [
                    'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerezler, site tercihlerinizi hatırlamak, oturumunuzu sürdürmek ve site kullanım istatistikleri oluşturmak için kullanılır.',
                ],
            },
            {
                title: '2. Kullandığımız Çerez Türleri',
                items: [
                    'Zorunlu Çerezler: Web sitesinin temel işlevlerinin çalışması için gereklidir. Oturum yönetimi, güvenlik ve dil tercihi bu kapsamdadır.',
                    'Performans / Analitik Çerezler: Ziyaretçi sayısı, sayfa görüntüleme ve trafik kaynaklarını anonim olarak analiz etmemize yardımcı olur (ör. Google Analytics).',
                    'İşlevsel Çerezler: Tercih ettiğiniz dil, bölge veya form bilgilerini hatırlar.',
                    'Pazarlama Çerezleri: Açık rızanız olması halinde, ilgi alanlarınıza uygun içerik ve reklam sunulmasına olanak tanır.',
                ],
            },
            {
                title: '3. Çerezlerin Hukuki Dayanağı',
                paragraphs: [
                    'Zorunlu çerezler, web sitesinin sunulması için gerekli olduğundan meşru menfaat ve sözleşmenin ifası kapsamında kullanılır. Zorunlu olmayan çerezler için tarayıcı ayarlarınız veya çerez tercih panelimiz aracılığıyla açık rızanız alınır.',
                ],
            },
            {
                title: '4. Üçüncü Taraf Çerezleri',
                paragraphs: [
                    'Sitemizde Google Analytics, Google Maps (iletişim sayfası harita embed) ve sosyal medya platformlarına ait üçüncü taraf çerezler kullanılabilir. Bu çerezlerin kullanımı ilgili üçüncü tarafların gizlilik politikalarına tabidir.',
                ],
            },
            {
                title: '5. Çerezleri Nasıl Yönetebilirsiniz?',
                paragraphs: [
                    'Tarayıcınızın ayarlar menüsünden çerezleri silebilir, engelleyebilir veya belirli çerez türlerine izin verebilirsiniz. Çerezleri devre dışı bırakmanız halinde web sitemizin bazı bölümleri düzgün çalışmayabilir.',
                ],
                items: [
                    'Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler',
                    'Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve site verileri',
                    'Safari: Tercihler → Gizlilik → Çerezler',
                    'Edge: Ayarlar → Çerezler ve site izinleri',
                ],
            },
            {
                title: '6. Saklama Süreleri',
                paragraphs: [
                    'Oturum çerezleri tarayıcı kapatıldığında silinir. Kalıcı çerezler, türüne göre birkaç gün ile 24 ay arasında cihazınızda saklanabilir.',
                ],
            },
            {
                title: '7. İletişim',
                paragraphs: [
                    `Çerez Politikamız hakkında sorularınız için ${email} adresinden veya ${phone} numarasından bize ulaşabilirsiniz.`,
                ],
            },
        ],
    },
};
