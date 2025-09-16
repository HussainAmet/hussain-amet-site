import React from "react";
import siteData from "@/json/siteData.json";

export async function generateMetadata({ params }) {
  const project = params.project
  return {
    title: siteData.projects[project].metaTitle,
    description: siteData.projects[project].metaDescription,
    keywords: siteData.projects[project].metaKeywords,
    openGraph: {
      title: siteData.projects[project].OGTitle,
      description: siteData.projects[project].OGDescription,
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
