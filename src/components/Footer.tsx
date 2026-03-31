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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-white">Rosales Insurance</h3>
            <p className="text-sm text-slate-400">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.quick_links}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-secondary transition-colors">{t.nav.home}</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">{t.nav.insurance}</Link></li>
              <li><Link href="#claims" className="hover:text-secondary transition-colors">{t.nav.claims}</Link></li>
              <li><Link href="#trust" className="hover:text-secondary transition-colors">{t.nav.about}</Link></li>
              <li><Link href="#contact" className="hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.contact_us}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-1 shrink-0" />
                <span>
                 123 Main St, Suite 100<br />
                 Atlanta, GA 30303
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href="tel:678-373-1310" className="hover:text-white">678-373-1310</a>
              </li>
               <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <a href="mailto:info@rosalesinsurance.com" className="hover:text-white">info@rosalesinsurance.com</a>
              </li>
            </ul>
          </div>

          {/* Social / Hours */}
           <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.follow_us}</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
                <p className="text-sm font-semibold text-white">{t.footer.office_hours}</p>
                <p className="text-sm text-slate-400">{t.footer.mon_fri}: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-slate-400">{t.footer.sat}: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Trusted & Recognized Section - More Relevant */}
        <div className="mt-16 pt-10 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="text-center md:text-left">
               <p className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-1">Authenticity & Quality</p>
               <p className="text-lg font-semibold text-white">Recognized Excellence</p>
            </div>
            <div className="flex items-center gap-12 md:gap-20">
              <div className="relative h-20 w-44 transition-all duration-300 hover:brightness-110">
                <Image
                  src="/images/footer/Guide-photo-placeholder-200x200-0908(1).png"
                  alt="Guide to Gwinnett"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-28 w-28 transition-all duration-300 hover:scale-110">
                <Image
                  src="/images/footer/callomeni_nomine.png"
                  alt="Best of Gwinnett Nominee"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800/30 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} Rosales Insurance Agency. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
