"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const officePhotos = [
  { src: "/images/office/DSC05758.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05805.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05827.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05837.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05857.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05859.jpg", alt: "Oficina Rosales Insurance" },
  { src: "/images/office/DSC05861.jpg", alt: "Oficina Rosales Insurance" },
];

export function OfficeGallery() {
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(officePhotos.length / 3);

  const nextPage = () => setPage((p) => (p + 1) % totalPages);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const start = page * 3;
  const visible = officePhotos.slice(start, start + 3);

  const openLightbox = (i: number) => setLightboxIndex(start + i);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex + 1) % officePhotos.length);
  };
  const goPrev = () => {
    if (lightboxIndex !== null)
      setLightboxIndex(
        (lightboxIndex - 1 + officePhotos.length) % officePhotos.length
      );
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">
            Our Office
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
            Visit Us
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Come by our office in Lilburn, GA. We&apos;re here to help you with
            all your insurance needs.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Slides container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {visible.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => openLightbox(i)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-slate-100 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              <button
                onClick={nextPage}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:bg-slate-100 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>
            </>
          )}

          {/* Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page
                      ? "bg-primary w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 rotate-45" />
              <ChevronRight className="w-8 h-8 -rotate-45 -mt-3" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className="relative w-full max-w-5xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={officePhotos[lightboxIndex].src}
                alt={officePhotos[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-6 flex gap-2">
              {officePhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === lightboxIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
