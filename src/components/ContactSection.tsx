"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { ChatBot } from "./ChatBot";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wide mb-2">{t.contact.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            {t.contact.title}
          </h3>
          <p className="text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                    <h4 className="text-xl font-bold font-heading text-white mb-6">{t.contact.info_title}</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-lg">
                                <MapPin className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Visit Us</p>
                                <p className="text-slate-400">123 Main St, Suite 100<br/>Atlanta, GA 30303</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-lg">
                                <Phone className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Call Us</p>
                                <a href="tel:678-373-1310" className="text-slate-400 hover:text-amber-500 transition-colors">678-373-1310</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-lg">
                                <Mail className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Email Us</p>
                                <a href="mailto:info@rosalesinsurance.com" className="text-slate-400 hover:text-amber-500 transition-colors">info@rosalesinsurance.com</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Office Hours</p>
                                <p className="text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Conversational Chat Bot */}
            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
            >
                <Suspense fallback={<div className="h-[600px] bg-slate-100 rounded-2xl animate-pulse"/>}>
                    <ChatBot />
                </Suspense>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
