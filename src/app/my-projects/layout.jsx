import { getData } from "@/lib/getData";
import React from "react";

export async function generateMetadata() {
  const siteData = getData("my_projects")
  return {
    title: siteData.metaTitle,
    description: siteData.metaDescription,
    keywords: siteData.metaKeywords,
    openGraph: {
      title: siteData.OGTitle,
      description: siteData.OGDescription,
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
