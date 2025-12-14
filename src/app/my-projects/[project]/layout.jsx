export async function generateMetadata({ params }) {
  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
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
