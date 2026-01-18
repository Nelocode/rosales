"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Camera, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";

export function ClaimsSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: AlertTriangle,
      title: t.claims.step1.title,
      desc: t.claims.step1.desc,
    },
    {
      icon: Camera,
      title: t.claims.step2.title,
      desc: t.claims.step2.desc,
    },
    {
      icon: Phone,
      title: t.claims.step3.title,
      desc: t.claims.step3.desc,
    },
  ];

  return (
    <section id="claims" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">{t.claims.eyebrow}</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
            {t.claims.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.claims.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:border-primary transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold font-heading text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-5">
           <a href="tel:678-373-1310"> 
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                {t.claims.cta_call}
            </Button>
           </a>
        </div>
      </div>
    </section>
  );
}
