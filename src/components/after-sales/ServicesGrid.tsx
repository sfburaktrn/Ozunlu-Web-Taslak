'use client';

import { motion } from 'framer-motion';
import { Wrench, Shield, Clock, Cog, Phone, Headphones } from 'lucide-react';

const services = [
    {
        icon: Wrench,
        title: 'Yetkili Servis Ağı',
        description: 'Türkiye genelinde yaygın yetkili servis noktalarımızla, aracınızın bakım ve onarım işlemlerini uzman ellere emanet edin.',
        color: 'bg-blue-500'
    },
    {
        icon: Cog,
        title: 'Orijinal Yedek Parça',
        description: 'Aracınızın performansını ve ömrünü korumak için %100 orijinal Özünlü yedek parçalarını tercih edin. Hızlı tedarik garantisi.',
        color: 'bg-orange-500'
    },
    {
        icon: Shield,
        title: 'Garanti Kapsamı',
        description: 'Üretim hatalarına karşı kapsamlı garanti paketlerimizle yatırımlarınızı koruma altına alıyoruz. Güvenle sürün.',
        color: 'bg-green-500'
    },
    {
        icon: Headphones,
        title: '7/24 Teknik Destek',
        description: 'Yolda kaldığınızda veya teknik bir sorunda, uzman destek ekibimiz bir telefon uzağınızda. Kesintisiz hizmet.',
        color: 'bg-purple-500'
    }
];

export default function ServicesGrid() {
    return (
        <section id="hizmetler" className="py-20 px-6">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#000552] mb-4 tracking-tight">
                            HİZMETLERİMİZ
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl">
                            Aracınızın değerini koruyan ve operasyonel verimliliğinizi artıran profesyonel çözümler.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-[#000552] mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-sm">
                                {service.description}
                            </p>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
