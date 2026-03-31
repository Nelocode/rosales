"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Trust */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Rosales Insurance</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Trust Badges - Guide to Gwinnett & Best of Gwinnett */}
            <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-slate-800/50">
              <div className="relative h-14 w-28 opacity-90 hover:opacity-100 transition-opacity bg-white p-1 rounded-lg">
                <Image
                  src="/images/footer/guide_gwinnett.png"
                  alt="Guide to Gwinnett"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="relative h-16 w-16 opacity-90 hover:opacity-100 transition-opacity rounded-full bg-white p-1">
                <Image
                  src="/images/footer/best_gwinnett.png"
                  alt="Best of Gwinnett Nominee"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>

          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.quick_links}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>&rsaquo;</span> {t.nav.home}</Link></li>
              <li><Link href="#services" className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>&rsaquo;</span> {t.nav.insurance}</Link></li>
              <li><Link href="#claims" className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>&rsaquo;</span> {t.nav.claims}</Link></li>
              <li><Link href="#trust" className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>&rsaquo;</span> {t.nav.about}</Link></li>
              <li><Link href="#contact" className="hover:text-amber-500 transition-colors flex items-center gap-2"><span>&rsaquo;</span> {t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.contact_us}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                 123 Main St, Suite 100<br />
                 Atlanta, GA 30303
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="tel:678-373-1310" className="hover:text-white transition-colors text-slate-400">678-373-1310</a>
              </li>
               <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="mailto:info@rosalesinsurance.com" className="hover:text-white transition-colors text-slate-400">info@rosalesinsurance.com</a>
              </li>
            </ul>
          </div>

          {/* Social / Hours */}
           <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider text-sm">{t.footer.follow_us}</h4>
              <div className="flex gap-3">
                <a href="#" className="p-2.5 bg-slate-800 rounded-lg hover:bg-amber-600 transition-all duration-300 hover:-translate-y-1">
                  <Facebook className="h-5 w-5" />
                </a>
                 <a href="#" className="p-2.5 bg-slate-800 rounded-lg hover:bg-amber-600 transition-all duration-300 hover:-translate-y-1">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">{t.footer.office_hours}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.footer.mon_fri}</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t.footer.sat}</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-xs text-slate-500">&copy; {currentYear} Rosales Insurance Agency. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

