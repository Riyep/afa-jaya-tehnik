"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[240px] animate-[slideIn_0.3s_ease]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup tooltip"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          <p className="text-gray-700 text-sm">
            Butuh bantuan service AC? 💬
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Chat langsung via WhatsApp
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20konsultasi%20tentang%20service%20AC."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse-glow cursor-pointer"
        aria-label="Hubungi kami via WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.344 0-4.507-.807-6.213-2.156l-.435-.345-3.005 1.008 1.008-3.005-.345-.435A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}
