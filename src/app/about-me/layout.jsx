import React from "react";
import siteData from "@/json/siteData.json";

export async function generateMetadata() {
  return {
    title: siteData.about.metaTitle,
    description: siteData.about.metaDescription,
    keywords: siteData.about.metaKeywords,
    openGraph: {
      title: siteData.about.OGTitle,
      description: siteData.about.OGDescription,
      url: siteData.url,
      siteName: siteData.OGSiteName,
      images: [
        {
          url: siteData.OGImageUrl,
          width: 1200,
          height: 630,
          alt: "logo",
        },
      ],
      type: "website",
    },
  };
}

export default function RootLayout({ children }) {
  return children;
}
