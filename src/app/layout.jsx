import "./globals.css";
import { NavbarContainer } from '@/components/utility/container/Container';
import Header from '@/components/utility/header/Header';
import Footer from "@/components/utility/footer/Footer";
import CustomCursor from "@/components/utility/customCursor/CustomCursor";
import LoaderProvider from "@/components/utility/provider/LoaderProvider";
import siteData from '@/json/siteData.json';

// export const metadata = {
//   title: "Hussain Amet Portfolio",
//   description: "Hussain Amet Web Developer, Software Developer Portfolio",
// };

export async function generateMetadata() {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth xl:scroll-pt-24 scroll-pt-20">
      <head>
        <meta
          name="google-site-verification"
          content="dOTMamZFyXCHILsW_4b_liGAGGEVNWcTFDbKQLxxI6M"
        />
        <link rel="icon" href="/images/header/LogoFav.ico" type="image/x-icon" />
      </head>
      <body className="leading-none text-[var(--white)] no-scrollbar">
        <LoaderProvider>
          <CustomCursor />
          <NavbarContainer>
            <Header />
          </NavbarContainer>
          <div>
            {children}
          </div>
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
