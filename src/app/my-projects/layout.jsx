import React from "react";

export async function generateMetadata() {
  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
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
