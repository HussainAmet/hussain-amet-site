import { getData } from "@/lib/getData";

export async function generateMetadata({ params }) {
  const siteData = await getData("projects");
  const project = params.project;
  return {
    title: siteData[project].metaTitle,
    description: siteData[project].metaDescription,
    keywords: siteData[project].metaKeywords,
    openGraph: {
      title: siteData[project].OGTitle,
      description: siteData[project].OGDescription,
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
