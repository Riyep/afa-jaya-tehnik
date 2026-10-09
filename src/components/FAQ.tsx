"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk cuci AC?",
    answer:
      "Proses cuci AC biasanya memerlukan waktu sekitar 30-60 menit per unit, tergantung pada tingkat kotoran dan jenis AC. Kami membersihkan secara detail termasuk filter, evaporator, dan bagian luar unit untuk memastikan AC Anda kembali bersih dan optimal.",
  },
  {
    question: "Seberapa sering AC harus dibersihkan?",
    answer:
      "Idealnya, AC sebaiknya dicuci setiap 3-4 bulan sekali untuk penggunaan normal. Jika AC digunakan secara intensif atau berada di area berdebu, disarankan untuk membersihkan setiap 2 bulan. Pembersihan rutin membantu menjaga efisiensi pendinginan, menghemat listrik, dan memperpanjang umur AC.",
  },
  {
    question: "Apa tanda-tanda AC perlu ditambah freon?",
    answer:
      "Beberapa tanda AC kekurangan freon antara lain: AC menyala tapi tidak dingin atau kurang dingin, muncul bunga es pada pipa unit outdoor, tagihan listrik meningkat tanpa perubahan penggunaan, dan AC lebih lama untuk mendinginkan ruangan. Jika mengalami gejala ini, segera hubungi kami untuk pengecekan.",
  },
  {
    question: "Apa bedanya tambah freon dan isi freon?",
    answer:
      "Tambah freon berarti menambahkan freon ke dalam sistem AC yang masih memiliki sisa freon, biasanya dilakukan saat freon berkurang sedikit. Isi freon berarti mengosongkan freon lama terlebih dahulu, lalu mengisi ulang dengan freon baru secara penuh. Isi freon direkomendasikan jika freon sudah sangat berkurang atau terkontaminasi.",
  },
  {
    question: "Apakah menggunakan mesin vakum saat pasang AC itu penting?",
    answer:
      "Sangat penting. Mesin vakum berfungsi untuk mengeluarkan udara dan kelembaban dari sistem pipa AC sebelum freon dialirkan. Tanpa proses vakum, udara dan uap air yang terperangkap dapat menyebabkan AC tidak dingin maksimal, kompresor bekerja lebih berat, dan berpotensi merusak komponen AC. Kami selalu menggunakan mesin vakum untuk memastikan pemasangan yang optimal.",
  },
  {
    question: "Berapa lama proses pemasangan AC?",
    answer:
      "Proses pemasangan AC baru umumnya membutuhkan waktu 2-4 jam, tergantung pada kondisi lokasi, jarak antara unit indoor dan outdoor, serta tingkat kesulitan pemasangan. Untuk bongkar pasang (relokasi), waktu yang dibutuhkan bisa lebih lama karena mencakup proses pembongkaran di lokasi lama dan pemasangan di lokasi baru.",
  },
  {
    question: "Apa itu capasitor AC dan kapan harus diganti?",
    answer:
      "Capasitor (kapasitor) AC adalah komponen listrik yang berfungsi untuk menjalankan dan menstabilkan motor kompresor dan fan. Tanda-tanda capasitor rusak antara lain: AC sulit menyala, terdengar bunyi dengung saat dinyalakan, kompresor hidup-mati secara tidak normal, atau AC mati sendiri. Jika mengalami gejala ini, capasitor perlu segera diganti untuk mencegah kerusakan lebih lanjut.",
  },
  {
    question: "Apakah AFA JAYA TEHNIK melayani semua merek AC?",
    answer:
      "Ya, kami melayani semua merek AC populer termasuk Daikin, Panasonic, Samsung, LG, Sharp, Mitsubishi, Gree, Midea, dan merek lainnya. Teknisi kami berpengalaman menangani berbagai jenis AC split, AC cassette, dan AC standing floor.",
  },
  {
    question: "Bagaimana cara memesan layanan AFA JAYA TEHNIK?",
    answer:
      "Anda dapat memesan layanan kami melalui WhatsApp di nomor 081323328565. Cukup kirim pesan dengan jenis layanan yang dibutuhkan, merek dan PK AC, serta alamat Anda. Tim kami akan segera merespons dan menjadwalkan kunjungan teknisi sesuai waktu yang Anda inginkan.",
  },
  {
    question: "Apakah ada garansi untuk setiap layanan?",
    answer:
      "Ya, kami memberikan garansi untuk setiap layanan yang kami kerjakan. Untuk pemasangan AC, kami memberikan garansi kerapian dan kualitas instalasi. Untuk perbaikan dan penggantian komponen, kami memberikan garansi sesuai dengan jenis pekerjaan. Jika terjadi masalah setelah pengerjaan, Anda dapat menghubungi kami dan kami akan segera menindaklanjuti.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-3 mb-6">
            Pertanyaan yang
            <span className="text-primary-600"> Sering Ditanyakan</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Temukan jawaban untuk pertanyaan umum seputar layanan AC kami.
          </p>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mt-6" />
        </div>

        {/* FAQ items */}
        <div className="space-y-3 stagger-children">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-primary-300 shadow-lg shadow-primary-100/50"
                  : "border-gray-200 shadow-sm hover:border-primary-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`font-semibold text-sm sm:text-base pr-4 transition-colors ${
                    openIndex === index ? "text-primary-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 p-1.5 rounded-lg transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary-100 rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-colors ${
                      openIndex === index ? "text-primary-600" : "text-gray-400"
                    }`}
                  />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="border-t border-primary-100 pt-4">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-500 mb-4">Masih punya pertanyaan?</p>
          <a
            href="https://wa.me/6281323328565?text=Halo%20AFA%20JAYA%20TEHNIK%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20AC."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 cursor-pointer"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
