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
const title =
  "Aquatown – India's Largest Inflatable Water Adventure Park | Water Park in Gujarat";
const description =
  "Aquatown is India's largest inflatable water adventure park coming soon to Kalol, Gujarat. Featuring India's first Water Go-Kart, giant inflatable obstacle courses, kids splash zone, adult water pools, Paintball Arena, Rain-Dance Area, and family-friendly entertainment. The best water park near Ahmedabad for weekend getaways and summer vacations.";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  title,
  description,
  keywords: [
    "Aquatown",
    "Aquatown Water Park",
    "Aquatown Gujarat",
    "Aquatown India",
    "Water Park",
    "Adventure Water Park",
    "Inflatable Water Park",
    "Water Adventure Park",
    "Family Water Park",
    "Water Go Kart",
    "Water Go Kart India",
    "Inflatable Adventure Park",
    "Inflatable Obstacle Course",
    "Giant Water Slides",
    "Kids Water Park",
    "Kids Splash Zone",
    "Adult Water Pool",
    "Floating Water Park",
    "Water Park in Gujarat",
    "Water Park Near Ahmedabad",
    "Best Water Park in Gujarat",
    "Best Water Park in India",
    "Weekend Getaway Gujarat",
    "Family Picnic Gujarat",
    "Adventure Park Gujarat",
    "India's Largest Inflatable Water Park",
    "India's First Water Go Kart",
    "Best Summer Destination in Gujarat",
    "Aquatown Water Adventure Park",
    "Aquatown Attractions",
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

  // ── Icons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // ── Manifest ──────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Verification (add your codes when ready) ──────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  // },
};

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  name: "Aquatown – India's Largest Inflatable Water Adventure Park",
  alternateName: "Aquatown Water Park",
  description:
    "Aquatown is India's largest inflatable water adventure park in Kalol, Gujarat. Featuring India's first Water Go-Kart, giant inflatable obstacle courses, kids splash zone, adult water pools, Paintball Arena, Rain-Dance Area, and the best family-friendly water entertainment near Ahmedabad.",
  url: siteUrl,
  logo: `${siteUrl}/image.png`,
  image: `${siteUrl}/og-image.png`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Survay 392, Khatraj Kalol Rd, beside sherisa, canal",
    addressLocality: "Kalol, Sherisa",
    addressRegion: "Gujarat",
    postalCode: "382725",
    addressCountry: "IN",
  },
  hasMap: "https://www.google.com/search?kgmid=%2Fg%2F11zwzp5lgy&hl=en-IN&q=Aquatown",
  telephone: "+916355918057",
  email: "info@aquatown.in",
  sameAs: [
    "https://www.instagram.com/aquatownindia",
    "https://www.facebook.com/aquatownin",
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Adult Water Inflatable Course", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kids Inflatable Splash Zone", value: true },
    { "@type": "LocationFeatureSpecification", name: "Water Go Kart – India's First", value: true },
    { "@type": "LocationFeatureSpecification", name: "Paintball Arena", value: true },
    { "@type": "LocationFeatureSpecification", name: "Rain-Dance Area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Giant Inflatable Water Slides", value: true },
    { "@type": "LocationFeatureSpecification", name: "Floating Water Park", value: true },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aquatown Attractions & Activities",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Go-Kart Racing",
          description:
            "India's first water-based go-kart racing experience built for speed and excitement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inflatable Water Obstacle Course",
          description:
            "Massive floating inflatable obstacle course for adults and adventure seekers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Splash Zone",
          description:
            "Safe, dedicated children's water play area with inflatable slides and splash games.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paintball Arena",
          description:
            "Action-packed paintball battle arena for competitive fun.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rain-Dance Area",
          description:
            "Dance under refreshing rain showers with spectacular lighting and music.",
        },
      },
    ],
  },
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
