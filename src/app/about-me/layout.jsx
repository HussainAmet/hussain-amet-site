export async function generateMetadata() {

  const siteData = await fetch(process.env.NEXT_PUBLIC_SITE_DATA_URL, {cache: 'no-store'})
    .then(res => res.json())
    .catch(() => null);
  
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
