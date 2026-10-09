"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Kontak</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-6">
            Hubungi
            <span className="text-primary-600"> Kami</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Siap melayani kebutuhan AC Anda. Hubungi kami untuk konsultasi gratis.
          </p>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="space-y-6 reveal-left">
            {/* Company name */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-montserrat font-bold text-2xl text-primary-800 mb-1">
                AFA JAYA TEHNIK
              </h3>
              <p className="text-gray-500 text-sm">Service AC Profesional Surabaya</p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-600 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Kapas Madya IIF No.7, Gading,
                    <br />
                    Kec. Tambaksari, Surabaya,
                    <br />
                    Jawa Timur 60134
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Guq2sz6Y5Wjna7Vd7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm mt-2 cursor-pointer"
                  >
                    Buka di Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20konsultasi%20tentang%20service%20AC."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-green-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-500 transition-colors">
                  <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 text-lg font-medium">0813-2332-8565</p>
                  <p className="text-green-600 text-sm mt-1 font-medium">
                    Klik untuk chat langsung →
                  </p>
                </div>
              </div>
            </a>

            {/* Operating hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-600 transition-colors">
                  <Clock className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">Setiap Hari</p>
                  <p className="text-primary-600 font-bold text-lg">08.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="reveal-right">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Kapas+Madya+IIF+No.7,+Gading,+Kec.+Tambaksari,+Surabaya,+Jawa+Timur+60134&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi AFA JAYA TEHNIK di Google Maps"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
