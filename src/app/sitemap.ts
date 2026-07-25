import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aquatown.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: ["https://aquatown.in/og-image.png"],
    },
  ];
}
