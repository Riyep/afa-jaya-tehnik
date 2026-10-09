"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blurred circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative AC vent lines */}
        <div className="absolute top-20 left-10 space-y-2 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-0.5 bg-white/40 rounded-full"
              style={{ width: `${60 - i * 10}px` }}
            />
          ))}
        </div>
        <div className="absolute bottom-32 right-10 space-y-2 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-0.5 bg-white/40 rounded-full"
              style={{ width: `${60 - i * 10}px` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 reveal">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-200 text-sm font-medium">Melayani Surabaya & Sekitarnya</span>
        </div>

        {/* Title */}
        <h1 className="font-montserrat font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight reveal">
          AFA JAYA
          <br />
          <span className="text-primary-300">TEHNIK</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-primary-200 font-light mb-10 reveal">
          Service AC Surabaya
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20konsultasi%20tentang%20service%20AC."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 cursor-pointer text-lg"
          >
            Hubungi via WhatsApp
          </a>
          <a
            href="#layanan"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("layanan");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
              }
            }}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer text-lg"
          >
            Lihat Layanan
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
