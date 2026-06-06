import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const arPath = join(__dirname, '..', 'messages', 'ar.json');

function deepMerge(target, source) {
    for (const key of Object.keys(source)) {
        if (
            source[key] &&
            typeof source[key] === 'object' &&
            !Array.isArray(source[key]) &&
            target[key] &&
            typeof target[key] === 'object' &&
            !Array.isArray(target[key])
        ) {
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

const patch = {
    seo: {
        legalKvkk: {
            title: 'حماية البيانات الشخصية | Özünlü Damper',
            description: 'سياسة حماية البيانات الشخصية لـ Özünlü Damper وفق KVKK التركي.',
        },
        legalPrivacy: {
            title: 'إشعار الخصوصية | Özünlü Damper',
            description: 'نص توضيحي حول معالجة البيانات الشخصية.',
        },
        legalCookie: {
            title: 'سياسة ملفات تعريف الارتباط | Özünlü Damper',
            description: 'سياسة استخدام ملفات تعريف الارتباط على موقع Özünlü Damper.',
        },
    },
    common: {
        labels: {
            logoAlt: 'شعار Özünlü Damper',
        },
    },
    home: {
        whyChooseUs: {
            cardLabel: 'ضمان Özünlü',
        },
        mapPreview: {
            citiesLabel: 'مدن بها خدمة',
            pointsLabel: 'إجمالي نقاط الخدمة',
            topCities: 'مدن مميزة',
            serviceCount: '{count} نقطة خدمة',
            mapInstruction: 'اختر مدينة لعرض تفاصيل الخدمة.',
            modalEyebrow: 'تفاصيل الخدمة',
            plateCode: 'رمز اللوحة: {code}',
            closeAria: 'إغلاق',
            noService: 'لا توجد خدمة مسجلة في هذه المحافظة.',
        },
        products: {
            viewDetails: 'عرض التفاصيل',
            items: {
                damper: {
                    title: 'قلاب',
                    description: 'هيكل <strong>فولاذ</strong> <hardox></hardox>، <strong>نظام هيدروليكي</strong>، سعة 20-40 م³',
                    features: ['فولاذ Hardox 450', 'نظام هيدروليكي', 'تصميم خفيف'],
                },
                dorse: {
                    title: 'مقطورة',
                    description: 'قوة عالية، عمر طويل، خيارات تصميم مخصصة',
                    features: ['تصميم مخصص', 'متانة عالية', 'صيانة سهلة'],
                },
                kar: {
                    title: 'كاسحة ثلج',
                    description: 'حلول <strong>قلاب</strong> مخصصة حسب احتياجات العملاء',
                    features: ['تصنيع مخصص', 'دعم البحث والتطوير', 'إنتاج سريع'],
                },
            },
        },
        stats: {
            exportCountries: 'دول التصدير',
            steelProcessing: 'معالجة فولاذ سنوية (طن)',
            experience: 'سنوات الخبرة',
        },
    },
    damper: {
        items: {
            d24: {
                name: 'ÖZ-D24 قلاب',
                description: 'تصميم هندسي للظروف الإنشائية القاسية. خيار هيكل <hardox></hardox>، شاسيه معزز وتفريغ سريع.',
                features: ['خيار هيكل Hardox', 'استقرار عالٍ عند التفريغ', 'تفريغ سريع', 'شاسيه معزز', 'صيانة سهلة'],
                details: {
                    hardox: { title: 'هيكل Hardox®', content: 'عمر طويل وصيانة منخفضة في مقاومة التآكل والصدمات.' },
                    sasi: { title: 'الشاسيه', content: 'شاسيه معزز للاستخدام الشاق.' },
                    bosaltim: { title: 'التفريغ', content: 'تفريغ سريع ومُتحكم به بنظام هيدروليكي محسّن.' },
                    verimlilik: { title: 'الكفاءة', content: 'تفاصيل هندسية تعزز استمرارية التشغيل.' },
                },
            },
            d30: {
                name: 'ÖZ-D30 قلاب',
                description: 'أقوى تركيبة هيكل-شاسيه للأحمال عالية الوزن.',
                features: ['استخدام شاق', 'حجم محسّن', 'جدران جانبية متينة', 'سهولة الصيانة', 'معدات اختيارية'],
                details: {
                    kapasite: { title: 'السعة', content: 'حجم محسّن للعمليات عالية الوزن.' },
                    dayanim: { title: 'المتانة', content: 'هيكل مقاوم للصدمات والتآكل.' },
                    donanim: { title: 'المعدات', content: 'مظلة، غطاء، إضاءة وخيارات أخرى.' },
                    uyumluluk: { title: 'التوافق', content: 'بدائل تركيب لمختلف احتياجات الشاسيه.' },
                },
            },
            d21: {
                name: 'ÖZ-D21 قلاب',
                description: 'وزن متوازن وتشغيل اقتصادي للمواقع المحدودة.',
                features: ['تصميم مدمج', 'تشغيل اقتصادي', 'وزن متوازن', 'مناورة سهلة', 'عمر طويل'],
                details: {
                    kullanim: { title: 'الاستخدام', content: 'تشغيل مرن في المواقع المحدودة.' },
                    agirlik: { title: 'الوزن', content: 'أقصى سعة ضمن الحدود القانونية.' },
                    maliyet: { title: 'التكلفة', content: 'تشغيل اقتصادي وصيانة سهلة.' },
                    performans: { title: 'الأداء', content: 'أداء مستقر في الاستخدام اليومي المكثف.' },
                },
            },
        },
    },
    yariRomork: {
        items: {
            g22: {
                name: 'ÖZ-G22 نصف مقطورة',
                description: 'حجم 22 م³ مع هيكل Hardox 450 ومحور BPW للنقل الثقيل لمسافات طويلة.',
                features: ['حجم 22 م³', 'هيكل Hardox 450', 'صفائح 5/6 مم', 'محور BPW (أجنبي)', 'مصد قابل للطي'],
            },
            l500: {
                name: 'ÖZ-L500 نصف مقطورة',
                description: 'شاسيه Hardox 500 ومنحدر هيدروليكي للعمليات عالية الأداء.',
                features: ['محور Özkoç (محلي)', 'شاسيه Hardox 500', 'مصد ثابت', 'منحدر هيدروليكي', 'جوانب قابلة للتمديد'],
            },
            m21: {
                name: 'ÖZ-M21 نصف مقطورة',
                description: 'حجم 21 م³ مع هيكل خفيف ونظام مظلة أوتومatik.',
                features: ['حجم 21 م³', 'محور Özkoç', 'صفائح 3/4 مم (خفيف)', 'مظلة أوتوماتيك', 'غطاء كم'],
            },
        },
    },
    ekEkipmanlar: {
        categories: {
            hidrolik: { title: 'أنظمة هيدروليكية', desc: 'مضخات وأسطوانات وصمامات عالية الضغط للظروف الميدانية القاسية.' },
            dingil: { title: 'المحاور والتعليق', desc: 'أنظمة محاور وتعليق متميزة تشمل BPW وÖzkoç.' },
            fren: { title: 'أنظمة الفرامل', desc: 'مجموعات فرامل متوافقة مع EBS وABS وفق معايير السلامة الأوروبية.' },
            elektrik: { title: 'الكهرباء والإضاءة', desc: 'أنظمة إضاءة LED عالية الوضوح. متوافقة مع ECE R48.' },
            aksesuar: { title: 'ملحقات المقطورات', desc: 'صناديق أدوات، خزانات وقود، رجول هبوط وملحقات مخصصة.' },
            yedekParca: { title: 'قطع الغيار', desc: 'قطع غيار أصلية مضمونة مع خيار شحن في نفس اليوم.' },
        },
        performance: {
            bullets: {
                '0': 'ضمان منتج أصلي معتمد',
                '1': 'توافق واسع مع العلامات والطرازات',
                '2': 'أسعار تنافسية ودفع مرن',
                '3': 'دعم استشاري فني متخصص',
            },
        },
        stats: {
            original: { label: 'ضمان المنتج الأصلي' },
            delivery: { value: 'سريع', label: 'توصيل من المخزون' },
            support: { value: 'دعم', label: 'قبل وبعد البيع' },
        },
    },
    afterSales: {
        services: {
            servisAgi: {
                title: 'شبكة خدمة معتمدة',
                description: '87 نقطة خدمة معتمدة في 50 محافظة في تركيا مع فنيين معتمدين.',
            },
            yedekParca: {
                title: 'قطع غيار أصلية',
                description: 'قطع غيار Özünlü أصلية 100% لأقل وقت توقف للمركبة.',
            },
            garanti: {
                title: 'تغطية الضمان',
                description: 'جميع المنتجات مشمولة بضمان شامل من المصنع.',
            },
            teknikDestek: {
                title: 'دعم فني 24/7',
                description: 'فريق دعم خبراء متاح ليلاً ونهاراً.',
            },
        },
        documents: {
            damperManual: { title: 'دليل مستخدم القلاب', desc: 'تعليمات الاستخدام والسلامة الأساسية لمنتجات القلاب.' },
            dorseManual: { title: 'دليل مستخدم المقطورة', desc: 'دليل المستخدم القياسي لمنتجات نصف المقطورة.' },
            generalManual: { title: 'دليل المنتج والصيانة العام (TR/EN)', desc: 'تفاصيل صيانة وفنية شاملة لجميع طرازات المقطورات.' },
            damperSpec: { title: 'المواصفات الفنية للقلاب (TR/EN)', desc: 'مواصفات فنية خاصة لمركبات القلاب.' },
        },
    },
    contact: {
        form: {
            address: 'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul',
        },
    },
    proposal: {
        fields: {
            emailPh: 'posta@sirket.com',
        },
    },
};

const ar = JSON.parse(readFileSync(arPath, 'utf8'));
deepMerge(ar, patch);
writeFileSync(arPath, JSON.stringify(ar, null, 2) + '\n', 'utf8');
console.log('Patched ar.json');
