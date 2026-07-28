"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CaptchaWidget } from "./CaptchaWidget";

const WHATSAPP_NUMBER = "16788602265"; // +1 678-860-2265

export function WhatsAppForm() {
  const { t, lang } = useLanguage();
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaValid) return;

    const message = encodeURIComponent(
      `*New Quote Request - Rosales Insurance*\n\n` +
      `*Service:* ${service || "Not specified"}\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n\n` +
      `_Sent from rosales.brainwarelab.app_`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="quick-quote" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-4">
              <MessageCircle className="w-4 h-4" />
              {t.nav.quote} via WhatsApp
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Get a Quick Quote
            </h2>
            <p className="text-slate-600">
              Fill out the form below and we&apos;ll respond on WhatsApp within minutes.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 space-y-5"
          >
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Service Interested In
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900"
              >
                <option value="">Select a service...</option>
                <option value="Auto Insurance">Auto Insurance</option>
                <option value="Home Insurance">Home Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="General Liability">General Liability</option>
                <option value="Umbrella Policy">Umbrella Policy</option>
                <option value="Multiple">Multiple / Not Sure</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="(678) 860-2265"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900"
              />
            </div>

            {/* Anti-Spam CAPTCHA */}
            <CaptchaWidget onVerify={setIsCaptchaValid} />

            <button
              type="submit"
              disabled={!isCaptchaValid}
              className={`w-full font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 ${
                isCaptchaValid
                  ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer hover:shadow-xl"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-75"
              }`}
            >
              <MessageCircle className="w-6 h-6" />
              Send via WhatsApp
              <Send className="w-5 h-5" />
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting, you agree to receive a WhatsApp message from Rosales Insurance.
              Reply STOP to opt out.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
