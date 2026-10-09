import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://www.afajayatehnik.com"),
  title: {
    default: "AFA JAYA TEHNIK - Service AC Surabaya | Pasang, Cuci, Isi Freon AC",
    template: "%s | AFA JAYA TEHNIK",
  },
  description:
    "Jasa service AC terpercaya di Surabaya. Layanan cuci AC, pasang AC, bongkar pasang, isi freon, dan perbaikan AC dengan teknisi berpengalaman. Harga terjangkau, hasil rapi dan terpercaya. Hubungi 081323328565.",
  keywords: [
    "service AC Surabaya",
    "cuci AC Surabaya",
    "pasang AC Surabaya",
    "isi freon AC Surabaya",
    "bongkar pasang AC",
    "jasa AC Surabaya",
    "teknisi AC Surabaya",
    "AFA JAYA TEHNIK",
    "service AC murah Surabaya",
    "reparasi AC Surabaya",
    "AC split Surabaya",
    "tambah freon AC",
    "perbaikan AC Surabaya",
  ],
  authors: [{ name: "AFA JAYA TEHNIK" }],
  creator: "AFA JAYA TEHNIK",
  publisher: "AFA JAYA TEHNIK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "http://www.afajayatehnik.com",
    siteName: "AFA JAYA TEHNIK",
    title: "AFA JAYA TEHNIK - Service AC Surabaya Terpercaya",
    description:
      "Jasa service AC terpercaya di Surabaya. Cuci AC, pasang AC, isi freon, bongkar pasang AC dengan teknisi berpengalaman.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AFA JAYA TEHNIK - Service AC Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFA JAYA TEHNIK - Service AC Surabaya",
    description:
      "Jasa service AC terpercaya di Surabaya. Teknisi berpengalaman, harga terjangkau.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "http://www.afajayatehnik.com",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Surabaya" />
        <meta name="geo.position" content="-7.2575;112.7521" />
        <meta name="ICBM" content="-7.2575, 112.7521" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AFA JAYA TEHNIK",
              description:
                "Jasa service AC terpercaya di Surabaya. Layanan cuci AC, pasang AC, bongkar pasang, isi freon, dan perbaikan AC.",
              url: "http://www.afajayatehnik.com",
              telephone: "+6281323328565",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kapas Madya IIF No.7, Gading",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                postalCode: "60134",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.2575,
                longitude: 112.7521,
              },
              openingHours: "Mo-Su 08:00-18:00",
              priceRange: "Rp 60.000 - Rp 450.000",
              image: "http://www.afajayatehnik.com/og-image.jpg",
              sameAs: ["https://wa.me/6281323328565"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Layanan Service AC",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cuci AC",
                      description: "Pembersihan unit AC secara detail",
                    },
                    price: "60000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pasang AC",
                      description: "Pemasangan AC dengan alat mesin vakum",
                    },
                    price: "250000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Isi Freon AC",
                      description: "Pengisian freon R22/R32/R410",
                    },
                    price: "300000",
                    priceCurrency: "IDR",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa biaya cuci AC di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Biaya cuci AC mulai dari Rp 60.000 untuk AC 0,5-1 PK dan Rp 80.000 untuk AC 2 PK.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa biaya pasang AC di Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Biaya pasang AC mulai dari Rp 250.000 untuk AC 0,5-1 PK dan Rp 350.000 untuk AC 1,5-2 PK.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah AFA JAYA TEHNIK melayani area Surabaya?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami melayani pengerjaan di seluruh wilayah Surabaya dan sekitarnya.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
      </body>
    </html>
  );
}
