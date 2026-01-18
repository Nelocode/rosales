"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[650px] md:h-[750px] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
             <Image
                src="/images/rosalesInsurance.jpg"
                alt="Rosales Insurance Team"
                fill
                className="object-cover opacity-30 mix-blend-luminosity scale-105"
                priority
             />
             {/* Rich Gradient: Dark Teal to Navy */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b29] via-slate-900/90 to-blue-950/80" />
             {/* Textural dots overlay */}
             <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-white"
            >
                {/* Brand badge */}
                <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold tracking-wider mb-6 text-secondary uppercase shadow-lg">
                    Trusted Since 2011
                </div>

                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight drop-shadow-lg max-w-4xl">
                    {t.hero.title} <span className="text-secondary">{t.hero.highlight}</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                    {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <a href="#contact">
                        <Button size="lg" className="bg-secondary hover:bg-yellow-600 text-white border-2 border-secondary font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            {t.hero.cta_primary}
                        </Button>
                    </a>
                    <a href="#services">
                        <Button variant="outline" size="lg" className="text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-green-900 font-bold text-lg px-10 py-6 rounded-full transition-all">
                            {t.hero.cta_secondary}
                        </Button>
                    </a>
                </div>
                
                {/* Trust stats */}
                <div className="mt-12 flex items-center gap-8 text-white/80">
                    <div>
                        <p className="text-3xl font-bold text-white">1000+</p>
                        <p className="text-sm">Families Insured</p>
                    </div>
                     <div className="w-[1px] h-10 bg-white/20"></div>
                     <div>
                        <p className="text-3xl font-bold text-white">24/7</p>
                        <p className="text-sm">Claim Support</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
