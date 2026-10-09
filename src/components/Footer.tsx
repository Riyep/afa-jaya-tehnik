"use client";

import { useState, useEffect } from "react";
import { Wind } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-700 rounded-lg">
                <Wind className="w-5 h-5 text-primary-300" />
              </div>
              <span className="font-montserrat font-bold text-lg">AFA JAYA TEHNIK</span>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed">
              Jasa service AC terpercaya di Surabaya. Teknisi berpengalaman dengan harga terjangkau.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {["Beranda", "Tentang", "Layanan", "FAQ", "Kontak"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-primary-300 text-sm">
              <li>Kapas Madya IIF No.7, Gading</li>
              <li>Kec. Tambaksari, Surabaya 60134</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/6281323328565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
                >
                  WA: 0813-2332-8565
                </a>
              </li>
              <li>Buka: 08.00 - 18.00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 text-center">
          <p className="text-primary-400 text-sm">
            © {year} AFA JAYA TEHNIK. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
