"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { TrustSignals } from "@/components/TrustSignals";
import { ContactSection } from "@/components/ContactSection";
import { ClaimsSection } from "@/components/ClaimsSection";
import { OfficeGallery } from "@/components/OfficeGallery";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <TrustSignals />
      <ClaimsSection />
      <WhatsAppForm />
      <OfficeGallery />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
