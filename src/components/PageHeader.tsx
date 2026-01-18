"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative bg-slate-900 py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10 z-0" />
        <div className="relative z-10 container mx-auto">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold font-heading text-white mb-4"
            >
                {title}
            </motion.h1>
            {subtitle && (
                <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                     className="text-lg text-slate-300 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    </div>
  );
}
