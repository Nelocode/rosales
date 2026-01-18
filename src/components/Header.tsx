"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();
  const [activeHash, setActiveHash] = useState("");

  const menuItems = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.insurance, href: "#services" },
    { name: t.nav.claims, href: "#claims" },
    { name: t.nav.contact, href: "#contact" },
    { name: t.nav.about, href: "#trust" },
  ];
  
  // Hash listener to update active state
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="relative w-full z-50 bg-white">
      {/* TOP ROW: Logo and Utilities */}
      <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
         {/* Logo Container - Left Aligned */}
        <Link href="/" className="relative block w-40 md:w-56 h-16 md:h-24 shrink-0 hover:opacity-90 transition-opacity">
           <Image 
                src="/images/logo.gif" 
                alt="Rosales Insurance" 
                fill 
                className="object-contain object-left"
                priority
                unoptimized
           />
        </Link>
        
        {/* Helper Actions */}
        <div className="hidden md:flex items-center gap-6">
            <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary uppercase tracking-wide transition-colors group"
            >
                <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                     <Globe className="h-5 w-5" />
                </div>
                <span>{lang}</span>
            </button>
             <a href="#contact">
                <Button className="bg-secondary hover:bg-yellow-600 text-white font-bold shadow-md hover:shadow-lg transition-all rounded-full px-8 text-lg">
                    {t.nav.quote}
                </Button>
             </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
             <button
                onClick={toggleLang}
                className="text-slate-600 font-bold uppercase"
            >
                {lang}
            </button>
            <button
            className="p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
        </div>
      </div>

      {/* BOTTOM ROW: "Flecha" Style Nav Bar */}
      {/* The background is the primary color (Green) */}
      <div className="hidden md:block w-full bg-primary border-t-4 border-secondary shadow-lg">
          <div className="container mx-auto">
              <nav className="flex items-stretch">
                  {menuItems.map((item, index) => {
                      const isActive = activeHash === item.href || (item.href === "#" && !activeHash);
                      return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveHash(item.href)}
                            className="relative group flex-1"
                        >
                            <div className={clsx(
                                "relative w-full h-full px-4 py-4 text-center text-white font-medium text-base tracking-wide transition-all uppercase flex items-center justify-center skew-x-[-20deg]",
                                "hover:bg-[#1b5e5b] border-r border-white/10",
                                isActive && "bg-[#1b5e5b] text-secondary shadow-inner"
                            )}>
                                {/* Un-skew text */}
                                <span className={clsx("skew-x-[20deg] drop-shadow-sm", isActive && "text-secondary")}>
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                      );
                  })}
              </nav>
          </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-slate-50 absolute w-full shadow-xl"
          >
            <div className="container py-6 flex flex-col gap-2 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-bold text-slate-700 hover:bg-white hover:text-primary rounded-lg transition-colors border-b border-slate-100 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200">
                 <Button className="w-full bg-secondary text-white font-bold h-12 text-lg hover:bg-yellow-600">{t.nav.quote}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
