"use client";

import { motion } from "framer-motion";
import { Shield, Home, Briefcase, Car, Users, Umbrella, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "auto",
      title: t.services.items.auto.title,
      description: t.services.items.auto.desc,
      icon: Car,
      features: t.services.items.auto.features || [],
    },
    {
      id: "home",
      title: t.services.items.home.title,
      description: t.services.items.home.desc,
      icon: Home,
      features: t.services.items.home.features || [],
    },
    {
      id: "business",
      title: t.services.items.business.title,
      description: t.services.items.business.desc,
      icon: Briefcase,
      features: t.services.items.business.features || [],
    },
    {
      id: "life",
      title: t.services.items.life.title,
      description: t.services.items.life.desc,
      icon: Users,
      features: t.services.items.life.features || [],
    },
    {
      id: "general",
      title: t.services.items.general.title,
      description: t.services.items.general.desc,
      icon: Shield,
      features: t.services.items.general.features || [],
    },
    {
      id: "umbrella",
      title: t.services.items.umbrella.title,
      description: t.services.items.umbrella.desc,
      icon: Umbrella,
      features: t.services.items.umbrella.features || [],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">{t.services.eyebrow}</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
            {t.services.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
                key={service.title}
                href={`/?service=${service.id}#contact`}
                className="block h-full"
            >
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden cursor-pointer"
                >
                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden">
                     <Image 
                        src={`/images/service_${service.id}.png`}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     
                     <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <service.icon className="w-6 h-6 text-white" />
                     </div>
                </div>

                {/* Content */}
                <div className="p-6 pb-0">
                    <h4 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                    </p>
                </div>

                {/* Features List */}
                <div className="px-6 pb-6 flex-grow">
                    <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-500">
                                <Check className="w-4 h-4 text-secondary mr-2 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 group-hover:text-white transition-colors">
                            {t.nav.quote}
                        </span>
                        <ArrowRight className="w-5 h-5 text-secondary group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300" />
                    </div>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
