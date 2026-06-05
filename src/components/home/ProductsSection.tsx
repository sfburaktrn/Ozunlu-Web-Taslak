'use client';



import { motion } from 'framer-motion';

import { ArrowRight, Truck, Package, Settings, Check, LucideIcon } from 'lucide-react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { createRichTextHandlers } from '@/i18n/richText';

const productRichTextHandlers = createRichTextHandlers({
    hardoxClassName: 'inline-block rounded-lg w-14 md:w-20 h-auto mx-0.5 align-middle',
});



const productKeys = ['damper', 'dorse', 'kar'] as const;



const productConfig: Record<typeof productKeys[number], { id: number; icon: LucideIcon; image: string }> = {

    damper: { id: 1, icon: Truck, image: '/products/product-new-1.jpg' },

    dorse: { id: 2, icon: Package, image: '/products/product-new-2.jpg' },

    kar: { id: 3, icon: Settings, image: '/products/product-new-3.jpg' },

};



export default function ProductsSection() {

    const t = useTranslations('home.products');

    const tCommon = useTranslations('common');

    const tLabels = useTranslations('common.labels');



    return (

        <section className="bg-white py-8">

            <div className="container mx-auto px-4">

                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">

                    <div className="absolute inset-0 opacity-5 pointer-events-none">

                        <div className="absolute inset-0" style={{

                            backgroundImage: `

                        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),

                        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)

                    `,

                            backgroundSize: '50px 50px',

                        }} />

                    </div>



                    <div className="container mx-auto px-4 relative z-10">

                        <div className="text-center mb-16">

                            <motion.div

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                className="inline-block mb-4"

                            >

                                <span className="text-primary text-sm font-bold tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">

                                    {t('eyebrow')}

                                </span>

                            </motion.div>



                            <motion.h2

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: 0.1 }}

                                className="text-4xl md:text-6xl font-black text-black mb-6"

                            >

                                {t('title')} <span className="text-primary">{t('titleHighlight')}</span>

                            </motion.h2>



                            <motion.p

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: 0.2 }}

                                className="text-gray-600 text-lg max-w-2xl mx-auto"

                            >

                                {t.rich('subtitle', {
                                    ...productRichTextHandlers,
                                    hardox: createRichTextHandlers({
                                        hardoxClassName: 'inline-block rounded-lg w-16 md:w-24 h-auto mx-1 align-middle',
                                        hardoxWidth: 96,
                                        hardoxHeight: 24,
                                    }).hardox,
                                })}

                            </motion.p>

                        </div>



                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                            {productKeys.map((key, index) => {

                                const product = productConfig[key];

                                const Icon = product.icon;

                                const features = t.raw(`items.${key}.features`) as string[];



                                return (

                                    <motion.div

                                        key={product.id}

                                        initial={{ opacity: 0, y: 30 }}

                                        whileInView={{ opacity: 1, y: 0 }}

                                        viewport={{ once: true }}

                                        transition={{ delay: index * 0.1 }}

                                        whileHover={{ y: -8 }}

                                        className="group relative"

                                    >

                                        <Link href="/urunler" className="block h-full">

                                            <div className="relative h-full rounded-2xl overflow-hidden group cursor-pointer">

                                                <>

                                                    <div className="absolute inset-0 bg-white" />



                                                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#000552] opacity-20 rounded-full blur-3xl animate-pulse"

                                                        style={{ animationDuration: '4s' }} />

                                                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#000552] opacity-30 rounded-full blur-3xl animate-pulse"

                                                        style={{ animationDuration: '5s', animationDelay: '1s' }} />

                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#000552] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-1000" />



                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none"

                                                        style={{

                                                            background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0, 5, 82, 0.5) 0%, rgba(0, 5, 82, 0.2) 30%, transparent 70%)',

                                                        }}

                                                    />

                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"

                                                        style={{

                                                            background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0, 5, 82, 0.3) 0%, transparent 60%)',

                                                        }}

                                                    />



                                                    <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#000552] opacity-15 rounded-full blur-2xl group-hover:opacity-25 transition-opacity" />

                                                    <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#000552] opacity-15 rounded-full blur-2xl group-hover:opacity-25 transition-opacity" />



                                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-200 rounded-t-2xl shadow-sm">

                                                        <div className="absolute inset-0 opacity-20" style={{

                                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',

                                                            backgroundSize: '8px 8px',

                                                        }} />



                                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />



                                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/60 blur-2xl rounded-full" />

                                                    </div>



                                                    <div

                                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 pointer-events-none"

                                                        style={{

                                                            background: 'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 5, 82, 0.6) 0%, rgba(0, 5, 82, 0.3) 40%, transparent 80%)',

                                                        }}

                                                    />

                                                </>



                                                <div className="relative h-80 w-full flex items-end justify-center">

                                                    <div className="absolute inset-0 z-0" />



                                                    <div className="relative w-full h-full flex items-end justify-center z-20">

                                                        <Image

                                                            src={product.image}

                                                            alt={t(`items.${key}.title`)}

                                                            fill

                                                            className="object-contain object-bottom group-hover:scale-110 transition-transform duration-700"

                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                                            onError={(e) => {

                                                                const target = e.target as HTMLImageElement;

                                                                target.style.display = 'none';

                                                                const placeholder = target.parentElement?.querySelector('.image-placeholder');

                                                                if (placeholder) {

                                                                    (placeholder as HTMLElement).style.display = 'flex';

                                                                }

                                                            }}

                                                        />

                                                        <div className="image-placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>

                                                            <Icon className="text-white/20" size={80} />

                                                        </div>

                                                    </div>

                                                </div>



                                                <div className="relative z-10 p-6">

                                                    <div className="flex items-center gap-2 mb-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">

                                                        <div className="relative w-20 h-5">

                                                            <Image

                                                                src="/ozunlu-logo.png"

                                                                alt={tLabels('logoAlt')}

                                                                fill

                                                                className="object-contain object-left rtl:object-right"

                                                            />

                                                        </div>

                                                        <h3 className="text-xl font-black text-black group-hover:text-primary transition-colors pt-0.5">

                                                            {t(`items.${key}.title`)}

                                                        </h3>

                                                    </div>



                                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">

                                                        {t.rich(`items.${key}.description`, {
                                                            ...productRichTextHandlers,
                                                            hardox: createRichTextHandlers({
                                                                hardoxClassName: 'inline-block rounded-lg w-10 h-auto mx-0.5 align-middle',
                                                                hardoxWidth: 60,
                                                                hardoxHeight: 15,
                                                            }).hardox,
                                                        })}

                                                    </p>



                                                    <ul className="space-y-2 mb-6">

                                                        {features.map((feature, idx) => (

                                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">

                                                                <Check size={14} className="text-primary flex-shrink-0" />

                                                                <span>{feature}</span>

                                                            </li>

                                                        ))}

                                                    </ul>



                                                    <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all border-b border-primary/20 pb-1">

                                                        {t('viewDetails')}

                                                        <ArrowRight size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />

                                                    </div>

                                                </div>



                                                <>

                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#000552]/20 via-transparent to-[#000552]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />



                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-[#000552] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none blur-3xl"

                                                        style={{

                                                            background: 'radial-gradient(ellipse at center, rgba(0, 5, 82, 0.4) 0%, transparent 70%)',

                                                        }}

                                                    />



                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">

                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine" />

                                                    </div>

                                                </>

                                            </div>

                                        </Link>

                                    </motion.div>

                                );

                            })}

                        </div>



                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.4 }}

                            className="text-center"

                        >

                            <Link

                                href="/urunler"

                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"

                            >

                                {tCommon('cta.tumUrunler')}

                                <ArrowRight size={20} className="rtl:rotate-180" />

                            </Link>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>

    );

}


