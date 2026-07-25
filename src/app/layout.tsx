import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://aquatown.in";
const siteName = "Aquatown";
const title = "Aquatown – India's Ultimate Inflatable Water Adventure Park | Kadi, Gujarat";
const description =
  "Aquatown is India's biggest inflatable water adventure park coming soon to Kadi, Gujarat. Featuring a Water Go-Kart, giant inflatable obstacles, kids & adult pools, Paintball Arena, Rain-Dance Area, and family-friendly entertainment.";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  title,
  description,
  keywords: [
    "Aquatown",
    "water park Gujarat",
    "inflatable water park India",
    "water adventure park Ahmedabad",
    "water go kart India",
    "kids water park Gujarat",
    "paintball arena Ahmedabad",
    "rain dance water park",
    "water park near Ahmedabad",
    "inflatable obstacle course",
    "family water park Gujarat",
    "coming soon water park 2027",
  ],
  authors: [{ name: "Aquatown", url: siteUrl }],
  creator: "Aquatown",
  publisher: "Aquatown",
  category: "Entertainment, Water Park, Adventure",

  // ── Robots / Indexing ──────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Canonical ──────────────────────────────────────────
  alternates: {
    canonical: siteUrl,
  },

  // ── Open Graph (Facebook / WhatsApp / LinkedIn) ────────
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Aquatown – India's Biggest Inflatable Water Adventure Park",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@aquatownin",
    creator: "@aquatownin",
    images: [`${siteUrl}/og-image.png`],
  },

  // ── App / PWA hints ───────────────────────────────────
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),

  // ── Verification (add your codes when ready) ──────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  // },
};

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  name: siteName,
  description,
  url: siteUrl,
  logo: `${siteUrl}/image.png`,
  image: `${siteUrl}/og-image.png`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "E/4, Vatsalya City, Detroj Road",
    addressLocality: "Kadi",
    addressRegion: "Gujarat",
    postalCode: "382715",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.2980",
    longitude: "72.3375",
  },
  telephone: "+916355918057",
  email: "info@aquatown.in",
  sameAs: [
    "https://www.instagram.com/aquatownindia",
    "https://www.facebook.com/aquatownin",
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Adult Water Inflatable Course", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kids Inflatable Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Water Go Cart", value: true },
    { "@type": "LocationFeatureSpecification", name: "Paintball Arena", value: true },
    { "@type": "LocationFeatureSpecification", name: "Rain-Dance Area", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HMER4ER24L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HMER4ER24L');
          `}
        </Script>
        <Script
          id="json-ld-amusement-park"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-inter bg-cyan-50 text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
