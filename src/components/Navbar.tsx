"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wind } from "lucide-react";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group cursor-pointer">
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "bg-primary-600" : "bg-white/20"
              }`}
            >
              <Wind
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-primary-200"
                }`}
              />
            </div>
            <div>
              <span
                className={`font-montserrat font-bold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-primary-800" : "text-white"
                }`}
              >
                AFA JAYA TEHNIK
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer ${
                  activeSection === link.href.replace("#", "")
                    ? scrolled
                      ? "bg-primary-100 text-primary-700"
                      : "bg-white/20 text-white"
                    : scrolled
                    ? "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20konsultasi%20tentang%20service%20AC."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 cursor-pointer"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer ${
              scrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-primary-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                activeSection === link.href.replace("#", "")
                  ? "bg-primary-100 text-primary-700"
                  : "text-gray-600 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20konsultasi%20tentang%20service%20AC."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
