"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TrustSignals() {
    const { t } = useLanguage();

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Ourteam.jpg"
                alt="Rosales Insurance Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                </div>
                <p className="font-bold text-slate-900">{t.trust.badge.title}</p>
                <p className="text-sm text-slate-500">{t.trust.badge.desc}</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-1/2 space-y-8"
          >
            <div>
                 <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-2">{t.trust.eyebrow}</h2>
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                    {t.trust.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                    {t.trust.desc}
                </p>
            </div>

            <div className="space-y-4">
                {t.trust.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="pt-4">
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-600">
                    "{t.trust.quote.text}"
                </blockquote>
                <p className="mt-2 font-bold text-slate-900 pl-4">{t.trust.quote.author}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
