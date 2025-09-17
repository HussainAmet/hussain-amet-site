import React from "react";
import siteData from "@/json/siteData.json";

export async function generateMetadata() {
  return {
    title: siteData.my_projects.metaTitle,
    description: siteData.my_projects.metaDescription,
    keywords: siteData.my_projects.metaKeywords,
    openGraph: {
      title: siteData.my_projects.OGTitle,
      description: siteData.my_projects.OGDescription,
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
