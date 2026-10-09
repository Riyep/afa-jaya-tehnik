"use client";

import { useState } from "react";
import {
  SprayCan,
  Hammer,
  ArrowLeftRight,
  Thermometer,
  Droplets,
  Wrench,
  Zap,
} from "lucide-react";

interface Service {
  name: string;
  price: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  services: Service[];
}

const categories: Category[] = [
  {
    id: "cuci",
    title: "Cuci AC",
    icon: SprayCan,
    color: "from-sky-400 to-blue-500",
    services: [
      { name: "Cuci AC 0,5 - 1 PK", price: "Rp 60.000" },
      { name: "Cuci AC 2 PK", price: "Rp 80.000" },
    ],
  },
  {
    id: "pasang",
    title: "Pasang AC",
    icon: Hammer,
    color: "from-blue-500 to-indigo-600",
    services: [
      { name: "Pasang AC 0,5 - 1 PK", price: "Rp 250.000" },
      { name: "Pasang AC 1,5 - 2 PK", price: "Rp 350.000" },
    ],
  },
  {
    id: "bongkar-pasang",
    title: "Bongkar Pasang AC",
    icon: ArrowLeftRight,
    color: "from-indigo-500 to-purple-600",
    services: [
      { name: "Bongkar Pasang AC 0,5 - 1 PK", price: "Rp 350.000" },
      { name: "Bongkar Pasang AC 1,5 - 2 PK", price: "Rp 450.000" },
    ],
  },
  {
    id: "tambah-freon",
    title: "Tambah Freon",
    icon: Thermometer,
    color: "from-emerald-400 to-teal-500",
    services: [
      { name: "Tambah Freon R22/32/410 (0,5 - 1 PK)", price: "Rp 180.000" },
      { name: "Tambah Freon R22/32/410 (2 PK)", price: "Rp 230.000" },
    ],
  },
  {
    id: "isi-freon",
    title: "Isi Freon",
    icon: Droplets,
    color: "from-teal-400 to-cyan-500",
    services: [
      { name: "Isi Freon R22/32/410 (0,5 - 1 PK)", price: "Rp 300.000" },
      { name: "Isi Freon R22/32/410 (2 PK)", price: "Rp 400.000" },
    ],
  },
  {
    id: "bongkar",
    title: "Bongkar AC",
    icon: Wrench,
    color: "from-orange-400 to-red-500",
    services: [{ name: "Bongkar AC", price: "Rp 100.000" }],
  },
  {
    id: "capasitor",
    title: "Capasitor AC",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    services: [
      { name: "Capasitor AC 0,5 - 1 PK", price: "Rp 250.000" },
      { name: "Capasitor AC 1,5 - 2 PK", price: "Rp 375.000" },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("cuci");

  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-primary-50/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Layanan Kami</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-6">
            Daftar Harga
            <span className="text-primary-600"> Layanan</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Harga terjangkau dengan kualitas terjamin. Pilih kategori layanan yang Anda butuhkan.
          </p>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 stagger-children">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active category display */}
        <div className="max-w-3xl mx-auto reveal-scale">
          {/* Category header card */}
          <div className={`bg-gradient-to-r ${active.color} rounded-2xl p-6 sm:p-8 text-white mb-6 shadow-xl`}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <active.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-2xl">{active.title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {active.services.length} layanan tersedia
                </p>
              </div>
            </div>
          </div>

          {/* Service items */}
          <div className="space-y-3">
            {active.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <active.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{service.name}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-montserrat font-bold text-base sm:text-xl text-primary-600">
                    {service.price}
                  </span>
                  <a
                    href={`https://wa.me/6281323328565?text=${encodeURIComponent(`Halo AFA JAYA TEHNIK, saya ingin pesan layanan ${service.name} (${service.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 hover:bg-green-600 text-green-700 hover:text-white border border-green-200 hover:border-green-600 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20order%20layanan%20AC."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.344 0-4.507-.807-6.213-2.156l-.435-.345-3.005 1.008 1.008-3.005-.345-.435A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Pesan Layanan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
