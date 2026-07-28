"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "16788602265"; // +1 678-860-2265

export function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = lang === "es" 
    ? "¡Hola! Quisiera obtener información sobre un seguro con Rosales Insurance." 
    : "Hello! I would like to get information about an insurance policy with Rosales Insurance.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Tooltip / Quick Card */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 w-72 mb-1 relative"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Rosales Insurance</p>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                {lang === "es" ? "Respuesta en minutos" : "Replies in minutes"}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            {lang === "es"
              ? "👋 ¡Hola! ¿Cómo podemos ayudarte hoy?"
              : "👋 Hi there! How can we help you today?"}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {lang === "es" ? "Iniciar Chat de WhatsApp" : "Start WhatsApp Chat"}
          </a>
        </motion.div>
      )}

      {/* Main Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-2xl transition-all duration-300 group cursor-pointer"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white/20 text-white" />
          
          <span className="hidden md:inline-block font-semibold text-sm pr-1">
            {lang === "es" ? "Chat WhatsApp" : "WhatsApp Chat"}
          </span>

          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[10px] font-bold items-center justify-center">
              1
            </span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
