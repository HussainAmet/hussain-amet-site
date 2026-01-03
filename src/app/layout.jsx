import "./globals.css";
import { NavbarContainer, PageContainer } from '@/components/utility/container/Container';
import Header from '@/components/utility/header/Header';
import Footer from "@/components/utility/footer/Footer";
import dynamic from "next/dynamic";
import { getData } from "@/lib/getData";
import MainContent from "@/components/MainContent";

export async function generateMetadata() {
  const siteData = await getData("home");
  return {
    title: {
      default: siteData.metaTitle,
      template: "%s | Hussain Amet Portfolio",
    },
    description: siteData.metaDescription,
    keywords: siteData.metaKeywords,
    metadataBase: new URL(siteData.url),
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
    }
  };
}

const CustomCursor = dynamic(() => import("@/components/utility/customCursor/CustomCursor"), {
  ssr: false
});

export default async function RootLayout({ children }) {
  const siteData = await getData("socialLinks");
  return (
    <html lang="en" className="scroll-smooth xl:scroll-pt-24 scroll-pt-20">
      <head>
        <meta
          name="google-site-verification"
          content="dOTMamZFyXCHILsW_4b_liGAGGEVNWcTFDbKQLxxI6M"
        />
        <link rel="icon" href="/images/header/LogoWithBGFav.ico" type="image/x-icon" />
      </head>
      <body className="leading-none text-[var(--white)] no-scrollbar">
        <CustomCursor />
        <NavbarContainer>
          <Header siteData={siteData} />
        </NavbarContainer>
        <PageContainer>
          <MainContent>
            {children}
          </MainContent>
        </PageContainer>
        <Footer />
      </body>
    </html>
  );
}
