import "./globals.css";
import { NavbarContainer } from '@/components/utility/container/Container';
import Header from '@/components/utility/header/Header';
import Footer from "@/components/utility/footer/Footer";
import CustomCursor from "@/components/utility/customCursor/CustomCursor";
import Loading from "./loading";
import LoaderProvider from "@/components/utility/provider/LoaderProvider";

export const metadata = {
  title: "Hussain Amet Portfolio",
  description: "Hussain Amet Web Developer, Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="leading-none text-[var(--white)]">
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
