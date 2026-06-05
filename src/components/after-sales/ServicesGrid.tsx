'use client';



import { motion } from 'framer-motion';

import { Wrench, Shield, Cog, Headphones, LucideIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';



const serviceKeys = ['servisAgi', 'yedekParca', 'garanti', 'teknikDestek'] as const;



const serviceConfig: Record<typeof serviceKeys[number], { icon: LucideIcon; color: string }> = {

    servisAgi: { icon: Wrench, color: 'bg-blue-500' },

    yedekParca: { icon: Cog, color: 'bg-orange-500' },

    garanti: { icon: Shield, color: 'bg-green-500' },

    teknikDestek: { icon: Headphones, color: 'bg-purple-500' },

};



export default function ServicesGrid() {

    const t = useTranslations('afterSales.services');



    return (

        <section id="hizmetler" className="py-20 px-6">

            <div className="max-w-[1600px] mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

                    <div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#000552] mb-4 tracking-tight">

                            {t('title')}

                        </h2>

                        <p className="text-gray-500 text-lg max-w-xl">{t('subtitle')}</p>

                    </div>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {serviceKeys.map((key, index) => {

                        const service = serviceConfig[key];

                        const Icon = service.icon;



                        return (

                            <motion.div

                                key={key}

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: index * 0.1 }}

                                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"

                            >

                                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>

                                    <Icon size={28} />

                                </div>



                                <h3 className="text-xl font-bold text-[#000552] mb-3 group-hover:text-primary transition-colors">

                                    {t(`${key}.title`)}

                                </h3>



                                <p className="text-gray-500 leading-relaxed text-sm">

                                    {t.rich(`${key}.description`, defaultRichTextHandlers)}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}


