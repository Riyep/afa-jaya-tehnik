"use client";

import { useState, useEffect, useCallback } from "react";
import { Shield, Wrench, Sparkles, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Wrench,
    title: "Teknisi Berpengalaman",
    desc: "Tim teknisi profesional dengan pengalaman bertahun-tahun menangani berbagai jenis dan merek AC.",
  },
  {
    icon: Shield,
    title: "Garansi Kualitas",
    desc: "Kami menjamin kerapian hasil pemasangan dan kualitas reparasi yang terpercaya.",
  },
  {
    icon: Sparkles,
    title: "Mesin Vakum Modern",
    desc: "Menggunakan alat mesin vakum untuk memastikan pemasangan AC yang optimal dan tahan lama.",
  },
  {
    icon: MapPin,
    title: "Area Surabaya",
    desc: "Melayani pengerjaan di seluruh wilayah Surabaya dan sekitarnya dengan respons cepat.",
  },
];

// Slide images - user can replace these files in public/images/ with real photos (.jpg/.png/.webp)
const slides = [
  { src: "/images/about-1.svg", alt: "Teknisi AFA JAYA TEHNIK sedang memasang AC" },
  { src: "/images/about-2.svg", alt: "Proses cuci AC oleh teknisi profesional" },
  { src: "/images/about-3.svg", alt: "Peralatan mesin vakum modern" },
  { src: "/images/about-4.svg", alt: "Hasil pemasangan AC yang rapi dan terpercaya" },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Tentang Kami</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-6">
            Solusi Terpercaya untuk
            <br className="hidden sm:block" />
            <span className="text-primary-600"> AC Anda</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Slider */}
          <div
            className="relative reveal-left"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-100 shadow-2xl">
              {/* Placeholder colored div when no images available */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Wrench className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium opacity-90">
                    {slides[current].alt}
                  </p>
                  <p className="text-sm mt-2 opacity-70">Gambar {current + 1} / {slides.length}</p>
                </div>
              </div>

              {/* Actual image */}
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                unoptimized
                className="object-cover slide-in"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all cursor-pointer"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all cursor-pointer"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      i === current
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Lihat gambar ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-200 rounded-2xl -z-10" />
          </div>

          {/* Text content */}
          <div className="reveal-right">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kami menawarkan layanan pemasangan AC dengan alat mesin vakum yang
              dikerjakan oleh <strong className="text-gray-800">teknisi berpengalaman</strong> dan
              tersertifikasi.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kami menjamin <strong className="text-gray-800">kerapian hasil pemasangan</strong> dan
              reparasi unit AC yang terpercaya. Setiap pekerjaan dilakukan dengan
              standar kualitas tinggi untuk memastikan unit AC Anda berfungsi
              optimal.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Kami membersihkan unit AC Anda dengan detail menggunakan peralatan
              modern, dan melayani pengerjaan di wilayah{" "}
              <strong className="text-gray-800">Surabaya dan sekitarnya</strong>
              {" "}dengan respons cepat dan harga yang kompetitif.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-primary-50/70 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary-600 rounded-lg shrink-0 group-hover:bg-primary-700 transition-colors">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-800 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
